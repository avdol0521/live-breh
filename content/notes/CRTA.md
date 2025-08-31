---
title: "CRTA"
tags:
  - fetus
---
- target: adversary TTPs  
- [[CRTA-stuff to look into]] 
# fundamentals
## whats a TTP
- basically how a specific / specific group of threat actors also known as APT (Advanced Persistent Threat)s behave. 
- TTP is an accronym for Tactics, Techniques and Procedures
	- Tactics
		- overall goal of an attack like stealing data or disrupting a system 
	- Techniques 
		- methods to achieve that goal like using phishing mails or exploiting a vuln 
	- Procedures
		- the detailed specific steps taken to execute a technique like the exact steps in a phishing campaign
## whats red teaming
- objectives
	- identify misconfigs and vulns to get critical/sensitive assets and data
	- testing the targated orgs detection and response capabilities 
- is quiet and stealthy
	- red teams are trained to elude detection from stuff like (in terms of physical red teaming techniques):
		- CCTVs
		- Keypad entry locks
		- wireless/video intercoms
		- motion/sensor detectors
		- single/double deadbolts
		- door and window locks 
		- steel security doors 
		- remote entry gates 
- behaves and attacks similarly to real threat actors
	- RT simulation - copy techniques of threat actors
		- attacks exactly like a specific threat group/APT based on threat intel
	- RT emulation - mimics behaviour of threat actors 
		- attacks as a threat group. doesnt matter what APT uses what TTP. is dynamic and changes tactics based on the situations at hand like a real threat group 
## pentesting vs red teaming 

| penetration testing                                                                                                                                                                        | red teaming                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| very limited scope like one or two<br>boxes or networks. doesnt test where<br>it isnt told to and makes assumptions<br>about the environment                                               | scope is huge. usually a specific part or<br>an entire organization. tests everything<br>and tries to compromise everything. <br>makes no assumptions and changes<br>TTPs whenever needed |
| is an attack against hosts, networks or<br>applications to measure and identify<br>risks associated with the exploitation<br>of a target environment. emphasizes<br>reducing exposed vulns | basically simulates real world TTPs used<br>by actual threat actors with a goal in<br>mind. assesses how well the detection<br>and defense capabilities of the org.                       |
| uses tools and stuff currently thats <br>currently available and isnt that upto<br>date                                                                                                    | implements the latest tools, exploits<br>and vulns and is constantly researching<br>for new ones to implement                                                                             |
## red team attack lifecycle
- has 6 phases
	- ==extensive OSINT== 
		- gathers extensive amounts of information about the target to map the entire attack surface and identify weak points and sensitive info that can be used for further exploitation purposes
		- platforms where employees are like social media are generally the primary focus in this phase 
	- ==initial access and execution==
		- uses the identified entry vectors in the previous phase to get a foothold in the internal network. can be through anything like hosted remote services, web misconfigs etc it really depends on the kind of tech stack the org uses. execution in this case is attacker controlled code running on the target machine
	- ==persistence and privEsc==
		- keeping reliable access to compromised systems across restarts and privEsc :v
	- ==lateral movement with defensive evasion==
		- lateral movement is basically moving from a compromised machine to another machine within the same network as the original comprimised machine. can be done through tools, service exploitation or internal phishing and legit creds/native network and OS tools if being stealthy is a concern
		- defensive evasion is self explanatory :v can be done thorugh obfuscating scripts using packers, using trusted processes, disabling security software etc
	- ==discovery, data collection==
		- collects sensitive user/financial data and creds and does file and directory discovery to identify and map out the internal network further and get an idea of the internal network architecture
		- can collect data from anywhere such as user clipboards to archives. adversaries usually pack (compress and encrypt) the data prior to exfiltration once the collection has been done in this stage
	- ==data exfiltration and high level persistence==
		- basically stealing the collected data
- look at this for a more detailed examples of the TTPs employed on each stage: https://attack.mitre.org/matrices/enterprise/
## red team infrastructure
#### C2 server:
- command and control server :v self explanatory. 
- look at this for some fun: https://github.com/Cryakl/Ultimate-RAT-Collection
#### Payload server
- hosts the payloads and malicious scripts and stuff for the attacker to deliver into systems from  
#### Proxy servers 
- sits between the victim networks and the C2 server to mask the c2 server's address 
- attackers use a proxy chain of these servers to make it way harder to trace back to the c2 server 
#### DMZ (De-Militarized Zone) Network <br>
![[DMZ.png]]
- acts as a seperate subnet to host external facing services like web or mail servers and stuff. minimizes the risk of the internal corporate lan being compromised by controlling traffic flow with firewalls 
## shells and payloads
#### payloads:
##### singles 
- self contained payloads designed to do specific stuff like creating a user
	- example metasploit payload: `payload/windows/adduser`
##### stagers
- small payloads designed to set up a stable connection between the attacker and the victim machine to download the actual larger payload to execute
##### stages 
- the larger payload the stagers download and execute. can do far more complex stuff. meterpreter is an example 
#### shells:
- CLI interaction method with the os and its resources :v
##### reverse shells:
- the attacker listens for a connection back from the victim 
##### bind shells:
- the victim has a port open that the attacker can connect to
## enterprise network:
- an enterprise network has a shitton of different kinds of servers for different purposes. lets cover some of them:
	- web server 
		- usually in the DMZ and connected to the internal network
	- mail server 
	- usually in the DMZ as well 
	- DB server 
	- Bastion-Host (Jump server)
		- acts as a secure gateway for accessing private networks by sitting between the workstation and the internal network  
		- specifically configured to withstand attacks with minimal software, strict firewalls and regular patching
		- activity on the bastion host is logged
		- usual way to connect to it is via ssh or rdp 
	- automation server 
		- helps the devs automate stuff for continious integration and delivery (CI/CD)
		- example servers:
			- jenkins
			- teamcity
			- bamboo
	- active directory 
## whats active directory
- a bunch of windows computers that share a centralized DB of user accounts and security policies, managed by at least one server called a [[Domain Controller (DC)]] that handles user authentication and access to resources within the domain. 
- DCs can be assigned various roles for specific tasks. these tasks can be performed by a single DC at a time to ensure consistency and prevent conflicts (multiple DCs cant have the same role). these roles are called [[Flexible Single Master Operations (FSMO)]] 
- key components of AD:
	- [[active directory Domain]] 
	- [[domain structures (trees and forests)]] 
	- [[Organizational Unit (OU)]] 
	- [[AD Partitions]] 
	- [[Global Catalog]] 
	- [[active directory Objects]] 
- authentication is typically handled by two key protocols 
	- [[Kerberos]] 
	- [[LDAP]] 
# lab setup
## external red team lab setup 
## internal red team lab setup