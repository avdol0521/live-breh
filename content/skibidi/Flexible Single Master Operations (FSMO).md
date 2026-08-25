---
title: "Flexible Single Master Operations (FSMO)"
tags:
  - fetus
---
- FSMO roles are unique within a single domain. two DCs from two different domains can have the same role. forest wide roles are completely unique across the whole forest 
- a DC holding an FSMO role is known as an Operations Master
	- once the operations master processes a change. the update is replicated to all other domain controllers in the forest or domain via [[SYSVOL Replication]] 
- there are 5 FSMO roles that are divided into two categories:
	- forest wide roles 
	- domain wide roles 
## forest wide roles
##### Schema Master
- updates the AD schema that defines the objects and their attributes
##### Domain Naming Master 
- manages the addition and removal of domains in the forest
## domain wide roles
##### Relative ID (RID) Master 
- allocates pools of unique Security Identifiers (SID)s to DCs to generate SIDs for all objects 
##### [[Primary Domain Controller (PDC) Emulator]]
- just read the note :v
##### Infrastructure Master
- makes sure multi domain object info is synced and upto date