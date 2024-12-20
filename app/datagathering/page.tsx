'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DataGatheringPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fatalities: 0,
    volunteers: 0,
    weather: '',
    location: '',
    brokenFacilities: 0,
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gerak-peduli-be.vercel.app/disaster/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/monitoring');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to submit data');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to the server');
    }
  };

  return (
    <div>
      <main className="container mx-auto py-12 mt-20 pt-4">
        <h1 className="text-3xl font-bold mb-6">Data Gathering</h1>
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Your existing form fields */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            Submit Data
          </button>
        </form>
      </main>
    </div>
  );
};

export default DataGatheringPage;