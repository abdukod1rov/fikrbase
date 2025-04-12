---
title: The Lifecycle of an HTTP Request
date: May 15, 2025
category: Backend Development
author: Samandar Abdukodirov
tags: [Networking, WebDevelopment, HTTP, Performance, BrowserRendering]
preview: Understanding the journey of an HTTP request is fundamental for any web developer. This article breaks down the complex process 
---

# The Lifecycle of an HTTP Request: From Browser to Server and Back

*May 15, 2025 · Backend Development · By Samandar Abdukodirov*

Understanding the journey of an HTTP request is fundamental for any web developer. This article breaks down the complex process of what happens when you type a URL into your browser and press Enter, following the request's journey through networks, servers, and back to your screen.

![HTTP request lifecycle diagram](/static/images/go_postgresql.png)
*Visualization of the full HTTP request lifecycle*

## The Initial Steps: User Input to DNS Resolution

When you type `https://example.com` in your browser and press Enter, a chain of events begins:

1. **URL Parsing**: The browser parses the URL to identify the protocol (HTTPS), domain (example.com), and path (/ in this case).
2. **Browser Cache Check**: Before making any network requests, the browser checks its cache to see if it has recently retrieved resources from this URL.
3. **DNS Resolution**: The browser needs to find the IP address associated with "example.com". It follows these steps:
   - Check browser DNS cache
   - Check operating system DNS cache
   - Query the configured DNS server (typically provided by your ISP)
   - The DNS server performs a recursive search to find the authoritative nameserver for the domain

```
# Example of DNS lookup using dig
$ dig example.com

;; ANSWER SECTION:
example.com.    86400   IN    A    93.184.216.34
```

## Establishing the Connection

Once the browser has the IP address, it's time to establish a connection:

1. **TCP Handshake**: The browser initiates a TCP connection with the server through a three-way handshake:
   - Client sends SYN packet
   - Server responds with SYN-ACK
   - Client acknowledges with ACK

2. **TLS Negotiation** (for HTTPS): If using HTTPS, a TLS handshake occurs after the TCP connection:
   - Client sends "Client Hello" with supported cipher suites
   - Server responds with "Server Hello" and certificate
   - Certificate validation
   - Key exchange for symmetric encryption
   - Secure connection established

Here's a visualization of the TCP/TLS handshake process:

| Step | Client | Direction | Server |
|------|--------|-----------|--------|
| 1 | SYN | → | |
| 2 | | ← | SYN, ACK |
| 3 | ACK | → | |
| 4 | Client Hello | → | |
| 5 | | ← | Server Hello, Certificate |
| 6 | Key Exchange | → | |
| 7 | | ← | Finished |
| 8 | Encrypted Data | ↔ | Encrypted Data |

## The HTTP Request

Now that a secure connection is established, the browser sends the actual HTTP request:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: text/html,application/xhtml+xml,application/xml
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

The request includes:
- HTTP method (GET, POST, etc.)
- Path (/ in this case)
- HTTP version
- Various headers providing context

## Server-Side Processing

Once the server receives the request, a complex series of events unfolds:

1. **Web Server Receipt**: The web server (Nginx, Apache, etc.) receives the request first.

2. **Request Routing**: The web server determines how to handle the request:
   - Static file? Serve directly
   - Dynamic content? Forward to application server


