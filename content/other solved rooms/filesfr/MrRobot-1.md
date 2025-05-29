---
title: "MrRobot-1"
tags:
  - fetus
---
## initial stuff:
- got the machine running. i loved watching Mr. Robot. this better be good <br>
![[MrRobot-1IsRunningSS.png]]
- did `arp-scan -l`. IP is `192.168.48.135`. lets run nmap 
- `nmap -sV -O -p- 192.168.48.135 -oN Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-05-29 02:31 EDT
Nmap scan report for 192.168.48.135
Host is up (0.00038s latency).
Not shown: 65532 filtered tcp ports (no-response)
PORT    STATE  SERVICE  VERSION
22/tcp  closed ssh
80/tcp  open   http     Apache httpd
443/tcp open   ssl/http Apache httpd
MAC Address: 00:0C:29:A1:79:59 (VMware)
Aggressive OS guesses: Linux 3.10 - 4.11 (98%), Linux 3.13 - 4.4 (98%), Linux 3.16 - 4.6 (96%), Linux 3.2 - 4.14 (94%), Linux 3.8 - 3.16 (94%), Linux 4.10 (94%), Linux 3.2 - 3.8 (93%), Linux 3.16 (93%), Linux 4.4 (93%), Linux 3.13 or 4.2 (92%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 121.38 seconds
```
- http and https huh. lets run all http NSE scripts on those two ports and run an aggressive scan as well
- `nmap -A -p- -T4 -sS 192.168.48.135 -oN Ascan.txt`:
```sh
# Nmap 7.95 scan initiated Thu May 29 02:36:17 2025 as: /usr/lib/nmap/nmap -A -p- -T4 -sS -oN Ascan.txt 192.168.48.135
Nmap scan report for 192.168.48.135
Host is up (0.00039s latency).
Not shown: 65532 filtered tcp ports (no-response)
PORT    STATE  SERVICE  VERSION
22/tcp  closed ssh
80/tcp  open   http     Apache httpd
|_http-server-header: Apache
|_http-title: Site doesn't have a title (text/html).
443/tcp open   ssl/http Apache httpd
|_http-server-header: Apache
| ssl-cert: Subject: commonName=www.example.com
| Not valid before: 2015-09-16T10:45:03
|_Not valid after:  2025-09-13T10:45:03
|_http-title: Site doesn't have a title (text/html).
MAC Address: 00:0C:29:A1:79:59 (VMware)
Aggressive OS guesses: Linux 3.10 - 4.11 (98%), Linux 3.13 - 4.4 (98%), Linux 3.16 - 4.6 (96%), Linux 3.2 - 4.14 (94%), Linux 3.8 - 3.16 (94%), Linux 4.10 (94%), Linux 3.2 - 3.8 (93%), Linux 4.4 (93%), Linux 3.16 (92%), Linux 3.13 or 4.2 (92%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop

TRACEROUTE
HOP RTT     ADDRESS
1   0.39 ms 192.168.48.135

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Thu May 29 02:38:05 2025 -- 1 IP address (1 host up) scanned in 108.74 seconds
```
- doesnt seem like nmap is gonna give me anything useful. ill have to go to the site itself and see whats up
## http enum (port 80):
- woah cool <br>
![[MrRobot-1Port80SS.png]]
- did `prepare`. the opening one percent of the one percent part played from the show plus some extra. they're apparently gonna take back 100k and give it back to us live on twitch xD got a domain as well <br>
![[MrRobot-1DomainSS.png]]
- gonna keep note of the domain just in case 
```
whoismrrobot.com
```
- tried to go to the actual site. redirects to https://www.usanetwork.com/ 
- did `fsociety` this time. asked me if i was ready to join fsociety
- did `inform`. shitton of scandals and mr robot monolouging. i see some journalist names as well. might be possible unames. gonna keep a note of them as well. but first lemme read through it all and see whats up. ill include screenshots just in case i wanna read later 
<br>
![[MrRobot-1CounterfietHerosSS.png]] <br>
![[MrRobot-1BillionaireRocketLaunchSS.png]]
<br>
![[MrRobot-1MiddleEastCreditInfectionSS.png]] <br>
![[MrRobot-1MetGalaFraudsSS.png]] <br>
- thats about all the sections in the carousel. gonna make a list real quick of all the stuff i need to get/got from this section:
	- the url changed to `http://192.168.48.135/inform`. gotta do sum dirbusting. 
	- gotta get the images and see if theres anything in em. 
	- gotta list out all the journalist names for possible unames/victim names 
	- gotta check the source
- lets get to it then. gonna start with listing out the names. and then get the images
- names:
```txt
Kim Quincy
Ken Cromwell
Janice Pichlingi
Bo Janowski
```
- images:
```txt
billionaire.jpg
creditcards2.jpg
deflategate.jpg
metgala.jpg
```
- creditcards2? is there a creditcards1?
- [[MrRobot-1DirbustingResults]] 
- did `question`. another carousel with images. gonna include screenshots just in case. 
<br>
![[MrRobot-1jeffersonPNGSS.png]]
<br>
![[MrRobot-1StealsjpgSS.png]]
<br>
![[MrRobot-1madoffSS.png]]
<br>
![[MrRobot-1ownedJPGSS.png]]
<br>
- got all the images downloaded as well for later inspection
- ran `wakeup`. played the intro of mrRobot
- ran `join`. im conversing with mr robot now :0<br>
![[MrRobot-1JoinSS.png]] <br>
- gonna give it `test@mail.com` 
- said `we will be in touch` and closed. maybe it sends something. gave it my real mail. nope didnt get anything in my mail as i suspected. wouldve been cool tho. maybe a possible injection here since it asks for user input. 
- doesnt seem to take anything except a valid email
- gonna test out the https port now
## https enum (port 443):
- same thing here 
### dirbusting result analysis:
- saved the feroxbuster filtered results in [[MrRobot-1DirbustingResults]] 