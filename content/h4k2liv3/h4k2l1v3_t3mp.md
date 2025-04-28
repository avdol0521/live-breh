---
title: "h4k2l1v3_temp"
tags:
  - fetus
---
## topic list:
1. consistency maintain korte hobe - `foysal vai` 
2. hardwork korte hobe - `udoy vai` 
3. shikhar manoshikota rakhte hobe - `fahim vai` 
4. daily at least 5 hours study korte hobe - `abrar vai` 
5. diye dewa topic er baireo topics nijer dekha uchit - `raihan vai` 
6. ki ki shikhlen properly note down korte hobe, karon ei note pore nijei use korben - `imam vai` 
7. pichaye porle ba keep up korte na parle discouraged howa jabena - `abul hasan vai` 
8. teamwork maintain korte hobe - `me` 
9. nije je shikhchen ta baire manushke dekhate hobe - `taivin vai` 
10. prothome adjust korte ektu oshubidha hote pare, but dedication rekhe chalay jete hobe - `ikra apu`  
## shubidha
1. zero prequisites. ekebare basics thekei shob shikhben
2. procrastination ba inconsistency er shomossha thakle sheta dur hobe
3. nije boshe study korar ekta habit toiri hobe
4. kotha bolar manusher je ekta jorota thake ta dur hobe
5. guidance pabe
6. networking hobe, industry er manushder chinben
## community
1. ctf arrangements
2. update page 
---
- csv injection
- rotten potato 
- impersonate tokens

---
# `[REDACTED]`

---
### intro
- nijer porichoy+batch 
- community er porichoy 
	- community er goal and motive + impact 
	- free doesnt mean cheap/low quality 
		- really good module 
- nijer tough experience. it wasnt easy 
### note taking rules and regulations and best practices
- amra kichu specific maintain kori. and strictly e maintain kora hoy to ensure the quality of the free batches
- community rules 
	- consistency shobcheye boro deciding factor je apni survive korte parben kina
		- note taking 
		- daily tasks
	- respectful hote hobe. age difference thakbei
	- teamwork is mandatory
		- professional field e apnake ekta team er shathei kaj korte 
		- pura group bad jete pare 
	- you cant piss off mid journey 
		- once you drop out its over theres no coming back 
- note rules:
	- no ai gen. will be checked
	- dont copy paste. you'll be questioned on everything you write
		- doesnt mean keep it extremely short either 
		- notes must be in english
		- purpose of the notes
			- presentation
			- you'll be using these yourself
			- port notes example 
				- port er note korlen. pore jokhon ekta machine exploit korte gelen tokhon oi same port open pailen but vule gesen oi port er kaj ki. tokhon apnar nijer note dekhe revise korben
	- daily note taking is once again, mandatory
	- completely self research based. apni eikhane shikhte ashchen. tasks bare minimum complete kore boshe thakar jonno na
	- cert dewa hoyna cuz asholei lav nai, kaje dibe na. apni jodi amader module ta properly follow koren, tasks er topics gula properly research koren tahole ekta proper vendor cert (eJPT, CEH) newar moto joggota apnar moddhe emnei hoye jabe
### how to share the actual notes 
- emamul vai
---
Easy one :)

Just run:

bash

CopyEdit

`mysql -u your_username -p`

Then it'll ask for the password. Type it in and you're in.

If you wanna do it all in one line:

bash

CopyEdit

`mysql -u your_username -p'your_password'`

(No space between `-p` and the password, or it breaks.)

Let me know if you're connecting to a remote host or specific port.

4o

##### You said:

the service is running on a different machine on my network

###### ChatGPT said:

Cool, then just add `-h` and maybe `-P` if it's a non-default port. Like this:

bash

CopyEdit

`mysql -h 192.168.x.x -u your_username -p`

Or with password inline (again, no space after `-p`):

bash

CopyEdit

`mysql -h 192.168.x.x -u your_username -p'your_password'`

If it’s not running on the default port (3306), throw in `-P`:

bash

CopyEdit

`mysql -h 192.168.x.x -P 3307 -u your_username -p`

