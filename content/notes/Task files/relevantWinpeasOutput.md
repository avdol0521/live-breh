---
title: "relevantWinpeasOutput"
tags:
  - fetus
---
```sh

            ((,.,/((((((((((((((((((((/,  */
     ,/*,..*(((((((((((((((((((((((((((((((((,                                                                              
   ,*/((((((((((((((((((/,  .*//((//**, .*((((((*                                                                           
   ((((((((((((((((* *****,,,/########## .(* ,((((((                                                                        
   (((((((((((/* ******************/####### .(. ((((((                                                                      
   ((((((..******************/@@@@@/***/###### /((((((                                                                      
   ,,..**********************@@@@@@@@@@(***,#### ../(((((                                                                   
   , ,**********************#@@@@@#@@@@*********##((/ /((((                                                                 
   ..(((##########*********/#@@@@@@@@@/*************,,..((((                                                                
   .(((################(/******/@@@@@#****************.. /((                                                                
   .((########################(/************************..*(                                                                
   .((#############################(/********************.,(                                                                
   .((##################################(/***************..(                                                                
   .((######################################(************..(                                                                
   .((######(,.***.,(###################(..***(/*********..(                                                                
   .((######*(#####((##################((######/(********..(                                                                
   .((##################(/**********(################(**...(                                                                
   .(((####################/*******(###################.((((                                                                
   .(((((############################################/  /((                                                                 
   ..(((((#########################################(..(((((.                                                                
   ....(((((#####################################( .((((((.                                                                 
   ......(((((#################################( .(((((((.                                                                  
   (((((((((. ,(############################(../(((((((((.                                                                  
       (((((((((/,  ,####################(/..((((((((((.                                                                    
             (((((((((/,.  ,*//////*,. ./(((((((((((.                                                                       
                (((((((((((((((((((((((((((/                                                                                
                       by carlospolop                                                                                       
                                                                                                                            
                                                                                                                            
/!\ Advisory: WinPEAS - Windows local Privilege Escalation Awesome Script                                                   
   WinPEAS should be used for authorized penetration testing and/or educational purposes only.                              
   Any misuse of this software will not be the responsibility of the author or of any other collaborator.                   
   Use it at your own networks and/or with the network owner's permission.                                                  
                                                                                                                            
[*] BASIC SYSTEM INFO                                                                                                       
 [+] WINDOWS OS                                                                                                             
   [i] Check for vulnerabilities for the OS version with the applied patches                                                
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#version-exploits     
                                                                                                                            
Host Name:                 RELEVANT                                                                                         
OS Name:                   Microsoft Windows Server 2016 Standard Evaluation                                                
OS Version:                10.0.14393 N/A Build 14393                                                                       
OS Manufacturer:           Microsoft Corporation                                                                            
OS Configuration:          Standalone Server                                                                                
OS Build Type:             Multiprocessor Free                                                                              
Registered Owner:          Windows User                                                                                     
Registered Organization:                                                                                                    
Product ID:                00378-00000-00000-AA739                                                                          
Original Install Date:     7/25/2020, 7:56:59 AM                                                                            
System Boot Time:          4/23/2025, 9:59:03 AM                                                                            
System Manufacturer:       Xen                                                                                              
System Model:              HVM domU                                                                                         
System Type:               x64-based PC                                                                                     
Processor(s):              1 Processor(s) Installed.                                                                        
                           [01]: Intel64 Family 6 Model 79 Stepping 1 GenuineIntel ~2300 Mhz                                
BIOS Version:              Xen 4.11.amazon, 8/24/2006                                                                       
Windows Directory:         C:\Windows                                                                                       
System Directory:          C:\Windows\system32                                                                              
Boot Device:               \Device\HarddiskVolume1                                                                          
System Locale:             en-us;English (United States)                                                                    
Input Locale:              en-us;English (United States)                                                                    
Time Zone:                 (UTC-08:00) Pacific Time (US & Canada)                                                           
Total Physical Memory:     512 MB                                                                                           
Available Physical Memory: 72 MB                                                                                            
Virtual Memory: Max Size:  1,536 MB                                                                                         
Virtual Memory: Available: 684 MB                                                                                           
Virtual Memory: In Use:    852 MB                                                                                           
Page File Location(s):     C:\pagefile.sys                                                                                  
Domain:                    WORKGROUP                                                                                        
Logon Server:              N/A                                                                                              
Hotfix(s):                 3 Hotfix(s) Installed.                                                                           
                           [01]: KB3192137                                                                                  
                           [02]: KB3211320                                                                                  
                           [03]: KB3213986                                                                                  
Network Card(s):           1 NIC(s) Installed.                                                                              
                           [01]: AWS PV Network Device                                                                      
                                 Connection Name: Ethernet 2                                                                
                                 DHCP Enabled:    Yes                                                                       
                                 DHCP Server:     10.10.0.1                                                                 
                                 IP address(es)                                                                             
                                 [01]: 10.10.205.87                                                                         
                                 [02]: fe80::b529:b094:c32d:9979                                                            
Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.             
                                                                                                                            
Caption                                     Description      HotFixID   InstalledOn                                         
http://support.microsoft.com/?kbid=3192137  Update           KB3192137  9/12/2016                                           
http://support.microsoft.com/?kbid=3211320  Update           KB3211320  1/7/2017                                            
http://support.microsoft.com/?kbid=3213986  Security Update  KB3213986  1/7/2017                                            
                                                                                                                            
                                                                                                                            
                                                                                                                            
 [+] DATE and TIME                                                                                                          
   [i] You may need to adjust your local date/time to exploit some vulnerability                                            
Wed 04/23/2025                                                                                                              
10:40 AM                                                                                                                    
                                                                                                                            
 [+] Audit Settings                                                                                                         
   [i] Check what is being logged                                                                                           
                                                                                                                            
                                                                                                                            
 [+] WEF Settings                                                                                                           
   [i] Check where are being sent the logs                                                                                  
                                                                                                                            
 [+] Legacy Microsoft LAPS installed?                                                                                       
   [i] Check what is being logged                                                                                           
                                                                                                                            
 [+] Windows LAPS installed?                                                                                                
   [i] Check what is being logged: 0x00 Disabled, 0x01 Backup to Entra, 0x02 Backup to Active Directory                     
                                                                                                                            
 [+] LSA protection?                                                                                                        
   [i] Active if "1"                                                                                                        
                                                                                                                            
                                                                                                                            
 [+] Credential Guard?                                                                                                      
   [i] Active if "1" or "2"                                                                                                 
                                                                                                                            
                                                                                                                            
                                                                                                                            
 [+] WDigest?                                                                                                               
   [i] Plain-text creds in memory if "1"                                                                                    
                                                                                                                            
 [+] Number of cached creds                                                                                                 
   [i] You need System-rights to extract them                                                                               
                                                                                                                            
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon                                                    
    CACHEDLOGONSCOUNT    REG_SZ    10                                                                                       
                                                                                                                            
 [+] UAC Settings                                                                                                           
   [i] If the results read ENABLELUA REG_DWORD 0x1, part or all of the UAC components are on                                
   [?] https://book.hacktricks.wiki/en/windows-hardening/authentication-credentials-uac-and-efs/uac-user-account-control.html#very-basic-uac-bypass-full-file-system-access                                                                             
                                                                                                                            
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\System                                                
    EnableLUA    REG_DWORD    0x1                                                                                           
                                                                                                                            
                                                                                                                            
 [+] Registered Anti-Virus(AV)                                                                                              
ERROR:                                                                                                                      
Description = Invalid namespace                                                                                             
                                                                                                                            
Checking for defender whitelisted PATHS                                                                                     
                                                                                                                            
 [+] PowerShell settings                                                                                                    
PowerShell v2 Version:                                                                                                      
                                                                                                                            
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\PowerShellEngine                                                         
    PowerShellVersion    REG_SZ    2.0                                                                                      
                                                                                                                            
PowerShell v5 Version:                                                                                                      
                                                                                                                            
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\3\PowerShellEngine                                                         
    PowerShellVersion    REG_SZ    5.1.14393.0                                                                              
                                                                                                                            
Transcriptions Settings:                                                                                                    
Module logging settings:                                                                                                    
Scriptblog logging settings:                                                                                                
                                                                                                                            
PS default transcript history                                                                                               
                                                                                                                            
Checking PS history file                                                                                                    
                                                                                                                            
 [+] MOUNTED DISKS                                                                                                          
   [i] Maybe you find something interesting                                                                                 
Caption                                                                                                                     
C:                                                                                                                          
                                                                                                                            
                                                                                                                            
                                                                                                                            
 [+] ENVIRONMENT                                                                                                            
   [i] Interesting information?                                                                                             
                                                                                                                            
ALLUSERSPROFILE=C:\ProgramData                                                                                              
APPDATA=C:\Windows\system32\config\systemprofile\AppData\Roaming                                                            
APP_POOL_CONFIG=C:\inetpub\temp\apppools\DefaultAppPool\DefaultAppPool.config                                               
APP_POOL_ID=DefaultAppPool                                                                                                  
CommonProgramFiles=C:\Program Files\Common Files                                                                            
CommonProgramFiles(x86)=C:\Program Files (x86)\Common Files                                                                 
CommonProgramW6432=C:\Program Files\Common Files                                                                            
COMPUTERNAME=RELEVANT                                                                                                       
ComSpec=C:\Windows\system32\cmd.exe                                                                                         
CurrentFolder=C:\Windows\Temp\                                                                                              
CurrentLine= 0x1B[33m[+]0x1B[97m ENVIRONMENT                                                                                
E=0x1B[                                                                                                                     
expl=no                                                                                                                     
LOCALAPPDATA=C:\Windows\system32\config\systemprofile\AppData\Local                                                         
long=false                                                                                                                  
NUMBER_OF_PROCESSORS=1                                                                                                      
OS=Windows_NT                                                                                                               
Path=C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\system32\config\systemprofile\AppData\Local\Microsoft\WindowsApps                                                                   
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC                                                               
Percentage=1                                                                                                                
PercentageTrack=20                                                                                                          
PROCESSOR_ARCHITECTURE=AMD64                                                                                                
PROCESSOR_IDENTIFIER=Intel64 Family 6 Model 79 Stepping 1, GenuineIntel                                                     
PROCESSOR_LEVEL=6                                                                                                           
PROCESSOR_REVISION=4f01                                                                                                     
ProgramData=C:\ProgramData                                                                                                  
ProgramFiles=C:\Program Files                                                                                               
ProgramFiles(x86)=C:\Program Files (x86)                                                                                    
ProgramW6432=C:\Program Files                                                                                               
PROMPT=$P$G                                                                                                                 
PSModulePath=C:\Program Files\WindowsPowerShell\Modules;C:\Windows\system32\WindowsPowerShell\v1.0\Modules                  
PUBLIC=C:\Users\Public                                                                                                      
SystemDrive=C:                                                                                                              
SystemRoot=C:\Windows                                                                                                       
TEMP=C:\Windows\TEMP                                                                                                        
TMP=C:\Windows\TEMP                                                                                                         
USERDOMAIN=WORKGROUP                                                                                                        
USERNAME=RELEVANT$                                                                                                          
USERPROFILE=C:\Windows\system32\config\systemprofile                                                                        
windir=C:\Windows                                                                                                           
                                                                                                                            
 [+] INSTALLED SOFTWARE                                                                                                     
   [i] Some weird software? Check for vulnerabilities in unknow software installed                                          
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#applications         
                                                                                                                            
Amazon                                                                                                                      
Common Files                                                                                                                
Common Files                                                                                                                
Internet Explorer                                                                                                           
Internet Explorer                                                                                                           
Microsoft.NET                                                                                                               
Oracle                                                                                                                      
Windows Defender                                                                                                            
Windows Defender                                                                                                            
Windows Mail                                                                                                                
Windows Mail                                                                                                                
Windows Media Player                                                                                                        
Windows Media Player                                                                                                        
Windows Multimedia Platform                                                                                                 
Windows Multimedia Platform                                                                                                 
Windows NT                                                                                                                  
Windows NT                                                                                                                  
Windows Photo Viewer                                                                                                        
Windows Photo Viewer                                                                                                        
Windows Portable Devices                                                                                                    
Windows Portable Devices                                                                                                    
WindowsPowerShell                                                                                                           
WindowsPowerShell                                                                                                           
                                                                                                                            
 [+] Remote Desktop Credentials Manager                                                                                     
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#remote-desktop-credential-manager                                                                                                                
                                                                                                                            
 [+] WSUS                                                                                                                   
   [i] You can inject 'fake' updates into non-SSL WSUS traffic (WSUXploit)                                                  
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#wsus                 
                                                                                                                            
 [+] RUNNING PROCESSES                                                                                                      
   [i] Something unexpected is running? Check for vulnerabilities                                                           
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#running-processes    
                                                                                                                            
Image Name                     PID Services                                                                                 
========================= ======== ============================================                                             
System Idle Process              0 N/A                                                                                      
System                           4 N/A                                                                                      
smss.exe                       392 N/A                                                                                      
csrss.exe                      528 N/A                                                                                      
csrss.exe                      596 N/A                                                                                      
wininit.exe                    612 N/A                                                                                      
winlogon.exe                   648 N/A                                                                                      
services.exe                   712 N/A                                                                                      
lsass.exe                      724 KeyIso, SamSs                                                                            
svchost.exe                    792 BrokerInfrastructure, DcomLaunch, LSM,                                                   
                                   PlugPlay, Power, SystemEventsBroker                                                      
svchost.exe                    840 RpcEptMapper, RpcSs                                                                      
svchost.exe                    980 Appinfo, CertPropSvc, DsmSvc, gpsvc,                                                     
                                   iphlpsvc, ProfSvc, Schedule, SENS,                                                       
                                   SessionEnv, ShellHWDetection, Themes,                                                    
                                   UserManager, UsoSvc, Winmgmt, wlidsvc,                                                   
                                   WpnService, wuauserv                                                                     
svchost.exe                    988 TermService                                                                              
dwm.exe                        996 N/A                                                                                      
svchost.exe                     96 NcbService, PcaSvc, TrkWks, UALSVC,                                                      
                                   UmRdpService, WdiSystemHost, wudfsvc                                                     
svchost.exe                    376 Dhcp, EventLog, lmhosts, TimeBrokerSvc                                                   
svchost.exe                    432 EventSystem, FontCache, LicenseManager,                                                  
                                   netprofm, nsi, W32Time, WdiServiceHost,                                                  
                                   WinHttpAutoProxySvc                                                                      
svchost.exe                   1072 BFE, CoreMessagingRegistrar, DPS, MpsSvc                                                 
svchost.exe                   1120 CryptSvc, Dnscache, LanmanWorkstation,                                                   
                                   NlaSvc, WinRM                                                                            
svchost.exe                   1392 Wcmsvc                                                                                   
spoolsv.exe                   1692 Spooler                                                                                  
svchost.exe                   1716 AppHostSvc                                                                               
svchost.exe                   1728 DiagTrack                                                                                
LiteAgent.exe                 1768 AWSLiteAgent                                                                             
inetinfo.exe                  1776 IISADMIN                                                                                 
svchost.exe                   1792 LanmanServer                                                                             
svchost.exe                   1916 W3SVC, WAS                                                                               
svchost.exe                   1928 tiledatamodelsvc                                                                         
wlms.exe                      1940 WLMS                                                                                     
MsMpEng.exe                   1948 WinDefend                                                                                
sppsvc.exe                    2092 sppsvc                                                                                   
svchost.exe                   2252 PolicyAgent                                                                              
LogonUI.exe                   2568 N/A                                                                                      
SppExtComObj.Exe              3064 N/A                                                                                      
msdtc.exe                     1584 MSDTC                                                                                    
MpCmdRun.exe                   752 N/A                                                                                      
vds.exe                       2856 vds                                                                                      
taskhostw.exe                 2384 N/A                                                                                      
MpCmdRun.exe                  1560 N/A                                                                                      
MpCmdRun.exe                  1804 N/A                                                                                      
conhost.exe                   2788 N/A                                                                                      
conhost.exe                   1108 N/A                                                                                      
TrustedInstaller.exe          2332 TrustedInstaller                                                                         
TiWorker.exe                  1684 N/A                                                                                      
cmd.exe                       2360 N/A                                                                                      
conhost.exe                   4048 N/A                                                                                      
w3wp.exe                      3460 N/A                                                                                      
cmd.exe                       3960 N/A                                                                                      
conhost.exe                   3984 N/A                                                                                      
svchost.exe                   2984 N/A                                                                                      
svchost.exe                   3244 AppXSvc, ClipSVC                                                                         
WmiPrvSE.exe                  2388 N/A                                                                                      
tasklist.exe                  3508 N/A                                                                                      
                                                                                                                            
   [i] Checking file permissions of running processes (File backdooring - maybe the same files start automatically when Administrator logs in)                                                                                                          
                                                                                                                            
   [i] Checking directory permissions of running processes (DLL injection)                                                  
                                                                                                                            
 [+] RUN AT STARTUP                                                                                                         
   [i] Check if you can modify any binary that is going to be executed by admin or if you can impersonate a not found binary
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#run-at-startup       
C:\Documents and Settings\All Users\Start Menu\Programs\Startup\desktop.ini BUILTIN\Administrators:(F)                      
                                                                                                                            
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\desktop.ini BUILTIN\Administrators:(F)                         
                                                                                                                            
                                                                                                                            
Folder: \                                                                                                                   
INFO: There are no scheduled tasks presently available at your access level.                                                
                                                                                                                            
Folder: \Microsoft                                                                                                          
INFO: There are no scheduled tasks presently available at your access level.                                                
                                                                                                                            
Folder: \Microsoft\Windows                                                                                                  
INFO: There are no scheduled tasks presently available at your access level.                                                
                                                                                                                            
Folder: \Microsoft\Windows\.NET Framework                                                                                   
.NET Framework NGEN v4.0.30319           N/A                    Ready                                                       
.NET Framework NGEN v4.0.30319 64        N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Active Directory Rights Management Services Client                                               
AD RMS Rights Policy Template Management N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\AppID                                                                                            
SmartScreenSpecific                      N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Application Experience                                                                           
Microsoft Compatibility Appraiser        4/24/2025 3:11:30 AM   Ready                                                       
ProgramDataUpdater                       N/A                    Ready                                                       
StartupAppTask                           N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\ApplicationData                                                                                  
appuriverifierdaily                      4/24/2025 3:00:00 AM   Ready                                                       
appuriverifierinstall                    4/26/2025 3:00:00 AM   Ready                                                       
CleanupTemporaryState                    N/A                    Ready                                                       
DsSvcCleanup                             N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\AppxDeploymentClient                                                                             
                                                                                                                            
Folder: \Microsoft\Windows\Autochk                                                                                          
Proxy                                    N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Bluetooth                                                                                        
UninstallDeviceTask                      N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Chkdsk                                                                                           
ProactiveScan                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Clip                                                                                             
                                                                                                                            
Folder: \Microsoft\Windows\CloudExperienceHost                                                                              
CreateObjectTask                         N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Customer Experience Improvement Program                                                          
Consolidator                             4/23/2025 12:00:00 PM  Ready                                                       
KernelCeipTask                           N/A                    Ready                                                       
UsbCeip                                  N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Data Integrity Scan                                                                              
Data Integrity Scan                      5/7/2025 8:59:45 PM    Ready                                                       
Data Integrity Scan for Crash Recovery   N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Defrag                                                                                           
ScheduledDefrag                          N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Device Information                                                                               
Device                                   4/24/2025 3:06:08 AM   Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Diagnosis                                                                                        
Scheduled                                N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\DiskCleanup                                                                                      
SilentCleanup                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\DiskDiagnostic                                                                                   
Microsoft-Windows-DiskDiagnosticDataColl N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\DiskFootprint                                                                                    
Diagnostics                              N/A                    Ready                                                       
StorageSense                             N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\EDP                                                                                              
EDP App Launch Task                      N/A                    Ready                                                       
EDP Auth Task                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\ErrorDetails                                                                                     
EnableErrorDetailsUpdate                 N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\License Manager                                                                                  
TempSignedLicenseExchange                N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Live                                                                                             
INFO: There are no scheduled tasks presently available at your access level.                                                
                                                                                                                            
Folder: \Microsoft\Windows\Location                                                                                         
Notifications                            N/A                    Ready                                                       
WindowsActionDialog                      N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Maintenance                                                                                      
WinSAT                                   N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Maps                                                                                             
MapsToastTask                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\MemoryDiagnostic                                                                                 
                                                                                                                            
Folder: \Microsoft\Windows\Mobile Broadband Accounts                                                                        
MNO Metadata Parser                      N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\MUI                                                                                              
LPRemove                                 N/A                    Queued                                                      
                                                                                                                            
Folder: \Microsoft\Windows\Multimedia                                                                                       
                                                                                                                            
Folder: \Microsoft\Windows\NetTrace                                                                                         
GatherNetworkInfo                        N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Offline Files                                                                                    
                                                                                                                            
Folder: \Microsoft\Windows\PLA                                                                                              
                                                                                                                            
Folder: \Microsoft\Windows\Plug and Play                                                                                    
Device Install Group Policy              N/A                    Ready                                                       
Device Install Reboot Required           N/A                    Ready                                                       
Plug and Play Cleanup                    N/A                    Ready                                                       
Sysprep Generalize Drivers               N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Power Efficiency Diagnostics                                                                     
AnalyzeSystem                            N/A                    Queued                                                      
                                                                                                                            
Folder: \Microsoft\Windows\RecoveryEnvironment                                                                              
VerifyWinRE                              N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Server Manager                                                                                   
CleanupOldPerfLogs                       N/A                    Ready                                                       
ServerManager                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Servicing                                                                                        
StartComponentCleanup                    N/A                    Running                                                     
                                                                                                                            
Folder: \Microsoft\Windows\SettingSync                                                                                      
BackgroundUploadTask                     N/A                    Ready                                                       
BackupTask                               N/A                    Ready                                                       
NetworkStateChangeTask                   N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Shell                                                                                            
CreateObjectTask                         N/A                    Ready                                                       
IndexerAutomaticMaintenance              N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Software Inventory Logging                                                                       
Configuration                            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\SpacePort                                                                                        
SpaceAgentTask                           N/A                    Ready                                                       
SpaceManagerTask                         N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Storage Tiers Management                                                                         
Storage Tiers Management Initialization  N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\TextServicesFramework                                                                            
MsCtfMonitor                             N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Time Synchronization                                                                             
ForceSynchronizeTime                     N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Time Zone                                                                                        
SynchronizeTimeZone                      N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\UpdateOrchestrator                                                                               
Reboot                                   N/A                    Ready                                                       
Refresh Settings                         4/23/2025 7:06:51 PM   Ready                                                       
Schedule Retry Scan                      N/A                    Ready                                                       
Schedule Scan                            4/24/2025 10:13:31 AM  Ready                                                       
USO_UxBroker_Display                     N/A                    Ready                                                       
USO_UxBroker_ReadyToReboot               N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\UPnP                                                                                             
UPnPHostConfig                           N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Windows Defender                                                                                 
Windows Defender Cache Maintenance       N/A                    Running                                                     
Windows Defender Cleanup                 N/A                    Ready                                                       
Windows Defender Scheduled Scan          N/A                    Running                                                     
Windows Defender Verification            N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Windows Error Reporting                                                                          
QueueReporting                           4/23/2025 3:09:13 PM   Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Windows Filtering Platform                                                                       
BfeOnServiceStartTypeChange              N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\WindowsColorSystem                                                                               
                                                                                                                            
Folder: \Microsoft\Windows\WindowsUpdate                                                                                    
Automatic App Update                     4/23/2025 4:27:10 PM   Ready                                                       
Scheduled Start                          N/A                    Ready                                                       
sih                                      4/23/2025 2:07:12 PM   Ready                                                       
sihboot                                  N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Wininet                                                                                          
CacheTask                                N/A                    Ready                                                       
                                                                                                                            
Folder: \Microsoft\Windows\Workplace Join                                                                                   
                                                                                                                            
Folder: \Microsoft\XblGameSave                                                                                              
XblGameSaveTask                          N/A                    Ready                                                       
XblGameSaveTaskLogon                     N/A                    Ready                                                       
                                                                                                                            
 [+] AlwaysInstallElevated?                                                                                                 
   [i] If '1' then you can install a .msi file with admin privileges ;)                                                     
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#alwaysinstallelevated-1                                                                                                                          
                                                                                                                            
[*] NETWORK                                                                                                                 
 [+] CURRENT SHARES                                                                                                         
                                                                                                                            
Share name   Resource                        Remark                                                                         
                                                                                                                            
-------------------------------------------------------------------------------                                             
C$           C:\                             Default share                                                                  
IPC$                                         Remote IPC                                                                     
ADMIN$       C:\Windows                      Remote Admin                                                                   
nt4wrksv     C:\inetpub\wwwroot\nt4wrksv                                                                                    
The command completed successfully.                                                                                         
                                                                                                                            
                                                                                                                            
 [+] INTERFACES                                                                                                             
                                                                                                                            
Windows IP Configuration                                                                                                    
                                                                                                                            
   Host Name . . . . . . . . . . . . : Relevant                                                                             
   Primary Dns Suffix  . . . . . . . :                                                                                      
   Node Type . . . . . . . . . . . . : Hybrid                                                                               
   IP Routing Enabled. . . . . . . . : No                                                                                   
   WINS Proxy Enabled. . . . . . . . : No                                                                                   
   DNS Suffix Search List. . . . . . : eu-west-1.ec2-utilities.amazonaws.com                                                
                                       eu-west-1.compute.internal                                                           
                                                                                                                            
Ethernet adapter Ethernet 2:                                                                                                
                                                                                                                            
   Connection-specific DNS Suffix  . : eu-west-1.compute.internal                                                           
   Description . . . . . . . . . . . : AWS PV Network Device #0                                                             
   Physical Address. . . . . . . . . : 02-C9-31-09-2D-F7                                                                    
   DHCP Enabled. . . . . . . . . . . : Yes                                                                                  
   Autoconfiguration Enabled . . . . : Yes                                                                                  
   Link-local IPv6 Address . . . . . : fe80::b529:b094:c32d:9979%4(Preferred)                                               
   IPv4 Address. . . . . . . . . . . : 10.10.205.87(Preferred)                                                              
   Subnet Mask . . . . . . . . . . . : 255.255.0.0                                                                          
   Lease Obtained. . . . . . . . . . : Wednesday, April 23, 2025 9:59:20 AM                                                 
   Lease Expires . . . . . . . . . . : Wednesday, April 23, 2025 11:29:21 AM                                                
   Default Gateway . . . . . . . . . : 10.10.0.1                                                                            
   DHCP Server . . . . . . . . . . . : 10.10.0.1                                                                            
   DHCPv6 IAID . . . . . . . . . . . : 101073078                                                                            
   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-26-AE-44-DC-08-00-27-7C-35-30                                            
   DNS Servers . . . . . . . . . . . : 10.0.0.2                                                                             
   NetBIOS over Tcpip. . . . . . . . : Enabled                                                                              
                                                                                                                            
Tunnel adapter Local Area Connection* 2:                                                                                    
                                                                                                                            
   Connection-specific DNS Suffix  . :                                                                                      
   Description . . . . . . . . . . . : Teredo Tunneling Pseudo-Interface                                                    
   Physical Address. . . . . . . . . : 00-00-00-00-00-00-00-E0                                                              
   DHCP Enabled. . . . . . . . . . . : No                                                                                   
   Autoconfiguration Enabled . . . . : Yes                                                                                  
   IPv6 Address. . . . . . . . . . . : 2001:0:2851:782c:c57:1adc:f5f5:32a8(Preferred)                                       
   Link-local IPv6 Address . . . . . : fe80::c57:1adc:f5f5:32a8%3(Preferred)                                                
   Default Gateway . . . . . . . . . : ::                                                                                   
   DHCPv6 IAID . . . . . . . . . . . : 134217728                                                                            
   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-26-AE-44-DC-08-00-27-7C-35-30                                            
   NetBIOS over Tcpip. . . . . . . . : Disabled                                                                             
                                                                                                                            
Tunnel adapter isatap.eu-west-1.compute.internal:                                                                           
                                                                                                                            
   Media State . . . . . . . . . . . : Media disconnected                                                                   
   Connection-specific DNS Suffix  . : eu-west-1.compute.internal                                                           
   Description . . . . . . . . . . . : Microsoft ISATAP Adapter #2                                                          
   Physical Address. . . . . . . . . : 00-00-00-00-00-00-00-E0                                                              
   DHCP Enabled. . . . . . . . . . . : No                                                                                   
   Autoconfiguration Enabled . . . . : Yes                                                                                  
                                                                                                                            
 [+] USED PORTS                                                                                                             
   [i] Check for services restricted from the outside                                                                       
  TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       4                                                    
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       840                                                  
  TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       4                                                    
  TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING       988                                                  
  TCP    0.0.0.0:5985           0.0.0.0:0              LISTENING       4                                                    
  TCP    0.0.0.0:47001          0.0.0.0:0              LISTENING       4                                                    
  TCP    0.0.0.0:49663          0.0.0.0:0              LISTENING       4                                                    
  TCP    0.0.0.0:49664          0.0.0.0:0              LISTENING       612                                                  
  TCP    0.0.0.0:49665          0.0.0.0:0              LISTENING       376                                                  
  TCP    0.0.0.0:49666          0.0.0.0:0              LISTENING       980                                                  
  TCP    0.0.0.0:49668          0.0.0.0:0              LISTENING       1692                                                 
  TCP    0.0.0.0:49669          0.0.0.0:0              LISTENING       712                                                  
  TCP    0.0.0.0:49672          0.0.0.0:0              LISTENING       724                                                  
  TCP    10.10.205.87:139       0.0.0.0:0              LISTENING       4                                                    
  TCP    [::]:80                [::]:0                 LISTENING       4                                                    
  TCP    [::]:135               [::]:0                 LISTENING       840                                                  
  TCP    [::]:445               [::]:0                 LISTENING       4                                                    
  TCP    [::]:3389              [::]:0                 LISTENING       988                                                  
  TCP    [::]:5985              [::]:0                 LISTENING       4                                                    
  TCP    [::]:47001             [::]:0                 LISTENING       4                                                    
  TCP    [::]:49663             [::]:0                 LISTENING       4                                                    
  TCP    [::]:49664             [::]:0                 LISTENING       612                                                  
  TCP    [::]:49665             [::]:0                 LISTENING       376                                                  
  TCP    [::]:49666             [::]:0                 LISTENING       980                                                  
  TCP    [::]:49668             [::]:0                 LISTENING       1692                                                 
  TCP    [::]:49669             [::]:0                 LISTENING       712                                                  
  TCP    [::]:49672             [::]:0                 LISTENING       724                                                  
                                                                                                                            
 [+] FIREWALL                                                                                                               
                                                                                                                            
Firewall status:                                                                                                            
-------------------------------------------------------------------                                                         
Profile                           = Standard                                                                                
Operational mode                  = Enable                                                                                  
Exception mode                    = Enable                                                                                  
Multicast/broadcast response mode = Enable                                                                                  
Notification mode                 = Disable                                                                                 
Group policy version              = Windows Firewall                                                                        
Remote admin mode                 = Disable                                                                                 
                                                                                                                            
Ports currently open on all network interfaces:                                                                             
Port   Protocol  Version  Program                                                                                           
-------------------------------------------------------------------                                                         
49663  TCP       Any      (null)                                                                                            
                                                                                                                            
IMPORTANT: Command executed successfully.                                                                                   
However, "netsh firewall" is deprecated;                                                                                    
use "netsh advfirewall firewall" instead.                                                                                   
For more information on using "netsh advfirewall firewall" commands                                                         
instead of "netsh firewall", see KB article 947709                                                                          
at http://go.microsoft.com/fwlink/?linkid=121488 .                                                                          
                                                                                                                            
                                                                                                                            
                                                                                                                            
Domain profile configuration:                                                                                               
-------------------------------------------------------------------                                                         
Operational mode                  = Enable                                                                                  
Exception mode                    = Enable                                                                                  
Multicast/broadcast response mode = Enable                                                                                  
Notification mode                 = Disable                                                                                 
                                                                                                                            
Service configuration for Domain profile:                                                                                   
Mode     Customized  Name                                                                                                   
-------------------------------------------------------------------                                                         
Enable   No          Remote Desktop                                                                                         
                                                                                                                            
Allowed programs configuration for Domain profile:                                                                          
Mode     Traffic direction    Name / Program                                                                                
-------------------------------------------------------------------                                                         
                                                                                                                            
Port configuration for Domain profile:                                                                                      
Port   Protocol  Mode    Traffic direction     Name                                                                         
-------------------------------------------------------------------                                                         
49663  TCP       Enable  Inbound               49663 Inbound                                                                
                                                                                                                            
ICMP configuration for Domain profile:                                                                                      
Mode     Type  Description                                                                                                  
-------------------------------------------------------------------                                                         
Enable   2     Allow outbound packet too big                                                                                
                                                                                                                            
Standard profile configuration (current):                                                                                   
-------------------------------------------------------------------                                                         
Operational mode                  = Enable                                                                                  
Exception mode                    = Enable                                                                                  
Multicast/broadcast response mode = Enable                                                                                  
Notification mode                 = Disable                                                                                 
                                                                                                                            
Service configuration for Standard profile:                                                                                 
Mode     Customized  Name                                                                                                   
-------------------------------------------------------------------                                                         
Enable   No          File and Printer Sharing                                                                               
Enable   Yes         Network Discovery                                                                                      
Enable   No          Remote Desktop                                                                                         
                                                                                                                            
Allowed programs configuration for Standard profile:                                                                        
Mode     Traffic direction    Name / Program                                                                                
-------------------------------------------------------------------                                                         
                                                                                                                            
Port configuration for Standard profile:                                                                                    
Port   Protocol  Mode    Traffic direction     Name                                                                         
-------------------------------------------------------------------                                                         
49663  TCP       Enable  Inbound               49663 Inbound                                                                
                                                                                                                            
ICMP configuration for Standard profile:                                                                                    
Mode     Type  Description                                                                                                  
-------------------------------------------------------------------                                                         
Enable   2     Allow outbound packet too big                                                                                
Enable   8     Allow inbound echo request                                                                                   
                                                                                                                            
Log configuration:                                                                                                          
-------------------------------------------------------------------                                                         
File location   = C:\Windows\system32\LogFiles\Firewall\pfirewall.log                                                       
Max file size   = 4096 KB                                                                                                   
Dropped packets = Disable                                                                                                   
Connections     = Disable                                                                                                   
                                                                                                                            
IMPORTANT: Command executed successfully.                                                                                   
However, "netsh firewall" is deprecated;                                                                                    
use "netsh advfirewall firewall" instead.                                                                                   
For more information on using "netsh advfirewall firewall" commands                                                         
instead of "netsh firewall", see KB article 947709                                                                          
at http://go.microsoft.com/fwlink/?linkid=121488 .                                                                          
                                                                                                                            
                                                                                                                            
                                                                                                                            
 [+] ARP                                                                                                                    
                                                                                                                            
Interface: 10.10.205.87 --- 0x4                                                                                             
  Internet Address      Physical Address      Type                                                                          
  10.10.0.1             02-c8-85-b5-5a-aa     dynamic                                                                       
  10.10.255.255         ff-ff-ff-ff-ff-ff     static                                                                        
  224.0.0.22            01-00-5e-00-00-16     static                                                                        
  224.0.0.252           01-00-5e-00-00-fc     static                                                                        
  239.255.255.250       01-00-5e-7f-ff-fa     static                                                                        
  255.255.255.255       ff-ff-ff-ff-ff-ff     static                                                                        
                                                                                                                            
 [+] ROUTES                                                                                                                 
===========================================================================                                                 
Interface List                                                                                                              
  4...02 c9 31 09 2d f7 ......AWS PV Network Device #0                                                                      
  1...........................Software Loopback Interface 1                                                                 
  3...00 00 00 00 00 00 00 e0 Teredo Tunneling Pseudo-Interface                                                             
 10...00 00 00 00 00 00 00 e0 Microsoft ISATAP Adapter #2                                                                   
===========================================================================                                                 
                                                                                                                            
IPv4 Route Table                                                                                                            
===========================================================================                                                 
Active Routes:                                                                                                              
Network Destination        Netmask          Gateway       Interface  Metric                                                 
          0.0.0.0          0.0.0.0        10.10.0.1     10.10.205.87     25                                                 
        10.10.0.0      255.255.0.0         On-link      10.10.205.87    281                                                 
     10.10.205.87  255.255.255.255         On-link      10.10.205.87    281                                                 
    10.10.255.255  255.255.255.255         On-link      10.10.205.87    281                                                 
        127.0.0.0        255.0.0.0         On-link         127.0.0.1    331                                                 
        127.0.0.1  255.255.255.255         On-link         127.0.0.1    331                                                 
  127.255.255.255  255.255.255.255         On-link         127.0.0.1    331                                                 
  169.254.169.123  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
  169.254.169.249  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
  169.254.169.250  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
  169.254.169.251  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
  169.254.169.253  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
  169.254.169.254  255.255.255.255        10.10.0.1     10.10.205.87     50                                                 
        224.0.0.0        240.0.0.0         On-link         127.0.0.1    331                                                 
        224.0.0.0        240.0.0.0         On-link      10.10.205.87    281                                                 
  255.255.255.255  255.255.255.255         On-link         127.0.0.1    331                                                 
  255.255.255.255  255.255.255.255         On-link      10.10.205.87    281                                                 
===========================================================================                                                 
Persistent Routes:                                                                                                          
  Network Address          Netmask  Gateway Address  Metric                                                                 
  169.254.169.254  255.255.255.255        10.10.0.1      25                                                                 
  169.254.169.250  255.255.255.255        10.10.0.1      25                                                                 
  169.254.169.251  255.255.255.255        10.10.0.1      25                                                                 
  169.254.169.249  255.255.255.255        10.10.0.1      25                                                                 
  169.254.169.123  255.255.255.255        10.10.0.1      25                                                                 
  169.254.169.253  255.255.255.255        10.10.0.1      25                                                                 
===========================================================================                                                 
                                                                                                                            
IPv6 Route Table                                                                                                            
===========================================================================                                                 
Active Routes:                                                                                                              
 If Metric Network Destination      Gateway                                                                                 
  3    331 ::/0                     On-link                                                                                 
  1    331 ::1/128                  On-link                                                                                 
  3    331 2001::/32                On-link                                                                                 
  3    331 2001:0:2851:782c:c57:1adc:f5f5:32a8/128                                                                          
                                    On-link                                                                                 
  4    281 fe80::/64                On-link                                                                                 
  3    331 fe80::/64                On-link                                                                                 
  3    331 fe80::c57:1adc:f5f5:32a8/128                                                                                     
                                    On-link                                                                                 
  4    281 fe80::b529:b094:c32d:9979/128                                                                                    
                                    On-link                                                                                 
  1    331 ff00::/8                 On-link                                                                                 
  4    281 ff00::/8                 On-link                                                                                 
  3    331 ff00::/8                 On-link                                                                                 
===========================================================================                                                 
Persistent Routes:                                                                                                          
  None                                                                                                                      
                                                                                                                            
 [+] Hosts file                                                                                                             
                                                                                                                            
 [+] DNS CACHE                                                                                                              
                                                                                                                            
 [+] WIFI                                                                                                                   
[*] BASIC USER INFO                                                                                                         
   [i] Check if you are inside the Administrators group or if you have enabled any token that can be use to escalate privileges like SeImpersonatePrivilege, SeAssignPrimaryPrivilege, SeTcbPrivilege, SeBackupPrivilege, SeRestorePrivilege, SeCreateTokenPrivilege, SeLoadDriverPrivilege, SeTakeOwnershipPrivilege, SeDebbugPrivilege                                            
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#users--groups        
                                                                                                                            
 [+] CURRENT USER                                                                                                           
The user name could not be found.                                                                                           
                                                                                                                            
More help is available by typing NET HELPMSG 2221.                                                                          
                                                                                                                            
The request will be processed at a domain controller for domain WORKGROUP.                                                  
                                                                                                                            
                                                                                                                            
USER INFORMATION                                                                                                            
----------------                                                                                                            
                                                                                                                            
User Name                  SID                                                                                              
========================== =============================================================                                    
iis apppool\defaultapppool S-1-5-82-3006700770-424185619-1745488364-794895919-4004696415                                    
                                                                                                                            
                                                                                                                            
GROUP INFORMATION                                                                                                           
-----------------                                                                                                           
                                                                                                                            
Group Name                           Type             SID          Attributes                                               
==================================== ================ ============ ==================================================       
Mandatory Label\High Mandatory Level Label            S-1-16-12288                                                          
Everyone                             Well-known group S-1-1-0      Mandatory group, Enabled by default, Enabled group       
BUILTIN\Users                        Alias            S-1-5-32-545 Mandatory group, Enabled by default, Enabled group       
NT AUTHORITY\SERVICE                 Well-known group S-1-5-6      Mandatory group, Enabled by default, Enabled group       
CONSOLE LOGON                        Well-known group S-1-2-1      Mandatory group, Enabled by default, Enabled group       
NT AUTHORITY\Authenticated Users     Well-known group S-1-5-11     Mandatory group, Enabled by default, Enabled group       
NT AUTHORITY\This Organization       Well-known group S-1-5-15     Mandatory group, Enabled by default, Enabled group       
BUILTIN\IIS_IUSRS                    Alias            S-1-5-32-568 Mandatory group, Enabled by default, Enabled group       
LOCAL                                Well-known group S-1-2-0      Mandatory group, Enabled by default, Enabled group       
                                     Unknown SID type S-1-5-82-0   Mandatory group, Enabled by default, Enabled group       
                                                                                                                            
                                                                                                                            
PRIVILEGES INFORMATION                                                                                                      
----------------------                                                                                                      
                                                                                                                            
Privilege Name                Description                               State                                               
============================= ========================================= ========                                            
SeAssignPrimaryTokenPrivilege Replace a process level token             Disabled                                            
SeIncreaseQuotaPrivilege      Adjust memory quotas for a process        Disabled                                            
SeAuditPrivilege              Generate security audits                  Disabled                                            
SeChangeNotifyPrivilege       Bypass traverse checking                  Enabled                                             
SeImpersonatePrivilege        Impersonate a client after authentication Enabled                                             
SeCreateGlobalPrivilege       Create global objects                     Enabled                                             
SeIncreaseWorkingSetPrivilege Increase a process working set            Disabled                                            
                                                                                                                            
                                                                                                                            
 [+] USERS                                                                                                                  
                                                                                                                            
User accounts for \\                                                                                                        
                                                                                                                            
-------------------------------------------------------------------------------                                             
Administrator            Bob                      DefaultAccount                                                            
Guest                                                                                                                       
The command completed with one or more errors.                                                                              
                                                                                                                            
                                                                                                                            
 [+] GROUPS                                                                                                                 
                                                                                                                            
Aliases for \\RELEVANT                                                                                                      
                                                                                                                            
-------------------------------------------------------------------------------                                             
*Access Control Assistance Operators                                                                                        
*Administrators                                                                                                             
*Backup Operators                                                                                                           
*Certificate Service DCOM Access                                                                                            
*Cryptographic Operators                                                                                                    
*Distributed COM Users                                                                                                      
*Event Log Readers                                                                                                          
*Guests                                                                                                                     
*Hyper-V Administrators                                                                                                     
*IIS_IUSRS                                                                                                                  
*Network Configuration Operators                                                                                            
*Performance Log Users                                                                                                      
*Performance Monitor Users                                                                                                  
*Power Users                                                                                                                
*Print Operators                                                                                                            
*RDS Endpoint Servers                                                                                                       
*RDS Management Servers                                                                                                     
*RDS Remote Access Servers                                                                                                  
*Remote Desktop Users                                                                                                       
*Remote Management Users                                                                                                    
*Replicator                                                                                                                 
*Storage Replica Administrators                                                                                             
*System Managed Accounts Group                                                                                              
*Users                                                                                                                      
The command completed successfully.                                                                                         
                                                                                                                            
                                                                                                                            
 [+] ADMINISTRATORS GROUPS                                                                                                  
Alias name     Administrators                                                                                               
Comment        Administrators have complete and unrestricted access to the computer/domain                                  
                                                                                                                            
Members                                                                                                                     
                                                                                                                            
-------------------------------------------------------------------------------                                             
Administrator                                                                                                               
The command completed successfully.                                                                                         
                                                                                                                            
                                                                                                                            
 [+] CURRENT LOGGED USERS                                                                                                   
No User exists for *                                                                                                        
                                                                                                                            
 [+] Kerberos Tickets                                                                                                       
                                                                                                                            
Current LogonId is 0:0xc7889                                                                                                
Error calling API LsaCallAuthenticationPackage (ShowTickets substatus): 1312                                                
                                                                                                                            
klist failed with 0xc000005f/-1073741729: A specified logon session does not exist. It may already have been terminated.    
                                                                                                                            
                                                                                                                            
                                                                                                                            
 [+] CURRENT CLIPBOARD                                                                                                      
   [i] Any passwords inside the clipboard?                                                                                  
                                                                                                                            
[*] SERVICE VULNERABILITIES                                                                                                 
                                                                                                                            
 [+] SERVICE BINARY PERMISSIONS WITH WMIC and ICACLS                                                                        
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#services             
C:\Program Files\Amazon\SSM\amazon-ssm-agent.exe NT AUTHORITY\SYSTEM:(I)(F)                                                 
                                                                                                                            
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_state.exe NT SERVICE\TrustedInstaller:(F)                            
                                                                                                                            
C:\Program Files\Amazon\XenTools\LiteAgent.exe NT AUTHORITY\SYSTEM:(I)(F)                                                   
                                                                                                                            
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\SMSvcHost.exe NT SERVICE\TrustedInstaller:(F)                               
                                                                                                                            
C:\Windows\SysWow64\perfhost.exe NT SERVICE\TrustedInstaller:(F)                                                            
                                                                                                                            
C:\Windows\PSSDNSVC.EXE NT AUTHORITY\SYSTEM:(I)(F)                                                                          
                                                                                                                            
C:\Windows\servicing\TrustedInstaller.exe NT SERVICE\TrustedInstaller:(F)                                                   
                                                                                                                            
C:\Program Files\Windows Defender\NisSrv.exe NT SERVICE\TrustedInstaller:(F)                                                
                                                                                                                            
C:\Program Files\Windows Defender\MsMpEng.exe NT SERVICE\TrustedInstaller:(F)                                               
                                                                                                                            
                                                                                                                            
 [+] CHECK IF YOU CAN MODIFY ANY SERVICE REGISTRY                                                                           
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#services             
                                                                                                                            
 [+] UNQUOTED SERVICE PATHS                                                                                                 
   [i] When the path is not quoted (ex: C:\Program files\soft\new folder\exec.exe) Windows will try to execute first 'C:\Program.exe', then 'C:\Program Files\soft\new.exe' and finally 'C:\Program Files\soft\new folder\exec.exe'. Try to create 'C:\Program Files\soft\new.exe'                                                                                                  
   [i] The permissions are also checked and filtered using icacls                                                           
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#services             
aspnet_state                                                                                                                
 C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_state.exe                                                           
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_state.exe NT SERVICE\TrustedInstaller:(F)                            
                                                                                                                            
AWSLiteAgent                                                                                                                
 C:\Program Files\Amazon\XenTools\LiteAgent.exe                                                                             
Invalid parameter "Files\Amazon\XenTools\LiteAgent.exe"                                                                     
NetTcpPortSharing                                                                                                           
 C:\Windows\Microsoft.NET\Framework64\v4.0.30319\SMSvcHost.exe                                                              
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\SMSvcHost.exe NT SERVICE\TrustedInstaller:(F)                               
                                                                                                                            
PerfHost                                                                                                                    
 C:\Windows\SysWow64\perfhost.exe                                                                                           
C:\Windows\SysWow64\perfhost.exe NT SERVICE\TrustedInstaller:(F)                                                            
                                                                                                                            
PsShutdownSvc                                                                                                               
 C:\Windows\PSSDNSVC.EXE                                                                                                    
C:\Windows\PSSDNSVC.EXE NT AUTHORITY\SYSTEM:(I)(F)                                                                          
                                                                                                                            
TrustedInstaller                                                                                                            
 C:\Windows\servicing\TrustedInstaller.exe                                                                                  
C:\Windows\servicing\TrustedInstaller.exe NT SERVICE\TrustedInstaller:(F)                                                   
                                                                                                                            
                                                                                                                            
[*] DLL HIJACKING in PATHenv variable                                                                                       
   [i] Maybe you can take advantage of modifying/creating some binary in some of the following locations                    
   [i] PATH variable entries permissions - place binary or DLL to execute instead of legitimate                             
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#dll-hijacking        
C:\Windows\system32 NT SERVICE\TrustedInstaller:(F)                                                                         
                                                                                                                            
C:\Windows NT SERVICE\TrustedInstaller:(F)                                                                                  
                                                                                                                            
C:\Windows\System32\Wbem NT SERVICE\TrustedInstaller:(F)                                                                    
                                                                                                                            
                                                                                                                            
[*] CREDENTIALS                                                                                                             
                                                                                                                            
 [+] WINDOWS VAULT                                                                                                          
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#credentials-manager--windows-vault                                                                                                               
                                                                                                                            
Currently stored credentials:                                                                                               
                                                                                                                            
* NONE *                                                                                                                    
                                                                                                                            
 [+] DPAPI MASTER KEYS                                                                                                      
   [i] Use the Mimikatz 'dpapi::masterkey' module with appropriate arguments (/rpc) to decrypt                              
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#dpapi                
 [+] DPAPI MASTER KEYS                                                                                                      
   [i] Use the Mimikatz 'dpapi::cred' module with appropriate /masterkey to decrypt                                         
   [i] You can also extract many DPAPI masterkeys from memory with the Mimikatz 'sekurlsa::dpapi' module                    
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#dpapi                
                                                                                                                            
Looking inside C:\Windows\system32\config\systemprofile\AppData\Roaming\Microsoft\Credentials\                              
                                                                                                                            
                                                                                                                            
Looking inside C:\Windows\system32\config\systemprofile\AppData\Local\Microsoft\Credentials\                                
                                                                                                                            
                                                                                                                            
 [+] Unattended files                                                                                                       
                                                                                                                            
 [+] SAM and SYSTEM backups                                                                                                 
                                                                                                                            
 [+] McAffee SiteList.xml                                                                                                   
 Volume in drive C has no label.                                                                                            
 Volume Serial Number is AC3C-5CB5                                                                                          
 Volume in drive C has no label.                                                                                            
 Volume Serial Number is AC3C-5CB5                                                                                          
 Volume in drive C has no label.                                                                                            
 Volume Serial Number is AC3C-5CB5                                                                                          
 Volume in drive C has no label.                                                                                            
 Volume Serial Number is AC3C-5CB5                                                                                          
                                                                                                                            
 [+] GPP Password                                                                                                           
                                                                                                                            
 [+] Cloud Credentials                                                                                                      
                                                                                                                            
 [+] AppCmd                                                                                                                 
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#appcmdexe            
C:\Windows\system32\inetsrv\appcmd.exe exists.                                                                              
                                                                                                                            
 [+] Files in registry that may contain credentials                                                                         
   [i] Searching specific files that may contains credentials.                                                              
   [?] https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html#files-and-registry-credentials                                                                                                                   
Looking inside HKCU\Software\ORL\WinVNC3\Password                                                                           
Looking inside HKEY_LOCAL_MACHINE\SOFTWARE\RealVNC\WinVNC4/password                                                         
Looking inside HKLM\SOFTWARE\Microsoft\Windows NT\Currentversion\WinLogon                                                   
    DefaultDomainName    REG_SZ                                                                                             
    DefaultUserName    REG_SZ                                                                                               
Looking inside HKLM\SYSTEM\CurrentControlSet\Services\SNMP                                                                  
                                                                                                                            
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SNMP\Parameters                                                        
                                                                                                                            
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SNMP\Parameters\ExtensionAgents                                        
    W3SVC    REG_SZ    Software\Microsoft\W3SVC\CurrentVersion                                                              
                                                                                                                            
Looking inside HKCU\Software\TightVNC\Server                                                                                
Looking inside HKCU\Software\SimonTatham\PuTTY\Sessions                                                                     
Looking inside HKCU\Software\OpenSSH\Agent\Keys
```