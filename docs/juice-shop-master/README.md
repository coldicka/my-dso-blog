# Juice Shop Master

> ⚠️ **Security Notice**  
> This project is strictly for educational and research purposes. No real personal data, credentials, or sensitive information were used. Perform security testing only with proper authorization.

This project documents the analysis and exploitation of selected security vulnerabilities within the OWASP Juice Shop application. All findings, demonstrations, and exploit scenarios are conducted strictly for educational and research purposes in an authorized test environment.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Quickstart](#quickstart)
3. [Challenge Documentation](#challenge-documentation)
   - [1. Admin Section (Broken Access Control)](#1-admin-section-broken-access-control)
   - [2. Bjoern's Favorite Pet (Broken Authentication)](#2-bjoerns-favorite-pet-broken-authentication)
   - [3. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)](#3-server-side-xss-protection-cross-site-scripting-via-http-header)
   - [4. Video XSS (Cross-Site Scripting)](#4-video-xss-cross-site-scripting)
4. [Security Recommendations](#security-recommendations)
5. [Conclusion](#conclusion)

---

## Project Overview
This repository contains the documentation of selected OWASP Juice Shop challenges. Each challenge demonstrates a different class of web application vulnerability:

* **Admin Section** – Broken Access Control
* **Bjoern's Favorite Pet** – Broken Authentication
* **Server-side XSS Protection** – Injection (Cross-Site Scripting via HTTP Header)
* **Video XSS** – Injection (Cross-Site Scripting)

The purpose of this project is to understand how these vulnerabilities occur, how they can be identified in a controlled environment, and what security measures must be implemented to prevent similar weaknesses in real-world applications.

---

## Quickstart
1. Open the **Juice Shop Master** project folder.
2. Navigate to the corresponding challenge directory.
3. Open the challenge **README file** to review the vulnerability analysis and documentation.
4. Use the linked **walkthrough video** as a supplementary explanation of the challenge.
5. Perform all testing **only** against the authorized Juice Shop instance.

---

## Challenge Documentation

### 1. Admin Section (Broken Access Control)
* **Description:** Accessing restricted administrative areas due to missing or improperly configured role-based access controls.
* **Impact:** Unauthorized users can view sensitive system data or perform administrative actions.

### 2. Bjoern's Favorite Pet (Broken Authentication)
* **Description:** Bypassing authentication mechanisms or resetting passwords by exploiting weak security questions.
* **Impact:** Complete account takeover of a specific user profile.

### 3. Server-side XSS Protection (Cross-Site Scripting via HTTP Header)
* **Description:** Injecting malicious scripts into HTTP request headers that are reflected on the server-side UI without proper sanitization.
* **Impact:** Execution of arbitrary JavaScript in the context of the user's browser session.

### 4. Video XSS (Cross-Site Scripting)
* **Description:** Exploiting input vectors within the video player or related metadata fields to execute malicious scripts.
* **Impact:** Session hijacking, defacement, or redirection of users to malicious websites.

---

## Security Recommendations
* **Implement Robust Input Sanitization:** Never trust user input, including HTTP headers and metadata. Use context-aware output encoding.
* **Enforce Strict Access Controls:** Apply the principle of least privilege (PoLP) and verify authorization on every server-side request.
* **Secure Authentication Mechanisms:** Avoid predictable security questions and implement multi-factor authentication (MFA) where possible.

---

## Conclusion
This analysis highlights the critical importance of secure coding practices and thorough input validation. By understanding the mechanics of these common vulnerabilities, developers and security professionals can better protect web applications against modern cyber threats.
