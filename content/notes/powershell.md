---
title: "powershell"
tags:
  - fetus
---
## user password reset + force reset at next logon
```powershell
Set-ADAccountPassword sophie -Reset -NewPassword (Read-Host -AsSecureString -Prompt 'New Password') -Verbose
```

```powershell
Set-ADUser -ChangePasswordAtLogon $true -Identity sophie -Verbose
```
## force GPO Sync immediately (local machine)
```powershell
gpupdate /force
```