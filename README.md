# WPEngine

## Git

Test Git access: `ssh git@git.wpengine.com info`. Should return a list of available environments and their permissions.

Old: git@bitbucket.org:Hi-hatConsulting/lando-nginx-wordpress.git

# Lando

We're using Lando to manage Docker containers for a local hosting environment.

## Configuration Steps

1. Open /.lando.yml with a text editor.
2. Change the `name` value to your new project name (replace 'lando-wordpress-env' with new project name).

## Environment Start

Start: `lando start`  
Rebuild: `lando rebuild`

Note: Rebuild after any changes to .lando.yml.

## Container Access

Containers created:

`appserver` - PHP  
`appserver_nginx` - NGINX  
`database` - MySQL  
`node` - NodeJS
`mailhog` - MailHog local email server  
`pma` - phpMyAdmin

### Appserver

SSH: `lando ssh`

### Database

Database credentials may be retreived by `lando info`.

To connect via client such as SequelPro or TablesPlus use the following:

Host: 127.0.0.1
Username: wordpress
Password: wordpress
Database: wordpress
Port: (use `lando info` and get the port number listed under 'external_connection' for the database server )

To access MySQL Directly follow these steps:

SSH: `lando ssh -s database`  
Connect: `mysql -h localhost -u wordpress -pwordpress wordpress`
