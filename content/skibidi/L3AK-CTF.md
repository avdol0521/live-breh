---
title: "L34k-CTF"
tags:
  - fetus
---
## Rule_Breaker-1 :
#### Description:
```
## Rule Breaker 1

### 50

I hashed 3 more of my most secret passwords with SHA256. To make the passwords even more unbreakable, I mutated each one according to the following rules:

- **Password 1:** Append 3 characters at the end, in the following order: a special character, a number, and an uppercase letter
- **Password 2:** A typo was made when typing the password. Consider a typo to mean a single-character deletion from the password
- **Password 3:** Make the password [leet](https://en.wikipedia.org/wiki/Leet) (and since I'm nice, I'll tell you a hint: only vowels are leetified!)

I'm confident you'll never be able to crack my hashes now! Do your worst!

`5e09f66ae5c6b2f4038eba26dc8e22d8aeb54f624d1d3ed96551e900dac7cf0d` `fb58c041b0059e8424ff1f8d2771fca9ab0f5dcdd10c48e7a67a9467aa8ebfa8` `4ac53d04443e6786752ac78e2dc86f60a629e4639edacc6a5937146f3eacc30f`

Use the rockyou.txt wordlist.

Flag format: `L3AK{pass1_pass2_pass3}`

Author: `Suvoni`
```
#### hash 1:
- hash is 
```
5e09f66ae5c6b2f4038eba26dc8e22d8aeb54f624d1d3ed96551e900dac7cf0d
```
- rules are: 
	**Password 1:** Append 3 characters at the end, in the following order: a special character, a number, and an uppercase letter
- hashcat command: 
```sh
hashcat.exe -m 1400 -a 6 hash.txt rockyou.txt "?1?d?u" -1 "!@#$%^&*()"
```
- cracked hash:
```
5e09f66ae5c6b2f4038eba26dc8e22d8aeb54f624d1d3ed96551e900dac7cf0d:hyepsi^4B
```
#### hash 2:
- hash is
```
fb58c041b0059e8424ff1f8d2771fca9ab0f5dcdd10c48e7a67a9467aa8ebfa8
```
- rule is:
	**Password 2:** A typo was made when typing the password. Consider a typo to mean a single-character deletion from the password
