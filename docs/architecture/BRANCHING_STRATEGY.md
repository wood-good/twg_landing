# VVVeb Dual-Site Repository - Branching Strategy

## Overview

This repository contains two separate client websites built on the same VVVeb tech stack:
- **The Wood and Good SIA** (TWG)
- **Timber International ltd** (Timber)

The branching strategy is designed to:
- Share system-wide code improvements across both sites
- Maintain complete content independence between sites
- Prevent accidental content overwrites during merges
- Enable safe handoff to client or future developers

## Branch Structure

```
main (VVVeb Platform Core - NO CONTENT)
├── twg (The Wood and Good - Production)
│   ├── twg-staging (TWG Testing)
│   └── twg-dev (TWG Development)
└── timber (Timber International - Production)
    ├── timber-staging (Timber Testing)
    └── timber-dev (Timber Development)
```

## Branch Definitions

### `main`
**Purpose:** Core VVVeb system, shared plugins, themes, and utilities

**Contains:**
- VVVeb core files
- Custom plugins applicable to both sites
- Base theme files
- Shared utilities and scripts
- System configuration templates

**Does NOT contain:**
- Site-specific database files
- Site-specific content
- Uploaded media/images
- Site-specific environment configs

**Merge Rules:**
- ✅ Can merge TO `twg` and `timber` (code only)
- ❌ Never merges FROM site branches
- ❌ Never contains database or content files

---

### `twg` / `timber`
**Purpose:** Production-ready state for each respective site

**Contains:**
- All files from `main` (inherited)
- Site-specific database files
- Site-specific content and pages
- Uploaded media and assets
- Site-specific configurations

**Merge Rules:**
- ✅ Receives code updates FROM `main` (content files excluded)
- ✅ Receives features/fixes FROM own staging branch
- ❌ NEVER merge between `twg` and `timber`
- ❌ NEVER merge content files FROM `main`

---

### `twg-staging` / `timber-staging`
**Purpose:** Testing environment before production deployment

**Merge Rules:**
- ✅ Receives work FROM corresponding dev branch
- ✅ Merges TO corresponding production branch after testing
- ❌ Never merges across sites

---

### `twg-dev` / `timber-dev`
**Purpose:** Active development work for each site

**Merge Rules:**
- ✅ Merges TO corresponding staging branch
- ✅ Can include database and content changes
- ❌ Never merges across sites
- ❌ Never merges directly to production

## Protected File Paths

The following files and directories are **content-specific** and must NEVER be merged between site branches:

```
*.sql
*.db
database/
storage/
media/
uploads/
public/media/
public/uploads/
vvveb/storage/
config/site.php
.env
.env.local
.env.production
```

These paths are protected via `.gitattributes` merge strategies.

## Allowed Merge Flows

### ✅ System Updates (Code Only)

```
main → twg (excluding content files)
main → timber (excluding content files)
```

**When:** Bug fixes, plugin updates, theme improvements, security patches

**How:** Use the provided merge script (see Scripts section)

---

### ✅ Feature Development

```
twg-dev → twg-staging → twg
timber-dev → timber-staging → timber
```

**When:** New features, content updates, design changes

**How:** Standard git merge (all files included)

---

### ❌ FORBIDDEN Merges

```
twg ↔ timber  (NEVER)
twg-dev → timber  (NEVER)
timber-staging → twg  (NEVER)
```

**Why:** Will overwrite site-specific content and database, destroying one site's data

## Workflow Examples

### Example 1: Fixing a Bug That Affects Both Sites

```bash
# Fix the bug in main branch
git checkout main
# Make changes to plugin or theme
git add plugins/custom-plugin.php
git commit -m "Fix: Correct product display logic"
git push origin main

# Apply to The Wood and Good
./scripts/merge-from-main.sh twg
git push origin twg

# Apply to Timber International
./scripts/merge-from-main.sh timber
git push origin timber
```

---

### Example 2: Adding New Content to TWG

