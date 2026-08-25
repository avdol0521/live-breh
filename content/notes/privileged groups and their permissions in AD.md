---
title: "privileged accounts and groups in AD"
tags:
  - fetus
---
## highly privileged groups 
- Enterprise admins
	- manages trusts, schema changes and DCs forest wide. exists in the forest root. already added to domain admins of every child domain in the forest 
- Domain Admins 
	- manages the specific domains including its users, [[active directory groups]] and [[Organizational Unit (OU)]]s. has administrative access to all resources in a domain 
- Schema Admins 
	- modifies the [[active directory Schema]] like adding attributes and classes 
- Built-in Admins (local group)
	- local admins on [[Domain Controller (DC)]]s
## privileged groups 
- Server Operators 
	- manages server settings, shutsdown servers and performs server specific roles 
- Account Operators 
	- creates, modifies, deletes user and group accounts. basically manages users not in a privileged group 
- Group Policy Creator Owners
	- creates and manages [[Group Policy Objects (GPO)]] 
## object permissions 
#### standard permissions
- these basic permissions are assigned directly to objects like users, groups, OUs etc:
	- Full control: complete access to the object 
	- Read: view the contents of the objects 
	- Write: make changes to the object 
#### special permissions 
- these perms more fine tuned control and are found in the advanced security settings of an object: (self explanatory. doesnt need descriptions :v)
	- delete 
	- modify permissions 
	- modify owner
## privilege delegation:
- admins can delegate specific administrative tasks to users or groups without giving em full admin access following the least privilege rule of thumb