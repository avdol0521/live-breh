---
title: "T1-15-Ignite"
tags:
  - fetus
---
## [[nmap]] results:
- `nmap -p- -Pn -sV -O -T4 10.10.182.30 > Dscan.txt`:
```sh fold title:"Dscan.txt"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-05 05:32 EDT
Nmap scan report for 10.10.182.30
Host is up (0.24s latency).
Not shown: 65534 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
Aggressive OS guesses: Linux 4.4 (97%), Android 9 - 10 (Linux 4.9 - 4.14) (96%), Linux 3.2 - 4.14 (96%), Linux 4.15 (95%), Linux 4.15 - 5.19 (95%), Linux 3.10 - 3.13 (95%), Linux 2.6.32 - 3.10 (95%), Linux 3.10 - 4.11 (94%), Linux 3.13 (93%), Linux 3.10 (92%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1101.63 seconds
```
	
- `nmap -p- -Pn -A -T4 10.10.182.30 > Ascan.txt`:
```sh fold title:"Ascan.txt"
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-05 05:32 EDT
Warning: 10.10.182.30 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.182.30
Host is up (0.24s latency).
Not shown: 65533 closed tcp ports (reset)
PORT    STATE    SERVICE VERSION
80/tcp  open     http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Welcome to FUEL CMS
| http-robots.txt: 1 disallowed entry 
|_/fuel/
|_http-server-header: Apache/2.4.18 (Ubuntu)
212/tcp filtered anet
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.95%E=4%D=4/5%OT=80%CT=1%CU=34659%PV=Y%DS=2%DC=T%G=Y%TM=67F0FDB6
OS:%P=x86_64-pc-linux-gnu)SEQ(SP=104%GCD=1%ISR=10A%TI=Z%II=I%TS=A)SEQ(SP=10
OS:5%GCD=1%ISR=106%TI=Z%CI=I%TS=D)SEQ(SP=106%GCD=1%ISR=106%TI=Z%CI=I%II=I%T
OS:S=A)SEQ(SP=106%GCD=1%ISR=10D%TI=Z%CI=I%II=I%TS=A)SEQ(SP=FC%GCD=1%ISR=105
OS:%TI=Z%CI=I%II=I%TS=A)OPS(O1=M509ST11NW6%O2=M509ST11NW6%O3=M509NNT11NW6%O
OS:4=M509ST11NW6%O5=M509ST11NW6%O6=M509ST11)WIN(W1=68DF%W2=68DF%W3=68DF%W4=
OS:68DF%W5=68DF%W6=68DF)ECN(R=Y%DF=Y%T=40%W=6903%O=M509NNSNW6%CC=Y%Q=)T1(R=
OS:Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A
OS:%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y
OS:%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR
OS:%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RU
OS:D=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 2 hops

TRACEROUTE (using port 3389/tcp)
HOP RTT       ADDRESS
1   201.95 ms 10.21.0.1
2   310.51 ms 10.10.182.30

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 1290.38 seconds
```
	
