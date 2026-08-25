---
title: "Ticket Granting Ticket (TGT)"
tags:
  - fetus
---
- a temp encrypted cred issued by the [[Key Distribution Center (KDC)]] that acts as a master key or auth token that allows the user to request [[Ticket Granting Service (TGS)]] for specific network resources like a file server or application from the [[Ticket Granting Server]] with single sign on, improving security by storing this master key locally
- TGTs have a limited lifetime
- TGTs are encrypted with the user's password
- the [[KRBTGT account]] on a [[Domain Controller (DC)]] is responsible for creating and signing all TGTs with its own password hash
- the TGT includes the session key used to make session ticket requests as part of its encrypted contents
	- since the TGT stores the session key, the KDC doesnt need to store it since it can just recover a copy by decrypting the TGT
- stolen TGTs can lead to [[Pass The Ticket Attack]]s <br>
![[Ticket Granting Ticket (TGT)Explanation.png]]