---
title: "linux file system and stuff"
tags:
  - fetus
---
## file system 
## interesting files 
#### /etc/passwd
- dummy entry for injection modification: (pass is `root`)
```c
vorp:$6$THM$.u6O2bkJZ5pmBCH0ZfDsLOfnkzL.bM0ovT5In4hDyarDNjGkWPXNFqGN4ZdQxmi5uV802vW0K17wGrxu5dD9f.:0:0:root:/root:/bin/bash
```
- example entry:
```c
root:x:0:0:root:/root:/usr/bin/zsh
```
- structure:
	- root
		- uname
	- x
		- password hash. redacted cuz modern systems store the hashes in /etc/shadow now. most linux variants still check passwd for hashes tho so a writable passwd file = priv esc
		- modern linux systems use SHA-512 for password hashes
		- do `openssl passwd -6 --salt salt "PASSWORD"` to generate a pass (see [[openssl toolkit]] for more)
	- 0
		- uid
	- 0
		- gid
	- root
		- description. can be left blank
	- /root
		- home dir
	- /usr/bin/zsh
		- login shell