---
title: "User Account Control (UAC)"
tags:
  - fetus
---
- was first introduced in windows vista
- key part of windows security. apps that need to perform any administrative tasks and need the `administrator access token` to do so are required to ask the user for consent
- the exeptions are 
	- parent-child relationship processes. the children processes inherit the user's access token. both parent and child processes must have the same integrity level tho. applications with lower integrity levels cant modify data in applications with higher integrity levels
	- UAC doesnt apply to for the built in local administrator account by default
- UAC rules can be applied at various levels inside the UAC settings:<br>
![[User Account Control (UAC) Settings.png]]