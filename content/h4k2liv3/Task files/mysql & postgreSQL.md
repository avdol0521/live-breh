---
title: "mysql & postgreSQL"
tags:
  - fetus
---
- link to actual files: [[mysql]], [[postgreSQL]] 
## checklist:
- Default / Weak Credentials
    - Try `root:root`, `postgres:postgres`, `admin:admin`, or blank passwords
    - MySQL: `mysql -u root -p -h <host>`
    - Postgres: `psql -U postgres -h <host>`
    
- Remote Access Enabled
    - Config files like `my.cnf` or `postgresql.conf` often limit access to localhost
    - If remote IPs are allowed = potential entry point
    
- Database Enumeration
    - List DBs, users, tables:
        - MySQL: `SHOW DATABASES;`, `SELECT  FROM mysql.user;`
        - Postgres: `\l`, `\du`, `\dt`, or `SELECT datname FROM pg_database;`
    
- SQL Injection (via web app)
    - Use DB-specific payloads to confirm backend type
    - Fingerprint by checking for MySQL/Postgres error messages or function behavior
    
- File Read / Write (MySQL)
    - `SELECT LOAD_FILE('/etc/passwd');` to read files (if FILE priv)
    - Write with `SELECT ... INTO OUTFILE '/var/www/html/shell.php';`
    
- Command Execution
    - PostgreSQL: `COPY ... FROM PROGRAM 'id';` = RCE (if allowed)
    - Use `postgres_fdw` or UDFs to trigger system commands
    
- Privilege Escalation via UDF
    - Upload a malicious shared object (e.g. `.so` or `.dll`) as a custom function
    - MySQL: abuse `lib_mysqludf_sys` to run shell commands
    
- Exposed Admin Interfaces
    - phpMyAdmin, Adminer, pgAdmin = check for default creds or RCE vulns
    - Sometimes exposed on weird ports or `/dbadmin`
    
- Brute Forcing
    - Use `hydra`, `medusa`, or `ncrack` against exposed ports
    - Bonus: Postgres supports GSSAPI/SCRAM, so might leak more error info
    
- Cleartext Creds in Tables
    - Look for `users`, `accounts`, `logins` tables with plaintext or base64 passwords
    - Common in dev/test DBs
    
- Logging & Slow Query Abuse
    - MySQL logs queries to files—can sometimes be poisoned or exfiltrated
    - Use long payloads to trigger slow log if enabled
    
- Data Exfiltration Channels
    - Use DNS or HTTP via SQLi or shell commands to leak data out of airgapped DBs
    - For Postgres: use `COPY` or `dblink` to extract to external sources