var importer = require('../Core');var fs = require('fs');// add some run commands to the bash scriptvar bashToRun = (code) => code.split('\n').filter(n => n.trim().length > 0).map(l => 'RUN ' + l.trim())    .join('\n').replace(/\\\s*\nRUN\s*/ig, '\\\n ');// create a selenium Dockerfile with a vnc connectionvar seleniumDocker = (outputFile) => {    return importer.interpret([        'run selenium',        // add some extra services        'linux dev tools',        'vnc html',        'vnc docker'    ]).then(r => {        // convert some results to Docker RUN commands instead of bash        r[1].code = bashToRun(r[1].code);        r[2].code = bashToRun(r[2].code);        return r.map(r => r.code).join('\n');    })        .then(r => {            // save the Dockerfile            fs.writeFileSync(outputFile, r);            return r;        })        .catch(e => console.log(e))};module.exports = seleniumDocker;
RUN RUN mkdir /var/lib/apt/lists/partial
RUN RUN apt-get -qq update
RUN RUN apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ python net-tools make websockify novnc
RUN RUN mkdir -p novnc ; if git --work-tree=./novnc branch | grep 'master'; then \
 echo "Already checked out novnc"; \
 else \
 git clone https://github.com/novnc/noVNC.git ./novnc ; \
 fi ; ls -la novnc ; pwd
COPYact.ecommerce / home / seluser / act.ecommerceCOPYselenium / home / seluser / seleniumWORKDIR / home / seluser / act.ecommerceRUNnpminstallRUNnpmrunbuildWORKDIR / home / seluser / selenium / ecommerceRUNnpminstallRUNsed - i'/wait \$NODE_PID/inpm --prefix /home/seluser/selenium/ecommerce run static &' / opt / bin / entry_point.sh