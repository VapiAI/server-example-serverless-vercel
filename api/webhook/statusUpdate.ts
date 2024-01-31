import {
  StatusUpdateMessageResponse,
  StatusUpdatePayload,
} from "../../types/vapi.types";

export const statusUpdateHandler = async (
  payload?: StatusUpdatePayload
): Promise<StatusUpdateMessageResponse> => {
  /**
   * Handle Business logic here.
   * Sent during a call whenever the status of the call has changed.
   * Possible statuses are: "queued","ringing","in-progress","forwarding","ended".
   * You can have certain logic or handlers based on the call status.
   * You can also store the information in your database. For example whenever the call gets forwarded.
   */

  return {};
};
