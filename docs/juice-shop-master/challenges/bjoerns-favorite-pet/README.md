# 📄 bjoern's favorite pet (⭐⭐⭐)

:::note
This project is strictly for educational and research purposes. No real personal data, credentials, or sensitive information were used. Perform security testing only with proper authorization.
:::

:::important 
Run only on approved machines.
:::

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Methodology](#2-methodology)
   * [Attack Flow (Proof of Concept)](#attack-flow-proof-of-concept)
3. [Findings](#3-findings)
   * [Security Impact](#security-impact)
4. [Remediation](#4-remediation)
5. [Conclusion](#5-conclusion)

---

## 1. Executive Summary

A critical vulnerability classified as **Broken Authentication** was identified in the application's password recovery mechanism. 

The application allows attackers to send an unlimited number of attempts to answer a user's security question. Because no security mechanisms such as **rate limiting** or **account lockout** are triggered, the password for the user `bjoern@owasp.org` can be reset using an automated brute-force attack, leading to full account takeover.

---

## 2. Methodology

### Attack Flow (Proof of Concept)

1. **Identification:** The "Forgot Password" feature was triggered for the target address `bjoern@owasp.org`, which revealed the security question: *“Name of your favorite pet?”*.
2. **Intercepting the Request:** The HTTP `POST` request to the endpoint `/rest/user/reset-password` was intercepted using a local intercepting proxy (Burp Suite).
3. **Payload Generation:** To maximize the efficiency of the attack, a custom dictionary of potential pet names was compiled. The payload includes a curated list of animal names filtered and extracted from three external sources:
   * [PetPlace - top-1200-pet-names](https://petplace.com)
   * [edogs Magazine - Dog Names (Iterated A–Z)](https://edogs.de) (e.g., changing the `{letter}` variable in the URL path)
   * [Rover Blog - Cat Names (Iterated A–Z)](https://rover.com) (e.g., changing the `{letter}` variable in the URL path)
4. **Automation (Brute Force):** The intercepted request was passed to the *Burp Intruder* module. The value of the security answer parameter was defined as the payload position, and the custom pet name list was loaded.
5. **Execution:** Upon launching the attack, the correct name from the dictionary yielded an HTTP status code `200 OK` (or a successful password reset response), while invalid attempts were blocked or met with error messages. The account password was successfully changed.

---

## 3. Findings

| Parameter | Description |
| :--- | :--- |
| **Vulnerability Type** | Faulty Authentication / Lack of Rate Limiting for Security Queries |
| **OWASP Top 10** | A07:2021 – Identification and Authentication Failures |
| **Affected Component** | Password reset feature (`/rest/user/reset-password`) |
| **Tools Used** | Burp Suite Professional / Community Edition (Intruder module) |

### Security Impact

* **Exploitability:** **Easy**. Since there are no protective barriers against automated requests, a simple dictionary attack on the answer field is sufficient.
* **Impact:** **High**. Attackers can completely take over users' accounts, provided the username is known and the answer to the security question can be guessed or determined automatically. This results in a complete loss of confidentiality and integrity for the affected account.

---

## 4. Remediation

To effectively mitigate this vulnerability, the following security controls should be implemented:

* **Implement Rate Limiting:** Restrict the maximum number of allowed requests (IP-based or account-based) to the `/rest/user/reset-password` endpoint (e.g., a maximum of 3 to 5 attempts per minute).
* **Enforce Account Lockout:** Temporarily block the password recovery functionality for a specific account after a set number of consecutive failed attempts.
* **Replace Security Questions:** Security questions are widely considered deprecated, as answers can often be discovered via Social Engineering or OSINT (Open Source Intelligence). It is highly recommended to migrate to token-based recovery mechanisms (e.g., time-limited reset links sent via email).

---

## 5. Conclusion

The absence of rate limiting on critical authentication endpoints poses a severe security risk. Due to the ease of automating this attack, accounts with weak or easily discoverable security answers can be compromised within minutes. Prompt implementation of the recommended remediation steps is essential to secure the application against automated brute-force attacks.
