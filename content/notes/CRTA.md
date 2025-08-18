---
title: "CRTA"
tags:
  - fetus
---
- target: adversary Tactics, Techniques, Procedures (TTPs)
## whats red teaming
- objectives
	- identify misconfigs and vulns to get critical/sensitive assets and data
	- testing the targated orgs detection and response capabilities 
- is quiet and stealthy
- behaves and attacks similarly to real threat actors
	- RT simulation - copy techniques of threat actors
	- RT emulation - mimics behaviour of threat actors 
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
		- 
	- ==lateral movement with defensive evasion==
	- ==discovery, data collection==
	- ==data exfiltration and high level persistence==