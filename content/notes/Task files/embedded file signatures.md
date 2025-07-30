---
title: "embedded file signatures"
tags:
  - fetus
---
- `PK`: ZIP
- `MZ`: Windows Executable (PE format)
- `GIF87a` / `GIF89a`: GIF images
- `89 50 4E 47 0D 0A 1A 0A`: PNG header. `\x89PNG`
- `JFIF`: often seen inside JPEG files, although JPEGs tend to have lots of other headers that vary
- `52 61 72 21`: RAR archive signature for RAR 1.5 tp 4.0. different for newer versions
- `37 7A BC AF 27 1C`: 7z file header 
- `ID3`: MP3 files sometimes have this tag at the start