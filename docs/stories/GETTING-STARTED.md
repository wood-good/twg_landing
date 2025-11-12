# Getting Started with TWG Landing Page Development

**Welcome to the TWG Landing Page project!** This guide will help you get started with parallel development on Monday.

---

## 📚 Essential Documents

**Read These First (in order):**

1. **[README.md](./README.md)** - Epic overview and roadmap
2. **[PARALLEL-WORK-ASSIGNMENT.md](./PARALLEL-WORK-ASSIGNMENT.md)** - Your developer assignment and timeline
3. **[Coding Standards](../architecture/coding-standards.md)** - Branching strategy and code guidelines
4. **Your assigned stories** - See assignment matrix

---

## 🚀 Quick Start (Day 1 - Monday Morning)

### Step 1: Team Setup (First 30 minutes)
**Everyone does this together:**

```bash
# 1. Clone repository
git clone https://github.com/your-org/twg-landing.git
cd twg-landing

# 2. Install dependencies
npm install -g pnpm
pnpm install

# 3. Setup environment variables
cp .env.example .env.local
# Add your Sanity project ID (get from team lead)

# 4. Create development branch (if not exists)
git checkout -b development
git push -u origin development
```

---

### Step 2: Create Your Epic Branch
**Epic leads do this (one per epic):**

```bash
# Example for Epic 1
git checkout development
git checkout -b epic-01-first-impression
git push -u origin epic-01-first-impression
```

**Epic leads needed:**
- Epic 1: Dev 1 or Dev 2
- Epic 2: Dev 3 or Dev 4
- Epic 3-5: Assigned in Week 2

---

### Step 3: Find Your First Story
**Check the [Parallel Work Assignment](./PARALLEL-WORK-ASSIGNMENT.md) document:**

**Week 1 - Day 1-2 Assignments:**
- **Dev 1:** Story 1.1 - Video Background
- **Dev 2:** Story 1.3 - Glass Card Component
- **Dev 3:** Story 2.2 - Products Grid Page (wait for 2.1)
- **Dev 4:** Story 2.4 - Product Detail Page (wait for 2.3)
- **Dev 5:** Story 1.5 - Sanity Site Settings (START FIRST)
- **Dev 6:** Story 2.1 - Product Category Schema (after 1.5)

---

### Step 4: Create Your Story Branch

```bash
# Example: Dev 1 working on Story 1.1
git checkout epic-01-first-impression
git pull origin epic-01-first-impression
git checkout -b story-1.1-video-background
git push -u origin story-1.1-video-background

# Start coding!
```

---

## 📖 Story File Locations

All story details are in subdirectories by epic:

```
docs/stories/
├── README.md (Epic overview)
├── PARALLEL-WORK-ASSIGNMENT.md (Your assignments)
├── GETTING-STARTED.md (This file)
├── STORY-TEMPLATE.md (For creating new stories)
├── epic-01/ (Epic 1 stories)
│   ├── story-1.1-video-background.md
│   ├── story-1.2-glassmorphism-header.md
│   ├── story-1.3-glass-card-component.md
│   ├── story-1.4-hero-content-overlay.md
│   └── story-1.5-sanity-site-settings.md
├── epic-02/ (Epic 2 stories)
│   ├── story-2.1-product-category-schema.md
│   └── [4 more stories...]
├── epic-03/ (Epic 3 stories - Week 2)
├── epic-04/ (Epic 4 stories - Week 2)
└── epic-05/ (Epic 5 stories - Week 2)
```

**Your story file contains:**
- User story
- Acceptance criteria
- Technical implementation
- Code examples
- Testing requirements
- Definition of done

---

## 🔄 Daily Workflow

### Morning (Start of Day)

```bash
# 1. Pull latest from epic branch
git checkout epic-XX-[name]
git pull origin epic-XX-[name]

# 2. Rebase your story branch
git checkout story-X.Y-[name]
git rebase epic-XX-[name]

# 3. Continue working
```

### During Day

```bash
# Commit frequently with descriptive messages
git add .
git commit -m "feat(story-1.1): implement video autoplay for desktop"

# Push to your branch
git push origin story-1.1-video-background
```

### End of Day / Story Complete

```bash
# 1. Push final changes
git push origin story-1.1-video-background

# 2. Create Pull Request
# Target: epic-XX-[name]
# Title: [Story 1.1] Video background with responsive fallbacks
# Description: Use PR template

# 3. Post in Slack
# "Story 1.1 ready for review - PR #XX"

# 4. Move to next story or help with reviews
```

---

## 🧪 Testing Your Story

**Before creating PR, run these checks:**

