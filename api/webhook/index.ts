import { VercelRequest, VercelResponse } from "@vercel/node"
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types"
import { functionCallHandler } from "./functionCall";





export default async (req: VercelRequest, res: VercelResponse) => {
  if(req.method = 'POST') {
    const payload = req.body.message as VapiPayload
    switch (payload.type) {
      case VapiWebhookEnum.FUNCTION_CALL:
        return await functionCallHandler(payload);
      case VapiWebhookEnum.STATUS_UPDATE:
        // return await service.statusUpdateHandler(payload);
      case VapiWebhookEnum.ASSISTANT_REQUEST:
        // return await service.assistantRequestHandler(payload);
      default:
        throw new Error(`Unhandled message type: ${payload?.type}`);
    }
  }

  return res.status(404).send('Not found')
}