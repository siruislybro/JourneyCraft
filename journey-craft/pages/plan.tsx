import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const ItineraryForm: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [vicinity, setVicinity] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        <input type="text" value={destination} onChange={(e: ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)} />
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
