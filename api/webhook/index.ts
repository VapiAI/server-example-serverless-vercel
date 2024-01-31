import { VercelRequest, VercelResponse } from "@vercel/node";
import { VapiPayload, VapiWebhookEnum } from "../../types/vapi.types";
import { assistantRequestHandler } from "./assistantRequest";
import { endOfCallReportHandler } from "./endOfCallReport";
import { functionCallHandler } from "./functionCall";
import { speechUpdateHandler } from "./speechUpdateHandler";
import { statusUpdateHandler } from "./statusUpdate";
import { transcriptHandler } from "./transcript";
import { HangEventHandler } from "./hang";
import { setCors } from "../../utils/cors.utils";

export default async (req: VercelRequest, res: VercelResponse) => {
  if ((req.method = "POST")) {
    setCors(res);
    try {
      const payload = req.body.message as VapiPayload;
      switch (payload.type) {
        case VapiWebhookEnum.FUNCTION_CALL:
          return await functionCallHandler(payload);
        case VapiWebhookEnum.STATUS_UPDATE:
          return await statusUpdateHandler(payload);
        case VapiWebhookEnum.ASSISTANT_REQUEST:
          return await assistantRequestHandler(payload);
        case VapiWebhookEnum.END_OF_CALL_REPORT:
          return await endOfCallReportHandler(payload);
        case VapiWebhookEnum.SPEECH_UPDATE:
          return await speechUpdateHandler(payload);
        case VapiWebhookEnum.TRANSCRIPT:
          return await transcriptHandler(payload);
        case VapiWebhookEnum.HANG:
          return await HangEventHandler(payload);
        default:
          throw new Error(`Unhandled message type`);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  return res.status(404).send("Not found");
};
