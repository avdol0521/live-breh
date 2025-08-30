---
title: "Kerberos"
tags:
  - fetus
---
- port: 
	- 88 ([[TCP]]/[[UDP]])
		- clients attempt UDP first by default. kerberos clients send request to the [[Key Distribution Center (KDC)]] on this port
	- 464 ([[TCP]]/[[UDP]])
		- dedicated to kerberos password change operations
- AD uses [[Kerberos]] as its default auth mechanism to verify users and computers on a network. 
- provides single sign on (SSO) capabilities
- kerberos uses tickets and secret key cryptography to authenticate users to DCs which act as [[Kerberos Distribution Centers (KDC)]] 
	- this ticket based system removes the need for sending passwords over the network and allows for efficient repeated access for the ticket's duration unlike older protocols like [[NTLM]] 