---
title: "Access Control Entries (ACE)"
tags:
  - fetus
---
- a single entry within an [[Access Control List (ACL)]] that specifies which permissions (allow, deny, audit) are granted to or denied from a specific user or group for a particular AD object
- ACE structure 
	- [[Security Identifier (SID)]]
	- Access Mask
		- contains bit flags that define the specific access rights being granted, denied or audited ( for example read, right, modify, delete )
	- Flags 
		- controls how ACE perms are applied like weather they're inherited by child objects or are inherited from parent objects 
- each [[security principals]] is called a `trustee` in ACEs 
- linked to [[Discretionary Access Control Lists (DACL)]] and [[System Access Control Lists (SACL)]]