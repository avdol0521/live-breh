---
title: "CPU protection rings"
tags:
  - fetus
---
basically a hierarchy of privilege levels visualised as a ring. these rings are hardware enforced by CPU architecture. for example in the x86 architecture there are 4 privilege levels. 0 to 3 where 0 is the most privileged and 3 is the least. protection rings safeguard data by seperating sensitive programs like the kernel ones from the user programs. for example a program in a memory zone assigned to ring 3 cant access a memory zone assigned to ring 0 without permission