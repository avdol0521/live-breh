---
title: "BricksHeist"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/tryhack3mbricksheist
## nmap result:
```sh
# Nmap 7.95 scan initiated Thu Aug 21 09:32:03 2025 as: /usr/lib/nmap/nmap -sCV -T4 -oN Dscan.txt 10.201.28.9
Nmap scan report for 10.201.28.9
Host is up (0.35s latency).
Not shown: 995 closed tcp ports (reset)
PORT     STATE    SERVICE  VERSION
22/tcp   open     ssh      OpenSSH 8.2p1 Ubuntu 4ubuntu0.11 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 40:b3:d2:a2:d1:d6:1f:f9:f1:23:f0:69:90:72:b9:84 (RSA)
|   256 c2:a7:f4:80:6a:fc:c1:86:33:9a:9c:8d:d4:4f:84:02 (ECDSA)
|_  256 c1:3e:4b:f6:aa:d1:2c:70:ac:ed:c5:a9:21:89:d3:45 (ED25519)
80/tcp   open     http     Python http.server 3.5 - 3.10
|_http-title: Error response
443/tcp  open     ssl/http Apache httpd
| tls-alpn: 
|   h2
|_  http/1.1
|_http-server-header: Apache
| ssl-cert: Subject: organizationName=Internet Widgits Pty Ltd/stateOrProvinceName=Some-State/countryName=US
| Not valid before: 2024-04-02T11:59:14
|_Not valid after:  2025-04-02T11:59:14
|_http-title: 400 Bad Request
3306/tcp open     mysql    MySQL (unauthorized)
3737/tcp filtered xpanel
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Thu Aug 21 09:33:48 2025 -- 1 IP address (1 host up) scanned in 105.70 seconds
```
## http/https enumeration
#### http enum: 
- method not allowed. 405. will get back to it later
#### https enum:
- seems like a blank page. has this on source: `bricks.thm`
- added it to `/etc/hosts` <br>
![[BricksHeistWPsiteSS.png]]
- a wordpress site. time to run wpscan 
```sh title:"wpscanResult.txt" fold
_______________________________________________________________
         __          _______   _____
         \ \        / /  __ \ / ____|
          \ \  /\  / /| |__) | (___   ___  __ _ _ __ ®
           \ \/  \/ / |  ___/ \___ \ / __|/ _` | '_ \
            \  /\  /  | |     ____) | (__| (_| | | | |
             \/  \/   |_|    |_____/ \___|\__,_|_| |_|

         WordPress Security Scanner by the WPScan Team
                         Version 3.8.28
       Sponsored by Automattic - https://automattic.com/
       @_WPScan_, @ethicalhack3r, @erwan_lr, @firefart
_______________________________________________________________

[+] URL: https://bricks.thm/ [10.201.28.9]
[+] Started: Thu Aug 21 09:49:25 2025

Interesting Finding(s):

[+] Headers
 | Interesting Entry: server: Apache
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] robots.txt found: https://bricks.thm/robots.txt
 | Interesting Entries:
 |  - /wp-admin/
 |  - /wp-admin/admin-ajax.php
 | Found By: Robots Txt (Aggressive Detection)
 | Confidence: 100%

[+] XML-RPC seems to be enabled: https://bricks.thm/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress readme found: https://bricks.thm/readme.html
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] The external WP-Cron seems to be enabled: https://bricks.thm/wp-cron.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 60%
 | References:
 |  - https://www.iplocation.net/defend-wordpress-from-ddos
 |  - https://github.com/wpscanteam/wpscan/issues/1299

[+] WordPress version 6.5 identified (Insecure, released on 2024-04-02).
 | Found By: Rss Generator (Passive Detection)
 |  - https://bricks.thm/feed/, <generator>https://wordpress.org/?v=6.5</generator>
 |  - https://bricks.thm/comments/feed/, <generator>https://wordpress.org/?v=6.5</generator>
 |
 | [!] 4 vulnerabilities identified:
 |
 | [!] Title: WP < 6.5.2 - Unauthenticated Stored XSS
 |     Fixed in: 6.5.2
 |     References:
 |      - https://wpscan.com/vulnerability/1a5c5df1-57ee-4190-a336-b0266962078f
 |      - https://wordpress.org/news/2024/04/wordpress-6-5-2-maintenance-and-security-release/
 |
 | [!] Title: WordPress < 6.5.5 - Contributor+ Stored XSS in HTML API
 |     Fixed in: 6.5.5
 |     References:
 |      - https://wpscan.com/vulnerability/2c63f136-4c1f-4093-9a8c-5e51f19eae28
 |      - https://wordpress.org/news/2024/06/wordpress-6-5-5/
 |
 | [!] Title: WordPress < 6.5.5 - Contributor+ Stored XSS in Template-Part Block
 |     Fixed in: 6.5.5
 |     References:
 |      - https://wpscan.com/vulnerability/7c448f6d-4531-4757-bff0-be9e3220bbbb
 |      - https://wordpress.org/news/2024/06/wordpress-6-5-5/
 |
 | [!] Title: WordPress < 6.5.5 - Contributor+ Path Traversal in Template-Part Block
 |     Fixed in: 6.5.5
 |     References:
 |      - https://wpscan.com/vulnerability/36232787-754a-4234-83d6-6ded5e80251c
 |      - https://wordpress.org/news/2024/06/wordpress-6-5-5/

