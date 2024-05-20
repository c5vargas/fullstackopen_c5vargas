```mermaid
sequenceDiagram
    participant Browser
    participant WebPage

    Browser ->> WebPage: Access to website
    WebPage ->> WebPage: Process request
    WebPage -->> Browser: Send HTML
    Browser -->> WebPage: Submit new note
	WebPage ->> WebPage: Process request
	WebPage -->> Browser: Send updated HTML
```