# Handling Server URL Events with Vapi

Welcome to the guide on handling Server URL events with Vapi. The Server URL is a webhook-like mechanism that Vapi uses to communicate with your server for various events during a call's lifecycle.

## Available Events and Their Uses

### Function Calling

- Event: function-call
- Description: Triggered when an assistant determines a function needs to be called based on the systemPrompt.
- Use Case: Use this event to perform actions like sending emails or fetching data.
- Example Implementation: See `.functionCall.ts` for handling function calls.

### Retrieving Assistants

- Event: assistant-request
- Description: Triggered when a call comes in without a specified assistant, prompting your server to provide one.
- Use Case: Dynamically assign assistants based on the caller's phone number or other criteria.
- Example Implementation: See `.assistantRequest.ts` for providing an assistant.

### Call Status Updates

- Event: status-update
- Description: Sent during a call to update the status, such as when a call starts or ends.
- Use Case: Monitor call progress or log call statuses for analytics.
- Example Implementation: See `.statusUpdate.ts` for handling status updates and potentially storing them in your database or triggering other logic based on the call status.

### End of Call Report

- Event: end-of-call-report
- Description: Sent when a call ends, providing a summary and transcript along with other details of the call.
- Use Case: Store call summaries and transcripts for record-keeping or analysis.
- Example Implementation: See `.endOfCallReport.ts` for storing call reports.

### Hang Notifications

- Event: hang
- Description: Sent if the assistant fails to respond for 5+ seconds.
- Use Case: Notify your team of potential issues or log incidents for troubleshooting.
- Example Implementation: See `.hang.ts` for setting up an alert system or logging the incident.

### Speech Updates

- Event: speech-update
- Description: Sent during a call to provide updates on who is speaking.
- Use Case: Use this event to identify speaker changes or to trigger actions based on who is speaking.
- Example Implementation: See `.speechUpdateHandler.ts` for handling speech updates.

### Transcript Updates

- Event: transcript
- Description: Sent during a call whenever a transcript is available for a certain chunk in the stream.
- Use Case: Store transcripts for analysis or real-time processing.
- Example Implementation: See `.transcript.ts` for handling transcript updates.

## Dynamic Shared context.

There could be scenarios where you may want to have some shared context across all the interactions b/w the Backend and the Vapi. You can do so by using a serverUrl which has a id which you can use to fetch shared context.

For example in the current implementation, `/api/webhook/<conversation_uuid>` can be used to configure when creating the assistant. So that whenever any webhook is triggered for that assistant you can fetch the context using conversation_uuid.
