---
title: "TCA Documentation Plan (Quartz Graph)"
date: "2026-01-12"
tags:
  - tca
  - meta
---

# TCA Documentation Plan (Quartz Graph)

This is a **meta plan**: a practical guide for you (or another Copilot model) to expand the TCA wiki into a coherent, linked set of articles.

Constraint: preserve the original core idea (Multi-Dimensional vector + externality norm + VAT-like intermediate tax + partial VAT replacement to mitigate regressivity), and use TPF’s logic to define the vector components.

## 0) Canonical glossary (keep consistent across pages)

- **TCA**: True Cost Accounting
- **TPF**: True Price Foundation
- **GID**: Global Impact Database (Impact Institute / TPF ecosystem)
- **Indicator**: midpoint variable (physical, monetary, or categorical)
- **Monetisation factor**: €/unit indicator (restoration/remediation cost)
- **Functional unit**: the reference unit for the product/service (€/kg, €/meal, €/hour)
- **Unknown penalty**: rule for missing/unverified data

## 1) Page map (what exists + what each page must contain)

Start at [[Ideas/TrueCostAccounting/index|TCA index]].

### A. Main narrative

- [[Ideas/TrueCostAccounting/true_cost_accounting|True Cost Accounting (white paper)]]
  - Purpose: persuasive narrative + high-level method
  - Needs: add outbound links at each section boundary to the “wiki” pages below

### B. The math object

- [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]
  - Must define: $C_1..C_4$ as sums of (indicator × factor)
  - Must include: a small “factor registry template” (table schema)

- [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm]]
  - Must explain: why norm > sum
  - Must handle: “include $C_1$ or not?” fork

### C. Data and the transparency mechanism

- [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]]
  - Must define: what counts as unknown; the quantile rule; how to reduce penalty

- [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for unknown penalty]]
  - Must contain: dataset registry; mapping from product→sector→country; conversion notes

- [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]]
  - Must contain: a stable mapping table from indicator families to factors (with TODO markers where uncertain)

### D. Tax design and equity

- [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement + intermediate TrueCost tax]]
  - Must define: Externality Value (EV) tax base; input-credit mechanism
  - Must include: regressivity mitigation mechanisms and revenue recycling options

- [[Ideas/TrueCostAccounting/weights_and_governance|Weights and governance]]
  - Must explain: legitimacy, lobbying, versioning, and anti-gaming controls

### E. Demo / feasibility

- [[Ideas/TrueCostAccounting/experiment_demo|Experiment demo]]
  - Must become: a worked example with real numbers and a reproducible pipeline

## 2) Writing order (the “minimum viable wiki”)

1. Expand [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components]] with a concrete factor registry and example calculation for one product.
2. Expand [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]] with a fully specified quantile rule + update cadence.
3. Expand [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement]] with an explicit EV definition and a numeric toy supply chain (3-step).
4. Tighten [[Ideas/TrueCostAccounting/true_cost_accounting|white paper]] by replacing repeated text with links to the pages above.
5. Convert [[Ideas/TrueCostAccounting/experiment_demo|experiment demo]] into a “methods appendix” (inputs, computations, outputs).

## 3) Quartz linking conventions (so the graph is useful)

- Every page ends with: `**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]`
- First mention of a concept should link to its canonical page.
- Prefer fewer, stronger links:
  - norms → [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm]]
  - missing data → [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]]
  - factors → [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]]

## 4) Implementation checklist (data → cost → tax)

A future implementation should follow these steps:

1. Choose pilot domain (food is already started).
2. Define functional units.
3. Build a factor registry (versioned).
4. Build a dataset registry (versioned).
5. Implement unknown penalty rule.
6. Compute $C$ and $N_{ext}(C)$.
7. Define EV and compute VAT-like net remittance across steps.
8. Produce outputs for communication (4-color diagram, receipt line items, product comparisons).

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
