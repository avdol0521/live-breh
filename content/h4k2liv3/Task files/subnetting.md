---
title: subnetting
tags:
  - fetus
---
the process of dividing a network into sub networks hence the name. makes it more manageable and efficient 

read [[IP]] before getting into this 

#### some trivia and terminology to know beforehand:
- modern networks use [[CIDR Notation]] 
- subnet range
- network address (not assigned to any hosts)
- broadcast address 
	- the last address in the subnet, used to send messages to all devices on the subnet at once 
- usable hosts 
	- 2 are removed coz yk network and broadcast address 

## creating a subnet:
### yea:
- each IPv4 has four octets 
	- octets are divided into network and host portions
	- classes: 
		- class A: 8 bit network ID, 24 bit host IDs
			- the first bit of the first octet is always 0 and the remaining 7 are used to determine the network ID
			- default [[subnet mask]]: 255.x.x.x
			- 2^[24] - 2 host addresses
		- class B: 16 bit IDs
			- the first two bits of the first octet are always 10 and the remaining 14 bits are used to determine the network IDs
			- default [[subnet mask]] on this one: 255.255.x.x
		- class C: 24 bit network ID, 8 bit host IDs
			- the first three bits on this are always 110 and the rest of the 21 bits are used to get the network IDs
			- default [[subnet mask]]: 255.255.255.x
		- class D: multicast address
			- [[multi-casting]] 
			- the first 4 bits are always 1110 
			- doesnt have a subnet mask 
			- the IP range is 224.0.0.0 <–> 239.255.255.255
		- class E: reserved
			- reserved for experimental and research purposes
			- IP range is 240.0.0.0 <–> 255.255.255.255
			- doesn't have a subnet mask either
			- the first 4 bits are always 1111 
		- [[classful addressing structure]] 
- 
### example : (4 subnets)
- example network: 10.0.0.0/24
	- /24 is a CIDR notation meaning 24 bits out of the 32 bits of an ip is fixed and the rest of the 8 bits are free for hosts so the total number of IP addresses on the subnet is 2^8 = 64
	- need 4 subnets so i need to borrow 2 bits (2^2)
	- original mask: /24
	- new mask: /26
	- first subnet: 
		- network: 10.0.0.0
		- usable: 10.0.0.1 <--> 10.0.0.62
		- broadcast: 10.0.0.63
	- second subnet:
		- network: 10.0.0.64
		- usable: 10.0.0.65 <--> 10.0.0.62
		- broadcast: 10.0.0.63


- 194.10.20.0/19
	- 11111111:11111111:11100000:00000000
	- 255.255.224.0
	- 00000000:00000000:00100000:00000000
	- 0.0.32.0
	- block size calculation:
		- 256 - 224 = 32
	- network/subnet number calculation:
		- 2^3 = 8 (3 cuz 11100000)
		- 32-19 = 13
		- 2^13 = 8192 (host)
			- subnet host calculation:
				-  194.10.0.0-194.10.31.255
				- 194.10.32.0-194.10.63.255
				- 194.10.64.0-194.10.95.255
				- 194.10.96.0-194.10.127.255
				- 194.10.96.0-194.10.127.255
				- 194.10.96.0-194.10.127.255
				- 194.10.96.0-194.10.123.255
				- 194.10.224.0-194.10.255.255
			- network: 194.10.20.0 
			- broadcast : 194.10.20.
			- usable: 194.10.20.1 <--> 194.10.20.6

- 192.168.10.0/30
	11000000:10101000:00001010:00000000

10.0.2.3/12