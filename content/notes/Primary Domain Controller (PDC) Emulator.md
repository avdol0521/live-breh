---
title: "Primary Domain Controller (PDC)"
tags:
  - fetus
---
- the modern day [[Primary Domain Controller (PDC)]]. 
- isnt a single dedicated server handling critical functions like handling write operations for user credential changes and stuff anymore. 
- instead is a domain controller that holds the PDC emulator [[Flexible Single Master Operations (FSMO)]] role that handles: 
	- write operations for 
		- user cred changes 
		- group policy updates
			- when admins make changes to [[Group Policy Objects (GPO)]]s, the pdc handles the write operations for these to avoid conflicts
	- backwards compatibility with older NT 4.0 systems
	- account lockouts
	- serves as the master clock for time synchronization across the domain 
- the presense of a PDC emulator is required when [[Domain Functional Level (DFL) Elevation]] happens