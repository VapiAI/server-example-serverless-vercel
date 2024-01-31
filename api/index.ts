import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    return res.status(200).json({ hello: "world" });
  }

  return res.status(404).send("Not found");
};
