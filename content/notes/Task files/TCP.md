---
title: TCP
tags:
  - fetus
---
- for reliable, connection oriented data transmission where data integrity and order are essential, for example [[HTTP]], [[FTP]], [[SMTP]] etc.
- does a [[Three Way handshake]] to establish a connection between clients or a client and a server
- see [skibidi](https://walid-mahmoud.medium.com/osi-model-layer-4-tcp-3-way-handshake-108e60b8d2c8#:~:text=The%20Transmission%20Control%20Protocol%20(TCP,a%20client%20and%20a%20server.) for more in depth documentation
#### TCP flags:
- SYN : initiates a connection and synchronises sequence numbers
- ACK : confirms receipt of packets
- FIN : terminates a connection
- RST : tells the client that the port is closed
	- [[setting up IPtables in linux to respond with RST TCP packets]] 
- gonna dig into these flags later:
	- PSH 
	- URG 
	- ECN-Echo
	- Nonce
	- CWR