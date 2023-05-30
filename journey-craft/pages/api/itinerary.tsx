import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';

interface ItineraryProps {
  location: string;
  duration: string;
  interests: string;
  vicinity: string;
  apiKey: string;
}

const Itinerary: React.FC<ItineraryProps> = ({ location, duration, interests, vicinity, apiKey }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    setMessages([
      `You are a master at curating itineraries for tourists visiting "${location}".`,
      `Here is the duration of stay: "${duration}".`,
      `Here are some of my interests: "${interests}".`,
      `I will be living in this vicinity: "${vicinity}".`,
    ]);
  }, [location, duration, interests, vicinity]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    setMessages((prevMessages) => [...prevMessages, `User: ${userInput.trim()}`]);
    setUserInput('');

    try {
      const prompt = messages.join('\n');
      const requestPayload: CreateCompletionRequest = {
        model: 'davinci',
        prompt: prompt,
        max_tokens: 50,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      };

      const response = await openai.createCompletion(requestPayload);

      const botMessage = response.data.choices[0].text;

      setMessages((prevMessages) => [...prevMessages, `Bot: ${botMessage}`]);
    } catch (error) {
      console.error('Error in OpenAI API request:', error);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <form onSubmit={handleSendMessage}>
        <input type="text" value={userInput} onChange={handleUserInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Itinerary;
