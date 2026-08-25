---
title: "Organizational Unit (OU)"
tags:
  - fetus
---
- like folders in the file system. (organizing things, applying rules, giving someone rights to manage said folder)
- container object to organize stuff like users, computers, groups, shared folders and other OUs. and delegate administrative control among objects within the OU to a designated user or group
	- some administrative control delegation examples would be giving users/groups perms to:
		- have full control of all objects within an OU
		- reset user account passwords
		- create, delete and manage user accounts in the OU
- can apply [[Group Policy Objects (GPO)]]
- not for direct access control to resources. more about management and structure
- only exists within domains 
- doesnt have an SID
## example:
`Company.com > Europe > Germany > Munich > Users` 