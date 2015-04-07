#!/usr/bin/env bash

apt-get update
apt-get install -y nginx
sudo apt-get install -y git
sudo apt-get install -y curl
apt-get install -y vim
sudo apt-get install -y build-essential
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

useradd app
mkdir /home/app
ln -fs /vagrant /home/app/public_html
mkdir /home/app/logs
touch /home/app/logs/error.log
touch /home/app/logs/access.log
sed -i 's/sendfile on;/sendfile off;/g' /etc/nginx/nginx.conf

echo 'server {
    listen 0.0.0.0:80;
    server_name app.com;
    access_log /home/app/logs/access.log;
    error_log /home/app/logs/error.log;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header HOST $http_host;
        proxy_set_header X-NginX-Proxy true;

        proxy_pass http://127.0.0.1:3000;
        proxy_redirect off;
    }
}' > /etc/nginx/sites-available/app
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/app

service nginx restart
cd /home/app/public_html
sudo npm install --no-bin-links
sudo npm install grunt-cli --no-bin-links
sudo npm install grunt --no-bin-links

#Install ruby through rvm
sudo gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -L https://get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
rvm requirements
rvm install ruby
rvm use ruby --default
rvm rubygems current
gem install compass

#node app &
sudo fuser -v 3000/tcp
ifconfig|perl -nE'/dr:(\S+)/&&say$1'

#./node_modules/grunt-cli/bin/grunt
