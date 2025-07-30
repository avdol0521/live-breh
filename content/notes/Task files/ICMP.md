---
title: ICMP ( Internet Control Message Protocol )
tags:
  - fetus
---
- is a supporting protocol in the [[IP]] suite
- helps network devices communicate about network conditions and problems
- reports errors and other info like packet loss, network delay etc. mainly used for error reporting and diagnostics. can also be misused for attacks like [[ICMP flood]]s or [[Smurf attack]]s
- common ICMP messages:
	- Destination Unreachable
	- Time Exceeded 
	- Echo Request/Replay (used by ping)