import { ChatCompletionMessage, ChatCompletionSystemMessageParam } from "openai/resources";
import {
  AssistantRequestMessageResponse,
  AssistantRequestPayload,
} from "../../types/vapi.types";

export const assistantRequestHandler = async (
  payload?: AssistantRequestPayload
): Promise<AssistantRequestMessageResponse> => {
  /**!SECTION
   * Handle Business logic here.
   * You can fetch your database to see if there is an existing assistant associated with this call. If yes, return the assistant.
   * You can also fetch some params from your database to create the assistant and return it.
   * You can have various predefined static assistant here and return them based on the call details.
   */

  const systemMessage: ChatCompletionSystemMessageParam = {
    role: "system",
    content:
      "You're Paula, an AI assistant who can help the user decide what do he/she wants to watch on Broadway. User can ask you to suggest shows and book tickets. You can get the list of available shows from broadway and show them to the user, and then you can help user decide which ones to choose and which broadway theatre they can visit. After this confirm the details and book the tickets. ",
  }

  const assistant = payload.call
    ? {
        name: "Paula",
        model: {
          provider: "openai",
          model: "gpt-3.5-turbo",
          temperature: 0.7,

          messages: [systemMessage],
          functions: [
            {
              name: "sendEmail",
              description:
                "Send email to the given email address and with the given content.",
              parameters: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Email to which we want to send the content.",
                  },
                  content: {
                    type: "string",
                    description: "Actual Content of the email to be sent.",
                  },
                },
                required: ["email"],
              },
            },
          ],
        },
        voice: {
          provider: "11labs",
          voiceId: "paula",
        },
        firstMessage: "Hi, I'm Paula, your personal email assistant.",
      }
    : null;
  if (assistant) return { assistant };

  throw new Error(`Invalid call details provided.`);
};
