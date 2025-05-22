---
title: DC1
tags:
  - fetus
---
## nmap results:
- `nmap -p- -T4 -Pn -sV -A --script default,vuln 10.0.2.13 -oN Ascan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-05-10 10:44 EDT
Nmap scan report for 10.0.2.13
Host is up (0.00s latency).
Not shown: 65531 closed tcp ports (reset)
PORT      STATE SERVICE VERSION
22/tcp    open  ssh     OpenSSH 6.0p1 Debian 4+deb7u7 (protocol 2.0)
| ssh-hostkey: 
|   1024 c4:d6:59:e6:77:4c:22:7a:96:16:60:67:8b:42:48:8f (DSA)
|   2048 11:82:fe:53:4e:dc:5b:32:7f:44:64:82:75:7d:d0:a0 (RSA)
|_  256 3d:aa:98:5c:87:af:ea:84:b8:23:68:8d:b9:05:5f:d8 (ECDSA)
80/tcp    open  http    Apache httpd 2.2.22 ((Debian))
| http-robots.txt: 36 disallowed entries (15 shown)
| /includes/ /misc/ /modules/ /profiles/ /scripts/ 
| /themes/ /CHANGELOG.txt /cron.php /INSTALL.mysql.txt 
| /INSTALL.pgsql.txt /INSTALL.sqlite.txt /install.php /INSTALL.txt 
|_/LICENSE.txt /MAINTAINERS.txt
|_http-dombased-xss: Couldn't find any DOM based XSS.
| http-csrf: 
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=10.0.2.13
|   Found the following possible CSRF vulnerabilities: 
|     
|     Path: http://10.0.2.13:80/
|     Form id: user-login-form
|     Form action: /node?destination=node
|     
|     Path: http://10.0.2.13:80/node?destination=node
|     Form id: user-login-form
|     Form action: /node?destination=node
|     
|     Path: http://10.0.2.13:80/user/password
|     Form id: user-pass
|     Form action: /user/password
|     
|     Path: http://10.0.2.13:80/user/register
|     Form id: user-register-form
|     Form action: /user/register
|     
|     Path: http://10.0.2.13:80/user
|     Form id: user-login
|     Form action: /user
|     
|     Path: http://10.0.2.13:80/user/
|     Form id: user-login
|_    Form action: /user/
|_http-server-header: Apache/2.2.22 (Debian)
|_http-generator: Drupal 7 (http://drupal.org)
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
| http-vuln-cve2014-3704: 
|   VULNERABLE:
|   Drupal - pre Auth SQL Injection Vulnerability
|     State: VULNERABLE (Exploitable)
|     IDs:  CVE:CVE-2014-3704
|         The expandArguments function in the database abstraction API in
|         Drupal core 7.x before 7.32 does not properly construct prepared
|         statements, which allows remote attackers to conduct SQL injection
|         attacks via an array containing crafted keys.
|           
|     Disclosure date: 2014-10-15
|     References:
|       http://www.securityfocus.com/bid/70595
|       https://www.sektioneins.de/en/advisories/advisory-012014-drupal-pre-auth-sql-injection-vulnerability.html
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3704
|_      https://www.drupal.org/SA-CORE-2014-005
|_http-title: Welcome to Drupal Site | Drupal Site
| http-enum: 
|   /rss.xml: RSS or Atom feed
|   /robots.txt: Robots file
|   /UPGRADE.txt: Drupal file
|   /INSTALL.txt: Drupal file
|   /INSTALL.mysql.txt: Drupal file
|   /INSTALL.pgsql.txt: Drupal file
|   /: Drupal version 7 
|   /README: Interesting, a readme.
|   /README.txt: Interesting, a readme.
|   /0/: Potentially interesting folder
|_  /user/: Potentially interesting folder
111/tcp   open  rpcbind 2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  3,4          111/tcp6  rpcbind
|   100000  3,4          111/udp6  rpcbind
|   100024  1          33870/tcp6  status
|   100024  1          57311/udp6  status
|   100024  1          59586/udp   status
|_  100024  1          59727/tcp   status
59727/tcp open  status  1 (RPC #100024)
MAC Address: 08:00:27:82:DA:73 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 2.6.X|3.X
OS CPE: cpe:/o:linux:linux_kernel:2.6 cpe:/o:linux:linux_kernel:3
OS details: Linux 2.6.32 - 3.10, Linux 3.2 - 3.16
Network Distance: 1 hop
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE
HOP RTT     ADDRESS
1   0.00 ms 10.0.2.13

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 259.70 seconds
```
## http enum:
- accessing the root page gives us this: <br>
![[DC1httpRootPage.png]]
- theres a registration option:<br>
![[DC1httpRegPage.png]]<br>
![[DC1RegResponse.png]]
- :/ okay anyways
- `robots.txt`:
```txt
#
# robots.txt
#
# This file is to prevent the crawling and indexing of certain parts
# of your site by web crawlers and spiders run by sites like Yahoo!
# and Google. By telling these "robots" where not to go on your site,
# you save bandwidth and server resources.
#
# This file will be ignored unless it is at the root of your host:
# Used:    http://example.com/robots.txt
# Ignored: http://example.com/site/robots.txt
#
# For more information about the robots.txt standard, see:
# http://www.robotstxt.org/wc/robots.html
#
# For syntax checking, see:
# http://www.sxw.org.uk/computing/robots/check.html

User-agent: *
Crawl-delay: 10
# Directories
Disallow: /includes/
Disallow: /misc/
Disallow: /modules/
Disallow: /profiles/
Disallow: /scripts/
Disallow: /themes/
# Files
Disallow: /CHANGELOG.txt
Disallow: /cron.php
Disallow: /INSTALL.mysql.txt
Disallow: /INSTALL.pgsql.txt
Disallow: /INSTALL.sqlite.txt
Disallow: /install.php
Disallow: /INSTALL.txt
Disallow: /LICENSE.txt
Disallow: /MAINTAINERS.txt
Disallow: /update.php
Disallow: /UPGRADE.txt
Disallow: /xmlrpc.php
# Paths (clean URLs)
Disallow: /admin/
Disallow: /comment/reply/
Disallow: /filter/tips/
Disallow: /node/add/
Disallow: /search/
Disallow: /user/register/
Disallow: /user/password/
Disallow: /user/login/
Disallow: /user/logout/
# Paths (no clean URLs)
Disallow: /?q=admin/
Disallow: /?q=comment/reply/
Disallow: /?q=filter/tips/
Disallow: /?q=node/add/
Disallow: /?q=search/
Disallow: /?q=user/password/
Disallow: /?q=user/register/
Disallow: /?q=user/login/
Disallow: /?q=user/logout/
```
- doesnt let me access anything tho. no perms apparently
- since the drupal version is 7. lets see what we can do with that
- CVE:CVE-2014-3704 
- found something. its called "drupageddon"
```txt
## Script Summary

Exploits CVE-2014-3704 also known as 'Drupageddon' in Drupal. Versions < 7.32 of Drupal core are known to be affected.

Vulnerability allows remote attackers to conduct SQL injection attacks via an array containing crafted keys.

The script injects new Drupal administrator user via login form and then it attempts to log in as this user to determine if target is vulnerable. If that's the case following exploitation steps are performed:

- PHP filter module which allows embedded PHP code/snippets to be evaluated is enabled,
- permission to use PHP code for administrator users is set,
- new article which contains payload is created & previewed,
- cleanup: by default all DB records that were added/modified by the script are restored.

Vulnerability originally discovered by Stefan Horst from SektionEins.

Exploitation technique used to achieve RCE on the target is based on exploit/multi/http/drupal_drupageddon Metasploit module.
```
- https://www.rapid7.com/db/modules/exploit/multi/http/drupal_drupageddon/
- hehe msfconsole it is
- hell yeah got a meterpreter shell 
- ran linpeas. got this: <br>
![[DC1LinpeasOutputInteresting1.png]]
- lets check gtfobins for easy privesc
- heh got partial root: <br>
![[DC1partialRootSS.png]]
- lets see if theres any flags in the root directory
- oh it says "the final flag". so theres other flags? 
- lemme find all the flags
- flag1: `/var/www/flag1.txt`
```
Every good CMS needs a config file - and so do you.
```
- flag4:`/home/flag4/flag4.txt`
```
Can you use this same method to find or access the flag in root?

Probably. But perhaps it's not that easy.  Or maybe it is?
```
- bruh did i exploit this machine in the unintended way?
- finalFlag:`/root/thefinalflag.txt`
```
Well done!!!!

Hopefully you've enjoyed this and learned some new skills.

You can let me know what you thought of this little journey
by contacting me via Twitter - @DCAU7
```
### alt path: https://github.com/pimps/CVE-2018-7600
- https://cybersecuritywriteups.com/proving-grounds-dc-1-walkthrough-133af4b2c6e9
- https://medium.com/@w3rallmachines/dc-1-vulnhub-walkthrough-3a2e7042c640