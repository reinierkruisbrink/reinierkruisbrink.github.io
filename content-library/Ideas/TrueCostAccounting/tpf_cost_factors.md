---
title: "TPF Cost Factors"
date: "2026-01-01"
---

# True Price Foundations' Cost Factors

To implement your Multi-Dimensional True Cost Accounting (TCA) model, you need a precise mapping of physical indicators to the financial factors provided by the True Price Foundation (TPF) and Open Food Facts.

This page is a working note. The “canonical” definitions of the vector components live in:

- [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]

## Indicator & Monetisation Factor Matrix

This matrix maps your four pillars to specific metrics and the 2025 TPF monetisation factors. For the **Health ()** pillar, we synthesize a consumer-risk module using Nutri-Score and NOVA.

| Pillar | Indicator Category | Midpoint Indicator | Monetisation Factor (illustrative) | Data Source |
| --- | --- | --- | --- | --- |
| **$C_1$ (Economic)** | Market Price | € retail price per unit | n/a (observed) | Retailer / POS |
| **$C_2$ (Social)** | Worker Rights | Child labour (hours/cases) | € remediation per hour/case (TPF/GID) | TPF / GID |
|  | Living Income | Underpayment Gap (€) | €1.00 per €1.00 gap | TPF / GID |
|  | Worker Health | OHS (DALYs lost) | **€129,000 per DALY** | TPF / GID |
| **$C_3$ (Environ.)** | Climate Change | kg CO2e | **€0.312 per kg CO2e** (document factor version) | TPF / MRIO |
|  | Water Use | m³ water consumed | € per m³ (regional scarcity-adjusted; TODO define) | MRIO / LCA |
|  | Biodiversity | land-use/biodiversity proxy | € per ha·year (TODO define) | MRIO / LCA |
| **$C_4$ (Health)** | Nutritional Risk | Nutri-Score (A–E) | DALY proxy mapping (TODO define conservatively) | Open Food Facts |
|  | Processing | NOVA (1–4) | DALY proxy multiplier (TODO define) | Open Food Facts |
|  | Healthcare Cost | DALYs | **€129,000 per DALY** | TPF / GID / assumptions |

---

While your model provides the mathematical structure (the Multi-Dimensional vector plus an externality norm over $C_2..C_4$), these modules provide the scientific consensus on what a "social cost" or "environmental cost" actually is in monetary terms.

---

### 1. Natural Capital (Aligns with your : Environmental Externality)

TPF uses a **restoration and compensation logic** for environmental impacts.

* **Climate Change:** * **Factor:** **€0.312 per kg CO2eq** (as of 2025).
* **Logic:** They have moved from "abatement cost" (cost to prevent CO2) to "Social Cost of Carbon," which reflects the long-term economic damage caused by each kilogram emitted.


* **Biodiversity & Land Use:** * **Metric:** **Mean Species Abundance (MSA)** per hectare.
* **Logic:** They value the loss of "pristine" nature. The factor is calculated based on the cost of restoring an ecosystem to its original state or the loss of ecosystem services (like pollination or water filtration).


* **Soil Degradation:**
* **Factors:** Monetised through the **replacement cost of nutrients** (NPK) and the loss of **Soil Organic Carbon (SOC)**.
* **Logic:** If a farmer depletes the soil, the "true cost" includes the future fertilizer needed to replace those nutrients and the loss of the soil's ability to sequester carbon.


* **Water & Air Pollution:**
* **Metric:** Split between **Health Impact** (see  below) and **Environmental Impact** (cost to clean or "remediate" the water/air to safe levels).



---

### 2. Social Capital (Aligns with your : Social Externality)

TPF treats social impacts primarily through the lens of **rights violations** and **remediation**.

* **Living Income Gap:**
* **Factor:** The **difference (gap)** between the actual household income of a producer (e.g., a cocoa farmer) and the calculated Living Income for that specific region.
* **Logic:** A product is not "socially sustainable" if the producer cannot afford a decent standard of living (food, water, housing, education, healthcare).


