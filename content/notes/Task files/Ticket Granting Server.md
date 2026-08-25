---
title: "Ticket Granting Server (TGS)"
tags:
  - fetus
---
- the server responsible for issuing [[Ticket Granting Service (TGS)]] to users. usually the [[Key Distribution Center (KDC)]] 
- to request a [[Ticket Granting Service (TGS)]] users send their Principal name and a timestamp encrypted with the session key, along with the [[Ticket Granting Ticket (TGT)]] and the [[Service Principal Name (SPN)]] which will indicate what service from which server we need to access 
- the [[Key Distribution Center (KDC)]] will then send a TGS along with a Service Session Key which we'll need to authenticate to the service we wanna access 
- the TGS stores a copy of said key inside it just like the TGT <br>
![[Ticket Granting ServerTGSgrantingFlow.png]]
- both of those can then be used to authenticate and establish a connection to the service we want <br>
![[Ticket Granting ServerTGSuseFlow.png]]
