---
title: "mount"
tags:
  - fetus
---
## usage: 
```
sudo mount -t nfs <target-ip>:/exported/directory /mnt/nfs
```
- needs `sudo` perms to run
- `-t nfs` : specifies the filesystem as [[NFS]] 
- `:/exported/directory` is the shared directory on the server 
- `/mnt/nfs` is there it'll be mounted locally