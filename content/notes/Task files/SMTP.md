---
title: "SMTP"
tags:
  - fetus
---
- is an old protocol that predates unix. follows the internet standards layed out in RFC 5321
- port: 
	- 25 ([[TCP]]) for insecure mail transmission
	- 465 for secure mail transmission ([[SSL]])
	- 587 for secure mail transmission ([[TLS]])
- common smtp servers: 
	- Postfix
	- Exim
	- Sendmail etc
- for sending mails only. doesnt handle incoming mails
- uses [[SSL]]/[[TLS]] for secure email transmission
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
#### upgrade to encrypted [[TLS]] on the same port:
```sh
STARTTLS
```
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
- entering the singular . immediately ends the data block and sends the mail
#### clear mail transaction state and data:
```sh
RSET
```
- clears the current mail transaction state without closing the session. basically all the `MAIL FROM`, `MAIL TO` and `DATA` that has been set gets reset. use it when necessary like in case of a mistake or if you need a clean slate like after a failed `DATA` becuase of size or syntax errors. 
- only resets the current envelope. not any already queued/authenticated state. and doesnt take any extra arguments either
- the server should reply immediately with a `250 OK` 
#### ping the server:
```sh
NOOP
```
- pings the server to see if its still there. doesnt do anything to the established session. the server should reply immediately with a `250 OK` 
- use it to keep idle connections alive if you want or to do a health check before sending a mail or to do a latency test ig
- all smtp servers support it. doesnt take any arguments just like `RSET`
#### verify a user on the server:
```sh
VRFY uname
```
#### start que delivery for a domain (mostly for older dial-up hosts):
```sh
ETRN domain
```
- for intermittent links. basically after you're online. you dial in, authenticate and then do `ETRN` to pull the mail queued up while you were offline
#### close session:
```sh
QUIT
```
## stuff to look out for for exploitation vectors:
- Log poisoning
    - CRLF or shell-meta injection in any header that lands in `/var/log/maillog`.  
    - Look for: unescaped newlines or backticks in logs; unsafe rotation scripts.
	
- Exim backdoor (CVE-2019-10149)

    - Remote root via crafted SMTP “RCPT TO” syntax on Exim < 4.92.3.  
    - Look for: Exim version in `EHLO` banner; verify patch level.
    
- Sendmail “pipe” aliases & .forward
    - Mail piping to `/bin/sh` or scripts via aliases or `.forward`.  
    - Look for: writable `aliases`/`.forward`; suspicious pipe commands.
    
- Procmail RC abuse
    - Malicious recipes in `~/.procmailrc` that run commands on delivery.  
    - Look for: world-writable home dirs; unusual “|” lines in procmail files.
    
- Milter/content_filter exploits
    - AV/spam filters that shell out or misuse untrusted temp files.  
    - Look for: external filter definitions in `main.cf`/`master.cf`; custom scripts.
    
- Buffer overflows in MTA parsers
    - Old MTAs with CVEs in SMTP command handling.  
    - Look for: version strings in banners; public CVE databases.
    
- SMTP AUTH hash capture & relay
    - Grab CRAM-MD5/NTLM hashes and crack offline to send phishing or payload mails.  
    - Look for: weak auth methods enabled; cleartext LOGIN allowed.
    
- Webmail/frontend RCE
    - Roundcube, SquirrelMail or plugins vulnerable to file upload or injection.  
    - Look for: outdated webmail versions; public exploit scripts.
    
- VRFY/EXPN abuse for user enumeration
    - Map users to target custom Sieve/Shell filters or chained scripts.  
    - Look for: VRFY/EXPN enabled in `EHLO` response.
    
- Malformed MIME & downstream parsers
    - Craft multipart mails that trigger bugs in fetchmail, amavis, rspamd.  
    - Look for: custom handlers in pipeline; unpatched CVEs in filter tools.
-  Banner & version grab
	- Check `EHLO`/SMTP banner for MTA type/version. Helps map CVEs. :)
	
-  Open-relay tests
	- Try sending from external→external addresses. If it relays, you’ve got a juicy abuse path. :3
    
-  TLS/STARTTLS config
	- Verify it won’t downgrade to SSLv2/3, weak ciphers, or allow NULL. Broken crypto can leak creds. :)
    
-  Certificate validation
	- Self-signed or expired certs can mean lazy ops, or let you MITM and extract auth tokens. :D
    
-  Default creds & user lists
	- Check common admin panels (webmail, MTA UI) with default logins. Also brute VRFY/EXPN as you noted. :)
    
-  DNS records (SPF/DKIM/DMARC)
	- Misconfigured or missing records can let you spoof or poison more easily. :)
    
-  Open submission ports
	- Port 587/465 might have different policies (auth vs relay) you can abuse. :)