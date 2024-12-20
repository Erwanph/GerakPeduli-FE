'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('https://gerak-peduli-be.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        // Simpan token
        localStorage.setItem('sessionToken', data.token);
        localStorage.setItem('user', JSON.stringify({
          name: data.name,
          email: data.email,
        }));
  
        // Pancarkan event loginSuccess
        const loginEvent = new Event('loginSuccess');
        window.dispatchEvent(loginEvent);
  
        // Tunggu sebentar sebelum redirect untuk memastikan event terproses
        setTimeout(() => {
          router.push('/');
        }, 100);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to the server');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="GerakPeduli" width={150} height={150} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-800">Sign In to GerakPeduli</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-green-800 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;