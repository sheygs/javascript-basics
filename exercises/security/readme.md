##  Cross-Site Scripting (XSS)

Read more on [cross-site-scripting](https://owasp.org/www-community/attacks/xss/)


- DOMPurify is a DOM-only uber-tolerant XSS sanitizer  for HTML, MathML and SVG. It sanitizes HTML and prevents XSS attacks.

N/B: Always sanitize user input whenever you're generating HTML from user data. Most esp when using methods like _innerHTML_, _insertAdjacentHTML_ ...

When sending data, always ensure it's sent to a _https_ origin
