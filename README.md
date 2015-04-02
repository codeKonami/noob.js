#Noob.js 0.1.2

Noob.js is a simple framework... well it's actually not even a framework per se it's more a tool for front-end developer to start really quickly with html integration.

###How to install

You'll need at least node.js and npm installed on your machine. If you are running on Windows I advice you to install http://babun.github.io, https://www.vagrantup.com and https://www.virtualbox.org. These tools will you a complete environment to develop uniformly on any platform.

If you have node.js and npm you just need to do

```bash
npm install
node app.js
#Your app will be available at http://localhost:3000
```

If you'd rather use a vagrant environment

```bash
vagrant up
#Yeah, there is a Vagrantfile that will take care of everything
#At the end of the installation you will see an ip
#You can go to it with the browser you want and enjoy
```

###Where to start?

#####The routes
All the routes are situated in the app.js file, just look how the contact one is set it's pretty straight-forward

#####The views
All the views are in the views/ folder just have a look.

#####The Controllers
You can pass some variables to the view through the controllers inside the folder controllers/

#####Assets
You can view all the assets (js, css, ...) in the public/ folder

#Changelog
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
