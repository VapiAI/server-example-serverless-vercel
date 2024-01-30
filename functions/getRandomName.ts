import axios from "axios";

const nats = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];

interface NameParams {
  gender?: "male" | "female";
  nat?: (typeof nats)[number];
}

export const getRandomName = async (params: NameParams) => {
  let nat =
    params.nat && !nats.includes(params.nat.toUpperCase())
      ? nats[Math.floor(Math.random() * nats.length)]
      : params.nat ?? "";

  try {
    const results = await axios.get(`https://randomuser.me/api/`, {
      params: {
        ...params,
        nat,
      },
    });

    const name = results.data.results[0].name;
    return {
      result: name.first + " " + name.last,
    };
  } catch (err) {
    throw new Error("Error fetching random name");
  }
};
