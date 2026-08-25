---
title: base64ListDecoderOneLiner
tags:
  - fetus
---
## command:
```sh
while read line; do echo "$line" | base64 -d; echo; done < base64Passes > decodedPasses 
```
