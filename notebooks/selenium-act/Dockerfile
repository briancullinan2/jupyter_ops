
FROM selenium/standalone-chrome-debug

RUN apt-get -qq update
RUN apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ python net-tools make 
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs
RUN nodejs -v



ENV NODE_TLS_REJECT_UNAUTHORIZED 0
RUN npm install -g live-server babel-cli concurrently node-gyp nativescript@latest

COPY act.ecommerce /home/seluser/act.ecommerce
COPY selenium /home/seluser/selenium
ADD novnc /home/seluser/novnc

WORKDIR /home/seluser/act.ecommerce
RUN npm install
RUN npm run build

WORKDIR /home/seluser/selenium/ecommerce
RUN npm install

WORKDIR /home/seluser/
# modify the entry_point from selenium-docker to run our extra services
RUN dos2unix /home/seluser/novnc/utils/launch.sh
RUN sed -i '/wait $NODE_PID/i/home/seluser/novnc/utils/launch.sh --vnc localhost:5900 &' /opt/bin/entry_point.sh
RUN sed -i '/wait $NODE_PID/inpm --prefix /home/seluser/selenium/ecommerce run static &' /opt/bin/entry_point.sh

EXPOSE 4200
EXPOSE 4444
EXPOSE 3000

