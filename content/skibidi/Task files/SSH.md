---
title: "SSH"
tags:
  - fetus
---
- port: 22 ([[TCP]])
- gets you secure command line access and data tunneling
## usage:
```sh
ssh uname@IP
```

## ssh tunneling / port forwarding:
#### ssh port forwarding
```sh
ssh -L 8000:172.16.0.10:80 user@172.16.0.5 -fN
```
- `-L` forwards the local `8000` port and binds it to `172.16.0.10:80` so we can access the port locally by doing `localhost:8000` :)
- `-fN` 
	- `-f` tells ssh to immediately background the terminal 
	- `-N` tells ssh that it doesnt need to execute any commands. just setup the connection
#### ssh proxy
```sh
ssh -D 1337 user@172.16.0.5 -fN
```
- :v
#### ssh reverse proxy:
```sh
ssh -R 1337 user@attackerIP -fN
```
## file/dir transfer:
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
## ssh keygen
```sh
ssh-keygen
```
- will create a pub and private key. append the pubkey to `~/.ssh/authorized_keys` of the user the key is for 
	- prepend this if its for reverse connections to the attacker machine for proxying so the user cant get a shell `command="echo 'This account can only be used for port forwarding'",no-agent-forwarding,no-x11-forwarding,no-pty` 
#### converting ssh keys to .ppk for PuTTY ssh client like [[plink.exe]]:
- install `putty-tools` by doing `apt install putty-tools` first
```sh
puttygen keyfile -o outputKeyfile.ppk
```
## checklist:
- 5.6.0 and 5.6.1 have a backdoor in it
- Weak Credentials / Bruteforce
    - Try default creds like `admin:admin`, `root:toor`
    - Use tools like `hydra`
- SSH Key Leakage
    - Look for private keys (`id_rsa`, `.pem`, `.ppk`) in public directories or Git repos
    - Use `ssh-keygen -y` to derive pubkey from leaked private key
    - Try key-based login with `ssh user@host -i key`
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
    - Known bugs in OpenSSH, Dropbear
    - Look for DoS, info leak, or RCE vectors
- Root Login Enabled
    - Check if `PermitRootLogin yes` is active
    - Try root password or authorized key
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
    