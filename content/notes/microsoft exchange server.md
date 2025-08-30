---
title: "microsoft exchange server"
tags:
  - fetus
---
- microsofts enterprise email system. basically Outlook's backend
	- stores user mailboxes, exposes mail protocols (MAPI/HTTP, Outlook on the web, activeSync, SMTP), routes mail and integrates with AD really neatly
- distribution groups are used to send mails
	- instead of sending a mail to 50 specific users. you simply send a mail to for example `skibidi@company.com` which is a distribution group in the backend which exchange resolves and sends the mail to every user in the group 