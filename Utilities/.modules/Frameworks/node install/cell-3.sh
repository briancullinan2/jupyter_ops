mkdir /var/lib/apt/lists/partial
apt-get -qq update
apt-get install -y --fix-missing git curl wget zip unzip vim dos2unix g++ python net-tools make websockify novnc 

