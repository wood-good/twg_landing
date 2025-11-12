# Story Template

Use this template to create additional story files following the established pattern.

---

## Story Header

```markdown
# Story X.Y: [Story Name]

**Story ID:** STORY-X.Y
**Epic:** Epic X - [Epic Name]
**Priority:** P0/P1/P2
**Effort:** X hours
**Assignee:** [Role]
**Branch:** `story-X.Y-[story-name]` (from `epic-0X-[epic-name]`)
```

---

## Required Sections

1. **User Story** (As a... I want... So that...)
2. **Description** (What needs to be built)
3. **Acceptance Criteria** (Checklist of requirements)
4. **Technical Implementation** (Code examples)
5. **Dependencies** (Blocked By / Blocks / External)
6. **Testing Checklist** (Unit, E2E, Manual)
7. **Definition of Done** (Final checklist)

---

## Branching Instructions

```bash
# Create story branch from epic branch
git checkout epic-0X-[epic-name]
git pull origin epic-0X-[epic-name]
git checkout -b story-X.Y-[story-name]
git push -u origin story-X.Y-[story-name]

# Work on story...

# Create PR when done
# Target: epic-0X-[epic-name]
# After merge: delete story branch
```

---

## Notes

- All stories follow the pattern established in Epic 1
- Refer to existing story files for detailed examples
- Keep stories focused and independent when possible
- Ensure all acceptance criteria are testable
- Include both positive and negative test cases
