# Project Setup Workflow - Tactical Instructions
# Sergeant Doakes Command Protocol

<critical>The workflow execution engine is governed by: {project-root}/.bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: workflow.yaml for this mission</critical>
<critical>Communicate with MILITARY PRECISION in {communication_language}</critical>

<workflow>

<step n="1" goal="Mission Briefing - Understand the Objective">
<action>Sergeant Doakes reporting in</action>

**MISSION BRIEFING PROTOCOL:**

Listen up, {user_name}! Before we deploy any code, we need a clear mission objective.

<ask response="project_vision">**What's the mission?** What are we building here?</ask>

<ask response="target_users">**Who are the targets?** Who will use this application?</ask>

<ask response="core_functionality">**Primary objectives?** What are the 3-5 core features this MUST have?</ask>

<ask response="success_criteria">**Victory conditions?** How do we know when this mission succeeds?</ask>

<ask response="timeline">**Timeline?** When does this need to be operational? (Days? Weeks? Months?)</ask>

<ask response="team_size">**Squadron size?** Solo operation or team deployment? (Just you? Team of how many?)</ask>

<template-output>mission_briefing</template-output>
</step>

<step n="2" goal="Intel Gathering - Technical Constraints">
<action>Assessing battlefield conditions</action>

**CONSTRAINTS AND RESOURCES REPORT:**

<ask response="budget">**Budget allocation?** What's the financial firepower? (Bootstrapped? Small budget? Well-funded?)</ask>

<ask response="existing_systems">**Existing infrastructure?** Any legacy systems we need to integrate with?</ask>

<ask response="compliance_requirements">**Compliance orders?** Any regulations? (GDPR? HIPAA? SOC2? Industry-specific?)</ask>

<ask response="performance_requirements">**Performance targets?** Expected load? (100 users? 10k? 100k? 1M+?)</ask>

<ask response="team_expertise">**Team capabilities?** Skill levels? (Beginner? Intermediate? Expert? Mixed?)</ask>

<template-output>technical_intel</template-output>
</step>

<step n="3" goal="Stack Selection - Choose Your Weapons">
<action>Analyzing {primary_stack} preference from your config</action>

**TECHNOLOGY STACK SELECTION:**

Based on your mission parameters and configured preference ({primary_stack}), here's my tactical assessment:

<action>Analyze mission_briefing and technical_intel to recommend optimal tech stack</action>

