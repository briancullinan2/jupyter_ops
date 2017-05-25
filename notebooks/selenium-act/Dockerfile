
FROM selenium/standalone-chrome-debug

RUN apt-get -qq update
RUN apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ build-essential python net-tools
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs

RUN npm install -g live-server babel-cli

ADD act.ecommerce /home/seluser/act.ecommerce
ADD mobile /home/seluser/mobile
ADD novnc /home/seluser/novnc

WORKDIR /home/seluser/act.ecommerce
RUN npm install
RUN npm run build

WORKDIR /home/seluser/mobile
RUN npm install

WORKDIR /home/seluser/
ADD new_entry.sh /opt/bin/entry_point.sh
RUN chmod a+x /opt/bin/entry_point.sh
RUN dos2unix /opt/bin/entry_point.sh

EXPOSE 4200
EXPOSE 4444

