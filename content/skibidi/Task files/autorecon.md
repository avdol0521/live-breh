---
title: "autorecon"
tags:
  - fetus
---
- automates the network recon phase
- combines the best parts from tools like Reconnoitre, ReconScan and bscan and adds its own further features
## installation:
```sh
sudo apt update
```

```sh
sudo apt install python3
sudo apt install python3-pip
```

```sh
sudo apt install seclists curl dnsrecon enum4linux feroxbuster gobuster impacket-scripts nbtscan nikto nmap onesixtyone oscanner redis-tools smbclient smbmap snmp sslscan sipvicious tnscmd10g whatweb
```

```sh
sudo apt install python3-venv
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

```sh
pipx install git+https://github.com/Tib3rius/AutoRecon.git
```
## usage:
```sh
autorecon IP or IP/CIDR
```
