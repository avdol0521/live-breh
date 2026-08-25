---
title: "yearOfTheRabbit"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/yearoftherabbit
# start 
- lets see where this wabbit hole leads me
## nmap result:
- `nmap -sSCV -T4 -p- 10.10.255.98 -oN Dscan.txt`:
```sh
# Nmap 7.95 scan initiated Sun Jul 20 03:43:49 2025 as: /usr/lib/nmap/nmap -sSCV -T4 -oN Dscan.txt 10.10.255.98
Nmap scan report for 10.10.255.98
Host is up (0.21s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.2
22/tcp open  ssh     OpenSSH 6.7p1 Debian 5 (protocol 2.0)
| ssh-hostkey: 
|   1024 a0:8b:6b:78:09:39:03:32:ea:52:4c:20:3e:82:ad:60 (DSA)
|   2048 df:25:d0:47:1f:37:d9:18:81:87:38:76:30:92:65:1f (RSA)
|   256 be:9f:4f:01:4a:44:c8:ad:f5:03:cb:00:ac:8f:49:44 (ECDSA)
|_  256 db:b1:c1:b9:cd:8c:9d:60:4f:f1:98:e2:99:fe:08:03 (ED25519)
80/tcp open  http    Apache httpd 2.4.10 ((Debian))
|_http-title: Apache2 Debian Default Page: It works
|_http-server-header: Apache/2.4.10 (Debian)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun Jul 20 03:44:10 2025 -- 1 IP address (1 host up) scanned in 20.37 seconds
```
## http enum 
- default page is just apache2 default page. no comments and no robots.txt either. lets do some dirbusting
### [[feroxbuster]] results:
- `feroxbuster --url http://10.10.255.98:80/ -w /usr/share/seclists/Discovery/Web-Content/common.txt --thorough`
```sh
200      GET      180l      306w     2968c http://10.10.255.98/assets/style.css
200      GET      189l      643w     7853c http://10.10.255.98/
301      GET        9l       28w      313c http://10.10.255.98/assets => http://10.10.255.98/assets/
200      GET       25l      128w    10355c http://10.10.255.98/icons/openlogo-75.png
200      GET        0l        0w 402279586c http://10.10.255.98/assets/RickRolled.mp4
200      GET      189l      643w     7853c http://10.10.255.98/index.html
```
- ffuf didnt give anything new. hmm lets see whats in the style.css in assets. might wanna check the rickroll vid as well as painful as that is -,- 
- something in style.css:
```css
  /* Nice to see someone checking the stylesheets.
     Take a look at the page: /sup3r_s3cr3t_fl4g.php
  */
```
- new page `/sup3r_s3cr3t_fl4g.php`
- told me to block javascript. what i got after doing so:<br>
![[yearOfTheRabbitnoJsSS.png]]
- OH COME ON <br>
![[FB_IMG_1737816873634.jpg]]
- FINE ill get rickrolled -,-
- you know what I REFUSE to get rickrolled imma just look up a writeup -,-
<br>
![[yearOfTheRabbitBurpSecretDirSS.png]]
<br>
![[yearOfTheRabbitHotBabePng.png]]
```
login: ftpuser   password: 5iez1wGXKfPKQ
```

```
+++++ ++++[ ->+++ +++++ +<]>+ +++.< +++++ [->++ +++<] >++++ +.<++ +[->-
--<]> ----- .<+++ [->++ +<]>+ +++.< +++++ ++[-> ----- --<]> ----- --.<+
++++[ ->--- --<]> -.<++ +++++ +[->+ +++++ ++<]> +++++ .++++ +++.- --.<+
+++++ +++[- >---- ----- <]>-- ----- ----. ---.< +++++ +++[- >++++ ++++<
]>+++ +++.< ++++[ ->+++ +<]>+ .<+++ +[->+ +++<] >++.. ++++. ----- ---.+
++.<+ ++[-> ---<] >---- -.<++ ++++[ ->--- ---<] >---- --.<+ ++++[ ->---
--<]> -.<++ ++++[ ->+++ +++<] >.<++ +[->+ ++<]> +++++ +.<++ +++[- >++++
+<]>+ +++.< +++++ +[->- ----- <]>-- ----- -.<++ ++++[ ->+++ +++<] >+.<+
++++[ ->--- --<]> ---.< +++++ [->-- ---<] >---. <++++ ++++[ ->+++ +++++
<]>++ ++++. <++++ +++[- >---- ---<] >---- -.+++ +.<++ +++++ [->++ +++++
<]>+. <+++[ ->--- <]>-- ---.- ----. <
```
https://sange.fi/esoteric/brainfuck/impl/interp/i.html
<br>
![[yearOfTheRabbitBrainfuckDecodeSS.png]]

```
eli:DSpDiM1wAEwid
```
<br>
![[yearOfTheRabbitSshMessageSS.png]]
```
1 new message
Message from Root to Gwendoline:

"Gwendoline, I am not happy with you. Check our leet s3cr3t hiding place. I've left you a hidden message there"

END MESSAGE
```
<br>
![[yearOfTheRabbitSecretDirSS.png]]
<br>
![[yearOfTheRabbitMessageForGwenSS.png]]
```
.th1s_m3ss4ag3_15_f0r_gw3nd0l1n3_0nly\!

Your password is awful, Gwendoline. 
It should be at least 60 characters long! Not just MniVCQVhQHUNI
Honestly!

Yours sincerely
   -Root
```
<br>
![[yearOfTheRabbitUserTxtGotSS.png]]
```
gwendoline@year-of-the-rabbit:/tmp$ sudo -l
Matching Defaults entries for gwendoline on year-of-the-rabbit:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User gwendoline may run the following commands on year-of-the-rabbit:
    (ALL, !root) NOPASSWD: /usr/bin/vi /home/gwendoline/user.txt
```
