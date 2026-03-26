import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-5-mini",
      input: `${message}`,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      options,
    );
    const data = await response.json();
    console.log(data.usage);
    return data.output[1].content[0].text;
  } catch (err) {
    return err;
  }
};

export default getOpenAIAPIResponse;
