import { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import Layout from '@/components/layout';
import Image from 'next/image';
import ImageLogo from '../assets/LightningEagle.jpg';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User registration successful
      window.location.href="/";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={ImageLogo} alt={'Journey Craft'} width={80} height={80}/>
      </div>
      <h2 className='text-4xl text-center mb-5'>Register</h2>
      <form className='flex justify-center items-center flex-col'>
        <div className='my-2'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-black mx-2'
          />
        </div>
        <div className='my-2'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-black mx-2'
          />
        </div>
        <div>
          <button type="button" onClick={handleRegistration} className="border border-2 hover:border-white px-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200">
            Register
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
    </Layout>
  );
}

export default Register;
