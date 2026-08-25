---
title: Domain Controller
tags:
  - fetus
---
- the heart of the [[active directory Domain]] 
- is a specialized server that handles user authentication and access to resources within an AD network. basically the gatekeeper that verifies user logins and enforces security policies to control who can access what
	- validates access to resources based on [[Security Identifier (SID)]] 
- multiple DCs are usually deployed in a cluster within larger networks for backup and they can even be assigned specific roles such as [[Primary Domain Controller (PDC) Emulator]] or Backup DC etc
- holds the AD databse at `%SystemRoot%\NTDS` in a file named `ntds.dit` 
- the KRBTGT account on a DC is responsible for creating and signing all [[Ticket Granting Ticket (TGT)]]s
- DC types:
	- standard/writable DCs
		- maintains a writable copy of the AD database and can make changes to it
	- Read Only DC (RODC)
		- provides local auth services without storing any editable directory data. suitable for less secure locations