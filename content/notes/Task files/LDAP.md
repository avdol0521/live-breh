---
title: "LDAP"
tags:
  - fetus
---
- Lightweight DIrectory Access Protocol (LDAP). the successor to DAP
- used to manage users, groups and devices in centralized directories like active directory
- port: 
	- 389 ([[TCP]]) (unencrypted)
	- 636 ([[TCP]]) for [[LDAPS]] 
- the standard protocol that applications and clients use to communicate with, query and modify/find AD database info to find user info and authenticate users 
- accesses and maintains DDI (distributed directory information) services
- often holds juicy auth data, perms and internal structure info 
### checklist (gotta look way more into this as well later):
- Anonymous Binds
    - Try connecting with no creds: `ldapsearch -x -H ldap://target`
    - If it works = unrestricted internal recon
    - Dump users, groups, email addresses, OU structure
    
- Credential Harvesting
    - Look for fields like `userPassword`, `pwdLastSet`, `unicodePwd`
    - Might get cleartext, Base64, or NTLM hashes (AD)
    
- Brute Force / Weak Auth
    - Use tools like `medusa`, `ncrack`, `crackmapexec` on LDAP/389
    - Spray known usernames with weak passwords
    
- Injection Attacks
    - LDAP Injection in web apps: try `)(uid=))(|(uid=`
    - Bypass filters or extract entries via crafted queries
    
- Search Abuse
    - Use `ldapsearch` to enumerate:
        - All users: `(objectClass=user)`
        - Admin groups: `(memberOf=)`
        - Service accounts or machines
    
- Group/Permission Recon
    - Map who’s in Domain Admins, or who has delegation rights
    - Track down where high-priv users log in
    
- Unauthenticated Enumeration via SMB
    - Tools like `BloodHound` can infer LDAP info using SMB shares
    - Especially useful post-compromise
    
- Kerberos Attacks
    - Tied to LDAP in AD environments
    - Abuse `ldapsearch` to get SPNs, then run Kerberoasting
    - Extract TGS tickets for crackable service accounts
    
- Misconfigured ACLs
    - Weak Access Control Lists = users writing where they shouldn’t
    - Dump ACLs via `ldapsearch` or AD tools to find abusable paths
    
- LDAPS Issues
    - No cert validation = possible MITM
    - If plain LDAP is also open, creds may be leaking unencrypted
    
- Bind DN Enumeration
    - Try multiple base DNs or naming contexts to guess correct root
    - Can brute via naming patterns or from leaked info
    
- Sensitive Attributes
    - Search for:
        - `lastLogon`, `logonCount` → find active users
        - `description` or `info` → creds often hidden in plain text here
        - `ms-MCS-AdmPwd` → LAPS-managed local admin password, if visible