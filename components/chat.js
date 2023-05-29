// components/Chat.js

import React, { useState, useEffect } from 'react';
import { OpenAIAPI } from 'your-openai-api-library';

const Chat = ({ itinerary }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Initialize the chat conversation with a welcome message or any initial prompts
    setMessages([{ role: 'system', content: 'Welcome to JourneyCraft! How can I assist you?' }]);
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Add the user message to the chat conversation
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: userInput.trim() }]);
    setUserInput('');

    // Send the user message to the ChatGPT API for processing
    const response = await OpenAIAPI.sendMessage(userInput);
    // Extract the bot's response from the API response
    const botMessage = response.data.message;

    // Add the bot's response to the chat conversation
    setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: botMessage }]);
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
