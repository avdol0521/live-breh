---
title: subnetting
tags:
  - fetus
---
# NEW
## the what and why
What even is Subnetting? And why do we do it? Subnetting is basically the process of dividing a larger network into smaller ones. But now a question arises. why do we even need to divide a network into subnets?

















# REDUNDANT
the process of dividing a network into sub networks hence the name. makes it more manageable and efficient 

read [[IP]] before getting into this 
and terminology to know beforehand:
- modern networks use [[CIDR Notation]] 
- network bits stay unaffected
- subnet range
- network address (not assigned to any hosts)
- broadcast address 
	- the last address in the subnet, used to send messages to all devices on the subnet at once 
- usable hosts 
	- 2 are removed coz yk network and broadcast address 

### creating a subnet:
### yea:
### 192.168.72.0 
### 192.168.72.255
### 1100 0000 . 1010 1000 . 0011 1010 . 0000 0000
- unique network address 
- hosts 
- broadcast ID
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
### examples:

- class C example:
	- the first 3 octets remain the same cuz class C after all

| **network bits** | **bits borrowed<br>($n$)** | **subnets <br>($2^n$)** | **subnet mask** | **host bits <br>($m$)** | **hosts per subnet <br>($2^m$$- 2$)** | subnet | block size |
| :--------------: | :------------------------: | :---------------------: | :-------------: | :---------------------: | :-----------------------------------: | ------ | ---------- |
|        24        |             0              |            1            |  255.255.255.0  |            8            |                  254                  |        | 255        |
|        25        |             1              |            2            | 255.255.255.128 |            7            |                  126                  |        |            |
|        26        |             2              |            4            | 255.255.255.192 |            6            |                  62                   |        |            |
|        27        |             3              |            8            | 255.255.255.224 |            5            |                  30                   |        |            |
|        28        |             4              |           16            | 255.255.255.240 |            4            |                  14                   |        |            |
|        29        |             5              |           32            | 255.255.255.248 |            3            |                   6                   |        |            |
|        30        |             6              |           64            | 255.255.255.252 |            2            |                   2                   |        |            |
|                  |                            |                         |                 |                         |                                       |        |            |
	- /31 is used for point to point links like router connections. but its unusable for hosts since theres only 2 IPs
	- /32 is used to identify a single device

- class B example:
	- the first 2 octets stay the same 

| **network bits** | **bits borrowed<br>($n$)** | **subnets <br>($2^n$)** |   **subnet mask**   | **host bits<br> ($m$)** | **hosts per subnet <br>($2^m$$- 2$)** | subnet | block size |
| :--------------: | :------------------------: | :---------------------: | :-----------------: | :---------------------: | :-----------------------------------: | ------ | ---------- |
|        16        |             0              |            1            |     255.255.0.0     |           16            |                 65534                 |        |            |
|        17        |             1              |            2            |    255.255.128.0    |           15            |                 32766                 |        |            |
|        18        |             2              |            4            |    255.255.192.0    |           14            |                 16382                 |        |            |
|        19        |             3              |            8            |    255.255.224.0    |           13            |                 8190                  |        |            |
|        20        |             4              |           16            |    255.255.240.0    |           12            |                 4094                  |        |            |
|        21        |             5              |           32            |    255.255.248.0    |           11            |                 2046                  |        |            |
|        22        |             6              |           64            |    255.255.252.0    |           10            |                 1022                  |        |            |
|        23        |             7              |           128           |    255.255.254.0    |            9            |                  510                  |        |            |
|        24        |             8              |           256           |    255.255.255.0    |            8            |                  254                  |        |            |
|        25        |             9              |           512           | 255.255.255.128<br> |            7            |                  126                  |        |            |
|        26        |             10             |          1024           |   255.255.255.192   |            6            |                  62                   |        |            |
|        27        |             11             |          2048           |   255.255.255.224   |            5            |                  30                   |        |            |
|        28        |             12             |          4096           |   255.255.255.240   |            4            |                  14                   |        |            |
|        29        |             13             |          8192           |   255.255.255.248   |            3            |                   6                   |        |            |
|        30        |             14             |          16384          |   255.255.255.252   |            2            |                   2                   |        |            |
- class A example:
	- only the first octet stays the same 

