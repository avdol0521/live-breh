---
title: "CRTA-stuff to look into"
tags:
  - fetus
---
- [ ] this series: https://medium.com/@frsfaisall
- [ ] AD roles (FSMO)
- [ ] trust relationships
- [ ] DFSR SYSVOL replication
- [ ] FRS 
# Active Directory topic list

- Overview / Concepts
    
    - Domain
        
    - Forest
        
    - Tree
        
    - Organizational Unit (OU)
        
    - Domain Controller (DC)
        
    - Site and Subnet
        
    - Trusts (forest, external, shortcut, realm)
        
    - Naming contexts / partitions (Domain, Configuration, Schema, Application)
        
    - Directory schema (classes, attributes)
        
    - Logical vs physical AD topology
        
- AD Domain Services (AD DS) internals
    
    - NTDS.dit database (ESE/Jet DB)
        
    - ntdsutil
        
    - System State and DSRM
        
    - SYSVOL structure
        
    - Replication engine / multi-master model
        
    - Knowledge Consistency Checker (KCC)
        
    - USN and Update Sequence Numbers
        
    - Tombstone and garbage collection
        
    - Lingering objects
        
    - AD partitions replication topology
        
    - Global Catalog (GC)
        
    - Read-Only Domain Controllers (RODC)
        
- FSMO / Operation Masters
    
    - Schema Master
        
    - Domain Naming Master
        
    - RID Master
        
    - PDC Emulator
        
    - Infrastructure Master
        
    - Transferring vs seizing roles
        
- DNS and AD integration
    
    - AD-integrated zones
        
    - SRV and A records for DC location
        
    - Dynamic DNS updates
        
    - Zone replication and secure updates
        
    - DNS scavenging and delegation
        
- Authentication protocols & flows
    
    - Kerberos (AS-REQ, AS-REP, TGS-REQ, TGS-REP, AP-REQ)
        
    - NTLM (v1, v2)
        
    - LDAP simple bind and LDAP over SSL (LDAPS)
        
    - SMB/CIFS authentication
        
    - SSPI and Negotiate
        
    - SPNs and service ticket acquisition
        
- Kerberos deep topics
    
    - Ticket Granting Ticket (TGT) and service tickets
        
    - Encryption types / etypes
        
    - Pre-authentication and AS-REP roasting
        
    - Service Principal Names (SPN) and Kerberoasting
        
    - Delegation: unconstrained, constrained, resource-based constrained delegation (RBCD)
        
    - Protocol transition (S4U2Self / S4U2Proxy)
        
    - Golden Ticket / Silver Ticket concepts (high-level names)
        
- Accounts and identity objects
    
    - User accounts
        
    - Computer accounts
        
    - Group accounts (security vs distribution)
        
    - Built-in accounts (Administrator, Guest)
        
    - Service accounts: standard, managed service accounts (MSA), gMSA
        
    - Well-known SIDs and built-in groups
        
    - SIDHistory
        
- Groups and authorization
    
    - Group scopes: global, domain local, universal
        
    - Group nesting and token creation
        
    - AdminSDHolder and protected accounts
        
    - Group Policy security filtering
        
- Access control and ACLs
    
    - Security descriptors (DACL, SACL)
        
    - ACE types and inheritance
        
    - Active Directory permissions model
        
    - Effective permissions calculation
        
    - Object owner and ownership changes
        
    - Resource-based ACLs
        
- LDAP specifics
    
    - Distinguished Names (DN), Relative DNs, CN/OU/DC
        
    - LDAP search filters and LDAP controls
        
    - LDAP referrals and paging
        
    - LDAP signing and channel binding
        
    - LDAP over SSL/TLS (LDAPS)
        
- Group Policy (GPO)
    
    - GPO structure (GPC, GPT)
        
    - GPO processing order (Local, Site, Domain, OU)
        
    - SYSVOL and GPO replication (FRS vs DFS-R)
        
    - Administrative Templates (ADMX/ADML)
        
    - Preferences vs Policies
        
    - Scripts, Software Installation, Folder Redirection
        
    - WMI filters and loopback processing
        
    - Group Policy Management Console (GPMC)
        
- SYSVOL and file replication
    
    - File Replication Service (FRS)
        
    - DFS Replication (DFS-R)
        
    - SYSVOL migration and troubleshooting
        
- Certificate services & PKI (AD CS)
    
    - CA hierarchy (enterprise vs standalone CAs)
        
    - Certificate templates and auto-enrollment
        
    - OCSP / CRL / AIA
        
    - Template permissions and abuse vectors
        
    - Certificate-based authentication and smartcards
        
- Federation, SSO and external auth
    
    - ADFS (claims-based auth)
        
    - SAML, OAuth, OpenID Connect basics
        
    - Federation trusts and proxies
        
- Azure AD and Hybrid Identity
    
    - Azure AD Connect (sync methods: PHS, PTA, federation)
        
    - Hybrid join, device writeback
        
    - Azure AD Domain Services
        
    - Conditional Access, Identity Protection
        
- Windows security subsystems
    
    - Local Security Authority (LSASS)
        
    - Security Account Manager (SAM)
        
    - LSA secrets and protection
        
    - Kerberos KDC internals on DCs
        
    - Token creation and privilege model
        
- Credential storage & lifecycles
    
    - Password hashing, NT hash, LM hash
        
    - Kerberos keys and keytabs
        
    - Protected Users, Credential Guard
        
    - Local Administrator Password Solution (LAPS)
        
