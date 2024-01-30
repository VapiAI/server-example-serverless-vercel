import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { envConfig } from "../../config/env.config";

const openai = new OpenAI({ apiKey: envConfig.openai.apiKey });

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { model, messages, max_tokens, temperature, stream, ...restParams } =
      req.body;
    const response = {
      id: "chatcmpl-8mcLf78g0quztp4BMtwd3hEj58Uof",
      object: "chat.completion.chunk",
      created: Math.floor(Date.now() / 1000),
      model: "gpt-3.5-turbo-0613",
      system_fingerprint: null,
      choices: [
        {
          index: 0,
          delta: { content: messages?.[messages.length - 1]?.content ?? "" },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
    };

    res.status(201).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