[+] WordPress theme in use: bricks
 | Location: https://bricks.thm/wp-content/themes/bricks/
 | Readme: https://bricks.thm/wp-content/themes/bricks/readme.txt
 | Style URL: https://bricks.thm/wp-content/themes/bricks/style.css
 | Style Name: Bricks
 | Style URI: https://bricksbuilder.io/
 | Description: Visual website builder for WordPress....
 | Author: Bricks
 | Author URI: https://bricksbuilder.io/
 |
 | Found By: Urls In Homepage (Passive Detection)
 | Confirmed By: Urls In 404 Page (Passive Detection)
 |
 | [!] 5 vulnerabilities identified:
 |
 | [!] Title: Bricks < 1.9.6.1 - Unauthenticated Remote Code Execution
 |     Fixed in: 1.9.6.1
 |     References:
 |      - https://wpscan.com/vulnerability/8bab5266-7154-4b65-b5bc-07a91b28be42
 |      - https://twitter.com/calvinalkan/status/1757441538164994099
 |      - https://snicco.io/vulnerability-disclosure/bricks/unauthenticated-rce-in-bricks-1-9-6
 |
 | [!] Title: Bricks < 1.9.6.1 - Unauthenticated Remote Code Execution
 |     Fixed in: 1.9.6.1
 |     References:
 |      - https://wpscan.com/vulnerability/afea4f8c-4d45-4cc0-8eb7-6fa6748158bd
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25600
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/b97b1c86-22a4-462b-9140-55139cf02c7a
 |
 | [!] Title: Bricks < 1.10.2 - Authenticated (Bricks Page Builder Access+) Stored Cross-Site Scripting
 |     Fixed in: 1.10.2
 |     References:
 |      - https://wpscan.com/vulnerability/e241363a-2425-436d-a1b2-8c513047d6ce
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-3410
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/ba5e93a2-8f42-4747-86fa-297ba709be8f
 |
 | [!] Title: Bricksbuilder < 1.9.7 - Authenticated (Contributor+) Privilege Escalation via create_autosave
 |     Fixed in: 1.9.7
 |     References:
 |      - https://wpscan.com/vulnerability/d4a8b4de-a687-4e55-ab71-2784bef3fc55
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-2297
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/cb075e85-75fc-4008-8270-4d1064ace29e
 |
 | [!] Title: Bricks Builder < 2.0 - Unauthenticated SQL Injection via `p` Parameter
 |     Fixed in: 1.12.5
 |     References:
 |      - https://wpscan.com/vulnerability/c3bed5af-5f31-4993-9d37-dd843a48e57c
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-6495
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/5ac49a00-dabc-4cd9-9032-c038ede3fd8f
 |
 | Version: 1.9.5 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - https://bricks.thm/wp-content/themes/bricks/style.css, Match: 'Version: 1.9.5'


[i] No plugins Found.


[i] Theme(s) Identified:

