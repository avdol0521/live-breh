---
title: "mysql"
tags:
  - fetus
---
# basic usage:
## connecting:
```sh
mysql -h 10.0.2.11 -u qdpmadmin --database=qdpm --ssl=0 -p'UcVQCMQk2STVeS6J'
```
## getting the version:
```mysql
select version();
```
## see databases:
```mysql
show databases;
```
## use a database:
```mysql
use databaseName;
```
## see tables:
```mysql
show tables;
```
## see table structure (columns. values arent included):
```mysql
describe tableName;
```
- or
```mysql
show columns from tableName;
```
## see columns + their content:
```mysql
select * from tableName;
```
## see specific columns:
```mysql
select column1,column2 from tableName;
```
## see all mysql users:
```mysql
select user, host from mysql.user;
```
## make a new db:
```mysql
create database DBname;
```
## make a new mysql user:
```mysql
create user 'username'@'localhost' identified by 'password';
```
## give a user privilages:
```mysql
grant all privileges on DBname.* to 'username'@'localhost';
flush privileges;
```
## yeet a db:
```mysql
drop database dbName;
```
## yeet a user:
```mysql
drop user 'username'@'localhost';
```
## simple query:
```mysql
select * from tableName where columnName='value';
```
## update data:
```mysql
update tableName set columnName='newValue' where id=1;
```
## yeet data:
```mysql
delete from tableName where id=1;
```
## get out of weird `->` prompt:
- type in `;` and hit enter
- or type in `\c` and hit enter to cancel without running garbage
## exit is just `exit` :v
# cred hunting:
## `LIKE` (fuzzy/partial match):
```mysql
select * from users where username like '%bob%';
```
- `%` is the wildcard operator in mysql 
## `NOT LIKE`:
```mysql
select * from users where username not like '%admin%';
```
## `OR`:
```mysql
select * from users where username='bob' or username='alice';
```
## `IN` (same as `OR` just cleaner):
```mysql
select * from users where username in ('bob', 'alice', 'charlie');
```
## `ORDER BY` (sort results):
```mysql
select * from users order by id desc;
```
- `desc` = decending
- `asc` = ascending
## `LIMIT`:
```mysql
select * from users limit 5;
```
- good for huge tables
## `BETWEEN`:
```mysql
select * from users where id between 1 and 5;
```

# shenanigans:
## nuke a table with sqli if the app allows multiple statements:
```mysql
'; DROP table users; -- 
```
