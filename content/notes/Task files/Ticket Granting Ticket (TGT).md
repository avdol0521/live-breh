---
title: "Ticket Granting Ticket (TGT)"
tags:
  - fetus
---
- a temp encrypted cred issued by the [[Key Distribution Center (KDC)]] that acts as a master key or auth token that allows the user to request [[service tickets]] for specific network resources like a file server or application from the [[Ticket Granting Server (TGS)]] with single sign on, improving security by storing this master key locally
- TGTs have a limited lifetime
- TGTs are encrypted with the user's password
- the KRBTGT account on a [[Domain Controller (DC)]] is responsible for creating and signing all TGTs
- stolen TGTs can lead to [[Pass The Ticket Attack]]s