# corespec

> Minimalist, tech-agnostic open source framework for AI-assisted software development, pairing low-boilerplate Spec-Driven Development (SDD) with Fast-Track iteration lanes.

---

## Core Philosophy

- **Token-Efficient by Design**: Modular workflows (one dedicated file per command/step) and strict Lazy Loading for project instructions keep context consumption minimal.
- **Pragmatic SDD**: Streamlined 3-step lifecycle (`Specify -> Build -> Verify`) with an optional feedback loop (`Reject`). Zero redundant documentation—no separate `design.md` files.
- **Fast-Track Lanes**: Tailored workflows for small incremental features, test-driven bugfixes, safe refactoring, and maintenance chores.
- **Stack & Tool Agnostic**: Central governance lives in `.ai/` and orchestrates via `AGENTS.md`. Universal text commands work across any AI chat or IDE, with native slash command adapters in `.agent/workflows/`.

---

## Quick Start (Day Zero)

Get up and running in under 2 minutes:

1. **Import corespec**: Copy `AGENTS.md`, `.ai/`, and `.agent/workflows/` into your target repository root.
2. **Initialize Context**: Run `/corespec.init-context` in chat. It scans existing code (or asks 4 quick questions for greenfield repos), creates `.ai/context/project-overview.md`, and suggests instructions for your tech stack.
3. **Set Project Laws**: Open [`.ai/context/constitution.md`](.ai/context/constitution.md) and fill in Section 2 (architectural constraints, test policies, prohibited packages).
4. **Start Building**:
   - For complex features: run `/corespec.specify` to clarify requirements and draft a spec.
   - For quick tasks or bugs: run `/corespec.feature` or `/corespec.bugfix`.

---

## Repository Structure

```text
corespec/
├── .agent/workflows/       # Native slash command adapters (wrappers for IDE autocomplete)
├── .ai/
│   ├── agents/             # Multi-agent role definitions and profiles
│   ├── context/            # Core state: project overview, ADRs, and supreme constitution
│   ├── instructions/       # Stack-specific coding guidelines loaded on demand (Lazy Loading)
│   ├── skills/             # Active engineering tools (code review, context init, commit, ADR)
│   ├── templates/          # Standard document molds (living specs, RFCs)
│   └── workflows/          # Modular engineering procedures (SDD, Fast-Track, Shared)
├── specs/                  # Living system specifications generated during SDD
├── AGENTS.md               # Global orchestrator, routing hub, and command registry
└── README.md               # Project documentation and quick start guide
```

---

## Command Reference

### Spec-Driven Development (SDD) & Shared

Used for new features, complex enhancements, and changes requiring structured specification and formal verification.

```text
/corespec.specify ──► [Approval Gate] ──► /corespec.build ──► /corespec.verify
                                                │    ▲
                                                ▼    │
                                         /corespec.reject (Optional)
```

| Command | Category | Description |
|---|---|---|
| `/corespec.specify` | SDD | Clarifies requirements (up to 5 questions with 3 options) and drafts `specs/<feature>.md`. |
| `/corespec.build` | Shared | Implements code and unit tests for approved spec (SDD) or approved plan (Fast-Track). |
| `/corespec.reject` | Shared | Resolves feedback, fixes bugs, or updates spec scope during implementation iteration. |
| `/corespec.verify` | SDD | Audits criteria statically, closes spec as `Verified`, and cleans ephemeral files. |

### Fast-Track

Used for rapid iterations without full specification overhead.

| Command | Mode | Description |
|---|---|---|
| `/corespec.feature` | Mode A | Plans small single-module feature with scope guardrail directly in chat. |
| `/corespec.bugfix` | Mode B | Isolates defect, writes failing reproduction test (TDD), and plans targeted fix. |
| `/corespec.refactor` | Mode C | Establishes test baseline, freezes test assertions, and cleans code smells. |
| `/corespec.chore` | Mode D | Updates dependencies, scripts, or configs with zero business logic changes. |

### Skills

Active engineering tools and capabilities.

| Command | Description |
|---|---|
| `/corespec.init-context` | Scans codebase or asks 4 questions to initialize Day Zero project context and rules. |
| `/corespec.code-review` | Non-destructive, read-only audit of git diffs classifying findings into Critical, Suggestion, and Nitpick. |
| `/corespec.commit` | Drafts Conventional Commits messages or PR summaries from diffs with explicit user approval gate. |
| `/corespec.adr` | Records sequential Architectural Decision Records under `.ai/context/adrs/NNN-<slug>.md`. |

---

## Customization & Language Policy

### Adding Stack Instructions (Lazy Loading)
1. Copy [`.ai/instructions/_template.md`](.ai/instructions/_template.md) to `.ai/instructions/<topic>.md` (e.g., `ui.md`, `network.md`, `storage.md`).
2. Register the file in the **Tech Instructions Registry** table inside [`AGENTS.md`](AGENTS.md) with its `Scope / Trigger`.
3. AI agents will **only** load the file when a task matches that specific trigger, conserving token budgets.

### Language Policy
- **Interaction & Living Specs**: Chat interactions and files generated in `specs/` follow the language used by the user in their prompt (defaulting to English if prompted in English, Spanish if prompted in Spanish). A fixed override can be set in [`.ai/context/constitution.md`](.ai/context/constitution.md).
- **Infrastructure & Code**: `AGENTS.md`, `.ai/`, source code, comments, and commit messages remain in **English** by default.
