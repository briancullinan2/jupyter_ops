COPY
act.ecommerce / home / seluser / act.ecommerce
COPY
selenium / home / seluser / selenium

WORKDIR / home / seluser / act.ecommerce
RUN
npm
install
RUN
npm
run
build

WORKDIR / home / seluser / selenium / ecommerce
RUN
npm
install

RUN
sed - i
'/wait \$NODE_PID/inpm --prefix /home/seluser/selenium/ecommerce run static &' / opt / bin / entry_point.sh

