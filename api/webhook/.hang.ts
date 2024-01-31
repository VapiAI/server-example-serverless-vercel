import {
  HangMessageResponse,
  HangPayload,
  TranscriptMessageResponse,
  TranscriptPayload,
} from "../../types/vapi.types";

export const HangEventHandler = async (
  payload?: HangPayload
): Promise<HangMessageResponse> => {
  /**
   * Handle Business logic here.
   * Sent once the call is terminated by user.
   * You can update the database or have some followup actions or workflow triggered.
   */

  return {};
};
