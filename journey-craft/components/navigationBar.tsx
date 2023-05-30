import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (savedIsLoggedIn) {
      setIsLoggedIn(savedIsLoggedIn === 'true');
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    // Perform any additional logout logic here, such as clearing user session or making API requests
    // Redirect the user to the desired page after logout
    window.location.href = '/';
  };

  return (
    <nav className="drop-shadow-md flex h-16 bg-gradient-to-l from-pink-400 to-emerald-500 via-indigo-400 px-2 py-[1vh] sm:px-4 fixed w-full z-20 top-0 left-0">
      <div className="container flex items-center justify-around mx-auto">
        <Link href="/" className="flex items-center justify-center">
          <span className="hover:text-2xl self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/profile" className="flex items-center justify-center">
              <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">Profile</span>
            </Link>
            <Link href="/generate" className="flex items-center justify-center">
              <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">Generate</span>
            </Link>
            <button className="flex items-center justify-center" onClick={handleLogout}>
              <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link href="/explore" className="flex items-center justify-center">
              <span className="hover:text-2xl self-center text-xl font-semibold whitespace-nowrap dark:text-white">Explore</span>
            </Link>
            <Link href="/login" className="flex items-center justify-center">
              <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">Login</span>
            </Link>
            <Link href="/register" className="flex items-center justify-center">
              <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">Register</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
