---
title: "Domain Functional Level (DFL) Elevation"
tags:
  - fetus
---
- the [[Domain Functional Level (DFL)]] Elevation happens when all the [[Domain Controller (DC)]]s in the domain meet the minimum required OS version, unlocking newer AD functionality
- the [[Primary Domain Controller (PDC) Emulator]] is required for a DFL Elevation because AD changes need to be coordinated across all domain controllers. the pdc acts as the central point to validate, commit and replicate changes during the DFL elevation 
- raising the DFL can enable better features like better [[SYSVOL Replication]] with DFSR and stuff