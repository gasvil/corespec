# SDD: Specify

**Command**: `/corespec.specify`
**Objective**: Convert user requirements into an agreed, unambiguous specification.

---

## Process

1. **Role**: Act as an expert QA / Product Owner.
2. **Clarification**:
   - Analyze the user's initial request.
   - Ask **at most 5 critical questions** necessary to define functionality and scope. Do not overwhelm with low-probability edge cases.
   - For every question asked, provide **3 viable alternatives** and explicitly highlight the **recommended option**.
3. **Spec Drafting**:
   - Using the user's answers, create `specs/<feature-name>.md` following strictly [`.ai/templates/spec.md`](../../templates/spec.md).
   - Write the specification in the same language the user used in their prompt (unless an explicit override is set in [`.ai/context/constitution.md`](../../context/constitution.md)).
   - Set initial status to `Draft`.
4. **Mandatory Gate**: Stop and wait for explicit user approval before proceeding to implementation (`/corespec.build`).
