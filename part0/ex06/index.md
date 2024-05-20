```mermaid
sequenceDiagram
    participant User
    participant SPA
    participant Server

    User ->> SPA: Access to website
    SPA ->> Server: Request notes
    Server ->> Server: Process request
    Server -->> SPA: Send notes (JSON)
	User -->> SPA: Type new note and submit
	SPA -->> Server: Create note request
	Server ->> Server: Process request
	Server -->> SPA: Send result (message)
	SPA -->> User: Show new note on list
```