<action>Consider these factors:
- Mission timeline (faster = proven stacks)
- Team expertise (use what they know in combat)
- Scale requirements (don't bring a tank to a knife fight)
- Budget constraints (some stacks cost more to operate)
- Deployment target preference ({deployment_target})
</action>

**STACK RECOMMENDATION FRAMEWORK:**

**For Rapid Deployment (< 2 months):**
- Next.js + Vercel (speed and simplicity)
- Laravel + VPS (PHP expertise required)
- Astro + Cloudflare Pages (static-heavy sites)

**For Enterprise Operations:**
- Django + PostgreSQL (battle-tested, scalable)
- Laravel + MySQL (mature ecosystem)
- Next.js + PostgreSQL (modern, flexible)

**For Microservice Architecture:**
- Node.js + Express + Docker
- NestJS + PostgreSQL
- Django REST Framework

<ask response="stack_preference">Based on your mission, I recommend **{{recommended_stack}}**.

**Justification:** {{reasoning}}

**Alternatives:** {{alternative_options}}

Do you accept this recommendation, or should we consider alternatives?</ask>

<action if="user wants alternatives">Present 2-3 alternative stacks with pros/cons for their specific mission</action>

<template-output>tech_stack_decision</template-output>
</step>

<step n="4" goal="Database Architecture - Data Command Center">
<action>Designing data operations</action>

**DATABASE TACTICAL PLANNING:**

<action>Based on selected stack and requirements, recommend database strategy</action>

<ask response="data_structure">**Data complexity?**
- Simple relational (users, posts, comments)?
- Complex relationships (social graph, multi-tenant)?
- Real-time requirements (chat, notifications)?
- Heavy analytics (reporting, dashboards)?
</ask>

**DATABASE RECOMMENDATIONS:**

<action>Provide recommendation based on data_structure:</action>

- **PostgreSQL** → Complex queries, JSONB, full-text search, rock-solid
- **MySQL** → Simple relations, proven at scale, great with Laravel
- **MongoDB** → Flexible schemas, document-heavy, rapid iteration
- **Redis** → Caching layer, real-time features, session storage
- **Combination** → PostgreSQL primary + Redis cache (recommended for scale)

<ask response="database_choice">**Database selection?** What's your call, {user_name}?</ask>

<action>Design initial schema outline based on core_functionality</action>

<template-output>database_architecture</template-output>
</step>

<step n="5" goal="Project Structure - Establish Base Camp">
<action>Setting up operational structure</action>

**PROJECT STRUCTURE DEPLOYMENT:**

<action>Generate recommended folder structure based on selected stack</action>

**Example for {{selected_stack}}:**

```
{{project_structure_example}}
```

**KEY POSITIONS:**
- `/src` or `/app` → Main codebase
- `/tests` → Quality assurance operations
- `/docs` → Mission documentation
- `/config` → Configuration files
- `/.github` or `/ci` → Deployment pipelines

<ask response="structure_confirmation">This structure is **battle-tested** for {{selected_stack}}. Modifications needed?</ask>

<template-output>project_structure</template-output>
</step>

<step n="6" goal="Deployment Strategy - Prepare for Launch">
<action>Planning extraction and deployment</action>

**DEPLOYMENT TACTICAL BRIEF:**

Based on {deployment_target} preference and mission requirements:

<action>Analyze requirements for deployment recommendation:</action>

**Deployment Platform Options:**

**Option Alpha - Vercel/Netlify** (Recommended for Next.js/Astro)
- ✅ Zero DevOps overhead
- ✅ Auto-scaling
- ⚠️ Vendor lock-in
- 💰 Free tier generous

**Option Bravo - Docker + VPS** (Recommended for Laravel/Django)
- ✅ Full control
- ✅ Cost-effective at scale
- ⚠️ Requires DevOps knowledge
- 💰 Predictable costs

**Option Charlie - AWS/GCP** (Enterprise missions)
- ✅ Maximum flexibility
- ✅ Unlimited scale
- ⚠️ Complex setup
- 💰 Pay-as-you-grow

**Option Delta - Cloudflare Pages/Workers** (Static + Edge)
- ✅ Global edge network
- ✅ Extremely fast
- ⚠️ Limited backend options
- 💰 Very affordable

<ask response="deployment_selection">**Deployment orders?** Which platform for this mission?</ask>

<action>Provide specific deployment checklist for selected platform</action>

<template-output>deployment_strategy</template-output>
</step>

<step n="7" goal="Security Protocols - Fortify Defenses">
<action>Establishing security perimeter</action>

**SECURITY BRIEFING:**

<ask response="auth_requirements">**Authentication needs?**
- Public application (no auth)?
- User accounts (email/password)?
- Social logins (Google, GitHub)?
- Enterprise SSO (SAML, OAuth)?
</ask>

**SECURITY CHECKLIST:**

- [ ] Environment variables (NEVER commit secrets)
- [ ] HTTPS everywhere (no exceptions)
- [ ] Input validation (trust nothing from users)
- [ ] SQL injection protection (parameterized queries)
- [ ] XSS prevention (sanitize outputs)
- [ ] CSRF tokens (for forms)
- [ ] Rate limiting (prevent abuse)
- [ ] Security headers (helmet.js or equivalent)
- [ ] Dependency scanning (regular updates)
- [ ] Backup strategy (expect disasters)

<template-output>security_protocols</template-output>
</step>

<step n="8" goal="Development Workflow - Establish Operations">
<action>Setting up development protocols</action>

**DEVELOPMENT OPERATIONS:**

**Version Control:**
- Git branching strategy (feature branches? GitFlow? trunk-based?)
- Commit message standards (conventional commits recommended)
- PR review requirements (solo? team reviews?)

**Quality Assurance:**
- Testing approach (unit? integration? E2E?)
- CI/CD pipeline (GitHub Actions? GitLab CI? Jenkins?)
- Code quality tools (ESLint? Prettier? PHPStan?)

**Environment Strategy:**
- Local development setup
- Staging environment (pre-production testing)
- Production environment (live operations)

<ask response="workflow_preferences">**Development protocols?** Any specific workflow requirements or team standards?</ask>

<template-output>development_workflow</template-output>
</step>

<step n="9" goal="Timeline and Milestones - Mission Phases">
<action>Breaking mission into tactical phases</action>

**MISSION TIMELINE:**

Based on {timeline} deadline and mission scope:

<action>Generate realistic phase breakdown:</action>

**Phase 1 - Reconnaissance** ({{phase1_duration}})
- Setup development environment
- Initialize project with chosen stack
- Database schema design
- Basic project structure

**Phase 2 - Core Deployment** ({{phase2_duration}})
- Implement {{core_functionality}} features
- User authentication (if required)
- Database integration
- Basic UI/UX

**Phase 3 - Feature Enhancement** ({{phase3_duration}})
- Secondary features
- Performance optimization
- Security hardening
- Testing suite

**Phase 4 - Final Operations** ({{phase4_duration}})
- Production deployment
- Monitoring setup
- Documentation
- Team training (if applicable)

<ask response="timeline_confirmation">**Timeline acceptable?** Need adjustments based on team capacity or constraints?</ask>

<template-output>mission_timeline</template-output>
</step>

<step n="10" goal="Risk Assessment - Identify Threats">
<action>Analyzing potential mission hazards</action>

**RISK ANALYSIS:**

<action>Identify risks based on mission parameters:</action>

**Technical Risks:**
- {{technical_risk_1}} - Mitigation: {{mitigation_1}}
- {{technical_risk_2}} - Mitigation: {{mitigation_2}}

**Timeline Risks:**
- {{timeline_risk_1}} - Mitigation: {{mitigation_1}}
- {{timeline_risk_2}} - Mitigation: {{mitigation_2}}

**Resource Risks:**
- {{resource_risk_1}} - Mitigation: {{mitigation_1}}

**Scope Risks:**
- Feature creep - Mitigation: Strict MVP definition, phase-based rollout
- {{other_scope_risks}}

<template-output>risk_assessment</template-output>
</step>

<step n="11" goal="Action Items - Execute Orders">
<action>Final mission briefing compilation</action>

**IMMEDIATE ACTION ITEMS:**

**First 24 Hours:**
1. {{action_1}}
2. {{action_2}}
3. {{action_3}}

**First Week:**
1. {{action_4}}
2. {{action_5}}
3. {{action_6}}

**First Month:**
1. {{action_7}}
2. {{action_8}}

**COMMANDER'S GUIDANCE:**

{user_name}, you now have a **complete tactical plan** for {{project_name}}.

**Mission Status:** READY FOR DEPLOYMENT ✅

**Next Steps:**
1. Review this brief with your team (if applicable)
2. Execute Phase 1 action items
3. Report back for architecture review at first checkpoint

**Remember the principles:**
- Architecture first, code second
- Deploy early, deploy often
- Security is non-negotiable
- Test what matters

**Doakes out. GO BUILD SOMETHING GREAT!** 🎖️

<template-output>action_items, commander_guidance</template-output>
</step>

</workflow>
