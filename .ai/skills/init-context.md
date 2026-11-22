# Skill: Initialize Context

Onboard a new or existing repository by establishing baseline architectural context and project rules on Day Zero.

---

## Process

1. **Repository Discovery**:
   - **Existing Codebase**:
     - Inspect directory structure, package manifests (`package.json`, `Cargo.toml`, `go.mod`, `Package.swift`, `build.gradle`, `pyproject.toml`, etc.), and configuration files.
     - Detect primary languages, frameworks, architectural layers, and test suites.
   - **Greenfield / Empty Repository**:
     - Ask **at most 4 focused questions** covering:
       1. Primary programming language and framework.
       2. Application type (e.g., mobile app, backend API, web frontend, CLI).
       3. Target architecture (e.g., Clean Architecture, Modular, Monolith, Microservice).
       4. Primary business purpose or product goal.

2. **Artifact Generation & Updates**:
   - **Project Overview**:
     - Create or draft [`.ai/context/project-overview.md`](../context/project-overview.md) with:
       - **Product Summary**: 1–2 sentences on what the system does.
       - **Technology Stack**: Core languages, runtimes, frameworks, and storage.
       - **Directory Map**: High-level explanation of major folders.
   - **Constitution Customization**:
     - Propose additions for Section 2 (Project-Specific Laws) in [`.ai/context/constitution.md`](../context/constitution.md) (architectural constraints, forbidden packages, testing thresholds).
   - **Tech Instructions Setup**:
     - Propose recommended instruction files to create under `.ai/instructions/` (using [`.ai/instructions/_template.md`](../instructions/_template.md)).
     - Propose the exact rows to add to the "Tech Instructions Registry" table in [AGENTS.md](../../AGENTS.md).

3. **Confirmation Gate**:
   - Present the proposed context documents to the user.
   - Request explicit approval before creating or modifying any existing files.
