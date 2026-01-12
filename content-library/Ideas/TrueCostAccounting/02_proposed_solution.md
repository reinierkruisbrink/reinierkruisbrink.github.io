---
title: "02. Proposed Solution"
date: "2026-01-12"
tags:
  - tca
  - externalities
  - sustainability
---

# Proposed Solution: Multi-Dimensional True Cost Accounting

True Cost Accounting (TCA) proposes a **Multi-Dimensional cost vector + weighted externality norm** system that preserves the usefulness of market prices while adding a consistent, auditable mechanism to internalize externalities.

## Economic Background: Building on Foundations

### Adam Smith: The Price Signal Works When Prices Are Complete

> *Adam Smith's "invisible hand" is a metaphor for the unseen market forces where individuals pursuing their own self-interest unintentionally benefit society by efficiently allocating resources*.

Smith's core contribution is that decentralized coordination can work when the **price signal** compresses relevant information. TCA's stance:
- Markets are powerful optimizers
- But the signal is incomplete when costs can be pushed outside the transaction
- Therefore, the fix is not to abandon the signal, but to **complete it**

### Milton Friedman: Profit Maximization with Complete Inputs

> *Milton Friedman's business principle is that a company's sole social responsibility is to increase profits for shareholders*. (Milton Friedman)

Friedman's argument for profit maximization is one of the main reasons we are in this situation, yet is operational: a single objective (profit) is easy to optimize and audit. That is, it is effective and that is a big reason we are in this situation. TCA's stance:
- Profit maximization is not "wrong"; it is **underspecified**
- If firms maximize profit under incomplete prices, they rationally externalize costs
- The policy problem is therefore the objective's *input data*: the price system
- **If you change the price system, you change what profit-seeking selects for**

### Arthur Pigou: Generalized Pigouvian Taxation

Pigou formalized taxing negative externalities to correct market failures. TCA generalizes Pigou in two ways:
1. **Multi-Dimensional accounting**: represent multiple externality families simultaneously
2. **Propagation mechanics**: use a VAT-like mechanism so incentives apply throughout the supply chain

### The Combination

Both individuals and corporates seem to be generally guided by self-interest and profit maximization. Here, I see some similarities to natural selection's fitness and the optimization thereof, which is a very efficient and natural way of self organizing systems to evolve. However, the fitness signal is not properly aligned and needs to be corrected as Pigouvian Taxation would add. But this obfuscates the single, and therefor simple, dimension to optimize for.

## The Multi-Dimensional Cost Vector

Represent each product/service as a cost vector in €/functional-unit:

$$C=[C_1,C_2,C_3,C_4]$$

This vector transforms "cost" from a single number into a structured object that preserves information about **where** the costs come from and **who** ultimately bears them. Each component uses restoration/remediation logic: what would it cost to make whole the people, ecosystems, or communities harmed?

### $C_1$: Economic Cost (The Familiar Price)

**What it represents**: The market price we already know—what you pay at the register.

**Why keep it separate**: 
- Provides continuity with existing accounting systems
- Allows direct comparison between traditional and true costs
- Serves as the baseline for understanding externality magnitude

**What you can do with it**: Assess how much of a product's true cost is currently hidden from market signals.

### $C_2$: Social Externality (Human Dignity & Safety)

**What it represents**: The cost of harms inflicted on people in the supply chain—workers who aren't paid enough to live, children forced to work instead of attending school, unsafe conditions causing injury and disease, discrimination and exploitation.

**Core logic**: If someone is harmed producing a good, what would it cost to:
- **Remediate**: Pay back wage gaps, provide schooling to child laborers, compensate abuse victims
- **Prevent**: Audit and improve working conditions, enforce rights
- **Restore health**: Monetize lost healthy life years from workplace injuries/illness

**Why it matters**:
- Makes labor exploitation financially visible rather than invisible
- Creates economic incentive to improve working conditions throughout supply chains
- Prevents "cheap" products that are only cheap because someone else pays the human cost

**What you can do with it**: 
- Compare products by their social impact (Fair Trade chocolate vs. generic)
- Identify high-risk sectors and suppliers
- Create financial pressure for supply chain transparency and worker protection

### $C_3$: Environmental Externality (Ecosystem Debt)

