---
title: "htllab01"
tags:
  - fetus
---
### nmap result
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-12-10 13:16 EST
Nmap scan report for 10.0.2.18
Host is up (0.0036s latency).                                                                                                                                                                                                               
Not shown: 995 closed tcp ports (reset)                                                                                                                                                                                                     
PORT    STATE SERVICE     VERSION                                                                                                                                                                                                           
21/tcp  open  ftp         vsftpd (broken: not found: directory given in 'secure_chroot_dir':/usr/share/empty)                                                                                                                               
22/tcp  open  ssh         OpenSSH 7.9p1 Debian 10+deb10u4 (protocol 2.0)                                                                                                                                                                    
| ssh-hostkey:                                                                                                                                                                                                                              
|   2048 c7:44:58:86:90:fd:e4:de:5b:0d:bf:07:8d:05:5d:d7 (RSA)                                                                                                                                                                              
|   256 78:ec:47:0f:0f:53:aa:a6:05:48:84:80:94:76:a6:23 (ECDSA)                                                                                                                                                                             
|_  256 99:9c:39:11:dd:35:53:a0:29:11:20:c7:f8:bf:71:a4 (ED25519)                                                                                                                                                                           
80/tcp  open  http        Apache httpd 2.4.59 ((Debian))                                                                                                                                                                                    
|_http-title: Apache2 Debian Default Page: It works                                                                                                                                                                                         
|_http-server-header: Apache/2.4.59 (Debian)                                                                                                                                                                                                
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)                                                                                                                                                                       
445/tcp open  netbios-ssn Samba smbd 4.9.5-Debian (workgroup: WORKGROUP)                                                                                                                                                                    
MAC Address: 08:00:27:99:D6:68 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)                                                                                                                                                            
Service Info: Host: HACKTOLIVELAB01; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel                                                                                                                                                       
                                                                                                                                                                                                                                            
Host script results:                                                                                                                                                                                                                        
|_clock-skew: mean: 1h39m36s, deviation: 2h53m12s, median: -24s                                                                                                                                                                             
| smb2-time:                                                                                                                                                                                                                                
|   date: 2025-12-10T18:16:02                                                                                                                                                                                                               
|_  start_date: N/A                                                                                                                                                                                                                         
|_nbstat: NetBIOS name: HACKTOLIVELAB01, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)                                                                                                                                          
| smb-os-discovery:                                                                                                                                                                                                                         
|   OS: Windows 6.1 (Samba 4.9.5-Debian)                                                                                                                                                                                                    
|   Computer name: hacktolivelab01
|   NetBIOS computer name: HACKTOLIVELAB01\x00
|   Domain name: \x00
|   FQDN: hacktolivelab01
|_  System time: 2025-12-10T13:16:02-05:00
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 14.52 seconds
```

### smb enum 
```sh fold title:"smbEnum"
┌──(kali㉿kali)-[~]
└─$ smbclient -L \\\\10.0.2.18\\                                                                    
Password for [WORKGROUP\kali]:

        Sharename       Type      Comment
        ---------       ----      -------
        print$          Disk      Printer Drivers
        public          Disk      
        IPC$            IPC       IPC Service (Samba 4.9.5-Debian)
Reconnecting with SMB1 for workgroup listing.

        Server               Comment
        ---------            -------

        Workgroup            Master
        ---------            -------
        WORKGROUP            HACKTOLIVELAB01
                                                                                                                                                                                                                                            
┌──(kali㉿kali)-[~]
└─$ smbmap -H 10.0.2.18         

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
[*] Established 1 SMB connections(s) and 0 authenticated session(s)                                                      
                                                                                                                             
[+] IP: 10.0.2.18:445   Name: 10.0.2.18                 Status: NULL Session
        Disk                                                    Permissions     Comment
        ----                                                    -----------     -------
        print$                                                  NO ACCESS       Printer Drivers
        public                                                  READ ONLY
        IPC$                                                    NO ACCESS       IPC Service (Samba 4.9.5-Debian)
[*] Closed 1 connections                                                                               
smbclient \\\\10.0.2.18\\public
Password for [WORKGROUP\kali]:
Try "help" to get a list of possible commands.
smb: \> ist
ist: command not found
smb: \> list
0:      server=10.0.2.18, share=public
smb: \> ls
  .                                   D        0  Sun Dec  7 15:05:42 2025
  ..                                  D        0  Wed Nov 19 15:49:19 2025
  note.txt                            N       33  Sun Dec  7 15:05:42 2025

                7173040 blocks of size 1024. 4582812 blocks available
smb: \> get note.txt
getting file \note.txt of size 33 as note.txt (1.0 KiloBytes/sec) (average 1.0 KiloBytes/sec)
smb: \> exit
                                                                                                                                                                                                                                            
