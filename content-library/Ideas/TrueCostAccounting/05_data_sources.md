---
title: "05. Data Sources"
date: "2026-01-12"
tags:
  - tca
  - externalities
  - sustainability
---

# Data Sources for True Cost Accounting

This page provides a comprehensive registry of data sources for calculating TCA components, including databases for footprint indicators, monetization factors, sector-country priors, and upper-bound estimates for the unknown penalty.

## Overview

TCA requires two types of data:

1. **Footprint indicators**: Physical/categorical measures of impacts (kg CO₂e, hours of child labor, Nutri-Score, etc.)
2. **Monetization factors**: Conversion rates from indicators to € (€/kg CO₂e, €/DALY, etc.)

When primary data is missing, TCA uses **sector-country priors** with conservative quantiles (typically 95th percentile) as the unknown penalty.

## Data Quality and Verification

### Verification Tiers

The unknown penalty is reduced as data quality improves through verification:

| Tier | Description | Penalty Reduction |
|------|-------------|------------------|
| 0 | No data | 100% penalty (95th percentile) |
| 1 | Self-reported, unaudited | 70% penalty (80th percentile) |
| 2 | Third-party audited | 30% penalty (60th percentile) |
| 3 | Certified + blockchain/traceability | 0% penalty (measured value) |

**Rationale**: 
- Creates graduated incentive for transparency improvement
- Rewards investment in auditing and traceability systems
- Prevents binary "all or nothing" barrier to participation
- Recognizes that some verification is better than none

## Monetization Factors

### True Price Foundation (TPF) 

**What it provides**:
- Comprehensive monetization factors for social, environmental, and health impacts
- Based on restoration/remediation logic
- Updated annually with version tracking

**Key factors** (v4.0.2, EUR2024):
- Social: Child labor (€42/hour hazardous), forced labor (up to €139,000/FTE), OHS (€129,000/DALY)
- Environmental: Carbon (€0.312/kg CO₂e), biodiversity, water, pollution
- Health: DALY valuation (€129,000/DALY)

