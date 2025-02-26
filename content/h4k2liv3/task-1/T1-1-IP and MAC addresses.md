---
title: IP and MAC address
tags:
  - fetus
---
both are used to identify devices but have different use cases. ill go into in depth discussion on what they are into two seperate files so i can reference them in other files 
- [[IP]] 
- [[MAC]]  
#### how they interact with eachother:
- [[ARP]] (Address resolution protocol):
	- [[ARP]] maps an IP to its corresponding MAC address on IPv4 networks. when a device needs to communicate with another device on a local network it broadcasts an ARP request and the device with the matching IP responds with its MAC address 
	- [[ND]] (neighbor discovery): similar shit just for IPv6
#### differences:
- IP addresses are global identifiers used to communicate between networks while MAC addresses are local identifiers used to communicate directly between devices on a local network.
- IP addresses can change but MACs cant (they can just usually they dont coz the usual normie user doesnt need to change it like ever)