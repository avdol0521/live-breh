---
title: "kali file perms and stuff"
tags:
  - fetus
---
## perm types:
- `r`- read perm
- `w` - write perm
- `x` - execute perm
## giving ownership to a specific user:
- `sudo chown username path/file`
## giving perms to a group:
- `sudo chgrp groupname file/program`
## checking perms:
- `ls -la`
- explanation:
- ![[file perms and stuff.png]]
	1. file type 
		- d = directory 
		- - = file 
	2. perms on the file for the owner, group and other users in order
		- example:
		- ![[file perms and stuff example.png]]
			- owner has read write and execution perms 
			- group has read and execute perms 
			- other users have the same perms as the group  
	3. file owner 
	4. file creator
	5. file size in bytes 
	6. date and time of last modification or creation
	7. file name
## changing file perms:
- only the root user and owner can change file perms 
- two ways to change perms 
	1. Binary-Octal Method
	2. Symbolic method 
#### Binary-Octal Method: 
![[binary_octal_method.png]]
- easier way to remember (use the 1, 2 4 rule):
	- ![[124ruleExample.png]]
- if we wanna give a file with `rw-r--r--` perms `rwxrwxr-x` perms:
	- `sudo chmod 775 filename`
#### Symbolic Method:
- syntax after `chmod` :
	- u - user 
	- g - group 
	- o - others 
	- - removes a perm 
	- + adds a perm 
	- = sets a perm 
- example:
	- `sudo chmod u-w filename` (removes write perms from user)
	- `sudo chmod u-w,g+x filename` (removes write perms from user and adds execute perms to the group)