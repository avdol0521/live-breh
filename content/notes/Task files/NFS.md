---
title: "NFS"
tags:
  - fetus
---
- port:
	- `2049` for nfs itself
	- `111` for the `rpcbind` or `portmapper` service
- file sharing similar to ftp. relies on [[RPC]]  
- [[NFS enumeration]] 
### checklist: 
- Showmount Recon
    - Run `showmount -e <target>` to list exported directories
    - If exports are world-readable, you might just `mount` and loot freely
    
- Mount Exported Shares
    - Use `mount -t nfs <ip>:/share /mnt/loot` to map NFS to local
    - Check perms, edit/write stuff if allowed—some shares have full access
    
- Root Squashing Disabled
    - If “no_root_squash” is enabled, root on your box = root on the share
    - Drop `authorized_keys` in `/home/user/.ssh/` and get instant access :D
    
- Writable `/etc/` or `/home/`
    - Mounting `/etc`? Replace cron, passwd, or init scripts
    - Mounting `/home`? Add SSH keys, bashrc payloads, etc.
    
- Fake UID / GID Spoofing
    - NFS trusts UID/GID—so create a local user with the same UID as target box's user
    - You’ll inherit their perms on the share—sneaky af
    
- Hidden Files / Dotfiles
    - Check for `.bash_history`, `.ssh/`, `.git/`, `.config/`, `.bak` files
    - Can leak creds, tokens, internal paths
    
- Persist via Mount Abuse
    - Drop payloads or backdoors in shared folders
    - When a cron or script runs on the NFS host, your code executes :)
    
- Binary Replacement
    - If `/usr/bin` or script dirs are shared and writable… overwrite system binaries lol
    - Classic way to get code exec when someone runs legit tools
    
- File Locking Race Conditions
    - Older NFS setups + poor locking = race attack
    - Modify file while it’s being executed—rare but spicy
    
- Data Exfil via Mount
    - Use NFS itself to steal files from the network without tripping outbound rules
    - Mount a remote share on _your_ machine and pull data quietly
    
- Stale File Handles
    - NFS sometimes caches inode refs, even after deletion
    - You might access deleted or moved files via handle snooping tools
    
- Version-Specific Vulns
    - Old NFS (v2/v3) has no encryption or auth
    - v4 adds a bit more security, but version negotiation might let you downgrade