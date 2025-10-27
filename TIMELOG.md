# Time Log - Strive Soda Development

**Purpose:** Track all work sessions with granular commits for transparent hourly billing.

**Format:** Each entry includes date, time, duration, work summary, and associated commits.

---

## October 2025

### October 27, 2025

#### Session 1: Development Environment Setup
**Time:** 12:28 PM - 12:50 PM (22 minutes)
**Tasks:**
- Installed Shopify CLI (v3.86.1) via Homebrew
- Authenticated with Shopify store (ab6dae-bb.myshopify.com)
- Pulled production theme (#182679339300) to local environment
- Verified theme files synced (86 sections, 46 snippets, 23 templates)
- Created DEV-WORKFLOW.md with comprehensive testing → production workflow
- Created TIMELOG.md for time tracking and billing transparency
- Documented small commit workflow practices

**Git Commits:**
- (pending) "Add DEV-WORKFLOW.md and TIMELOG.md - Setup local development environment"

**Shopify Changes:**
- None (setup only)

**Notes:**
- Local environment now matches production exactly
- Ready to start development work with proper workflow in place

---

## Time Tracking Template

Copy this template for each new session:

```markdown
### [Date]

#### Session [N]: [Brief Description]
**Time:** [Start] - [End] ([Duration])
**Tasks:**
- [One-liner task description]
- [One-liner task description]

**Git Commits:**
- "[Commit message]" (SHA: [hash])

**Shopify Changes:**
- [File pushed to production] or "None"

**Notes:**
- [Any relevant context or decisions]
```

---

## Billing Summary

**October 2025 Total:** 0.37 hours (22 minutes)

### Breakdown by Date:
- Oct 27: 0.37 hours

---

## Commit Best Practices (From This Point Forward)

### Small, Atomic Commits

**DO:**
- ✓ One logical change per commit
- ✓ Commit after each completed task
- ✓ Write descriptive commit messages
- ✓ Push to GitHub frequently
- ✓ Test before committing

**Example Good Commits:**
```
✓ "Fix hero video white space on mobile breakpoint"
✓ "Update Peach Perfect nutrition label to 10g carbs"
✓ "Add Store Locator link to header navigation"
```

**DON'T:**
- ✗ Batch multiple unrelated changes
- ✗ Vague messages like "fixes" or "updates"
- ✗ Commit untested code

**Example Bad Commits:**
```
✗ "Update website"
✗ "Fix stuff"
✗ "End of day commit"
```

### Commit Flow

1. **Make a change** (fix one bug, add one feature, update one section)
2. **Test locally** (`shopify theme dev`)
3. **Stage the change** (`git add [file]`)
4. **Commit with description** (`git commit -m "Clear description"`)
5. **Update this log** (add one-liner to TIMELOG.md)
6. **Push when ready** (`git push origin main`)

### Shopify Deploy Flow

1. **Batch related changes** (e.g., all fixes for Science page)
2. **Test thoroughly on dev server**
3. **Get approval/confirmation** from client or yourself
4. **Push to production** (`shopify theme push`)
5. **Document in TIMELOG.md** with files changed

---

## Session Workflow

**Starting a work session:**
1. Open TIMELOG.md
2. Add new session entry with start time
3. List planned tasks
4. Start `shopify theme dev` server
5. Begin work

**During work:**
- Commit after each logical change
- Update task list as you complete items
- Test continuously on dev server

**Ending a work session:**
1. Complete final commits
2. Stop dev server
3. Update TIMELOG.md with end time and duration
4. Calculate total hours worked
5. Push commits to GitHub
6. Review what was accomplished

---

## Quick Reference

**Start work session:**
```bash
# 1. Update TIMELOG.md with session start
# 2. Start dev server
shopify theme dev --store=ab6dae-bb.myshopify.com --theme=182679339300
```

**After each task:**
```bash
git add [file]
git commit -m "Clear description of change"
# Update TIMELOG.md task list
```

**End work session:**
```bash
# 1. Update TIMELOG.md with end time
# 2. Calculate duration
git push origin main
```

**Deploy to production (tested changes only):**
```bash
shopify theme push --store=ab6dae-bb.myshopify.com --theme=182679339300
# Update TIMELOG.md with files deployed
```

---

Last updated: October 27, 2025
