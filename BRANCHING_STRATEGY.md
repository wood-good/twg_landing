# VVVeb Dual-Site Repository - Branching Strategy

## Overview

This repository contains two separate client websites built on the same VVVeb tech stack. The branching strategy is designed to:
- Share system-wide code improvements across both sites
- Maintain complete content independence between sites
- Prevent accidental content overwrites during merges
- Enable safe handoff to client or future developers

## Branch Structure

```
main
├── branch-a (Site A Production)
│   ├── branch-a-staging (Site A Testing)
│   └── branch-a-dev (Site A Development)
└── branch-b (Site B Production)
    ├── branch-b-staging (Site B Testing)
    └── branch-b-dev (Site B Development)
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
- ✅ Can merge TO `branch-a` and `branch-b` (code only)
- ❌ Never merges FROM site branches
- ❌ Never contains database or content files

---

### `branch-a` / `branch-b`
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
- ❌ NEVER merge between `branch-a` and `branch-b`
- ❌ NEVER merge content files FROM `main`

---

### `branch-a-staging` / `branch-b-staging`
**Purpose:** Testing environment before production deployment

**Merge Rules:**
- ✅ Receives work FROM corresponding dev branch
- ✅ Merges TO corresponding production branch after testing
- ❌ Never merges across sites

---

### `branch-a-dev` / `branch-b-dev`
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
```

These paths are protected via `.gitattributes` merge strategies.

## Allowed Merge Flows

### ✅ System Updates (Code Only)

```
main → branch-a (excluding content files)
main → branch-b (excluding content files)
```

**When:** Bug fixes, plugin updates, theme improvements, security patches

**How:** Use the provided merge script (see Scripts section)

---

### ✅ Feature Development

```
branch-a-dev → branch-a-staging → branch-a
branch-b-dev → branch-b-staging → branch-b
```

**When:** New features, content updates, design changes

**How:** Standard git merge (all files included)

---

### ❌ FORBIDDEN Merges

```
branch-a ↔ branch-b  (NEVER)
branch-a-dev → branch-b  (NEVER)
branch-b-staging → branch-a  (NEVER)
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

# Apply to Site A
git checkout branch-a
./scripts/merge-from-main.sh branch-a
git push origin branch-a

# Apply to Site B
git checkout branch-b
./scripts/merge-from-main.sh branch-b
git push origin branch-b
```

---

### Example 2: Adding New Content to Site A

```bash
# Work in development branch
git checkout branch-a-dev
# Make content changes via VVVeb CMS or direct edits
git add -A
git commit -m "Add new product categories"
git push origin branch-a-dev

# Test in staging
git checkout branch-a-staging
git merge branch-a-dev
git push origin branch-a-staging
# Perform testing

# Deploy to production
git checkout branch-a
git merge branch-a-staging
git push origin branch-a
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
./scripts/merge-from-main.sh branch-a
./scripts/merge-from-main.sh branch-b
```

## Scripts

### Merge Script: `scripts/merge-from-main.sh`

**Purpose:** Safely merge code updates from `main` to site branches while preserving content

**Usage:**
```bash
./scripts/merge-from-main.sh branch-a
./scripts/merge-from-main.sh branch-b
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
- `branch-a` → `branch-b` merges
- `branch-b` → `branch-a` merges
- Any dev branch merging to opposite site

## Setup Instructions

### Initial Repository Setup

```bash
# 1. Initialize with main branch
git checkout -b main
# Set up base VVVeb installation
git add -A
git commit -m "Initial VVVeb setup"
git push origin main

# 2. Create Site A branches
git checkout -b branch-a
# Configure Site A specific settings
git add -A
git commit -m "Initialize Site A"
git push origin branch-a

git checkout -b branch-a-staging
git push origin branch-a-staging

git checkout -b branch-a-dev
git push origin branch-a-dev

# 3. Create Site B branches
git checkout main
git checkout -b branch-b
# Configure Site B specific settings
git add -A
git commit -m "Initialize Site B"
git push origin branch-b

git checkout -b branch-b-staging
git push origin branch-b-staging

git checkout -b branch-b-dev
git push origin branch-b-dev

# 4. Set up .gitattributes
git checkout main
# Create .gitattributes file (see Configuration Files section)
git add .gitattributes
git commit -m "Add merge strategy for content files"
git push origin main

