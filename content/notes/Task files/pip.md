---
title: "pip"
tags:
  - fetus
---
## usage (with venv):
- initialize the venv first:
```sh
python3 -m venv venvName
source venv/bin/activate
```
- install packages like usual
```sh
pip install -r requirements.txt
```
- do this to deactivate venv:
```sh
deactivate
```
## usage (with pipx)
```sh
pipx install packageName
```