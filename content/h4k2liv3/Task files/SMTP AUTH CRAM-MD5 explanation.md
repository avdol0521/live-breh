---
title: "SMTP AUTH CRAM-MD5 explanation"
tags:
  - fetus
---
## what it is:
its basically an SMTP auth method. apparently defined in RFC 2195. doesnt send the password in plain text or base64. the server instead issues a random challange. and the user responds with an HMAC MD5 digest of that challange keyed by the pass so the actual pass never goes over the wire :)
### interaction flow:
##### user: `AUTH CRAM-MD5` 
##### server: `334 PDQ1NjM0OTVAZXhhbXBsZS5jb20+  ← base64("<123495@challenge.example.com>")`
##### user: 
- computes the HMAC-MD5. 
	- [[HMAC-MD5 explanation]] 
- response format: `username<space>hex-digest` for example`alice 5f2d…3a7b` (digest is 32 hex chars). and then base64 encodes the whole string and sends the response 
##### server: validates
- looks up alice's pass in this case and recomputes the same HMAC-MD5 and sees if it matches. if it does. the client recieves a `235 Authentication successful`. if not `535 Authentication credentials invalid`
##### user: 
##### server: 
##### user: 
##### server: 
##### user: 
##### server: 