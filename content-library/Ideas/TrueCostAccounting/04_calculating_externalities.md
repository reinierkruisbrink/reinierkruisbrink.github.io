---
title: "Calculating Externalities"
date: "2026-01-12"
tags:
  - tca
  - methods
  - implementation
---

# Calculating Externalities: From Indicators to Monetized Costs

This page explains the operational mechanics of calculating $C_2$, $C_3$, and $C_4$: which indicators to use, how to monetize them, and how to handle upper bounds for unknown data.

## General Structure

For each product/service $p$ in a defined functional unit $u$ (e.g., 1 kg, 1 meal, 1 service unit):

$$C_k=\sum_i (I_{k,i} \times F_{k,i})$$

Where:
- $I_{k,i}$: midpoint indicator (physical or categorical)
- $F_{k,i}$: monetization factor (€/unit of indicator)

## $C_2$: Social Externality

### Footprint Indicators

| Indicator Category | Midpoint Indicator | Unit |
|-------------------|-------------------|------|
| Child labour | Hazardous child labour hours | hours |
| | Non-hazardous child labour hours | hours |
| | Labour force to audit | FTE |
| Forced labour | Forced workers (least severe) | FTE |
| | Forced workers (medium severe) | FTE |
| | Forced workers (most severe) | FTE |
| | Debt bondage cases | FTE |
| | Abuse victims | FTE |
| Gender discrimination | Female workers without maternity | FTE |
| | Maternity leave value denied | € |
| | Gender wage gap | € |
| | Unequal opportunities wage gap | € |
| Underpayment | Below minimum wage gap | € |
| | Below living wage gap | € |
| Social security | Workers without social security | FTE |
| | Denied paid leave value | € |
| Overtime | Workers performing illegal overtime | FTE |
| | Underpaid overtime | FTE |
| | Overtime pay gap | € |
| Living income | Living income gap | € |
| Harassment | Non-physical, non-sexual | worker |
| | Non-physical, sexual | worker |
| | Physical, non-sexual | worker |
| | Physical, sexual (non-severe) | worker |
| | Physical, sexual (severe) | worker |
| Freedom of association | Denied freedom violations | violation |
| Occupational health | DALYs lost to OHS incidents | DALY |

### Cost Factors (TPF v4.0.2, EUR2024)

| Indicator | Monetization Factor | Components |
|-----------|-------------------|------------|
| Hazardous child labour | €42.0/hour | CO + PR + RT |
| Non-hazardous child labour | €15.3/hour | CO + PR + RT |
| Audit requirement | €8.75/FTE | PR |
| Forced labour (least severe) | €14,000/FTE | RS + CO + PR + RT |
| Forced labour (medium severe) | €76,600/FTE | RS + CO + PR + RT |
| Forced labour (most severe) | €139,000/FTE | RS + CO + PR + RT |
| Debt bondage | €20,600/FTE | RS + PR + RT |
| Abuse victims | €43,400/FTE | CO + RS + RT |
| Maternity provision | €2,000/FTE | RS + PR + RT |
| Wage/income gaps | €1.03/€1.00 gap | CO (+ PR + RT) |
| Social security lack | €2,650/FTE | CO + PR + RT |
| Illegal/underpaid overtime | €125/FTE | CO + PR + RT |
| Harassment (non-physical) | €27,800/worker | RS + CO + PR + RT |
| Harassment (physical, non-sexual) | €68,500/worker | RS + CO + PR + RT |
| Harassment (severe sexual) | €86,100/worker | RS + CO + PR + RT |
| Freedom of association denial | €430/violation | PR + RT only |
| OHS (health impacts) | €129,000/DALY | Health valuation |

**Component codes**:
- RS: Restoration
- CO: Compensation
- PR: Prevention
- RT: Retribution

### Calculation Example: Coffee Supply Chain

For 1 kg coffee beans from specific origin:

```
Child labour (hazardous): 0.5 hours × €42.0/hour = €21.0
Living income gap: €0.30 × €1.03/€ = €0.31
OHS impacts: 0.0002 DALY × €129,000/DALY = €25.8
Gender wage gap: €0.15 × €1.03/€ = €0.15
---
C_2 = €47.26/kg
```

### Upper Bound for Unknown (95th Percentile)

When origin, supplier practices, or audit data is missing:

