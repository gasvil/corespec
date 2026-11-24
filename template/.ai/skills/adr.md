# Skill: Architectural Decision Record (ADR)

Capture significant architectural decisions to preserve historical rationale and prevent repetitive debates.

---

## Storage & Naming

- Store all records under: `.ai/context/adrs/NNN-<short-slug>.md`
- Sequential numbering format: `001`, `002`, `003`, etc.
- Scan `.ai/context/adrs/` to determine the next sequential number. If the directory does not exist, initialize it with `001`.

---

## ADR Template Format

When recording a decision, follow this minimalist structure:

```markdown
# ADR-NNN: [Decision Title]

**Date**: YYYY-MM-DD
**Status**: Proposed | Accepted | Deprecated | Superseded

---

## 1. Context
[2 to 3 lines describing the problem, constraint, or requirement driving this decision.]

---

## 2. Decision
[Clear, unambiguous statement of the chosen architecture, pattern, or dependency.]

---

## 3. Alternatives Considered
- **[Alternative 1]**: [Brief rationale why it was not chosen]
- **[Alternative 2]**: [Brief rationale why it was not chosen]

---

## 4. Consequences
- **Positive**: [Expected benefit or trade-off gained]
- **Negative / Costs**: [Accepted friction, technical debt, or operational overhead]
```
