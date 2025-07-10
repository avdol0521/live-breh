---
title: "kali common commands and stuff"
tags:
  - fetus
---
## fun stuff to try out:
##### (make sure to add `/usr/games` to PATH for commands to work)

```sh
cmatrix
```
- wont be installed by default. install it with apt
  
```sh
rev filename
```
- wont be installed by default either
- basically revereses all the strings it can find in a file and outputs it xD or you can type in what you wanna reverse and enter to get the reversed string as well

```sh
cowsay string
```
- ASCII cow says stuff 
- just like the other stuff, wont be installed by default 
  
```sh
oneko
```
- cute neko chasing the cursor （\*＾-＾\*）
  
```sh
sl
```
- ls typo funi hqhqhq 
  
```sh
rig
```
- generates random identities
  

```sh
yes string
```
- repeats a string infinitely or repeats `y` infinitely. can be piped into other commands to automate annoying confirmation dialogues and stuff 
  
```sh
hollywood
```
- emulates hollywood hacking scenes lol. install it with apt as well

```sh
cool-retro-term
```
- self explanatory tbh :v
  
```sh
aafire -extended
```
- installation: `apt install libaa-bin` 
  
```sh
fortune
```
- fortunes :D (pipe into cowsay if you want :3)

```sh
figlet string
```
	
```sh
toilet string
```
- ASCII banners of strings :3 (tip: pipe through `lolcat` to make rgb banners :D)
  
```sh
nyancat
```
- :3
  
```sh
pipes
```
- installation: `apt install pipes-sh`

```sh
espeak "string"
```
- goofy ahh terminal talking hqhqhq

```sh
asciiquarium
```
- [[asciiquarium installation]] 

```sh
factor number
```
- outputs the factors of the given number

```sh
for i in {1..12}; do for j in $(seq 1 $i); do echo -ne $iÃ—$j=$((i*j))\\t;done; echo;done
```
- multiplication table :D

```sh
:(){ :|: & };:
```
- fork bomb :D

```sh
bb
```
- bb

```sh
echo "awughwauhgoahoiwhi;thaoi;hfgoai;ghioaghfkajfkajwbfauwkbgaoiwgbaoiwgbaiowgbao'wbgiaowbgoaibgoiawbgo;awbgioabgoa;wgbao" | pv -qL 50
```
- text typewriting effect 

```sh
aview image.jpg
```
- image to ASCII art :D

```sh
pacman4console
```
- exactly what it sounds like

```sh
curl parrot.live
```
- parrot partyyyyyyyyyyyyyyyyyyyyyy
## networking commands: 
```sh
ip a
```
	
```sh
ping
``` 
- `ping google.com`
		- sends data packets to see if it responds or not. can also add `-c packetnumber` to specify how many packets to send
- `gping` is a solid alternate to ping as well btw
- `dig` 
	- `dig +short google.com`
		- the short switch gives a short answer as the name suggests, just giving the ip addresses 
- `netstat` 
	- tons of switches
	- `-t` shows [[TCP]] connections 
	- `-u` shows [[UDP]] connections
	- `-n` skips DNS lookups so it just shows the ip addresses instead of the hostnames
- `tcpdump` 
	- `tcpdump -i (interface such as eth0) -n`
- `ifconfig` and `iwconfig` (self explanatory)
- traceroute to see route
- nslookup to see dns lookup info 
- route to see routing table 
## navigation and stuff:
- `cd` shortcuts:
	- can do just / for root
	- can also do username to jump to home
- `ls`
	- `ls -lah`
		- lists all files with [[linux file perms and stuff]] listed out including hidden files 
		- the `-h` switch shows human readable sizes instead of bytes
	- ls -i
- `mkdir` 
	- `mkdir -p path` 
		- `-p` makes parents directories as well if they dont exist 
	- mkdir -p /dirname{1..9} 
- `cp`
	- `cp -r /source /destination` 
		- `-r` lets you copy subdirectories and stuff as well
- `find`
	- `find /path -name "filename"`
	- theres other switches as well. like -type as well
	- -iname ignores case sensitivity
- find
	- finds shit from a db of saved paths 
	- needs the database to be updated to find new stuff 
		- do updatedb to update the database
- `grep` 
	- `grep -r "text" /path` 
		- `-r` searches through subdirectories 
		- -E lets you specify other notations in the query string
- `cat` and `less` 
	- use `less` for longer files 
	- `cat file1 file2 > combined.txt`
		- can do this as well to combine files :D
	- `cat /etc/update-motd.d/00-header`
## file manipulation stuff: 
- `touch` to create files 
	- touch filename{1..20} creates 20 files with indexes
- `nano` or `vim` or `mousepad` or `code` to use as an editor
- `echo` 
	- can be used with `>` or `>>` or other stuff with pipes n shit to do more advanced stuff. can do the same with `cat` as well
- `>` to insert and `>>` to append
- `sed` (stream editor)
	- `sed -i 's/(the text you wanna replace)/(the text you wanna replace it with)/g' filename` 
		- `-i` edits the file in place 
		- `s` stands for substitute 
			- can specify the line number before `s` to specify which line number to apply the substitution to 
		- `g` is global. basically applies the change to all occurrences 
	- `sed 'nd' filename` 
		- `n` specify the line you wanna delete like 2 if you wanna delete the 2nd line 
		- `d` specifies that you wanna delete it 
	- `sed '/^$/d' file` 
		- removes empty lines 
- `sort`
	- `sort filename -o filename` 
		- saves the sorted file into itself
	- can do `-u` to get unique lines as well
- head -5 filename 
- tail -5 filename 
- split -l 10
- ln -s filename newfilename
- `exiftool filename`
	- to see metadata :D
- `strings filename`
	- to see human readable stuff
- `xdg-open filename` 
	- opens the file with the default application. quite handy if you ask me :D
## system commands 
- env to view all env variables
- service start/stop/restart
	- apache2 for webservers
- jobs to see suspended jobs
- fg %ID to foreground suspended jobs
- bg %ID to background job
- nohup to give a running process immortality hqhqhqhq
- proc cpuinfo
- `ps -ef`
	- gives a snapshot of all processes in a detailed format
- `hostnamectl`
- `lsb_release -a` (can also check /etc/os-release)
- `run-parts /etc/update-motd.d/` 
	- tests what MOTD looks like without logging out 
- `top`, `htop`, `bpytop` :D
## other stuff:
- `passwd`
	- changes the pass for the specified user 
	- `sudo passwd root` 
- `xfwm4`
	- to troubleshoot UI tweaking
- `rm` variants:
	- `rm -r dirname` 
- [[my git cheatsheet]] 
- ill document tool installation with apt and pip later. i already have everything setup in my kali machine so im feeling kinda lazy. and ill look into pimpmykali later as well.
- 192.168.10.0/30




