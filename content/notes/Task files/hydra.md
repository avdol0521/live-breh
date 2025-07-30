---
title: "hydra"
tags:
  - fetus
---
## usage:
### normal brute:
```sh
hydra -l username -P passlist ssh://IP:PORT
```
- `-l` for known username 
	- `-L` for username list 
- `-P` for pass list 
	- `-p` for known pass 
- `ssh://IP:PORT` is self explanatory
### http post form brute:
```sh
hydra -l USER -P /usr/share/wordlists/rockyou.txt 10.10.120.54 http-post-form "/PAGE_PATH:username=^USER^&password=^PASS^:F=FILTER_WORD"
```
## stuff idk
- Supported Protocols:
	- Asterisk  
	- AFP  
	- Cisco AAA  
	- Cisco auth  
	- Cisco enable  
	- CVS  
	- Firebird  
	- FTP  
	- HTTP-FORM-GET  
	- HTTP-FORM-POST  
	- HTTP-GET  
	- HTTP-HEAD  
	- HTTP-POST  
	- HTTP-PROXY  
	- HTTPS-FORM-GET  
	- HTTPS-FORM-POST  
	- HTTPS-GET  
	- HTTPS-HEAD  
	- HTTPS-POST  
	- HTTP-Proxy  
	- ICQ  
	- IMAP  
	- IRC  
	- LDAP  
	- MEMCACHED  
	- MONGODB  
	- MS-SQL  
	- MYSQL  
	- NCP  
	- NNTP  
	- Oracle Listener  
	- Oracle SID  
	- Oracle  
	- PC-Anywhere  
	- PCNFS  
	- POP3  
	- POSTGRES  
	- Radmin  
	- RDP  
	- Rexec  
	- Rlogin  
	- Rsh  
	- RTSP  
	- SAP/R3  
	- SIP  
	- SMB  
	- SMTP  
	- SMTP Enum  
	- SNMP v1+v2+v3  
	- SOCKS5  
	- SSH (v1 and v2)  
	- SSHKEY  
	- Subversion  
	- TeamSpeak (TS2)  
	- Telnet  
	- VMware-Auth  
	- VNC  
	- XMPP  
