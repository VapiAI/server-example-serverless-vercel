import axios from "axios";
import { envConfig } from "../config/env.config";

interface getWeatherParams {
  city: string;
}

export const getWeather = async ({ city }: getWeatherParams): Promise<any> => {
  const fallbackResponse = {
    result:
      "Could you please tell me the name of your city again? I wasn't able to retrieve the weather data previously. I'll use this information to provide you with the latest weather updates",
  };
  if (!city) {
    return fallbackResponse;
  }
  const url = `${envConfig.weather.baseUrl}/weather?q=${city}&appid=${envConfig.weather.apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    const weather = response.data.weather[0];
    return { result: weather.description };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return fallbackResponse;
  }
};
