---
title: "Kerberos Distribution Centers (KDC)"
tags:
  - fetus
---
- the trusted centralized server that handles authentication credentials and issues tickets and network session keys to users and services for secure network access
- key components of KDCs:
	- Authentication Server (AS)
		- when users login they first contact the AS and provides it with their principal name (see [[security principals]] for more) and password. the AS verifies the users identity and provides them with a [[Ticket Granting Ticket (TGT)]] and a session key which are both encrypted with the user's password
	- [[Ticket Granting Server (TGS)]]
	- [[Kerberos Database]] 