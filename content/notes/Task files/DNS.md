---
title: "DNS"
tags:
  - fetus
---
- port: 53 ([[TCP]]/[[UDP]])
- resolves hostnames to their respective IPs
- UDP us typically used for queries because of lower overhead while tcp is used for larger/zone transfers
### checklist:
- Zone Transfer (AXFR)
    - Try `dig axfr @target domain.com` or `dnsrecon -t axfr`
    - If it works, you get the whole internal map—juicy AF
    
- Subdomain Enumeration
    - Use tools like [[amass]], [[subfinder]], [[dnsenum]], or [[dnsrecon]]
    - Check for:
        - Staging/dev subdomains
        - Forgotten apps or panels
        - Subdomain takeover candidates
    
- Cache Poisoning
    - Try injecting fake DNS responses if resolver is vulnerable
    - Rare now, but works if DNS lacks 0x20 randomization or source port entropy
    
- DNS Rebinding
    - Target browsers behind firewalls
    - Host a malicious domain that resolves to internal IPs after initial auth
    
- DNSSEC Misconfig
    - Look for unsigned zones or broken chains
    - If DNSSEC is partially deployed, it can leak info or cause denial
    
- Internal Domain Leakage
    - Use dig +trace or passive DNS to uncover internal domains like `corp.local`
    - Great recon target for phishing or VPN access
    
- Wildcard DNS Abuse
    - Some domains resolve anything (.domain.com)
    - Can be used for cookie theft, cache poisoning, or spoofing
    
- Name Server Enumeration
    - Use `dig NS domain.com`, then brute subdomains per name server
    - Often uncovers legacy systems
    
- UDP Amplification
    - Use small spoofed queries to trigger large responses → DDoS vector
    - Check for open resolvers with `dns-any` queries
    
- Split Horizon Leaks
    - Internal-only zones sometimes leak due to misconfig (esp. via VPN DNS leaks)
    - Compare external vs internal results for same domain
    
- Record Misconfigs
    - Missing or loose SPF, DKIM, DMARC = email spoofing
    - PTR records mismatched = flag on phishing setups
    
- Brute-Force Zone Records
    - Use `dnsenum`, `fierce`, or `massdns` to guess A, CNAME, MX records
    - Catch unlinked apps, dev tools, or staging APIs