# AGENTS.md

Global orchestrator and routing hub for AI agents and developer workflows in **corespec**.

---

## 1. Precedence & Hierarchy

Rules and guidelines are evaluated in strict order of authority:

1. **Supreme Law**: [`.ai/context/constitution.md`](.ai/context/constitution.md)
   - Highest authority in the repository.
   - If any workflow, skill, instruction, agent role, or template conflicts with the constitution, **the constitution always prevails**.
2. **Project Instructions**: `.ai/instructions/` (Coding standards, architectural guidelines, stack-specific rules).
3. **Active Workflows & Skills**: `.ai/workflows/` and `.ai/skills/` (Operational procedures and actionable capabilities).
4. **Templates & Outputs**: `.ai/templates/` and `specs/` (Document molds and living specifications).

---

## 2. Language Policy

- **Interaction & Specs**: Chat interactions and generated specification files under `specs/` must be written in the same language used by the user in their prompt, unless an explicit fixed language override is configured in [`.ai/context/constitution.md`](.ai/context/constitution.md).
- **Infrastructure & Code**: Keep `AGENTS.md`, `.ai/`, source code, comments, and commit messages in **English** by default.

---

## 3. Routing Map

All AI governance and operations live under `.ai/`:

- [`.ai/context/`](.ai/context/): Core project state, architectural decisions (`adrs/`), and the project constitution ([`constitution.md`](.ai/context/constitution.md)).
- `.ai/workflows/`: Modular technology-agnostic engineering workflows.
  - `sdd/`: Spec-Driven Development workflows ([`specify.md`](.ai/workflows/sdd/specify.md), [`verify.md`](.ai/workflows/sdd/verify.md)).
  - `fast-track/`: Rapid iteration workflows ([`feature.md`](.ai/workflows/fast-track/feature.md), [`bugfix.md`](.ai/workflows/fast-track/bugfix.md), [`refactor.md`](.ai/workflows/fast-track/refactor.md), [`chore.md`](.ai/workflows/fast-track/chore.md)).
  - `shared/`: Shared lifecycle execution workflows ([`build.md`](.ai/workflows/shared/build.md), [`reject.md`](.ai/workflows/shared/reject.md)).
- `.ai/instructions/`: Passive quality rules and stack-specific guidelines (loaded on demand via Section 5).
- `.ai/skills/`: Reusable agent capabilities and active tools ([`code-review.md`](.ai/skills/code-review.md), [`init-context.md`](.ai/skills/init-context.md), [`commit.md`](.ai/skills/commit.md), [`adr.md`](.ai/skills/adr.md)).
- `.ai/templates/`: Standardized templates for specifications and execution plans.
  - [`.ai/templates/spec.md`](.ai/templates/spec.md): Template for living specifications (`specs/<feature-name>.md`). Used during Step 1 (Specify) of SDD.
- `.ai/agents/`: Role definitions and profiles for multi-agent setups.
- `specs/`: Living system specifications generated during development.

---

## 4. Command Triggers

These commands serve as native slash command adapters (`.agent/workflows/`) and text triggers across any AI chat or IDE:

### Spec-Driven Development (SDD)
Used for new features, complex enhancements, and changes requiring structured specification and formal verification.

| Command | Action | Workflow Step |
|---|---|---|
| `/corespec.specify` | Clarify requirements and draft specification | Step 1: Specify in [`.ai/workflows/sdd/specify.md`](.ai/workflows/sdd/specify.md) |
| `/corespec.build` | Implement code and tests for approved spec | Shared: Build in [`.ai/workflows/shared/build.md`](.ai/workflows/shared/build.md) |
| `/corespec.reject` | Resolve feedback, fix defects, or update scope | Shared: Reject in [`.ai/workflows/shared/reject.md`](.ai/workflows/shared/reject.md) |
| `/corespec.verify` | Audit acceptance criteria and close specification | Step 3: Verify in [`.ai/workflows/sdd/verify.md`](.ai/workflows/sdd/verify.md) |

### Fast-Track
Used for small incremental changes, defect fixes, structural cleanups, and maintenance chores without full specification overhead.

| Command | Action | Workflow Step |
|---|---|---|
| `/corespec.feature` | Plan targeted small feature without full spec | Mode A: Small Feature in [`.ai/workflows/fast-track/feature.md`](.ai/workflows/fast-track/feature.md) |
| `/corespec.bugfix` | Reproduce, isolate, and plan defect fix with test | Mode B: Bugfix in [`.ai/workflows/fast-track/bugfix.md`](.ai/workflows/fast-track/bugfix.md) |
| `/corespec.refactor` | Clean up structure and smells without altering behavior | Mode C: Refactor in [`.ai/workflows/fast-track/refactor.md`](.ai/workflows/fast-track/refactor.md) |
| `/corespec.chore` | Execute maintenance, dependency, or config update | Mode D: Chore in [`.ai/workflows/fast-track/chore.md`](.ai/workflows/fast-track/chore.md) |
| `/corespec.build` | Implement code and tests for approved plan | Shared: Build in [`.ai/workflows/shared/build.md`](.ai/workflows/shared/build.md) |
| `/corespec.reject` | Resolve feedback, fix regressions, or update scope | Shared: Reject in [`.ai/workflows/shared/reject.md`](.ai/workflows/shared/reject.md) |

### Skills
Reusable capabilities and active engineering tools.

| Command | Action | Workflow Step |
|---|---|---|
| `/corespec.code-review` | Audit diffs or files for bugs, security, and quality | Skill in [`.ai/skills/code-review.md`](.ai/skills/code-review.md) |
| `/corespec.init-context` | Scan codebase and initialize Day Zero context | Skill in [`.ai/skills/init-context.md`](.ai/skills/init-context.md) |
| `/corespec.commit` | Draft Conventional Commit or Pull Request summary | Skill in [`.ai/skills/commit.md`](.ai/skills/commit.md) |
| `/corespec.adr` | Document architectural decision record in `.ai/context/adrs/` | Skill in [`.ai/skills/adr.md`](.ai/skills/adr.md) |

---

## 5. Tech Instructions Registry

Agents must follow a strict **Lazy Loading** strategy to conserve context tokens:

- **Rule**: Do **NOT** read all files in `.ai/instructions/` by default. Load **ONLY** the specific files whose Scope / Trigger matches the active task, plus `global.md` if present and designated as `Always`.
- **Exclusion**: Always ignore [`.ai/instructions/_template.md`](.ai/instructions/_template.md) during task execution.

<!-- Example commented registry table:
| Scope / Trigger | File |
|---|---|
| Always | .ai/instructions/global.md |
| UI components & screens | .ai/instructions/ui.md |
| Networking & API calls | .ai/instructions/network.md |
| Local persistence | .ai/instructions/storage.md |
-->

| Scope / Trigger | File |
|---|---|
<!-- Register active project instructions below -->
