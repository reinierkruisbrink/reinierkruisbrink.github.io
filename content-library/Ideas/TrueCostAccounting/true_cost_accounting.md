---
title: "True Cost Accounting"
subtitle: "A Multi-Dimensional Framework for Internalizing Externalities and Fostering Ethical Markets"
author: "Reinier Kruisbrink"
date: "2026-01-01"
tags:
  - essay
  - policy
  - economics
  - climate
  - systems-thinking
  - application
---

# True Cost Accounting

> A Multi-Dimensional Framework for Internalizing Externalities and Fostering Ethical Markets

**Author**: Reinier Kruisbrink

This is a long-form draft. The main, continuously maintained entry point is: [[Ideas/TrueCostAccounting/index|TCA]].

---

## 1. Problem Statement: The Unaccounted Hidden Costs

Modern market economies, while efficient in many respects, fundamentally fail to price in the full societal and environmental costs of production and consumption. This oversight, known as **externalities**, leads to widespread and often devastating consequences: environmental degradation, social injustice, and public health crises. These are "hidden costs" that are borne by society at large, rather than being reflected in the price paid by the consumer or producer. 

This disconnect incentivizes a "race to the bottom" where companies optimize solely for monetary profit, often at the expense of collective well-being. The current system masks the true impact of our economic choices, leading to unsustainable practices and inequitable outcomes.

---

## 2. Background: From Bartering to a Multi-Dimensional Abstraction of Value

### 2.1 Economic Theories and the Evolution of Value

The concept of True Cost Accounting draws inspiration from and builds upon foundational economic thought:

#### Adam Smith's Self-Interest and the Invisible Hand

Smith posited that individuals acting in their self-interest, guided by market prices, would inadvertently lead to optimal societal outcomes. However, this assumes prices accurately reflect all costs. True Cost Accounting seeks to refine the "invisible hand" by ensuring prices genuinely reflect the true costs, thus aligning self-interest with collective well-being.

#### Milton Friedman's Corporate Profit Maximization

Friedman argued that a corporation's primary social responsibility is to maximize profits for its shareholders. True Cost Accounting acknowledges that this single goal is easy to optimize and therefore useful, but states that ethical outcomes need to emerge when the profit motive is aligned with socially beneficial products and processes through a reformed pricing mechanism that internalizes externalities. 

#### Arthur Pigou's Pigouvian Taxes

Pigou introduced the idea of taxing negative externalities to correct market failures. This white paper generalizes Pigouvian logic into a continuous, multi-dimensional system of dynamic pricing, moving beyond piecemeal interventions to a comprehensive framework.

### 2.2 From Bartering to Money, and Abstracting to Multi-Dimensional Costs

Historically, economies evolved from direct bartering to the use of money as a universal medium of exchange and a simplified abstraction of value. We argue this abstraction to one singular dimension is too narrow. Money efficiently represents the economic cost of goods and services. However, this simplification inadvertently stripped away the representation of non-monetary costs.

We propose a new True Cost Accounting abstraction: a **Multi-Dimensional cost vector** that re-integrates these previously externalized dimensions back into the perceived "cost" of a product or service. This is not a return to bartering, but a sophisticated evolution of monetary systems to reflect a more complete picture of value and impact.

---

## 3. Method: The Multi-Dimensional Cost System and Its Implementation

### 3.1 The Multi-Dimensional Cost Vector

Each product or service is represented by a vector, **C**, encapsulating its comprehensive impact:

$$C = [C_1, C_2, C_3, C_4]$$

Where:

- **$C_1$: Economic Cost** — Traditional monetary cost (supply, demand, labour, materials, profit margin)
- **$C_2$: Social Externality** — Labour practices, community impact, human rights, fair wages, social equity, worker safety (OHS)
- **$C_3$: Environmental Externality** — Carbon footprint, water usage, pollution, biodiversity loss, resource depletion
- **$C_4$: Health Externality** — Public health impacts, consumer health effects, nutritional quality

