---
title: "LSA"
tags:
  - fetus
---
- Local Security Authority (LSA)
- core windows security subsystem that manages auth and creds verification among other things. implemented through the `lsass.exe` process
- responsible for generating access tokens and protecting sensitive auth data like [[NTLM]] hashes and kerberos tickets 
- verifies auth by comparing them against the [[SAM Database]] 