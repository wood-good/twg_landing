<?php
// Enable VVVeb CMS dynamic routing with debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', '/tmp/php_errors.log');

$PUBLIC_PATH = '/';
$PUBLIC_THEME_PATH = '/vvveb/public/';

// Override subdirectory detection - we're at the root, not in /vvveb subdirectory
if (!defined('V_SUBDIR_INSTALL')) {
    define('V_SUBDIR_INSTALL', '');
}

include __DIR__ . '/vvveb/index.php';