In this folder, we keep the market price ($C_1$) as-is, and aggregate externalities separately using a weighted norm:

$$N_{ext}(C) = \sqrt{w_2C_2^2 + w_3C_3^2 + w_4C_4^2}$$

The consumer-facing signal (before tax mechanics) is then:

$$P_{signal} = C_1 + N_{ext}(C)$$

The norm squares the individual components, penalizing specialization in high-damage areas. It prevents a company from balancing out a severe human rights violation with a high carbon sequestration score.

Although this formulation may seem complex to the general public, it is a small step from a 4× traffic light indication, making it simple and transparent. This is similar to Eco-Score and Nutri-Score, reinforcing compatibility with existing systems.

Here, $w_i$ represents the weight assigned to each externality dimension, allowing for flexibility based on societal priorities. We typically set $w_2+w_3+w_4=1$.

### 3.2 Bundling as a Framework

The Multi-Dimensional vector acts as a "bundling" framework, allowing diverse and complex externalities to be aggregated into a single, quantifiable metric. Instead of separate regulations or labels for each issue, the model provides a holistic score. 

This framework is extensible; as new externalities become recognized, they can be incorporated into existing dimensions or potentially lead to the addition of new dimensions if warranted.

### 3.3 Weights and Feedback Mechanism

The weights ($w_i$) for each dimension are crucial for reflecting societal values and policy objectives. These can be set and adjusted by governing bodies (e.g., national governments, international organizations) through democratic processes, similar to how tax rates or subsidies are determined today. This allows for cultural, political, and economic flexibility.

An adaptive feedback mechanism is envisioned where the impact of different weights on market behaviour and societal outcomes can be monitored. This allows for iterative refinement of the weights to achieve desired policy goals (e.g., reducing carbon emissions, improving labour conditions).

While lobbying pressures on these weights are inevitable, increased price traceability and public availability of component externalities limit the effectiveness of such influence over time.

### 3.4 "Unknown" Externality Penalty

Calculating the True Cost depends on the availability of externality data, while this is not yet in place for many supply chains. To incentivize and hold parties accountable for their supply chains, the externalities need to be known/transparent. 

A critical component for incentivizing transparency is the **"unknown" externality penalty**. If a company cannot provide verifiable data for a specific externality (e.g., the origin of a raw material, the labour practices of a distant supplier), that unknown externality will be assigned the worst known (or a pre-defined high penalty) value for that category.

This mechanism ensures:

- **Incentive for Transparency**: Companies are financially incentivized to invest in supply chain traceability and data collection to avoid punitive "True Costs."
- **Mitigation of "Race to the Bottom"**: It prevents companies from intentionally obscuring negative impacts to gain a competitive advantage.
- **Risk Reflection**: Unknown impacts inherently carry higher risk, and this penalty reflects that risk in the product's price.

### 3.5 Signal Propagation: Intermediate TrueCost Taxing

To ensure that the incentive for sustainable choices is distributed throughout the supply chain, and not solely borne by the final consumer, the True Cost model proposes an **intermediate externality tax mechanism** similar to VAT (Value Added Tax).

Instead of just a final point-of-sale adjustment, the Externality Value (EV) would be subject to a tax at each transaction point. In this design, a natural default is:

$$EV = N_{ext}(C)$$

- **Externality Tax Rate (ETR)**: A defined tax rate (e.g., X%) is applied to the Externality Value generated or added at each stage.

- **Remittance at Each Stage**:
  
  1. **Supplier (e.g., Farmer)**: When a farmer sells grain, they calculate the EV of their grain. They charge an "Externality Tax" on this EV to the baker and remit this tax to the government.
  
  2. **Producer (e.g., Baker)**: When the baker buys grain, they pay the Externality Tax on it. When they sell bread to the shop, they calculate the cumulative EV of the bread (EV from grain + EV from their baking process). They charge an Externality Tax on this cumulative EV to the shop. Crucially, the baker then reclaims the Externality Tax they paid on the grain, remitting only the net tax corresponding to the EV added by their own baking process.
  
  3. **Retailer (e.g., Shop)**: The shop follows the same process, reclaiming the Externality Tax paid to the baker and remitting the tax on the EV added by their retail operations (e.g., energy for refrigeration, waste).