- hashcat deletion rule generation command in powershell:
```powershell
0..15 | ForEach-Object { "D$_" } | Out-File delete.rule -Encoding ASCII
```
- but that fucked me for a while and i didnt know why. apparently the D rule only takes hexadecimal and two character inputs like 10,11 and onwards dont work. had to use hexadecimal. 
- delete.rule:
```
D0
D1
D2
D3
D4
D5
D6
D7
D8
D9
DA
DB
DC
DD
DE
DF
```
- hashcat command:
```sh
hashcat.exe -d 1 -a 0 -m 1400 hash.txt rockyou.txt -r rule.rule
```
- cracked hash:
```
fb58c041b0059e8424ff1f8d2771fca9ab0f5dcdd10c48e7a67a9467aa8ebfa8:thecowsaysmo
```
#### hash 3:
- hash is:
```
4ac53d04443e6786752ac78e2dc86f60a629e4639edacc6a5937146f3eacc30f
```
- rule is:
	**Password 3:** Make the password [leet](https://en.wikipedia.org/wiki/Leet) (and since I'm nice, I'll tell you a hint: only vowels are leetified!)
- rule:
```
# A→4, E→3, I→1, O→0, U unchanged
sa4 sA4 se3 sE3 si1 sI1 so0 sO0

# A→4, E→3, I→|, O→0, U unchanged
sa4 sA4 se3 sE3 si| sI| so0 sO0

# A→4, E→3, I→!, O→0, U unchanged
sa4 sA4 se3 sE3 si! sI! so0 sO0

# A→4, E→&, I→1, O→0, U unchanged
sa4 sA4 se& sE& si1 sI1 so0 sO0

# A→4, E→&, I→|, O→0, U unchanged
sa4 sA4 se& sE& si| sI| so0 sO0

# A→4, E→&, I→!, O→0, U unchanged
sa4 sA4 se& sE& si! sI! so0 sO0

# A→4, E→£, I→1, O→0, U unchanged
sa4 sA4 se£ sE£ si1 sI1 so0 sO0

# A→4, E→£, I→|, O→0, U unchanged
sa4 sA4 se£ sE£ si| sI| so0 sO0

# A→4, E→£, I→!, O→0, U unchanged
sa4 sA4 se£ sE£ si! sI! so0 sO0

# A→4, E→€, I→1, O→0, U unchanged
sa4 sA4 se€ sE€ si1 sI1 so0 sO0

# A→4, E→€, I→|, O→0, U unchanged
sa4 sA4 se€ sE€ si| sI| so0 sO0

# A→4, E→€, I→!, O→0, U unchanged
sa4 sA4 se€ sE€ si! sI! so0 sO0

# A→@, E→3, I→1, O→0, U unchanged
sa@ sA@ se3 sE3 si1 sI1 so0 sO0

# A→@, E→3, I→|, O→0, U unchanged
sa@ sA@ se3 sE3 si| sI| so0 sO0

# A→@, E→3, I→!, O→0, U unchanged
sa@ sA@ se3 sE3 si! sI! so0 sO0

# A→@, E→&, I→1, O→0, U unchanged
sa@ sA@ se& sE& si1 sI1 so0 sO0

# A→@, E→&, I→|, O→0, U unchanged
sa@ sA@ se& sE& si| sI| so0 sO0

# A→@, E→&, I→!, O→0, U unchanged
sa@ sA@ se& sE& si! sI! so0 sO0

# A→@, E→£, I→1, O→0, U unchanged
sa@ sA@ se£ sE£ si1 sI1 so0 sO0

# A→@, E→£, I→|, O→0, U unchanged
sa@ sA@ se£ sE£ si| sI| so0 sO0

# A→@, E→£, I→!, O→0, U unchanged
sa@ sA@ se£ sE£ si! sI! so0 sO0

# A→@, E→€, I→1, O→0, U unchanged
sa@ sA@ se€ sE€ si1 sI1 so0 sO0

# A→@, E→€, I→|, O→0, U unchanged
sa@ sA@ se€ sE€ si| sI| so0 sO0

# A→@, E→€, I→!, O→0, U unchanged
sa@ sA@ se€ sE€ si! sI! so0 sO0
```
- hashcat command:
```sh
hashcat.exe -m 1400 -a 0 -d 1 hash.txt rockyou.txt -r delete.rule
```
- cracked hash: 
```
4ac53d04443e6786752ac78e2dc86f60a629e4639edacc6a5937146f3eacc30f:unf0rg1v@bl3
```
### flag: 
```
L3AK{hyepsi^4B_thecowsaysmo_unf0rg1v@bl3}
```
## Rule_Breaker-2:
#### Description:
```
## Rule Breaker 2

### 454

If you thought rules were easy after the last challenge, think again! I've concocted more devious password mangling rules to push the limits of your cracking knowledge (and possibly your CPU...):

- **Password 1:** Prepend 1 uppercase letter, Swap the first 2 characters, Rotate it to the right 3 times, Append a 4-digit year since 1900.
- **Password 2:** Lowercase the entire password. Apply a random caesar cipher shift to all the letters in the password. Then, replace each alphanumeric character with its right neighbor on the QWERTY keyboard. Finally, reverse it.
- **Password 3:** Split the password in half, toggle the case of every consonant in the first half, randomly toggle the case of all vowels in the second half, then interleave the halves together. Assume password has an even length and is no more than 14 characters.

`2a07038481b64a934495e5a91d011ecbf278aba8c5263841e1d13f73975d5397` `cd6e58d947e2f7ace23cb6d602daa1ae46934c3c1f4800bfd25e6af2b555f6f5` `84b9e0298b1beb5236b7fcd2dd67e67abf62d16fe6d591024178790238cb4453`

Use the rockyou.txt wordlist.

Flag format: `L3AK{pass1_pass2_pass3}`

Author: `Suvoni`
```
#### hash 1:
- hash is:
```
2a07038481b64a934495e5a91d011ecbf278aba8c5263841e1d13f73975d5397
```
- rules are:
	**Password 1:** Prepend 1 uppercase letter, Swap the first 2 characters, Rotate it to the right 3 times, Append a 4-digit year since 1900.
- so lets make a plan of action for the rules:
	- prepend 1 uppercase letter (A-Z)
	- swap first two char (stays the same in every rule)
	- rotate right * 3 (stays the same in every rule)
	- append 4 digit since 1900 (will need a list for this probably)
- python script to iterate and generate rules:
```python
lines = [
    "^A k }}}",
    "^B k }}}",
    "^C k }}}",
    "^D k }}}",
    "^E k }}}",
    "^F k }}}",
    "^G k }}}",
    "^H k }}}",
    "^I k }}}",
    "^J k }}}",
    "^K k }}}",
    "^L k }}}",
    "^M k }}}",
    "^N k }}}",
    "^O k }}}",
    "^P k }}}",
    "^Q k }}}",
    "^R k }}}",
    "^S k }}}",
    "^T k }}}",
    "^U k }}}",
    "^V k }}}",
    "^W k }}}",
    "^X k }}}",
    "^Y k }}}",
    "^Z k }}}",
]

start_year = 1900
end_year   = 2025

def dollarize(year: int) -> str:
    return ''.join(f"${digit}" for digit in str(year))
with open("rule.rule", "w") as out_file:
    for line in lines:
        for year in range(start_year, end_year + 1):
            out_file.write(f"{line} {dollarize(year)}\n")

print("All rules written to rule.rule")
```
- hashcat command:
```c
hashcat.exe -d 1 -a 0 -m 1400 hash.txt rockyou.txt -r rule.rule
```
- cracked hash:
```
2a07038481b64a934495e5a91d011ecbf278aba8c5263841e1d13f73975d5397:er!bLigbroth1984
```
#### hash 2:
- hash is:
```
cd6e58d947e2f7ace23cb6d602daa1ae46934c3c1f4800bfd25e6af2b555f6f5
```
- rules are:
	**Password 2:** Lowercase the entire password. Apply a random caesar cipher shift to all the letters in the password. Then, replace each alphanumeric character with its right neighbor on the QWERTY keyboard. Finally, reverse it.
- python script to brute force the hashes:
```python
import hashlib
import string 

# Define Caesar shift function
def caesar_shift(text, s):
    letters = string.ascii_lowercase
    shifted = letters[s:] + letters[:s]
    trans = str.maketrans(letters, shifted)
    return text.translate(trans)

# Define QWERTY replacement mapping
replace_dict = {
    'q': 'w', 'w': 'e', 'e': 'r', 'r': 't', 't': 'y', 'y': 'u', 'u': 'i', 'i': 'o', 'o': 'p', 'p': 'p',
    'a': 's', 's': 'd', 'd': 'f', 'f': 'g', 'g': 'h', 'h': 'j', 'j': 'k', 'k': 'l', 'l': 'l',
    'z': 'x', 'x': 'c', 'c': 'v', 'v': 'b', 'b': 'n', 'n': 'm', 'm': 'm',
    '1': '2', '2': '3', '3': '4', '4': '5', '5': '6', '6': '7', '7': '8', '8': '9', '9': '0', '0': '0'
}
trans_replace = str.maketrans(replace_dict)

def transform(password, shift):
    p1 = password.lower()
    p2 = caesar_shift(p1, shift)
    p3 = p2.translate(trans_replace)
    p4 = p3[::-1]
    return p4

target_hash = "cd6e58d947e2f7ace23cb6d602daa1ae46934c3c1f4800bfd25e6af2b555f6f5"

with open("rockyou.txt", "r", encoding="latin-1") as f:
    for line in f:
        password = line.strip()
        for s in range(26):
            result = transform(password, s)
            hash_value = hashlib.sha256(result.encode()).hexdigest()
            if hash_value == target_hash:
                print(f"Password: {password}, Shift: {s}")
                print(f"{target_hash}:{result}")
                break
        else:
            continue
        break
```
- cracked hash:
```
cd6e58d947e2f7ace23cb6d602daa1ae46934c3c1f4800bfd25e6af2b555f6f5:o4d@lkny@d
```
	
```
Original Password: b@ckst@b3r, Shift: 17
```
#### hash 3:
- hash is:
```
84b9e0298b1beb5236b7fcd2dd67e67abf62d16fe6d591024178790238cb4453
```
- rules are:
	**Password 3:** Split the password in half, toggle the case of every consonant in the first half, randomly toggle the case of all vowels in the second half, then interleave the halves together. Assume password has an even length and is no more than 14 characters.
- python script to automate the password transformations and hashcracking:
```python
import os
import base64
import random
import string
import tempfile
import subprocess  

def main():
    flag = open("flag.txt", "r").read().rstrip()
    assert len(flag) == 42
    b64_data = input("Enter your base64-encoded rule file: ")
    try:
        rule_data = base64.b64decode(b64_data)
    except Exception:
        print(f"[ERROR] Failed to decode base64")
        exit()
    if len(rule_data) > 128:
        exit()
    uid = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
    with tempfile.NamedTemporaryFile(delete=False, suffix=".rule") as rule_file:
        rule_file.write(rule_data)
        rule_path = rule_file.name
    try:
        process = subprocess.Popen(
            [
                "hashcat", "-D", "1","-d", "1", f"--session={uid}", "-m"
                "1400", "-w", "1", "-r", rule_path, "--potfile-disable",
                "hash.txt", "flag.txt",
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            env=os.environ
        )
        for line in process.stdout:
            if 'Status' in line.decode():
                print(line.decode())
                break
        process.stdout.close()
        process.wait()
    except Exception:
        print(f'[ERROR] Failed to run hashcat')
    finally:
        os.remove(rule_path)
if __name__ == "__main__":
    main()
```
- cracked hash:
```
84b9e0298b1beb5236b7fcd2dd67e67abf62d16fe6d591024178790238cb4453:CcoATnTdoyNY
```
	
```
Original Password: cottoncandyy
```
### flag:
```
L3AK{er!bLigbroth1984_o4d@lkny@d_CcoATnTdoyNY}
```

## grain of truth:
```sh
echo K2812 CB64 | ./taipowergrid | cs2cs +init=epsg:3828 +to +init=epsg:4326 -f "%.6f" | cs2cs +init=epsg:4326 +to +init=epsg:3824 -f "%.6f"
```
20.438327      23.557498
https://www.google.com/maps/search/?api=1&query=23.557498,120.438327
[[taipowergrid]] 