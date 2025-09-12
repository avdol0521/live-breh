---
title: "windows user perms and stuff"
tags:
  - fetus
---
- mainly two types of user accs
	- standard
	- administrator
- we're normally logged in as the `local administrator` on our machines
- when a user signs in the system creates an access token for the user that contains info about the privs of the user including [[Security Identifier (SID)]]s and [[Windows Privileges]] 
- when an administrator logs on. two seperate access tokens are created for the user: 
	- `standard user access token`
		- contains the same user-specific info as the administrator access token but with the administrative windows privileges and SIDs removed
		- used to start apps that dont perform admin tasks 
		- is used to display the process `explorer.exe` which is the parent process from which all other user initiated processes inherit their access tokens. as a result all apps run as a standard user unless the user provides consent via [[User Account Control (UAC)]] 
	- `administrator access token` 
- can add/remove/modify user groups inside [[lusrmgr (Local Users and Groups Management)]] 
#### groups:
![[windows user perms and stuff.png]]
- take a look at these. can add or remove groups to any user and that user's perms will be updated accordingly
- guest users have the same perms as the standard users 
	- the guest `account` is far more restrictive tho