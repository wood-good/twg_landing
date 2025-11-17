# Web Development Masters

**Master the full spectrum of web development across all major technologies and frameworks.**

## Overview

Web Development Masters is a comprehensive full-stack development module providing expert-level assistance across:

**Languages:**
- PHP
- TypeScript
- JavaScript
- Python

**Frameworks:**
- Next.js
- Astro
- Django
- Laravel (Blade)
- React
- Node.js
- Angular

**Databases:**
- SQL (MySQL, MariaDB)
- PostgreSQL
- Kafka
- Redis
- MongoDB

This module delivers specialized agents and workflows to handle everything from project initialization to production deployment.

## Installation

```bash
bmad install web-dev-masters
```

During installation, you'll configure:
- Primary tech stack preference
- Deployment target platform
- Coding standards preference

## Components

### Agents (6)

**1. Full-Stack Architect** 🏗️
- Master coordinator and architecture decision-maker
- Commands: `*plan-project`, `*choose-stack`, `*review-architecture`

**2. Frontend Master** ⚛️
- React, Next.js, Astro, Angular expert
- Commands: `*build-component`, `*optimize-frontend`, `*setup-framework`

**3. Backend Engineer** 🔧
- Node.js, PHP, Python, Laravel, Django specialist
- Commands: `*create-api`, `*setup-server`, `*build-backend`

**4. Database Architect** 🗄️
- SQL, PostgreSQL, Kafka, Redis expert
- Commands: `*design-schema`, `*optimize-queries`, `*setup-database`

**5. DevOps Specialist** 🚀
- Deployment, CI/CD, infrastructure maestro
- Commands: `*deploy-app`, `*setup-pipeline`, `*configure-server`

**6. TypeScript Guru** 📘
- Type safety and TypeScript best practices
- Commands: `*add-types`, `*refactor-ts`, `*type-check`

### Workflows (13)

#### Core Workflows
1. **project-setup** - Initialize new web project with tech stack selection
2. **build-full-stack-app** - End-to-end application development
3. **deploy-to-production** - Complete deployment orchestration

#### Feature Workflows
4. **create-api-endpoint** - Design and implement REST/GraphQL APIs
5. **build-database-schema** - Database design and migration creation
6. **setup-frontend-framework** - Initialize React/Next/Astro/Angular projects
7. **backend-service-setup** - Create Node/Laravel/Django services
8. **add-authentication** - Implement JWT, OAuth, sessions
9. **optimize-performance** - Frontend/backend performance tuning
10. **setup-ci-cd** - Configure GitHub Actions/GitLab CI pipelines

#### Utility Workflows
11. **code-review-checklist** - Automated code quality checks
12. **troubleshoot-stack** - Debug common stack issues
13. **upgrade-dependencies** - Manage package updates safely

## Quick Start

### 1. Load the Full-Stack Architect

```bash
/bmad:web-dev-masters:agents:full-stack-architect
```

### 2. Initialize a New Project

```
*plan-project
```

The architect will guide you through:
- Tech stack selection
- Project structure setup
- Database design
- Deployment strategy

### 3. Build Your Application

Use specialized agents for different tasks:

```bash
# Frontend work
/bmad:web-dev-masters:agents:frontend-master
*build-component

# Backend API
/bmad:web-dev-masters:agents:backend-engineer
*create-api

# Database design
/bmad:web-dev-masters:agents:database-architect
*design-schema
```

### 4. Deploy to Production

```bash
/bmad:web-dev-masters:agents:devops-specialist
*deploy-app
```

## Module Structure

