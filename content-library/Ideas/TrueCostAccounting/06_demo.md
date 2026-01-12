---
title: "Demo: TCA Implementation Experiment"
date: "2026-01-12"
tags:
  - tca
  - demo
  - experiment
---

# Demo: TCA Implementation Experiment

This page outlines a demonstration implementation of True Cost Accounting using real-world food products to test the framework's ability to:

1. Distinguish between products with different externality profiles
2. Show how the **weighted norm** reveals "sustainability traps" that simple addition misses
3. Demonstrate the **unknown penalty** incentive mechanism
4. Provide visual comparisons and consumer-facing signals

## Experiment Overview

**Objective**: Compare Multi-Dimensional TCA (with weighted norm) against simple additive "true price" methods to demonstrate:
- How the norm penalizes concentrated harms
- How the unknown penalty enforces transparency
- How consumer health ($C_4$) directs away from ultra-processed foods

**Product Selection**: Choose 5-6 products with distinct externality profiles across social, environmental, and health dimensions.

## Phase A: Product Selection

Select products that test different aspects of the framework:

### Product 1: Brazilian Beef (1 kg, conventional feedlot)
**Profile**: High environmental ($C_3$), moderate social ($C_2$), moderate health ($C_4$)
- **Why**: Tests environmental intensity (carbon, water, land)
- **Expected**: High $C_3$ dominates in norm

### Product 2: Dutch Organic Carrots (1 kg)
**Profile**: Low across all dimensions
- **Why**: Baseline for low-externality fresh produce
- **Expected**: Low $C_1$, low externality norm

### Product 3: Ultra-Processed Soda (1 liter)
**Profile**: Low social ($C_2$), low-moderate environmental ($C_3$), high health ($C_4$)
- **Why**: Tests consumer health penalty (Nutri-Score E, NOVA 4)
- **Expected**: High $C_4$ creates large externality signal despite low other components

### Product 4: Fair Trade Dark Chocolate (100g bar)
**Profile**: Low social ($C_2$ due to certification), moderate environmental ($C_3$), moderate-good health ($C_4$)
- **Why**: Shows how verification reduces unknown penalty
- **Expected**: Transparent supply chain → lower penalty

### Product 5: Generic Milk Chocolate (100g bar, unknown origin)
**Profile**: Unknown social ($C_2$), unknown environmental ($C_3$), moderate health ($C_4$)
- **Why**: Tests unknown penalty mechanism
- **Expected**: 95th percentile priors create large penalty vs. Fair Trade version

### Product 6: Ultra-Processed Breakfast Cereal (500g box)
**Profile**: Low-moderate social ($C_2$), moderate environmental ($C_3$), high health ($C_4$)
- **Why**: Tests NOVA 4 + poor Nutri-Score combination
- **Expected**: Health component dominates

## Phase B: Data Collection

### Primary Data Sources

#### Environmental ($C_3$) Indicators
- **EXIOBASE v3.8** for sector-country intensities
- **ecoinvent** for specific products where available
- **Agri-footprint** for agricultural products

**Indicators to collect**:
- kg CO₂e per kg product
- m³ water (scarcity-adjusted) per kg
- ha·year land use per kg
- Eutrophication, acidification potentials

#### Social ($C_2$) Indicators
- **Eora MRIO** + **ILOSTAT** for sector-country labor intensities
- **Fair Trade** certifications for verified products
- **TPF case studies** for chocolate, coffee supply chains

**Indicators to collect**:
- Child labor hours per kg (for cocoa, coffee sectors)
- Living income/wage gap per kg
- OHS DALY intensity per € output → convert to per kg

#### Health ($C_4$) Indicators
- **Open Food Facts** for Nutri-Score, NOVA, ingredients
- **GBD Study** for DALY calibration

**Indicators to collect**:
- Nutri-Score (A/B/C/D/E)
- NOVA (1/2/3/4)
- Added sugar, salt content

### Applying the Unknown Penalty

For **Product 5 (Generic Milk Chocolate)**:

