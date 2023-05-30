import Layout from '@/components/layout';

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout>
    <div>
      <h1>Welcome to JourneyCraft</h1>
      <p>Experience personalized travel itineraries for the post-pandemic era.</p>
      <button>Get Started</button>
    </div>
    </Layout>
  );
};

export default HomePage;
