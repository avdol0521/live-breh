---
title: "breachingAD"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/breachingad 
- the room is about getting the initial access to the internal AD network before we get to the good stuff. will be important later on
### OSINT and PHISHING
- can check company emails to check if they've ever been in any breaches in sites like haveibeenpwed and deHashed. but those can be outdated sometimes so we'll need to verify them using [[NTLM]] authed services. 
- room to do later since im broke and dont have premium : 
	- https://tryhackme.com/jr/redteamrecon
- same with phishing. phishing can be used to install a rat on the victims machine and have immediate inernal user impersonation capabilities. 
	- another module do to later cuz im broke: https://tryhackme.com/module/phishing 
### NTLM Authenticated Services 
- NTLM auth is heavily utilised by services on a network. some of those services are sometimes exposed to the internet such as:
	- an internal [[microsoft exchange server]] that exposes and Outlook Web App (OWA)
	- [[RDP]] 
	- VPN endpoints integrated with AD
	- Webapps in the DMZ that make use of NetNTLM