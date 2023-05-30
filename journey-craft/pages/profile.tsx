// pages/index.tsx

import React from 'react';
import Layout from '@/components/layout';

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to JourneyCraft PROFILE</h1>
        <p>Experience personalized travel itineraries for the post-pandemic era.</p>
        <button>Get Started</button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
