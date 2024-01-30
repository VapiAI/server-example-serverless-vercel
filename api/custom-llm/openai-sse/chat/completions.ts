import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { envConfig } from "../../../../config/env.config";

const openai = new OpenAI({ apiKey: envConfig.openai.apiKey });

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Not Found" });
  } 

  try {
    const { model, messages, max_tokens, temperature, stream, ...restParams } =
      req.body;

    const lastMessage = messages?.[messages.length - 1];
    const prompt = await openai.completions.create({
      model: model || "gpt-3.5-turbo",
      prompt: `
        Create a prompt which can act as a prompt templete where I put the original prompt and it can modify it according to my intentions said so far.
        ---------
        PROMPT: ${lastMessage.content}. 
        MODIFIED PROMPT: `
      })


      
    const modifiedMessage = [...messages.slice(0, messages.length - 1), {...lastMessage, content: prompt}]
    
    if (stream) {
      const completionStream = await openai.chat.completions.create({
        model: model || "gpt-3.5-turbo",
        ...restParams,
        messages:modifiedMessage,
        max_tokens: max_tokens || 150,
        temperature: temperature || 0.7,
        stream: true,
      } as OpenAI.Chat.ChatCompletionCreateParamsStreaming);
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      for await (const data of completionStream) {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
      }
      res.end();
    } else {
      const completion = await openai.chat.completions.create({
        model: model || "gpt-3.5-turbo",
        ...restParams,
        messages: modifiedMessage,
        max_tokens: max_tokens || 150,
        temperature: temperature || 0.7,
        stream: false,
      });
      return res.status(200).json(completion);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
