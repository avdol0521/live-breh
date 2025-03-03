---
title: "wildcard DNS records"
tags:
  - fetus
---
simplifies the DNS management by catching all undefined subdomains and directing them to a single location like a catch all server, parking page or an error page 

usually gets triggered when a query is made for a subdomain that doesnt have a specific DNS record. thats when the wildcard record gets used to resolve the request, which makes sure the user doesnt get a domain not found type of error for typos or unconfigured subdomains 