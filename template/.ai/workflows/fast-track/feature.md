# Fast-Track: Small Feature

**Command**: `/corespec.feature`
**Objective**: Plan and propose a targeted, single-module enhancement or minor addition without full specification overhead.

---

## Process

1. **Scope Guardrail**:
   - Assess requested scope before taking action.
   - If the request touches multiple modules, requires database/schema migrations, alters core architectural boundaries, or introduces complex business rules: **halt immediately**, alert the user, and advise switching to `/corespec.specify`.
2. **Minimal Clarification**:
   - If the prompt is clear and self-contained, ask **zero** questions.
   - If critical ambiguities exist, ask **at most 3 targeted questions**.
3. **Action Plan**:
   - Present a concise, numbered plan directly in chat outlining:
     - Files to modify or create.
     - Planned implementation logic.
     - Unit tests to be added or updated.
   - Do **NOT** create a `spec.md` or design document.
   - Wait for explicit user confirmation before building (or proceed upon `/corespec.build`).
4. **Spec Synchronization**:
   - Upon completing the build, if the change modifies a capability already documented in `specs/`, suggest a brief (1–2 line) update to keep that existing living spec synchronized.
