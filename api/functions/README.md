# Function Calling with Vapi

Welcome to Vapi, your versatile voice assistant SDK. This guide will walk you through the process of extending Vapi's functionality with custom function calling, allowing you to focus on your core business logic.

## Potential Use Cases

Custom function calling in Vapi can be leveraged in various scenarios to enhance the user experience and provide tailored responses. Here are some potential use cases where custom functions can be particularly beneficial:

- **Data Retrieval**: Fetching real-time data from external APIs, such as weather information, stock prices, or news updates.
- **User Interaction**: Handling complex user queries that require specific business logic, like booking appointments or processing orders.
- **Content Generation**: Creating dynamic content based on user input, such as personalized greetings, stories, or marketing copy.
- **Automation**: Performing background tasks like sending emails, updating databases, or triggering workflows in response to voice commands.
- **Integration**: Connecting with third-party services or platforms to extend the functionality of Vapi, like integrating with CRM systems or IoT devices.
- **Analytics**: Gathering and analyzing user data to provide insights, recommendations, or personalized experiences.

### When to Use Function Calls

Function calls are a better choice when:

- The response to a user query requires processing that cannot be handled within the predefined capabilities of Vapi.
- There is a need to interact with external systems or databases to complete a user request.
- Custom business logic is required to generate a response that is not supported by Vapi's built-in configurations or through prompt manipulations.
- You want to maintain control over the data processing and logic flow within your own infrastructure.

By utilizing custom function calls, developers can create a more versatile and responsive voice assistant that caters to the specific needs of their users and business.

## Getting Started

To get started with function calling in Vapi, you'll need to define your functions and register them with the Vapi Assistant. These functions can be used to perform actions or fetch data in response to user queries.

## Defining Functions

Create your functions in the `functions` directory. Each function can be a separate file exporting an async function that takes parameters and returns a response.

Example function:

```js
export const getRandomName = async ({ gender, nat }) => {
  // Your logic to fetch random Name
  return { result: "John Doe" };
};
```

## Registering Functions

Register your functions in the `functions/index.ts` file. This file acts as a central registry for all your custom functions.

Example registration:

```ts
import { getCharacterInspiration } from "./getCharacterInspiration";
import { getRandomName } from "./getRandomName";

export default {
  getRandomName: getRandomName,
  getCharacterInspiration: getCharacterInspiration,
  // Add more functions here
};
```

## Handling Function Calls

When Vapi receives a function call, it will invoke the corresponding function from your registry. The api/webhook/functionCall.ts file is responsible for handling these calls.

Example handler:

```ts
import defaultFunctions from "../../functions";

export const functionCallHandler = async (payload) => {
  const { functionCall } = payload;
  const { name, parameters } = functionCall;

  if (defaultFunctions[name]) {
    return await defaultFunctions[name](parameters);
  } else {
    throw new Error(`Function ${name} not found`);
  }
};
```

## Function Invocation

You need to create a Vapi Assistant which will contain the function information and when to invoke it as part of the systemPrompt in the model configuration. Sample Assistant configuration is here.

```JSON
{
  "firstMessage": "Hello, how can I help you today?",
  "model": {
    "provider": "openai",
    "model": "gpt-3.5-turbo",
    "systemPrompt": "You are a versatile assistant...",
    "functions": [
      {
        "name": "getRandomName",
        "description": "Generates a random name based on optional gender and nationality",
        "parameters": {
          "type": "object",
          "properties": {
            "gender": { "type": "string", "enum": ["male", "female"],
              "description": "The gender for which to generate a name." },
            "nat": { "type": "string",
              "description": "The nationality based on which to generate a name. Example: IN for India, US for United States of America or USA and so on." }
          }
        }
      },
      {
        "name": "getCharacterInspiration",
        "description": "Provides character inspiration based on a given query provided by the author.",
        "parameters": {
          "type": "object",
          "properties": {
            "inspiration": { "type": "string" }
          }
        }
      }
      // Add more functions here
    ]
  }
}

```

## Function Response

## Conclusion

With function calling, you can easily extend the capabilities of Vapi to suit your specific business needs. By following the steps outlined above, you can integrate custom logic into your voice assistant and provide a richer experience for your users.

For additional help, refer to the official [Vapi documentation](https://docs.vapi.ai)
