import { useState } from 'react';
import { auth } from '../firebase';
import Layout from '@/components/layout';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
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
          <button type="button" onClick={handleRegistration}>
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
