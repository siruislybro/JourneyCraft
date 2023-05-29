// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
import Image from 'next/image';
import ImageLogo from '../assets/JourneyCraftBoat.jpg';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <Image alt="Journey Craft Logo" width={500} height={500} src={ImageLogo}/>
        <h1 className='text-5xl'>Welcome to JourneyCraft</h1>
        <p className='text-xl'>Experience personalized travel itineraries for the post-pandemic era.</p>
        <Link className="text-lg" href = "/plan">
          <button className="border border-2 hover:border-white px-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200">Get Started</button>
        </Link>
        <Link className="border border-2 text-lg w-auto hover:border-white px-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200" href="/login">Login</Link>

      <br></br>
      <Link href = "/generate">
          <button>Sirui</button>
      </Link>
      </div>

    </Layout>
  );
};

export default HomePage;