# 5. Install git hooks
# Copy pre-merge-commit hook to .git/hooks/
chmod +x .git/hooks/pre-merge-commit
```

## Configuration Files

### `.gitattributes`

Place in repository root:

```
# VVVeb Content/Database - Never merge across site branches
*.sql merge=ours
*.db merge=ours
database/** merge=ours
storage/** merge=ours
media/** merge=ours
uploads/** merge=ours
public/media/** merge=ours
public/uploads/** merge=ours
vvveb/storage/** merge=ours

# Site-specific configuration
config/site.php merge=ours
.env merge=ours
.env.local merge=ours
```

### `.git/hooks/pre-merge-commit`

```bash
#!/bin/bash

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
MERGE_BRANCH=$(git rev-parse --abbrev-ref MERGE_HEAD 2>/dev/null)

# Exit if not in a merge
if [ -z "$MERGE_BRANCH" ]; then
    exit 0
fi

# Prevent branch-a → branch-b merges
if [[ "$CURRENT_BRANCH" == "branch-a"* ]] && [[ "$MERGE_BRANCH" == "branch-b"* ]]; then
    echo "❌ ERROR: Cannot merge branch-b into branch-a"
    echo "This would overwrite Site A's content with Site B's content."
    echo "Aborting merge."
    exit 1
fi

# Prevent branch-b → branch-a merges
if [[ "$CURRENT_BRANCH" == "branch-b"* ]] && [[ "$MERGE_BRANCH" == "branch-a"* ]]; then
    echo "❌ ERROR: Cannot merge branch-a into branch-b"
    echo "This would overwrite Site B's content with Site A's content."
    echo "Aborting merge."
    exit 1
fi

echo "✅ Merge safety check passed"
exit 0
```

### `scripts/merge-from-main.sh`

```bash
#!/bin/bash

# Safety check for arguments
if [ -z "$1" ]; then
    echo "Usage: ./scripts/merge-from-main.sh <branch-name>"
    echo "Example: ./scripts/merge-from-main.sh branch-a"
    exit 1
fi

SITE_BRANCH=$1

# Verify target branch exists
if ! git show-ref --verify --quiet refs/heads/$SITE_BRANCH; then
    echo "❌ Error: Branch '$SITE_BRANCH' does not exist"
    exit 1
fi

# Verify we're merging from main
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    git checkout main
    if [ $? -ne 0 ]; then
        echo "❌ Error: Could not checkout main branch"
        exit 1
    fi
fi

# Checkout target branch
echo "📌 Checking out $SITE_BRANCH..."
git checkout $SITE_BRANCH

# Start merge without committing
echo "🔀 Merging code from main (content excluded)..."
git merge main --no-commit --no-ff

if [ $? -ne 0 ]; then
    echo "❌ Merge conflicts detected. Please resolve manually."
    exit 1
fi

# Reset content-specific files to preserve site content
echo "🛡️  Protecting site-specific content..."
git reset HEAD database/ storage/ media/ uploads/ config/site.php .env .env.local 2>/dev/null
git checkout -- database/ storage/ media/ uploads/ config/site.php .env .env.local 2>/dev/null

# Commit the code changes
echo "💾 Committing system updates..."
git commit -m "Merge system updates from main (content preserved)"

echo "✅ Successfully merged main → $SITE_BRANCH"
echo "📤 Don't forget to push: git push origin $SITE_BRANCH"
```

Make executable:
```bash
chmod +x scripts/merge-from-main.sh
```

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
./scripts/merge-from-main.sh branch-a
./scripts/merge-from-main.sh branch-b

# Option 2: Direct to each site (if main unavailable)
git checkout branch-a
# Apply fix
git commit -m "Hotfix: Critical issue"

git checkout branch-b
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
- Created: [Date]
- Last Updated: [Date]

---

## Quick Reference Card

### ✅ SAFE MERGES
```
main → branch-a (code only)
main → branch-b (code only)
branch-a-dev → branch-a-staging → branch-a
branch-b-dev → branch-b-staging → branch-b
```

### ❌ NEVER MERGE
```
branch-a ↔ branch-b
Any cross-site branch merges
```

### 🔒 PROTECTED FILES
```
database/, storage/, media/, uploads/
*.sql, *.db, .env, config/site.php
```

### 🛠️ KEY COMMANDS
```bash
# Merge system updates
./scripts/merge-from-main.sh branch-a

# Feature development flow
git checkout branch-a-dev
git commit -m "Feature"
git checkout branch-a-staging
git merge branch-a-dev
# Test, then:
git checkout branch-a
git merge branch-a-staging
```
