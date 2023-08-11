import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from 'openai';

type ResponsiveData = {
  text: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponsiveData>
) {
  const prompt = req.body.prompt;
  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ text: 'Vui lòng gửi câu hỏi của bạn' });
  }

  try {
    const aiResult = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      temperature: 0.9,
      max_tokens: 2048,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    const response = aiResult.data.choices[0].text?.trim() || 'Xin lỗi, có một vấn đề!';
    res.status(200).json({ text: response });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error calling OpenAI API:', error);

    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ text: 'Đã xảy ra lỗi khi gọi API' });
  }
}
