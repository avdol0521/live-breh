---
title: "Intro to infosec"
tags:
  - fetus
---
#### what and why its important
its about safeguarding info and systems from unauthorized access. "unauthorized access" in this case means access, modification and deletion of information by an unauthorized 3rd party. important because pretty much everything relies on digital systems to function these days. for example, businesses needing to keep track of tons of potentially confidential data such as trade secrets and financial records, governments handling massive amounts of critical public information, hospitals keeping track of massive amounts of patient information etc. these organizations need to ensure the Confidentiality, Integrity and Availability of their data via infosec to minimize financial/reputational damage. They generally do this by maintaining regulatory compliance to various laws and standards related to data protection
#### infosec branches out to several domains, some of them are:
- Network security 
- AppSec
- Operational Security (OpSec)
- Disaster Recovery and Business Continuity
- CloudSec
- Physical Security 
- Mobile Security 
- IoT Security 
- etc
#### some security concepts we should be aware of:
- risk
	- the *potential for damage*. basically the *likelihood* of a malicious event happening and the *severity of its impact*. managing risk involves both mitigating threats and minimizing vulnerabilities
- threat
	- the *potential cause* of damage. could range from a hacker to natural disasters
- vulnerability
	- the *weakness in a system* (not potential) that could be used by a threat to cause damage
#### some infosec roles we should be aware of:

| Chief InfoSec Officer (CISO) | Oversees the entire infosec program                     |
| ---------------------------- | ------------------------------------------------------- |
| Compliance Specialist        | Ensures compliance to various standards and regulations |
| will add more later          |                                                         |
#### Information Security Principles
Why: They're extremely relevant foundations that effect every layer of a business handling sensitive information and data assets. These principles helps us create secure systems, opsec, policies and guidelines that let us secure our data assets and critical info 

The principles (According to the ISO/IEC 27002 guidance document):
- Core Principles (The CIA Triad):
	- Confidentiality
		- ensures that only authorized parties can access information and nobody else. Implementation examples: encryption, access controls etc
	- Integrity
		- ensures that data cant be modified by unauthorized parties. implementation examples: hashing, digital signatures 
	- Availability 
		- ensures that data is available to authorized parties when needed and access to said data cant be disrupted
- Derived Principles/Controls (non comprehensive. these are just some of the Controls):
	- Non-repudiation
		- ensures proof of an event happening so it cant be denied by the entity that made it happen. implementation examples: logging, digital signatures etc
	- Authentication
		- self explanatory
	- Privacy
		- ensures proper handling of Personally Identifiable Information (PII) and compliance with data protection regulations. implementation examples: Data Masking, Information Deletion, Data Leakage Prevention via monitoring endpoints, Encryption at Rest etc
#### Processes in infosec:
There are a set of key processes in infosec that serve as the backbone of a strong security strategy that serve to ensure that the CIA Triad of data are upheld. They are as follows:
- Risk Assessment
	- identifying, analyzing and evaluating threats and vulnerabilities before exploitation for proper prioritization
- Security Planning
	- Creating clear organizational rules and policies/procedures to guide security initiatives and address identified risks
- Implementation of security controls:
	- putting preventive and detective controls into action by deploying technical solutions and enforcing policies 
- Monitoring and Detection 
	- continuously monitoring for security events and anomalies via SIEMs/IDS etc to identify security incidents asap
- Incident Response
	- reacting to detected incidents via established procedures to mitigate threats
- Disaster Recovery 
	- restoring systems and data via redundancy measures and backups to minimize downtime and data loss
- Continuous Improvement
	- self explanatory 
#### tool categories in infosec to be aware of
- Firewalls
	- controls incoming/outgoing network traffic
- Intrusion Detection/Prevention Systems (IDS/IPS)
	- both can independently work but are usually combined together into an IDPS
	- IPS: a passive tool that analyzes network traffic for malicious activity/policy violations and generates alerts. can't block or change traffic itself
	- IDS: an active tool that does the blocking and changing of traffic based on its analysis of network traffic
- Vulnerability Scanners
	- pretty self explanatory 
- Pentesting and encryption tools 
	- pretty self explanatory too. see [[tools and stuff]] to explore some 
- Access control systems: handles user perms and auth 
- Operating systems: a person delving into infosec needs to be familiar with a ton of tools and that includes Linux, Windows, MacOS etc. Some infosec focused linux distros: Kali Linux, Parrot OS, BlackArch
