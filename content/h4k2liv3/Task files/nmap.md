---
title: "nmap"
tags:
  - fetus
---
# basic switches: (i can just `man nmap` to get this info but why not :v)
---
- `-sS `(Syn scan)
- `-sU` (UDP scan)
- `-O` (OS detection)
- `-sV` (service version detection)
- `-vv` (verbosity level 2. its recommended to use level two instead of one (-v))
- `-oA` {filename} (save the output in the 3 major formats)
- `-oN` (saves the output in the normal format)
- `-oG` (saves the output in a greppable format)
- `-A` (Aggressive mode. enables OS detection, service detection, script scanning and traceroute)
- `-T{0-5}` (timing. used to speed up the scan speed. levels from 0 to 5. higher speeds are noiser and can incur errors)
- `-p` {port} (tells nmap to scan that specific port)
	- `-p {port-port}` (tells nmap to scan a range of ports)
	- `-p-` (scan all ports)
- `--script=` (specifies what script to run)
	- linux stores all the scripts at `/usr/share/nmap/scripts`
	- `--script=<script-name>`
		- example script: `--script=http-fileupload-exploiter`
		- multiple specific scripts can be run as well like this 
			- `--script=smb-enum-users,smb-enum-shares` 
	- `--script={script category}` (gives a category of scripts to run. for example `--script=vuln` tells it to run all the scripts in the vuln category)
		- see below for more categories
	- do `--script` to list scripts
	- can do `-sC` which is equivalent to `--script=default`
		- some are considered intrusive
# Scan Types:
---
## yapping:
the most common types of scans are:
- TCP Connect Scans (`-sT`)
- SYN "Half-open" Scans (`-sS`)
- UDP Scans (`-sU`)

less common scan types:
- TCP Null Scans (`-sN`)
- TCP FIN Scans (`-sF`)
- TCP Xmas Scans (`-sX`)
### common scan types:
#### TCP Connect Scans (-sT):
go read what [[TCP]] is and how the [[Three Way handshake]] works first
 
- TCP Connect scans work by tryna connect to all specified TCP ports and sees if they're open or not
#### TCP SYN Scans (-sS):
- is the default scan used by nmap if run with **sudo** perms. otherwise it uses a normal TCP scan
- also known as half-open or stealth scans
- something i copy pasted from tryhackme:
	- `SYN scans can also be made to work by giving Nmap the CAP_NET_RAW, CAP_NET_ADMIN and CAP_NET_BIND_SERVICE capabilities; however, this may not allow many of the NSE scripts to run properly.`
##### advantages:
- unlike the TCP scan it doesnt do a full [[Three Way handshake]]. instead, after receiving the SYN/ACK response from the server it sends an RST packet back instead of an ACK packet
	- its stealthier
		- often isnt logged by older IDSs and apps listening on open ports cuz its standard practice to only log a connection once its been fully established (isnt the case with modern IDS solutions tho)
	- significantly faster since it doesnt need to deal with TCP connection establishment and termination for every port
##### disadvantages: 
- needs **sudo** perm to create raw packets
- unstable services might get brought down
#### UDP scans (-sU):
read how [[UDP]] works first

- normally there shouldnt be a response when a packet is sent to an open UDP port. most likely there wont. marked as open/filtered when this happens. there might also rarely be a response sent back which is unusual apparently and thats when the port is marked as open for sure 
- if the port is closed the target should respond with an [[ICMP]] packet that says the port is unreachable
- slow as hell (takes 20 mins or something just to scan the first 1000 ports with a good connection skull emoji)
	- better to just do `nmap -sU --top-ports 20 <target>` to scan the top 20 most commonly used UDP ports
### Uncommon scan types:
#### NULL, FIN and Xmas scans:
- the main goal with these is [[firewall evasion]]. most modern IDSs are smart these days so cant rely on these to be 100% effective
- similar to UDP scans since these ones dont expect a response back
- will only ever mark ports as open|filtered, filtered or closed 
	- if its identified as filtered then its usually cuz the target replied with an ICMP unreachable packet 
- `-sN` 
	- the [[TCP]] packet sent doesnt have any flags set 
- `-sF`
	- sends a FIN flag instead of an empty packet
- `-sX`
	- sends a malformed packet instead 
	- microsoft windows and a shitton of Cisco network devices are set up to respond with an RST packet to any malformed packet so all ports might show up as closed 
### [[ICMP]] Network scanning (-sn):
- the main goal is to see which IPs in the network are alive
- example usage:
	- `nmap -sn 192.168.0.0/24` 
	- `nmap -sn 192.168.0.1-254` 
- tells nmap not to scan ports and makes it rely on [[ICMP]] echo packets (relies on ARP instead when used with sudo and on a local network)
	- also sends SYN packets to port 443 and an ACK (SYN instead if not run with sudo) packet to port 80
### NSE (Nmap Script Engine) Scripts:
- NSE scripts are written in Lua
- script categories:
	- safe : doesnt effect the target
	- intrusive : isnt safe :v
	- vuln : scans for vulns
	- exploit : attempts to exploit a vuln 
		- examples 
			- `jdwp-exec`
			- `http-shellshock` 
	- auth : tries to bypass auth like trying to get into an [[FTP]] server anonymously
	- brute : tries to bruteforce creds for running services
	- discovery : queries running services to get even for info about the network 
	- fuzzer : sends server software random ahh fields in each packet 
		- useful for finding undiscovered bugs and vulns 
		- slow and bandwidth intensive
		- example:
			- `dns-fuzz`
				- bombs the DNS server with slightly flawed DNS requests until either the server crashes or the user times out
	- malware : tests if the target is infected by malware or backdoors
		- example: 
			- `smtp-strangeport`
				- watches for [[SMTP]] servers running on unusual ports 
			- `auth-spoof`
				- detects spoofing daemons that sends a fake a answer before even recieving a query
- usage:
	- can run specific scripts with `--script=`
		- can run multiple specific scripts as well like this `--script=smb-enum-users,smb-enum-shares` 
		- list of all scripts: https://nmap.org/nsedoc/scripts/
	- can run categories like `--script=vuln` 
	- some scripts might require parameters to be filled. that can be done with `--script-args`
		- example with `http-put` script:
			- `nmap -p 80 --script=http-put --script-args http-put.url='/dav/shell.php',http-put.file='./shell.php'`
			- args are separated with commas 
			- list of scripts and their arguments: https://nmap.org/nsedoc/
	- can also get help about specific scripts with `--script-help <script-name>` 