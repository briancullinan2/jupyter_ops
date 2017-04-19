FROM jupyter/base-notebook

USER root
RUN apt-get -qq update
RUN apt-get install -y wget openssl libssl-dev curl
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs g++ make software-properties-common libzmq3-dev

RUN mkdir -p $HOME

ADD .babelrc $HOME
ADD config.js $HOME
ADD install.js $HOME
ADD package.json $HOME
ADD tsconfig.json $HOME
ADD tslint.json $HOME
ADD yarn.lock $HOME
ADD lib $HOME/lib
ADD ext $HOME/ext
ADD notebooks $HOME/notebooks
RUN chown -R jovyan $HOME

WORKDIR $HOME
RUN touch /etc/ld.so.conf
RUN echo "/opt/conda/lib" >> /etc/ld.so.conf

# RUN add-apt-repository ppa:chris-lea/zeromq -y
# RUN add-apt-repository ppa:chris-lea/libpgm -y
# RUN apt-get update
RUN npm install -g itypescript
RUN npm install babel-cli -g
RUN its --ts-install=global

RUN conda install -y jupyter_console
RUN conda install -y -c damianavila82 rise
RUN jupyter-nbextension install rise --py --sys-prefix
RUN jupyter-nbextension enable rise --py --sys-prefix

RUN ldconfig

EXPOSE 8888
