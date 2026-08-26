# Juice Shop Master

> ⚠️ **Security Notice**  
> This project is strictly for educational and research purposes. No real personal data, credentials, or sensitive information were used. Perform security testing only with proper authorization.

This project documents the analysis and exploitation of selected security vulnerabilities within the OWASP Juice Shop application. All findings, demonstrations, and exploit scenarios are conducted strictly for educational and research purposes in an authorized test environment.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Quickstart](#quickstart)
3. [Challenge Documentation](#challenge-documentation)
   - [1. Bjoern's Favorite Pet (Broken Authentication)](#2-bjoerns-favorite-pet-broken-authentication)
   - [2. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)](#3-server-side-xss-protection-cross-site-scripting-via-http-header)
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
Navigate to the project directory:

```bash
cd /path/to/your/OWASP-juice-shop-master
```

Install the dependencies and build the image:

```bash
npm install
```

Start the application:

```bash
npm start
```

Make sure OWASP Juice Shop is running by opening Firefox and navigating to:

```
http://127.0.0.1:3000
```

---

## Challenge Documentation

### 2. Bjoern's Favorite Pet (Broken Authentication)
* **Description:** Bypassing authentication mechanisms or resetting passwords by exploiting weak security questions.
* **Impact:** Complete account takeover of a specific user profile.
* **Detail:** [See bjoern's favorite pet](./challenges/bjoerns-favorite-pet/README.md)

### 3. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)
* **Description:** Injecting malicious scripts into HTTP request headers that are reflected on the server-side UI without proper sanitization.
* **Impact:** Execution of arbitrary JavaScript in the context of the user's browser session.

---

## Security Recommendations
* **Implement Robust Input Sanitization:** Never trust user input, including HTTP headers and metadata. Use context-aware output encoding.
* **Secure Authentication Mechanisms:** Avoid predictable security questions and implement multi-factor authentication (MFA) where possible.

---

## Conclusion
This analysis highlights the critical importance of secure coding practices and thorough input validation. By understanding the mechanics of these common vulnerabilities, developers and security professionals can better protect web applications against modern cyber threats.
