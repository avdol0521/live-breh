---
title: "subdomains"
tags:
  - fetus
---
basically a subdivision of a larger domain to organize and host different services separately on different servers and stuff without needing to buy an entirely new root domain for each and every separate service or function

### setting one up:
- add a [[DNS]] record to the root domain's [[zone file]] 
	- record examples:
		- A Record: maps the subdomain directly to the [[IP]] 
			- to create `mail.skibidi.com` pointing to the IP `196.134.143.10` I'd add an A Record for `mail` 
		- [[CNAME - h4k2liv3]] Record: points the subdomain to a diff domain name that resolves to an IP
			- make a CNAME record for skibidi.babudi.com pointing to dobdob.skibidi.com
	- subdomain management tools:
		- DNS management tools
			- domain registrars like GoDaddy or NameCheap and DNS hosting services like Cloudflare or amazon Route 53
			- web hosting control panels like [[cPanel]] or Plesk have options to make subdomains plus they also update the DNS settings automatically
	- manage TTL values to help control DNS update speed (need to look into this more later)
- have custom configs for each subdomain 
	- have seperate [[SSL]]/[[TLS]] certs. wildcard certs can cover multiple subdomains as well
	- have load balancing and routing set up if you want ig. 
- be secure
	- ig its good practice not to point to 3rd party services cuz it can lead to [[Subdomain Hijacking]] 
	- dont use wildcard DNS records. complicates shit
	- set up DNS record monitoring and alerts to track unauthorised changes as well