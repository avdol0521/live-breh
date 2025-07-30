---
title: "CrackTheHash"
tags:
  - fetus
---
##### room link - https://tryhackme.com/room/crackthehash
- okayyy gotta crack them hashes. lets crack at it (get it? ¯\\_(ツ)_/¯ ) 
## level 1:
#### hash 1: `48bb6e862e54f2a795ffc4e541caed4d`
- [[hash-identifier]] says its MD5. lets crack it with [[hashcat]] 
```sh
hashcat -m 0 l1h1 /usr/share/seclists/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt
```
- `48bb6e862e54f2a795ffc4e541caed4d:easy` 
- hell yeah cracked 
#### hash 2: `CBFDAC6008F9CAB4083784CBD1874F76618D2A97`
- [[hash-identifier]] says 
	- SHA-1
	- MySQL5 - SHA-1(SHA-1($pass))
- hashcat mode `100` for SHA-1
```sh
hashcat -m 100 l1h2 /usr/share/seclists/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt
```
- `cbfdac6008f9cab4083784cbd1874f76618d2a97:password123` 
- lets gooo 
#### hash 3: `1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032`
- [[hash-identifier]] says
	- SHA-256
	- Haval-256
- [[hashcat]] mode `1400` for an unsalted raw sha256 hash 
```sh
hashcat -m 1400 l1h3 /usr/share/seclists/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt
```
- `1c8bfe8f801d79745c4631d09fff36c82aa37fc4cce4fc946683d7b336b63032:letmein`
- cracked. my dumbass used mode `1470` at first and got confused lol
#### hash 4: `$2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom`
- [[hash-identifier]] gave me nothing. 
- https://hashes.com/en/tools/hash_identifier gave me a possible hash type. its called BlowFish (unix)
- [[hashcat]] mode `3200` for this. lets crack it
- bruh takes so fucking long. im just gonna look it up on https://hashes.com/en/decrypt/hash/?r=7
- `$2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom:bleh`
- hell yeah. feels like cheating. im gonna filter rockyou for 4 letter passes like the hint says
```sh
awk 'length == 4' /usr/share/wordlists/rockyou.txt > rockyou-4.txt
```
	
```sh
hashcat -m 3200 l1h4 rockyou-4.txt
```
- hell yeah actually cracked
#### hash 5: `279412f945939ba78ce0758d3fd83daa`
- [[hash-identifier]] says
	- MD5 
	- Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))
- didnt crack it with MD5 or MD4. the hint says md4 but it cant crack it with any wordlist. they forced my hand here. im just gonna look it up on crackstation
#### hash 6 and 7: 
- `F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85`
- `1DFECA0C002AE40B8619ECF94819CC1B` 
- used [[autoCrack.py]] i made last night. coming in real handy xD
#### hash 8: `$6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02.`
- was taking a really long time. decided to use my main machine for this one 
- `hashcat.exe -m 1800 hash.txt rockyou.txt`:
```sh
$6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02.:waka99
clEnqueueReadBuffer(): CL_OUT_OF_RESOURCES

clEnqueueReadBuffer(): CL_OUT_OF_RESOURCES


Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 1800 (sha512crypt $6$, SHA512 (Unix))
Hash.Target......: $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPM...ZAs02.
Time.Started.....: Thu Jun 05 03:37:44 2025 (12 mins, 29 secs)
Time.Estimated...: Thu Jun 05 03:50:13 2025 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:   190.5 kH/s (8.14ms) @ Accel:64 Loops:512 Thr:256 Vec:1
Speed.#2.........:     3038 H/s (9.06ms) @ Accel:64 Loops:16 Thr:128 Vec:1
Speed.#*.........:   193.5 kH/s
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 2818048/14344384 (19.65%)
Rejected.........: 0/2818048 (0.00%)
Restore.Point....: 557056/14344384 (3.88%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-512
Restore.Sub.#2...: Salt:0 Amplifier:0-1 Iteration:4992-5000
Candidate.Engine.: Device Generator
Candidates.#1....:  ->
Candidates.#2....: walo69 -> wagner19
Hardware.Mon.#1..: Temp: 32c Fan:  0% Util:  3% Core: 210MHz Mem: 405MHz Bus:16
Hardware.Mon.#2..: Temp:  0c Fan:  0% Util: 27% Core:2200MHz Mem:3000MHz Bus:16

Started: Thu Jun 05 03:37:26 2025
Stopped: Thu Jun 05 03:50:14 2025
```
- took about 13 minutes to crash 2.8 mil passes with just the cpu damn. wonder how fast it'll be with the gpu. ill check later
#### hash 9: `e5d8870e5bdd26602cab8dbe07a942c8669e56d6`
- huh the script actually couldnt crack it this time :0
- lets see what went wrong
- [[hash-identifier]] says its SHA1
```sh
╭─[~/projects/crackthehash]─[root@DEMONDAYZ]─[0]─[1782]
╰─[:)] # hashcat -h | grep SHA1                                    
    100 | SHA1                                                       | Raw Hash
    150 | HMAC-SHA1 (key = $pass)                                    | Raw Hash authenticated
    160 | HMAC-SHA1 (key = $salt)                                    | Raw Hash authenticated
```
- huh so theres 2 options for SHA1 actually. im guessing 160 cuz we have a salted hash. gotta add the salt like this: `HASH:SALT` and then feed it to hashcat
- `hashcat.exe -m 160 hash.txt rockyou.txt`:
```sh
Dictionary cache hit:
* Filename..: rockyou.txt
* Passwords.: 14344384
* Bytes.....: 139921497
* Keyspace..: 14344384

e5d8870e5bdd26602cab8dbe07a942c8669e56d6:tryhackme:481616481616

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 160 (HMAC-SHA1 (key = $salt))
Hash.Target......: e5d8870e5bdd26602cab8dbe07a942c8669e56d6:tryhackme
Time.Started.....: Thu Jun 05 04:00:50 2025 (0 secs)
Time.Estimated...: Thu Jun 05 04:00:50 2025 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........: 23327.7 kH/s (0.61ms) @ Accel:512 Loops:1 Thr:32 Vec:1
Speed.#2.........:  4543.6 kH/s (3.90ms) @ Accel:1024 Loops:1 Thr:64 Vec:1
Speed.#*.........: 27871.3 kH/s
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 13041664/14344384 (90.92%)
Rejected.........: 0/13041664 (0.00%)
Restore.Point....: 11632640/14344384 (81.10%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1
Restore.Sub.#2...: Salt:0 Amplifier:0-1 Iteration:0-1
Candidate.Engine.: Device Generator
Candidates.#1....: 7510748 -> 1z6zuz3r
Candidates.#2....: 1COLOMBIA -> 191289071089
Hardware.Mon.#1..: Temp: 32c Fan:  0% Util:  1% Core:2610MHz Mem:10251MHz Bus:16
Hardware.Mon.#2..: Temp:  0c Fan:  0% Util:  0% Core: 600MHz Mem:3000MHz Bus:16

Started: Thu Jun 05 04:00:37 2025
Stopped: Thu Jun 05 04:00:51 2025
```
- nice took 14 seconds to crack it xD