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
	- finding scripts:
		- a list of scripts are stored in the script.db file located in `/usr/share/nmap/scripts/script.db`. can grep specific service related scripts from that :D
```zsh title:"cat /usr/share/nmap/scripts/script.db | grep 'http'" fold
┌──(root㉿kali)-[~]
└─# cat /usr/share/nmap/scripts/script.db | grep "http"
Entry { filename = "http-adobe-coldfusion-apsa1301.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-affiliate-id.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-apache-negotiation.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-apache-server-status.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-aspnet-debug.nse", categories = { "discovery", "vuln", } }
Entry { filename = "http-auth-finder.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-auth.nse", categories = { "auth", "default", "safe", } }
Entry { filename = "http-avaya-ipoffice-users.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-awstatstotals-exec.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-axis2-dir-traversal.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-backup-finder.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-barracuda-dir-traversal.nse", categories = { "auth", "exploit", "intrusive", } }
Entry { filename = "http-bigip-cookie.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-brute.nse", categories = { "brute", "intrusive", } }
Entry { filename = "http-cakephp-version.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-chrono.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-cisco-anyconnect.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-coldfusion-subzero.nse", categories = { "exploit", } }
Entry { filename = "http-comments-displayer.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-config-backup.nse", categories = { "auth", "intrusive", } }
Entry { filename = "http-cookie-flags.nse", categories = { "default", "safe", "vuln", } }
Entry { filename = "http-cors.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-cross-domain-policy.nse", categories = { "external", "safe", "vuln", } }
Entry { filename = "http-csrf.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-date.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-default-accounts.nse", categories = { "auth", "discovery", "intrusive", } }
Entry { filename = "http-devframework.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-dlink-backdoor.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-dombased-xss.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-domino-enum-passwords.nse", categories = { "auth", "intrusive", } }
Entry { filename = "http-drupal-enum-users.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-drupal-enum.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-enum.nse", categories = { "discovery", "intrusive", "vuln", } }
Entry { filename = "http-errors.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-exif-spider.nse", categories = { "intrusive", } }
Entry { filename = "http-favicon.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-feed.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-fetch.nse", categories = { "safe", } }
Entry { filename = "http-fileupload-exploiter.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-form-brute.nse", categories = { "brute", "intrusive", } }
Entry { filename = "http-form-fuzzer.nse", categories = { "fuzzer", "intrusive", } }
Entry { filename = "http-frontpage-login.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-generator.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-git.nse", categories = { "default", "safe", "vuln", } }
Entry { filename = "http-gitweb-projects-enum.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-google-malware.nse", categories = { "discovery", "external", "malware", "safe", } }
Entry { filename = "http-grep.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-headers.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-hp-ilo-info.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-huawei-hg5xx-vuln.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-icloud-findmyiphone.nse", categories = { "discovery", "external", "safe", } }
Entry { filename = "http-icloud-sendmsg.nse", categories = { "discovery", "external", "safe", } }
Entry { filename = "http-iis-short-name-brute.nse", categories = { "brute", "intrusive", } }
Entry { filename = "http-iis-webdav-vuln.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-internal-ip-disclosure.nse", categories = { "discovery", "safe", "vuln", } }
Entry { filename = "http-joomla-brute.nse", categories = { "brute", "intrusive", } }
Entry { filename = "http-jsonp-detection.nse", categories = { "discovery", "safe", "vuln", } }
Entry { filename = "http-litespeed-sourcecode-download.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-ls.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-majordomo2-dir-traversal.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-malware-host.nse", categories = { "malware", "safe", } }
Entry { filename = "http-mcmp.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-method-tamper.nse", categories = { "auth", "vuln", } }
Entry { filename = "http-methods.nse", categories = { "default", "safe", } }
Entry { filename = "http-mobileversion-checker.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-ntlm-info.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-open-proxy.nse", categories = { "default", "discovery", "external", "safe", } }
Entry { filename = "http-open-redirect.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-passwd.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-php-version.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-phpmyadmin-dir-traversal.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-phpself-xss.nse", categories = { "fuzzer", "intrusive", "vuln", } }
Entry { filename = "http-proxy-brute.nse", categories = { "brute", "external", "intrusive", } }
Entry { filename = "http-put.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-qnap-nas-info.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-referer-checker.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-rfi-spider.nse", categories = { "intrusive", } }
Entry { filename = "http-robots.txt.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-robtex-reverse-ip.nse", categories = { "discovery", "external", "safe", } }
Entry { filename = "http-robtex-shared-ns.nse", categories = { "discovery", "external", "safe", } }
Entry { filename = "http-sap-netweaver-leak.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-security-headers.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-server-header.nse", categories = { "version", } }
Entry { filename = "http-shellshock.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-sitemap-generator.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-slowloris-check.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-slowloris.nse", categories = { "dos", "intrusive", } }
Entry { filename = "http-sql-injection.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-stored-xss.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-svn-enum.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-svn-info.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-title.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-tplink-dir-traversal.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-trace.nse", categories = { "discovery", "safe", "vuln", } }
Entry { filename = "http-traceroute.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-trane-info.nse", categories = { "discovery", "safe", "version", } }
Entry { filename = "http-unsafe-output-escaping.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-useragent-tester.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-userdir-enum.nse", categories = { "auth", "intrusive", } }
Entry { filename = "http-vhosts.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-virustotal.nse", categories = { "external", "malware", "safe", } }
Entry { filename = "http-vlcstreamer-ls.nse", categories = { "discovery", "safe", } }
Entry { filename = "http-vmware-path-vuln.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2006-3392.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2009-3960.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2010-0738.nse", categories = { "auth", "safe", "vuln", } }
Entry { filename = "http-vuln-cve2010-2861.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2011-3192.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2011-3368.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2012-1823.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2013-0156.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-vuln-cve2013-6786.nse", categories = { "exploit", "vuln", } }
Entry { filename = "http-vuln-cve2013-7091.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2014-2126.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2014-2127.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2014-2128.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2014-2129.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2014-3704.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2014-8877.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2015-1427.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-vuln-cve2015-1635.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2017-1001000.nse", categories = { "safe", "vuln", } }
Entry { filename = "http-vuln-cve2017-5638.nse", categories = { "vuln", } }
Entry { filename = "http-vuln-cve2017-5689.nse", categories = { "auth", "exploit", "vuln", } }
Entry { filename = "http-vuln-cve2017-8917.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-vuln-misfortune-cookie.nse", categories = { "intrusive", "vuln", } }
Entry { filename = "http-vuln-wnr1000-creds.nse", categories = { "exploit", "intrusive", "vuln", } }
Entry { filename = "http-waf-detect.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-waf-fingerprint.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-webdav-scan.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "http-wordpress-brute.nse", categories = { "brute", "intrusive", } }
Entry { filename = "http-wordpress-enum.nse", categories = { "discovery", "intrusive", } }
Entry { filename = "http-wordpress-users.nse", categories = { "auth", "intrusive", "vuln", } }
Entry { filename = "http-xssed.nse", categories = { "discovery", "external", "safe", } }
Entry { filename = "https-redirect.nse", categories = { "version", } }
Entry { filename = "ip-https-discover.nse", categories = { "default", "discovery", "safe", } }
Entry { filename = "membase-http-info.nse", categories = { "discovery", "safe", } }
Entry { filename = "riak-http-info.nse", categories = { "discovery", "safe", } }
```
		
- can also search with `ls -l /usr/share/nmap/scripts/*http*` ig
#### adding scripts:
	
```zsh
sudo wget -O /usr/share/nmap/scripts/<script-name>.nse https://svn.nmap.org/nmap/scripts/<script-name>.nse
```
	
```zsh
nmap --script-updatedb
```

### firewall evasion:
- just do `-Pn` 
	- tells nmap to not ping before scanning. helps with targets like windows 
- can also use `-f` to fragment packets. makes it less likely to get detected
	- `--mtu n` 
		- can specify the size of packets like this as well. **must be multiples of 8**