Let me know if you get any errors :)

4o

##### You said:

mysql vs mysqlx?

###### ChatGPT said:

Alright, quick breakdown:

**`mysql` (classic protocol)**

- Default protocol (used on port 3306)
    
- Standard for most MySQL clients/tools
    
- Works with basic CLI, PHP, Python, etc.
    
- Good enough for 99% of stuff
    

**`mysqlx` (X Plugin / MySQL X Protocol)**

- Newer, fancier protocol (port 33060)
    
- Built for MySQL Document Store (NoSQL-style stuff)
    
- Supports both SQL and CRUD with JSON-like docs
    
- Better for apps using things like Node.js or modern APIs
    
- Needed for tools like MySQL Shell (`mysqlsh`)
    

If you’re just doing normal SQL/pentesting/db work — stick to `mysql`.  
If you’re messing with document store features or using `mysqlsh`, then `mysqlx` might matter :D

What are you planning to mess with?

4o

##### You said:

whats wrong ┌──(root㉿kali)-[~/projects/ica1] └─# mysql -h 10.0.2.9 -u qdpmadmin --database=qdpm --ssl=0 -p'UcVQCMQk2STVeS6J' ERROR 1129 (HY000): Host '10.0.2.10' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'

###### ChatGPT said:

Ah yeah, that one means MySQL is pissed at your IP (`10.0.2.10`) for too many failed connection attempts — it auto-blocks to avoid abuse.

To fix it on the **MySQL server**, run this as root or a MySQL user with enough privileges:

bash

CopyEdit

`mysqladmin flush-hosts -u root -p`

Then type the root password when prompted. That'll reset the block list.

If you don’t have shell access to the server, you're stuck till someone unblocks you :(

You retrying creds a bunch before this?

4o

##### You said:

i got in. how do i enumerate

###### ChatGPT said:

Nice one :D

Here’s your basic MySQL enum cheat sheet from inside the session:

### General info:

sql

CopyEdit

`SELECT VERSION(); SELECT USER(); SELECT DATABASE(); SHOW GRANTS;`

### List all DBs:

sql

CopyEdit

`SHOW DATABASES;`

### Switch DB:

sql

CopyEdit

`USE dbname;`

### List tables in current DB:

sql

CopyEdit

`SHOW TABLES;`

### Describe table:

sql

CopyEdit

`DESCRIBE tablename; -- or SHOW COLUMNS FROM tablename;`

### Dump data:

sql

CopyEdit

`SELECT * FROM tablename LIMIT 10;`

### See users:

sql

CopyEdit

`SELECT user, host, authentication_string FROM mysql.user;`

### Check file privileges:

sql

CopyEdit

`SHOW VARIABLES LIKE 'secure_file_priv'; SHOW VARIABLES LIKE 'have_%';`

You trying to escalate or extract creds?

4o

##### You said:

decode this:

###### ChatGPT said:

Drop it in, I got you :3

4o

##### You said:

root | localhost | $A$005$*.B5B3#z7P99hmRUMqZuaQwlnyrQB.SrGVqpZD.iifgILTIHesbdL.9 |

###### ChatGPT said:

Oof yeah, that's a **MySQL 8+ `caching_sha2_password`** hash — starts with `$A$`, which means it’s **not** your classic old-school `mysql_native_password` hash.

Bad news:  
These aren’t crackable (yet) with normal tools like `john` or `hashcat` — they're salted and use a custom KDF.

So unless you:

- downgrade auth method (`ALTER USER... IDENTIFIED WITH mysql_native_password`) _and_ set a known password,
    
- or already have access and can `SET PASSWORD` to something you know,
    

…you’re not getting the original password from that hash.

You tryna crack it or pivot with it?

4o

##### You said:

wait i can set passwords?

###### ChatGPT said:

Yup, **if you have the right privileges**, you can totally reset user passwords — sneaky but super useful :D

Try this to see if you’ve got the perms:

sql

CopyEdit

`SHOW GRANTS FOR CURRENT_USER;`

If you’ve got `ALTER USER` or `UPDATE` on `mysql.*`, then boom, you can do:

