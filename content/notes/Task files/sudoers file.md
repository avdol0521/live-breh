---
title: "sudoers file"
tags:
  - fetus
---
## syntax:
`[user] [host] = ([runas_user]) [commands]`
- [user] : the user or group the rule is for 
- [host] : the host the command will run on (usually set to ALL)
- ([runas_user]) : the user the command can be run as (usually set to ALL as well)
- [commands] : the command or group of commands 
### example: 
```sh
john ALL=(ALL:ALL) ALL

steve ALL=(ALL) NOPASSWD: /usr/bin/apt

mary ALL=(ALL:ALL) /usr/sbin/reboot
```

- john: gets full sudo access 
- steve: can run apt as sudo without being prompted for a pass 
- mary: can do reboot but not other sudo commands 
### shortcut way to add a user to the sudo group:
- `sudo usermod -aG sudo john` 
- then do su to login again to refresh the privilages
### managing groups or aliases:
#### Cmnd_Alias
- used to group commands 
- example:
```sh
Cmnd_Alias NETWORK_CMDS = /sbin/ifconfig, /sbin/ip, /usr/sbin/traceroute

Cmnd_Alias ADMIN_CMDS = /usr/sbin/useradd, /usr/sbin/userdel, /usr/sbin/visudo
```
- then just do `username ALL=(ALL) NOPASSWD: group/aliasname` 