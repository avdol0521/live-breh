---
title: "kerberos delegation"
tags:
  - fetus
---
- lets services access resources on behalf of the user for example when an application the user uses needs to access data from a database
- the service uses the user's credentials to impersonate the user and get service tickets from the [[Ticket Granting Server]] 
## delegation types
#### unconstrained delegation 
- the most powerful and least secure. lets the service aqquire any service ticket on the user's behalf 
#### constrained delegation 
- the more secure option. restricts the delegated account to access only a list of pre defined sets of services
## implecations
- misconfigs can fuck up everything
- can get access to any service within the domain if the compromised [[Windows IIS Server]] has unconstrained delegation enabled with a domain admin account. 