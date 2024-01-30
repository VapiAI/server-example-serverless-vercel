import { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../../utils/cors.utils";
import { getWeather } from "../../functions/weather";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    const { city } = req.query as { city: string };
    setCors(res);
    return res.status(200).json({ weather: await getWeather({ city }) });
  }

  setCors(res);
  return res.status(404).send("Not found");
};
