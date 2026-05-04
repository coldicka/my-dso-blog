# Docusaurus Blog Setup
This page is for setting up 
* all SSH connections (for GitHub, VM)
* the local repository

## SSH Setup
### Quickstart SSH for GitHub
1. Create a SSH key pair on your local machine. `ssh-keygen -t ed25519 -C "my_email@myEmail.com"`

2. Copy the bew generated ssh key .pub

3. Add the SSH key to GitHub: 
    * Navigation menu => Settings => SSH and GPG keys
    * Click the `new SSH key` button on the right
    * Paste the copied SSH public key in the field

4. The connection has been tested: `ssh -T git@github.com`.
    * Once the fingerprint was verified, everything was fine.

**Note:** I didn't use any passwort for this ssh

### Quickstart SSH for the VM
The goal here is to create an SSH session that you can use to log in to the VM.

Since I'm using Windows, I used the following and renamed my key:

`C:\Users\meinName> ssh-keygen -t ed25519 -f C:\Users\meinName\.ssh\demo-ed25519`

This created two keys: **public key** and **privat Key**.

The public key will then be added to the VM. Right now, I'm waiting for my VM login credentials.

## Local repository - Dosarius

[This template](https://github.com/spmse/dev-blog-template) was used as the basis for our own repository.

1. Install git `https://git-scm.com/install/`

2. Install nodejs `https://nodejs.org/en/download`

3. Clone this repository `git clone https://github.com/coldicka/my-dso-blog.git`

4. Change to the new directory `cd my-dso-blog`

5. Install the dependency from package.json `npm install`

6. Check the current branch `git branch`

7. Create a new branch in one command `git branch feature/repositorie_aufsetzen`

8. Switch to the created branch `git checkout feature/repositore_aufsetzen`

9. Make any changes. For example: write the new blog.

10. Push the changes `git push -u origin feature/repositorie_aufsetzen`

## Further References
To set up the blog and the repositories, we used
* The course "Practical Motivation in DevSecOps"
* The [documentation](https://developer-akademie-devsecopskurs.github.io/dso-faq-site/de/docs/category/helpful-resources) in the Developer Academy
for guidance and assistance