---
title: "LSA secrets"
tags:
  - fetus
---
- [[LSA]] secrets
- sensitive pieces of data that windows stores securely in under the LSA subsystem inside the registry 
- includes stuff like 
	- service account passwords used by system services 
	- cached domain creds 
	- stored wifi creds 
	- other sensitive system or application secrets 
- attacker needs administrative/system level access to extract said secrets 