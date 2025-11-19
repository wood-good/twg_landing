# Build Full-Stack Application - Tactical Instructions
# Complete Development Protocol

<critical>Execute complete application build from planning to deployment</critical>

<workflow>

<step n="1" goal="Application Requirements Briefing">
<ask response="app_purpose">What application are we building?</ask>
<ask response="core_features">What are the core features (list 5-7)?</ask>
<ask response="user_types">What types of users will this serve?</ask>
<ask response="auth_needed">Authentication required? (Yes/No/OAuth)</ask>
<template-output>requirements</template-output>
</step>

<step n="2" goal="Tech Stack Confirmation">
<action>Reference {primary_stack} from config</action>
<action>Recommend stack based on requirements</action>
<ask response="stack_confirmed">Confirm stack: {{recommended_stack}}?</ask>
<template-output>tech_stack</template-output>
</step>

<step n="3" goal="Database Schema Design">
<action>Guide database schema creation</action>
<action>Define entities, relationships, constraints</action>
<action>Plan migrations</action>
<template-output>database_schema</template-output>
</step>

<step n="4" goal="Backend API Development">
<action>Design API endpoints</action>
<action>Plan authentication flow</action>
<action>Define request/response formats</action>
<template-output>api_design</template-output>
</step>

<step n="5" goal="Frontend Architecture">
<action>Component structure planning</action>
<action>State management strategy</action>
<action>Routing configuration</action>
<template-output>frontend_architecture</template-output>
</step>

<step n="6" goal="Integration Planning">
<action>API integration approach</action>
<action>Error handling strategy</action>
<action>Loading states management</action>
<template-output>integration_plan</template-output>
</step>

<step n="7" goal="Testing Strategy">
<action>Unit test approach</action>
<action>Integration test plan</action>
<action>E2E test scenarios</action>
<template-output>testing_strategy</template-output>
</step>

<step n="8" goal="Deployment Preparation">
<action>Environment configuration</action>
<action>CI/CD pipeline setup</action>
<action>Monitoring strategy</action>
<template-output>deployment_plan</template-output>
</step>

<step n="9" goal="Development Roadmap">
<action>Break into 2-week sprints</action>
<action>Prioritize features</action>
<action>Assign milestones</action>
<template-output>development_roadmap</template-output>
</step>

</workflow>
