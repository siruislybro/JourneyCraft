import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import Layout from '@/components/layout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User successfully logged in
      window.location.href="/plan";
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div>
        <h2>Login</h2>
        <form className='flex flex-col justify-center items-center'>
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
            <button type="button" onClick={handleLogin} className="hover:border-2 hover:border-white px-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200">
              Login
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </Layout>
  );
}

export default Login;