sql

CopyEdit

`ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpass123';`

Or for older MySQL:

sql

CopyEdit

`SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newpass123');`

If you can’t use `ALTER USER`, sometimes you can just directly `UPDATE mysql.user` if it's MySQL <8 and the server isn't locked down:

sql

CopyEdit

`UPDATE mysql.user SET authentication_string = PASSWORD('newpass123') WHERE user = 'root' AND host = 'localhost'; FLUSH PRIVILEGES;`

Wanna try resetting a user, or you just checking if it's possible?

4o

##### You said:

can i not automate the data getting from all the tables and dbs? if so how

###### ChatGPT said:

Hell yeah you can automate it :) Here's a few fast ways depending on how comfy you are:

---

### 1. **Using `mysqldump` (best if you can run it):**

Dump **everything**:

bash

CopyEdit

`mysqldump -h 10.0.2.9 -u qdpmadmin -p'UcVQCMQk2STVeS6J' --all-databases > all_dbs.sql`

Or a specific DB:

bash

CopyEdit

`mysqldump -h 10.0.2.9 -u qdpmadmin -p'UcVQCMQk2STVeS6J' qdpm > qdpm.sql`

This grabs schema + data.

---

### 2. **Write a quick MySQL script inside the shell:**

From the MySQL prompt:

sql

CopyEdit

`SELECT CONCAT('SELECT * FROM ', table_name, ';') FROM information_schema.tables WHERE table_schema = 'qdpm';`

Copy-paste output and run it. Or write a tiny bash/python script to loop over it.

---

### 3. **Python (using `mysql-connector` or `pymysql`)**

Automate login, enumerate DBs, tables, and dump to files.

I can drop a full working script if you want, just say the word :)

---

You want raw dumps, table-by-table exports, or just a text blob of all data?

4o

##### You said:

how do i open a sql file in kali

###### ChatGPT said:

If you mean like a `.sql` dump file and you just wanna **see it**, you can:

bash

CopyEdit

`cat file.sql less file.sql`

Or to **run/import** it into MySQL:

bash

CopyEdit

`mysql -u your_user -p your_db < file.sql`

If it's a full dump with `CREATE DATABASE` inside, you can skip the db name:

bash

CopyEdit

`mysql -u your_user -p < file.sql`

Want to browse it in a DB or just read through it?

4o

##### You said:

is there no specific tool for opening and viewing a sql file?

###### ChatGPT said:

There isn't a specific "SQL file viewer" tool, but there are a few tools that make it easier to interact with `.sql` files. Here are some options that can give you a better experience:

### 1. **MySQL Workbench**

- **GUI Tool** for MySQL that lets you open and view SQL files easily.
    
- You can also execute them, browse schemas, and analyze the content.
    

Install:

bash

CopyEdit

`sudo apt install mysql-workbench`

Once installed, you can open the `.sql` file and execute it from there.

### 2. **DBeaver**

- Another **GUI** tool that supports MySQL (and other DBs), and lets you open `.sql` files, execute queries, and explore databases.
    

Install:

bash

CopyEdit

`sudo apt install dbeaver`

### 3. **Sublime Text / VSCode (or any text editor)**

- If you just want to read or edit the SQL file, use any advanced text editor.
    
    - VSCode and Sublime will provide syntax highlighting for SQL.
        
    - You can install plugins for MySQL syntax for a cleaner experience.
        

### 4. **Command-Line (`less` or `vim`)**

- If you prefer sticking to terminal, `less` or `vim` will give you syntax highlighting for SQL, depending on the settings.
    

To install `vim` with SQL syntax:

bash

CopyEdit

`sudo apt install vim`

Once installed, you can open the file with `vim`:

bash

CopyEdit

`vim file.sql`

### 5. **Mycli (CLI tool)**

If you want a more interactive CLI, try `mycli`:

bash

CopyEdit

`sudo apt install mycli`

It lets you open MySQL directly from the terminal, and has auto-completion and syntax highlighting.

---

So, what’s your style? CLI or GUI? :)

4o mini