**What it represents**: The cost of environmental damage—what it would take to restore ecosystems, remove pollution, or compensate for permanent losses. This includes climate damage, water depletion, biodiversity collapse, and contamination.

**Core logic**: If production degrades the environment, what would it cost to:
- **Restore**: Bring ecosystems back to baseline health (reforestation, aquifer replenishment)
- **Remove**: Clean up pollution or sequester emissions
- **Compensate**: Pay for lost ecosystem services when restoration is impossible

**Why it matters**:
- Captures the long-term costs that markets currently ignore
- Reflects true scarcity (water in drought regions costs more than water in abundant regions)
- Prevents "cheap" products that are only cheap because nature pays the price

**What you can do with it**:
- Compare environmental footprints across products and production methods
- Identify which environmental pressures dominate (climate vs. water vs. biodiversity)
- Drive investment toward regenerative practices by making degradation expensive

### $C_4$: Consumer/Public Health Externality (The Health Bill)

**What it represents**: The public health costs borne by consumers and society—diet-related diseases from ultra-processed foods, healthcare burdens from poor nutrition, long-term health impacts from exposure to additives or contaminants.

**Core logic**: If consuming a product increases disease burden, what is the cost of:
- **Healthcare**: Treating diabetes, cardiovascular disease, obesity linked to poor diet
- **Lost quality of life**: Healthy years lost to preventable illness (monetized via DALYs)
- **Prevention**: Public health interventions needed to counter dietary harms

**Why it matters**:
- Fills a major gap in existing true-cost approaches (which focus on production harms, not consumption harms)
- Makes the health consequences of ultra-processing and poor nutrition economically visible
- Creates market incentive for healthier product formulations

**What you can do with it**:
- Compare health impacts between whole foods and ultra-processed alternatives
- Identify products that impose high disease burdens on regular consumers
- Drive product reformulation by making poor nutrition expensive

## What You Can Do With This Vector

The four-component structure enables several powerful uses:

1. **Diagnostic transparency**: See exactly which dimension dominates a product's externalities (Is it pollution? The labor? The health impact?)

2. **Targeted improvement**: Companies know precisely where to intervene (improve working conditions, switch energy sources, reformulate products)

3. **Prevent greenwashing**: Can't claim "sustainable" based on carbon alone while hiding labor exploitation or health harms

4. **Consumer choice**: Enables informed trade-offs (pay slightly more for verified low-social-harm products)

5. **Policy design**: Allows different tax rates or interventions for different externality types

6. **Auditable debates**: Disagreements become specific (e.g., "Should child labor remediation cost €42/hour or €50/hour?") rather than vague sustainability claims

For detailed calculation methods, monetization factors, and worked examples, see [[Ideas/TrueCostAccounting/04_calculating_externalities|Calculating Externalities]].

## Aggregation: The Weighted Externality Norm

Instead of summing all costs (which allows offsetting), aggregate **externalities only** via a weighted norm:

$$N_{ext}(C)=\sqrt{w_2C_2^2+w_3C_3^2+w_4C_4^2}$$

**Why a norm (not a sum)**:
- **Non-substitutability**: Extreme harm in one dimension cannot be "paid for" by excellence in another
- **Strong sustainability**: Catastrophic failure in one area (e.g., forced labor) should dominate the signal
- **Surfaces traps**: Cases where linear averaging looks fine but one component is catastrophic
- **Mathematical commitment**: The squaring penalizes concentrated harms

**Why weighted**:
- Allows society to express priorities (e.g., $w_2=0.4$, $w_3=0.3$, $w_4=0.3$)
- Maintains flexibility for democratic adjustment
- Typically constrained: $w_2+w_3+w_4=1$

**Consumer-facing signal** (before tax mechanics):

$$P_{signal}=C_1+N_{ext}(C)$$

## The Unknown Penalty: Enforcing Transparency

**Problem**: The system only works if we can calculate the cost vector and missing data is not a free strategy.

**Solution**: When a supply-chain attribute is unknown/unverifiable, apply an **unknown penalty**—substitute a conservative high-impact prior (e.g., sector–country 95th percentile).

