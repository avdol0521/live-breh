---
title: "sshuttle"
tags:
  - fetus
---
- simulates a vpn through a tunnel through ssh. requires access through ssh and only works for linux targets + python needs to be installed on the server (a static copy of python can be uploaded if it isnt there already) :/ but good option when its viable
## installation
```sh
apt install sshuttle
```
## usage:
```sh
sshuttle -r uname@IP subnet
```

```sh
sshuttle -r user@address --ssh-cmd "ssh -i id_rsa" subnet
```
- `subnet` is the internal subnet we wanna access 
- sshuttle might die (broken pipe error, error code 255) if its part of the subnet we're tryna access. use `-x ownIP` at the end in that case. (`ownIP` is the jump host's own ip)

```sh
sshuttle -r uname@IP -N 
```
- `-N` tries to determine the subnets based on the compromised server's own routing table. might not always be successful 