┌──(kali㉿kali)-[~]
└─$ cat note.txt 
87b849532831bcbca7ea3e9e9cebbf56
┌──(kali㉿kali)-[~]
└─$ enum4linux -a 10.0.2.18
Starting enum4linux v0.9.1 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Wed Dec 10 13:24:18 2025

 =========================================( Target Information )=========================================
                                                                                                                                                                                                                                            
Target ........... 10.0.2.18                                                                                                                                                                                                                
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 =============================( Enumerating Workgroup/Domain on 10.0.2.18 )=============================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+] Got domain/workgroup name: WORKGROUP                                                                                                                                                                                                    
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
 =================================( Nbtstat Information for 10.0.2.18 )=================================
                                                                                                                                                                                                                                            
Looking up status of 10.0.2.18                                                                                                                                                                                                              
        HACKTOLIVELAB01 <00> -         B <ACTIVE>  Workstation Service
        HACKTOLIVELAB01 <03> -         B <ACTIVE>  Messenger Service
        HACKTOLIVELAB01 <20> -         B <ACTIVE>  File Server Service
        ..__MSBROWSE__. <01> - <GROUP> B <ACTIVE>  Master Browser
        WORKGROUP       <00> - <GROUP> B <ACTIVE>  Domain/Workgroup Name
        WORKGROUP       <1d> -         B <ACTIVE>  Master Browser
        WORKGROUP       <1e> - <GROUP> B <ACTIVE>  Browser Service Elections

        MAC Address = 00-00-00-00-00-00

 =====================================( Session Check on 10.0.2.18 )=====================================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+] Server 10.0.2.18 allows sessions using username '', password ''                                                                                                                                                                         
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
 ==================================( Getting domain SID for 10.0.2.18 )==================================
                                                                                                                                                                                                                                            
Domain Name: WORKGROUP                                                                                                                                                                                                                      
Domain Sid: (NULL SID)

[+] Can't determine if host is part of domain or part of a workgroup                                                                                                                                                                        
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
 ====================================( OS information on 10.0.2.18 )====================================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[E] Can't get OS info with smbclient                                                                                                                                                                                                        
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+] Got OS info for 10.0.2.18 from srvinfo:                                                                                                                                                                                                 
        HACKTOLIVELAB01Wk Sv PrQ Unx NT SNT Samba 4.9.5-Debian                                                                                                                                                                              
        platform_id     :       500
        os version      :       6.1
        server type     :       0x809a03


 =========================================( Users on 10.0.2.18 )=========================================
                                                                                                                                                                                                                                            
Use of uninitialized value $users in print at ./enum4linux.pl line 972.                                                                                                                                                                     
Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 975.

Use of uninitialized value $users in print at ./enum4linux.pl line 986.
Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 988.

 ===================================( Share Enumeration on 10.0.2.18 )===================================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
        Sharename       Type      Comment
        ---------       ----      -------
        print$          Disk      Printer Drivers
        public          Disk      
        IPC$            IPC       IPC Service (Samba 4.9.5-Debian)
Reconnecting with SMB1 for workgroup listing.

        Server               Comment
        ---------            -------

        Workgroup            Master
        ---------            -------
        WORKGROUP            HACKTOLIVELAB01

[+] Attempting to map shares on 10.0.2.18                                                                                                                                                                                                   
                                                                                                                                                                                                                                            
//10.0.2.18/print$      Mapping: DENIED Listing: N/A Writing: N/A                                                                                                                                                                           
//10.0.2.18/public      Mapping: OK Listing: OK Writing: N/A

[E] Can't understand response:                                                                                                                                                                                                              
                                                                                                                                                                                                                                            
NT_STATUS_OBJECT_NAME_NOT_FOUND listing \*                                                                                                                                                                                                  
//10.0.2.18/IPC$        Mapping: N/A Listing: N/A Writing: N/A

 =============================( Password Policy Information for 10.0.2.18 )=============================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            

[+] Attaching to 10.0.2.18 using a NULL share

[+] Trying protocol 139/SMB...

[+] Found domain(s):

        [+] HACKTOLIVELAB01
        [+] Builtin

[+] Password Info for Domain: HACKTOLIVELAB01

        [+] Minimum password length: 5
        [+] Password history length: None
        [+] Maximum password age: 37 days 6 hours 21 minutes 
        [+] Password Complexity Flags: 000000

                [+] Domain Refuse Password Change: 0
                [+] Domain Password Store Cleartext: 0
                [+] Domain Password Lockout Admins: 0
                [+] Domain Password No Clear Change: 0
                [+] Domain Password No Anon Change: 0
                [+] Domain Password Complex: 0

        [+] Minimum password age: None
        [+] Reset Account Lockout Counter: 30 minutes 
        [+] Locked Account Duration: 30 minutes 
        [+] Account Lockout Threshold: None
        [+] Forced Log off Time: 37 days 6 hours 21 minutes 



