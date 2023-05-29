import { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import Layout from '@/components/layout';

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
      <h2>Registration</h2>
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
          <button type="button" onClick={handleRegistration} className="hover:border-2 hover:border-white px-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200">
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
