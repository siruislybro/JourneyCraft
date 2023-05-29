// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
import Image from 'next/image';
import ImageLogo from '../assets/JourneyCraftBoat.jpg';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <Image alt="Journey Craft Logo" width={500} height={500} src={ImageLogo}/>
        <h1>Welcome to JourneyCraft</h1>
        <p>Experience personalized travel itineraries for the post-pandemic era.</p>
        <Link href = "/plan">
          <button>Get Started</button>
        </Link>
        <Link href="/login">login</Link>
      </div>
      <br></br>
      <Link href = "/generate">
          <button>Sirui</button>
      </Link>

    </Layout>
  );
};

export default HomePage;
