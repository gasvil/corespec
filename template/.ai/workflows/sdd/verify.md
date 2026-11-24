# SDD: Verify

**Command**: `/corespec.verify`
**Objective**: Final quality gate, specification closure, and repository hygiene.

---

## Process

1. **Token Conservation Rule**:
   - Do **NOT** re-run test suites if no code changes occurred since the last successful execution in Build or Reject.
2. **Static Spec Audit**:
   - Review code changes against each checkbox in `specs/<feature-name>.md`.
   - Mark satisfied criteria as completed (`- [x]`).
   - Update spec status to `Verified`.
3. **Hygiene & Cleanup**:
   - Delete any ephemeral or temporary `.md` files or scratch notes generated during development.
   - Keep only `specs/<feature-name>.md` and permanent documentation.
4. **Context Synchronization**:
   - If the feature introduced architectural shifts, new shared utilities, or updated project conventions, prompt the user to record them in [`.ai/context/`](../../context/).
