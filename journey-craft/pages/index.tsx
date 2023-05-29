// pages/index.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to JourneyCraft</h1>
      <p>Experience personalized travel itineraries for the post-pandemic era.</p>
      <button>Get Started</button>
      <Link href="/login">login</Link>
    </div>
  );
};

export default HomePage;