---
title: "simpleAtoZgen.py"
tags:
  - fetus
---
```py
# Customize your file name here
file_name = "wordlist.txt"

with open(file_name, "w") as f:
    for char in range(ord('A'), ord('Z') + 1):
        f.write(chr(char) + "\n")

print(f"Wordlist saved to {file_name} :D")
```
