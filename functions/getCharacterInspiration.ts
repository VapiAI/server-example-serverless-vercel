import { SimpleDirectoryReader, VectorStoreIndex } from "llamaindex";
import path from "path";

interface GetCharacterInspirationParams {
  inspiration: string;
}

export const getCharacterInspiration = async ({
  inspiration,
}: GetCharacterInspirationParams) => {
  const fallbackResponse = {
    result:
      "Sorry, I am dealing with a technical issue at the moment, perhaps because of heightened user traffic. Come back later and we can try this again. Apologies for that.",
  };
  if (inspiration) {
    try {
      const documents = await new SimpleDirectoryReader().loadData({
        directoryPath: path.join(__dirname, "../data"),
      });

      const index = await VectorStoreIndex.fromDocuments(documents);

      const queryEngine = index.asQueryEngine();
      const response = await queryEngine.query({ query: inspiration });

      return { result: response.response, forwardToClientEnabled: true };
    } catch (error) {
      console.log("error", error);
      return fallbackResponse;
    }
  } else {
    return fallbackResponse;
  }
};
