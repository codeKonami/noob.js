#Noob.js 0.1.6

Noob.js is a simple framework... well it's actually not even a framework per se it's more a tool for front-end developer to start really quickly with html integration.

###How to install

You'll need at least node.js and npm installed on your machine. If you are running on Windows I advice you to install http://babun.github.io, https://www.vagrantup.com and https://www.virtualbox.org. These tools will you a complete environment to develop uniformly on any platform.

If you have node.js and npm you just need to do

```bash
cp local-config-sample.json local-config.json
npm install
grunt
#Your app will be available at http://localhost:3000
```

If you'd rather use a vagrant environment. You will need to install pip and fabric too.

```bash
#Inside babun do
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install fabric
```

```bash
vagrant up
#Yeah, there is a Vagrantfile that will take care of everything
#At the end of the installation you will see an ip (it's the VM ip)

#Then call a fabric method will launch the server
fab noob start

#You can go to the ip address with the browser you want and enjoy
```

###Where to start?

To use all the power of the framework you will need to create a local-config.json
There is a local-config-sample.json to help you with that

```bash
#Inside the project directory do a
cp local-config-sample.json local-config.json
```

The config file is like below. It's pretty self-explanatory
private object will remain server sided, the public ones will be available on the client-side.
```json
{
  "public" : {
    "hostname" : "localhost",
    "livereload" : true,
    "title" : "This is a noob.js app",
    "description" : "The power of node.js in a matter of seconds.",
    "UA":"UA-XXXXX-X"
  },
  "private" : {
    "email" : "example@example.com"
  }
}
```

#####The routes
All the routes are situated in the app.js file, just look how the contact one is set it's pretty straight-forward

#####The views
All the views are in the views/ folder just have a look.

#####The Controllers
You can pass some variables to the view through the controllers inside the folder controllers/

#####Assets
You can view all the assets (js, css, ...) in the public/ folder

#Changelog

##0.1.6
- Using Bootstrap CDN instead of the full SASS project

##0.1.5
- Ajout de Bootstrap

##0.1.4
- Using libsass instead of compass to reduce the compilation delays
- adding a config.json for production and a local-config.json for development

##0.1.3
- Adding a fabfile to manage the launch of the server

##0.1.2
- Adding 404
- Adding scss
- compass installation in bootstrap.sh

##0.1.1
- Adding Livereload

##0.1.0 : First release
- Vagrantfile to install anywhere through vagrant
- Templating system
- Paul Irish js DOM-routing system
- HTML5 Boilerplate
