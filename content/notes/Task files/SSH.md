---
title: "SSH"
tags:
  - fetus
---
- port: 22 ([[TCP]])
- gets you secure command line access and data tunneling
## file/dir transfer
- `rsync` is another tool. will look into it later
#### file transfer
- local to remote:
```sh
scp /path/to/local/file.txt username@remote_IpORhost:/path/to/remote/destination/
```
- remote to local:
```sh
scp username@remote_IpORhost:/path/to/remote/file.txt /path/to/local/destination/
```
#### recursive dir transfer
- local to remote:
```sh
scp -r /path/to/local/directory/ username@remote_host:/path/to/remote/destination/
```
- remote to local:
```sh
scp -r username@remote_host:/path/to/remote/directory/ /path/to/local/destination/
```
## depricated algorythm fix:
```sh
ssh user@IP -oHostKeyAlgorithms=+ssh-rsa
```
## checklist:
- Weak Credentials / Bruteforce
    - Try default creds like `admin:admin`, `root:toor`
    - Use tools like `hydra`, `ncrack`, `patator`
    - Check `sshd_config` for `PermitRootLogin`, `AllowUsers`
    
- SSH Key Leakage
    - Look for private keys (`id_rsa`, `.pem`, `.ppk`) in public directories or Git repos
    - Use `ssh-keygen -y` to derive pubkey from leaked private key
    - Try key-based login with `ssh user@host -i key`
    
- Agent Forwarding Abuse
    - Compromised hosts may forward agents—check `SSH_AUTH_SOCK`
    - Use `ssh-add -l` to list loaded keys
    - Pivot using `ssh -A` if forwarding is allowed
    
- User Enumeration
    - Use response differences to check valid usernames
    - Compare "Permission denied" vs "No such user"
    - Use timing attacks if responses are identical
    
- Port Forwarding / Tunneling
    - Use `ssh -L local:remote` for local forwarding
    - Use `ssh -R remote:local` for reverse shell tunnels
    - Use `ssh -D` for dynamic SOCKS proxy
    
- Shell Escape via Command Restriction
    - Bypass limited shells like `git-shell` or `scp-only`
    - Abuse `scp -S` to chain commands
    - Exploit Git hooks or writable scripts
    
- CVE / Version-Based Vulns
    - Check OpenSSH version from banner or `nmap`
    - Known bugs in OpenSSH, Dropbear, etc.
    - Look for DoS, info leak, or RCE vectors
    
- Root Login Enabled
    - Check if `PermitRootLogin yes` is active
    - Try root password or authorized key
    - Dangerous if exposed to public net
    
- SSH Config Hijacking
    - Writable `~/.ssh/authorized_keys` = instant access
    - Hijack `~/.ssh/config` for proxying or forced commands
    - Set proper perms (`chmod 600`) to avoid detection
    
- Old Algorithms / Ciphers
    - Use `ssh -vv` or `nmap --script ssh2-enum-algos`
    - Watch for deprecated stuff like `cbc`, `md5`, or `group1-sha1`
    - Possible downgrade or weak cipher exploitation
    
- Abuse `.bashrc` / `.profile`
    - Inject payloads that trigger on login
    - Great for persistence after SSH access
    - Can also be used for traps on honeypots
    
- Sudo Abuse Post-SSH
    - Run `sudo -l` to list allowed commands
    - No-password binaries = privilege escalation
    - Use GTFOBins to escape limited environments
    - 