'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="GerakPeduli" width={150} height={150} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-800">Sign In to GerakPeduli</h2>
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