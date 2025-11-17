<?php
/**
 * Vvveb Admin Password Reset
 * Run this file once to reset admin password
 */

// Include Vvveb bootstrap
define('APP', 'admin');
require_once __DIR__ . '/index.php';

use Vvveb\System\User\Admin;

// New password
$new_password = 'admin123'; // Change this to whatever you want

// Hash the password
$hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

// Update in database
$db = \Vvveb\System\Db::getInstance();

$result = $db->query("
    UPDATE " . $db->prefix . "admin
    SET password = :password
    WHERE admin_id = 1
", ['password' => $hashed_password]);

if ($result) {
    echo "<h2>✅ Password Reset Successful!</h2>";
    echo "<p><strong>Username:</strong> admin</p>";
    echo "<p><strong>Email:</strong> tech@thewoodandgood.com</p>";
    echo "<p><strong>New Password:</strong> " . htmlspecialchars($new_password) . "</p>";
    echo "<hr>";
    echo "<p><a href='/cms/admin/'>Go to Admin Login →</a></p>";
    echo "<p style='color:red;'><strong>IMPORTANT:</strong> Delete this file (reset-admin-password.php) after use for security!</p>";
} else {
    echo "<h2>❌ Password Reset Failed</h2>";
    echo "<p>Please check database connection and try again.</p>";
}
