# Minecraft Server

This repository contains everything required to set up, run, and maintain a personal Minecraft server. It includes installation instructions, configuration guidance, server startup procedures, and backup management workflows. Whether you're setting up a server for the first time or are an experienced administrator, this README serves as a convenient reference for deploying and managing your server environment.

## Table of contents

* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [Testing](#testing)

## Prerequisites

* Docker Engine should be installed and running.
* Git should be installed (git --version).
* You should be comfortable using a terminal/shell and basic Docker concepts.

## Quickstart

* Navigate to the parent directory where you want the project

```bash
cd /path/to/your/projects
```

* Clone the repository from GitHub

```bash
git clone https://github.com/coldicka/minecraft-server.git
```

* Enter the cloned project directory

```bash
cd minecraft-server
```

* Copy the example environment file to the directory

```bash
cp example.env .env
```

* Run the server

```bash
docker compose up -d
```

* Download the [minecraf installer](https://www.minecraft.net/de-de/download)
* Start the game and log in using a Java Minecraft client.
* Select **Multiplayer**
* Click **Direct connection**
* Enter the server's IP address and port

## Usage

This configuration uses a standard Minecraft server running version 26.1.2. As the environment is intended primarily for documentation and testing purposes, and because system resources are limited, the server is configured with a minimum of 1 GB and a maximum of 2 GB of RAM. These values can be adjusted, if required, by modifying the corresponding variables in the .env file.

The primary configuration file for a multiplayer server is server.properties, which defines the server's core settings. Some of these settings can be overridden through environment variables specified in the .env file. To apply these overrides, the relevant environment variables must be processed within entrypoint.sh, which then updates the corresponding values in server.properties before the server starts.

## Testing

This is a set of instructions for testing a Minecraft server using either a Minecraft client or the Python-based MCStatus tool.

**What it does:**

* Connect to your server with a Java Edition Minecraft client to verify it works.
* Create a Python virtual environment and install the MCStatus packag.

```bash
sudo apt update
sudo apt install python3-venv -y
python -m venv <venv-name>
source ~/path/to/project/<venv-name>/bin/activate

# Install MCStatus
python3 -m pip install mcstatus
```
  
* Open the **server.properties** file and change the default configuration value:

```bash
enable-query=true
```

* Run tests

```bash
# Check server latency/online
mcstatus <ip.of.your.host> ping
# Check version, player count
mcstatus <ip.of.your.host> status
# Detailed info if query enabled
mcstatus <ip.of.your.host> query
# Outputs all the server status information in JSON format
mcstatus <ip.of.your.host> json
```