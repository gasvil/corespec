# Fast-Track: Chore

**Command**: `/corespec.chore`
**Objective**: Technical maintenance, dependency updates, configuration adjustments, scripts, and developer tooling with zero business logic changes.

---

## Process

1. **Zero Business Logic Rule**:
   - Diffs must be strictly confined to dependencies, configurations, scripts, or infrastructure tooling.
   - Strictly forbidden to combine technical chores with functional feature changes or domain business logic.
2. **Impact Analysis in Chat**:
   - Before executing, provide a clear impact analysis in chat outlining:
     1. Files, packages, or dependencies being added, updated, or removed.
     2. Potential breaking changes, deprecations, or compatibility risks.
     3. Verification plan to validate project integrity (build check, linter, test suite).
3. **Action Plan**:
   - Outline the execution steps and wait for user approval or trigger via `/corespec.build`.
