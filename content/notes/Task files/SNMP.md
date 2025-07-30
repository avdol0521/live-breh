---
title: "SNMP"
tags:
  - fetus
---
- port:
	- 161 ([[UDP]]) for queries 
	- 162 ([[UDP]]) for traps (i dont actually know what that means by traps. ill look into it later coz im feeling kinda lazy rn)
- monitors and manages network devices like routers, switches, printers etc. exposes a shitton of info via "MIB"s (management info bases). basically read only shell into devices. if its write enabled then theres that lol
### checklist: (ill look into these later i think. i dont actually know SNMP that well)
- Default Community Strings
    - `public` (read) and `private` (write) are default creds
    - Try with `snmpwalk -v2c -c public <target>`
    - If `private` works = you can reconfigure the device
    
- Information Disclosure
    - Use `snmpwalk`, `onesixtyone`, or `snmp-check`
    - Dump:
        - System names, uptime, users, open ports, running procs
        - Interface configs, routing tables, software versions
    - Perfect recon without auth
    
- Write Access Abuse
    - If RW community string (`private`) works:
        - Change network configs, reboot devices, inject routes
        - Enable backdoors, change SNMP traps to your host
    
- SNMP Set → Shell
    - Some devices allow SNMP `set` to exec commands
    - Known on older Cisco gear and IoT devices
    - Can sometimes reboot or RCE via badly configured MIBs
    
- Brute Force Community Strings
    - Use `onesixtyone`, `snmpbrute`, or a wordlist
    - Weak custom strings like `monitor`, `snmp123`, `cisco` are common
    
- SNMP Enumeration → Passwords
    - Some MIBs expose stored cleartext or hashed creds
    - Look in user tables, config backups, SNMPv3 users
    
- SNMPv3 Weaknesses
    - Authenticated but still sometimes misconfigured
    - If authNoPriv is used, creds can be bruteforced (no encryption)
    - Use `snmpwalk -v3` with username guessing
    
- Route Injection
    - If you have RW access, inject static routes → man-in-the-middle or redirect
    
- Denial of Service
    - Flood with malformed SNMP packets (rare but possible)
    - Some devices crash on large OID walks
    
- SNMP Traps
    - Devices send "traps" to monitoring systems
    - If misrouted or spoofable, attacker can fake device states or flood alerts