---
title: "service tickets"
tags:
  - fetus
---
- tickets allowing users to access specific network services/resources like file servers or databases. needs a [[Ticket Granting Ticket (TGT)]] to be verified by the [[Ticket Granting Server]] to accquire
- the TGS is encrypted using a key derived from the service owner hash. 
	- the service owner is the user or machine account the service runs under
- the TGS stores an encrypted copy of the Service Session Key inside it just like the TGT
