---
title: "tcpdump"
tags:
  - fetus
---
## usage:
```sh
tcpdump -i eth0
```
- captures from eth0
#### other switches:

| switch      | syntax/examples      | description                                |
| ----------- | -------------------- | ------------------------------------------ |
| `-i`        | `-i any/eth0`        | what interface to listen on                |
| `-w`        | `-w fileName`        | saves output to specified file             |
| `host`      | `host 192.168.0.7`   | capture traffic to and from specified host |
| `src`       | `src 192.168.0.7`    | capture traffic from specified host        |
| `dst`       | `dst 192.168.0.7`    | capture traffic to specified host          |
| `net`       | `net 192.168.1.0/24` | capture from specified subnet              |
| `port`      | `port 80`            | capture only from specified port           |
| `portrange` | `portrange 0-5000`   | capture based on port range                |
| `tcp`       |                      | capture TCP packets only                   |
| `<service>` | `tcpdump http`       | capture traffic based on service           |
| `-S`        |                      | display entire packet                      |
| `-I`        | `-I wlan0`           | set interface to monitor mode              |
