import { createClient } from "@supabase/supabase-js";
import { envConfig } from "../../config/env.config";
import {
  EndOfCallReportMessageResponse,
  EndOfCallReportPayload,
} from "../../types/vapi.types";

const supabase = createClient(
  envConfig.supabase.url,
  envConfig.supabase.anonKey
);

export const endOfCallReportHandler = async (
  payload?: EndOfCallReportPayload
): Promise<void> => {
  const { data, error } = await supabase
    .from("conversation")
    .insert([
      {
        status: "ended",
        summary: payload.summary,
        transcript: payload.transcript,
        recording: payload.recordingUrl,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting data", error);
  }

  console.log("Data inserted", data);
};
