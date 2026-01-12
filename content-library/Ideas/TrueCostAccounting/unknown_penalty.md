---
title: "Unknown Penalty (Transparency Gap)"
date: "2026-01-12"
tags:
  - tca
  - transparency
  - data
---

# Unknown Penalty (Transparency Gap)

The **unknown penalty** is the enforcement mechanism: if a supply-chain attribute is missing or unverifiable, the model assigns a conservative, punitive estimate so that *hiding information is financially dominated by revealing it*.

This page explains:

- what “unknown” means operationally
- how to calculate the penalty using public databases
- how to prevent the penalty from being arbitrary

Related:

- [[Ideas/TrueCostAccounting/databases_unknown_penalty|Public databases for the unknown penalty]]
- [[Ideas/TrueCostAccounting/vector_components_tpf|Vector components (TPF-aligned)]]

## What counts as “unknown”

Unknown is not “we didn’t measure”; it’s “we cannot verify”. Examples:

- country of origin missing
- supplier tier not disclosed
- production practice claims without audit trail
- ingredient breakdown incomplete

## Core design principle

The unknown penalty is a **prior** over impacts conditional on what you do know (sector, country, technology class, certification status).

Operationally:

- if a parameter is unknown, substitute an intensity drawn from an adverse part of the distribution (e.g., 95th percentile)

## A generic penalty rule (recommended baseline)

For an impact intensity distribution $I \sim \mathcal{D}(\text{sector},\text{country})$:

- Known indicator: use measured $I_{\text{measured}}$
- Unknown indicator: use $Q_{0.95}(\mathcal{D})$ (or another agreed quantile)

Then compute component costs as usual:

$$C_k = \sum_i (I_{k,i} \times F_{k,i})$$

## Avoiding arbitrariness

Pick and publish:

- which databases define $\mathcal{D}$
- the quantile (90/95/99) and why
- how distributions are updated and versioned
- when the penalty can be reduced (audit/traceability thresholds)

## How it interacts with the norm

The norm amplifies concentrated unknowns: if one dimension is massively uncertain, it can dominate total TrueCost, which is *the point*—to force disclosure.

See [[Ideas/TrueCostAccounting/weighted_norm|Weighted norm and “strong sustainability”]].

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