- Privileged access models & protections
    
    - Tiered administration (Tier 0 / 1 / 2)
        
    - Just-in-Time (JIT) and Just-Enough-Administration (JEA)
        
    - Privileged Access Workstations (PAW)
        
    - Privileged Access Management (PAM)
        
    - Admin forest / bastion model
        
- Attack surfaces and offensive techniques (topic names only)
    
    - Enumeration techniques (LDAP queries, net commands, DNS records)
        
    - Pass-the-Hash (PtH)
        
    - Pass-the-Ticket (PtT)
        
    - Overpass-the-Hash / Pass-the-Key
        
    - Kerberoasting
        
    - AS-REP roasting
        
    - Golden Ticket / Silver Ticket (concepts)
        
    - DCSync / DCSync-like attacks
        
    - NTDS.dit extraction / offline cracking
        
    - RBCD abuse
        
    - Unconstrained delegation abuse
        
    - ACL abuse / DACL manipulation
        
    - SIDHistory abuse
        
    - Kerberos delegation misconfig exploitation
        
    - NTLM relay
        
    - Lateral movement (SMB/WMIC/PSExec/WinRM)
        
    - Service account privilege abuse
        
    - Group Policy abuse (scheduled tasks, preferences)
        
    - LDAP injection / AD LDAP misconfig
        
    - Certificate abuse (AD CS template misconfig)
        
    - Shadow credentials / skeleton key (concept-level)
        
    - Persistence primitives in AD (objects, trusts, service accounts)
        
    - Forest/domain trust abuse
        
- Defensive detection & mitigation topics
    
    - Event IDs to monitor (Kerberos, login, replication, policy changes)
        
    - Audit policies and Advanced Audit Policy Configuration
        
    - Logging hardening (PowerShell, Sysmon, Winlogbeat)
        
    - SIEM correlation and hunt queries
        
    - Hardening GPOs and baseline configurations
        
    - Monitoring replication and metadata
        
    - Detection of Golden/Silver tickets, DCSync, Kerberoasting
        
    - Network-level controls (SMB signing, LDAP signing, NTLM restrictions)
        
    - Mitigations: MFA, conditional access, Disable NTLM, enforce AES Kerberos etypes
        
    - Recovery strategies and incident response playbooks
        
- Backup, restore & disaster recovery
    
    - System State backup (AD-aware backup)
        
    - Authoritative vs non-authoritative restore
        
    - Recycle Bin (AD Recycle Bin)
        
    - Tombstone lifetime and msDS-LastKnownRDN
        
    - Metadata cleanup
        
- Forensics & evidence sources
    
    - Event logs (Security, System, Directory Service)
        
    - USN and change metadata
        
    - AD replication metadata analysis
        
    - AD object timestamps and attribute history
        
    - Memory forensics (LSASS dumps)
        
    - Shadow copies and backups
        
- Tools, libraries & frameworks (names only)
    
    - PowerView / PowerSploit
        
    - BloodHound / SharpHound
        
    - Mimikatz
        
    - Impacket
        
    - Rubeus / Kekeo
        
    - Responder
        
    - CrackMapExec (CME)
        
    - ADRecon
        
    - Certipy
        
    - LDAP tools (ldapsearch, ldp.exe)
        
    - repadmin, dcdiag, nltest, netdom, dsquery, dsget
        
    - Ntdsutil and esentutl
        
    - Sysinternals suite (PsExec, Procmon, Autoruns)
        
    - Commercial/defensive tools (LAPS, Microsoft ATA / Defender for Identity)
        
- Scripting, APIs & automation
    
    - PowerShell ActiveDirectory module
        
    - System.DirectoryServices / DirectoryServices.Protocols (.NET)
        
    - LDAP libraries (python-ldap, ldap3)
        
    - AD Web Services / REST wrappers
        
    - Automation pitfalls and secured scripting
        
- Network & transport considerations
    
    - Ports and protocols used by AD (LDAP, LDAPS, Kerberos, RPC, SMB, RPC-EPMap)
        
    - RPC/DCOM, MS-RPC and named pipes
        
    - SMB signing and encryption
        
    - Network segmentation and site topology planning
        
    - WAN replication implications
        
- Administration, maintenance & operational tools
    
    - Group Policy Management Console (GPMC)
        
    - Active Directory Sites and Services
        
    - Active Directory Users and Computers (ADUC)
        
    - Active Directory Administrative Center (ADAC)
        
    - AD Schema MMC
        
    - AD FS and AD CS consoles
        
    - Monitoring with Performance Counters and Health Checks
        
- Lab design & practical exercises
    
    - Single-domain lab
        
    - Multi-domain / multi-forest lab
        
    - Trusts lab (two-way, one-way)
        
    - DAG / site replication/latency simulation
        
    - Staged compromise scenarios (local admin → domain user → domain compromise)
        
    - Safe snapshots and rollback strategies
        
    - Emulating hybrid/Azure AD environments
        
- Compliance, policies & governance
    
    - Account lifecycle and provisioning/deprovisioning
        
    - Password policies and Fine-Grained Password Policies (FGPP)
        
    - Authentication policies and silos
        
    - Audit and compliance reporting
        
- Emerging/cloud identity topics
    
    - Azure AD Conditional Access policies
        
    - Passwordless / FIDO2 and modern auth
        
    - Identity as a Service (IDaaS) interactions with AD
        
    - Cloud sync security considerations
        
- Learning path & study aids (topics to build)
    
    - Foundational Windows Server administration
        
    - Kerberos and Windows authentication deep-dive
        
    - AD schema and directory design
        
    - Hands-on lab exercises for enumeration, exploitation, detection, remediation
        
    - Capture-The-Flag (CTF) scenario design
        
    - Defensive tuning and SIEM rule creation