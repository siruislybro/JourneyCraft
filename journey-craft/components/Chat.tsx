import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';

const configuration = new Configuration({
  organization: 'ORG_ID',
  apiKey: 'OPENAI_API_KEY',
});

const openai = new OpenAIApi(configuration);

interface Message {
  role: string;
  content: string;
}

interface ChatProps {
  itinerary: any; // Replace 'any' with the appropriate type for the itinerary
}

const Chat: React.FC<ChatProps> = ({ itinerary }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Initialize the chat conversation with a welcome message or any initial prompts
    setMessages([{ role: 'system', content: 'Welcome to JourneyCraft! How can I assist you?' }]);
  }, []);

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Add the user message to the chat conversation
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: userInput.trim() }]);
    setUserInput('');

    try {
      // Send the user message to the OpenAI API for processing
      const requestPayload: CreateCompletionRequest = {
        model: 'davinci',
        prompt: messages.map((message) => `${message.role}: ${message.content}\n`).join(''),
        max_tokens: 50,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      };

      const response = await openai.createCompletion(requestPayload);

      // Extract the bot's response from the API response
      const botMessage = response.data.choices[0].text;

      // Add the bot's response to the chat conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'bot', content: botMessage || 'No response from the bot' },
      ]);
    } catch (error) {
      // Handle any errors from the OpenAI API
      console.error('Error in OpenAI API request:', error);
    }
  };

  return (
    <div>
      {/* Render the chat messages */}
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.role === 'bot' ? 'Bot: ' : 'You: '}</span>
            <span>{message.content}</span>
          </div>
        ))}
      </div>

      {/* Render the user input form */}
      <form onSubmit={handleSendMessage}>
        <input type="text" value={userInput} onChange={handleUserInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
