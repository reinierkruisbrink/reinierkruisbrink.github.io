---
title: "Active Inference"
subtitle: "The Free Energy Principle in Mind, Brain, and Behavior"
author: "Thomas Parr"
author_url: "https://www.goodreads.com/author/show/5590049.Thomas_Parr"
goodreads_url: "https://www.goodreads.com/book/show/58275959-active-inference"
published_date: ""
cover_image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647801522i/58275959.jpg"
read_date: "2023"
date: "2023-07-26"
my_rating: 7.7
synopsis: "Active Inference: The Free Energy Principle in Mind, Brain, and Behavior by Thomas Parr, Giovanni Pezzulo, and Karl Friston offers a comprehensive and mathematical look at Karl Friston's theoretical framework for understanding cognition and behavior."
tags:
  - "neuroscience"
  - "mathematics"
  - "predictive-processing"
  - "intelligence"
---

# Active Inference: The Free Energy Principle in Mind, Brain, and Behavior

## Overview

Active Inference: The Free Energy Principle in Mind, Brain, and Behavior by Thomas Parr, Giovanni Pezzulo, and Karl Friston offers a comprehensive and mathematical look at Karl Friston's theoretical framework for understanding cognition and behavior.

## Key Concepts

### The Free Energy Principle

- **Variational free energy**: The principle states that any self-organising system that persists over time must minimise a quantity called *variational free energy* — an upper bound on *surprisal* (the negative log-probability of sensory observations given the organism's generative model). Minimising free energy is equivalent to maximising the evidence for the organism's model of the world
  - **Formal statement**: $F = E_q[\ln q(\theta) - \ln p(o, \theta)] \geq -\ln p(o)$ where $q(\theta)$ is the approximate posterior over hidden states, $p(o, \theta)$ is the generative model, and $-\ln p(o)$ is surprisal
  - **Biological imperative**: Organisms that fail to minimise surprise encounter states incompatible with their continued existence (e.g., a fish out of water); the principle frames survival itself as an inference problem
- **Generative models**: The brain maintains a probabilistic model of how hidden causes in the world generate sensory data; this model has a hierarchical structure where higher levels encode more abstract, slowly changing regularities and lower levels encode fast sensory fluctuations

### Perception and Action as Inference

- **Perceptual inference**: Perception is the process of updating internal beliefs (the approximate posterior $q$) to better explain incoming sensory data — this is equivalent to minimising free energy by changing the brain's internal states
  - **Prediction error minimisation**: Sensory prediction errors propagate up the cortical hierarchy; each level attempts to explain away the errors from the level below by generating top-down predictions
- **Active inference**: Action is the *other* way to minimise free energy — instead of changing beliefs to fit sensory data, the organism changes the world (via motor commands) to make sensory data fit its predictions
  - **Unification of perception and action**: Both perception and action serve the same objective (minimising free energy), abolishing the traditional divide between sensory and motor processing
- **Expected free energy and planning**: When an agent must choose among future actions or policies, it selects those that minimise *expected* free energy — a quantity that naturally decomposes into two terms: (1) *pragmatic value* (achieving preferred outcomes, i.e., reward) and (2) *epistemic value* (reducing uncertainty about hidden states, i.e., information gain / curiosity)

### Attention, Learning, and Precision

- **Precision weighting**: Not all prediction errors are equally reliable; the brain assigns *precision* (inverse variance) to different sensory channels — attention is formally cast as the optimisation of precision, amplifying reliable signals and suppressing noisy ones
  - **Neurochemical correlates**: Neuromodulators like dopamine and acetylcholine are proposed to encode precision; disruptions in precision weighting may explain psychiatric symptoms (e.g., false inferences in psychosis, attenuated sensory precision in autism)
- **Learning as model updating**: Longer-timescale changes to the parameters and structure of the generative model correspond to learning (synaptic plasticity) and neurodevelopment; the agent refines its model so that future predictions become more accurate
- **Hierarchical depth**: The depth of the generative model determines the temporal horizon over which an organism can plan and infer; deeper models support more abstract reasoning and longer-range predictions

### Applications and Implications

- **Computational psychiatry**: Active inference provides formal accounts of conditions like schizophrenia (aberrant precision on prediction errors), depression (pessimistic priors about future outcomes), and addiction (biased expected free energy favouring short-term reward)
- **Robotics and artificial intelligence**: Active inference agents can be built that explore, learn, and act in unfamiliar environments by balancing exploitation and exploration — without needing separate reward functions or curiosity bonuses bolted on
- **Biological universality**: The authors argue that the framework applies not just to brains but to any system that maintains itself far from thermodynamic equilibrium — from single cells to social systems — suggesting a deep formal continuity across scales of biological organisation

## Personal Reflection

[To be added]

## Related Books

- [[being_you|Being You]] - Seth applies predictive processing to consciousness; Active Inference provides the mathematical underpinning
- [[the_hidden_spring|The Hidden Spring]] - Solms maps the free energy principle onto brainstem affect — the clinical counterpart to the formal theory
- [[everything_is_predictable|Everything Is Predictable]] - Chivers explains the Bayesian reasoning that Active Inference formalises into a theory of mind

---

**Parent:** [[Books/index|Books]]
