---
title: "manualPingSweep"
tags:
  - fetus
---
```sh
for i in $(seq 254); do ping 10.200.180.${i} -c1 -W1 & done | grep from
```
