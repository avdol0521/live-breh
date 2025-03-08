---
title: "subdomains"
tags:
  - fetus
---
basically a subdivision of a larger domain to organize and host different services separately on different servers and stuff without needing to buy an entirely new root domain for each and every separate service or function

### how to make one:
- add a [[DNS]] record to the root domain's [[zone file]] 
- record examples:
	- A Record: maps the subdomain directly to the [[IP]] 
		- to create `mail.skibidi.com` pointing to the IP `196.134.143.10` I'd add an A Record for `mail` 
	- [[CNAME - h4k2liv3]] Record:  