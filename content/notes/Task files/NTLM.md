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
- had to authenticate every client for each connection. kerberos solved this issue by introducing renewable session tickets <br>
![[NTLMauthFlow.png]]
- the image describes the auth flow when a [[Domain Controller (DC)]] is involved because of a domain account being used. if a local account is used the server doesnt need to interact with the DC at all since the hash is stored locally on its SAM 