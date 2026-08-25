# Admin Section

## 1. Identification and Access to the Administration Board

## 1.1 Executive Summary

During the penetration test of the OWASP Juice Shop web application, a targeted search for hidden administrative directories and routes was conducted. The objective was to identify unprotected management interfaces through which unauthorized actors could potentially view critical user data (such as email addresses) or perform administrative actions (such as deleting customer reviews).

## 1.2 Methodology

An automated directory brute-forcing approach and client-side code analysis were utilized to identify the administration board.

### Approach: Automated Directory Brute-Forcing / Fuzzing

* **Tool Selection:** The proprietary, self-developed tool `GobusterSelenium` was used to automatically discover hidden paths. This combination of the high-performance fuzzer `Gobuster` and the browser automation framework `Selenium` ensures reliable detection of dynamic, JavaScript-generated client routes (Single-Page Application routing).
* **Configuration:** The base URL of the web application was configured within the tool. The provided `wordlist.txt` file was loaded as the payload source for the path structure.
* **Execution:** The tool systematically injected the entries from the wordlist into the root directory of the application (e.g., `http://[Target-IP]/FUZZ` as well as explicitly against the client-side hash routing `http://[Target-IP]/#/FUZZ`).
* **Result:** Through automated cross-referencing and evaluation of server and DOM responses, the correct administrative address was successfully identified.

## 1.3 Findings

* **Identified Path:** Through the combination of directory fuzzing and JavaScript analysis, the route `/#/administration` (or `/administration`) was successfully located.
* **Security Risks:**
  * **Information Disclosure / Security through Obscurity:** The administrative path is exposed by default in the publicly accessible, client-side source code.
  * **Broken Function Level Authorization:** Depending on the application's configuration (lack of server-side role validation), directly accessing this path after successful authentication (e.g., forced via SQL Injection) grants full visibility into registered email addresses and allows the administrative deletion of user feedback.

## 1.4 Remediation

1. **Server-Side Access Control (RBAC):** Relying on secrecy or hiding the admin path offers no real protection (**Security through obscurity**). Every administrative endpoint (especially the underlying REST APIs under `/api/` or `/rest/`) must strictly verify on every server-side request whether the provided session token actually possesses administrator privileges.
2. **Minification and Code Stripping:** Client-side route maps in publicly accessible JavaScript bundles should be cleaned up prior to deployment. Administrative paths must not be visible in the source code to unauthenticated clients.
# Admin Section

## 1. Identification and Access to the Administration Board

## 1.1 Executive Summary

During the penetration test of the OWASP Juice Shop web application, a targeted search for hidden administrative directories and routes was conducted. The objective was to identify unprotected management interfaces through which unauthorized actors could potentially view critical user data (such as email addresses) or perform administrative actions (such as deleting customer reviews).

## 1.2 Methodology

An automated directory brute-forcing approach was utilized to identify the administration board.

### Approach: Automated Directory Brute-Forcing / Fuzzing

* **Tool Selection:** The proprietary, self-developed tool `GobusterSelenium` was used to automatically discover hidden paths. This combination of the high-performance fuzzer `Gobuster` and the browser automation framework `Selenium` ensures reliable detection of dynamic, JavaScript-generated client routes (Single-Page Application routing).
* **Configuration:** The base URL of the web application was configured within the tool. The provided `wordlist.txt` file was loaded as the payload source for the path structure.
* **Execution:** The tool systematically injected the entries from the wordlist into the root directory of the application (e.g., `http://[Target-IP]/FUZZ` as well as explicitly against the client-side hash routing `http://[Target-IP]/#/FUZZ`).
* **Result:** Through automated cross-referencing and evaluation of server and DOM responses, the correct administrative address was successfully identified.

## 1.3 Findings

* **Identified Path:** Through the automated directory fuzzing process, the route `/#/administration` (or `/administration`) was successfully located.
* **Security Risks:**
  * **Information Disclosure / Security through Obscurity:** The administrative path is exposed to discovery due to its predictable naming convention and visibility within accessible routing frameworks.
  * **Broken Function Level Authorization:** Depending on the application's configuration (lack of server-side role validation), directly accessing this path after successful authentication (e.g., forced via SQL Injection) grants full visibility into registered email addresses and allows the administrative deletion of user feedback.

## 1.4 Remediation

1. **Server-Side Access Control (RBAC):** Relying on secrecy or hiding the admin path offers no real protection (**Security through obscurity**). Every administrative endpoint (especially the underlying REST APIs under `/api/` or `/rest/`) must strictly verify on every server-side request whether the provided session token actually possesses administrator privileges.
2. **Minification and Code Stripping:** Client-side route maps in publicly accessible JavaScript bundles should be cleaned up prior to deployment. Administrative paths must not be visible or reconstructible in the source code for unauthenticated clients.