```bash
# Work in development branch
git checkout twg-dev
# Make content changes via VVVeb CMS or direct edits
git add -A
git commit -m "Add new product categories"
git push origin twg-dev

# Test in staging
git checkout twg-staging
git merge twg-dev
git push origin twg-staging
# Perform testing

# Deploy to production
git checkout twg
git merge twg-staging
git push origin twg
```

---

### Example 3: Updating VVVeb Core System

```bash
# Update in main
git checkout main
# Update VVVeb core files
git add vvveb/
git commit -m "Update VVVeb to v2.x.x"
git push origin main

# Propagate to both sites using merge script
./scripts/merge-from-main.sh twg
./scripts/merge-from-main.sh timber
```

## Scripts

### Merge Script: `scripts/merge-from-main.sh`

**Purpose:** Safely merge code updates from `main` to site branches while preserving content

**Usage:**
```bash
./scripts/merge-from-main.sh twg
./scripts/merge-from-main.sh timber
```

**What it does:**
1. Checks out the target site branch
2. Merges `main` without committing
3. Resets all content-specific files to their current state
4. Commits only the code changes
5. Preserves database, media, and site configs

---

### Pre-commit Hook: `.git/hooks/pre-merge-commit`

**Purpose:** Prevent accidental cross-site merges

**Automatically blocks:**
- `twg*` → `timber*` merges
- `timber*` → `twg*` merges
- Any dev branch merging to opposite site

## Troubleshooting

### Problem: Accidentally merged content between sites

**Solution:**
```bash
# Immediately abort if merge not committed
git merge --abort

# If already committed, reset to previous state
git reset --hard HEAD~1

# Restore from backup or re-apply changes correctly
```

---

### Problem: Merge conflicts in code files

**Solution:**
```bash
# Resolve conflicts normally
git status  # See conflicted files
# Edit files to resolve
git add <resolved-files>
git commit
```

---

### Problem: Need to apply a hotfix to both sites urgently

**Solution:**
```bash
# Option 1: Via main (preferred)
git checkout main
# Apply fix
git commit -m "Hotfix: Critical issue"
./scripts/merge-from-main.sh twg
./scripts/merge-from-main.sh timber

# Option 2: Direct to each site (if main unavailable)
git checkout twg
# Apply fix
git commit -m "Hotfix: Critical issue"

git checkout timber
# Apply same fix
git commit -m "Hotfix: Critical issue"
```

## Handoff Checklist

When handing off this project to client or another developer:

- [ ] Provide this documentation
- [ ] Verify `.gitattributes` is in place
- [ ] Verify git hooks are installed
- [ ] Verify merge scripts are executable
- [ ] Walk through one example merge from `main`
- [ ] Walk through one example feature merge within site branch
- [ ] Emphasize the FORBIDDEN merges section
- [ ] Provide contact for emergency questions

## Emergency Contacts

**Original Developer:** [Your contact info]
**Repository Owner:** [Client/Company contact]
**Hosting/Deployment:** [Relevant credentials location]

## Version History

- v1.0 - Initial branching strategy documentation
- v1.1 - Updated with actual company branch names (TWG, Timber)
- Created: 2025-11-19
- Last Updated: 2025-11-19

---

## Quick Reference Card

### ✅ SAFE MERGES
```
main → twg (code only)
main → timber (code only)
twg-dev → twg-staging → twg
timber-dev → timber-staging → timber
```

### ❌ NEVER MERGE
```
twg ↔ timber
Any cross-site branch merges
```

### 🔒 PROTECTED FILES
```
database/, storage/, media/, uploads/
*.sql, *.db, .env, config/site.php
```

### 🛠️ KEY COMMANDS
```bash
# Merge system updates to TWG
./scripts/merge-from-main.sh twg

# Merge system updates to Timber
./scripts/merge-from-main.sh timber

# Feature development flow (TWG example)
git checkout twg-dev
git commit -m "Feature"
git checkout twg-staging
git merge twg-dev
# Test, then:
git checkout twg
git merge twg-staging
```