1. Identify sector-country combination (e.g., "Coffee production, Colombia")
2. Query MRIO database (Eora, EXIOBASE) or sector studies for intensity distribution
3. Use 95th percentile value as conservative default
4. Example: If Colombia coffee sector shows child labour intensity distribution with 95th percentile = 1.2 hours/kg, use that value

**Rationale**: Penalizes opacity while remaining defensible (not worst-case, but conservative).

## $C_3$: Environmental Externality

### Footprint Indicators

| Indicator Category | Midpoint Indicator | Unit |
|-------------------|-------------------|------|
| Climate change | Greenhouse gas emissions | kg CO₂e |
| Water use | Water consumed (scarcity-adjusted) | m³ |
| Biodiversity | Land use impact | ha·year |
| | Mean Species Abundance loss | MSA·ha·year |
| Soil degradation | Nutrient depletion (NPK) | kg N/P/K |
| | Soil organic carbon loss | kg SOC |
| Air pollution | Particulate matter precursors | kg PM2.5 |
| | NOx, SOx emissions | kg |
| Water pollution | Eutrophication potential | kg N-eq |
| | Acidification potential | kg SO₂-eq |
| | Ecotoxicity | CTUe |

### Cost Factors (TPF v4.0.2, EUR2024)

| Indicator | Monetization Factor | Logic |
|-----------|-------------------|-------|
| **CO₂e** | **€0.312/kg CO₂e** | Social cost of carbon (long-term damage) |
| Water (scarce region) | €2.50-15/m³ (region-dependent) | Restoration/replacement cost in water-stressed areas |
| Biodiversity (MSA) | €8,000-25,000/ha·year | Ecosystem restoration or lost services |
| Soil nutrients (N) | €1.50/kg N | Replacement fertilizer cost |
| Soil organic carbon | €0.25/kg SOC | Carbon sequestration value |
| PM2.5 (health) | See $C_4$ below | Through respiratory disease burden |
| Eutrophication | ~€5-10/kg N-eq | Water treatment cost |

**Note**: Some environmental impacts also create health externalities (e.g., air pollution causes respiratory disease). To avoid double-counting:
- Environmental component ($C_3$): remediation/cleanup cost
- Health component ($C_4$): DALY burden on exposed populations

### Calculation Example: Beef Production

For 1 kg beef (conventional, feedlot):

```
Climate: 27 kg CO₂e × €0.312/kg = €8.42
Water: 15 m³ × €5/m³ = €75 (scarce region)
Land use: 20 m²·year × (€10,000/ha·year ÷ 10,000 m²/ha) = €20
Eutrophication: 0.5 kg N-eq × €7/kg = €3.50
---
C_3 = €106.92/kg
```

### Upper Bound for Unknown

When production method, origin, or supply chain data missing:

1. Map to sector-country (e.g., "Cattle ranching, Brazil")
2. Query LCA databases (Agri-footprint, ecoinvent) or MRIO environmental extensions
3. Use 95th percentile intensities for:
   - Carbon intensity (kg CO₂e/kg product or per €)
   - Water consumption (m³/kg or per €)
   - Land use (ha·year/kg or per €)
4. For Brazil cattle with unknown practices: 95th percentile might be 50 kg CO₂e/kg (vs. 27 kg for verified lower-impact)

**Effect**: Products with missing LCA data receive penalty until supply chain is verified.

## $C_4$: Consumer/Public Health Externality

### Footprint Indicators (Food Products)

| Indicator Category | Midpoint Indicator | Unit |
|-------------------|-------------------|------|
| Nutritional quality | Nutri-Score | A/B/C/D/E |
| Processing level | NOVA classification | 1/2/3/4 |
| Added sugar | Grams per 100g | g |
| Salt | Grams per 100g | g |
| Trans fats | Grams per 100g | g |
| Consumer exposure | Air pollution (PM2.5) | kg PM2.5 (population-weighted) |
| | Water contaminants | DALYs from exposure |

### Cost Factors: DALY Mapping

**Core valuation**: €129,000/DALY (consistent with occupational health)

**Nutri-Score to DALY proxy** (conservative estimates):

