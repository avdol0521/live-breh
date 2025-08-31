---
title: "Relative ID (RID)"
tags:
  - fetus
---
- the unique numerical identifier that identifies the security principal. sits at the end of the [[Security Identifier (SID)]] 
- the domain controller with the `Relative ID Master` [[Flexible Single Master Operations (FSMO)]] role allocates these RIDs
	- these specialised DCs allocates pools of RIDs to other domain controllers to ensure each new object created in the domain has a unique SID upon creation 