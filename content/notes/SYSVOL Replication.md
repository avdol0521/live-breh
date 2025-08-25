---
title: "SYSVOL Replication"
tags:
  - fetus
---
- [[SYSVOL (System Volume)]] replication happens with two mechanisms (depending on the windows server version)
	- FRS (File Replication Service)
	- DFSR (Distributed File System Replication)
#### FRS 
- the legacy replication engine for SYSVOL used in windows 2000 and 2004 domain functional levels and was still the default in 2008 domains 
- had some problems like 
	- inefficient
		- replicated entire files even for small changes and took up alot of bandwidth
	- difficult to troubleshoot
	- didnt have any compression or scheduling improvements
- basically a very basic copier between DCs
- the domain will use FRS by default if the DFL is at 2008 or lower 
- FRS is fully deprecated starting windows server 2016
#### DFSR
- the successor to FRS. the modern replication engine for domains. 
- was introduced in windows server 2003 R2 but was only made available as a viable domain wide replication engine starting in windows server 2008
- advantages over FRS:
	- Remote Differential Compression (RDC)
		- basically transfers the changed parts of a file rather than the entire file
	- efficient
	- better conflict resolution and self healing
	- improved monitoring and event ogging
