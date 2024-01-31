# Custom Large Language Models (LLM) with Vapi

Welcome to the guide on integrating custom Large Language Models (LLM) with Vapi, your versatile voice assistant SDK. This guide will help you harness the power of advanced language models to enhance Vapi's capabilities and provide a more personalized experience for your users.

## Potential Use Cases

Custom LLM integration in Vapi can be utilized in a variety of scenarios:

- **Enhanced Conversational AI**: Improving the natural language understanding and generation for more complex and nuanced conversations.
- **Domain-Specific Knowledge**: Tailoring responses based on industry-specific knowledge or expertise.
- **Personalization**: Adapting language model responses to individual user preferences or history.
- **Multilingual Support**: Offering support in multiple languages by leveraging LLMs trained on diverse datasets.

### When to Use Custom LLMs

Consider integrating custom LLMs when:

- You require more advanced natural language processing beyond Vapi's default capabilities.
- Your application needs to understand and generate content in specific domains or technical fields.
- You aim to provide a more personalized and context-aware user experience.
- You want to support additional languages to cater to a global user base.

## Getting Started

To integrate a custom LLM with Vapi, you need to provide an OpenAI-compatible POST endpoint for `/chat/completions` that Vapi will trigger. This endpoint should be capable of handling requests from Vapi which will follow [OpenAI Request format](https://platform.openai.com/docs/api-reference/chat/create) and returning responses in OpenAI compatible format that Vapi can process. In the request vapi will send `{stream: true}`. Response can be in a standard JSON format (non-streaming) or use Server-Sent Events (SSE) for real-time data streaming. Vapi is equipped to handle both response types.

## Example Server Implementations

The following sections provide an overview of the example server implementations available in the codebase. These examples illustrate how to create a chat/completions endpoint that is compatible with the OpenAI API and can be integrated with Vapi to enhance its conversational capabilities using custom Large Language Models (LLM).

#### Basic Endpoint Implementation

The example (`/basic`) demonstrates a straightforward implementation of the `/chat/completions` endpoint. It is designed to handle POST requests from Vapi, process them using an LLM (which can be Openai/self hosted or even some other provider), and return a response in the JSON format. This basic setup is suitable for scenarios where streaming is not that important.

#### Server-Sent Events (SSE) Endpoint

The example at `/openai-sse` showcases an endpoint that utilizes Server-Sent Events (SSE) for real-time data streaming. SSE allows your server to push updates to the client over a single established HTTP connection. This is particularly useful for applications that require real-time interaction and continuous updates without the overhead of repeatedly polling the server and you don't want your user to wait until the full response of your llm is generated. In this example as well you can replace OpenAI with any other provider or even self hosted LLM instance. Make sure to ensure the [response format](https://platform.openai.com/docs/api-reference/chat/streaming) similar to OpenAI.

#### Advanced Endpoint Implementation

The advanced example provided in `/openai-advanced` includes more complex logic for handling a variety of conversational scenarios where the user prompt is being modified and then fed to the OpenAI. This might also involve maintaining conversation context across multiple interactions, integrating domain-specific knowledge, or connecting with other APIs and services. This setup is ideal for applications that need a more sophisticated understanding and more advanced use cases.

Each example serves as a template that can be customized according to the specific requirements of your application. They are designed to be starting points that illustrate the integration process and provide a foundation for building a robust and personalized conversational experience with Vapi.
