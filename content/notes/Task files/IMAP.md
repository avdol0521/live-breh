---
title: "IMAP"
tags:
  - fetus
---
- port: 
	- 143 ([[TCP]])
	- 993 ([[TCP]]) is the secure version thats used with [[SSL]]/[[TLS]]
- allows clients to access and manage email directly on the server
## terminal interaction with imap:
#### authentication:
```sh
LOGIN uname pass
```
#### mailbox enumeration:
```sh
SELECT <mailbox>
```
- list mailbox folder to work with
```sh
FETCH mailNum body[]
```
- fetch message number with header and body
```sh
MOVE sequence mailboxName
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