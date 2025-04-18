---
title: "pwncat-cs"
tags:
  - fetus
---
## installation:
- the script below sets up [[pwncat-cs]] for use inside the project folder you'll be working inside. pwncat-cs relies on an older python version, so its sets up the environment so that it automatically switches to that python upon entering the project folder, making [[pwncat-cs]] usable. so yeah, get inside a project folder first
```sh
nano install_pwncat_cs.sh
```
	
```sh
#!/bin/bash
set -e

echo "[*] Installing dependencies (∪.∪ )...zzz"
sudo apt update && sudo apt install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev git

# Detect shell + config file
USER_SHELL=$(basename "$SHELL")
if [ "$USER_SHELL" = "zsh" ]; then
  SHELL_CONFIG="$HOME/.zshrc"
elif [ "$USER_SHELL" = "bash" ]; then
  SHELL_CONFIG="$HOME/.bashrc"
else
  echo "[!] Unsupported shell: $USER_SHELL. Defaulting to .bashrc"
  SHELL_CONFIG="$HOME/.bashrc"
fi

# Install pyenv if not already there
if [ ! -d "$HOME/.pyenv" ]; then
  echo "[*] Installing pyenv 〜(￣▽￣〜)"
  curl https://pyenv.run | bash
else
  echo '[*] pyenv already installed ¯\_(ツ)_/¯'
fi

# Append pyenv config to shell config if not already there
if ! grep -q 'pyenv init' "$SHELL_CONFIG"; then
  echo '[*] Patching $SHELL_CONFIG with pyenv config (⌐■_■)'
  {
    echo ''
    echo '# >>> pyenv config >>>'
    echo 'export PYENV_ROOT="$HOME/.pyenv"'
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"'
    echo 'eval "$(pyenv init --path)"'
    echo 'eval "$(pyenv init -)"'
    echo 'eval "$(pyenv virtualenv-init -)"'
    echo '# <<< pyenv config <<<'
  } >> "$SHELL_CONFIG"
else
  echo '[*] pyenv config already in $SHELL_CONFIG ¯\_(ツ)_/¯'
fi

# Load pyenv for current script session
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# Install Python 3.11.7 if not installed
if ! pyenv versions --bare | grep -q "^3.11.7$"; then
  echo '[*] Installing Python 3.11.7 (❁´◡`❁)'
  pyenv install 3.11.7
else
  echo '[*] Python 3.11.7 already installed ¯\_(ツ)_/¯'
fi

# Create and activate venv
echo "[*] Creating pyenv virtualenv 'pwncat-env' (～o￣3￣)～"
pyenv virtualenv 3.11.7 pwncat-env || echo "Already exists"
pyenv local pwncat-env

# Install pwncat-cs
echo "[*] Installing pwncat-cs... -_-"
pip install --upgrade pip
pip install pwncat-cs

echo "[+] Done! Restart your terminal or run: source $SHELL_CONFIG"
```
	
```sh
chmod +x install_pwncat_cs.sh
./install_pwncat_cs.sh
```
## usage:
```sh
pwncat-cs --listen --port 1337
```
- do `C-d` to switch between `local` and `remote` modes
- read https://pwncat.readthedocs.io/en/latest/usage.html for further shenanigans