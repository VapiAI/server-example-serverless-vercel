import {
  SpeechUpdateMessageResponse,
  SpeechUpdatePayload,
} from "../../types/vapi.types";

export const speechUpdateHandler = async (
  payload?: SpeechUpdatePayload
): Promise<SpeechUpdateMessageResponse> => {
  /**
   * Handle Business logic here.
   * Sent during a speech status update during the call. It also lets u know who is speaking.
   * You can enable this by passing "speech-update" in the serverMessages array while creating the assistant.
   */

  return {};
};
