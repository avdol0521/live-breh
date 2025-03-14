---
title: "kali common commands and stuff"
tags:
  - fetus
---
## networking commands: 
- `ip`
	- `ip a` 
		- shows the ip addresses assigned to interfaces 
- `ping` 
	- `ping google.com`
		- sends data packets to see if it responds or not. can also add `-c packetnumber` to specify how many packets to send
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
## navigation and stuff:
- `cd` shortcuts:
	- can do just / for root
	- can also do username to jump to home
- `ls`
	- `ls -lah`
		- lists all files with [[kali file perms and stuff]] listed out including hidden files 
		- the `-h` switch shows human readable sizes instead of bytes
- `mkdir` 
	- `mkdir -p path` 
		- `-p` makes parents directories as well if they dont exist 
- `cp`
	- `cp -r /source /destination` 
		- `-r` lets you copy subdirectories and stuff as well
- `find`
	- `find /path -name "filename"`
	- theres other switches as well. like -type as well
- `grep` 
	- `grep -r "text" /path` 
		- `-r` searches through subdirectories 
		- -E lets you specify other notations in the query string
- `cat` and `less` 
	- use `less` for longer files 
	- `cat file1 file2 > combined.txt`
		- can do this as well to combine files :D
## file manipulation stuff: 
- `touch` to create files 
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