- **Signal**: This creates a direct financial signal at every step. Each company in the supply chain directly "pays" (through net remittance) for the externalities they generate. This incentivizes them to:
  - Choose inputs with lower inherited EVs (to reduce the tax they pay on inputs)
  - Implement processes that add lower EVs (to reduce their own net tax remittance)
  - This distributed financial burden ensures that sustainable choices are incentivized at the earliest possible stages, reducing the burden on any single group.

### 3.6 (Partially) Replacing VAT/BTW for Equity and Regressivity Mitigation

A key policy proposal is to partially replace existing consumption taxes like VAT with the True Cost Externality Tax.

#### Current VAT

A broad-based consumption tax that applies uniformly, making it regressive as low-income households spend a larger proportion of their income on necessities.

#### Proposed Shift

1. **Reduce General VAT Rates**: Lower the standard VAT rate across most goods and services. This would immediately reduce prices for general consumption, benefiting all, especially low-income households.

2. **Introduce Externality Tax**: The revenue lost from reduced VAT would be offset (or surpassed) by the new Externality Tax levied on the externality norm $N_{ext}(C)$.

#### Mitigation of Regressivity

- The tax burden shifts from general consumption to consumption that generates high negative externalities.
- Products with high externalities become relatively more expensive, while products with low externalities become relatively cheaper (due to reduced general VAT and low/zero externality tax).
- This incentivizes all consumers, including low-income households, to shift towards more sustainable and healthier choices, which are now more financially accessible.
- Revenue generated from the externality tax can also be used for targeted subsidies on essential, as it is transparent on the source of externalities, low-externality goods or for direct redistribution to vulnerable populations (e.g., through tax credits or social programs) to ensure a just transition.

### 3.7 Implementation Strategy

The Multi-Dimensional cost system is designed to be applicable to both products and services:

#### Products

Direct application to manufacturing, material sourcing, packaging, and end-of-life impacts (e.g., food, apparel).

#### Services

Focus shifts to the externalities generated by the process of service delivery, distinct from any products consumed within the service. For example, for a restaurant service, the externalities would include labour practices of staff, energy/water usage in the kitchen, waste generation from dining, and hygiene practices, rather than just the externalities of the food ingredients themselves (which would be accounted for as products). This requires careful scope definition to avoid double-counting.

#### Phased Rollout

To minimize disruption, TCA can be introduced in phases, allowing stakeholders time to transition and data systems to mature. A phased approach minimizes disruption, but initial price corrections may catalyse faster shifts to sustainability. While the phased rollout minimizes shocks, strategic corrections in highly unsustainable sectors may serve as constructive signals to accelerate necessary reform.

---

## 4. Theory of Change

By implementing a Multi-Dimensional True Cost Accounting system that incorporates a VAT-like intermediate externality tax and partially replaces traditional VAT, we hypothesize that:

1. **Total tax income for the government will remain constant or increase**, providing a stable revenue base. It may even increase government budget in the long-term due to lower societal costs by more sustainable practices in everyday life.

2. **The sales of less harmful (lower externality) products and services will increase**, as their relative price becomes more competitive and their positive impact is transparently communicated.

3. **Overall societal well-being will improve** through reduced environmental degradation, enhanced social equity, and better public health outcomes, as market incentives align with collective good.

4. **The transparency and traceability inherent in the system make lobbying harder**. This framework improves accountability by showing the 'why' behind prices.

---

## 5. Related Work

See [[Ideas/TrueCostAccounting/related_work|Related work: TPF, LCA, ESG, Labels]] for the expanded positioning.

---

## 6. Experiment: Demo in the Food Industry

To demonstrate feasibility, a real-world implementation in the food industry is underway. This pilot will validate assumptions, refine the model, and surface practical challenges.

---

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]