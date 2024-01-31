# Vapi Customization for Story Writers

Welcome to the Vapi Customization sample project. This project demonstrates how you can extend the functionalities of Vapi, an abstraction layer for your personal assistant, to create a unique experience tailored for story writers. Using this project, writers can design characters for their stories through voice interactions with the assistant.

## Project Overview

The project showcases the following customizations:

- **Function Calling**: Writers can invoke custom functions to retrieve character inspirations and generate random names based on specific criteria. For more info [click here](api/custom-llm/README.md)
- **Custom Large Language Model (LLM) Integration**: Enhance conversational capabilities by integrating custom LLMs with Vapi for nuanced and context-aware interactions. For more info [click here](api/functions/README.md)
- **Server URL Events**: Handle various events during a call's lifecycle, such as function calls and assistant requests, to provide dynamic responses. For more info [click here](api/webhook/README.md)

## Features

- **Creative Prompts for Character Development**: Utilize the function that provides creative prompts for character development to get inspired based on a query provided by the author.
- **Random Name Generation**: Use a public endpoint to generate random names, with options to specify gender and nationality based on user input.
- **Advanced Conversational Interactions**: Leverage advanced LLMs to improve natural language understanding and generation for complex conversations.

## Getting Started

To get started with this project:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Setup Vercel using `vercel` command from the root directory. Install vercel cli if you don't have it using `npm i -g vercel`.
4. Explore the `api` directory to understand how the function calling and custom LLM integrations and webhook event handling are set up.
5. Review the types directory to see the data structures used for handling Vapi events and payloads.
6. Check the data directory for sample data that the function for creative character prompts can use.
7. Remove any unnecessary code and start adding your own logic.
8. There is sample json in `./assistants` folder. You can use that to create Vapi assistant and then test it.

## Assistant Setup.

- **Using Dashboard**: For you to create an assistant you can create a simple one by directly going to your dashboard and creating one from the UI.
- **Using POST Endpoint**: You can also create your assistant using POST `https://api.vapi.ai/assistant` with your API Key (Dashboard > Accounts > Vapi Keys) as Bearer Token and choose any body from `./assistants` folder.

Once assistant is created You may setup your server Url (`http://<domain>/api/webhook`) in the Dashboard > Accounts > Settings > Server URL. This will set the server URL for all assistants. If you want to set the serverUrl per assistant by using `serverUrl` key in the assistant body while creating. 

## Examples

Here are some examples of how the custom functionalities can be used:

- A writer asks Vapi for help with character development, and Vapi responds with a creative prompt from the function designed for this purpose.
- A writer requests a random name for a character, and Vapi uses the function for random name generation to provide a name with the specified gender and nationality.

## Conclusion

This sample project illustrates the power of Vapi customization for specific use cases, such as assisting story writers in their creative process. By following the examples and guidelines provided, developers can create a more versatile and responsive voice assistant that caters to the unique needs of their users.

For additional help and documentation, refer to the official [Vapi documentation](https://docs.vapi.ai).
