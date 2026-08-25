---
title: "smbclient"
tags:
  - fetus
---
## usage: 
```sh
smbclient -L \\\\ipORhost\\
```
- can do the `sharename` at the end as well
- do `-N` for guest login
- do it without `-L` to get into the share itself
```sh
smbclient -L //10.201.116.243 -U 'svc-admin'
```