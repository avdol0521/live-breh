---
title: OSI model
tags:
  - fetus
---
- abbreviation full form: Open Systems Interconnection (OSI)
- is divided into 7 layers
- the first 
## the 7 layers:

#### Physical layer:
- what it does: sends raw bits over a medium like cables, hubs and other stuff
- mainly focuses on the signal transmission itself not the data
#### Data link layer: 
- what it does: takes care of the node to node connection and correction plus framing as well through switches and node to node data transfer, error detected bridges 
- has two sub layers: (will look into it later)
	- Media access control (MAC) 
	- Logical link control (LLC) 
#### Network layer: 
- what this one does: handles packet routing and stuff like logical addressing (for example IP addresses). basically determines the best path for data to travel from source to destination 
#### Transport layer: 
- takes care of the data transfer along with error recovery, segmentation and flow control 
- uses two key protocols: 
	- [[TCP]] : connection oriented, reliable data transfer 
	- [[UDP]] : connectionless but less reliable data transfer 
#### Session layer: 
- manages the establishment, management and termination of sessions (connections) between apps
#### Presentation layer: 
- translates data between the network and the application. basically takes care of the data encryption, decryption, compression and format translation. 
- ensures the data is in a usable form between layers 
#### Application layer:
- what the user actually sees and uses
- commonly used protocol examples:
	- [[HTTP]] and [[HTTPS]] for web browsing and stuff
	- [[FTP]] for file transfer purposes
	- [[SMTP]] for email communication