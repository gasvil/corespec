# Fast-Track: Bugfix

**Command**: `/corespec.bugfix`
**Objective**: Reproduce, isolate, and plan a defect resolution with precision.

---

## Process

1. **Investigation**:
   - Analyze error logs, stack traces, and codebase context to isolate the failure mechanism.
2. **Reproduction (Test-Driven)**:
   - Author a targeted unit test that replicates the reported bug and **fails** against current code.
   - *Fallback (Non-reproducible via unit test, e.g. UI layout, environment, pure configuration)*: Pinpoint the exact root cause in the source files and explain the diagnostic findings directly in chat.
3. **Fix Proposal**:
   - Outline a brief correction plan in chat explaining the root cause and proposed resolution.
   - Wait for user approval or trigger via `/corespec.build`.
4. **Verification**:
   - Apply the fix during build and run tests to confirm the reproduction test turns **green** and no existing tests regress.