[+] bricks
 | Location: https://bricks.thm/wp-content/themes/bricks/
 | Readme: https://bricks.thm/wp-content/themes/bricks/readme.txt
 | Style URL: https://bricks.thm/wp-content/themes/bricks/style.css
 | Style Name: Bricks
 | Style URI: https://bricksbuilder.io/
 | Description: Visual website builder for WordPress....
 | Author: Bricks
 | Author URI: https://bricksbuilder.io/
 |
 | Found By: Urls In Homepage (Passive Detection)
 | Confirmed By:
 |  Urls In 404 Page (Passive Detection)
 |  Known Locations (Aggressive Detection)
 |   - https://bricks.thm/wp-content/themes/bricks/, status: 500
 |
 | [!] 5 vulnerabilities identified:
 |
 | [!] Title: Bricks < 1.9.6.1 - Unauthenticated Remote Code Execution
 |     Fixed in: 1.9.6.1
 |     References:
 |      - https://wpscan.com/vulnerability/8bab5266-7154-4b65-b5bc-07a91b28be42
 |      - https://twitter.com/calvinalkan/status/1757441538164994099
 |      - https://snicco.io/vulnerability-disclosure/bricks/unauthenticated-rce-in-bricks-1-9-6
 |
 | [!] Title: Bricks < 1.9.6.1 - Unauthenticated Remote Code Execution
 |     Fixed in: 1.9.6.1
 |     References:
 |      - https://wpscan.com/vulnerability/afea4f8c-4d45-4cc0-8eb7-6fa6748158bd
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-25600
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/b97b1c86-22a4-462b-9140-55139cf02c7a
 |
 | [!] Title: Bricks < 1.10.2 - Authenticated (Bricks Page Builder Access+) Stored Cross-Site Scripting
 |     Fixed in: 1.10.2
 |     References:
 |      - https://wpscan.com/vulnerability/e241363a-2425-436d-a1b2-8c513047d6ce
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-3410
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/ba5e93a2-8f42-4747-86fa-297ba709be8f
 |
 | [!] Title: Bricksbuilder < 1.9.7 - Authenticated (Contributor+) Privilege Escalation via create_autosave
 |     Fixed in: 1.9.7
 |     References:
 |      - https://wpscan.com/vulnerability/d4a8b4de-a687-4e55-ab71-2784bef3fc55
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-2297
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/cb075e85-75fc-4008-8270-4d1064ace29e
 |
 | [!] Title: Bricks Builder < 2.0 - Unauthenticated SQL Injection via `p` Parameter
 |     Fixed in: 1.12.5
 |     References:
 |      - https://wpscan.com/vulnerability/c3bed5af-5f31-4993-9d37-dd843a48e57c
 |      - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-6495
 |      - https://www.wordfence.com/threat-intel/vulnerabilities/id/5ac49a00-dabc-4cd9-9032-c038ede3fd8f
 |
 | Version: 1.9.5 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - https://bricks.thm/wp-content/themes/bricks/style.css, Match: 'Version: 1.9.5'


[i] User(s) Identified:

[+] administrator
 | Found By: Rss Generator (Passive Detection)
 | Confirmed By:
 |  Wp Json Api (Aggressive Detection)
 |   - https://bricks.thm/wp-json/wp/v2/users/?per_page=100&page=1
 |  Rss Generator (Aggressive Detection)
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] WPScan DB API OK
 | Plan: free
 | Requests Done (during the scan): 2
 | Requests Remaining: 23

