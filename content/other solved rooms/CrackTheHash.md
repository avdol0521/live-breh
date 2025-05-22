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