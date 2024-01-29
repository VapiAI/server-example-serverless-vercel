import axios from "axios";
import { envConfig } from "../config/env.config";

export const getWeather = async (city: string): Promise<any> => {
  const url = `${envConfig.weather.baseUrl}/weather?q=${city}&appid=${envConfig.weather.apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
