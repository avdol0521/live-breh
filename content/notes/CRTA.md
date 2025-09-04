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
	- read this if you wanna know about some well known APT groups: https://attack.mitre.org/groups/
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
### gist of what the lifecycle looks like:
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
### frameworks to describe the steps in detail:
#### The [[Cyber Kill Chain]]
- developed by Lockheed Martin (a large military manufacturer in the US), part of the Intelligence Driven Defense model that identifies what adversaries must complete in order to achieve their objective. roots from military kill chains like the foure F's from the US military during WW2: Find, Fix, Fight and Finish the enemy, or a more modern version of that being F2T2EA: Find, Fix, Track, Target, Engage ans Assess
- mainly a communication tool for showing business leaders the steps in an attack and a big budget is needed to interrupt or make each layer more difficult for adversaries
- has 7 steps: <br>
![[CyberKillChain.png]]
#### The [[MITRE ATT&CK Framework]]
- MITRE is a non profit company that works for the common good in the areas of cybersecurity
- MITRE was the first to address the need to track and catalog the TTPs employed by APT orgs/groups against business Windows networks in 2013. FMX (Fort Made eXperiment), an internal experiment was where it all began
- has a bunch of matrices that provide us with systematic and structured flows of the TTPs in various feilds of cybersec such as the ATT&CK and D3FEND matrices and a bunch of others
- we mainly refer to the enterprise matrix when we talk about the MITRE ATT&CK Framework
	- ATT&CK is an abbreviation of `Adversarial Tactics, Techniques & Common Knowledge`
<br>![[MITREATT&K.png]]
- the first row items are the various tactics and the columns are the techniques used for that specific tactic. the techniques with gray bars have nested sub tactics within them
- each TTP listed has everything from which groups use it, how its used, how to mitigate it etc etc
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
- lab structure to setup: <br>
![[CRTAExternalLabStructure.png]]
- I'll be using vmware workstation pro 17.6.3 
	- [[vmware workstation pro 17.6.3 download link]]
## network adapter setup
- go to the vmware virtual network editor at `edit>virtual network editor` in the top bar. you should see something like this pop up: <br>
![[CRTAvmwareVirtualNetworkEditorSS.png]]
- click on the `Change Settings` button on the bottom right to unlock custom configuration capabilities
- add two networks and assign the subnet ips: (see [[subnetting]] if you wanna know more about that)
	- `192.168.50.0` (this will be the external network)
	- `10.10.10.0` (this will be the internal network)
- hit apply and it should now look like this (i renamed both my adapters cuz why not) <br>
![[CRTAvmwareAdaptersSS.png]]
- remember to uncheck the local DHCP service option since we're going to assign IPs manually
## external red team lab setup 
- download ts: https://excellmedia.dl.sourceforge.net/project/metasploitable/Metasploitable2/metasploitable-linux-2.0.0.zip (this'll work as the web server that sits between the networks)
- open that shit in vmware (double clicking on the `.vmx` file will work no need to do this stuff its just there for explaining purposes :V)<br>
![[CRTAmetasploitableOpenInVmwareSS.png]]
- set up the first adapter as the custom external adapter and the second one as the custom internal one like this <br>
![[CRTAmetasploitableAdapterConfigSS-1.png]]
- and set your kali to use the external adapter as well :3
- run the metasploitable machine (ill call it "the server" from here on out). the creds are `msfadmin:msfadmin`
- it wont have an ip by default since we dont have dhcp setting everything up for us. open `/etc/network/interfaces` with nano as sudo. should see something like this: <br>
![[CRTAnanoOpenInterfaceFileSS.png]]
- add these lines: <br>
![[CRTAserverInterfacesAddedSS.png]]
- do `/etc/init.d/networking restart` to restart the networking service. should have two ips now on both the interfaces 
- do the same thing for kali (dont add the gateway line or you wont be able to access the internet) and give it the address `192.168.50.2` and ping the server to see if its all good. if it does work thats all there is to the external network setup :3
## internal red team lab setup 
- download these:
	- https://go.microsoft.com/fwlink/p/?LinkID=2195174&clcid=0x409&culture=en-us&country=US (windows server 2016 for the DC)
	- https://go.microsoft.com/fwlink/p/?LinkID=2195443&clcid=0x409&culture=en-us&country=US (windows server 2012 R2 for the application server)
	- https://go.microsoft.com/fwlink/p/?LinkID=2208844&clcid=0x409&culture=en-us&country=US (windows 10 enterprise as an employee machine)
- we will set these IPs to each machine in the internal network:
	- DC: `10.10.10.2`
	- Application Server: `10.10.10.3`
	- employee machine: `10.10.10.4`
#### WS2016 DC setup
- go to vmware `file>new virtual machine`
- select typical 
- select `i will install the operating system later` option
- select the guest OS as windows and version as windows server 2016 from the dropdown
- spam next until the hardware customization section. up the ram a bit and select the network adapter as the internal one we set up earlier
- select finish 
- go to the settings for the machine and select the ISO for it as the `CD/DVD (SATA)` 
- run the machine
- select the standard install (the 2nd option. dont select the datacenter versions either)
- select custom and select new and then apply on the storage section. it'll create a bunch of partitions automatically. 
- click next. wait a while. its gonna set some things up. should take you to a screen like this: <br>
![[CRTA2016CredsSetupSS.png]]
- creds i set: (for every machine)
```
P@$$w0rd!
```
- log in after finishing
- set up the static IP and set the DNS as its own IP since the DC will act as the DNS itself
- go to to the server dashboard and set up roles and groups. choose the forest root, domain name, select the DNS and AD DS and set everything else as the default and wait till it finishes. 
- upgrade the server to a domain controller 
- go to tools > manage users and groups 
	- expand the domain and right click on the users OU, add two users for the aplication server and the other for the employee machine. set the password never expires option 
- thats about it for the DC 
#### app server (ws2012-r2) and employee machine (win10ent) setup 
- install/set up the machines the same way as ws2016 
- set up the static ip on both the machines 
- join the domain at my pc > properties > change name > change > domain and add the domain. will ask for admin creds for the domain admin. the creds are  `Administrator:P@$$w0rd!` 
- will restart to take effect. join as the appropriate users for the machines that we set up in the DC earlier from the "other user" section of the login screens 
- both the machines and users should show up in the manage users and groups section of the DC panel
- thats about it for the internal environment
# exploitation
#### External web server exploitation:
- [[CRTAexternalWebServerExploitation]] 