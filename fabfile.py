from fabric.api import env, local, run

def noob():
    # change from the default user to 'vagrant'
    env.user = 'vagrant'
    # connect to the port-forwarded ssh
    env.hosts = ['127.0.0.1:2222']

    # use vagrant ssh key
    result = local('vagrant ssh-config | grep IdentityFile', capture=True)
    env.key_filename = result.split()[1]

def start():
    run('source /etc/profile.d/rvm.sh')
    run('sudo service noob start')

def stop():
    run('sudo service noob stop')

def restart():
    run('sudo service noob restart')
