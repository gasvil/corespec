# Shared Workflow: Reject

**Command**: `/corespec.reject`
**Objective**: Resolve review feedback, fix defects, or adjust scope during implementation iteration.

---

## Context Evaluation

Determine the active mode:
1. **SDD Mode**: Working under an active specification file in `specs/<feature-name>.md`.
2. **Fast-Track Mode**: Working on an iterative task initiated via Fast-Track without a dedicated spec file.

---

## Execution: SDD Mode

**Scope**: Strictly confined to the current feature. Defects outside this feature belong to the Fast-Track workflow.

1. **Bug or Omission vs. Existing Spec**:
   - If the implementation fails to satisfy an existing criterion in the spec: fix the code and re-run tests. Do **NOT** modify `specs/<feature-name>.md`.
2. **New Requirement or Spec Change**:
   - If a use case was missing or business rules evolved: update `specs/<feature-name>.md` first as the single source of truth, then update code and tests.
3. **Validation Cycle**:
   - Re-run relevant tests to confirm green status.
   - Repeat this cycle as many times as the user requires before proceeding to verify.

---

## Execution: Fast-Track Mode

1. **Feedback Resolution**:
   - Review user feedback identifying bugs, regressions, or deviations from the agreed plan.
   - Adjust implementation, configuration, or tests directly without creating a specification file.
2. **Validation**:
   - Re-run relevant tests or verification checks to confirm resolution and maintain project health.
