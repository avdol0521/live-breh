---
title: "rustscan"
tags:
  - fetus
---
## usage:
```sh
rustscan -a IP --ulimit 5000
```

```sh
rustscan -a 10.48.156.216 --ulimit 5000 -- -T4 -A -oN Ascan.txt
```
- `--` seperates rustscan flags from nmap flags 