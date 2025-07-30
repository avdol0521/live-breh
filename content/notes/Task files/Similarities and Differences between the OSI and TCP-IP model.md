---
title: 
tags:
  - fetus
---
# Similarities:
- uses Encapsulation and Decapsulation
	- Encapsulation: each layer adds its own header and sometime a trailer as well to the data when the data is sent from the source
	- Decapsulation: each layer removes its own header as the data gets passed through each layer after it reaches its destination
- each layer works independently from the other layers and uses pre defined interfaces to communicate with eachother. and this modularity lets the whole thing be really efficient
# Differences: 
- the obvious first difference is the differing amount of layers in each model ig
- the [[OSI model]] is more of a theoretical one. used to understand and design networks while the [[TCP-IP model]] is a more practical suite of protocols and stuff that can be used in the real world. it forms most if not all of the internet :3
- the [[OSI model]] was developed by ISO (international organization for standardization) as a generic reference model while the [[TCP-IP model]] was developed by the US department of defense for robust and scalable communication
- heres a neat table i copy pasted:

| OSI Model                                                                    | TCP/IP Model                                                                     |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| OSI stands for Open Systems Interconnection.                                 | TCP/IP stands for Transmission Control Protocol/Internet Protocol.               |
| OSI model has 7 layers.                                                      | TCP/IP model consists of 4 layers.                                               |
| Package delivery is guaranteed in OSI Model.                                 | Package delivery is not guaranteed in the TCP/IP Model.                          |
| In the OSI model, only layers 1,2 and 3 are necessary for data transmission. | All layers of the TCP/IP model are needed for data transmission.                 |
| Protocols at each layer is independent of the other layer.                   | Layers are integrated; some layers are required by other layers of TCP/IP model. |
| OSI Model is a conceptual framework, less used in practical applications.    | Widely used in actual networks like Internet and Communication Systems.          |
