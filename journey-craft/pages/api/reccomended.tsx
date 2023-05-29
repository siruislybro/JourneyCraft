import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { destination, travel_duration, interests, vicinity } = req.body;

    const prompt = `You are a master at curating itineraries for tourists visiting "${destination}", I will be staying for "${travel_duration}". Here are some of my interests "${interests}". I will be living in this vicinity "${vicinity}".`;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        { prompt, max_tokens: 600 },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const itinerary = response.data.choices[0].text.trim();
      res.status(200).json({ recommendations: itinerary });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate recommendations' });
    }
  } else {
    res.status(405).json({ error: 'Invalid request method' });
  }
};

export default handler;
