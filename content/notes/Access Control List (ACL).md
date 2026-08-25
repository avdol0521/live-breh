---
title: "Access Control Lists (ACL)"
tags:
  - fetus
---
- the list of rules i.e. [[Access Control Entries (ACE)]] that are attached to AD objects like users, groups or folders that specify which [[security principals]] have what permissions to that object
- ACLs are crutial for enforcing [[Discretionary Access Control (DAC)]] in AD
- each ACL contains one or more ACEs. each security principal in an ACE is called a `trustee` 
- AD objects have two primary types of ACLs:
	- [[Discretionary Access Control Lists (DACL)]] 
	- [[System Access Control Lists (SACL)]] 