```bash
# Type check
pnpm tsc --noEmit

# Lint
pnpm lint

# Unit tests
pnpm test

# Build (make sure it compiles)
pnpm build

# E2E tests (if you added pages/features)
pnpm test:e2e
```

---

## ✅ Story Completion Checklist

Before marking story as "Done":

- [ ] All acceptance criteria met
- [ ] Code follows [Coding Standards](../architecture/coding-standards.md)
- [ ] Unit tests written and passing
- [ ] E2E tests written and passing (if UI changes)
- [ ] Manual testing completed
- [ ] No console errors or warnings
- [ ] Performance: Lighthouse score >90 (for new pages)
- [ ] Accessibility: No axe violations
- [ ] Code committed and pushed
- [ ] PR created targeting epic branch
- [ ] PR description filled out
- [ ] Requested 1-2 reviewers
- [ ] Posted in Slack for QA

---

## 🤝 Code Review Process

### As a Developer (Requesting Review)
1. Create PR with clear description
2. Link to story file in PR description
3. Add screenshots/videos if UI changes
4. Request specific reviewers
5. Respond to feedback within 2 hours

### As a Reviewer
1. Check PR within 2 hours of request
2. Run code locally and test
3. Check against acceptance criteria
4. Approve or request changes with specific feedback
5. Be constructive and kind

---

## 🚨 Common Issues & Solutions

### Issue: "My story branch conflicts with epic branch"

```bash
# Solution: Rebase
git checkout story-X.Y-name
git fetch origin
git rebase origin/epic-XX-name

# Fix conflicts if any, then:
git add .
git rebase --continue
git push --force-with-lease origin story-X.Y-name
```

### Issue: "I'm blocked waiting for another story"

**Solution: Check parallel work matrix and:**
1. Help review other PRs
2. Write tests for completed stories
3. Work on next story if independent
4. Ask in standup for reassignment

### Issue: "Sanity data not showing up"

**Solution:**
```bash
# Make sure Sanity project ID is in .env.local
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production

# Rebuild
pnpm build
```

### Issue: "Tests failing on CI but passing locally"

**Solution:**
```bash
# Clear caches and reinstall
rm -rf node_modules .astro
pnpm install
pnpm build
pnpm test
```

---

## 📞 Getting Help

### Ask in Standup (Preferred)
- Blockers
- Technical questions
- Clarifications on requirements

### Slack Channels
- `#twg-dev` - General development
- `#twg-qa` - Testing questions
- `#twg-blockers` - Urgent blockers

### Tag Specific People
- **Architecture questions:** @Dev2 (Component specialist)
- **Sanity/Backend:** @Dev5, @Dev6
- **Performance:** @QA2
- **Testing:** @QA1

---

## 📊 Track Your Progress

### Personal Checklist
- [ ] Environment setup complete
- [ ] Epic branch exists
- [ ] First story branch created
- [ ] Story file read and understood
- [ ] Acceptance criteria clear
- [ ] Started coding
- [ ] First commit made
- [ ] Tests written
- [ ] PR created
- [ ] PR approved
- [ ] Merged to epic

### Team Progress
Check daily standup notes or project board for:
- Stories completed today
- Stories in progress
- Stories blocked
- QA sign-offs

---

## 🎯 Success Tips

**Do:**
- ✅ Read your story file completely before coding
- ✅ Commit frequently with good messages
- ✅ Ask questions early
- ✅ Test on real devices (mobile, Safari)
- ✅ Help review others' PRs
- ✅ Follow coding standards strictly

**Don't:**
- ❌ Skip tests
- ❌ Force push without `--force-with-lease`
- ❌ Merge to development (only epic leads)
- ❌ Work on multiple stories simultaneously
- ❌ Commit directly to epic branches
- ❌ Ignore console warnings

---

## 📅 Week 1 Goals

**By End of Day 2 (Tuesday):**
- All foundational stories complete (1.3, 1.5, 2.1)
- Hero video rendering (1.1)
- Header navigation working (1.2)

**By End of Day 5 (Friday):**
- Epic 1 complete and merged to development
- Epic 2 complete and merged to development
- Preview deployment showing working site
- All Week 1 stories signed off by QA

---

## 🎉 You're Ready!

**Next Steps:**
1. Find your assignment in [PARALLEL-WORK-ASSIGNMENT.md](./PARALLEL-WORK-ASSIGNMENT.md)
2. Read your story file (e.g., `epic-01/story-1.1-video-background.md`)
3. Create your story branch
4. Start coding!

**Questions?** Ask in standup or `#twg-dev` Slack channel.

**Good luck! Let's build something amazing! 🚀**

---

**Document Version:** 1.0
**Last Updated:** 2025-11-07
**Status:** Ready for Team ✅
