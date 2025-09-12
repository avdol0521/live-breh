---
title: "Kerberos Distribution Centers (KDC)"
tags:
  - fetus
---
- the trusted centralized server that handles authentication credentials and issues tickets and network session keys to users and services for secure network access
- key components of KDCs:
	- Authentication Server (AS)
		- when users login they first contact the AS and provides it with their principal name (see [[security principals]] for more) and a timestamp encrypted using a key derived from their password. the AS verifies the users identity and provides them with a [[Ticket Granting Ticket (TGT)]] and a session key. the TGT is encrypted using the [[KRBTGT account]]'s password hash which also stores a copy of the session key inside of it which the KDC can use<br>
		- ![[Ticket Granting Ticket (TGT)Explanation.png]]
	- [[Ticket Granting Server]]
	- [[Kerberos Database]] 