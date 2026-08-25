---
title: "RDP"
tags:
  - fetus
---
- port: 3389 ([[TCP]])
- gets you remote desktop access to windows systems
- stands for Remote Desktop Protocol
## checklist:
- Weak Credentials / Bruteforce
    - Spray with `hydra`, `ncrack`, or `xfreerdp` + wordlist
    - Watch out for lockout policies or account lock triggers
    
- NLA (Network Level Authentication) Bypass
    - Some older boxes or CVEs (e.g., BlueKeep, CVE-2019-0708) allow bypassing auth entirely
    - BlueKeep gives full RCE via malformed RDP packets
    
- Clipboard / Drive Redirection
    - Once in, exfil using copy-paste or mapped drives
    - Try RDP clients with `/drive:` or clipboard sync features to pull loot
    
- DLL Hijacking via Shared Folders
    - Drop a malicious DLL in a shared folder and trigger an app to load it
    - Works well if you have partial file access or user drops your DLL somewhere dumb
    
- Credential Dumping
    - Post-login, run tools like `mimikatz`, `lsa secrets`, or `reg save` + offline parsing
    - RDP often lands you in a juicy user context, sometimes even SYSTEM
    
- Lateral Movement
    - Use credentials or tokens to pivot via `PsExec`, `wmiexec`, `RDP`, or `WinRM`
    - Check `mstsc` recent connections, cached creds, RDP history
    
- Session Hijacking
    - If another user is logged in, `tscon` lets you hijack their session:
        - `tscon <session id> /dest:console`
    
- Screenloggers & Keyloggers
    - Drop tools like `screenlogger.exe` or setup auto-start registry keys
    - Useful if you want creds or screenshots over time
    
- RDP Tarpit / Honeypot Detection
    - Watch for weird latency, pixel-perfect login screens, or lack of clipboard sync
    - Tools like RDPY or Cowrie might be tricking you
    
- RDP Client Vulns
    - Some RDP clients (esp. old FreeRDP or rdesktop) have RCE bugs
    - Be careful when connecting _to_ shady boxes—they can reverse the shell :)
    
- Cached Credentials Abuse
    - Windows caches creds for fast login—dump `HKLM\SYSTEM\CurrentControlSet\Control\Lsa`
    - Use tools like `creddump`, `secretsdump.py` for offline loot
    
- MS-RDP HTML5 Clients
    - Stuff like Guacamole, FreeRDP-Web, etc. might be running as web interfaces
    - Check for default creds, XSS, or unauth RDP launches
    
- Firewall or NAC Bypass
    - Some RDP servers accept connections only from internal IPs
    - Try tunneling (e.g., `chisel`, `ssh -D`, `ngrok`) to bounce in