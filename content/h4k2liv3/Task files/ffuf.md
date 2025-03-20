---
title: "ffuf"
tags:
  - fetus
---
## usage: 

```zsh title:usage fold
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://10.0.2.6/FUZZ
```
- `-w` specifies the wordlist to use 
- `-u` specifies the url 
- `FUZZ` specifies where to fuzz from 