[+] Retieved partial password policy with rpcclient:                                                                                                                                                                                        
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
Password Complexity: Disabled                                                                                                                                                                                                               
Minimum Password Length: 5


 ========================================( Groups on 10.0.2.18 )========================================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+] Getting builtin groups:                                                                                                                                                                                                                 
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+]  Getting builtin group memberships:                                                                                                                                                                                                     
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+]  Getting local groups:                                                                                                                                                                                                                  
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+]  Getting local group memberships:                                                                                                                                                                                                       
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+]  Getting domain groups:                                                                                                                                                                                                                 
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[+]  Getting domain group memberships:                                                                                                                                                                                                      
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
 ====================( Users on 10.0.2.18 via RID cycling (RIDS: 500-550,1000-1050) )====================
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
[I] Found new SID:                                                                                                                                                                                                                          
S-1-22-1                                                                                                                                                                                                                                    

[I] Found new SID:                                                                                                                                                                                                                          
S-1-5-32                                                                                                                                                                                                                                    

[I] Found new SID:                                                                                                                                                                                                                          
S-1-5-32                                                                                                                                                                                                                                    

[I] Found new SID:                                                                                                                                                                                                                          
S-1-5-32                                                                                                                                                                                                                                    

[I] Found new SID:                                                                                                                                                                                                                          
S-1-5-32                                                                                                                                                                                                                                    

[+] Enumerating users using SID S-1-5-21-2754108324-1900567766-66175766 and logon username '', password ''                                                                                                                                  
                                                                                                                                                                                                                                            
S-1-5-21-2754108324-1900567766-66175766-501 HACKTOLIVELAB01\nobody (Local User)                                                                                                                                                             
S-1-5-21-2754108324-1900567766-66175766-513 HACKTOLIVELAB01\None (Domain Group)

[+] Enumerating users using SID S-1-5-32 and logon username '', password ''                                                                                                                                                                 
                                                                                                                                                                                                                                            
S-1-5-32-544 BUILTIN\Administrators (Local Group)                                                                                                                                                                                           
S-1-5-32-545 BUILTIN\Users (Local Group)
S-1-5-32-546 BUILTIN\Guests (Local Group)
S-1-5-32-547 BUILTIN\Power Users (Local Group)
S-1-5-32-548 BUILTIN\Account Operators (Local Group)
S-1-5-32-549 BUILTIN\Server Operators (Local Group)
S-1-5-32-550 BUILTIN\Print Operators (Local Group)

[+] Enumerating users using SID S-1-22-1 and logon username '', password ''                                                                                                                                                                 
                                                                                                                                                                                                                                            
S-1-22-1-1000 Unix User\htllab01 (Local User)                                                                                                                                                                                               
S-1-22-1-1002 Unix User\ftp (Local User)

[+] Enumerating users using SID S-1-22-2 and logon username '', password ''                                                                                                                                                                 
                                                                                                                                                                                                                                            
S-1-22-2-1000 Unix Group\administrator (Domain Group)                                                                                                                                                                                       
S-1-22-2-1002 Unix Group\htllab01 (Domain Group)
S-1-22-2-1003 Unix Group\ftp (Domain Group)

 =================================( Getting printer info for 10.0.2.18 )=================================
                                                                                                                                                                                                                                            
No printers returned.                                                                                                                                                                                                                       


enum4linux complete on Wed Dec 10 13:24:35 2025

```

### ssh enum
```sh
┌──(kali㉿kali)-[~/htllab1]
└─$ ssh htllab01@10.0.2.18                                                          
The authenticity of host '10.0.2.18 (10.0.2.18)' can't be established.
ED25519 key fingerprint is SHA256:eeNKTTakhvXyaWVPMDTB9+/4WEg6WKZwlUp0ATptgb0.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.0.2.18' (ED25519) to the list of known hosts.
===============================================================
 ||  H  A  C  K  T  O  L  I  V  E    S  Y  S  T  E  M  ||
===============================================================
        01001000 01100001 01100011 01101011 01010100
        01101111 01001100 01101001 01110110 01100101

   WARNING: You are attempting to access a secured system.
   Every keystroke is monitored in real-time.
   Unauthorized access = Immediate trace + permanent log.
   User-Agent: fb831f965a1e3f3ee3af2b3c2de8be12
===============================================================
htllab01@10.0.2.18's password: 

Permission denied, please try again.
htllab01@10.0.2.18's password: 
Permission denied, please try again.
htllab01@10.0.2.18's password: 
Connection closed by 10.0.2.18 port 22
```
