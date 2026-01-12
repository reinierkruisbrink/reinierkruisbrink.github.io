---
title: "Multi-Dimensional TCA Experiment"
date: "2026-01-01"
---

# Multi-Dimensional TCA Experiment

## tmp
Primary data: Full supply chain data + tpf cost factors
Backup data: open source third party for upper bound for unknown penalty

### 2. Practical Research Plan: Testing the Externality Norm

The goal of this test case is to compare the **Simple Addition** (used by Albert Heijn/PENNY) against the **Multi-Dimensional externality norm**. The norm should reveal "Sustainability Traps"—products that seem okay on average but have one catastrophic failure.

#### Phase A: Selection & Data Mining

1. **Select 5 "Comparison" Products:** Pick items with distinct profiles (e.g., 1kg Brazilian Beef, 1kg Dutch Organic Carrots, 1 can of Ultra-processed Soda, 1 bar of Fair-trade Dark Chocolate, 1 bar of "Unknown" Generic Milk Chocolate).
2. **Pull Primary Product Data:** Use **Open Food Facts** to get Nutri-Score, NOVA, and ingredient lists.
3. **Map Sector Proxies:** Use **EXIOBASE** or **Eora26** to find the "Environmental" and "Social" impact intensities for those specific sectors/countries.

#### Phase B: The "Unknown Penalty" Baseline

1. For the "Generic Milk Chocolate," intentionally withhold the origin data.
2. Query **Eora26** for the Global Cocoa Sector's **Upper Bound** (95th percentile) for Child Labour and Deforestation.
3. Assign this as the  and  values.

#### Phase C: The Calculation Battle

**Calculate "Simple True Price" (Addition):**

**Calculate externality norm (Your Formula):**

*(Set w_i=0.25 for an even baseline test).*

#### Phase D: Analysis of Results

* **Identify Spikes:** Look for a product where the "Simple Price" is only 20% higher than the market price, but the externality norm is 60% higher. This indicates a high-risk outlier in one dimension (e.g., extremely high sugar or extremely high child labor).
* **Transparency Signal:** Analyze how the "Unknown Penalty" (from Eora26/EXIOBASE) impacts the Norm vs. the Simple Addition. The Norm should penalize "Unknown" status more heavily if any single proxy value is high.
* **Health Directing:** Check if the  pillar (driven by Nutri-Score/NOVA) successfully makes ultra-processed items significantly "longer" vectors than whole-food alternatives.

#### Phase E: Implementation Note for Retailers

Using the "Food retail and food service blueprint", propose how this norm could be displayed. Instead of just a "True Price" on the receipt, the retailer would show an **Externality Norm Score** (1–100) or a **4-color traffic light** where the size of each light is proportional to the square of its cost.