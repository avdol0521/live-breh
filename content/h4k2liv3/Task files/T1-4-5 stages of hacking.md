---
title: 5 stages of hacking
tags:
  - fetus
---
## Recon:
- you accumulate as much information about the target as you can in this stage
- two main ways you can do this:
	- Passive recon: 
		- its just collecting publicly available information 
		- some examples of ways, tools and sites to do it with:
			- dorking
			- exploitDB
			- whois domainName
			- nslookup domainName
			- dig domainName
			- social media profiles
			- website data
	- Active recon:
		- its basically directly interacting with the target system, for example by sending network packets and probing for open services
		- some examples of this too:
			- [[subdomain enumeration]] (crt.sh can be used to get the subdomains without actively interacting with the target)
			- wappalyzer (shows the tech stack of the site you visit)
				- example: (for esp32io)
				- ![[wappalyzer example.png]]
			- [[nmap]] 
			- whatweb (similar to wappalyzer)
			- [[netcat]] 
## Enumeration and scanning:
- tools we can use:
	- nikto vuln scanning as well
	- [[nmap]] for port scanning and seeing what services are running plus determining the OS version as well
	- nessus for vuln scanning
	- burp (its mainly a proxy used in the exploitation phase tbh but kinda fits here ig)
- other stuff to try:
	- DNS queries
	- limited scans to understand network topology ig
## Exploitation:
## Maintaining access:
## Covering tracks:
