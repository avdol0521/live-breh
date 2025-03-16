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
### TCP Connect Scans:


## random mentions:
---
- ICMP (or "ping") scanning