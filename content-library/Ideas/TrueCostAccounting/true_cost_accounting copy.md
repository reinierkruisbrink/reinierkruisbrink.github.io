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

This is an alternate/older draft. The main entry point is: [[Ideas/TrueCostAccounting/index|TCA]].

---

## 1. Problem Statement: The Unaccounted Hidden Costs

Modern market economies, while efficient in many respects, fundamentally fail to price in the full societal and environmental costs of production and consumption. This oversight, known as **externalities**, leads to widespread and often devastating consequences: environmental degradation, social injustice, and public health crises. These are "hidden costs" that are borne by society at large, rather than being reflected in the price paid by the consumer or producer. 

This disconnect incentivizes a "race to the bottom" where companies optimize solely for monetary profit, often at the expense of collective well-being. The current system masks the true impact of our economic choices, leading to unsustainable practices and inequitable outcomes.

---

## 2. Background: Price Signal of a Multi-Dimensional Abstraction of Value

### 2.1 Economic Theories and the Evolution of Value

The concept of True Cost Accounting draws inspiration from and builds upon foundational economic thought:

#### Adam Smith's Self-Interest and the Invisible Hand
Smith posited that individuals acting in their self-interest, guided by market prices, would inadvertently lead to optimal societal outcomes. However, this assumes prices accurately reflect all costs. TCA seeks to refine the "invisible hand" by ensuring prices genuinely reflect true costs.

#### Milton Friedman's Corporate Profit Maximization
Friedman argued that a corporation's primary responsibility is to maximize profits. TCA acknowledges the utility of the profit motive but argues that ethical outcomes emerge only when that motive is aligned with socially beneficial products through a pricing mechanism that internalizes externalities. 

#### Arthur Pigou's Pigouvian Taxes
Pigou introduced taxing negative externalities to correct market failures. This work generalizes Pigouvian logic into a continuous, multi-dimensional system of dynamic pricing.

#### From Bartering to Money
Historically, economies evolved from direct bartering to the use of money as a universal medium of exchange and a simplified abstraction of value. We argue this abstraction to one singular dimension is too narrow. Money efficiently represents the economic cost of goods and services. However, this simplification inadvertently stripped away the representation of non-monetary costs.

### 2.2 Related Work and Identified Gaps

The Multi-Dimensional TCA framework builds upon the pioneering work of the **True Price Foundation (TPF)** and the **Impact Institute**, particularly their **Global Impact Database (GID)**. These organizations have established the monetisation factors necessary to translate impacts into financial terms.

* **Useful Additions:** TPF provides scientifically grounded methods for quantifying impacts such as **Climate Change** (restoration costs) and **Child Labour** (remediation costs). Their use of **DALYs (Disability-Adjusted Life Years)** standardizes human impact across different categories.
* **Identified Gaps:** Most current modules focus heavily on **Occupational Health and Safety (OHS)**—the health of workers—leaving the **consumer health** impact unaddressed. Furthermore, traditional TCA often uses a linear sum, which allows a product to appear "sustainable" overall while hiding catastrophic failure in a single dimension (e.g., carbon-neutral but made with forced labor).

---

## 3. Method: The Multi-Dimensional Cost System

### 3.1 The Multi-Dimensional Cost Vector

Each product or service is represented by a vector, **C**, encapsulating its comprehensive impact:

$$C = [C_1, C_2, C_3, C_4]$$

Where:

- **$C_1$: Economic Cost** — Traditional monetary cost (supply chain, materials, margin).
- **$C_2$: Social Externality** — Dedicated to **Human and Worker Rights**. This includes child labour, forced labour, underpayment, and **Occupational Health and Safety (OHS)**. It focuses on the ethical conditions of production.
- **$C_3$: Environmental Externality** — Natural capital impacts such as carbon footprint, water usage, and biodiversity loss.
- **$C_4$: Health Externality** — Strictly defined as **Public and Consumer Health**. It captures the "internalities" of a product—such as the risk of Non-Communicable Diseases (NCDs) caused by ultra-processed foods. It can utilize indicators such as the **Nutri-Score** and **NOVA classification**.

### 3.2 Monetisation and Cost Factors (TPF Methodology)

