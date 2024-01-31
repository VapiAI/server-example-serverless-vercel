import {
  AssistantRequestMessageResponse,
  AssistantRequestPayload,
} from "../../types/vapi.types";

export const assistantRequestHandler = async (
  payload?: AssistantRequestPayload
): Promise<AssistantRequestMessageResponse> => {
  // const assistant = payload.call ? createPaulaAssistant() : null;
  // if (assistant) return { assistant };

  throw new Error(`Invalid call details provided.`);
};
