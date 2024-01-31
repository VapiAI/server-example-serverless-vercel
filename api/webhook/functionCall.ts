import defaultFunctions from "../../functions";
import { FunctionCallPayload } from "../../types/vapi.types";

export const functionCallHandler = async (
  payload: FunctionCallPayload,
  functions: Record<string, Function> = defaultFunctions
) => {
  const { functionCall } = payload;

  if (!functionCall) {
    throw new Error("Invalid Request.");
  }

  const { name, parameters } = functionCall;
  if (Object.prototype.hasOwnProperty.call(functions, name)) {
    return await functions[name](parameters);
  } else {
    console.log(`Function ${name} not found`);
    throw new Error(`Function ${name} not found`);
  }
};