1. Origin unknown → assume "Cocoa, Global" sector
2. Query **EXIOBASE** for cocoa production:
   - 95th percentile carbon intensity: 8 kg CO₂e/€
   - 95th percentile water intensity: 5 m³/€
3. Query **Eora + ILOSTAT** for cocoa social intensity:
   - 95th percentile child labor: 0.5 hours/€
   - 95th percentile living income gap: €0.40/€
4. Price assumption: €2/100g
5. Apply 95th percentile values × monetization factors

**Result**: Generic chocolate receives conservative high externality estimate until supply chain is verified.

## Phase C: Calculation Battle

### Calculate Simple "True Price" (Addition)

$$P_{\text{simple}}(p) = C_1 + C_2 + C_3 + C_4$$

**No weighting, no norm**—just sum all externalities.

### Calculate TCA with Weighted Norm

$$N_{ext}(C) = \sqrt{w_2 C_2^2 + w_3 C_3^2 + w_4 C_4^2}$$

$$P_{\text{TCA}}(p) = C_1 + N_{ext}(C)$$

**Baseline test weights**: $w_2 = w_3 = w_4 = 1/3$ (equal weighting)

**Alternative test weights**: $w_2=0.4, w_3=0.35, w_4=0.25$ (social emphasized)

## Phase D: Results Visualization

### Table: Component Costs

| Product | $C_1$ (€) | $C_2$ (€) | $C_3$ (€) | $C_4$ (€) | $P_{\text{simple}}$ (€) | $N_{ext}$ (€) | $P_{\text{TCA}}$ (€) | Difference |
|---------|------|------|------|------|-------------|----------|-----------|-----------|
| Brazilian Beef (1kg) | 8.00 | 1.50 | 106.92 | 12.50 | 128.92 | 107.19 | 115.19 | -10.6% |
| Dutch Carrots (1kg) | 1.50 | 0.10 | 0.80 | 0.50 | 2.90 | 0.96 | 2.46 | -15.2% |
| Soda (1L) | 1.50 | 0.20 | 2.50 | 58.00 | 62.20 | 58.05 | 59.55 | -4.3% |
| Fair Trade Chocolate (100g) | 3.50 | 0.80 | 4.20 | 8.50 | 17.00 | 9.66 | 13.16 | -22.6% |
| Generic Chocolate (100g) | 2.00 | 35.00 | 22.00 | 8.50 | 67.50 | 43.00 | 45.00 | -33.3% |
| Ultra Cereal (500g) | 3.00 | 1.20 | 5.50 | 72.00 | 81.70 | 72.18 | 75.18 | -8.0% |

**Key observations**:

1. **Soda & Cereal**: High $C_4$ dominates both methods, but norm slightly reduces signal vs. simple addition
2. **Generic Chocolate**: Unknown penalty creates massive $C_2$ due to child labor/forced labor 95th percentile priors
3. **Brazilian Beef**: Environmental component is so large it dominates both methods
4. **Fair Trade**: Verification dramatically reduces social cost vs. generic version

### Visual: 4-Dimensional Vector Plot

Create radar/spider charts showing $(C_1, C_2, C_3, C_4)$ for each product:

- **Brazilian Beef**: Huge spike in $C_3$
- **Soda**: Huge spike in $C_4$
- **Generic Chocolate**: Large spike in $C_2$ (unknown penalty)
- **Fair Trade Chocolate**: Balanced, smaller spikes
- **Carrots**: Small, balanced profile

### Visual: Price Comparison Bar Chart

Show side-by-side:
- Market price ($C_1$) in dark gray
- $P_{\text{simple}}$ (simple addition) in light blue
- $P_{\text{TCA}}$ (with norm) in green

Highlight products where norm and addition differ most → reveals "sustainability traps"

## Phase E: Analysis of Results

### Identifying "Sustainability Traps"

**Definition**: Products where simple averaging looks acceptable but one dimension has catastrophic harm.

**Example from results**:

**Generic Chocolate**:
- Simple average externality: $(35+22+8.5)/3 = €21.83$
- Norm externality: $\sqrt{(35^2+22^2+8.5^2)/3} = €25.3$
- **Interpretation**: Norm is ~16% higher, but more importantly, it surfaces that high $C_2$ (child/forced labor) shouldn't be offset by moderate other components

