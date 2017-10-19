RUN
dos2unix / home / seluser / novnc / utils / launch.sh
RUN
sed - i - e
's/x11vnc/x11vnc -noxdamage/g' / opt / bin / entry_point.sh
RUN
sed - i
'/wait \$NODE_PID/i/home/seluser/novnc/utils/launch.sh --vnc localhost:5900 &' / opt / bin / entry_point.sh
USER
seluser
