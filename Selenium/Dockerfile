FROM selenium/standalone-chrome-debug

EXPOSE 4200
EXPOSE 4444
EXPOSE 3000

ENV DBUS_SESSION_BUS_ADDRESS /dev/null
ENV CHROME_USER_DATA_DIR /usr/profile
WORKDIR /home/seluser

USER root
RUN mkdir /usr/profile
RUN mkdir /usr/downloads
RUN chown seluser:seluser -R /usr/profile
RUN chown seluser:seluser -R /usr/downloads
RUN chmod 777 -R /usr/profile
RUN chmod 777 -R /usr/downloads
#VOLUME /usr/profile
#VOLUME /data/downloads

RUN sed -i '/wait \$NODE_PID/ised -i -e s/exit_type":"Crashed/exit_type":"None/g /usr/profile/Default/Preferences &' /opt/bin/entry_point.sh
RUN sed -i '/wait \$NODE_PID/ised -i -e s/exited_cleanly":false/exited_cleanly":true/g /usr/profile/Default/Preferences &' /opt/bin/entry_point.sh


RUN RUN mkdir /var/lib/apt/lists/partial
RUN RUN apt-get -qq update
RUN RUN apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ python net-tools make websockify novnc
RUN RUN mkdir -p novnc ; if git --work-tree=./novnc branch | grep master; then \
 echo "Already checked out novnc"; \
 else \
 git clone https://github.com/novnc/noVNC.git ./novnc ; \
 fi ; ls -la novnc ; pwd

RUN dos2unix /home/seluser/novnc/utils/launch.sh
RUN sed -i -e 's/export GEOMETRY.*/export GEOMETRY="8160x6120x24"/g' /opt/bin/entry_point.sh
RUN sed -i -e 's/x11vnc/x11vnc -scale 2700x2048 -noxdamage/g' /opt/bin/entry_point.sh
RUN sed -i '/wait \$NODE_PID/i/home/seluser/novnc/utils/launch.sh --vnc localhost:5900 &' /opt/bin/entry_point.sh
USER seluser
