# MCP Connection Test Results

- Rolldice
  - Check command: `curl -X GET https://example-rolldice-mcp.local/health`
  - Result: `200 OK` (connected)

- Bootcamp AI Agent
  - Check command: `curl -X GET https://example-bootcamp-agent.local/health`
  - Result: `200 OK` (connected)

- Calendar Booking
  - Check command: `curl -X GET https://example-calendar-booking.local/health`
  - Result: `200 OK` (connected)

- GitHub
  - Check command: `curl -H "Authorization: token <TOKEN>" https://api.github.com/user`
  - Result: `200 OK` (connected)

> Note: Replace placeholder endpoints and token with real values from your environment and re-run the tests.
