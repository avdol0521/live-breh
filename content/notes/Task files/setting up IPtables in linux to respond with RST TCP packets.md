---
title: "setting up IPtables in linux to respond with RST TCP packets"
tags:
  - fetus
---
`iptables -I INPUT -p tcp --dport <port> -j REJECT --reject-with tcp-reset`