* **Child Labour:**
* **Factor:** Calculated as a combination of **remediation costs** (cost to get the child into school) and **Human Capital Loss** (the future earnings the child loses because they weren't in school).
* **Logic:** It is a "social debt" that the supply chain owes to the affected child.


* **Underpayment/Wage Gap:**
* **Factor:** The difference between legal minimum wages (which are often too low) and the **Living Wage** for employees in the processing and retail stages.

---

### 3. Human Capital (Aligns with your : Health Externality)

This is where TPF is most advanced in its "practical" estimations. They use the **DALY (Disability Adjusted Life Year)**.

* **The DALY Value:** * **Standard Factor:** **€129,000 per DALY** (the value of one year of healthy life).
* **Occupational Health & Safety (OHS):**
* **Calculation:** Total True Cost = (Probability of Injury/Illness) × (DALY loss per incident) × (€129,000).
* **Example:** If a factory has a high rate of respiratory illness, the "True Cost" is the monetised value of the years of healthy life lost by those workers.


* **Air/Water Pollution (Health side):**
* **Calculation:** Particulate matter is monetised based on the number of respiratory deaths or illnesses it causes in a local population.

---

### How to map TPF Modules to your Multi-Dimensional Vector

If you were to implement your white paper today using these PDFs, your Multi-Dimensional vector would be populated as follows:

1. ** (Economic):** The current Market Price (from your accounting system).
2. ** (Social):** (Living Income Gap) + (Child Labour Remediation) + (Wage Gap).
3. ** (Environmental):** (CO2 emissions × €0.312) + (Land Use MSA loss) + (Nutrient depletion cost).
4. ** (Health):** (Total DALYs lost to Pollution) + (Total DALYs lost to OHS incidents) × €129,000.

### The "Gap" as your Input

Your paper mentions that "TCA provides a single, unified framework". TPF defines the **"True Price Gap"** as the sum of these external costs:


# PDF summary of TPF modules
Below is a cleaner **“indicator → unit → monetisation factor → remediation-cost components (RS/CO/PR/RT)”** matrix, grouped into **Social**, **Environmental**, and **Health** costs. All values are **EUR2024** (and **$PPP2024** where shown) and come from the *Monetisation Factors for True Pricing v4.0.2 (Nov 2025)* tables/explanations.

---

## 1 Social Costs (labour, wages, rights, equity, safety culture)

| Indicator (impact → footprint sub-indicator) | Unit | Monetisation factor (EUR2024; $PPP2024) | RS/CO/PR/RT | Notes |
|---|---:|---:|---|---|
| Child labour → Hazardous child labour | hour | 42.0; 52.5 | CO + PR + RT |  |
| Child labour → Non-hazardous child labour | hour | 15.3; 19.5 | CO + PR + RT |  |
| Child labour → Labour force to be audited for child labour | FTE | 8.75; 9.47 | PR |  |
| Forced labour → Forced workers (least severe) | FTE | 14,000; 20,100 | RS + CO + PR + RT | Severity category. |
| Forced labour → Forced workers (medium severe) | FTE | 76,600; 110,000 | RS + CO + PR + RT | Severity category. |
| Forced labour → Forced workers (most severe) | FTE | 139,000; 200,000 | RS + CO + PR + RT | Mentions DALY-based health valuation as part of compensation for abuse victims in the explanation. |
| Forced labour → Forced workers who are in debt bondage | FTE | 20,600; 22,300 | RS + PR + RT |  |
| Forced labour → Forced workers who are victims of abuse | FTE | 43,400; 48,200 | CO + RS + RT |  |
| Forced labour → Labour force to be audited for forced labour | FTE | 8.75; 9.47 | PR |  |
| Gender discrimination → Female workers without maternity leave provision | FTE | 2,000; 2,880 | RS + PR + RT | Explanation describes restoration + prevention + retribution. |
| Gender discrimination → Value of denied maternity leave | EUR | 1.03; 1.03 | CO |  |
| Gender discrimination → Wage gap from gender discrimination | EUR | 1.03; 1.03 | CO |  |
| Gender discrimination → Wage gap from unequal opportunities | EUR | 1.03; 1.03 | CO |  |
| Gender discrimination → Labour force to be audited for discrimination | FTE | 8.75; 9.47 | PR |  |
| Underpayment in the value chain → Wage gap of workers earning below minimum wage | EUR | 1.53; 1.53 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Underpayment in the value chain → Wage gap of workers earning above minimum wage but below decent living wage | EUR | 1.03; 1.03 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Underpayment in the value chain → Labour force to be audited for insufficient wages | FTE | 8.75; 9.47 | PR |  |
| Lack of social security → Workers without legal social security | FTE | 2,650; 3,820 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Lack of social security → Value of denied paid leave | EUR | 1.03; 1.03 | CO |  |
| Lack of social security → Labour force to be audited for insufficient social security | FTE | 8.75; 9.47 | PR |  |
| Excessive & underpaid overtime → Workers performing illegal overtime | FTE | 125; 179 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Excessive & underpaid overtime → Workers performing underpaid overtime | FTE | 125; 179 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Excessive & underpaid overtime → Overtime pay gap | EUR | 1.03; 1.03 | CO |  |
| Excessive & underpaid overtime → Labour force to be audited for illegal overtime | FTE | 8.75; 9.47 | PR |  |
| Insufficient income → Living income gap | EUR | 1.03; 1.03 | CO |  |
| Occurrence of harassment → Workers who experienced non-physical non-sexual harassment | worker | 27,800; 30,100 | RS + CO + PR + RT |  |
| Occurrence of harassment → Workers who experienced non-physical sexual harassment | worker | 27,800; 30,100 | RS + CO + PR + RT |  |
| Occurrence of harassment → Workers who experienced physical non-sexual harassment | worker | 68,500; 75,500 | RS + CO + PR + RT |  |
| Occurrence of harassment → Workers who experienced non-severe physical sexual harassment | worker | 76,800; 87,400 | RS + CO + PR + RT |  |
| Occurrence of harassment → Workers who experienced severe physical sexual harassment | worker | 86,100; 101,000 | RS + CO + PR + RT |  |
| Occurrence of harassment → Labour force to be audited for harassment | FTE | 8.75; 9.47 | PR |  |
| Lack of freedom of association → Instances of denied freedom of association | violation | 430; 618 | PR + RT | **Restoration & compensation excluded to avoid double counting** (stated explicitly). |
| Lack of freedom of association → Labour force to be audited for denied freedom of association | FTE | 8.75; 9.47 | PR | **Restoration & compensation excluded to avoid double counting** (stated explicitly). |

---

## 2 Environmental Costs (climate, ecosystems, land, water, resources, soils) **[1]**

| Indicator (impact → footprint sub-indicator) | Unit | Monetisation factor (EUR2024; $PPP2024) | RS/CO/PR/RT | Notes |
|---|---:|---:|---|---|
| Contribution to climate change → GHG emission | kg CO2eq | 0.312; 0.337 | CO | Social cost of carbon framing in explanation. |
| Eutrophication → Freshwater eutrophication | kg P eq to freshwater | 239; 343 | RS + CO | Notes country-specific derivation possible (water-basin risk). |
| Eutrophication → Marine eutrophication | kg N eq to marine water | 16.6; 23.8 | RS + CO |  |
| Ecotoxicity → Terrestrial ecotoxicity | kg 1,4-DB eq (industrial soil) | 0.000294; 0.000423 | CO | Global endpoint valuation rationale noted in explanation. |
| Ecotoxicity → Freshwater ecotoxicity | kg 1,4-DB eq (freshwater) | 0.0472; 0.0680 | CO | Global endpoint valuation rationale noted in explanation. |
| Ecotoxicity → Marine ecotoxicity | kg 1,4-DB eq (seawater) | 0.00215; 0.00310 | CO | Global endpoint valuation rationale noted in explanation. |
| Photochemical oxidant formation (POF) → ecosystems damage | kg NOx eq | 3.33; 4.79 | CO |  |
| Acidification | kg SO2 eq | 5.47; 7.87 | CO |  |
| Ozone layer depleting emissions | kg CFC-11 eq | 70.4; 76.8 | CO | Includes a crop-damage component in explanation; used globally (no regional coefficient applied). |
| Land occupation → Tropical forest | MSA·ha·yr | 2,470; 3,560 | CO | Notes country-specific derivation possible (biome cover per country). |
| Land occupation → Other forest | MSA·ha·yr | 1,180; 1,700 | CO |  |
| Land occupation → Woodland/shrubland | MSA·ha·yr | 1,600; 2,300 | CO |  |
| Land occupation → Grassland/savannah | MSA·ha·yr | 2,830; 4,080 | CO |  |
| Land occupation → Inland wetland | MSA·ha·yr | 17,400; 25,000 | CO |  |
| Land occupation → Coastal wetland | MSA·ha·yr | 12,800; 18,400 | CO |  |
| Land transformation → Tropical forest | MSA·ha·yr | 4,510; 4,880 | RS | Ecosystem restoration project cost basis in explanation. |
| Land transformation → Other forest | MSA·ha·yr | 3,120; 3,380 | RS |  |
| Land transformation → Woodland/shrubland | MSA·ha·yr | 1,290; 1,400 | RS |  |
| Land transformation → Grassland/savannah | MSA·ha·yr | 340; 368 | RS |  |
| Land transformation → Inland wetland | MSA·ha·yr | 43,100; 46,700 | RS |  |
| Land transformation → Coastal wetland | MSA·ha·yr | 3,770; 4,080 | RS |  |
| Fossil fuel depletion | kg oil eq | 0.560; 0.606 | CO |  |
| (Other) non-renewable material depletion | kg Cu eq | 0.283; 0.307 | CO |  |
| Scarce water use → Scarce blue water use | m³ | 1.62; 1.75 | RS | Annualized desalination cost basis in explanation. |
| Soil degradation → Soil organic carbon (SOC) loss | “SOC loss” | 0.0353; 0.0509 | CO |  |
| Soil degradation → Soil loss from wind erosion | “Soil loss” | 0.0343; 0.0371 | CO |  |
| Soil degradation → Soil loss from water erosion | “Soil loss” | 0.0268; 0.0291 | CO |  |
| Soil degradation → Soil compaction | corrected tkm | 0.644; 0.927 | CO | Notes off-site costs excluded (listed in explanation). |

---

## 3 Health Costs (DALY valuation, air-pollution health, and worker health outcomes) **[1]**

| Indicator (impact → footprint sub-indicator) | Unit | Monetisation factor (EUR2024; $PPP2024) | RS/CO/PR/RT | Notes |
|---|---:|---:|---|---|
| Toxic emissions → Human toxicity (to air) | DALY | 129,000; 140,000 | CO | DALY valuation described via OECD VSL meta-analysis in explanation. |
| Toxic emissions → Human toxicity (to water) | DALY | 129,000; 140,000 | CO | Same DALY value used. |
| Toxic emissions → Human toxicity (to soil) | DALY | 129,000; 140,000 | CO | Same DALY value used. |
| Particulate matter (PM) formation | kg PM2.5 eq | 81.3; 88.0 | CO | Human health damage via DALY valuation in explanation. |
| Photochemical oxidant formation (POF) → human health damage | kg NOx eq | 0.118; 0.127 | CO |  |
| Negative effects on employee health & safety → Insured non-fatal occupational incidents | incident | 4,520; 4,900 | CO + PR + RT | Explanation describes compensation + prevention + retribution. |
| Negative effects on employee health & safety → Uninsured non-fatal occupational incidents | incident | 4,670; 5,110 | CO |  |
| Negative effects on employee health & safety → Fatal occupational incidents | incident | 3,840,000; 4,150,000 | CO | Explanation text is truncated where shown, but factor is listed. |
| Occupational injuries with breach of H&S standards | incident | 4,790; 6,900 | RT | Penal/penalty (retribution) framing in explanation. |
| Work performed in violation of H&S standards | FTE | 2,160; 3,110 | RT |  |
| Labour force to be audited for H&S | FTE | 8.75; 9.47 | PR |  |

If you want this as a CSV/JSON (or want me to deduplicate repeated items like the “8.75 per FTE audit” factor across impacts while keeping traceability), tell me the preferred format and whether you want EUR-only or EUR + PPP columns.