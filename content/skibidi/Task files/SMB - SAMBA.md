---
title: "SMB"
tags:
  - fetus
---
- server message block
- ports:
	- 139 : [[SMB - SAMBA]] over [[NetBIOS]] 
	- 445 : 
- [[smb enumeration]] 
### checklist:
- Null/Anonymous Access
    - Try `smbclient -L //target -N` or `rpcclient -U "" target`
    - Look for open shares, printer info, usernames, host info
    - Some shares allow full read/write without auth
    
- SMB Share Enumeration
    - Use [[smbclient]], [[enum4linux]], [[crackmapexec]], or [[smbmap]]
    - Look for:
        - Readable shares like `IPC$`, `ADMIN$`, `C$`
        - Writable shares → upload reverse shells, malicious scripts
        - GPP (Group Policy Preferences) XML files with saved creds
    
- Credential Reuse
    - Spray found creds with `crackmapexec smb <target> -u <user> -p <pass>`
    - Reused local admin = lateral movement heaven
    
- SMB Relay Attacks
    - If signing not required, relay NTLM hashes via `ntlmrelayx`
    - Combine with LLMNR/NBNS spoofing (responder, mitm6) for hash capture
    
- Password Spraying
    - Spray common passwords across known usernames
    - Avoid lockouts—slow and rotate usernames
    
- SMB Version / CVEs
    - SMBv1? Try EternalBlue (CVE-2017-0144), WannaCry exploits
    - Identify version with `nmap -p445 --script smb-protocols`
    
- Lateral Movement
    - Use `psexec.py`, `wmiexec.py`, or `smbexec.py` from Impacket
    - Need valid creds and admin access to target
    
- Print Spooler Abuse
    - PrintNightmare (CVE-2021-34527) or `spoolsample` tricks
    - Can lead to RCE or relay attacks if spooler is running
    
- Drop & Execute Binaries
    - Upload .exe or .dll into a writable share
    - Trigger execution via services, scheduled tasks, or tricked users
    
- LSA Secrets & SAM Dumps
    - With SYSTEM or admin: dump hashes from remote registry via secretsdump.py
    - Use `pypykatz` or `mimikatz` to parse
    
- GPP Credential Recovery
    - Old GPP XMLs in SYSVOL contain AES-encrypted passwords
    - Decrypt using known key (MS published it lol)
    
- Signing Required?
    - If not, relay attacks are possible
    - Use `smbclient -m SMB2` or look at `smb-signing-checker`