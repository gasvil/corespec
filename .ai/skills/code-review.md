# Skill: Code Review

Comprehensive, non-destructive static review for git diffs or targeted files.

---

## Operating Rules

- **Read-Only Mode**: **Never** modify code, format files, or apply fixes automatically during review. Provide recommendations only.
- **Context & Lazy Loading**:
  - Always enforce [`.ai/context/constitution.md`](../context/constitution.md).
  - Inspect changed file paths and lazy load **only** matching instructions registered in [AGENTS.md](../../AGENTS.md).

---

## Review Process

1. **Diff Inspection**:
   - Inspect staged changes (`git diff --staged`) or unstaged changes (`git diff`), or examine the specific files indicated by the user.
2. **Quality & Standard Checks**:
   - **Correctness & Edge Cases**: Logic errors, nil/null pointer risks, unhandled errors, concurrency issues.
   - **Security**: Hardcoded credentials, injection vulnerabilities, unvalidated inputs, insecure defaults.
   - **Architecture & Maintainability**: Adherence to project instructions, DRY principle, separation of concerns, readability.
3. **Structured Findings Output**:
   Group all findings by severity:
   - **Critical**: Must-fix bugs, security flaws, data corruption risks, or direct violations of constitution principles.
   - **Suggestion**: Architectural improvements, performance optimizations, or simplification opportunities.
   - **Nitpick**: Minor stylistic or naming conventions.

For each finding, specify:
`[File:Line]` - Clear explanation of the issue and a concise suggested resolution.

> **Clean Diff Confirmation**: If no critical findings are discovered, explicitly state that no blocking issues were found.
