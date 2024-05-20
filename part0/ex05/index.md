```mermaid
sequenceDiagram
    participant User
    participant SPA
    participant Server

    User ->> SPA: Access to website
    SPA ->> Server: Request notes
    Server ->> Server: Process request
    Server -->> SPA: Send notes (JSON)
    SPA -->> User: Show notes
```