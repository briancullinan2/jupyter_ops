FROM jupyter/base-notebook

USER root
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | \
  tee /etc/apt/sources.list.d/webupd8team-java.list
RUN echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | \
  tee -a /etc/apt/sources.list.d/webupd8team-java.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886
RUN echo debconf shared/accepted-oracle-license-v1-1 select true | \
  debconf-set-selections
RUN echo debconf shared/accepted-oracle-license-v1-1 seen true | \
  debconf-set-selections
RUN apt-get -qq update
RUN apt-get install -y --fix-missing wget openssl libssl-dev curl nodejs g++ make software-properties-common libzmq3-dev wget zip unzip vim git dos2unix fluxbox wkhtmltopdf xauth oracle-java8-installer x11vnc net-tools xvfb ipython graphviz apt-transport-https
RUN wget -O - https://deb.nodesource.com/setup_7.x | bash

RUN mkdir -p $HOME


RUN mkdir $HOME/notebooks
RUN chown -R jovyan $HOME

WORKDIR $HOME
RUN touch /etc/ld.so.conf
RUN echo "/opt/conda/lib" >> /etc/ld.so.conf

# RUN add-apt-repository ppa:chris-lea/zeromq -y
# RUN add-apt-repository ppa:chris-lea/libpgm -y
# RUN apt-get update
RUN npm config set proxy http://192.168.0.70:5080
RUN npm config set proxy http://192.168.0.70:5080
RUN npm config set registry http://192.168.0.70:5080
RUN npm config set strict-ssl false
RUN npm install -g https://github.com/megamindbrian/itypescript ijavascript jp-kernel webpack-dev-server webpack-cli babel-cli webpack webpack-merge typescript ts-node live-server
RUN its --ts-install=global
RUN ijsinstall --install=global

#==========
# Selenium
#==========
RUN  mkdir -p /opt/selenium \
  && wget --no-verbose https://selenium-release.storage.googleapis.com/3.4/selenium-server-standalone-3.4.0.jar -O /opt/selenium/selenium-server-standalone.jar

#============================================
# Google Chrome
#============================================
# can specify versions by CHROME_VERSION;
#  e.g. google-chrome-stable=53.0.2785.101-1
#       google-chrome-beta=53.0.2785.92-1
#       google-chrome-unstable=54.0.2840.14-1
#       latest (equivalent to google-chrome-stable)
#       google-chrome-beta  (pull latest beta)
#============================================
ARG CHROME_VERSION="google-chrome-stable"
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update -qqy \
  && apt-get -qqy install \
    ${CHROME_VERSION:-google-chrome-stable} \
  && rm /etc/apt/sources.list.d/google-chrome.list \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

#==================
# Chrome webdriver
#==================
ARG CHROME_DRIVER_VERSION=2.29
RUN wget --no-verbose -O /tmp/chromedriver_linux64.zip https://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip \
  && rm -rf /opt/selenium/chromedriver \
  && unzip /tmp/chromedriver_linux64.zip -d /opt/selenium \
  && rm /tmp/chromedriver_linux64.zip \
  && mv /opt/selenium/chromedriver /opt/selenium/chromedriver-$CHROME_DRIVER_VERSION \
  && chmod 755 /opt/selenium/chromedriver-$CHROME_DRIVER_VERSION \
  && ln -fs /opt/selenium/chromedriver-$CHROME_DRIVER_VERSION /usr/bin/chromedriver


#==================
# Jupyter extensions
#==================
RUN mkdir -p $HOME/.ipython/kernels/
# RUN pip install ipython==6.0.0
RUN conda install -y jupyter_console
RUN conda install -y -c damianavila82 rise
RUN conda install -y -c conda-forge jupyter_contrib_nbextensions
RUN jupyter contrib nbextension install
RUN conda install -c conda-forge jupyter_nbextensions_configurator
RUN jupyter nbextensions_configurator enable
RUN conda install -c conda-forge ipywidgets
RUN jupyter-nbextension install rise --py --sys-prefix
RUN jupyter-nbextension enable rise --py --sys-prefix
RUN pip install gvmagic

RUN mkdir $HOME/.npm
RUN chown -R jovyan $HOME

USER root
ADD ./src $HOME/src
ADD novnc $HOME/novnc
RUN chown -R jovyan $HOME/src
RUN ldconfig

VOLUME $HOME/notebooks

EXPOSE 8888
EXPOSE 6080
EXPOSE 5900
EXPOSE 4444

ADD start-notebook.sh /usr/local/bin/
RUN chmod o+x /usr/local/bin/start-notebook.sh
RUN dos2unix /usr/local/bin/start-notebook.sh

# Configure container startup
ENTRYPOINT ["tini", "--"]
CMD ["/usr/local/bin/start-notebook.sh"]
