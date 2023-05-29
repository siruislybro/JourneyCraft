// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';


const HomePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to JourneyCraft</h1>
        <p>Experience personalized travel itineraries for the post-pandemic era.</p>
        <Link href = "/plan">
          <button>Get Started</button>
        </Link>
        <Link href="/login">login</Link>
      </div>
      <br></br>
      <Link href = "/components/Chat">
          <button>Sirui</button>
      </Link>

    </Layout>
  );
};

export default HomePage;
