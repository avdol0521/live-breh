---
title: "Name-Based Virtual Hosting"
tags:
  - fetus
---
## apache example: 

```html
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/test
</VirtualHost>

<VirtualHost *:80>
    ServerName test.com
    DocumentRoot /var/www/skibidi
</VirtualHost>
```
