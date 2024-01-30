import { VercelRequest, VercelResponse } from "@vercel/node";
import functions from "../../functions";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      const { message } = req.body;

      const { type = "function-call", functionCall = {}, call } = message;
      if (type === "function-call") {
        if (Object.keys(functions).includes(functionCall?.name)) {
          const response = await functions[functionCall?.name](
            functionCall?.parameters
          );

          return res.status(201).json(response);
        }

        return res.status(201).json({ data: functionCall?.parameters });
      }

      return res.status(201).json({});
    }

    return res.status(404).json({ message: "Not Found" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
