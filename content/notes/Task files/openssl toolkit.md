---
title: "openssl toolkit"
tags:
  - fetus
---
- swiss army knife for anything crypto
## passhashgen
```sh
openssl passwd -6 --salt salt "PASSWORD"
```
- `passwd` for generating password hash
- `-6` for SHA-512
	- `-1` for MD5 
	- `-5` for SHA-256
- `--salt salt` for specific salt. dont include for random salt
- example passhashgens:
```sh
openssl passwd -6 --salt THM "PASSWORD"
$6$THM$MeGI7eYSh.ex3l79m8sMQ2dq9Ux77JfC7XlCgZbneUFAvnHj4gphJKnnveuf2AndcoLn2mmhJVhcxvAIgA8RJ.
openssl passwd -6 "PASSWORD"       
$6$hiHTdq16qkjeMQOv$9B1re3vzxgtQ3kG4Y5Jk/4hhFonnrFDcRQYkIgKVOw6aVA95zMT2zUOwXRHReTSvOdVZQr2ziU/QqIJaZndcU.
```
- `$6` signifies the alg used for the hash, SHA-512 in this case
- `$THM$` and `$hiHTdq16qkjeMQOv$` are the salts used and the rest of it is the hash
## hashing + checksums
```sh
openssl dgst -sha256 file.txt
echo -n "hello" | openssl dgst -md5
```
- self explanatory :v
## rand crypt secure number gen 
```sh
openssl rand -hex 16
openssl rand -base64 32
```
## encoding / decoding
```sh
openssl base64 -in file.bin -out file.b64
openssl base64 -d -in file.b64 -out file.bin
```
## file encryption / decryption
```sh
openssl enc -aes-256-cbc -in secret.txt -out secret.enc
openssl enc -aes-256-cbc -d -in secret.enc -out secret.txt
```
- can do AES,DES,ChaCha20 and more
- use GPG for serious encryption. this is only good for lab stuff 
## stuff to look into
- key generation
	- private key gen 
	- pubkey extraction
	- elliptic curve key + gen
- cert 
	- CSR creation 
	- self cert signing
	- cert info vewing