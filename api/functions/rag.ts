import { VercelRequest, VercelResponse } from "@vercel/node";
import { getCharacterInspiration } from "../../functions/getCharacterInspiration";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { setCors } from "../../utils/cors.utils";
import { functionCallHandler } from "../webhook/functionCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {

    setCors(res);
    const payload = req.body.message as VapiPayload

    if (payload.type === VapiWebhookEnum.FUNCTION_CALL) {
      const result = functionCallHandler(payload, { getCharacterInspiration });

      return res.status(201).json(result);
    }
    return res.status(201).json({});
  }

  setCors(res);
  return res.status(404).send("Not found");
};
