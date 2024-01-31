/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChatCompletionCreateParams,
  ChatCompletionMessageParam,
  FunctionDefinition,
} from "openai/resources";

export interface Model {
  model: string;
  systemPrompt?: string;
  temperature?: number;
  functions?: {
    name: string;
    async?: boolean;
    description?: string;
    parameters?: FunctionDefinition | any;
  }[];
  provider: string;
  url?: string;
}

const PLAY_HT_EMOTIONS = [
  "female_happy",
  "female_sad",
  "female_angry",
  "female_fearful",
  "female_disgust",
  "female_surprised",
] as const;
type PlayHTEmotion = (typeof PLAY_HT_EMOTIONS)[number];

interface Voice {
  provider: string;
  voiceId: string;
  speed?: number;
  stability?: number;
  similarityBoost?: number;
  style?: number;
  useSpeakerBoost?: boolean;
  temperature?: number;
  emotion?: PlayHTEmotion;
  voiceGuidance?: number;
  styleGuidance?: number;
  textGuidance?: number;
}

export interface Assistant {
  // Properties from AssistantUserEditable
  name?: string;
  transcriber?: {
    provider: "deepgram";
    model?: string;
    keywords?: string[];
  };
  model?: Model;
  voice?: Voice;
  language?: string;
  forwardingPhoneNumber?: string;
  firstMessage?: string;
  voicemailMessage?: string;
  endCallMessage?: string;
  endCallPhrases?: string[];
  interruptionsEnabled?: boolean;
  recordingEnabled?: boolean;
  endCallFunctionEnabled?: boolean;
  dialKeypadFunctionEnabled?: boolean;
  fillersEnabled?: boolean;
  clientMessages?: any[];
  serverMessages?: any[];
  silenceTimeoutSeconds?: number;
  responseDelaySeconds?: number;
  liveTranscriptsEnabled?: boolean;
  keywords?: string[];
  parentId?: string;
  serverUrl?: string;
  serverUrlSecret?: string;

  // Properties from AssistantPrivileged
  id?: string;
  orgId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const VAPI_CALL_STATUSES = [
  "queued",
  "ringing",
  "in-progress",
  "forwarding",
  "ended",
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export enum VapiWebhookEnum {
  ASSISTANT_REQUEST = "assistant-request",
  FUNCTION_CALL = "function-call",
  STATUS_UPDATE = "status-update",
  END_OF_CALL_REPORT = "end-of-call-report",
  HANG = "hang",
  SPEECH_UPDATE = "speech-update",
  TRANSCRIPT = "transcript",
}

export interface ConversationMessage {
  role: "user" | "system" | "bot" | "function_call" | "function_result";
  message?: string;
  name?: string;
  args?: string;
  result?: string;
  time: number;
  endTime?: number;
  secondsFromStart: number;
}

interface BaseVapiPayload {
  call: VapiCall;
}

export interface AssistantRequestPayload extends BaseVapiPayload {
  type: VapiWebhookEnum.ASSISTANT_REQUEST;
}

export interface StatusUpdatePayload extends BaseVapiPayload {
  type: VapiWebhookEnum.STATUS_UPDATE;
  status: VapiCallStatus;
  messages?: ChatCompletionMessageParam[];
}

export interface FunctionCallPayload extends BaseVapiPayload {
  type: VapiWebhookEnum.FUNCTION_CALL;
  functionCall: ChatCompletionCreateParams.Function;
}

export interface EndOfCallReportPayload extends BaseVapiPayload {
  type: VapiWebhookEnum.END_OF_CALL_REPORT;
  endedReason: string;
  transcript: string;
  messages: ConversationMessage[];
  summary: string;
  recordingUrl?: string;
}

export interface HangPayload extends BaseVapiPayload {
  type: VapiWebhookEnum.HANG;
}

export interface SpeechUpdatePayload extends BaseVapiPayload {
  type: VapiWebhookEnum.SPEECH_UPDATE;
  status: "started" | "stopped";
  role: "assistant" | "user";
}

export interface TranscriptPayload {
  type: VapiWebhookEnum.TRANSCRIPT;
  role: "assistant" | "user";
  transcriptType: "partial" | "final";
  transcript: string;
}

export interface VapiCall {}
export type VapiPayload =
  | AssistantRequestPayload
  | StatusUpdatePayload
  | FunctionCallPayload
  | EndOfCallReportPayload
  | SpeechUpdatePayload
  | TranscriptPayload
  | HangPayload;

export type FunctionCallMessageResponse =
  | {
      result: string;
    }
  | any;

export interface AssistantRequestMessageResponse {
  assistant?: Assistant;
  error?: string;
}

export interface StatusUpdateMessageResponse {}
export interface SpeechUpdateMessageResponse {}
export interface TranscriptMessageResponse {}
export interface HangMessageResponse {}
export interface EndOfCallReportMessageResponse {}

export type VapiResponse =
  | AssistantRequestMessageResponse
  | FunctionCallMessageResponse
  | EndOfCallReportMessageResponse
  | HangMessageResponse
  | StatusUpdateMessageResponse
  | SpeechUpdateMessageResponse
  | TranscriptMessageResponse;
