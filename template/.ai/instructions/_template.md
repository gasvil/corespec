<!--
NOTE FOR AI AGENTS:
This file is a template and mold only. Do NOT load or apply this file during workflow execution.
Whenever a new instruction file is authored from this template, register it with its Scope/Trigger
in the "Tech Instructions Registry" section of AGENTS.md to enable lazy loading.
-->

# [Domain / Stack Topic] Instructions

Concise guidelines and standards for [e.g., UI, Networking, Persistence, Architecture, Core Conventions].

---

## 1. Scope
<!-- Define when this instruction set applies (e.g. file patterns, directories, architectural layer, or feature type). -->
<!-- Example: Applies to all files in `src/ui/**`, view models, and UI component tests. -->

- **Applies to**: [Target path patterns, components, or tasks]
- **Excludes**: [Explicit boundaries or components governed by other files]

---

## 2. Architecture & Patterns
<!-- Define required structural patterns, design idioms, and layer boundaries. -->
<!-- Example: MVVM / Clean Architecture / Repository pattern requirements. -->

- **Pattern**: [Primary architectural pattern and component lifecycle]
- **Data Flow**: [Unidirectional data flow, state management, dependency injection rules]
- **Separation of Concerns**: [Allowed and forbidden imports / cross-layer calls]

---

## 3. Naming & Style Conventions
<!-- Outline naming standards, directory structures, and code idioms. -->

- **Files & Directories**: [e.g., kebab-case, PascalCase, suffixes like .view.ts, .service.go]
- **Types & Interfaces**: [e.g., PascalCase, prefixes/suffixes, immutability rules]
- **Methods & Functions**: [e.g., camelCase, verb-first naming, async suffixes]

---

## 4. Do's & Don'ts

### Do
- [Actionable practice to consistently follow]
- [Actionable practice to consistently follow]

### Don't
- [Anti-pattern or forbidden practice to avoid]
- [Anti-pattern or forbidden practice to avoid]
