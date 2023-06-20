import type { NextApiRequest, NextApiResponse } from "next";
import {
  type ChatCompletionRequestMessage,
  type ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import { env } from "~/env.mjs";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Business = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  // const { prompt } = req.body as { prompt: string };

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "you are a good chat bot" },
        { role: "user", content: "Hello world" },
      ],
    });
    console.log(response);

    return res.status(200).json({
      response: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {
        message: error,
      },
    });
  }
};

export default Business;
