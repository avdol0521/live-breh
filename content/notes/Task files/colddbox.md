---
title: colddbox
tags:
  - fetus
---
## [[nmap]] results: 
	
- `nmap -p- -Pn -sV -O -T4 10.10.81.108 > Dscan.txt`:
```sh fold title:"Dscan.txt"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-04 13:46 EDT
Stats: 0:06:44 elapsed; 0 hosts completed (1 up), 1 undergoing SYN Stealth Scan
SYN Stealth Scan Timing: About 41.66% done; ETC: 14:02 (0:09:26 remaining)
Nmap scan report for 10.10.81.108
Host is up (0.18s latency).
Not shown: 65533 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
4512/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1032.88 seconds
```
	
- `nmap -p- -Pn -A -T4 10.10.81.108 > Ascan.txt`:
```sh fold title:"Ascan.txt"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-04 13:47 EDT
Nmap scan report for 10.10.81.108
Host is up (0.19s latency).
Not shown: 65533 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: ColddBox | One more machine
|_http-generator: WordPress 4.1.31
|_http-server-header: Apache/2.4.18 (Ubuntu)
4512/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 4e:bf:98:c0:9b:c5:36:80:8c:96:e8:96:95:65:97:3b (RSA)
|   256 88:17:f1:a8:44:f7:f8:06:2f:d3:4f:73:32:98:c7:c5 (ECDSA)
|_  256 f2:fc:6c:75:08:20:b1:b2:51:2d:94:d6:94:d7:51:4f (ED25519)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 110/tcp)
HOP RTT       ADDRESS
1   179.64 ms 10.21.0.1
2   179.69 ms 10.10.81.108

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 839.43 seconds
```
	
- gonna do some version exploit enumeration first
```
WordPress 4.1.31 - lots of stuff. gonna look into this 
Apache/2.4.18 - theres a local priv escalation it seems. might be useful later
	/usr/share/exploitdb/exploits/linux/local/46676.php
OpenSSH 7.2p2 - theres a username enum script for this
	/usr/share/exploitdb/exploits/linux/remote/40136.py
```
	
- i wanna look into the wordpress site on port 80 first 
	
## http enum: 
- login page on `http://10.10.81.108/wp-login.php`. information disclosure as well since it gives out validity as well
```
http://10.10.81.108/wp-login.php
```
	
- password reset field at `http://10.10.81.108/wp-login.php?action=lostpassword`. might be useful later
```
http://10.10.81.108/wp-login.php?action=lostpassword
```

- possible uname from a comment at `http://10.10.81.108/?p=1#comment-1`:
```
Sr Hott
```
- gonna do some Wordpress enum with [[wpscan]] now 
	
## wp enum:
- `wpscan --url http://10.10.81.108/ -e u,vt,vp --api-token LfCmMGIuqWAHTwuGHaZmLoj3Q3IeN1WPNVaph97nDWw > WPsInit.txt`:
	- [[colddbox-wpscanResult]] 
- interesting stuff:
```
https://www.exploit-db.com/exploits/50663 - SQLi in query
```
- unames:
```
c0ldd
hugo
philip
```
- did some bruteforcing with the unames 
- found creds:
```
c0ldd:9876543210
```
- i can login in to the admin panel in http but cant do it with ssh 
- gonna run a [[hydra]] bruteforce against `c0ldd` and see if anything comes up
- tried uploading a reverse shell but didnt work
- theres an editor option 
- damn i can edit any file raw 
- added in the [[webshells]] in the `comments.php` file 
- got shell as `www-data` 
- i can see config.php
- new creds found for `c0ldd`:
```
c0ldd:cybersecurity
```
- gonna try ssh again 
- yup works 
- got `user.txt` 
- can run these as `sudo` 
```
(root) /usr/bin/vim
(root) /bin/chmod
(root) /usr/bin/ftp
```
- got root with `gtfobins` 
- got `root.txt` 