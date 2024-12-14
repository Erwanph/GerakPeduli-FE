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
    facilities: 0,
    latitude: 0,
    longitude: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your data submission logic here
    console.log('Form data:', formData);
    router.push('/monitoring');
  };

  return (
    <div>
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Data Gathering</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fatalities" className="block font-medium mb-2">
              Number of Fatalities
            </label>
            <input
              type="number"
              id="fatalities"
              name="fatalities"
              value={formData.fatalities}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="volunteers" className="block font-medium mb-2">
              Number of Volunteers Needed
            </label>
            <input
              type="number"
              id="volunteers"
              name="volunteers"
              value={formData.volunteers}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="weather" className="block font-medium mb-2">
              Weather Conditions
            </label>
            <input
              type="text"
              id="weather"
              name="weather"
              value={formData.weather}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location Description
            </label>
            <textarea
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="facilities" className="block font-medium mb-2">
              Number of Broken Facilities
            </label>
            <input
              type="number"
              id="facilities"
              name="facilities"
              value={formData.facilities}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="latitude" className="block font-medium mb-2">
              Latitude
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="longitude" className="block font-medium mb-2">
              Longitude
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            Submit Data
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Location on Map</h2>
        </div>
      </main>
    </div>
  );
};

export default DataGatheringPage;