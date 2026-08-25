---
title: "POP3"
tags:
  - fetus
---
- port: 110 ([[TCP]])
- gets email from a server. usually downloads messages to a local client
- read [[SMTP vs POP3 vs IMAP]] 
## terminal interaction with pop3:
- connect with [[netcat]] or [[Telnet]]
#### authentication:
```sh
USER uname
```

```sh
PASS pass
```
- successful login feedback:
```sh
+OK Maildrop has N messages
```
#### mailbox enumeration:
```sh
LIST
```
- list message IDs and sizes
```sh
STAT
```
- to check mailbox stats like number of messages and total size
```sh
UIDL
```
- gets the unique IDs of messages 
```sh
RETR 1
```
- retrieves a message 
```sh
DELE 1
```
- marks a message for deletion
- 