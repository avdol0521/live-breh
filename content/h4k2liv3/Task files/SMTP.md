---
title: "SMTP"
tags:
  - fetus
---
- port: 
	- 25 ([[TCP]]) for sending emails
	- 587 for secure mail submission (with STARTTLS whatever that means)
	- 465 for [[SMTP]] over [[SSL]]
- common smtp servers: 
	- Postfix
	- Exim
	- Sendmail etc
## terminal interaction with SMTP:
#### connect to the server:
```sh
telnet smtp.idk.com port
```
- can connect with an IP instead as well
- can use [[netcat]] instead as well
#### help:
```sh
HELP command
```
- can do just `HELP` for a general help output or specify a command to get help for a specific command
#### self identify (older):
```sh
HELO domain
```
#### self identify with server features (modern):
```sh
EHLO domain
```
#### login (two step):
```sh
AUTH LOGIN
input base64 uname
input base64 pass
```
- look into single step login if you want. its called `AUTH PLAIN`
- use `AUTH CRAM-MD5` for more security if you want. 
	- explanation: [[SMTP AUTH CRAM-MD5 explanation]] 
#### declare sender address:
```sh
MAIL FROM:<you@domain.com>
```
#### declare recipient:
```sh
RCPT TO:<them@example.com>
```
#### declare mail data:
```sh
DATA
<headers>
<blank line>
<body>
.
```
- make sure to declare the sender and recipient first
- [[SMTP DATA explanation]] 
#### close session:
```sh
QUIT
```
