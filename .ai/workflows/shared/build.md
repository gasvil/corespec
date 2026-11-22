# Shared Workflow: Build

**Command**: `/corespec.build`
**Objective**: Implement code, configurations, and tests for an approved specification (SDD) or approved chat action plan (Fast-Track).

---

## Context Evaluation

Determine the active mode:
1. **SDD Mode**: An active specification exists under `specs/<feature-name>.md` in `Draft` or `In Progress` status.
2. **Fast-Track Mode**: No active specification file exists, but an approved action plan or bugfix exists in the current chat.

---

## Execution: SDD Mode

1. **Context Loading**:
   - Read `specs/<feature-name>.md` along with [`.ai/context/`](../../context/) and applicable rules in [`.ai/instructions/`](../../instructions/).
   - Update spec status to `In Progress`.
2. **Design Discipline**:
   - Do **NOT** create separate design documents (no `design.md`).
   - If the implementation is complex, outline a concise block/phase plan directly in chat before editing files.
3. **Implementation & Tests**:
   - Write production code adhering to project architecture and coding standards.
   - Author unit tests covering all defined behaviors and acceptance criteria.
4. **Validation**:
   - Run compilation and the relevant test suite once.
   - Ensure all tests pass green before handing control back to the user.

---

## Execution: Fast-Track Mode

1. **Execution**:
   - Implement the approved chat plan (Mode A: Feature, Mode C: Refactor, Mode D: Chore) or apply the bugfix (Mode B: Bugfix).
   - Adhere to [`.ai/context/`](../../context/) and [`.ai/instructions/`](../../instructions/).
2. **Validation**:
   - Execute compilation, linting, and relevant test suites once to verify that changes pass green and no regressions occur.
   - Hand control back to the user upon green validation.
