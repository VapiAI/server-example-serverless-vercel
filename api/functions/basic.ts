import { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandomName } from "../../functions/getRandomName";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { setCors } from "../../utils/cors.utils";

/**
 * Handles POST requests from Vapi to perform function calls.
 * Specifically, it processes the `getRandomName` function call, which fetches a random name using a public API.
 * If the function call is valid and the name matches 'getRandomName', it executes the function and returns the result.
 * If the function name is not found, it logs an error message and throws an exception indicating the function is not found.
 * This handler is a basic example of how to implement function calls in Vapi without referring to other webhook handlers.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      setCors(res);
      const payload = req.body.message as VapiPayload;

      if (payload.type === VapiWebhookEnum.FUNCTION_CALL) {
        const { functionCall } = payload;

        if (!functionCall) {
          throw new Error("Invalid Request.");
        }

        const { name, parameters } = functionCall;
        console.log('functionCall', functionCall)
        if (name === "getRandomName") {
          const result = await getRandomName(parameters);
          return res.status(201).json(result);
        } else {
          console.log(`Function ${name} not found`);
          throw new Error(`Function ${name} not found`);
        }
      }

      return res.status(201).json({});
    }

    return res.status(404).json({ message: "Not Found" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