| **network bits** | **bits borrowed<br>($n$)** | **subnets ($2^n$)** |   **subnet mask**   | **host bits<br> ($m$)** | **hosts per subnet <br>($2^m$$- 2$)** | subnet | block size |
| :--------------: | :------------------------: | :-----------------: | :-----------------: | :---------------------: | :-----------------------------------: | ------ | ---------- |
|        8         |             0              |          1          |      225.0.0.0      |           24            |                                       |        |            |
|        9         |             1              |          2          |     225.128.0.0     |           23            |                                       |        |            |
|        10        |             2              |          4          |     225.192.0.0     |           22            |                                       |        |            |
|        11        |             3              |          8          |     225.224.0.0     |           21            |                                       |        |            |
|        12        |             4              |         16          |     225.240.0.0     |           20            |                                       |        |            |
|        13        |             5              |         32          |     225.248.0.0     |           19            |                                       |        |            |
|        14        |             6              |         64          |     225.252.0.0     |           18            |                                       |        |            |
|        15        |             7              |         128         |     225.254.0.0     |           17            |                                       |        |            |
|        16        |             8              |         256         |     255.255.0.0     |           16            |                 65534                 |        |            |
|        17        |             9              |         512         |    255.255.128.0    |           15            |                 32766                 |        |            |
|        18        |             10             |        1024         |    255.255.192.0    |           14            |                 16382                 |        |            |
|        19        |             11             |        2048         |    255.255.224.0    |           13            |                 8190                  |        |            |
|        20        |             12             |        4096         |    255.255.240.0    |           12            |                 4094                  |        |            |
|        21        |             13             |        8192         |    255.255.248.0    |           11            |                 2046                  |        |            |
|        22        |             14             |        16384        |    255.255.252.0    |           10            |                 1022                  |        |            |
|        23        |             15             |                     |    255.255.254.0    |            9            |                  510                  |        |            |
|        24        |             16             |                     |    255.255.255.0    |            8            |                  254                  |        |            |
|        25        |             17             |                     | 255.255.255.128<br> |            7            |                  126                  |        |            |
|        26        |             18             |                     |   255.255.255.192   |            6            |                  62                   |        |            |
|        27        |             19             |                     |   255.255.255.224   |            5            |                  30                   |        |            |
|        28        |             20             |                     |   255.255.255.240   |            4            |                  14                   |        |            |
|        29        |             21             |                     |   255.255.255.248   |            3            |                   6                   |        |            |
|        30        |             22             |                     |   255.255.255.252   |            2            |                   2                   |        |            |


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
	- network bits: 30
		- borrowed bits = 30-24 = 6
		- subnets: $2^{6}$ = 64
	- host bits: 2
		- hosts per subnet: $2^2 - 2 = 2$ 
	- subnet mask: 
		- 255.255.255.252
		- subnet: 0.0.8.0
		- block size: 256 - 252 = 4
		- subnets:
			- subnet-1: 192.168.10.0/30
				- network: 192.168.10.0
				- hosts: 192.168.10.1 - 192.168.10.2
				- broadcast: 192.168.10.3
			- subnet-2: 192.168.10.4/30
				- network: 192.168.10.4 
				- hosts: 192.168.10.5 - 192.168.10.6
				- broadcast: 192.168.10.7
			- and so on until the 64th subnet 
- 10.0.2.3/12
	- network bits: 12 
		- borrowed bits: 12 - 8 = 4
		- subnets: $2^{4} = 16
	- 

- example network: 10.0.0.0/24 and we wanna make 4 subnets out of it
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









### GET BITS FROM CIDR NOTATION 
### IDENTIFY WHICH OCTATE YOU'RE WORKING WITH
### GET SUBNET MASK 
### GET BLOCK SIZE (256 - OCTATE VALUE)
### GET VALID HOST AMOUNT (BLOCK SIZE - 2)
### IDENTIFY SUBNETS

### 10.0.0.0
### 10.255.255.255


### 10.0.2.3/12

### 1111 1111 . 1111 0000 . 0000 0000 . 0000 0000
### SUBNET MASK - 255.240.0.0
### block size 256 - 240 = 16 
### Borrowed Bits - 4 
### subnet amount : $2^{4}$ = 16 subnets
### possible host amount per subnet : $2^{host-bit}$ = $2^{4}$ = 16 
### valid host amount = possible amount - 2 = 14
## first subnet: 
##### network ID 10.0.0.0 
##### valid host range: 10.0.0.1 - 10.15.255.254
##### broadcast ID 10.15.255.255
## 2nd subnet: 
#### network ID: 10.16.0.0
##### valid host range: 10.16.0.1 - 10.31.255.254
##### broadcast ID: 10.31.255.255
## 3rd subnet: 
##### network ID: 10.32.0.0
##### valid host range: 10.32.0.1 - 10.47.255.254
##### broadcast ID: 10.47.255.255
