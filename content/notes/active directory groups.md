---
title: "active directory groups"
tags:
  - fetus
---
- container object 
- for access control and membership management. whos allowed to read/write/execute stuff
- simplifies permission management and mail distribution. for example:
	- giving NTFS perms to an entire group instead of 100 users individually
	- sending mail to all users on a specific group (distribution groups)
	- security (security groups)
- cant apply [[Group Policy Objects (GPO)]] 
- has an SID
- can be added to [[Access Control Lists (ACL)]]
## group types:
#### security groups 
- used to assign permissions to resources (files, folders, printers, apps etc)
#### distribution groups 
- used for mail distribution lists (in Exchange)
	- see [[microsoft exchange server]] to see what "in exchange" means
#### distribution/mail-enabled security groups
- self explanatory :v
#### dynamic distribution groups
- query based membership instead of static members list. for example all users in Dept=Sales. Exchange resolves recipients at send time :D
## group scopes:
#### domain local
- perms within one domain 
#### global 
- member of one domain. perms everywhere
#### universal
- member and perms forestwide
## examples:
- `Finance_ReadOnly` group has NTFS read access to the Finance share.
- `HR-Email-Distribution` group used in Exchange for HR announcements.