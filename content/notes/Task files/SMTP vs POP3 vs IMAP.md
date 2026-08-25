---
title: "SMTP vs POP3 vs IMAP"
tags:
  - fetus
---
#### functionality:
- for sending mail:
	- [[SMTP]] (doesnt handle mail recieving)
		- doesnt store emails. only transfers them
		- used with both [[POP3]] and [[IMAP]] for mail transmission 
- for storing and retrieving mail:
	- [[POP3]] 
	- [[IMAP]] 
#### [[POP3]] vs [[IMAP]]:

| POP3                                                                                   | IMAP                                                                                                 |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| need to download emails from the server<br>to read em                                  | all mail interaction is on the server                                                                |
| deletes the emails from the server after <br>download is done by default               | keeps the mail on the server. no need to<br>download                                                 |
| emails can be accessed offline due to mail<br>storage being local and not server based | needs an internet connection due to it<br>being cloud based                                          |
| no synchronization. single device storage only                                         | synchronization across all devices, action<br>taken on one device reflects across all <br>the others |
| supports [[SSL]]/[[TLS]] encryption but less secure<br>than IMAP                       | supports [[SSL]]/TLS encryption                                                                      |
