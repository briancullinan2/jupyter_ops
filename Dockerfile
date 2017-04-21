FROM jupyter/base-notebook

USER root
RUN apt-get -qq update
RUN apt-get install -y wget openssl libssl-dev curl nodejs g++ make software-properties-common libzmq3-dev wget vim git
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash

RUN mkdir -p $HOME

ADD .babelrc $HOME
ADD config.js $HOME
ADD install.js $HOME
ADD package.json $HOME
ADD tsconfig.json $HOME
ADD tslint.json $HOME
ADD yarn.lock $HOME
ADD webpack.config.js $HOME
ADD webpack.common.js $HOME
ADD typings.json $HOME
ADD helpers.js $HOME

ADD ./src $HOME/src
RUN mkdir $HOME/notebooks
RUN chown -R jovyan $HOME

WORKDIR $HOME
RUN touch /etc/ld.so.conf
RUN echo "/opt/conda/lib" >> /etc/ld.so.conf

# RUN add-apt-repository ppa:chris-lea/zeromq -y
# RUN add-apt-repository ppa:chris-lea/libpgm -y
# RUN apt-get update
RUN npm install -g itypescript webpack-dev-server webpack-cli babel-cli webpack webpack-merge typescript ts-node
RUN its --ts-install=global

RUN mkdir -p $HOME/.ipython/kernels/
RUN conda install -y jupyter_console
RUN conda install -y -c damianavila82 rise
RUN jupyter-nbextension install rise --py --sys-prefix
RUN jupyter-nbextension enable rise --py --sys-prefix

RUN chown -R jovyan $HOME

USER jovyan
RUN npm install -f

USER root
RUN ldconfig

VOLUME $HOME/notebooks

EXPOSE 8888

ADD start-notebook.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/start-notebook.sh
