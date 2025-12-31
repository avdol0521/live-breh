---
title: "pdf2john"
tags:
  - fetus
---
## usage:
```sh
pdf2john file.pdf | tee pdf.hash
```
- use `pdf.hash` with [[john the ripper]] to crack said hash 