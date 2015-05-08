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
sudo rm -Rf node_modules
sudo cp package.json /home/vagrant/
cd /home/vagrant
sudo npm install -g grunt-cli
sudo npm install

ln -s /home/vagrant/node_modules /home/app/public_html/node_modules

#node app &
sudo fuser -v 3000/tcp
ifconfig|perl -nE'/dr:(\S+)/&&say$1'

#./node_modules/grunt-cli/bin/grunt
