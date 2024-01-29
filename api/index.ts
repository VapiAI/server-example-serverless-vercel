import { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../utils/cors.utils";

export default (req: VercelRequest, res: VercelResponse) => {
  setCors(res);
  return res.json({ message: "Hello World" });
};
