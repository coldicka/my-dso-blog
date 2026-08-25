# Server-side XSS Protection

## 1. Exploitation of Cross-Site Scripting via HTTP Header Injection

## 1.1 Executive Summary
During the penetration test of the OWASP Juice Shop web application, a vulnerability assessment was conducted on how the server processes and logs client-supplied metadata. The objective was to determine whether input validation and output encoding are enforced on HTTP request headers. The test revealed that the application logs and displays specific header values on an administrative interface without proper sanitization, leading to a Stored/Reflected Cross-Site Scripting (XSS) vulnerability.

## 1.2 Methodology
An analysis of application parameters and header processing was conducted using an interception proxy to identify input vectors that bypass standard client-side input forms.

### Approach: HTTP Header Tampering and Payload Injection
* **Tool Selection:** **Burp Suite Professional** (or OWASP ZAP) was utilized as a local intercepting proxy to capture, modify, and replay HTTP requests sent from the client browser to the target server.
* **Target Identification:** The application utilizes specific non-standard or standard HTTP headers (such as `User-Agent` or custom logging headers) to track client metrics, which are subsequently rendered in the administrative dashboard or support logs.
* **Execution:** 
  1. A standard request to the application or a specific feature (such as the customer feedback or registration endpoint) was intercepted.
  2. The target HTTP header value was replaced with a classic XSS payload designed to execute arbitrary JavaScript in the context of the viewing user: `<script>alert(document.cookie)</script>` (or a modern equivalent like `<iframe src="javascript:alert(1)">`).
  3. The modified request was forwarded to the server.
* **Result:** When an administrator or a user viewed the server log dashboard or the corresponding data presentation view, the injected script executed successfully within their browser session.

## 1.3 Findings
* **Vulnerable Vector:** The application trusts client-controlled data received through HTTP request headers and reflects this data directly into the DOM of the administrative UI.
* **Security Risks:**
  * **Stored/Reflected Cross-Site Scripting (OWASP A03:2021-Injection):** Because the server fails to sanitize the input on reception and fails to encode the output when rendering, arbitrary code execution is achieved.
  * **Session Hijacking / Privilege Escalation:** An attacker can exploit this behavior to steal active session tokens (cookies without the `HttpOnly` flag) or hijack the administrative session entirely when the admin views the application logs.

## 1.4 Remediation
1. **Context-Aware Output Encoding:** The primary defense against XSS is ensuring that all user-supplied data (including HTTP headers, which are inherently untrusted inputs) is safely encoded before being rendered in the browser. Use HTML entity encoding when displaying data within standard HTML tags.
2. **Strict Server-Side Validation:** Implement strict allow-lists or regex-based input validation on the server side for all incoming header values before they are processed or stored in any database/log file.
3. **Defense-in-Depth (Content Security Policy & Cookies):** 
   * Implement a robust **Content Security Policy (CSP)** to restrict the execution of inline scripts and unauthorized external scripts.
   * Set the **`HttpOnly` flag** on all sensitive session cookies to prevent them from being accessed via JavaScript (`document.cookie`).
