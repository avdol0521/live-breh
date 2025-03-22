---
title: Common ports and services
tags:
  - fetus
---
## Basics:
- ports are basically gateways identified by a number from 0 to 65,636 thats used by the Transport layer ([[TCP]]/[[UDP]]) to direct network traffic to specific services or apps on a host 
- enables a single device to run a shitton of services at once by associating each service with a unique port 
- ports are also categorized into these ranges:
	- 0 <-> 1023:
		- these are standard ports reserved for really common and widely used protocols and services like [[HTTP]], [[FTP]], [[SMTP]] etc.
	- 1024 <-> 49151:
		- these are registered ports assigned to less common or proprietary apps
	- 49152 <-> 65,535:
		- used for short term use
- a client initiates a connection to a specific service by targeting the IP and the port number the service is running on for example 192.168.0.1:80 for http on my local network 
- dont keep open unmonitored ports. they're a security risk. only open them if necessary for required services. 
- use secure versions of protocols 
## common ports and services:
#### web service related:
- [[HTTP]]
- [[HTTPS]] 
- [[ICMP]] 
#### file transfer related:
- [[FTP]] 
- [[SFTP]] 
- [[NFS]] 
- [[RPC]] 
- [[SMB]] 
#### email service related:
- [[SMTP]] 
- [[POP3]] 
- [[IMAP]] 
#### DNS:
- [[DNS]] 
#### remote access related:
- [[SSH]] 
- [[Telnet]] 
- [[RDP]] 
#### other notable ones:
- [[NTP]] 
- [[SNMP]] 
- [[LDAP]] 
- [[LDAPS]] 