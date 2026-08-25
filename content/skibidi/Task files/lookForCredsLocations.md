---
title: "softwareCredsLocation"
tags:
  - fetus
---
#### firefox:
- bookmarks n stuff in `~/.mozilla/firefox/<profile_folder>/places.sqlite`
- creds in `~/.mozilla/firefox/<profile_folder>/logins.json`
- creds encryption key in `~/.mozilla/firefox/<profile_folder>/key4.db`
#### chrome
- bookmarks in `~/.config/google-chrome/Default/Bookmarks`
- creds in `~/.config/google-chrome/Default/Login Data`
#### system 
- env variables
- config files 
	- `/etc/` (Linux)
	    - `/etc/passwd` → user accounts (hashes usually in `/etc/shadow`)
	    - `/etc/shadow` → password hashes (root-only)
	    - `/etc/ssh/ssh_config` & `/etc/ssh/sshd_config` → key locations and configs
	    - `/etc/mysql/my.cnf` → DB creds
	    - `/etc/postgresql/` → DB creds
	    - `/etc/nginx/`, `/etc/apache2/` → basic auth files
	- App configs in user directories:
	    - `~/.config/` or `~/.<app>` folders (e.g., `~/.aws/credentials`, `~/.gitconfig`)