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
        <form>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={handleLogin}>
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
