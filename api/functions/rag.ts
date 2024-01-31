import { VercelRequest, VercelResponse } from "@vercel/node";
import { getCharacterInspiration } from "../../functions/getCharacterInspiration";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { setCors } from "../../utils/cors.utils";

/**
 * Handles POST requests from Vapi to perform function calls.
 * Specifically, it processes the `getCharacterInspiration` function call, which fetches character inspiration using a custom algorithm.
 * If the function call is valid and the name matches 'getCharacterInspiration', it executes the function and returns the result.
 * If the function name is not found, it logs an error message and throws an exception indicating the function is not found.
 * This handler is an example of how to implement function calls in Vapi for the 'getCharacterInspiration' functionality.
 */
export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    setCors(res);
    const payload = req.body.message as VapiPayload;

    if (payload.type === VapiWebhookEnum.FUNCTION_CALL) {
      const { functionCall } = payload;

      if (!functionCall) {
        throw new Error("Invalid Request.");
      }

      const { name, parameters } = functionCall;
      if (name === "getCharacterInspiration") {
        const result = await getCharacterInspiration(parameters as any);
        return res.status(201).json(result);
      } else {
        console.log(`Function ${name} not found`);
        throw new Error(`Function ${name} not found`);
      }
    }
    return res.status(201).json({});
  }

  setCors(res);
  return res.status(404).send("Not found");
};