**Why this works**:
- **Incentive for transparency**: Companies are financially incentivized to disclose and verify to avoid penalties
- **Mitigation of opacity**: Prevents intentionally obscuring negative impacts for competitive advantage
- **Risk reflection**: Unknown impacts inherently carry higher risk; penalty reflects this
- **Gaming resistance**: Opacity becomes expensive, making verification valuable

**Operational rule**: For impact intensity distribution $I \sim \mathcal{D}(\text{sector},\text{country})$:
- Known indicator: use measured $I_{\text{measured}}$
- Unknown indicator: use $Q_{0.95}(\mathcal{D})$ (95th percentile of sector/country distribution)

**Data sources**: MRIO databases (Eora, EXIOBASE), Open Food Facts, sector-country statistics

## Intermediate Externality Taxing: VAT-Like Propagation

**Why intermediate taxing matters**: To ensure incentives distribute throughout the supply chain, not just at point-of-sale.

**Mechanism** (analogous to VAT):
1. Define **Externality Value (EV)** = $N_{ext}(C)$ for each transaction
2. Apply **Externality Tax Rate (ETR)** to EV at each supply-chain stage
3. Firms remit tax on **EV they add**, not gross EV (via input credits)

**Example (grain → bread → retail)**:
1. **Farmer**: Sells grain with $EV_{\text{grain}}$; charges externality tax to baker; remits to government
2. **Baker**: Pays tax on grain input; adds $EV_{\text{baking}}$; charges tax on cumulative EV; reclaims input credit; remits only net (the EV added by baking)
3. **Shop**: Pays tax on bread input; adds $EV_{\text{retail}}$; charges final consumer; reclaims input credit; remits only net (the EV added by retail)

**Why this design**:
- **Supply-chain incentives**: Each actor directly pays for externalities they generate
- **Choose better inputs**: Firms incentivized to source lower-EV materials
- **Improve processes**: Firms incentivized to reduce EV added in their operations
- **Harder to avoid**: Can't outsource away from the signal
- **Distributed burden**: Not solely on final consumer or one actor

**Special case**: $C_4$ (consumer health) can be set to cost = 0 for intermediate stages (only taxed at final sale to consumer), since diet impacts occur at consumption, not production.

## Partial VAT/BTW Replacement: Addressing Regressivity

**Problem**: VAT is regressive (low-income households spend larger proportion on necessities).

**Solution**: Partially replace VAT with externality tax:

1. **Reduce general VAT rates**: Lower standard VAT across most goods/services
   - *Reason*: Immediately reduces prices, especially benefiting low-income households
2. **Introduce externality tax**: Revenue offset by new tax on $N_{ext}(C)$
   - *Reason*: Tax base concentrated in high-harm goods/processes, not broad consumption
3. **Recycle revenues**:
   - Targeted rebates/credits for low-income households
   - Subsidies for low-externality essentials (fresh produce, basic necessities)
   - Public goods that reduce externalities (health prevention, ecosystem restoration)

**Why this improves equity**:
- **Progressive tax base**: High-externality goods often consumed more by higher-income groups
- **Protects essentials**: Fresh food, basic goods have lower externality signatures
- **Revenue recycling**: Can target support to vulnerable populations
- **Behavioral nudge**: Makes sustainable choices relatively cheaper

## Summary: How Components Work Together

1. **Multi-Dimensional vector** captures full cost picture (market + social + environmental + health)
2. **Weighted norm** prevents offsetting catastrophic harms with good performance elsewhere
3. **Unknown penalty** makes transparency valuable and opacity expensive
4. **Intermediate taxing** propagates incentives through entire supply chain
5. **Partial VAT replacement** improves equity while funding the transition

## What This Enables

- **Strong sustainability**: No trade-offs that hide rights violations behind carbon credits
- **Supply-chain accountability**: Internalization throughout production chain, not just at sale
- **Anti-greenwashing**: Opacity is financially penalized
- **Equity lever**: Progressive tax replacement with targeted support
- **Auditable debates**: Disagreements move to explicit parameters (weights, factors, priors), not vibes
- **Market alignment**: Profit-seeking drives sustainable choices when prices are complete

---

**Previous:** [[Ideas/TrueCostAccounting/01_problem_statement|Problem Statement]]  
**Next:** [[Ideas/TrueCostAccounting/03_related_work|Related Work]]  
**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
