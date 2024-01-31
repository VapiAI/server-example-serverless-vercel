import {
  TranscriptMessageResponse,
  TranscriptPayload,
} from "../../types/vapi.types";

export const transcriptHandler = async (
  payload?: TranscriptPayload
): Promise<TranscriptMessageResponse> => {
  /**
   * Handle Business logic here.
   * Sent during a call whenever the transcript is available for certain chunk in the stream.
   * You can store the transcript in your database or have some other business logic.
   */

  return {};
};
