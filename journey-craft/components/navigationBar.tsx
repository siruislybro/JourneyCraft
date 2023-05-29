import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);
  
  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (savedIsLoggedIn) {
      setIsLoggedIn(savedIsLoggedIn === 'true');
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear the user session and update the logged-in state
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    window.location.href = '/'
  };
  
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
