# Skill: Backlog Management

Capture ideas, upcoming enhancements, and deferred features without interrupting active workflows or causing scope creep.

---

## Operating Rules

- **Zero Code Modification**: **Never** modify source code, test files, or configurations from this skill. It strictly manages `specs/backlog.md`.
- **Target File**: Maintain all items under `specs/backlog.md`. If the file does not exist, initialize it automatically using the template below.
- **Language Consistency**: Write backlog items in the same language used by the user in their prompt.
- **Deduplication**: Verify existing entries to avoid adding redundant items.

---

## Process

1. **Add Item**:
   - Extract the proposed feature, enhancement, or idea from the user's prompt.
   - Append a concise, actionable bullet:
     `- [ ] **[Topic/Area]**: [Description of expected capability or enhancement]`
   - Confirm addition with a brief response.

2. **List Items**:
   - When asked to show or review the backlog, read `specs/backlog.md` and present the open items cleanly in chat.

3. **Complete or Remove Items**:
   - Mark satisfied items as done (`- [x]`) or remove obsolete items when explicitly instructed by the user.

---

## Baseline Format (`specs/backlog.md`)

If `specs/backlog.md` does not exist, create it with this initial format:

```markdown
# Project Backlog

Collection of deferred ideas, feature candidates, and future improvements.

---

## Ideas & Enhancements
- [ ] **[Topic]**: [Description]
```
