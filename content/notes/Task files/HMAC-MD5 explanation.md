---
title: "HMAC-MD5"
tags:
  - fetus
---
## What it is  
HMAC stands for “Hash-based Message Authentication Code.” It’s a way to verify both the integrity and authenticity of a message using a secret key and a hash function—in this case, MD5 :)

## How it works (step-by-step)

- You start with your secret key (e.g. your password). If it’s longer than MD5’s block size (64 bytes), you hash it first; if it’s shorter, you pad it with zero bytes.
- Create two derived keys:
    - `ipad` = the key XOR’d with 0x36 for every byte
    - `opad` = the key XOR’d with 0x5C for every byte
- Compute the inner hash:
    1. Concatenate `ipad || message`
    2. MD5(…) that blob → call this `inner_digest`
- Compute the outer hash:
    1. Concatenate `opad || inner_digest`
    2. MD5(…) that blob → that’s your final HMAC-MD5 digest :)

## Why use it
- It protects the message: if even one bit flips in transit, the digest won’t match when the receiver recomputes it.
- It authenticates the sender: only someone with the secret key could generate the correct digest for a given challenge message.
## Technical nitty-gritty
- MD5 processes data in 512-bit (64 byte) chunks, producing a 128-bit (16 byte) hash.
- HMAC-MD5 outputs a 128-bit MAC, usually represented as 32 hex characters.
- The double-hash structure (inner then outer) stops certain length-extension and collision attacks that plain MD5 would be vulnerable to. 
## Security considerations
- MD5 itself has known collision weaknesses—two different messages can be crafted to have the same MD5 hash.
- However, HMAC-MD5 is still considered safe against collision attacks in the context of authentication, because an attacker would need to know the secret key to forge a valid MAC.
- That said, modern systems often prefer stronger hashes (HMAC-SHA-256 or better) for future-proofing and compliance :3