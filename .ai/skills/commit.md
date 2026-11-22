# Skill: Commit Message

Generate concise, compliant Conventional Commits messages or Pull Request descriptions based on current diffs.

---

## Operating Rules

- **Strict Approval Gate**: **Never** execute `git commit` or `git push` automatically. Always present the proposed message in chat and wait for explicit user confirmation.
- **Diff Source**: Inspect `git diff --staged`. If the staging area is empty, fall back to inspecting `git diff`.
- **Context Cross-Referencing**: If an active specification exists under `specs/`, correlate the changes with the feature name and scope.

---

## Process

1. **Diff Analysis**:
   - Categorize the change type: `feat`, `fix`, `refactor`, `chore`, `test`, `docs`, `perf`, `style`.
   - Identify the primary scope (e.g., module, package, or component name).
2. **Draft Conventional Commit**:
   - Format: `<type>(<scope>): <imperative summary in present tense>`
   - Keep the summary line under 72 characters.
   - If breaking changes exist, include `BREAKING CHANGE:` in the body.
   - If extensive changes were made, provide bullet points in the message body highlighting key modifications.
3. **Optional Pull Request Description**:
   - If requested by the user, generate a structured PR description including:
     - **Summary**: Concise bullet points of what changed and why.
     - **Related Spec / Issue**: Reference to the active spec in `specs/`.
     - **Testing Performed**: Commands run and test results.
