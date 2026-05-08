# V-Server Setup

This document explains how to configure a v-server instance, including setting up SSH login with key based authentication, disabling SSH password authentication for improved security, configuring the Nginx web server, and setting up Git and GitHub integration.

## Table of Contents


  - [1. SSH account and integrate into the V-Server](#1-ssh-account-and-integrate-into-the-v-server)
  - [2. Configure and start a Webserver](#2-configure-and-start-a-webserver)
  - [3. Reconfigure the nginx on the V-Server](#3-reconfigure-the-nginx-on-the-v-server)
  - [4. Define Shell Allias](#4-define-shell-allias)
  - [5. V-Server connection with github](#5-v-server-connection-with-github)
  - [6. SSH configuration for multiple identities](#6-ssh-configuration-for-multiple-identities)

## 1. SSH account and integrate into the V-Server

* Create a SSH key pair on your local machine
```bash
ssh-keygen -t ed25519
```
* Login via `ssh` using your username and designated password
```bash
ssh -i $HOME/.ssh/your-public-key.pub your-username@host   
```

* Add your public SSH-Keys to the V-Servers `authorized_keys` with the following command:
   * With Linux use:
   ```bash
   ssh-copy-id -i $HOME/.ssh/your-public-key.pub your-username@host
   ```
   * With Windows use:
   ```cmd
   type $HOME\.ssh\your-public-key.pub | ssh your-username@host "cat >> .ssh/authorized_keys"
   ```
* Check whether you can connect to the server using the key, or whether the public key is stored on the server with an identity. Logout from Server, try logg in with the KEY information only.

```bash
ssh -i $HOME/.ssh/your-public-key.pub your-username@host
```

* Check whether the SSH key is on the server
```bash
cat ~/.ssh/authorized_keys
```
* Log in to the V-Server again
```bash
ssh -i $HOME/.ssh/your-public-key.pub your-username@host
```
* Disable Password-Login
   * Open the file `etc/ssh/sshd_config` for editing
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```
   * Find and edit the line `#PasswordAuthentication yes` To that `#PasswordAuthentication no`
   * Save the File and exit `(STRG + o)` + `Enter` + `STRG + X`
   * Restart the `sshd` service to reload the config changes
```bash
sudo systemctl restart ssh.service
```
* Logout 
```bash
logout
```
* Check whether everything is working as intended
   * Login: You must get OK
   ```bash
   ssh-copy-id -i $HOME/.ssh/your-public-key.pub your-username@host
   ```
   * Logout
   * Again without the identity, but wit the publikAuthentication : You must get PERMISSION DENIED
   ```bash
   ssh -o PubkeyAuthentication=no your-username@host
   ```

## 2. Configure and start a Webserver
* Login in the server
```bash
ssh-copy-id -i $HOME/.ssh/your-public-key.pub your-username@host
```
* Update the repository on the server
```bash
sudo apt update
```
* Install the new package Nginx 
```bash
sudo apt install nginx -y
```
* Check the package status
```bash
systemctl status nginx.service
```
* Open your browser `http://<your_ip_address>`. You must see the Nginx welcome page

## 3. Reconfigure the nginx on the V-Server
After installing and testing the webserver, we want to configure it to render an alternative oder the own index.html file instead of the default nginx start page.

* After the first nginx configuration, i can see the current nginx page
```bash
sudo cat /var/www/html/index.nginx-debian.html
```
   
* Create a new file `alternate-index.html` in the location `/var/www/alternatives/`
   * Ensure this directory (alternatives) exists by running 
```bash
ls /var/www/
```
   * If no, create the directory 
```bash
sudo mkdir /var/www/alternatives
```
   * Add the file
```bash
sudo touch /var/www/alternatives/alternate-index.html
```
* Add a configuration for the enabled sites for nginx under /etc/nginx/sites-enables/ named alternative
   * Open the file `alternatives`
```bash
sudo nano /etc/nginx/sites-enabled/alternatives
```
   * Add the following configs:
```bash
server {
   listen 8081;
   listen [::]:8081;

   root /var/www/alternatives;
   index alternate-index.html;

   location / {
      try_files $uri $uri/ =404;
   }
}
```
* Adjust the alternate-index.html. 
   * Open the file `alternate-index.html`
```bash 
sudo nano /var/www/alternatives/alternate-index.html
```
   * Paste the example code
```html
<!DOCTYPE html>
<html>
<head>
      <meta charset="utf-8">
      <title>Hello nginx!</title>
</head>
<body>
      <h1>Hello nginx!</h1>
      <p>I have just configured our Nginx web server on Ubuntu Server!</p>
</body>
</html>
```
* Restart the nginx service 
```bash
sudo service nginx restart
```
6. Open the browser with the port `8081` to see the configurated alternative start page for the nginx webserver.
```bash
http://<your_ip_address>:8081
```

## 4. Define Shell Allias
Don't lose track of things even with multiple SSH keys. 
The goal is to connect to the V-Server using shorter commands.

* Alias unter linux
```bash
alias dal_connect="ssh -i $HOME\.ssh\your-public-key.pub your-username@host"
```

* Alias unter windows
```bash
function dal_connect {ssh -i $HOME\.ssh\your-public-key.pub your-username@host}
```

## 5. V-Server connection with github
To push the changes from GitHub directly to the server, we will establish a connection. All adjustments here are made in VServer.

* Create a SSH key pair on your V-Server machine. 
```bash
ssh-keygen -t ed25519 -C "yours_email@myEmail.com"
```

* Copy the new generated ssh key .pub

* Add the SSH key to GitHub: 
    * Navigation menu => Settings => SSH and GPG keys
    * Click the `new SSH key` button on the right
    * Paste the copied SSH public key in the field

* Check the Connection: 
```bash
ssh -T git@github.com
```
   * Once the fingerprint was verified, everything was fine.

## 6. SSH configuration for multiple identities 
* Locate the SSH config file:
```bash
$HOME\.ssh\
```
* If the `config` file doesn’t exist, create it.

* Configure SSH Settings. Add or update configurations in the SSH config file to specify which SSH key to use for each host. Here’s an example configuration for two different hosts, each using a different SSH key:
```bash
Host host1
   HostName host1.example.com
   User user1
   IdentityFile $HOME/.ssh/key1

Host host2
   HostName host1.example.com
   User user1
   IdentityFile $HOME/.ssh/key2
```
* Check the SSH Connections
```bash
ssh host1
```

```bash
ssh host2
```