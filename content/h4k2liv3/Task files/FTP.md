---
title: "FTP"
tags:
  - fetus
---
- port: 
	- 21 ([[TCP]]) for control commands 
	- 20 ([[TCP]]) for data transfer
- used to transfer files between clients or client and server 
## usage: 

```sh
ftp IP -a
```
- `-a` uses anonymous login
### checklist:
- Anonymous Login
    - Try logging in with `ftp anonymous` or `ftp user@host`
    - If allowed, check for readable/writable dirs
    - Look for `.php` upload into web-accessible dirs
    
- Weak Credentials / Bruteforce
    - Common creds: ftp:ftp, admin:admin, test:test
    - Use hydra or medusa for quick brute attempts
    - Check for password reuse across users/services
    
- Writable Directories
    - Use `ls -la` and `mkdir`, `put` to test write perms
    - Upload web shells, cron payloads, or `.ssh/authorized_keys`
    - Drop `.htaccess` if Apache is in play (for code execution)
    
- Command Injection via FTP Clients
    - Some old clients mishandle filenames—try payloads in filenames
    - Try `;id` or backticks in file/folder names to see if parsed
    
- FTP to Web Root Pivot
    - Upload into webroot to trigger PHP/RFI shells
    - Look for paths like `/var/www`, `/htdocs`, `/html`
    
- Cleartext Cred Sniffing
    - FTP sends creds in plaintext—sniff with tcpdump or Wireshark
    - Use ettercap or arpspoof to MITM and catch creds
    
- Bounce Attack
    - Abuse PORT command to port-scan internal IPs (FTP bounce)
    - Rare but still fun in older/vulnerable setups
    
- Privilege Escalation via Cron
    - Writable FTP dir + cron running files from it = escalation
    - Upload scripts or binaries named after expected cron targets
    
- Symlink Attack
    - Try creating symlinks to sensitive files (if allowed)
    - Can expose `/etc/passwd`, `/root/.bash_history`, etc.
    
- Version-based CVEs
    - Grab FTP server banner (`220 vsFTPd 2.3.4` etc)
    - Look up for RCEs like vsFTPd backdoor (CVE-2011-2523)
    
- Misconfigured Passive Ports
    - Unfiltered PASV port ranges can allow data channel abuse
    - Firewall misconfigs might expose extra internal info
    
- FTP over TLS Issues (FTPS)
    - Weak cipher suites, broken certs, or fallback to plain FTP
    - Use `openssl s_client` or `nmap --script ssl-enum-ciphers`