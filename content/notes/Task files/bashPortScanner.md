---
title: "bashPortScanner"
tags:
  - fetus
---
## usage:
```sh
export ip=yourip; for port in $(seq 1 65535); do timeout 0.01 bash -c "</dev/tcp/$ip/$port && echo The port $port is open || echo The Port $port is closed > /dev/null" 2>/dev/null || echo Connection Timeout > /dev/null; done
```
