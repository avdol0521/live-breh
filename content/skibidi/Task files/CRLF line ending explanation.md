---
title: "CRLF line ending explanation"
tags:
  - fetus
---

## What are CR and LF?
- CR = Carriage Return (ASCII 0x0D)
- LF = Line Feed (ASCII 0x0A)  
     - Think typewriter: CR moves the carriage back to the left margin, LF advances the paper one line down.
## Why both?  
Back in the day, different systems used different line endings—some used just CR, some just LF, some both. To be crystal-clear across all systems, SMTP mandates the pair `\r\n` (CRLF) as the _only_ valid end-of-line marker.

## Where it matters in SMTP
- Commands: Every SMTP command (`HELO`, `MAIL FROM`, etc.) must end with CRLF.
- Headers & Body: Within the DATA block, each header line and each body line also needs CRLF.
- End-of-data marker: That lonely `.` must be followed by CRLF to tell the server “yep, that’s the end.”
## What can go wrong if you skip it
- Using just `\n` (LF) can make the server wait forever, thinking your line is still going.
    - Some servers will flat-out reject the message with a syntax error.
    - Dot-stuffing only works correctly if the server sees the exact CRLF sequence before the `.`.
## How to ensure you’re doing it right
- If you’re scripting in Bash or Python, explicitly write `\r\n` (not just `\n`).
    - Telnet/NC clients usually handle it for you—just hit Enter, and they send CRLF. But if you generate the session programmatically, watch out.

Basically, CRLF is the universal “end-of-line” handshake that keeps old and new systems in sync :3