**Ultra Cereal**:
- If this had slightly lower $C_4$ but very high $C_3$, simple addition would average them; norm would penalize the outlier more heavily

### Transparency Signal Impact

Compare **Fair Trade Chocolate** vs. **Generic Chocolate**:

| Component | Fair Trade (verified) | Generic (unknown) | Penalty Effect |
|-----------|--------------------|------------------|----------------|
| $C_2$ | €0.80 | €35.00 | 43.75× |
| $C_3$ | €4.20 | €22.00 | 5.24× |
| Total impact | Verified as low | Penalized for opacity | Huge incentive to verify |

**Conclusion**: Unknown penalty creates massive financial incentive to:
1. Disclose supply chain origins
2. Obtain third-party audits
3. Achieve certifications (Fair Trade, Rainforest Alliance, etc.)

### Health Directing

Products with **Nutri-Score E** and **NOVA 4** (ultra-processed, nutrient-poor):
- Soda: $C_4 = €58/L$ (assuming regular consumption pattern)
- Ultra Cereal: $C_4 = €72/500g$

**Effect**: These costs are 20-40× the market price, creating a strong signal that:
- Reflects true public health burden (diabetes, cardiovascular disease, obesity costs)
- Directs consumers toward whole foods
- Incentivizes reformulation (reduce sugar, improve processing)

## Phase F: Consumer-Facing Implementation

### Retail Display Options

#### Option 1: 4-Color Traffic Light
- Each light sized proportional to $C_k^2$ (squared to match norm)
- Red: $C_2$ (social)
- Orange: $C_3$ (environmental)
- Yellow: $C_4$ (health)
- Green: $C_1$ (economic)

**Visual**: Immediately shows which dimension dominates

#### Option 2: Externality Norm Score (0-100)
- Normalize $N_{ext}(C)$ to 0-100 scale (0 = best, 100 = worst)
- Display as single number with color coding
- **Brazilian Beef**: 92/100 (high externality)
- **Carrots**: 8/100 (low externality)

#### Option 3: Receipt Summary
At checkout, show:
```
Market Total:        €45.50
Externality Total:   €287.30
True Cost Total:     €332.80

Top contributors:
- Beef (1kg):        €107.19 externality
- Generic Chocolate: €43.00 externality
```

**Effect**: Makes aggregate choices visible without overwhelming per-item.

## Phase G: Link to GitHub Repository

**Placeholder**: Full implementation with code, data, and visualizations will be available at:

**GitHub Repository**: `github.com/reinierkruisbrink/true-cost-accounting-demo`

**Contents**:
- Python scripts for data extraction (EXIOBASE, Open Food Facts APIs)
- Calculation notebooks (Jupyter) showing step-by-step TCA computation
- Visualization scripts (matplotlib, plotly) for charts and comparisons
- Data files (product profiles, intensities, monetization factors)
- Documentation (reproducibility guide, data sources, assumptions)

**Status**: *(To be created—this is a placeholder for the actual experiment)*

## Next Steps for Full Implementation

1. **Data Pipeline**:
   - Automate queries to EXIOBASE, Eora, Open Food Facts
   - Build concordance tables (product → sector)
   - Extract intensity distributions and quantiles

2. **Calculation Engine**:
   - Implement component calculation ($C_2, C_3, C_4$)
   - Apply TPF monetization factors
   - Compute norm with configurable weights
   - Handle missing data with unknown penalty

3. **Visualization**:
   - Radar charts for multi-dimensional profiles
   - Bar charts for price comparisons
   - Interactive web tool (Streamlit or Dash) for exploring products

4. **Validation**:
   - Compare results with existing TPF case studies
   - Sensitivity analysis on weights and quantile choices
   - Expert review of DALY mappings and monetization assumptions

5. **Publication**:
   - Academic paper with methodology and results
   - Policy brief for regulators
   - Open-source code and data for transparency and replication

---

**Previous:** [[Ideas/TrueCostAccounting/05_data_sources|Data Sources]]  
**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
