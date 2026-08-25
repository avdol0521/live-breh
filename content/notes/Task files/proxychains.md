---
title: "proxychains"
tags:
  - fetus
---
## usage:
- just prepend `proxychains` to commands to force it through the proxy like so:
```sh
proxychains nc 192.168.20.10 80
```

## config file:
- looks for the config file in the following order:
	- `./proxychains.conf`
	- `~/.proxychains/proxychains.conf`
	- `/etc/proxychains.conf`
- a clean copy of the conf file can be downloaded from here: https://raw.githubusercontent.com/haad/proxychains/master/src/proxychains.conf 
## misc info:
- scans will be _extremely_ slow when doing it through proxychains
	- try to get active hosts and open ports through LOLBAS and use nmap through proxychains to then do deeper scans on specific stuff
- no SYN/UDP scans or [[ICMP]] echo packets. use `-Pn` to prevent nmap from trying at all
- comment out `proxy_dns` or it can crash nmap scans 