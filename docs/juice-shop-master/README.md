# Juice Shop Master

:::note
This project is strictly for educational and research purposes. No real personal data, credentials, or sensitive information were used. Perform security testing only with proper authorization.
:::

:::important 
Run only on approved machines.
:::

This project documents the analysis and exploitation of selected security vulnerabilities within the OWASP Juice Shop application. All findings, demonstrations, and exploit scenarios are conducted strictly for educational and research purposes in an authorized test environment.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Quickstart](#quickstart)
3. [Challenge Documentation](#challenge-documentation)
   - [1. Bjoern's Favorite Pet (Broken Authentication)](#1-bjoerns-favorite-pet-broken-authentication)
   - [2. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)](#2-server-side-xss-protection-cross-site-scripting-via-http-header)
4. [Security Recommendations](#security-recommendations)
5. [Conclusion](#conclusion)

---

## Project Overview

This repository contains the documentation of selected OWASP Juice Shop challenges. Each challenge demonstrates a different class of web application vulnerability:

* **Bjoern's Favorite Pet** – Broken Authentication
* **Server-side XSS Protection** – Injection (Cross-Site Scripting via HTTP Header)

The purpose of this project is to understand how these vulnerabilities occur, how they can be identified in a controlled environment, and what security measures must be implemented to prevent similar weaknesses in real-world applications.

---

## Quickstart

- Download and install VirtualBox
```bash
sudo apt update && sudo apt install -y virtualbox
``` 

- Create a virtual machine running Kali Linux and Setup the Juice Shop on this VM.
```bash
https://www.kali.org/get-kali/#kali-platforms
``` 

- Clone the Juice-Shop Repository
```bash
git clone https://github.com/juice-shop/juice-shop && cd juice-shop 
```

- Download and install Dependencies
```bash
sudo apt update && sudo apt install -y nodejs npm
```

- Install and start the Juice-Shop 
```bash
npm install && npm start
```

- Open Webbrowser and enter the Destination
```bash
http://<your-ip>:3000 
``` 

- Check out the Juice-Shop and try to solve some challenges.

---

## Challenge Documentation

### 1. Bjoern's Favorite Pet (Broken Authentication)

* **Description:** Bypassing authentication mechanisms or resetting passwords by exploiting weak security questions.
* **Impact:** Complete account takeover of a specific user profile.
* **Detail:** [See bjoern's favorite pet](./challenges/bjoerns-favorite-pet/README.md)

### 2. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)

* **Description:** Injecting malicious scripts into HTTP request headers that are reflected on the server-side UI without proper sanitization.
* **Impact:** Execution of arbitrary JavaScript in the context of the user's browser session.
* **Detail:** [See Server-Side XSS protection](./challenges/server-side-xss-protection/README.md)

---

## Security Recommendations

* **Implement Robust Input Sanitization:** Never trust user input, including HTTP headers and metadata. Use context-aware output encoding.
* **Secure Authentication Mechanisms:** Avoid predictable security questions and implement multi-factor authentication (MFA) where possible.

---

## Conclusion

This analysis highlights the critical importance of secure coding practices and thorough input validation. By understanding the mechanics of these common vulnerabilities, developers and security professionals can better protect web applications against modern cyber threats.
