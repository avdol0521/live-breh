---
title: "ldapsearch"
tags:
  - fetus
---
## usage:
```sh
ldapsearch -x -H ldap://10.10.10.100 -D "sync_user@ent.corp" -w "Summer@2025" -b "dc=ent,dc=corp" "(objectClass=*)" * +
```

```sh
ldapsearch -x -H ldap://10.10.10.100 -D "sync_user@ent.corp" -w "Summer@2025" -b "dc=ent,dc=corp" "(objectClass=user)" * +
```