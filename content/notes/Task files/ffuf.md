---
title: "ffuf"
tags:
  - fetus
---
## usage: 
#### normal dirbusting:

```sh
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://10.0.2.6/FUZZ
```
- `-w` specifies the wordlist to use 
- `-u` specifies the url 
- `FUZZ` specifies where to fuzz from 
#### [[Subdomain Enumeration]]:
```sh
ffuf -u http://cyprusbank.thm/ -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-110000.txt -H "Host:FUZZ.cyprusbank.thm" -fw 1
```
- `-H` specifies a custom header, in this case the `Host` header 
- `-fw 1` filters by the amount of words in response. used it cuz otherwise the server spits out nothing and every subdomain on the wordlist shits out a false positive