# V-Server Setup

This page documents how I configured my first cloud server instance in the Developer Akademie DevSecOps Course.

## Table of Contents

- [V-Server Setup](#v-server-setup)
  - [Table of Contents](#table-of-contents)
  - [Create an SSH account and integrate into the V-Server](#create-an-ssh-account-and-integrate-into-the-v-server)
  - [Configure and start a Webserver](#configure-and-start-a-webserver)
  - [Adjusting the server configuration](#adjusting-the-server-configuration)
    - [Step to reconfigure the nginx on the cloud](#step-to-reconfigure-the-nginx-on-the-cloud)
  - [Define Shell Allias](#define-shell-allias)
    - [Alias unter linux](#alias-unter-linux)
    - [Alias unter linux](#alias-unter-windows)
  - [V-Server connection with github](#v-server-connection-with--github)
  - [SSH configuration for multiple identities](#ssh-configuration-for-multiple-identities)
    - [Create the SSH Config File](#create-the-ssh-config-file)
    - [Configure SSH Settings](#configure-ssh-settings)
    - [Test SSH Connections](#test-ssh-connections)


## Create an SSH account and integrate into the V-Server

1. Create a SSH key pair on your local machine
   1. `ssh-keygen -t ed25519`
2. Login via `ssh` using your username and designated password
3. Add your public SSH-Keys to the V-Servers `authorized_keys` with the following command:
   1. `ssh-copy-id -i $HOME/.ssh/your-public-key.pub <user>@123.4.5.255`
   2.  With windows `type path\.ssh\demo-ed25519.pub | ssh user@host "cat >> .ssh/authorized_keys"`
4. Check whether you can connect to the server using the key, or whether the public key is stored on the server with an identity. Logout from Server, try logging in with the KEY information only -> `ssh -i <path/to/key> user@host`
   1. You should not be prompted for a password if it works correctly
5. Check whether the SSH key is on the server
   1. `cat ~/.ssh/authorized_keys`
6. Log in to the V-Server again
   
7. Disable Password-Login
   1. Adjust the configuration under `etc/ssh/sshd_config` => `sudo nano /etc/ssh/sshd_config`
   2. Find and edit the line `#PasswordAuthentication yes` To that `#PasswordAuthentication no`
   3. Save the File and exit (STRG + o) (Enter) (STRG + X)
   4. Restart the `sshd` service to reload the config changes `sudo systemctl restart ssh.service`
8. Logout `logout`
9. check whether everything is working as intended
   1. login: `ssh-copy-id -i $HOME/.ssh/your-public-key.pub <user>@123.4.5.255` => Is OK
   2. logout
   3. Again without the identity, but wit the publikAuthentication : `ssh -o PubkeyAuthentication=no <user>@123.4.5.255` => PERMISSION DENIED is OK
10. Disable Root-Login

## Configure and start a Webserver
1. login in the server
   * `ssh-copy-id -i $HOME/.ssh/your-public-key.pub <user>@123.4.5.255`
2. Update the repository on the server
   * `sudo apt update`
3. Install the new package Nginx 
   * `sudo apt install nginx -y`
4. Check the package status
   * `systemctl status nginx.service`
5. now you can check your browser => write `Your-IP-adress`. You must see the Nginx welcome page

## Adjusting the server configuration
After installing and testing the webserver, we want to configure it to render an alternative oder the own index.html file instead of the default nginx start page.

### Step to reconfigure the nginx on the cloud
1. After the first nginx configuration, i can see the current nginx page
   * `ls /var/www`
   * `sudo cat /var/www/html/index.nginx-debian.html`
2. create a new file `alternate-index.html` in the location /var/www/alternatives/
   * Ensure this directory (alternatives) exists by running `ls /var/www/`
   * If no, create the directory `sudo mkdir /var/www/alternatives`
   * `sudo touch /var/www/alternatives/alternate-index.html`
3. add a configuration for the enabled sites for nginx under /etc/nginx/sites-enables/ named alternative
   * `sudo nano /etc/nginx/sites-enabled/alternatives`
   * add the following configs:
```
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
4. adjust the alternate-index.html. 
   * sudo nano /var/www/alternatives/alternate-index.html
   * paste the example code
      ```
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
5. Restart the nginx service 
* `sudo service nginx restart`
6. Open the browser with the port `8081` to see the configurated alternative start page for the nginx webserver.
   * `ip-vm:8081`

## Define Shell Allias
Don't lose track of things even with multiple SSH keys. 
The goal is to connect to the cloud using shorter commands.

### Alias unter linux
`alias dal_connect="ssh -i path\.ssh\demo-ed25519 user@hostIp"`

### Alias unter windows
`function dal_connect {ssh -i path\.ssh\demo-ed25519 user@hostIp}`

## V-Server connection with github
To push the changes from GitHub directly to the server, we will establish a connection.

1. Create a SSH key pair on your local machine. `ssh-keygen -t ed25519 -C "my_email@myEmail.com"`

2. Copy the bew generated ssh key .pub

3. Add the SSH key to GitHub: 
    * Navigation menu => Settings => SSH and GPG keys
    * Click the `new SSH key` button on the right
    * Paste the copied SSH public key in the field

4. The connection has been tested: `ssh -T git@github.com`.
    * Once the fingerprint was verified, everything was fine.

## SSH configuration for multiple identities 

[unter windows](https://linsnotes.com/posts/manage-multiple-ssh-keys-in-windows/) (05.05.2026)

### Create the SSH Config File
locate the SSH config file:
1. Navigate to `C:\Users\<your_username>\.ssh\.`
2. If the `config` file doesn’t exist, create it.

### Configure SSH Settings
Add or update configurations in the SSH config file to specify which SSH key to use for each host. Here’s an example configuration for two different hosts, each using a different SSH key:
```
Host host1
    HostName host1.example.com
    User user1
    IdentityFile C:/Users/<my_username>/.ssh/key1

Host host2
    HostName host1.example.com
    User user1
    IdentityFile C:/Users/<my_username>/.ssh/key2
```
### Test SSH Connections
After that, the connection can be tested :`ssh host1`