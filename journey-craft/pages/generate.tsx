// pages/generate.js

import React, { useState } from 'react';
import Chat from '../components/Chat';
import Layout from '@/components/layout';

const GeneratePage = () => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [interest, setInterest] = useState('');
  const [generatedItinerary, setGeneratedItinerary] = useState(null);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Perform logic for generating the itinerary based on location, budget, and duration
    // You can make API calls, calculations, or any other necessary operations here
    // Once the itinerary is generated, set it to the state
    const generatedItinerary = await generateItinerary(location, budget, duration, interest);
    setGeneratedItinerary(generatedItinerary);
  };

  const generateItinerary = async (location: string, budget: string, duration: string, interest: string) => {
    // Call your backend API or service to generate the itinerary
    // You can pass the user inputs (location, budget, duration) to the API
    const response = await fetch('/api/itinerary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location, budget, duration, interest }),
    });

    if (response.ok) {
      const generatedItinerary = await response.json();
      return generatedItinerary;
    } else {
      throw new Error('Failed to generate itinerary');
    }
  };

  return (
    <Layout>
      <div>
        <h1>Generate Itinerary</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label>
            Budget:
            <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
          </label>
          <label>
            Duration:
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </label>
          <label>
            Duration:
            <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
          </label>
          <button type="submit">Generate</button>
        </form>

        {generatedItinerary && <Chat itinerary={generatedItinerary} />}
      </div>
    </Layout>
  );
};

export default GeneratePage;
