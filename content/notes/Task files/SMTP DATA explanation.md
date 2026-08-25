---
title: "SMTP DATA explanation"
tags:
  - fetus
---
## what it is:
tells the server that hey im ready to send the actual mail now. with headers and the body. needs the sender and recipient to be set beforehand.
### interaction flow:
##### user: `DATA`
##### server: `354 Start mail input; end with <CRLF>.<CRLF>`
- means send me everything upto a line with a single dot
##### user: sends the headers and the data and ends it with a single dot. example below:
```c
Subject: Hello there
From: you@domain.com
To: them@example.com
Date: Thu, 22 May 2025 14:00:00 +0600

Hey! This is the body of the email.
It can span multiple lines.
.   ← a single dot on its own line ends it
```
##### server: final response `250 OK: queued as 12345`
### Key details
- Headers vs Body
    - The first section (before the blank line) are headers—`Subject:`, `From:`, `To:`, `Date:`, etc.
    - A _single_ blank line signals the switch to the body.
- CRLF line endings
    - SMTP _requires_ `<CR><LF>` (carriage return + line feed) at the end of _every_ line.(telnet generates it automatically for you so no need to actually type the literal `\r\n` in. unless you're scripting and doing it systematically)
    - [[CRLF line ending explanation]] 
- End marker (“.”)
    - A line with just a `.` (and nothing else) ends the DATA.
    - If your body needs a line that _starts_ with a dot, you “dot-stuff” by prefixing another dot. Server strips the extra on receipt. example:`..This line actually starts with one dot` 
- Size limits
    - Many servers enforce a maximum message size (e.g. 10 MB). If you exceed it, you’ll get a `552 Message size exceeds fixed limit` error.
- Transparency
    - Dot-stuffing ensures that the end-of-data marker can’t accidentally appear in your content.
### Common pitfalls
- Forgetting the blank line between headers & body → server treats your first body line as a header and errors.
- Using just `LF` instead of `CRLF` → some servers reject it.
- Omitting the final dot or placing it incorrectly → server hangs waiting for more data.
- Not dot-stuffing leading dots → premature termination or mangled content.
