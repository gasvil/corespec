# Fast-Track: Refactor

**Command**: `/corespec.refactor`
**Objective**: Structural cleanup, eliminating code smells, and improving readability and maintainability without altering observable functional behavior.

---

## Process

1. **Mandatory Baseline**:
   - Before proposing a plan or modifying code, execute existing tests for the affected module to establish a confirmed green baseline.
2. **Missing Tests Fallback**:
   - If the target code lacks test coverage, alert the user and present two clear paths:
     - *(Option 1 - Recommended)*: Write characterization tests first to freeze current behavior before refactoring.
     - *(Option 2)*: Request explicit user confirmation to proceed without a test safety net.
3. **Strict Test Freeze**:
   - **Never** modify assertions in existing tests during a refactor.
   - If a test fails post-refactor, treat it as an unintended behavioral regression: fix the production code, never alter the test to make it pass.
4. **Action Plan**:
   - Present a concise plan in chat detailing the code smells to address and the proposed structural changes.
   - Wait for user approval or trigger via `/corespec.build`.
