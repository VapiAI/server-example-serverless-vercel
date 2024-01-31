import { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../utils/cors.utils";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    setCors(res);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
};