## http enum: 
- got the CMS version from the home page: `Fuel CMS Version 1.4`
- login page at `http://10.10.182.30/fuel/login/5a6e566c6243396b59584e6f596d3968636d513d`
- doesnt seem like its gonna give me any username validation on this one
- oh wait the uname and password is already given in the homepage lmao
```
admin:admin
```
- gonna try and upload an RS
- meh doesnt seem to work
- searchsploited the fuel cms version. there are 3 RCE scripts 
- loaded the 3rd one. seems to work with versions 1.4.1 and below 
- ran it with the url and got a shell as `www-data` 
- got the db file located at `fuel/application/config/database.php`:
```php fold title:"database.php"
system<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------
| DATABASE CONNECTIVITY SETTINGS
| -------------------------------------------------------------------
| This file will contain the settings needed to access your database.
|
| For complete instructions please consult the 'Database Connection'
| page of the User Guide.
|
| -------------------------------------------------------------------
| EXPLANATION OF VARIABLES
| -------------------------------------------------------------------
|
|       ['dsn']      The full DSN string describe a connection to the database.
|       ['hostname'] The hostname of your database server.
|       ['username'] The username used to connect to the database
|       ['password'] The password used to connect to the database
|       ['database'] The name of the database you want to connect to
|       ['dbdriver'] The database driver. e.g.: mysqli.
|                       Currently supported:
|                                cubrid, ibase, mssql, mysql, mysqli, oci8,
|                                odbc, pdo, postgre, sqlite, sqlite3, sqlsrv
|       ['dbprefix'] You can add an optional prefix, which will be added
|                                to the table name when using the  Query Builder class
|       ['pconnect'] TRUE/FALSE - Whether to use a persistent connection
|       ['db_debug'] TRUE/FALSE - Whether database errors should be displayed.
|       ['cache_on'] TRUE/FALSE - Enables/disables query caching
|       ['cachedir'] The path to the folder where cache files should be stored
|       ['char_set'] The character set used in communicating with the database
|       ['dbcollat'] The character collation used in communicating with the database
|                                NOTE: For MySQL and MySQLi databases, this setting is only used
|                                as a backup if your server is running PHP < 5.2.3 or MySQL < 5.0.7
|                                (and in table creation queries made with DB Forge).
|                                There is an incompatibility in PHP with mysql_real_escape_string() which
|                                can make your site vulnerable to SQL injection if you are using a
|                                multi-byte character set and are running versions lower than these.
|                                Sites using Latin-1 or UTF-8 database character set and collation are unaffected.
|       ['swap_pre'] A default table prefix that should be swapped with the dbprefix
|       ['encrypt']  Whether or not to use an encrypted connection.
|
|                       'mysql' (deprecated), 'sqlsrv' and 'pdo/sqlsrv' drivers accept TRUE/FALSE
|                       'mysqli' and 'pdo/mysql' drivers accept an array with the following options:
|
|                               'ssl_key'    - Path to the private key file
|                               'ssl_cert'   - Path to the public key certificate file
|                               'ssl_ca'     - Path to the certificate authority file
|                               'ssl_capath' - Path to a directory containing trusted CA certificats in PEM format
|                               'ssl_cipher' - List of *allowed* ciphers to be used for the encryption, separated by colons (':')
|                               'ssl_verify' - TRUE/FALSE; Whether verify the server certificate or not ('mysqli' only)
|
|       ['compress'] Whether or not to use client compression (MySQL only)
|       ['stricton'] TRUE/FALSE - forces 'Strict Mode' connections
|                                                       - good for ensuring strict SQL while developing
|       ['ssl_options'] Used to set various SSL options that can be used when making SSL connections.
|       ['failover'] array - A array with 0 or more data for connections if the main should fail.
|       ['save_queries'] TRUE/FALSE - Whether to "save" all executed queries.
|                               NOTE: Disabling this will also effectively disable both
|                               $this->db->last_query() and profiling of DB queries.
|                               When you run a query, with this setting set to TRUE (default),
|                               CodeIgniter will store the SQL statement for debugging purposes.
|                               However, this may cause high memory usage, especially if you run
|                               a lot of SQL queries ... disable this to avoid that problem.
|
| The $active_group variable lets you choose which connection group to
| make active.  By default there is only one group (the 'default' group).
|
| The $query_builder variables lets you determine whether or not to load
| the query builder class.
*/
$active_group = 'default';
$query_builder = TRUE;

$db['default'] = array(
        'dsn'   => '',
        'hostname' => 'localhost',
        'username' => 'root',
        'password' => 'mememe',
        'database' => 'fuel_schema',
        'dbdriver' => 'mysqli',
        'dbprefix' => '',
        'pconnect' => FALSE,
        'db_debug' => (ENVIRONMENT !== 'production'),
        'cache_on' => FALSE,
        'cachedir' => '',
        'char_set' => 'utf8',
        'dbcollat' => 'utf8_general_ci',
        'swap_pre' => '',
        'encrypt' => FALSE,
        'compress' => FALSE,
        'stricton' => FALSE,
        'failover' => array(),
        'save_queries' => TRUE
);

// used for testing purposes
if (defined('TESTING'))
{
        @include(TESTER_PATH.'config/tester_database'.EXT);
}
```
- got creds: 
```
root:mememe
```
- got a different shell through [[rmOneLinerShell]] as well to make my life easier
- already have the root creds so i switched to root
- got the flags