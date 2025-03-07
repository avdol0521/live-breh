---
title: "DNS zone transfer"
tags:
  - fetus
---
used for DNS server syncing, where a DNS server uses this mechanism to replicate the DNS records (zone file) from a master DNS server to one or more slave DNS servers.
has 2 types:
- AXFR (full zone transfer): transfers the entire zone file
- IXFR (Incremental zone transfer): transfers the changed data only kind of like github 

process: a secondary server sends a request to the primary server and if the primary server is configured to allow the request, it sends the entire zone file or the updated parts depending on the type of zone transfer 

exploitation mitigation (writing this coz im gonna deploy my own DNS server later):
	gotta restrict zone transfers to only trusted known secondary servers 
	gotta use ACL (access control lists) to limit which IP addresses are allowed to request zone transfers 