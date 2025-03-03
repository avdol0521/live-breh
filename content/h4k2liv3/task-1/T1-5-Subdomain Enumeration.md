---
title: Subdomain Enumeration
tags:
  - fetus
---
2 ways to do it. active and passive enumeration.
## passive enumeration:
- Querying public DNS records (A, AAAA, CNAME, MX)
- cert tracking with stuff like [crt.sh](https://crt.sh/) 
- dorking, public archives and social media ig
## active enumeration:
- brute-forcing with a wordlist
- in some cases misconfigured DNS servers may allow a DNS zone transfer (AXFR) and reveal all records for a domain including subdomains 
	- [[DNS zone transfer]] 
- sublist3r, amass
## tools:
- sublist3r 
- amass
- dnsenum / dnsrecon
- SecurityTrails
- crt.sh
## notes:
- some domains use wildcard records that can return false positives by resolving non existent subdomains. 
	- [[wildcard DNS records]] 
- aggressive querying can trigger rate limits or be flagged as malicious activity
- when combining data collected from multiple sources, its important to effectively filter and validate to identify actual relevant subdomains 