**Access**:
- Website: [True Price Foundation](https://www.truepricefoundation.org/)
- Documentation: Monetization Factors for True Pricing (annual reports) and Footprint Modules
- License: Check current terms; typically available for research/application with attribution

**Version control**: Always document which version (e.g., v4.0.2, Nov 2025) is used in calculations.

### Global Impact Database (GID)

**What it provides**:
- Impact pathway methodologies
- Sector-specific impact profiles
- Links indicators to monetization logic

**Relation to TPF**: GID provides underlying data/methods that TPF translates into factors.

**Access**: Through Impact Institute portal.

## Environmental Footprint Data

### Multi-Regional Input-Output (MRIO) Databases

#### Eora MRIO / Eora26

**What it provides**:
- 190+ countries × ~26 sectors (Eora26) or detailed sectoral resolution (Eora)
- Environmental extensions: carbon, energy, water, land
- Social extensions: employment, informal labor indicators
- Monetary flows + physical flows

**Use in TCA**:
- Sector-country intensity distributions for unknown penalty
- Indirect/supply-chain footprints
- Trade-linked environmental accounting

**Unit examples**:
- kg CO₂e per $ output (by sector-country)
- m³ water per $ output
- Employment per $ output

**Access**:
- Website: [worldmrio.com](https://worldmrio.com)
- License: Research access typically free; commercial use requires agreement
- Format: CSV, Stata, R packages

**Documentation**: Keep "how to extract intensity distributions" notes for reproducibility.

#### EXIOBASE

**What it provides**:
- Detailed multi-regional environmentally-extended IO tables
- 44 countries/5 rest-of-world regions × 163 industries
- Environmental extensions: GHG by gas, land use, water, materials, emissions to air/water
- High resolution for manufacturing and service sectors

**Use in TCA**:
- More detailed than Eora for specific product categories
- Carbon, water, land footprints by detailed sector
- Upper-bound priors when product origin is unknown

**Unit examples**:
- kg CO₂e per € output or per kg product (with price bridges)
- m³ water, kg materials, ha land per € output

**Access**:
- Website: [exiobase.eu](https://www.exiobase.eu)
- License: Open for non-commercial; check for commercial use
- Format: MATLAB, Python (pymrio package)

**Extraction method**: Map product → EXIOBASE sector → query intensity distribution → select quantile.

### Life Cycle Assessment (LCA) Databases

#### ecoinvent

**What it provides**:
- Gold standard LCA database
- 18,000+ datasets covering materials, energy, transport, agriculture, waste
- Multiple impact categories (climate, water, land, toxicity, eutrophication, etc.)
- Detailed process-level data

**Use in TCA**:
- High-quality environmental indicators for $C_3$
- Comprehensive cradle-to-gate or cradle-to-grave assessments
- Used to populate footprint indicators when primary data available

**Access**:
- Website: [ecoinvent.org](https://ecoinvent.org)
- License: Subscription required (academic and commercial tiers)
- Format: EcoSpold, accessible via OpenLCA, SimaPro, Brightway

**Integration**: Extract indicators (kg CO₂e, m³ water, etc.) → multiply by TPF factors.

#### Agri-footprint

**What it provides**:
- Specialized for agriculture and food products
- Crop-specific, country-specific data
- Covers major crops, livestock, aquaculture
- Compatible with LCA standards

**Use in TCA**:
- Detailed food/agriculture environmental data for $C_3$
- More granular than MRIO for specific food products

**Access**:
- Website: [agri-footprint.com](https://www.agri-footprint.com)
- License: Subscription (part of Blonk Consultants)
- Format: Compatible with LCA software

#### GaBi / Sphera

**What it provides**:
- Industrial process LCA data
- Strong on manufacturing, chemicals, energy
- Professional-grade datasets

**Use in TCA**: Industrial products, manufacturing processes for $C_3$.

**Access**: [sphera.com/gabi-software](https://sphera.com)

#### GTAP (Global Trade Analysis Project)

**What it provides**:
- Global trade with environmental accounts
- Economic and environmental data by sector-region
- Sector-country coverage for trade analysis

**Use in TCA**:
- Trade-linked environmental accounting
- Supplementary to Eora/EXIOBASE for global trade context
- Alternative source for sector-country priors

**Access**:
- Website: [gtap.agecon.purdue.edu](https://www.gtap.agecon.purdue.edu)
- License: Varies by dataset; academic access typically available
- Format: Database format, requires specialized tools

## Social/Labor Data

### ILO Statistics (ILOSTAT)

**What it provides**:
- Country-level labor statistics
- Employment by sector, wages, working conditions
- Child labor estimates, informality rates
- Occupational injury/disease statistics

**Use in TCA**:
- Sector-country labor intensity distributions
- Baseline wage data for living wage gap calculations
- OHS incident rates for DALY estimation

**Access**:
- Website: [ilostat.ilo.org](https://ilostat.ilo.org)
- License: Open access
- Format: Excel, CSV, API

**Extraction**: Map product → sector-country → query labor indicators → construct intensity per € or per worker.

### World Bank Data

**What it provides**:
- Country-level development indicators
- Poverty rates, income distribution
- Governance indicators

**Use in TCA**:
- Context for living income gap calculations
- Country-level adjustments for purchasing power parity (PPP)

**Access**:
- Website: [data.worldbank.org](https://data.worldbank.org)
- License: Open access
- Format: Excel, CSV, API

### Fair Trade and Certification Bodies

**What it provides**:
- Living wage/living income benchmarks by country-region
- Sector-specific wage data
- Audit findings (when accessible)

**Use in TCA**:
- Living wage benchmarks for $C_2$ wage gap calculations
- Verification data to reduce unknown penalty

**Examples**:
- Fair Trade International
- Rainforest Alliance
- Global Living Wage Coalition

**Access**: Varies by organization; benchmarks often published openly.

## Consumer Health Data

### Open Food Facts

**What it provides**:
- 2.8M+ food products with barcodes
- Nutri-Score (A–E), NOVA (1–4), ingredients, allergens
- Origins, brands, categories
- Crowdsourced, continuously updated

**Use in TCA**:
- Primary source for $C_4$ indicators (nutritional quality, processing level)
- Can supply ingredient-level detail for more refined health estimates

**Access**:
- Website: [world.openfoodfacts.org](https://world.openfoodfacts.org)
- License: Open Database License (ODbL) — free to use with attribution
- Format: JSON, CSV, API

**Integration**:
1. Query product by barcode or name
2. Extract Nutri-Score, NOVA
3. Map to DALY proxy (see calculation table in [[Ideas/TrueCostAccounting/04_calculating_externalities|Calculating Externalities]])
4. Multiply by €129,000/DALY

### WHO Global Health Observatory

**What it provides**:
- Disease burden data by country
- Diet-related disease prevalence
- Exposure-response functions for pollutants

**Use in TCA**:
- Calibrating Nutri-Score → DALY mappings
- Dose-response functions for pollution → health in $C_4$

**Access**:
- Website: [who.int/data/gho](https://www.who.int/data/gho)
- License: Open access
- Format: Excel, CSV, API

### Global Burden of Disease (GBD) Study

**What it provides**:
- Comprehensive DALY estimates by cause, country, year
- Diet-related disease burden
- Risk factor attributions (e.g., high sugar, low vegetables)

**Use in TCA**:
- Grounding DALY estimates in epidemiological evidence
- Refining Nutri-Score/NOVA multipliers based on meta-analyses

**Access**:
- Website: [healthdata.org/gbd](https://www.healthdata.org/gbd)
- License: Open access with attribution
- Format: Online visualization + downloadable datasets

## Sector-Country Priors for Unknown Penalty

When supply-chain data is missing, TCA uses **publicly auditable priors** to avoid arbitrary penalties.

### Recommended Workflow

1. **Identify sector-country combination**:
   - Product category → MRIO sector mapping
   - Origin country (or assume world average if fully unknown)

2. **Query intensity distribution**:
   - Social: Child labor hours/€, wage gap/€, OHS DALYs/€
   - Environmental: kg CO₂e/€, m³ water/€, land use/€
   - Health: For packaged goods, use product category from Open Food Facts

3. **Extract quantile**:
   - Default: 95th percentile (conservative but defensible)
   - Alternative: 90th (less punitive) or 99th (more strict) with explicit justification

4. **Convert to functional unit**:
   - If intensity is per €, use price to convert to per kg or per unit
   - Example: If 95th percentile for cocoa is 60 kg CO₂e/€ and price is €3/kg → 180 kg CO₂e/kg

5. **Apply unknown penalty**:
   - Use quantile intensity × TPF factor → externalized cost component
   - Product can reduce penalty by providing verified data

### Data Source Priority for Priors

| Component | First choice | Second choice | Fallback |
|-----------|-------------|---------------|----------|
| $C_2$ (Social) | Eora + ILOSTAT sector-country | Fair Trade reports | World Bank country avg |
| $C_3$ (Environmental) | EXIOBASE or ecoinvent sector-country | Eora + environmental extensions | WHO emissions data |
| $C_4$ (Health) | Open Food Facts category distribution | GBD study dietary risks | WHO country health burden |

## Implementation: Factor + Dataset Registry

For reproducibility and transparency, maintain a registry table:

| Component | Indicator | Unit | Monetization Factor | Factor Source | Footprint Data Source | Version/Year | License | Access Method |
|-----------|-----------|------|-------------------|--------------|---------------------|-------------|---------|---------------|
| $C_2$ | Child labor (hazardous) | hours | €42/hour | TPF v4.0.2 | ILOSTAT + Eora | 2024 | Open | API/CSV |
| $C_2$ | OHS impacts | DALY | €129,000/DALY | TPF v4.0.2 | ILO + GBD | 2024 | Open | API/CSV |
| $C_3$ | Climate | kg CO₂e | €0.312/kg | TPF v4.0.2 | EXIOBASE | v3.8 (2021) | Open (non-comm) | pymrio |
| $C_3$ | Water | m³ | €5-15/m³ (region) | TPF v4.0.2 | EXIOBASE | v3.8 | Open (non-comm) | pymrio |
| $C_4$ | Nutri-Score | A–E | See DALY map | TPF + GBD | Open Food Facts | 2026 | ODbL | API/JSON |
| $C_4$ | NOVA | 1–4 | See multiplier | GBD + meta | Open Food Facts | 2026 | ODbL | API/JSON |

**Documentation note**: Always include:
- Dataset version (EXIOBASE v3.8, TPF v4.0.2, etc.)
- Date of extraction
- Method for constructing intensity distributions
- Quantile choice for unknown penalty (e.g., 95th percentile)
- Any assumptions in unit conversions

## Data Quality and Update Cadence

### Monetization Factors
- **Update frequency**: Annually (TPF releases new versions)
- **Version control**: Lock to specific version for a policy cycle (e.g., 1-2 years), then update
- **Transparency**: Publish which version is in use; allow retroactive recalculation with new factors

### Footprint Databases
- **MRIO**: Typically 2-3 year lag (e.g., 2021 data released in 2024)
- **LCA**: Annual updates (ecoinvent) or continuous (Open Food Facts)
- **Policy implications**: Accept lag as inherent; use best-available data with version stamps

### Product-Level Data
- **Primary data**: Real-time when supplied by firms (audits, measurements)
- **Priors**: Updated annually or when new MRIO/LCA releases available
- **Verification**: Certification bodies provide ongoing audits; integrate updates continuously

---

**Previous:** [[Ideas/TrueCostAccounting/04_calculating_externalities|Calculating Externalities]]  
**Next:** [[Ideas/TrueCostAccounting/06_demo|Demo]]  
**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
