FROM
selenium / standalone - chrome - debug

EXPOSE
4200
EXPOSE
4444
EXPOSE
3000

ENV
DBUS_SESSION_BUS_ADDRESS / dev / null
ENV
CHROME_USER_DATA_DIR / usr / profile
WORKDIR / home / seluser

USER
root
RUN
mkdir / usr / profile
RUN
mkdir / usr / downloads
RUN
chown
seluser:seluser - R / usr / profile
RUN
chown
seluser:seluser - R / usr / downloads
RUN
chmod
777 - R / usr / profile
RUN
chmod
777 - R / usr / downloads
#VOLUME / usr / profile
#VOLUME / data / downloads

RUN
sed - i
'/wait \$NODE_PID/ised -i -e s/exit_type":"Crashed/exit_type":"None/g /usr/profile/Default/Preferences &' / opt / bin / entry_point.sh
RUN
sed - i
'/wait \$NODE_PID/ised -i -e s/exited_cleanly":false/exited_cleanly":true/g /usr/profile/Default/Preferences &' / opt / bin / entry_point.sh

