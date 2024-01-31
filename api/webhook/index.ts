import { VercelRequest, VercelResponse } from "@vercel/node";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { functionCallHandler } from "./functionCall";
import { endOfCallReportHandler } from "./endOfCallReport";

export default async (req: VercelRequest, res: VercelResponse) => {
  if ((req.method = "POST")) {
    const payload = req.body.message as VapiPayload;
    switch (payload.type) {
      case VapiWebhookEnum.FUNCTION_CALL:
        return await functionCallHandler(payload);
      case VapiWebhookEnum.STATUS_UPDATE:
        // return await service.statusUpdateHandler(payload);
        break;
      case VapiWebhookEnum.ASSISTANT_REQUEST:
        // return await service.assistantRequestHandler(payload);
        break;
      case VapiWebhookEnum.END_OF_CALL_REPORT:
        return await endOfCallReportHandler(payload);
      default:
        throw new Error(`Unhandled message type: ${payload?.type}`)
    }
  }

  return res.status(404).send("Not found");
};