[+] Finished: Thu Aug 21 09:50:59 2025
[+] Requests Done: 706
[+] Cached Requests: 17
[+] Data Sent: 182.327 KB
[+] Data Received: 300.118 KB
[+] Memory used: 271.219 MB
[+] Elapsed time: 00:01:34
```
- tried CVE-2024-25600 while the brute force was running on `wp-admin`. worked like a charm. git repo for the exploit: https://github.com/K3ysTr0K3R/CVE-2024-25600-EXPLOIT/tree/main
	- had to install some dependencies for the exploit. see [[pip]] to see how to set up a venv to install libraries if you dont know how to get pip working <br>
![[BricksHeistGotAShellSS.png]]
- got a more stable shell with [[oneLinerBashShell]]
- time to stabilise it with [[shellStabilizationChecklist]] 
- got this in config.php:
```sh
/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'lamp.sh' );
```
- new possible creds:
```
root:lamp.sh
```
- catted `650c844110baced87e1606453b93f22a.txt` to get the first flag 
- did `systemctl list-units --type=service --state=running` to list running services
```sh
UNIT                        LOAD   ACTIVE SUB     DESCRIPTION                 
  accounts-daemon.service     loaded active running Accounts Service            
  acpid.service               loaded active running ACPI event daemon
  
  atd.service                 loaded active running Deferred execution scheduler
  avahi-daemon.service        loaded active running Avahi mDNS/DNS-SD Stack     
  cron.service                loaded active running Regular background program …
  cups-browsed.service        loaded active running Make remote CUPS printers a…
  cups.service                loaded active running CUPS Scheduler              
  dbus.service                loaded active running D-Bus System Message Bus    
  getty@tty1.service          loaded active running Getty on tty1               
  httpd.service               loaded active running LSB: starts Apache Web Serv…
  irqbalance.service          loaded active running irqbalance daemon           
  kerneloops.service          loaded active running Tool to automatically colle…
  lightdm.service             loaded active running Light Display Manager       
  ModemManager.service        loaded active running Modem Manager               
  multipathd.service          loaded active running Device-Mapper Multipath Dev…
  mysqld.service              loaded active running LSB: start and stop MySQL   
  networkd-dispatcher.service loaded active running Dispatcher daemon for syste…
  
  NetworkManager.service      loaded active running Network Manager             
  polkit.service              loaded active running Authorization Manager       
  rsyslog.service             loaded active running System Logging Service      
  rtkit-daemon.service        loaded active running RealtimeKit Scheduling Poli…
  
  serial-getty@ttyS0.service  loaded active running Serial Getty on ttyS0       
  snap.amazon-ssm-agent.amaz… loaded active running Service for snap applicatio…
  
  snapd.service               loaded active running Snap Daemon                 
  ssh.service                 loaded active running OpenBSD Secure Shell server 
  
  switcheroo-control.service  loaded active running Switcheroo Control Proxy se…
  
  systemd-journald.service    loaded active running Journal Service             
  systemd-logind.service      loaded active running Login Service               
  systemd-networkd.service    loaded active running Network Service             
  systemd-resolved.service    loaded active running Network Name Resolution     
  systemd-timesyncd.service   loaded active running Network Time Synchronization
  
  systemd-udevd.service       loaded active running udev Kernel Device Manager
    
  ubuntu.service              loaded active running TRYHACK3M
  
  udisks2.service             loaded active running Disk Manager 
  
  unattended-upgrades.service loaded active running Unattended Upgrades Shutdown
  upower.service              loaded active running Daemon for power management 
  user@1000.service           loaded active running User Manager for UID 1000   
  user@114.service            loaded active running User Manager for UID 114    
  whoopsie.service            loaded active running crash report submission dae…
  wpa_supplicant.service      loaded active running WPA supplicant
```
- `ubuntu.service              loaded active running TRYHACK3M` was the obvious one that stood out due to the description 
- wasnt the name of the suspicious process. but it was the name of the suspicious service name 
- got the suspicious process name by catting the service by running `systemctl cat ubuntu.service`
```c
# /etc/systemd/system/ubuntu.service
[Unit]
Description=TRYHACK3M

[Service]
Type=simple
ExecStart=/lib/NetworkManager/nm-inet-dialog
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
- `nm-inet-dialog` was the sus process name 
- went to `/lib/NetworkManager/` and catted `inet.conf` which is the miner log. had an ID in it
```sh
ID: 5757314e65474e5962484a4f656d787457544e424e574648555446684d3070735930684b616c70555a7a566b52335276546b686b65575248647a525a57466f77546b64334d6b347a526d685a6255313459316873636b35366247315a4d304531595564476130355864486c6157454a3557544a564e453959556e4a685246497a5932355363303948526a4a6b52464a7a546d706b65466c525054303d
```
- seemed like a cipher maybe since doing `intext:"5757314e65474e5962484a4f656d787457544e424e574648555446684d3070735930684b616c70555a7a566b52335276546b686b65575248647a525a57466f77546b64334d6b347a526d685a6255313459316873636b35366247315a4d304531595564476130355864486c6157454a3557544a564e453959556e4a685246497a5932355363303948526a4a6b52464a7a546d706b65466c525054303d"` returned writeups only <br>
![[BricksHeistDcodeDResult.png]]
- dcode says ascii code. lets go to cyberchef
- did magic. returned `bc1qyk79fcp9hd5kreprce89tkh4wrtl8avt4l67qabc1qyk79fcp9had5kreprce89tkh4wrtl8avt4l67qa`
- need the bitcoin wallet. lets see what a wallet address looks like
	- [[bitcoin wallet address types and how to identify them]]
- so it seems like i have two wallet addresses
```sh
bc1qyk79fcp9hd5kreprce89tkh4wrtl8avt4l67qa
bc1qyk79fcp9had5kreprce89tkh4wrtl8avt4l67qa
```
- first one was valid 
- need the name of a threat group now. checked the wallet transactions. an incoming transaction of 11 btc. thats alot of money. checked that. got the the wallet id for that and googled it
- "bc1q5jqgm7nvrhaw2rh2vk0dk8e4gg5g373g0vz07r" <br>
![[Pasted image 20250823001305.png]]
- press release says `lockbit ransomware group`. thats the name :D