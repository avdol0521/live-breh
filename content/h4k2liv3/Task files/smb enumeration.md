---
title: "smb enumeration"
tags:
  - fetus
---
## how:
- usual ports are 139 or 445
- connect to the SMB service to grab the version from the banner information or just get it from [[nmap]] or a [[metasploit]] auxiliary module

### [[metasploit]] workflow documentation:
	
```
msfconsole
```
	
```
search auxiliary/scanner/smb
```
	
```
use auxiliary/scanner/smb/smb_version
```
	
```c
set rhosts 192.168.33.26
```
	
```
run
```
- output:
```c
[*] 192.168.33.26:139     -   Host could not be identified: Unix (Samba 2.2.1a)
[*] 192.168.33.26:        - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```
### [[smbclient]] workflow documentation: 
	
```
smbclient
```