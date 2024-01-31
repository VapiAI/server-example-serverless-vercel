# Vapi Customization for Story Writers

Welcome to the Vapi Customization sample project. This project demonstrates how developers can extend the functionalities of Vapi, a versatile voice assistant SDK, to create a unique experience tailored for story writers. By customizing Vapi, writers can design characters for their stories through voice interactions with the assistant.

## Project Overview

The project showcases the following customizations:

- **Function Calling**: Writers can invoke custom functions to retrieve character inspirations and generate random names based on specific criteria.
- **Custom Large Language Model (LLM) Integration**: Enhance conversational capabilities by integrating custom LLMs with Vapi for nuanced and context-aware interactions.
- **Server URL Events**: Handle various events during a call's lifecycle, such as function calls and assistant requests, to provide dynamic responses.

## Features

- **Creative Prompts for Character Development**: Utilize the function that provides creative prompts for character development to get inspired based on a query provided by the author.
- **Random Name Generation**: Use a public endpoint to generate random names, with options to specify gender and nationality based on user input.
- **Advanced Conversational Interactions**: Leverage advanced LLMs to improve natural language understanding and generation for complex conversations.

## Getting Started

To get started with this project:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Explore the `api` directory to understand how the function calling and custom LLM integrations and webhook event handling are set up.
4. Review the types directory to see the data structures used for handling Vapi events and payloads.
5. Check the data directory for sample data that the function for creative character prompts can use.
6. Remove any unnecessary code and start adding your own logic.

## Usage

To use the custom functionalities:

- **Invoke Functions**: Use voice commands to Vapi to trigger the functions for generating random names or providing character inspiration.
- **Integrate LLM**: Set up an OpenAI-compatible _POST_ endpoint for `/chat/completions` to process requests from Vapi using a custom LLM.
- **Handle Events**: Implement handlers for server URL events like assistant-request and function-call to dynamically respond during a call.

## Examples

Here are some examples of how the custom functionalities can be used:

- A writer asks Vapi for help with character development, and Vapi responds with a creative prompt from the function designed for this purpose.
- A writer requests a random name for a character, and Vapi uses the function for random name generation to provide a name with the specified gender and nationality.

## Conclusion

This sample project illustrates the power of Vapi customization for specific use cases, such as assisting story writers in their creative process. By following the examples and guidelines provided, developers can create a more versatile and responsive voice assistant that caters to the unique needs of their users.

For additional help and documentation, refer to the official [Vapi documentation](https://docs.vapi.ai).
