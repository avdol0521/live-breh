---
title: "nmap"
tags:
  - fetus
---
## basic switches: (i can just `man nmap` to get this info but why not :v)
---
- -sS (Syn scan)
- -sU (UDP scan)
- -O (OS detection)
- -sV (service version detection)
- -vv (verbosity level 2. its recommended to use level two instead of one (-v))
- -oA {filename} (save the output in the 3 major formats)
- -oN (saves the output in the normal format)
- -oG (saves the output in a greppable format)
- -A (Aggressive mode. enables OS detection, service detection, script scanning and traceroute)
- -T{0-5} (timing. used to speed up the scan speed. levels from 0 to 5. higher speeds are noiser and can incur errors)
- -p {port} (tells nmap to scan that specific port)
	- -p {port-port} (tells nmap to scan a range of ports)
	- -p- (scan all ports)
- --script= (specifies what script to run)
	- --script={script category} (gives a category of scripts to run. for example --script=vuln tells it to run all the scripts in the vuln category)
## Scan Types:
---
### yapping:
the most common types of scans are:
- TCP Connect Scans (`-sT`)
- SYN "Half-open" Scans (`-sS`)
- UDP Scans (`-sU`)

less common scan types:
- TCP Null Scans (`-sN`)
- TCP FIN Scans (`-sF`)
- TCP Xmas Scans (`-sX`)
### TCP Connect Scans (-sT):
go read what [[TCP]] is and how the [[Three Way handshake]] works first
 
- TCP Connect scans work by tryna connect to all specified TCP ports and sees if they're open or not
### TCP SYN Scans (-sS):
- is the default scan used by nmap if run with **sudo** perms. otherwise it uses a normal TCP scan
- also known as half-open or stealth scans
- something i copy pasted from tryhackme:
	- `SYN scans can also be made to work by giving Nmap the CAP_NET_RAW, CAP_NET_ADMIN and CAP_NET_BIND_SERVICE capabilities; however, this may not allow many of the NSE scripts to run properly.`
#### advantages:
- unlike the TCP scan it doesnt do a full [[Three Way handshake]]. instead, after receiving the SYN/ACK response from the server it sends an RST packet back instead of an ACK packet
	- its stealthier
		- often isnt logged by older IDSs and apps listening on open ports cuz its standard practice to only log a connection once its been fully established (isnt the case with modern IDS solutions tho)
	- significantly faster since it doesnt need to deal with TCP connection establishment and termination for every port
#### disadvantages: 
- needs **sudo** perm to create raw packets
- unstable services might get brought down
## random mentions:
---
- [[ICMP]] (or "ping") scanning