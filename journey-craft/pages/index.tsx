// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome to JourneyCraft</h1>
      <p>Experience personalized travel itineraries for the post-pandemic era.</p>
      <button>Get Started</button>
      <Link href="/login">login</Link>
    </div>
  );
};

export default HomePage;
