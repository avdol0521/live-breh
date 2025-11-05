---
title: "sshPivoting"
tags:
  - fetus
---
- connect with
```sh
ssh -D 1080 privilege@192.168.80.10
```
- check with `ss -tuln | grep 1080` 
- open a seperate terminal 
```sh
mousepad /etc/proxychains.conf
```
- uncomment `dynamic_chain` at line `10` and comment out `strict_chain` at line `18` 
- add these to the end of the file:
```sh
socks5	127.0.0.1 1080
socks4	127.0.0.1 1080
```