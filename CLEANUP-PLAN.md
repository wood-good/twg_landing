# TWG Landing - Codebase Cleanup Plan

**Created**: November 17, 2025
**Objective**: Remove obsolete code and documentation, establish clear single-source-of-truth

---

## Problem Statement

The codebase currently contains two conflicting website implementations:
1. **Static website** (obsolete) - Custom PHP pages in `/public/`
2. **VVVeb CMS website** (active) - Platform-based in `/public/cms/` and `/vvveb-theme-landing/`

Additionally, there are 35+ documentation files in the root with significant duplication and contradiction.

---

## Cleanup Strategy

### Phase 1: Archive Static Website Files
**Goal**: Remove all static website code while preserving assets that may be reusable

#### Files to ARCHIVE (move to `/archive/static-website/`)
```
public/index.php
public/philosophy.php
public/process.php
public/portfolio.php
public/contact.php
public/index-demo.php
public/edit.php
public/save-page.php
public/dev-status.php
public/info.php
```

#### Assets to EVALUATE (keep if used by VVVeb theme, else archive)
```
public/assets/css/          # Check if VVVeb theme uses these
public/assets/js/           # Check if VVVeb theme uses these
public/assets/images/       # Keep only images used in VVVeb
public/assets/videos/       # Keep - likely used in VVVeb
public/assets/fonts/        # Keep if used in VVVeb
```

#### Files to KEEP in public/
```
public/cms/                 # VVVeb CMS
public/vvveb-builder/       # VVVeb Page Builder
public/api/                 # May contain reusable API endpoints
public/components/          # May be VVVeb components
```

---

### Phase 2: Documentation Consolidation
**Goal**: Reduce 35+ docs to 5-7 essential files

#### KEEP (Consolidate and Update)
1. **README.md** - Main project overview and quick start
2. **DEVELOPMENT-GUIDE.md** - Technical setup, development workflow
3. **CONTENT-STRATEGY.md** - Brand voice, copywriting guidelines
4. **VVVEB-GUIDE.md** - VVVeb CMS usage, theme development (NEW - consolidate existing)

#### ARCHIVE (move to `/archive/docs/`)
All "premium design" docs (superseded by VVVeb theme):
```
PREMIUM-DESIGN-PRINCIPLES.md
PREMIUM-IMPLEMENTATION-GUIDE.md
PREMIUM-QUICK-REFERENCE.md
PREMIUM-DESIGN-SUMMARY.md
HOMEPAGE-PREMIUM-COMPLETE.md
PREMIUM-TRANSFORMATION-COMPLETE.md
```

All "setup" docs (consolidate into DEVELOPMENT-GUIDE.md):
```
LOCAL-SETUP.md
VVVEB-SETUP.md
VVVEB-CMS-READY.md
```

All "media" docs (consolidate into DEVELOPMENT-GUIDE.md):
```
VIDEO-SETUP-README.md
VIDEOS-QUICKSTART.md
VIDEOS-READY.md
MEDIA-QUICK-START.md
MEDIA-ASSETS-CHECKLIST.md
PEXELS-VIDEO-LINKS.md
DOWNLOAD-INSTRUCTIONS.md
```

Status/tracking docs (keep only README.md and DEVELOPMENT-GUIDE.md):
```
PROJECT-STATUS.md
DOCUMENTATION-INDEX.md
DESIGN-SYSTEM.md
EDITOR-GUIDE.md
```

Old project files:
```
LINEAR_IMPORT_SUMMARY.md
PROJECT_KICKOFF.md
```

#### docs/ Directory
Currently has outdated/deleted files. Clean structure:
```
docs/
├── architecture.md         # KEEP - technical architecture
├── brief.md               # KEEP - project brief
├── prd.md                 # KEEP - product requirements
└── sprints/               # ARCHIVE - outdated sprint planning
```

---

### Phase 3: Scripts & Utilities Cleanup

#### Scripts to KEEP
```
start-dev.sh               # Docker startup
stop-dev.sh                # Docker shutdown
```

#### Scripts to ARCHIVE (video optimization no longer needed for static)
```
optimize-videos.sh
setup-videos.sh
download-stock-videos.sh
download-pexels-videos.py
```

#### Files to REMOVE
```
create-placeholder-images.html  # Dev utility, not needed
```

---

### Phase 4: VVVeb Theme as Primary Codebase

**Establish** `/vvveb-theme-landing/` as the PRIMARY codebase:

Current structure:
```
vvveb-theme-landing/
├── blocks/              # Reusable content blocks
├── sections/            # Page sections (hero, footer, etc.)
├── css/                # Theme styles
├── scss/               # Theme source styles
├── js/                 # Theme JavaScript
├── video/              # Theme video assets
├── content/            # Page content templates
└── src/                # Source templates
```

