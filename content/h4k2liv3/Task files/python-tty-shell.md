---
title: "python-tty-shell"
tags:
  - fetus
---
```sh
python3 -c 'import pty; pty.spawn("/bin/bash")' 
```

```sh
stty raw -echo && fg
```