```
web-dev-masters/
├── agents/
│   ├── full-stack-architect.agent.yaml
│   ├── frontend-master.agent.yaml
│   ├── backend-engineer.agent.yaml
│   ├── database-architect.agent.yaml
│   ├── devops-specialist.agent.yaml
│   └── typescript-guru.agent.yaml
├── workflows/
│   ├── project-setup/
│   ├── build-full-stack-app/
│   ├── deploy-to-production/
│   ├── create-api-endpoint/
│   ├── build-database-schema/
│   ├── setup-frontend-framework/
│   ├── backend-service-setup/
│   ├── add-authentication/
│   ├── optimize-performance/
│   ├── setup-ci-cd/
│   ├── code-review-checklist/
│   ├── troubleshoot-stack/
│   └── upgrade-dependencies/
├── templates/
│   ├── nextjs-starter/
│   ├── laravel-api/
│   ├── django-project/
│   ├── react-component/
│   └── express-server/
├── data/
│   ├── tech-stack-guides/
│   ├── deployment-configs/
│   └── best-practices/
└── config.yaml
```

## Configuration

Edit `.bmad/web-dev-masters/config.yaml` to customize:

```yaml
primary_stack: "mern"           # Your preferred tech stack
deployment_target: "docker"     # Where you deploy
code_style: "standard"          # Coding standards
```

## Examples

### Example 1: Build a Next.js App with PostgreSQL

```bash
# Load the architect
/bmad:web-dev-masters:agents:full-stack-architect

# Plan the project
*plan-project
> "Next.js app with PostgreSQL and TypeScript"

# Setup frontend
/bmad:web-dev-masters:agents:frontend-master
*setup-framework
> Select: Next.js

# Design database
/bmad:web-dev-masters:agents:database-architect
*design-schema
> Define your models

# Deploy
/bmad:web-dev-masters:agents:devops-specialist
*deploy-app
> Target: Vercel + Supabase
```

### Example 2: Create Laravel API with MySQL

```bash
# Load backend engineer
/bmad:web-dev-masters:agents:backend-engineer

# Setup Laravel
*build-backend
> Framework: Laravel
> Database: MySQL

# Create API endpoints
*create-api
> RESTful API with authentication
```

## Development Roadmap

### Phase 1: Core Foundation ✅
- [x] Module structure created
- [x] Installation configuration
- [x] Custom installer logic
- [ ] Create first agent (Full-Stack Architect)
- [ ] Create core workflows

### Phase 2: Agent Development
- [ ] Build all 6 specialist agents
- [ ] Define agent personalities and communication styles
- [ ] Implement agent menu systems

### Phase 3: Workflow Implementation
- [ ] Core workflows (project-setup, build-full-stack-app, deploy)
- [ ] Feature workflows (APIs, databases, frameworks)
- [ ] Utility workflows (review, troubleshoot, upgrade)

### Phase 4: Templates & Data
- [ ] Tech stack starter templates
- [ ] Deployment configuration templates
- [ ] Best practices documentation
- [ ] Framework quick references

### Phase 5: Testing & Polish
- [ ] Test all workflows
- [ ] Validate installation process
- [ ] Refine agent interactions
- [ ] Performance optimization

## Tech Stack Coverage

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, Next.js, Astro, Angular, Vue.js |
| **Backend** | Node.js, Laravel, Django, Express, NestJS |
| **Languages** | TypeScript, JavaScript, PHP, Python |
| **Databases** | PostgreSQL, MySQL, MongoDB, Redis, Kafka |
| **Deployment** | Docker, AWS, Vercel, Cloudflare, VPS |
| **Tools** | Git, CI/CD, Testing frameworks, ORMs |

## Contributing

To extend this module:

1. **Add new agents**: Use `/bmad:bmb:agents:bmad-builder` → `*create-agent`
2. **Add new workflows**: Use `/bmad:bmb:agents:bmad-builder` → `*create-workflow`
3. **Add templates**: Place in `templates/` directory
4. **Update docs**: Keep README and agent docs current

## Support

For questions or issues:
- Reference the installed module documentation
- Check agent-specific help menus (`*help`)
- Review workflow instructions

## Author

**Created by:** E
**Date:** 2025-11-14
**Version:** 1.0.0
**BMad Core:** v6.0.0-alpha.9

---

**Ready to master full-stack web development? Let's build! 🚀**
