---
title: "windows file system"
tags:
  - fetus
---
- `C:\Windows` - stores the windows OS itself
	- the env var for the windows directory is `%windir%` (do `set` to see all env vars)
- `C:\Windows\System32` - holds critical OS files 
	- common file types include DLL (Dynamic Link Library) and EXE among others
	- `C:\Windows\System32\Drivers` - contains SYS files for hardware drivers
	- `C:\Windows\System32\Config` stores system wide [[Windows Registry]] files
- `C:\Users` - contains the user profile folders much like linux's `home` directory
	- the profile folder only gets created upon login
	- open [[lusrmgr (Local Users and Groups Management)]] to see in more detail
	- each user profile will have the same folders. some of em are the usual Desktop, Documents, Downloads, Music, Pictures etc 