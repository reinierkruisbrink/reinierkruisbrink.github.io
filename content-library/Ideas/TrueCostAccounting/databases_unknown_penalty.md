---
title: "Public Databases for the Unknown Penalty"
date: "2026-01-12"
tags:
  - tca
  - data
  - mrio
---

# Public Databases for the Unknown Penalty

This page is a source registry for “default priors” used when supply-chain data is missing.

The intent is not perfect truth; it is a **publicly auditable baseline** that:

- is hard to game
- improves as transparency improves
- can be replaced by verified primary data

## Core concept: intensities and distributions

You want distributions of impact intensities like:

- kg CO2e per € output (or per kg product)
- DALYs per € output (worker health, pollution exposure proxies)
- wage gap / labour risk proxies per € output

Then define conservative quantiles for the unknown penalty (see [[Ideas/TrueCostAccounting/unknown_penalty|Unknown penalty]]).

## MRIO / IO databases (sector × country priors)

These are useful because they provide consistent, economy-wide tables.

- **Eora (Eora26 / Eora MRIO)**: multi-regional input-output tables with environmental/satellite accounts; useful for sector/country priors.
- **EXIOBASE**: detailed environmentally-extended MRIO; useful for carbon, land, water, material footprints by sector/country.

Notes:

- access models differ by dataset/version; keep a local “how to obtain” note when you implement
- MRIO outputs are typically intensity per monetary output; you’ll need price/quantity bridges for product-level use

## Food/product-specific public data (consumer-facing)

- **Open Food Facts**: Nutri-Score, NOVA, ingredient and category metadata for packaged foods.
- **Our World in Data** (and similar open footprint aggregations): helpful as a sanity check and for communicating typical footprints.

## Official statistics (social and development context)

These are less directly “product-level”, but help constrain priors and build hybrid penalties.

- **World Bank**: country-level development indicators
- **FAOSTAT**: agriculture production/trade context
- **ILOSTAT**: labour statistics context

## How to operationalize in TCA

1. Map product → (sector, country)
2. Pull intensity distribution for relevant indicators
3. Select a quantile (e.g., 95th) as the default unknown intensity
4. Convert to functional unit (€/kg, €/meal) using price/quantity conversion assumptions
5. Multiply by monetisation factors to get € components

## Next implementation task (for Copilot)

- Create a small local “factor + dataset registry” table with columns:
  - dataset
  - indicator
  - unit
  - geography
  - year/version
  - extraction method
  - license/access notes

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
