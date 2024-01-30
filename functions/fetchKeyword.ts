import axios from "axios";

interface KeywordParams {
  keyword: string;
  topic?: string;
}

export const findKeywords = (opts: KeywordParams) => {
  return axios
    .get(`https://api.datamuse.com/words`, {
      params: {
        ml: opts.keyword,
        topics: opts.topic,
      },
    })
    .then(
      (response) =>
        response.data
          .map((item) => item.word)
          .slice(0, Math.min(response.data.length, 10)) ?? []
    );
};