To calculate the coordinates of the vector, we adopt and extend the **TPF Monetisation Factors**. This approach is based on the **Right to Remediation**, where costs represent the investment required to restore a right or environmental stock.

* **Health and Life (DALY):** All health-related impacts (in $C_2$ and $C_4$) are monetised at **€129,000 per DALY**. One DALY represents the loss of one year of full health.
* **Climate Change:** Carbon emissions are valued at approximately **€0.312 per kg CO2eq**, reflecting the cost of permanent carbon removal and restoration.
* **Social Restoration:** Impacts like child labour are valued based on the cost of remediation, including victim compensation and ensuring the child can return to school.



### 3.3 The Externality Signal: The Euclidean Norm vs. The Linear Sum

While standard TCA typically sums costs ($Price_{True} = Price_{Market} + \sum Externalities$), this approach keeps the market price as-is and uses an **externality norm** over $C_2..C_4$:

$$N_{ext}(C) = \sqrt{w_2C_2^2 + w_3C_3^2 + w_4C_4^2}$$

Then:

$$P_{signal}=C_1+N_{ext}(C)$$

* **Penalizing Extremes:** Squaring the coordinates ensures that a massive failure in one dimension (e.g., high child labour) cannot be easily compensated by excellent performance in others.
* **Strong Sustainability:** The norm represents the "magnitude" of total impact. It mathematically discourages trade-offs where human rights are sacrificed for environmental gains, as extreme values expand the vector's length disproportionately.

Here, $w_i$ represents the weight assigned to each externality dimension; typically $w_2+w_3+w_4=1$.

Although this formulation may seem complex to the general public, it is a small step from a 4× traffic light indication, making it simple and transparent.

---

## 4. Data Availability and Practical Implementation

To overcome the "transparency gap," the model implements a two-tiered data approach.

### 4.1 Primary Data

For companies with transparent supply chains, actual audit data is used (e.g., actual liters of water per kg of product). These indicators are combined with the cost factors to calculate externality costs ($C_2, C_3, C_4$).

### 4.2 The "Unknown" Externality Penalty

To incentivize transparency, any missing data is assigned the **95th percentile (Upper Bound)** of the sector/country average. If a producer hides their ingredients or supply chain origin, the model assumes the worst-case impact for that category. This creates direct financial pressure on producers to disclose their actual impact or face a significantly higher True Cost.

For unknown variables, the model utilizes open-access databases such as **Eora26** (sectoral impacts), **Our World in Data** (environmental food footprints), and **EXIOBASE** (multi-regional input-output data).

---

## 5. Signal Propagation: Intermediate TrueCost Taxing

The True Cost model proposes an **intermediate externality tax mechanism** similar to VAT. Instead of just a final point-of-sale adjustment, the Externality Value (EV) is subject to a tax at each transaction point. This ensures that the incentive for sustainable choices is distributed throughout the supply chain.

1.  **Supplier:** Calculates the EV of raw materials and charges an "Externality Tax" to the producer.
2.  **Producer:** Reclaims the tax paid on inputs and remits the tax on the EV added by their own processes.
3.  **Retailer:** Follows the same process, ensuring the final price signal is cumulative and accurate.

---

## 6. (Partially) Replacing VAT/BTW for Equity

A key proposal is to partially replace existing consumption taxes like VAT with the True Cost Externality Tax. 

* **Reduce General VAT Rates:** Lowering VAT immediately reduces prices for general consumption, benefiting low-income households and mitigating regressivity.
* **Introduce Externality Tax:** Revenue is offset by taxes on products with high externality norms. 
* **Incentivizing Health:** Products with high externalities (e.g., ultra-processed, high-carbon) become relatively more expensive, while healthy, sustainable products become relatively cheaper, ensuring a just transition.

---

## 7. Theory of Change

By implementing this system, we hypothesize that:
1.  **Total tax income** will remain stable or have a net-increase as societal costs (healthcare, disaster relief) decrease.
2.  **Market competitiveness** will shift toward sustainable and low-externality products, as consumers and businesses are guided by price signals.
3.  **Lobbying becomes harder** as the vector provides a transparent, data-driven "why" behind every price.


---

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]