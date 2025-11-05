---
title: "metasploit database management"
tags:
  - fetus
---
## initialization:
```sh
systemctl start postgresql
msfdb init
```

- open [[msfconsole]]
- check db status
```sh
db_status 
```
- should give an output like this:
```c
[*] Connected to msf. Connection type: postgresql.
```

## workspaces
- check workspace with `workspace`
- add or remove workspaces with `workspace -a workspaceName` and `workspace -d workspaceName` respectively
- switch workspaces with `workspace workspaceName`