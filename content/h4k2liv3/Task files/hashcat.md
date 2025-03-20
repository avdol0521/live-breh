---
title: "hashcat"
tags:
  - fetus
---
## usage: 

```
hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
```
- `-m` sets the hash mode. 0 here is MD5 in this case 
- `-a` sets the attack mode
	- `0` is straight mode. uses a wordlist 
	- `1` is combination mode. uses two wordlists 
	- `2` is brute force. uses masks
	- `3` is a hybrid of straight and bruteforce. uses masks AND wordlists. 
- `hash.txt` is the file storing the hashes. can be the hash itself as well 
- `/usr/share/wordlists/rockyou.txt` is the wordlist you wanna use 
- `-D` selects the device to do the hash cracking with. a gpu is preferred 
	- do `-I` to check devices and select the device in the command like `-D 1`