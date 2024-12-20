'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk mengecek status login
  const checkLoginStatus = () => {
    try {
      const token = localStorage.getItem('sessionToken');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    }
  };

  // Effect untuk cek status awal dan setup event listeners
  useEffect(() => {
    // Cek status login saat komponen dimount
    checkLoginStatus();

    // Event listener untuk perubahan di localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sessionToken') {
        checkLoginStatus();
      }
    };

    // Event listener untuk login sukses
    const handleLoginSuccess = () => {
      checkLoginStatus();
    };

    // Setup event listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('loginSuccess', handleLoginSuccess);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('loginSuccess', handleLoginSuccess);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const buttonClasses = "font-bold px-4 py-2 rounded w-[80px] text-center";

  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-green-900 text-white z-50">
      <nav className="flex items-center justify-between p-5">
        <Link href="/" className="text-2xl font-bold">
          GerakPeduli
        </Link>

        <div className="flex items-center space-x-5">
          <ul className="flex space-x-3">
            <li><Link href="/" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Home</Link></li>
            <li><Link href="/datagathering" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Data Gathering</Link></li>
            <li><Link href="/monitoring" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Monitoring</Link></li>
          </ul>
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className={`${buttonClasses} bg-red-500 hover:bg-white hover:text-green-600`}
              >
                Logout
              </button>
            ) : (
              <Link 
                href="/login" 
                className={`${buttonClasses} bg-green-500 hover:bg-white hover:text-green-600 inline-block`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;