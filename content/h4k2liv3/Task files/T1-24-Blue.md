---
title: Blue
tags:
  - fetus
---
## nmap results:
- `nmap -Pn -sV -sS -O --script vuln 10.10.16.127 -oN Vscan.txt`:
```sh
# Nmap 7.95 scan initiated Thu Apr 17 12:55:52 2025 as: /usr/lib/nmap/nmap -Pn -sV -sS -O --script vuln -oN Vscan.txt 10.10.16.127
Nmap scan report for 10.10.16.127
Host is up (0.17s latency).
Not shown: 991 closed tcp ports (reset)
PORT      STATE SERVICE       VERSION
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds  Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
3389/tcp  open  ms-wbt-server Microsoft Terminal Service
|_ssl-ccs-injection: No reply from server (TIMEOUT)
49152/tcp open  msrpc         Microsoft Windows RPC
49153/tcp open  msrpc         Microsoft Windows RPC
49154/tcp open  msrpc         Microsoft Windows RPC
49158/tcp open  msrpc         Microsoft Windows RPC
49160/tcp open  msrpc         Microsoft Windows RPC
Device type: general purpose
Running: Microsoft Windows 2008|7|Vista|8.1
OS CPE: cpe:/o:microsoft:windows_server_2008:r2 cpe:/o:microsoft:windows_7 cpe:/o:microsoft:windows_vista cpe:/o:microsoft:windows_8.1
OS details: Microsoft Windows Vista SP2 or Windows 7 or Windows Server 2008 R2 or Windows 8.1
Network Distance: 2 hops
Service Info: Host: JON-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_smb-vuln-ms10-061: NT_STATUS_ACCESS_DENIED
| smb-vuln-ms17-010: 
|   VULNERABLE:
|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)
|     State: VULNERABLE
|     IDs:  CVE:CVE-2017-0143
|     Risk factor: HIGH
|       A critical remote code execution vulnerability exists in Microsoft SMBv1
|        servers (ms17-010).
|           
|     Disclosure date: 2017-03-14
|     References:
|       https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-0143
|_      https://technet.microsoft.com/en-us/library/security/ms17-010.aspx
|_samba-vuln-cve-2012-1182: NT_STATUS_ACCESS_DENIED
|_smb-vuln-ms10-054: false

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Thu Apr 17 13:03:06 2025 -- 1 IP address (1 host up) scanned in 433.33 seconds
```
- ran `ms17_010` and got the shell as admin 
- did `dir C:\flag*.txt \s \b` to find all the flags 
---
- stuff to look into:
	- registry, NTFS perms, UAC and service model 
	- cmdlets, scripting, remoting (WinRM), how attackers use PS for post exploitation 
	- [[SMB]], share misconfigs, Null SMB sessions, impacket 
	- Active directory fundamentals
		- domains, forests, trusts, users/groups, GPOs and how Kerberos/LDAP fit together
	- windows enum:
		- whoami
		- WMIC
		- PowerView
		- bloodhound
	- SUID equivilants for priv esc like weak service perms, Unquoted Paths, DLL hijacks, registry ACLs
	- persistance mechanisms:
		- Practice startup folder, scheduled tasks, WMI event subscription, Run keys and service creation 
	- lateral movement:
		- explore Pass-the-Hash/Pass-the-Ticket, PS-Remoting, WMI, RDP and SMB relay
	- windows exploit dev and public e
	- powershell
	- 