---
title: "VAT Replacement + Intermediate TrueCost Tax"
date: "2026-01-12"
tags:
  - tca
  - tax
  - policy adaptations
---

# VAT Replacement + Intermediate TrueCost Tax

This page explains the policy mechanism that keeps your original idea intact:

- the “true cost” signal should apply **throughout the supply chain** (not only at point-of-sale)
- it should be implemented in a **VAT-like** way (tax with input credits)
- it should be designed to **mitigate regressivity** by partially replacing VAT/BTW and recycling revenue

Related:

- [[Ideas/TrueCostAccounting/true_cost_accounting|White paper draft]]
- [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm]]

## Definitions

- $C(p)$: the Multi-Dimensional cost vector for product/service $p$ in €/unit
- $N_{ext}(C)$: the externality norm over $C_2..C_4$ (see [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm]])
- $EV(p)$: the “Externality Value” base for taxation; canonical choice here is $EV(p)=N_{ext}(C(p))$
- $ETR$: externality tax rate

Consumer-facing signal:

$$P_{signal}(p)=C_1(p)+EV(p)$$

## VAT-like mechanism (the key design)

VAT works because it is collected at every step, but firms only remit tax on the **value they add**, since they can deduct input VAT.

Analogously:

- each firm reports the incremental externality value it adds (or passes through) for a transaction
- tax is charged on that increment
- tax paid on inputs is creditable

This makes the system:

- harder to avoid by outsourcing
- aligned with supply-chain incentives (reduce upstream EV, reduce your own added EV)

## Regressivity mitigation: partial VAT/BTW replacement

Core logic:

- reduce broad VAT rates (especially on essentials)
- introduce/raise the externality tax on high-TrueCost goods and processes
- recycle revenues through:
  - targeted rebates/credits
  - subsidies for low-externality essentials
  - public goods that reduce externalities (health prevention, ecosystem restoration)

## Implementation notes (to be expanded)

- Confirm the definition of $EV$ (default: $EV=N_{ext}(C)$) and specify which components are taxable at which transaction stage
- Decide whether consumer health externalities ($C_4$) should be taxed at intermediate stages or only at final sale
- Define audit requirements and how they reduce the unknown penalty

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
