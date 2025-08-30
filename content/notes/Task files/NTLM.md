---
title: "NTLM"
tags:
  - fetus
---
- port:
- New Technology LAN Manager (NTLM)
- is a suite of microsoft auth procols for windows based networks. particularly for stand alone machines and legacy clients. 
- is outdated and vulnerable to [[NTLM Relay Attack]]s. largely replaced by [[Kerberos]] but still supported for backward compatibility 
- uses a challenge response mechanism to verify user identity
- had to authenticate every client for each connection. kerberos solved this issue by introducing renewable session tickets 