| Nutri-Score | DALY risk proxy per 1000 kcal/year | Rationale |
|-------------|-----------------------------------|-----------|
| A | 0.0001 DALY | Minimal diet-related disease risk |
| B | 0.0003 DALY | Slightly elevated risk |
| C | 0.0006 DALY | Moderate risk (standard Western diet) |
| D | 0.0012 DALY | High risk (poor nutrition) |
| E | 0.0025 DALY | Very high risk (ultra-poor nutrition) |

**NOVA to DALY multiplier** (processing penalty):

| NOVA | Multiplier | Rationale |
|------|-----------|-----------|
| 1 (Unprocessed) | 1.0× | Baseline |
| 2 (Processed ingredients) | 1.1× | Minimal processing impact |
| 3 (Processed foods) | 1.3× | Added preservatives, processing artifacts |
| 4 (Ultra-processed) | 1.8× | High disease association (meta-analyses) |

**Combined formula**:

$$\text{DALY}_{\text{diet}} = \text{kcal consumed/year} \times \text{NutriScore proxy} \times \text{NOVA multiplier} \times (1 / 1000)$$

**Air pollution (consumer exposure)**:

$$\text{DALY}_{\text{pollution}} = \text{population-weighted PM2.5} \times \text{exposure duration} \times \text{dose-response factor}$$

Standard dose-response: ~0.001 DALY per person per µg/m³ per year of PM2.5 exposure.

### Calculation Example: Ultra-Processed Snack

For 100g snack (Nutri-Score E, NOVA 4):

```
Annual consumption assumption: 10 kg (average consumer)
Energy: 500 kcal/100g → 50,000 kcal/year for this product

DALY_diet = 50,000 kcal × 0.0025 DALY/1000 kcal × 1.8 (NOVA) = 0.225 DALY/year per regular consumer

Per 100g unit:
DALY per 100g = 0.225 DALY/year ÷ 100 units/year = 0.00225 DALY/100g

C_4 = 0.00225 DALY × €129,000/DALY = €290.25 per 100g unit
```

**Note**: This appears high, which is intentional—reflects true public health burden of ultra-processed, nutrient-poor foods when consumed regularly.

### Upper Bound for Unknown

When nutritional data or processing method unknown:

1. **Nutri-Score missing**: Assign "E" (worst category)
2. **NOVA missing**: Assign "4" (ultra-processed) for packaged goods
3. **Ingredients unknown**: Use product category 95th percentile for sugar/salt/fat
4. **Effect**: Incentivizes nutritional transparency and disclosure

**Example**: Generic "snack bar" with no data receives:
- Nutri-Score E (0.0025 DALY/1000 kcal)
- NOVA 4 (1.8× multiplier)
- Total: Conservative high estimate until verified

## Calculation Workflow

1. **Product characterization**:
   - Functional unit (kg, meal, service)
   - Supply chain map (materials, processes, locations)
   - Available primary data (audits, certifications, measurements)

2. **Indicator population**:
   - For known data: use measured/verified values
   - For unknown data: query sector-country distribution → extract 95th percentile (see [[Ideas/TrueCostAccounting/05_data_sources|Data Sources]])

3. **Monetization**:
   - Apply TPF factors to each indicator
   - Sum within component ($C_2$, $C_3$, $C_4$)

4. **Aggregation**:
   - Compute externality norm: $N_{ext}(C)=\sqrt{w_2C_2^2+w_3C_3^2+w_4C_4^2}$
   - Consumer signal: $P_{signal}=C_1+N_{ext}(C)$

5. **Tax application**:
   - At each supply chain stage: tax on incremental EV
   - Final consumer: tax on total EV (with input credits for intermediate stages)

For detailed information on data sources, verification tiers, and sector-country priors, see [[Ideas/TrueCostAccounting/05_data_sources|Data Sources]].

## Upper Bound Philosophy

The unknown penalty is **not punitive by design**; it is **conservative realism**:

- Unknown supply chains carry real risk
- 95th percentile represents plausible high-impact scenario
- Penalty declines with verification
- Creates market for traceability and auditing services
- Prevents "ignorance is bliss" strategy

**Key principle**: The burden of proof shifts to the producer. Opacity is expensive; transparency is valuable.

---

**Previous:** [[Ideas/TrueCostAccounting/03_related_work|Related Work]]  
**Next:** [[Ideas/TrueCostAccounting/05_data_sources|Data Sources]]  
**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
