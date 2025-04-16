---
title: "Whiterose"
tags:
  - fetus
---
## given creds:
```
Olivia Cortez:olivi8
```
## nmap results: 
- `nmap -sV -O --script=default 10.10.174.97 -oN Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-16 15:07 EDT
Nmap scan report for 10.10.174.97
Host is up (0.18s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b9:07:96:0d:c4:b6:0c:d6:22:1a:e4:6c:8e:ac:6f:7d (RSA)
|   256 ba:ff:92:3e:0f:03:7e:da:30:ca:e3:52:8d:47:d9:6c (ECDSA)
|_  256 5d:e4:14:39:ca:06:17:47:93:53:86:de:2b:77:09:7d (ED25519)
80/tcp open  http    nginx 1.14.0 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 609.94 seconds
```
- `Ascan.txt`:
```sh
# Nmap 7.95 scan initiated Wed Apr 16 15:56:01 2025 as: /usr/lib/nmap/nmap -p- -A -T4 -oN Ascan.txt 10.10.174.97
Nmap scan report for cyprusbank.thm (10.10.174.97)
Host is up (0.18s latency).
Not shown: 65533 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b9:07:96:0d:c4:b6:0c:d6:22:1a:e4:6c:8e:ac:6f:7d (RSA)
|   256 ba:ff:92:3e:0f:03:7e:da:30:ca:e3:52:8d:47:d9:6c (ECDSA)
|_  256 5d:e4:14:39:ca:06:17:47:93:53:86:de:2b:77:09:7d (ED25519)
80/tcp open  http    nginx 1.14.0 (Ubuntu)
|_http-title: Site doesn't have a title (text/html; charset=utf-8).
|_http-server-header: nginx/1.14.0 (Ubuntu)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 1723/tcp)
HOP RTT       ADDRESS
1   180.10 ms 10.21.0.1
2   180.16 ms cyprusbank.thm (10.10.174.97)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Wed Apr 16 16:11:57 2025 -- 1 IP address (1 host up) scanned in 956.30 seconds
```
## http enum: 
- tried to access directly. doesnt load and the url bar returns this: `http://cyprusbank.thm/`. ill add it to the `/etc/hosts` file ig
- added it. can access the site now. lets see what comes up
- this comes up: <br>
![[WhiteroseDefaultPage.png]]
#### directory busting results: 
- `feroxbuster --url http://cyprusbank.thm/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt` gave me nothing. im stuck already lmao. gonna see just a lil bit of a writeup, juuuust enough to see what to do
- oh [[Subdomain Enumeration]]. ofcourse
- used [[ffuf]] for this 
```sh
ffuf -u http://cyprusbank.thm/ -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-110000.txt -H "Host:FUZZ.cyprusbank.thm" -fw 1
```
- gave us these two:
```sh
www                     [Status: 200, Size: 252, Words: 19, Lines: 9, Duration: 733ms]
admin                   [Status: 302, Size: 28, Words: 4, Lines: 1, Duration: 798ms]
```
- gonna add these to the `/etc/hosts` file as well
- added em. lets check the subdomains 
- `www` is the same site
- `admin` gave us this: <br>
![[WhiteroseAdminPanel.png]]
- lets explore what else this leads to from the navbar
- `Home` is the same page 
- none of the other pages give us anything other 
- now that i've logged in with the creds. each page gives us these: 
- `settings`: <br>
![[WhiteroseSettingsNoPerms.png]]
- `Home`: <br>
![[WhiteroseHomeRedacted1.png]]
![[WhiteroseHomeRedacted2.png]]
- `See all the accounts` leads us to `Search` which gives us this: (I searched for Tyrell) <br>
![[WhiteroseSearchRedactedTyrell.png]]
- `Messages` gives us this: <br>
![[WhiteroseMessagesInitial.png]]
- sent some messages. seems like i can only see 5 messages at a time <br>
![[WhiteroseSearchOnlyFive.png]]
- ooooh notice the URL: `http://admin.cyprusbank.thm/messages/?c=5`
- lets see what happens when we change that shit 
- hey seems like the `c` parameter controls the amount of messages i can see. imma set it to a really high value and see what happens 
- chat log:
```
Cyprus National Bank - Admin Chat

DEV TEAM: Thanks Gayle, can you share your credentials? We need privileged admin account for testing

Gayle Bev: Of course! My password is 'p~]P@5!6;rs558:q'

DEV TEAM: Alright we are trying to implement chat history, everything should be ready in week or so

Gayle Bev: That's nice to hear!

Gayle Bev: Developers implemented this new messaging feature that I suggested! What you guys think?

Greger Ivayla: Looks really cool!

Jemmy Laurel: Hey have you guys seen Mrs. Jacobs recently??

Olivia Cortez: No she hasn't been around for a while

Jemmy Laurel: Oh, is she OK?

Olivia Cortez: swfawfawgfawg

Olivia Cortez: dwafawfgawfawgwag

Olivia Cortez: 1

Olivia Cortez: 2

Olivia Cortez: 3

Olivia Cortez: 4

Olivia Cortez: 5

```
- huh. new creds found. seems like Gayle is a privilaged admin. so far the complete creds found are:
```
Olivia Cortez:olivi8
Gayle Bev:p~]P@5!6;rs558:q
```
- incomplete creds: 
```
DEV TEAM:
Greger Ivayla:
Jemmy Laurel:
```
- lets login with Gayle's creds 
- hell yeah nothing's redacted anymore <br>![[WhiteroseGayleHome.png]]
- lets get Tyrell's phone number now lmao
```
842-029-5701
```
- `Messages` didnt anything new. nor did `Search`
- ooooooooh `Settings` gives me a register page: <br>
![[WhiteroseSettingsPage.png]]
- lets see what happens if i register a valid user
- `test:test` gave us this: <br>
![[WhiteroseSettingsUpdate.png]]
- reflects the password. lets see what happens if i put in a reverse shell, specificall in there while listening
	- [[pentestMonkey-oneLinerBashShell]] didnt work. gonna try [[pentestMonkey-PHP_reverse_shell]] 
	- didnt work. maybe try with a valid user???
	- nothing works. im gonna have a looksie at the writeup again
	- yapping about SSTI
- fine ill read about SSTI - _ -
	- https://portswigger.net/web-security/server-side-template-injection
	- WOW thats alot of reading. ill get to it later its almost 4am i just wanna solve ts
- lets mess around with the post request in burp
- empty password parameter didnt change anything 
- no password parameter did tho: <br>
![[WhiteroseNoPasswordParameter.png]]
