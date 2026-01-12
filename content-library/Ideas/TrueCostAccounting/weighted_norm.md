---
title: "Weighted Norm (Strong Sustainability)"
date: "2026-01-12"
tags:
  - tca
  - math
  - policy
---

# Weighted Norm (Strong Sustainability)

This page explains why the Multi-Dimensional model uses a **norm** rather than a linear sum, and how to choose and govern the weights.

## The two aggregations

Given $C=[C_1,C_2,C_3,C_4]$:

- Linear sum (standard “true price gap” style):

$$S(C) = \sum_i C_i$$

- Weighted Euclidean norm over externalities (Multi-Dimensional TCA proposal):

$$N_{ext}(C)=\sqrt{w_2C_2^2+w_3C_3^2+w_4C_4^2}$$

## Why the norm

- It is a mathematical commitment to **non-substitutability**: extreme harm in one dimension should not be “paid for” by doing well in another.
- It surfaces “sustainability traps”: cases where a linear average looks fine but one component is catastrophic.

## Weights: what they are (and what they are not)

- Weights are **policy choices**, not scientific constants.
- The weights should be stable enough to plan investments, but adjustable as society changes priorities.

Practical governance questions:

- Who sets $w_i$ (national governments, EU, global standards bodies)?
- How frequently can weights change?
- How to prevent lobbying from collapsing the system toward $w_1=1$?

See [[Ideas/TrueCostAccounting/weights_and_governance|Weights, legitimacy, and gaming resistance]].

## Canonical aggregation used in this project

This folder uses:

- $C_1$ as the observed market price base (kept as-is)
- $N_{ext}(C)$ as the aggregated externality signal

Then the consumer-facing “true price signal” (before any tax mechanics) is:

$$P_{signal}=C_1 + N_{ext}(C)$$

## Link to tax design

The norm is an information object; tax design determines where it bites.

- [[Ideas/TrueCostAccounting/vat_replacement|VAT replacement + intermediate taxing]]

**Parent:** [[Ideas/TrueCostAccounting/index|TCA]]
