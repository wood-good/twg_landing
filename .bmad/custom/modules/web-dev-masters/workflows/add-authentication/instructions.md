# Add Authentication - Security Protocol

<workflow>
<step n="1" goal="Auth Strategy"><ask>Auth type? (JWT/Session/OAuth)</ask><ask>MFA required?</ask></step>
<step n="2" goal="Backend Implementation"><action>Setup auth middleware</action><action>Create login/register endpoints</action><action>Add password hashing</action></step>
<step n="3" goal="Token Management"><action>Implement token generation</action><action>Add refresh token logic</action><action>Configure expiration</action></step>
<step n="4" goal="Frontend Integration"><action>Add auth context</action><action>Create login UI</action><action>Handle auth state</action></step>
<step n="5" goal="Security Hardening"><action>Add CSRF protection</action><action>Implement rate limiting</action><action>Add security headers</action></step>
</workflow>
