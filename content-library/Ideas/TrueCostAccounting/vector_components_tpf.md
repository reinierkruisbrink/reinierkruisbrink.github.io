---
title: "Vector Components (TPF-aligned)"
date: "2026-01-12"
tags:
  - tca
  - true-price
  - methods
---

# Vector Components (TPF-aligned)

Goal: define each coordinate of the Multi-Dimensional vector using **TPF-style impact → monetisation** logic (restoration/remediation), while keeping the model implementable with partial data.

This page is the bridge between:

- the conceptual model in [[Ideas/TrueCostAccounting/true_cost_accounting|True Cost Accounting (white paper)]], and
- the concrete factor notes in [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]].

## Canonical object

For a product/service $p$ in a defined scope and functional unit $u$ (e.g., 1 kg product), define:

$$C(p,u)=[C_1,C_2,C_3,C_4] \;\;\;\text{in }€ / u$$

Where each component is a sum of monetised impacts:

$$C_k=\sum_i (I_{k,i} \times F_{k,i})$$

- $I_{k,i}$ is a midpoint indicator (physical or monetary)
- $F_{k,i}$ is the monetisation factor (€/unit of indicator)

## Component definitions (proposed)

### $C_1$ Economic cost (status quo)

- Definition: observed market price (or COGS + margin) in €/u.
- Rationale: keeps continuity with current accounting; also provides a base for tax comparisons.

Canonical choice in this folder:

- $C_1$ stays as-is
- externalities are aggregated separately as a norm over $C_2..C_4$

### $C_2$ Social externality (rights + wage gaps + worker health)

TPF-aligned building blocks:

- Living income / living wage gap (€, already monetary)
- Child labour remediation cost (€/child-hour or €/case)
- Forced labour remediation cost (€/case)
- Occupational health & safety impacts monetised via DALYs (€/DALY)

Proposed form:

$$C_2 = \text{WageGap} + \text{LivingIncomeGap} + (\text{DALY}_{\text{OHS}} \times V_{\text{DALY}}) + \text{RightsRemediation}$$

Links:

- [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]]
- [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for the unknown penalty]]

### $C_3$ Environmental externality (restoration/removal/cleanup)

TPF-style logic: monetise pressures with factors that represent long-run restoration/remediation costs.

Common indicator families:

- Climate: kg CO2e
- Water: m³ water consumed (scarcity-adjusted)
- Land use / biodiversity: e.g., MSA loss, ha·year equivalents, or restoration cost proxy
- Pollution: kg PM2.5 precursors, eutrophication, acidification (as available)

Proposed form (illustrative):

$$C_3 = (\text{kg CO2e} \times F_{\text{CO2}}) + (\text{m}^3\text{ water} \times F_{\text{water,region}}) + (\text{biodiversity proxy} \times F_{\text{biodiv}}) + \dots$$

### $C_4$ Consumer/public health externality (diet + processing + consumer exposure)

This is the “TPF gap” you highlighted: most practical implementations emphasise worker health (OHS), not consumer health.

Proposal: define a conservative “risk proxy” module that translates nutrition/processing into DALY-equivalent burden.

Inputs (examples):

- Nutri-Score (A–E) and NOVA (1–4) from Open Food Facts
- Ingredient flags (e.g., added sugar, trans fats) where available

Proposed structure:

$$C_4 = (\text{DALY}_{\text{diet-risk}} \times V_{\text{DALY}}) + (\text{DALY}_{\text{consumer pollution}} \times V_{\text{DALY}})$$

Key discipline:

- document assumptions explicitly
- prefer conservative, transparent mappings (avoid pretending precision)

## How this connects to the norm

Once $C$ is computed, apply:

- [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm and “strong sustainability”]]

## To implement (checklist)

- Pick the canonical functional units for your first pilots (food: €/kg and €/100 kcal are both useful)
- Define weights for $N_{ext}(C)$ and document governance assumptions
- Create a small “factor registry” table: factor name, value, unit, geography, year, source

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
