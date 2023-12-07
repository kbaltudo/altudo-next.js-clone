import axios from "axios";

const fetchTokenData = async () => {
  console.log(fetchTokenData);
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
    },
  };
  const url = `https://dev-drupal-headless-clone.pantheonsite.io/v1/status`;
  try {
    const response = await axios.get(url, config);
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error: any) {
    return error.message;
  }
};

export default fetchTokenData;
