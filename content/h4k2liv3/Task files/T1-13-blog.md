---
title: "T1-13-blog"
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
	
- `check-this.png`: 
![[blogCheckThis.png]]
- scanned it and got `https://qrgo.page.link/M6dE` which leads to `https://www.youtube.com/watch?v=eFTLKWw542g` 

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

