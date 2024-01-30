import { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandomName } from "../../functions/getRandomName";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { setCors } from "../../utils/cors.utils";
import { functionCallHandler } from "../webhook/functionCall";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      setCors(res);
      const payload = req.body.message as VapiPayload

      if (payload.type === VapiWebhookEnum.FUNCTION_CALL) {
        const result = functionCallHandler(payload, { getRandomName });

        return res.status(201).json(result);
      }

      // For the other types of messages, check ../webhook/index.ts
      return res.status(201).json({});
    }

    return res.status(404).json({ message: "Not Found" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
