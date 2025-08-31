---
title: "Security Tokens (SID)"
tags:
  - fetus
---
- the primary mechanism Windows uses for auth and access control 
- SIDs are globally totally unique and non reusable. used to identify [[security principals]] such as user accounts, computers, groups etc
- when a security principal is created, the AD security auth issues it a unique SID wich is then stored in the security database. resources are linked to these SIDs 
- changing a user's name doesnt change their SIDs
- lists of SIDs are stored in [[Access Control List (ACL)]] 
- the SID is the same for all [[security principals]] within a particular domain but the [[Relative ID (RID)]] is unique for each individual security principal within the domain 
- an example SID looks like this:
```sh
S-1-5-21-1004336348-1177238915-682003330-512
```
 - `S-`
	 - this prefix tells us that the string is an SID 
- `1`
	- revision level of the SID, always 1
- `5`
	- indicates what authority issued it. 5 usually indicates `NT Authority`
- `21-1004336348-1177238915-682003330`
	- domain/computer identifier that uniquely identifies the domain that created the SID 
- `512`
	- [[Relative ID (RID)]] that uniquely identifies the security principal like a user or group within that specific domain 