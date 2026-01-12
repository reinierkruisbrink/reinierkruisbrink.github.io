---
title: "Related Work: TPF, LCA, ESG, Labels"
date: "2026-01-12"
tags:
  - tca
  - methods
  - landscape
---

# Related Work: TPF, LCA, ESG, Labels

This page positions TCA relative to existing approaches. The aim is to be precise about what each approach is good at, and what TCA changes.

## True Price Foundation (TPF) / Impact Institute / GID

What it contributes:

- practical methodologies to translate impacts into € using restoration/remediation logic
- a “factor” mindset that is implementable (impact indicators → monetisation factors)

How TCA uses it:

- TPF-style factors are the backbone for defining $C_2..C_4$
- see [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]] and [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]

Where TCA extends it:

- uses a norm over externalities to avoid cancellation effects (see [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm]])
- adds an explicit unknown penalty as a transparency enforcement mechanism (see [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]])
- focuses more explicitly on consumer/public health as its own component ($C_4$)

## Life Cycle Assessment (LCA)

What it contributes:

- rigorous accounting of environmental pressures across the lifecycle
- consistent methodological standards (scope, functional unit, boundary conditions)

How TCA relates:

- LCA is a key supplier of indicators for $C_3$ (and sometimes health exposure components)
- TCA is not “competing with LCA”; it is a downstream decision/tax layer that needs LCA-like inputs

TCA-specific twist:

- when LCA data is missing, TCA requires a default prior + penalty rather than treating missingness as neutral (see [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]]).

## ESG reporting

What it contributes:

- disclosure pressure on firms
- standardized categories and narrative comparability

Limitations that TCA addresses:

- ESG is often not transaction-linked (weak immediate incentive)
- ESG scores can be gamed and are hard to compare across sectors

TCA’s stance:

- disclosures become economically meaningful when translated into a product/service-level cost object and then taxed/credited across the supply chain.

## Consumer labels (Nutri-Score, Eco-Score, etc.)

What they contribute:

- interpretability and behavior nudges

Limitations:

- labels alone do not change supply-chain incentives
- labels often focus on one dimension at a time

How TCA uses them:

- labels can supply indicators (especially for $C_4$ via diet/processing proxies)
- the TCA tax mechanism provides the “hard signal” behind the label

## Carbon taxes / cap-and-trade

What they contribute:

- proven policy mechanisms for one dimension (carbon)

How TCA differs:

- generalizes the idea to multiple externality families
- uses a VAT-like mechanism to propagate incentives through the chain (see [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement + intermediate TrueCost tax]])

## Summary: what is distinctive here

- **Object**: Multi-Dimensional vector $C=[C_1,C_2,C_3,C_4]$ in €/unit
- **Aggregation**: norm over externalities $N_{ext}(C)$ (strong sustainability)
- **Enforcement**: unknown penalty for missing/unverified data
- **Policy**: VAT-like intermediate externality taxing + partial VAT replacement for equity

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
