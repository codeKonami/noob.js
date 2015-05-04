from fabric.api import env, local, run, cd

def noob():
    # change from the default user to 'vagrant'
    env.user = 'vagrant'
    # connect to the port-forwarded ssh
    env.hosts = ['127.0.0.1:2222']

    # use vagrant ssh key
    result = local('vagrant ssh-config | grep IdentityFile', capture=True)
    env.key_filename = result.split()[1]

def start():
    with cd('/home/app/public_html'):
        run('grunt')

def maj():
    with cd('/home/vagrant'):
        run('sudo npm install')
