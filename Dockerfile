FROM jupyter/base-notebook

USER root
RUN apt-get -qq update
RUN apt-get install -y wget openssl libssl-dev curl
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs g++ make software-properties-common libzmq3-dev

RUN mkdir -p $HOME/jupyter-nodejs

ADD .babelrc $HOME/jupyter-nodejs
ADD config.js $HOME/jupyter-nodejs
ADD install.js $HOME/jupyter-nodejs
ADD package.json $HOME/jupyter-nodejs
ADD tsconfig.json $HOME/jupyter-nodejs
ADD tslint.json $HOME/jupyter-nodejs
ADD yarn.lock $HOME/jupyter-nodejs
ADD lib $HOME/jupyter-nodejs/lib
ADD ext $HOME/jupyter-nodejs/ext
ADD notebooks $HOME/jupyter-nodejs/notebooks
RUN chown -R jovyan $HOME/jupyter-nodejs

WORKDIR $HOME/jupyter-nodejs
RUN touch /etc/ld.so.conf
RUN echo "/opt/conda/lib" >> /etc/ld.so.conf

# RUN add-apt-repository ppa:chris-lea/zeromq -y
# RUN add-apt-repository ppa:chris-lea/libpgm -y
# RUN apt-get update
RUN conda install -y jupyter_console
RUN conda install -y -c damianavila82 rise
RUN jupyter-nbextension install rise --py --sys-prefix
RUN jupyter-nbextension enable rise --py --sys-prefix

USER jovyan

RUN mkdir -p $HOME/.ipython/kernels/nodejs/
RUN npm install
RUN npm install babel-cli -g
RUN node install.js
RUN npm run build
RUN npm run build-ext
WORKDIR $HOME/jupyter-nodejs/node_modules/zmq/
RUN npm run install

USER root
WORKDIR $HOME/jupyter-nodejs
RUN ldconfig

EXPOSE 8888
