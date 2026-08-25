---
title: "python server creation"
tags:
  - fetus
---
## command:
```sh
python3 -m http.server port
```

### PUT enabled one liner:
```python
python3 -c "from http.server import HTTPServer,SimpleHTTPRequestHandler;import os;class H(SimpleHTTPRequestHandler):\n def do_PUT(self):\n  l=int(self.headers['Content-Length']);p=self.translate_path(self.path);open(p,'wb').write(self.rfile.read(l));self.send_response(201);self.end_headers();\nHTTPServer(('0.0.0.0',8000),H).serve_forever()"
```
- listenes on `0.0.0.0:8000`
- writes uploaded files to current dir
- powershell iwr command for later use:
```powershell
Invoke-WebRequest -Uri http://192.168.150.115:8000/dfir_tools.zip `
  -Method PUT `
  -InFile dfir_tools.zip
```
