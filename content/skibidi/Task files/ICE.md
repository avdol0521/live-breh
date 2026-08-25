---
title: ICE
tags:
  - fetus
---
## nmap results:
- `nmap -Pn -sS -p- -A -T4 10.10.221.210 -oN Ascan.txt`:
```sh
# Nmap 7.95 scan initiated Sat Apr 19 07:58:09 2025 as: /usr/lib/nmap/nmap -Pn -sS -p- -A -T4 -oN Ascan.txt 10.10.221.210
Warning: 10.10.221.210 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.221.210
Host is up (0.21s latency).
Not shown: 65499 closed tcp ports (reset)
PORT      STATE    SERVICE       VERSION
135/tcp   open     msrpc?
139/tcp   open     netbios-ssn?
224/tcp   filtered masqdialer
445/tcp   open     tcpwrapped    Windows 7 Professional 7601 Service Pack 1 tcpwrapped
3389/tcp  open     ms-wbt-server
| ssl-cert: Subject: commonName=Dark-PC
| Not valid before: 2025-04-18T11:42:46
|_Not valid after:  2025-10-18T11:42:46
4162/tcp  filtered omstopology
5357/tcp  open     tcpwrapped
6438/tcp  filtered unknown
7274/tcp  filtered oma-rlp-s
8000/tcp  open     tcpwrapped
12902/tcp filtered unknown
21036/tcp filtered unknown
21220/tcp filtered unknown
24655/tcp filtered unknown
26969/tcp filtered unknown
31583/tcp filtered unknown
36098/tcp filtered unknown
41953/tcp filtered unknown
49152/tcp open     tcpwrapped
49153/tcp open     tcpwrapped
49154/tcp open     tcpwrapped
49158/tcp open     tcpwrapped
49159/tcp open     tcpwrapped
49160/tcp open     tcpwrapped
49753/tcp filtered unknown
50983/tcp filtered unknown
54490/tcp filtered unknown
54614/tcp filtered unknown
54879/tcp filtered unknown
57497/tcp filtered unknown
57971/tcp filtered unknown
58668/tcp filtered unknown
59256/tcp filtered unknown
60250/tcp filtered unknown
61961/tcp filtered unknown
62970/tcp filtered unknown
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port3389-TCP:V=7.95%I=7%D=4/19%Time=68039B12%P=x86_64-pc-linux-gnu%r(Te
SF:rminalServerCookie,13,"\x03\0\0\x13\x0e\xd0\0\0\x124\0\x02\x01\x08\0\x0
SF:2\0\0\0");
Device type: general purpose
Running: Microsoft Windows 2008
OS CPE: cpe:/o:microsoft:windows_server_2008:r2
OS details: Microsoft Windows Server 2008 R2
Network Distance: 10 hops

Host script results:
| smb2-time: 
|   date: 2025-04-19T12:37:23
|_  start_date: 2025-04-19T11:42:45
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   2:1:0: 
|_    Message signing enabled but not required
|_clock-skew: mean: 1h30m54s, deviation: 2h53m13s, median: -9m06s
|_nbstat: NetBIOS name: DARK-PC, NetBIOS user: <unknown>, NetBIOS MAC: 02:46:c2:e0:f6:ff (unknown)
| smb-os-discovery: 
|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)
|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional
|   Computer name: Dark-PC
|   NetBIOS computer name: DARK-PC\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2025-04-19T07:37:23-05:00

TRACEROUTE (using port 256/tcp)
HOP RTT       ADDRESS
1   211.35 ms 10.21.0.1
2   ... 9
10  213.84 ms 10.10.221.210

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sat Apr 19 08:48:19 2025 -- 1 IP address (1 host up) scanned in 3010.38 **seconds**
```
---
- stuff to look into:
	- LSASS
	- msfconsole: getprivs
	- UAC
	- print spooling: spoolsv.exe 
	- meterpreter: load, other extentions
	- password spraying
	- kerberos
	- kiwi golden ticket attack
	- [[MSRDP]]
		- `run post/windows/manage/enable_rdp`
	- how to use and connect to [[MSRDP]] 