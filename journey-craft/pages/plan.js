import React, { useState } from 'react';
import axios from 'axios';

const ItineraryForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interests, setInterests] = useState('');
  const [vicinity, setVicinity] = useState('');
  const [recommendations, setRecommendations] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/recommend', {
        destination,
        startDate,
        endDate,
        interests,
        vicinity,
      });

      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for destination, startDate, endDate, interests, vicinity */}
      <div>
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
      {/* Repeat similar divs for other fields */}
      <button type="submit">Generate Plan</button>

      {recommendations && (
        <div>
          <h2>Recommended Activities:</h2>
          <p>{recommendations}</p>
        </div>
      )}
    </form>
  );
};

export default ItineraryForm;