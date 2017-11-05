wget -O - https://deb.nodesource.com/setup_7.x | bash
apt-get install -y nodejs
nodejs -v

env NODE_TLS_REJECT_UNAUTHORIZED 0
npm install -g live-server babel-cli concurrently node-gyp nativescript@latest
