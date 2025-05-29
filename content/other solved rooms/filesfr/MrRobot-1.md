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
- `http://192.168.48.135/join` is using `wordpress 4.3.1` double checked with `whatweb` <br>
![[MrRobot-1whatebJoinResultSS.png]]
<br>
- gonna run [[wpscan]] and see whats up
- couldnt get me anything. i must've missed something 
- fuck i didnt check robots.txt what a rookie mistake wth 
## http enum (port 80 again):
- `http://192.168.48.135/robots.txt`:
```txt
User-agent: *
fsocity.dic
key-1-of-3.txt
```
- `http://192.168.48.135/key-1-of-3.txt`:
```
073403c8a58a1f80d943455fb30724b9
```
- the fsocity.dic is most likely a hostname. gonna add it to `/etc/hosts` and see what happens
- nothing at all. the key seems like a hash. lets run it through [[hash-identifier]]. 
- yup an MD5 hash. gonna try to crack it with [[hashcat]] 
- nope exausted the wordlists
- what did i miss
- wait lemme access fsocity.dic
- oh bruh its a dictionary *facepalm*. what is it with me and making rookie mistakes today ffs. it should be obvious that a dic file is a dictionary - __ - lemme remove the entry from `/etc/hosts` first tho. and then ill wget it and crack the hash 
- couldnt crack the hash with the dictionary. upon taking a closer look at the wordlist. seems like a directory list. lemme try it real quick with [[ffuf]]
- the wordlist seems to keep repeating
```sh
css                     [Status: 301, Size: 234, Words: 14, Lines: 8, Duration: 3ms]
images                  [Status: 301, Size: 237, Words: 14, Lines: 8, Duration: 206ms]
image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 117ms]
license                 [Status: 200, Size: 309, Words: 25, Lines: 157, Duration: 0ms]
video                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
feed                    [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 192ms]
audio                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
admin                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
blog                    [Status: 301, Size: 235, Words: 14, Lines: 8, Duration: 0ms]
Image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 185ms]
intro                   [Status: 200, Size: 516314, Words: 2076, Lines: 2028, Duration: 8ms]
rss                     [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 186ms]
login                   [Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 200ms]
readme                  [Status: 200, Size: 64, Words: 14, Lines: 2, Duration: 4ms]
Year201120102009200820072006200520042003200220012000199919981997199619951994199319921991199019891988198719861985198419831982198119801979197819771976197519741973197219711970196919681967196619651964196319621961196019591958195719561955195419531952195119501949194819471946194519441943194219411940193919381937193619351934193319321931193019291928192719261925192419231922192119201919191819171916191519141913191219111910190919081907190619051904190319021901 [Status: 403, Size: 657, Words: 16, Lines: 10, Duration: 1ms]                                                                                                                        
images                  [Status: 301, Size: 237, Words: 14, Lines: 8, Duration: 1ms]
css                     [Status: 301, Size: 234, Words: 14, Lines: 8, Duration: 0ms]
image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 174ms]
license                 [Status: 200, Size: 309, Words: 25, Lines: 157, Duration: 1ms]
video                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
feed                    [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 197ms]
audio                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
admin                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 4ms]
blog                    [Status: 301, Size: 235, Words: 14, Lines: 8, Duration: 0ms]
Image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 198ms]
intro                   [Status: 200, Size: 516314, Words: 2076, Lines: 2028, Duration: 4ms]
rss                     [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 192ms]
login                   [Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 173ms]
readme                  [Status: 200, Size: 64, Words: 14, Lines: 2, Duration: 1ms]
Year201120102009200820072006200520042003200220012000199919981997199619951994199319921991199019891988198719861985198419831982198119801979197819771976197519741973197219711970196919681967196619651964196319621961196019591958195719561955195419531952195119501949194819471946194519441943194219411940193919381937193619351934193319321931193019291928192719261925192419231922192119201919191819171916191519141913191219111910190919081907190619051904190319021901 [Status: 403, Size: 657, Words: 16, Lines: 10, Duration: 1ms]                                                                                                                        
images                  [Status: 301, Size: 237, Words: 14, Lines: 8, Duration: 1ms]
css                     [Status: 301, Size: 234, Words: 14, Lines: 8, Duration: 1ms]
image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 186ms]
license                 [Status: 200, Size: 309, Words: 25, Lines: 157, Duration: 1ms]
video                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
feed                    [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 201ms]
audio                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 1ms]
admin                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
blog                    [Status: 301, Size: 235, Words: 14, Lines: 8, Duration: 0ms]
Image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 185ms]
```
- gonna cut it down. did `sort -u fsocity.dic > ffsociety.dic`. wordcount went from 858160 to 11451.
- did `ffuf -u http://192.168.48.135/FUZZ -w ffsocity.dic` again. results:
```txt

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://192.168.48.135/FUZZ
 :: Wordlist         : FUZZ: /root/projects/mrRobot-1/ffsocity.dic
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
________________________________________________

admin                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 1ms]
audio                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
blog                    [Status: 301, Size: 235, Words: 14, Lines: 8, Duration: 1ms]
css                     [Status: 301, Size: 234, Words: 14, Lines: 8, Duration: 0ms]
feed                    [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 176ms]
images                  [Status: 301, Size: 237, Words: 14, Lines: 8, Duration: 0ms]
image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 194ms]
Image                   [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 193ms]
intro                   [Status: 200, Size: 516314, Words: 2076, Lines: 2028, Duration: 3ms]
license                 [Status: 200, Size: 309, Words: 25, Lines: 157, Duration: 1ms]
login                   [Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 176ms]
readme                  [Status: 200, Size: 64, Words: 14, Lines: 2, Duration: 2ms]
rss                     [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 185ms]
video                   [Status: 301, Size: 236, Words: 14, Lines: 8, Duration: 0ms]
Year201120102009200820072006200520042003200220012000199919981997199619951994199319921991199019891988198719861985198419831982198119801979197819771976197519741973197219711970196919681967196619651964196319621961196019591958195719561955195419531952195119501949194819471946194519441943194219411940193919381937193619351934193319321931193019291928192719261925192419231922192119201919191819171916191519141913191219111910190919081907190619051904190319021901 [Status: 403, Size: 657, Words: 16, Lines: 10, Duration: 3ms]
:: Progress: [11451/11451] :: Job [1/1] :: 202 req/sec :: Duration: [0:00:54] :: Errors: 0 ::
```
