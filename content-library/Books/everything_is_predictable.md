---
title: "Everything Is Predictable"
subtitle: "How Bayesian Statistics Explain Our World"
author: "Tom Chivers"
author_url: "https://www.goodreads.com/author/show/21911384.Tom_Chivers"
goodreads_url: "https://www.goodreads.com/book/show/199798096-everything-is-predictable"
published_date: ""
cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1713212812i/199798096.jpg"
read_date: "2025"
date: "2025-11-15"
my_rating: 8.5
synopsis: "The book is not so much an engaging deep dive into how Bayesian probability works, but rather advocating for its power as a framework for understanding not just statistics, but human reasoning, psychology, and even the functioning of the brain."
tags:
  - "mathematics"
  - "probability"
  - "cognitive-science"
---

# Everything Is Predictable: How Bayesian Statistics Explain Our World

## Overview

Tom Chivers argues that Bayes' theorem — a simple formula for updating beliefs in light of new evidence — is not just a statistical tool but a unifying framework for understanding human cognition, scientific method, medical diagnosis, and everyday reasoning under uncertainty. The book traces the theorem from its 18th-century origins through the frequentist-Bayesian wars in statistics to its modern applications in machine learning and neuroscience's predictive-processing models of the brain. Chivers makes the case that thinking "like a Bayesian" is the closest thing we have to a universal recipe for rational belief-formation.

## Key Concepts

### Bayes' Theorem — The Mechanics
- **Prior, likelihood, posterior** — Bayes' theorem states that $P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)}$: the probability of a hypothesis given evidence equals the likelihood of the evidence given the hypothesis, multiplied by the prior probability of the hypothesis, divided by the overall probability of the evidence
- **Continuous updating** — Bayesian reasoning is iterative: each new piece of evidence updates the posterior, which then becomes the prior for the next round; this creates a principled mechanism for belief change that avoids both dogmatism and gullibility
- **Subjective probability** — unlike frequentist statistics (which define probability as long-run frequency), Bayesian probability represents a degree of belief, allowing it to be applied to one-off events ("What is the probability that this defendant is guilty?") where repeated trials are impossible

### The Base-Rate Problem and Common Errors
- **False positive paradox** — even a highly accurate test produces mostly false positives when the base rate (prior) of the condition is low; Chivers uses medical screening examples to show how ignoring priors leads to wildly incorrect probability estimates
- **P-value misinterpretation** — frequentist significance testing (p < 0.05) does not tell you the probability that a hypothesis is true; conflating p-values with posterior probabilities is a widespread error that contributes to the replication crisis in science
- **Cromwell's Rule** — never assign a prior probability of exactly 0 or 1 to any empirical proposition, because no amount of evidence can update a certainty; this principle guards against the dogmatic foreclosure of inquiry

### The Bayesian Brain
- **Predictive processing** — contemporary neuroscience models the brain as a Bayesian inference engine: it continuously generates predictions (priors) about incoming sensory data and updates those predictions when they encounter mismatches (prediction errors)
- **Perception as inference** — optical illusions, filling in of blind spots, and contextual effects on perception all become explicable as the brain's prior expectations overriding or biasing sensory evidence
- **Psychiatric implications** — conditions like schizophrenia and autism have been modelled as disorders of Bayesian inference — excessively weak or strong priors relative to sensory evidence, respectively — offering a computational-level explanation for diverse symptom profiles

### Applications and Limits
- **Machine learning** — Bayesian inference underpins many AI systems (spam filters, recommendation engines, probabilistic programming); Chivers explains how these systems formalise the prior-likelihood-posterior loop computationally
- **Decision-making under uncertainty** — Bayesian reasoning provides a normative standard for choices involving risk (insurance, medical treatment, policy); deviations from it (base-rate neglect, anchoring, confirmation bias) are systematically catalogued by behavioural economics
- **Practical humility** — Chivers notes that full Bayesian computation is often intractable for complex real-world problems; heuristics and approximations are necessary, and the framework works best as a mental discipline for asking "What was my prior? How strong is this evidence?" rather than as a literal calculation

## Personal Reflection

"I beseech you, in the bowels of Christ, think it possible you may be mistaken." (Cromwell's Rule) This is the core lesson of Bayesian reasoning: to always consider the possibility that your current beliefs are wrong and to update them in light of new evidence. The book is not so much an engaging deep dive into how Bayesian probability works, but rather advocating for its power as a framework for understanding not just statistics, but human reasoning, psychology, and even the functioning of the brain. It has made me more aware of the cognitive biases that can lead us astray and the importance of maintaining intellectual humility in the face of uncertainty.

## Related Books

- [[being_you|Being You]] - Seth's "Bayesian brain" is exactly the cognitive architecture Chivers advocates
- [[the_drunkards_walk|The Drunkard's Walk]] - Mlodinow shows how badly we fail at probability; Chivers shows how Bayes can fix it
- [[active_inference|Active Inference]] - The mathematical formalisation of the Bayesian inference Chivers popularises

---

**Parent:** [[Books/index|Books]]
