---
title: "crontab"
tags:
  - fetus
---
- stored at:
	- `/etc/crontab`
	- `/etc/cron.d/`
	- `/etc/cron.daily/`, `/etc/cron.hourly/`, `/etc/cron.weekly/`
- do `crontab -l` to see active cronjobs
- entry structure:
```c
*  *  *  *  *  command
│  │  │  │  │
│  │  │  │  └── Day of week (0–6, 0=Sunday)
│  │  │  └───── Month (1–12)
│  │  └──────── Day of month (1–31)
│  └─────────── Hour (0–23)
└────────────── Minute (0–59)
# in this case having all the timings being * means the command/file specified will run once every minute non stop forever
```
- can use special entries instead of timings as well such as:
	- `@reboot` : Run once at startup   
	- `@daily` : Run once a day at midnight
	- `@weekly` : Run once a week
	- `@monthly` : Run once a month
	- `@yearly` : Run once a year
- can send output to `/dev/null` or a log for no output or logging like this:
```sh
* * * * * /path/to/evil.sh >/dev/null 2>&1
0 3 * * * /home/user/script.sh >> /home/user/script.log 2>&1
```
#### example entries:
```sh
@reboot /path/to/malicious/script.sh
* * * * * root /path/to/malicious/script.sh
*/10 * * * * /bin/bash -c "/path/to/reverse_shell.sh"
*/5 * * * * path # Every 5 minutes.
0 9-17 * * * path # Every hour from 9 AM to 5 PM, daily.
30 2 * * 0 path # 2:30 AM every Sunday.
```
