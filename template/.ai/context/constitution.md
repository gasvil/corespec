# Project Constitution

This document serves as the supreme governance framework for AI-assisted engineering and human contributors across the repository.

---

## 1. Universal Engineering Principles

These foundational principles are active by default and apply to all workflows, agents, and contributions.

- **DRY (Don't Repeat Yourself)**: Avoid duplicating logic, configuration, or contracts. Establish a single source of truth for shared schemas, utilities, and business rules.
- **Zero Hardcoded Secrets**: Never commit or hardcode credentials, API tokens, encryption keys, or sensitive environment variables. Always rely on secure secret managers or validated environment variable schemas.
- **Explicit Error Handling**: Fail visibly and predictably. Never swallow, suppress, or discard errors without handling or re-throwing them. Provide informative error messages and actionable diagnostic context.
- **Clarity Over Cleverness**: Prioritize readable, maintainable code over overly concise or complex one-liners. Choose straightforward abstractions (KISS & YAGNI) and avoid premature optimization or over-engineering.
- **Strict Scope Control**: Keep changes strictly confined to the requested task or issue. Do not introduce unsolicited refactors, reformatting of untouched files, or unrelated dependency changes.

---

## 2. Project-Specific Laws

Define project-level non-negotiables below on Day Zero. When set, these override standard defaults and bind all AI interactions.

### 2.1 Architectural Constraints
<!-- Define module boundaries, approved patterns (e.g., Clean Architecture, Ports & Adapters), and forbidden cross-layer imports. -->
<!-- Example: Domain layer must have zero dependencies on framework or UI code. -->

### 2.2 Prohibited Dependencies
<!-- List banned packages, libraries, or licenses (e.g., GPL, abandoned libraries, deprecated frameworks). -->
<!-- Example: No external utility libraries like Lodash when modern language primitives suffice. -->

### 2.3 Testing Policy
<!-- Specify mandatory test types, test-driven development (TDD) rules, coverage targets, or required mocking frameworks. -->
<!-- Example: All business logic must have unit tests covering edge cases before merging. -->

### 2.4 Performance Requirements
<!-- Define runtime limits, memory ceilings, latency budgets, payload size limits, or frame rate targets. -->
<!-- Example: API response time P95 < 200ms; bundle size must not exceed 150KB gzip. -->

### 2.5 Documentation & Spec Language Overrides
<!-- By default, chat interaction and files generated in specs/ follow the language used by the user in their prompt. All internal infrastructure (AGENTS.md, .ai/, source code, comments, commit messages) remains in English. -->
<!-- If your project requires a fixed language for specs (e.g., strictly English for international teams), declare that override here. -->
<!-- Example: All living specifications under specs/ must be authored strictly in English regardless of prompt language. -->
