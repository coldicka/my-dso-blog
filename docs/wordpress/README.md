# WORDPRESS

This repository provides a Dockerized WordPress development environment featuring:

* **WordPress** running in its own container
* **Mysql** running in a separate container
* **phpmyadmin** running in a separate container
* Configuration managed through
    * docker-compose.yaml
    * Docker secrets
* Persistent storage using Docker volumes
* Automatic container restarts via restart: unless-stopped
* Internal Docker networking, allowing containers to communicate using service names.

## Table of contents

* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Usage](#usage)
    * [Data Persistence](#data-persistence)
    * [Container Restart Policy](#container-restart-policy)
    * [Secrets Management](#secrets-management)


## Prerequisites
To install and run this environment, Docker must be installed on your system.

## Quickstart

* Navigate to the parent directory where you want to store the project

```bash
cd /path/to/your/projects
```

* Clone the repository

```bash
git clone https://github.com/coldicka/wordpress.git
```

* Navigate to the project directory

```bash
cd wordpress
```

* Create the environment file

```bash
cp example.env .env
```

* Create the secrets directory

```bash
cp -r secrets_example secrets
```

* Configure the following values
    * db_name
    * db_password
    * db_root_password
    * db_user
    * mysql_password

* Start the containers

```bash
docker compose up -d
```

* Access WordPress. Open your web browser and navigate to:
```bash
http://<host-ip>:8000
```

* Complete the WordPress installation wizard.
* Access phpMyAdmin. Open your web browser and navigate to:
```bash
http://<host-ip>:8080
```

## Usage
The following Docker images are used:
* mysql:9.7.1
* phpmyadmin:5.2.3
* wordpress:7.0.0-php8.2-apache

### Data Persistence

* The MySQL database stores its data in a Docker volume mounted at: `/var/lib/mysql`
* WordPress files are stored in a Docker volume mounted at: `/var/www/html`

### Container Restart Policy

All services are configured with the following `restart policy`

### Secrets Management

Sensitive information is stored in the secrets directory and managed through Docker secrets.

For more information about the secrets management, see the Docker [documentation](https://docs.docker.com/engine/swarm/secrets/#build-support-for-docker-secrets-into-your-images)