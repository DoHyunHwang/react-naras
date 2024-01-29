import axios from "axios";

export async function fetchCountries() {
  try {
    const { data } = await axios.get("https://naras-api.vercel.app/all");

    return data;
  } catch (error) {
    return [];
  }
}

export async function fetchSearchResults(q) {
  try {
    const { data } = await axios.get(
      `https://naras-api.vercel.app/search?q=${q}`
    );

    return data;
  } catch (error) {
    return [];
  }
}

export async function fetchCountry(code) {
  try {
    const { data } = await axios.get(
      `https://naras-api.vercel.app/code/${code}`
    );

    return data;
  } catch (error) {
    return null;
  }
}
