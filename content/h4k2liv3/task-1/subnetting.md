the process of dividing a network into sub networks hence the name. makes it more manageable and efficient 

read [[IP]] before getting into this 

#### some trivia and terminology to know beforehand:
- there used to be classes (A, B, C) based on the first few bits of the IP 
- modern networks use CIDR (Classless Inter domain routing) (idk what that is ill look into it later)
- subnet range
- network address (not assigned to any hosts)
- broadcast address 
	- the last address in the subnet, used to send messages to all devices on the subnet at once 
- usable hosts 
	- 2 are removed coz yk network and broadcast address 

## creating a subnet:
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
- 194.10.20.0/29
- 32-29 = 3
- 2^3 = 8 
- network: - 194.10.20.0 
- broadcast : - 194.10.20.7
- usable: 194.10.20.1 <--> 194.10.20.6