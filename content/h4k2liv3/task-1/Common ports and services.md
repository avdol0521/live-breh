---
title: Common ports and services
tags:
  - fetus
---
## Basics:
- ports are basically gateways identified by a number from 0 to 65,636 thats used by the Transport layer to direct network traffic to specific services or apps on a host 
- enables a single device to run a shitton of services at once by associating each service with a unique port 
- ports are also categorized into these ranges:
	- 0 <-> 1023:
		- these are standard ports reserved for really common and widely used protocols and services like [[HTTP]], [[FTP]], [[SMTP]] etc.
	- 1024 <-> 49151:
		- these are registered ports assigned to less common or proprietary apps
	- 49152 <-> 65,535:
		- used for short term use