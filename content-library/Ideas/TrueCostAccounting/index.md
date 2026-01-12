---
title: "True Cost Accounting"
date: "2026-01-01"
---

# True Cost Accounting (TCA)

Modern market economies are extremely good at optimizing what they can measure and trade: monetary costs. But the price mechanism systematically fails when important costs are **externalized** (borne by society, ecosystems, or future people rather than the buyer/seller). The result is familiar: climate damage, biodiversity loss, labour exploitation, and preventable disease are treated as “cheap” inputs.

This folder develops a proposal for a **Multi-Dimensional True Cost Accounting** system that preserves the usefulness of market prices while adding a consistent, auditable mechanism to internalize externalities.

If you want the intellectual framing first, see [[Ideas/TrueCostAccounting/background_classics|Background: Smith, Friedman, Pigou]]. If you want the landscape of existing methods, see [[Ideas/TrueCostAccounting/related_work|Related work: TPF, LCA, ESG, labels]].

## The general flow (problem → solution → benefits → practicalities)

### 1) Problem statement

Prices are a compressed summary of costs, but today’s prices systematically omit:

- **Social costs** (rights violations, wage gaps, unsafe work)
- **Environmental costs** (carbon, water stress, pollution, biodiversity loss)
- **Public/consumer health costs** (diet-related disease burden, exposure)

Any policy that targets one externality at a time (carbon tax only, labels only, voluntary reporting only) leaves room for substitution, loopholes, and “sustainability theater”.

### 2) Proposed solution: a Multi-Dimensional cost vector + an externality norm

Represent each product/service as a cost vector in €/functional-unit:

$$C=[C_1,C_2,C_3,C_4]$$

- $C_1$ market price (kept as-is)
- $C_2$ social externality (rights + wage gaps + worker health)
- $C_3$ environmental externality (restoration/removal/cleanup)
- $C_4$ public/consumer health externality (diet + processing + exposure)

How each component is computed is defined in [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]. The key idea is: indicators (physical or categorical) are mapped to € via monetisation factors.

Then aggregate **externalities only** via a weighted norm:

$$N_{ext}(C)=\sqrt{w_2C_2^2+w_3C_3^2+w_4C_4^2}$$

This norm is explained in [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm (strong sustainability)]]. Intuition: it punishes “catastrophic failure” in one dimension rather than letting good performance elsewhere cancel it out.

Define the consumer-facing signal (before tax design):

$$P_{signal}=C_1+N_{ext}(C)$$

### 3) Transparency mechanism: the unknown penalty

The system only works if missing data is not a free strategy.

When a supply-chain attribute is unknown/unverifiable, apply an **unknown penalty**: substitute a conservative high-impact prior (e.g., sector–country 95th percentile). This creates an incentive to disclose and verify.

- Concept: [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty (Transparency Gap)]]
- Public priors: [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for the unknown penalty]]

### 4) Policy mechanism: VAT-like intermediate externality taxing + partial VAT replacement

Information alone is weak; you need a mechanism that propagates incentives through the supply chain.

TCA proposes a VAT-like tax on the externality signal with input credits, so firms remit tax on the **externality value they add**, not on gross turnover.

This also enables an equity move: partially replace VAT/BTW (regressive) with an externality tax whose base is concentrated in high-harm goods/processes, while recycling revenues.

See [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement + intermediate TrueCost tax]].

### 5) Benefits (what this unlocks)

- **Strong sustainability**: prevents “trade-offs” that hide rights violations or health harms behind good carbon performance (via the norm)
- **Supply-chain incentives**: internalization is not only at point-of-sale (VAT-like propagation)
- **Anti-greenwashing**: unknown penalty makes opacity expensive
- **Equity lever**: partial VAT/BTW replacement + rebates/subsidies can mitigate regressivity
- **Auditable debates**: disagreements move to explicit parameters (weights, factor versions, priors) rather than vibes

### 6) Practicalities: data, indicators, and cost factors

In practice, each component becomes a sum of (indicator × monetisation factor). The implementation hinges on:

- factor registries and their governance
- footprint indicators (by product and by sector/country priors)
- the unknown penalty distribution assumptions

Start here:

- Factors / mapping notes: [[Ideas/TrueCostAccounting/tpf_cost_factors|TPF cost factors]]
- Public databases for priors: [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for the unknown penalty]]
- Governance and gaming resistance: [[Ideas/TrueCostAccounting/weights_and_governance|Weights, legitimacy, and gaming resistance]]
- Worked example plan: [[Ideas/TrueCostAccounting/experiment_demo|Experiment demo (food)]]

## Quartz graph map (topic index)

- **Core method**
	- [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]
	- [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm (strong sustainability)]]
- **Transparency & data**
	- [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty (Transparency Gap)]]
	- [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for the unknown penalty]]
- **Policy**
	- [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement + intermediate TrueCost tax]]
	- [[Ideas/TrueCostAccounting/weights_and_governance|Weights, legitimacy, and gaming resistance]]
- **Context**
	- [[Ideas/TrueCostAccounting/background_classics|Background: Smith, Friedman, Pigou]]
	- [[Ideas/TrueCostAccounting/related_work|Related work: TPF, LCA, ESG, labels]]

**Parent:** [[Ideas/index|Ideas]]