---
title: "ICA1-pspyOutput"
tags:
  - fetus
---
```sh
pspy - version: v1.2.1 - Commit SHA: f9e6a1590a4312b9faa093d8dc84e19567977a6d                                                                               
                                                                                                                                                            
                                                                                                                                                            
     ██▓███    ██████  ██▓███ ▓██   ██▓                                                                                                                     
    ▓██░  ██▒▒██    ▒ ▓██░  ██▒▒██  ██▒                                                                                                                     
    ▓██░ ██▓▒░ ▓██▄   ▓██░ ██▓▒ ▒██ ██░                                                                                                                     
    ▒██▄█▓▒ ▒  ▒   ██▒▒██▄█▓▒ ▒ ░ ▐██▓░                                                                                                                     
    ▒██▒ ░  ░▒██████▒▒▒██▒ ░  ░ ░ ██▒▓░                                                                                                                     
    ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░  ██▒▒▒                                                                                                                      
    ░▒ ░     ░ ░▒  ░ ░░▒ ░     ▓██ ░▒░                                                                                                                      
    ░░       ░  ░  ░  ░░       ▒ ▒ ░░                                                                                                                       
                   ░           ░ ░                                                                                                                          
                               ░ ░                                                                                                                          
                                                                                                                                                            
Config: Printing events (colored=true): processes=true | file-system-events=false ||| Scanning for processes every 100ms and on inotify events ||| Watching directories: [/usr /tmp /etc /home /var /opt] (recursive) | [] (non-recursive)                                                                              
Draining file system events due to startup...                                                                                                               
done                                                                                                                                                        
2025/04/28 15:07:59 CMD: UID=1002  PID=1994   | ./pspy64 
2025/04/28 15:07:59 CMD: UID=1002  PID=1991   | /bin/bash -i 
2025/04/28 15:07:59 CMD: UID=0     PID=1990   | 
2025/04/28 15:07:59 CMD: UID=1002  PID=1989   | /bin/sh 
2025/04/28 15:07:59 CMD: UID=0     PID=1977   | 
2025/04/28 15:07:59 CMD: UID=0     PID=1965   | 
2025/04/28 15:07:59 CMD: UID=1001  PID=1848   | rev 
2025/04/28 15:07:59 CMD: UID=1001  PID=1847   | cut -d   -f 1 
2025/04/28 15:07:59 CMD: UID=1001  PID=1846   | rev 
2025/04/28 15:07:59 CMD: UID=1001  PID=1845   | grep -E \(root\)|\(ALL\)|\(ALL : ALL\) 
2025/04/28 15:07:59 CMD: UID=1001  PID=1844   | grep -E sudoedit|sudo -e 
2025/04/28 15:07:59 CMD: UID=0     PID=1843   | sudo -l -S 
2025/04/28 15:07:59 CMD: UID=1001  PID=1840   | /bin/sh -c sudo -l -S | grep -E "sudoedit|sudo -e" | grep -E '\(root\)|\(ALL\)|\(ALL : ALL\)' | rev | cut -d " " -f 1 | rev                                                                                                                                             
2025/04/28 15:07:59 CMD: UID=0     PID=1547   | 
2025/04/28 15:07:59 CMD: UID=1002  PID=1534   | ./shellTravis.elf 
2025/04/28 15:07:59 CMD: UID=1001  PID=1532   | ./shellDexter.elf 
2025/04/28 15:07:59 CMD: UID=1002  PID=1348   | -bash 
2025/04/28 15:07:59 CMD: UID=1002  PID=1347   | sshd: travis@pts/1   
2025/04/28 15:07:59 CMD: UID=1002  PID=1324   | (sd-pam) 
2025/04/28 15:07:59 CMD: UID=1002  PID=1323   | /lib/systemd/systemd --user 
2025/04/28 15:07:59 CMD: UID=0     PID=1320   | sshd: travis [priv]  
2025/04/28 15:07:59 CMD: UID=1001  PID=1316   | -bash 
2025/04/28 15:07:59 CMD: UID=1001  PID=1315   | sshd: dexter@pts/0   
2025/04/28 15:07:59 CMD: UID=1001  PID=1293   | (sd-pam) 
2025/04/28 15:07:59 CMD: UID=1001  PID=1292   | /lib/systemd/systemd --user 
2025/04/28 15:07:59 CMD: UID=0     PID=1289   | sshd: dexter [priv]  
2025/04/28 15:07:59 CMD: UID=0     PID=1125   | 
2025/04/28 15:07:59 CMD: UID=33    PID=541    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=33    PID=540    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=33    PID=539    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=33    PID=538    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=33    PID=537    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=0     PID=483    | /usr/sbin/apache2 -k start 
2025/04/28 15:07:59 CMD: UID=107   PID=478    | /usr/sbin/mysqld 
2025/04/28 15:07:59 CMD: UID=0     PID=465    | sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups 
2025/04/28 15:07:59 CMD: UID=0     PID=428    | /sbin/agetty -o -p -- \u --noclear tty1 linux 
2025/04/28 15:07:59 CMD: UID=0     PID=365    | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:07:59 CMD: UID=0     PID=302    | /sbin/wpa_supplicant -u -s -O /run/wpa_supplicant 
2025/04/28 15:07:59 CMD: UID=0     PID=297    | /lib/systemd/systemd-logind 
2025/04/28 15:07:59 CMD: UID=0     PID=296    | /usr/sbin/rsyslogd -n -iNONE 
2025/04/28 15:07:59 CMD: UID=104   PID=289    | /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only 
2025/04/28 15:07:59 CMD: UID=0     PID=288    | /usr/sbin/cron -f 
2025/04/28 15:07:59 CMD: UID=0     PID=263    | 
2025/04/28 15:07:59 CMD: UID=0     PID=262    | 
2025/04/28 15:07:59 CMD: UID=0     PID=261    | 
2025/04/28 15:07:59 CMD: UID=0     PID=258    | 
2025/04/28 15:07:59 CMD: UID=0     PID=255    | 
2025/04/28 15:07:59 CMD: UID=0     PID=254    | 
2025/04/28 15:07:59 CMD: UID=101   PID=251    | /lib/systemd/systemd-timesyncd 
2025/04/28 15:07:59 CMD: UID=0     PID=249    | 
2025/04/28 15:07:59 CMD: UID=0     PID=247    | 
2025/04/28 15:07:59 CMD: UID=0     PID=246    | 
2025/04/28 15:07:59 CMD: UID=0     PID=241    | 
2025/04/28 15:07:59 CMD: UID=0     PID=224    | 
2025/04/28 15:07:59 CMD: UID=0     PID=196    | /lib/systemd/systemd-udevd 
2025/04/28 15:07:59 CMD: UID=0     PID=171    | /lib/systemd/systemd-journald 
2025/04/28 15:07:59 CMD: UID=0     PID=137    | 
2025/04/28 15:07:59 CMD: UID=0     PID=136    | 
2025/04/28 15:07:59 CMD: UID=0     PID=110    | 
2025/04/28 15:07:59 CMD: UID=0     PID=109    | 
2025/04/28 15:07:59 CMD: UID=0     PID=108    | 
2025/04/28 15:07:59 CMD: UID=0     PID=107    | 
2025/04/28 15:07:59 CMD: UID=0     PID=106    | 
2025/04/28 15:07:59 CMD: UID=0     PID=104    | 
2025/04/28 15:07:59 CMD: UID=0     PID=102    | 
2025/04/28 15:07:59 CMD: UID=0     PID=66     | 
2025/04/28 15:07:59 CMD: UID=0     PID=65     | 
2025/04/28 15:07:59 CMD: UID=0     PID=62     | 
2025/04/28 15:07:59 CMD: UID=0     PID=52     | 
2025/04/28 15:07:59 CMD: UID=0     PID=51     | 
2025/04/28 15:07:59 CMD: UID=0     PID=50     | 
2025/04/28 15:07:59 CMD: UID=0     PID=49     | 
2025/04/28 15:07:59 CMD: UID=0     PID=48     | 
2025/04/28 15:07:59 CMD: UID=0     PID=47     | 
2025/04/28 15:07:59 CMD: UID=0     PID=46     | 
2025/04/28 15:07:59 CMD: UID=0     PID=45     | 
2025/04/28 15:07:59 CMD: UID=0     PID=44     | 
2025/04/28 15:07:59 CMD: UID=0     PID=43     | 
2025/04/28 15:07:59 CMD: UID=0     PID=25     | 
2025/04/28 15:07:59 CMD: UID=0     PID=24     | 
2025/04/28 15:07:59 CMD: UID=0     PID=23     | 
2025/04/28 15:07:59 CMD: UID=0     PID=22     | 
2025/04/28 15:07:59 CMD: UID=0     PID=21     | 
2025/04/28 15:07:59 CMD: UID=0     PID=20     | 
2025/04/28 15:07:59 CMD: UID=0     PID=19     | 
2025/04/28 15:07:59 CMD: UID=0     PID=18     | 
2025/04/28 15:07:59 CMD: UID=0     PID=17     | 
2025/04/28 15:07:59 CMD: UID=0     PID=15     | 
2025/04/28 15:07:59 CMD: UID=0     PID=14     | 
2025/04/28 15:07:59 CMD: UID=0     PID=13     | 
2025/04/28 15:07:59 CMD: UID=0     PID=12     | 
2025/04/28 15:07:59 CMD: UID=0     PID=11     | 
2025/04/28 15:07:59 CMD: UID=0     PID=10     | 
2025/04/28 15:07:59 CMD: UID=0     PID=9      | 
2025/04/28 15:07:59 CMD: UID=0     PID=6      | 
2025/04/28 15:07:59 CMD: UID=0     PID=4      | 
2025/04/28 15:07:59 CMD: UID=0     PID=3      | 
2025/04/28 15:07:59 CMD: UID=0     PID=2      | 
2025/04/28 15:07:59 CMD: UID=0     PID=1      | /sbin/init 
2025/04/28 15:09:01 CMD: UID=0     PID=2001   | /usr/sbin/CRON -f 
2025/04/28 15:09:01 CMD: UID=0     PID=2002   | /usr/sbin/CRON -f 
2025/04/28 15:09:28 CMD: UID=0     PID=2003   | /sbin/init 
2025/04/28 15:09:28 CMD: UID=0     PID=2007   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2006   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2005   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2004   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2008   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2009   | /bin/sh /usr/sbin/phpquery -V 
2025/04/28 15:09:28 CMD: UID=0     PID=2012   | /bin/sh /usr/sbin/phpquery -V 
2025/04/28 15:09:28 CMD: UID=0     PID=2011   | /bin/sh /usr/sbin/phpquery -V 
2025/04/28 15:09:28 CMD: UID=0     PID=2014   | /bin/sh /usr/sbin/phpquery -V 
2025/04/28 15:09:28 CMD: UID=0     PID=2013   | /bin/sh /usr/sbin/phpquery -V 
2025/04/28 15:09:28 CMD: UID=0     PID=2015   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2018   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2017   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2016   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2021   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2020   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2019   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2024   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2023   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2022   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2027   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2026   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2025   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2028   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2031   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2030   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2029   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2034   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2033   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2032   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2037   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2036   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2035   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2040   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2039   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2038   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2041   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2042   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2043   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2044   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2045   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2046   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2047   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:28 CMD: UID=0     PID=2048   | /bin/sh -e /usr/lib/php/sessionclean 
2025/04/28 15:09:32 CMD: UID=0     PID=2051   | 
2025/04/28 15:09:56 CMD: UID=0     PID=2052   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:09:56 CMD: UID=0     PID=2053   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2054   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2055   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2056   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2057   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2058   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2059   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2060   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:09:56 CMD: UID=0     PID=2061   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:12:38 CMD: UID=0     PID=2062   | 
2025/04/28 15:14:04 CMD: UID=0     PID=2064   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:14:04 CMD: UID=0     PID=2065   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2066   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2067   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2068   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2069   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2070   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2071   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2072   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:14:04 CMD: UID=0     PID=2073   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:17:01 CMD: UID=0     PID=2074   | /usr/sbin/CRON -f 
2025/04/28 15:17:01 CMD: UID=0     PID=2075   | /usr/sbin/CRON -f 
2025/04/28 15:17:01 CMD: UID=0     PID=2076   | /bin/sh -c    cd / && run-parts --report /etc/cron.hourly 
2025/04/28 15:17:32 CMD: UID=0     PID=2077   | 
2025/04/28 15:17:50 CMD: UID=0     PID=2078   | 
2025/04/28 15:18:31 CMD: UID=0     PID=2079   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:18:32 CMD: UID=0     PID=2080   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2081   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2082   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2083   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2084   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2085   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2086   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2087   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:18:32 CMD: UID=0     PID=2088   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2090   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:22:47 CMD: UID=0     PID=2091   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2092   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2093   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2094   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2095   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2096   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2097   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2098   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:22:47 CMD: UID=0     PID=2099   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:23:01 CMD: UID=0     PID=2100   | 
2025/04/28 15:23:18 CMD: UID=0     PID=2101   | 
2025/04/28 15:26:49 CMD: UID=0     PID=2102   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:26:49 CMD: UID=0     PID=2103   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2104   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2105   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2106   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2107   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2108   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2109   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2110   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:26:49 CMD: UID=0     PID=2111   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:28:11 CMD: UID=0     PID=2113   | 
2025/04/28 15:30:01 CMD: UID=0     PID=2114   | /usr/sbin/CRON -f 
2025/04/28 15:30:01 CMD: UID=0     PID=2115   | /usr/sbin/CRON -f 
2025/04/28 15:31:05 CMD: UID=0     PID=2116   | /sbin/dhclient -4 -v -i -pf /run/dhclient.enp0s3.pid -lf /var/lib/dhcp/dhclient.enp0s3.leases -I -df /var/lib/dhcp/dhclient6.enp0s3.leases enp0s3                                                                                                                       
2025/04/28 15:31:05 CMD: UID=0     PID=2117   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2118   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2119   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2120   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2121   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2122   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2123   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2124   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:05 CMD: UID=0     PID=2125   | /bin/sh /sbin/dhclient-script 
2025/04/28 15:31:28 CMD: UID=0     PID=2126   | /sbin/init 
2025/04/28 15:33:24 CMD: UID=0     PID=2127   | 
```