**This is where all development should happen going forward.**

---

### Phase 5: Folder Structure Cleanup

#### Root Directory - AFTER CLEANUP
```
/
├── .bmad/                     # BMAD workflows (keep)
├── .claude/                   # Claude commands (keep)
├── .github/                   # GitHub config (keep)
├── docker/                    # Docker configs (keep)
├── public/                    # Web root
│   ├── cms/                  # VVVeb CMS
│   ├── vvveb-builder/        # VVVeb Builder
│   └── api/                  # API endpoints (if used)
├── vvveb-theme-landing/      # PRIMARY CODEBASE
├── infrastructure/            # Infrastructure as code (keep)
├── docs/                     # Essential docs only
│   ├── architecture.md
│   ├── brief.md
│   └── prd.md
├── archive/                  # ARCHIVED CODE (NEW)
│   ├── static-website/
│   ├── docs/
│   └── scripts/
├── docker-compose.yml
├── start-dev.sh
├── stop-dev.sh
├── README.md
├── DEVELOPMENT-GUIDE.md
├── CONTENT-STRATEGY.md
├── VVVEB-GUIDE.md (NEW)
└── .gitignore
```

---

## Execution Checklist

### Pre-Cleanup
- [ ] Verify VVVeb CMS is working: http://localhost:8080/cms/admin/
- [ ] Verify VVVeb theme is functional
- [ ] Create backup: `git branch backup/pre-cleanup`
- [ ] Document any assets from static site that are in use

### Phase 1: Archive Static Files
- [ ] Create `/archive/static-website/` directory
- [ ] Move all static PHP pages to archive
- [ ] Audit `/public/assets/` - keep only what VVVeb uses
- [ ] Test VVVeb site still works

### Phase 2: Consolidate Documentation
- [ ] Create `/archive/docs/` directory
- [ ] Create new `VVVEB-GUIDE.md` (consolidate setup docs)
- [ ] Update `README.md` with current architecture
- [ ] Update `DEVELOPMENT-GUIDE.md` with consolidated setup
- [ ] Move 25+ obsolete docs to archive
- [ ] Update `.gitignore` to exclude archive/

### Phase 3: Clean Scripts
- [ ] Move video scripts to `/archive/scripts/`
- [ ] Remove `create-placeholder-images.html`
- [ ] Keep only `start-dev.sh` and `stop-dev.sh`

### Phase 4: docs/ Directory
- [ ] Keep only `architecture.md`, `brief.md`, `prd.md`
- [ ] Move `docs/sprints/` to archive
- [ ] Remove deleted files from git tracking

### Phase 5: Final Verification
- [ ] Test VVVeb CMS: http://localhost:8080/cms/admin/
- [ ] Test VVVeb Builder: http://localhost:8080/vvveb-builder/
- [ ] Verify theme development workflow
- [ ] Update README with new structure
- [ ] Commit cleanup with clear message

---

## New Developer Onboarding (Post-Cleanup)

**After cleanup, new developers will:**

1. Read `README.md` - Understand the project
2. Follow `DEVELOPMENT-GUIDE.md` - Set up environment
3. Read `VVVEB-GUIDE.md` - Learn VVVeb theme development
4. Work in `vvveb-theme-landing/` - Primary codebase

**Total docs to read**: 4 files instead of 35+

---

## Risk Mitigation

### Backup Strategy
```bash
# Before cleanup
git checkout -b backup/pre-cleanup
git push origin backup/pre-cleanup

# Create local backup
tar -czf twg-landing-backup-$(date +%Y%m%d).tar.gz .
```

### Rollback Plan
If anything breaks:
```bash
git checkout backup/pre-cleanup
```

### Testing Checklist
After each phase:
- [ ] VVVeb CMS loads
- [ ] VVVeb Builder loads
- [ ] Theme renders correctly
- [ ] Docker environment starts
- [ ] No 404 errors in browser console

---

## Success Criteria

✅ **Only ONE website implementation** - VVVeb CMS + Theme
✅ **5-7 documentation files** (down from 35+)
✅ **Clear development workflow** - All work in `/vvveb-theme-landing/`
✅ **No conflicting information** - Single source of truth
✅ **Faster AI assistant context** - Less irrelevant files to scan

---

## Post-Cleanup: Updated `.gitignore`

```gitignore
# Archive directory (local only)
/archive/

# Existing ignores...
```

---

**Ready to execute?** Start with Phase 1 backup, then proceed phase-by-phase.
