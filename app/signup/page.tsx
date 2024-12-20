'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Set initial role as empty string
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous error messages
    setSuccess(false); // Reset success state

    try {
      const response = await fetch('https://gerak-peduli-be.vercel.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          role: role, // Send the role in the request
        }),
      });

      if (response.ok) {
        // Successfully registered
        setSuccess(true);
        setName('');
        setEmail('');
        setPassword('');
        setRole(''); // Reset the role state to empty string
        console.log('Registration successful');
      } else {
        // Handle server error response
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error! Check again your form.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="GerakPeduli" width={150} height={150} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-800">Join GerakPeduli</h2>
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
            Registration successful! Please{' '}
            <Link href="/login" className="text-green-800 font-medium hover:underline">
              Sign In
            </Link> to your account.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="role" className="block font-medium mb-2">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select a Role</option> {/* Default empty option */}
              <option value="Relawan">Relawan</option>
              <option value="Tim Lapangan">Tim Lapangan</option>
              <option value="Tim Logistik">Tim Logistik</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-green-800 font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
