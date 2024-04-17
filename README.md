# Vapi Example for Serverless Vercel

Welcome to the Vapi Serverless Vercel sample project. This project demonstrates how you can extend the functionalities of Vapi, an abstraction layer for your personal assistant, to create a unique experience tailored for story writers. Using this project, writers can design characters for their stories through voice interactions with the assistant.

## Project Overview

The project showcases the following customizations:

- **Function Calling**: Writers can invoke custom functions to retrieve character inspirations and generate random names based on specific criteria. For more info [click here](api/functions/README.md)
- **Custom Large Language Model (LLM) Integration**: Enhance conversational capabilities by integrating custom LLMs with Vapi for nuanced and context-aware interactions. For more info [click here](api/custom-llm/README.md)
- **Server URL Events**: Handle various events during a call's lifecycle, such as function calls and assistant requests, to provide dynamic responses. For more info [click here](api/webhook/README.md)

## Features

- **Creative Prompts for Character Development**: Utilize the function that provides creative prompts for character development to get inspired based on a query provided by the author.
- **Random Name Generation**: Use a public endpoint to generate random names, with options to specify gender and nationality based on user input.
- **Advanced Conversational Interactions**: Leverage advanced LLMs to improve natural language understanding and generation for complex conversations.

## Getting Started

To get started with this project:

#### Basic Project Setup

1. Clone the repository to your local machine.
2. Install the dependencies by running `pnpm install`.
3. Setup Vercel using `vercel` command from the root directory. Install vercel cli if you don't have it using `npm i -g vercel`.
4. You can start the project locally using command `pnpm start`
5. You can deploy the project to vercel using command `pnpm deploy:prod`

#### Configuration

1. create a .env file in your repository using the command `cp example.env .env`
2. Get ur `OPENAI_API_KEY` from openai and update the `.env` file.
3. From Vapi dashboard, you can get your Vapi Private key from **Dashboard > Accounts > Vapi Keys > Api Key** and update `.env` file
4. Get ServerURL

   1. Using Ngrok: Start the project locally using `pnpm start` and then use ngrok to get the url.
   2. Using Vercel: Deploy functions to vercel using `pnpm deploy:prod` and get URL from the Vercel.

   The serverURL to be configured in the **Dashboard > Accounts > Settings** is `https://<domain>/api/webhook` This has all the messages placeholder. You can also try `https://<domain>/api/functions/basic` or `https://<domain>/api/rag`

5. There are sample request body in `./assistants` folder. Use them to create an assistant using the POST endpoint `https://api.vapi.ai/api/assistant` with any of the body from `./assistants`.
6. Now you have an assistant created which you can talk with from the Vapi Dashboard.

#### Explore and make changes.

1. Explore the `api` directory to understand how the function calling and custom LLM integrations and webhook event handling are set up.
2. Review the types directory to see the data structures used for handling Vapi events and payloads.
3. Check the data directory for sample data that the function for creative character prompts can use.
4. Remove any unnecessary code and start adding your own logic.

## Examples

Here are some examples of how the custom functionalities can be used:

- A writer asks Vapi for help with character development, and Vapi responds with a creative prompt from the function designed for this purpose.
- A writer requests a random name for a character, and Vapi uses the function for random name generation to provide a name with the specified gender and nationality.

## Conclusion

This sample project illustrates the power of Vapi customization for specific use cases, such as assisting story writers in their creative process. By following the examples and guidelines provided, developers can create a more versatile and responsive voice assistant that caters to the unique needs of their users.

For additional help and documentation, refer to the official [Vapi documentation](https://docs.vapi.ai).
