// pages/index.tsx

import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const username = localStorage.getItem('username');
    setUsername(username);
  }, []);

  return (
    <Layout>
      <div className='pl-2'>
        <h1 className='text-5xl'>Hi {username}!</h1>
        <p className='text-2xl mt-5'>Here are your recent searches:</p>
      </div>
    </Layout>
  );
};

export default ProfilePage;
