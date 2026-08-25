---
title: "Group Policy Objects (GPO)"
tags:
  - fetus
---
- basically a collection of settings to control how computers and users in a domain behave. a centralised way to control and configure across many machines without having to touch each one individually
- when a computer boots/user logs in it queries the AD to get with GPOs apply to it and then applies these locally in a specific order
	- application order (L->S->D->OU):
		1. local policies
		2. site policies 
		3. domain policies 
		4. OU policies 
			- nested OUs apply last and child OU settings override parent ones 
	- GPO inheritence can be blocked or enforced
		- GPO blocking 
			- set on the OU level to prevent higher level generic/broad domain policies from hitting sensitive systems
		- GPO enforcing
			- set on the GPO itself to override inheritence blocking 
- lets us set rules to AD containers like Sites, Domains or OUs and enable us to do stuff like:
	- password complexity and lockout rules
	- control panel or registry access restrictions
	- network drive and printer mapping 
	- deploying software
	- running startup/shutdown rules or login/logout scripts
- key components of GPOs:
	- group policy container (GPC) 
		- holds metadata like status, version number and links. stored in AD
	- group policy template (GPT)
		- holds the actual policy settings, scripts and security templates. stored at [[SYSVOL (System Volume)]] in DCs
	- scope of management (SOM)
		- defines where the GPO is linked like sites, domains and OUs
- we can make new GPOs from the Group Policy Management Console (GPMC)
- can do security filtering to link GPOs to Containers but only allowing certain groups within the Containers to actually apply the GPO
- can apply GPOs **conditionally** through WMI (Windows Management Instrumentation) filtering which lets us apply GPOs based on the attributes of the computers. evaluates the applicable candidates through a language similar to SQL called WQL (Windows Management Instrumentation Query Language)
	- example queries:
		- `SELECT * FROM Win32_Battery WHERE BatteryStatus > 0`
		- `SELECT * FROM Win32_OperatingSystem WHERE Version LIKE "10.%" AND ProductType="1"` 
- normally GPOs apply based on what user logs in regardless of what pc they log into. that can be flipped through loopback processing, where the computer dictates what user policies apply
	- has two modes 
		- merge mode 
			- merges normal user and computer specific GPOs. computer GPOs apply on conflicts
		- replace mode
			- only the computers GPOs apply. user GPOs are ignored
	- example usecases:
		- shared pcs 
			- any user that logs in gets the same locked down desktop 
		- remote desktop servers
			- user policies are replaced with server specific restrictions 