---
title: HTTP
tags:
  - fetus
---
- port: 80 ([[TCP]])
- serves non secure web traffic 
- [[http-headers]] 
### stuff to look out for:
##### Directory Traversal
- Try `../` in URLs to access config files (`/etc/passwd`, `C:\boot.ini`, etc).
- Check for double encoding tricks (`..%2f`, `%252e%252e`).
    
##### File Upload Vulns
- Test upload forms for bypasses: rename `.php` → `.php.jpg`, double extensions, content-type spoofing.
- Try uploading webshells if the server executes `.php`, `.asp`, etc.
    
##### Local File Inclusion (LFI/RFI)
- Params like `?page=home` might let you load `../../etc/passwd`.
- If remote file inclusion (RFI) is possible, host your payload and include it.
    
##### Command Injection
- Look for inputs passed to the shell (`ping`, `traceroute`, etc).
- Inject `; id` or `| whoami` to test. Blind injection: use time-based (`sleep 5`) or DNS callback.
    
##### SQL Injection
- Try `' OR '1'='1`, `UNION SELECT null--`, or time-based SLEEP payloads.
- Don't forget POST requests, headers (`X-Forwarded-For`), and JSON bodies.
    
##### Cross-Site Scripting (XSS)
- Payloads: `<script>alert(1)</script>`, `"><img src=x onerror=alert(1)>`
- Check reflected, stored (e.g. comments), and DOM-based spots.
    
##### Host Header Injection
- Change `Host:` in the request to something malicious.
- Can lead to password reset link hijacking or SSRF in reverse proxies.
    
##### Subdomain Takeover
- CNAME pointing to unclaimed service (e.g., `sub.domain.com` → GitHub Pages, AWS S3).
- Can give you full control of a legit subdomain.
    
##### HTTP Verb Abuse
- Try sending `OPTIONS`, `PUT`, `DELETE`—some misconfigured servers allow file upload via `PUT`.
- Check for `TRACE` (can lead to XST attacks).
    
##### SSRF (Server-Side Request Forgery)
- Send payloads like `http://127.0.0.1:22/` or `http://169.254.169.254/` in user-controlled URLs.
- Look for internal services or cloud metadata leaks.
    
##### Web Server Misconfigs
- `.git`, `.svn`, `.DS_Store`, backup files like `index.php~`, `config.old`.
- Exposed admin panels (`/admin`, `/phpmyadmin`, `/webmin`), often default creds.
    
##### Default/Weak Auth
- Basic Auth: test common creds (`admin:admin`, `test:test`).
- Hidden routes that don't show in UI but work (`/debug`, `/hidden_api`, `/beta`).
    
##### Insecure Cookies & Headers
- No `HttpOnly`, `Secure`, `SameSite`, etc.
- Check for missing security headers: `Content-Security-Policy`, `X-Frame-Options`, etc.
    
##### Path Normalization Bypasses
- Use weird separators: `//`, `%2e%2e/`, `..;/`, etc.
- Can bypass WAFs or file access controls.
    
##### Web Cache Poisoning
- Poison caches via headers (`X-Forwarded-Host`, `X-Original-URL`) or unusual query params.