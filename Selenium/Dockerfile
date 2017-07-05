FROM selenium/standalone-chrome-debug

EXPOSE 4200
EXPOSE 4444
EXPOSE 3000

ENV CHROME_USER_DATA_DIR /usr/profile
WORKDIR /home/seluser
USER root
VOLUME /usr/profile
VOLUME /data/downloads
RUN mkdir /var/lib/apt/lists/partial
RUN apt-get -qq update
RUN apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ python net-tools make websockify novnc
RUN mkdir -p novnc ; if git --work-tree=./novnc branch | grep 'master'; then \
 echo "Already checked out novnc"; \
 else \
 git clone https://github.com/novnc/noVNC.git ./novnc ; \
 fi ; ls -la novnc ; pwd
RUN dos2unix /home/seluser/novnc/utils/launch.sh
RUN sed -i '/wait \$NODE_PID/i/home/seluser/novnc/utils/launch.sh --vnc localhost:5900 &' /opt/bin/entry_point.sh