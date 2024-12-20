'use client'
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { 
  FaUserFriends, 
  FaExclamationTriangle, 
  FaBuilding, 
  FaAmbulance, 
  FaMapMarkerAlt
} from 'react-icons/fa';

const MonitoringDashboard = () => {
  const [disasterData, setDisasterData] = useState<any>({});
  const [selectedDisaster, setSelectedDisaster] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gerak-peduli-be.vercel.app/disaster/all');
        if (response.ok) {
          const data = await response.json();
          setDisasterData(data);
          // Set the first disaster as selected by default
          if (Object.keys(data).length > 0) {
            setSelectedDisaster(Object.keys(data)[0]);
          }
        } else {
          setError('Failed to fetch disaster data');
        }
      } catch (err) {
        setError('Failed to connect to the server');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center mt-10">{error}</div>;
  }

  if (!selectedDisaster || Object.keys(disasterData).length === 0) {
    return <div className="text-center mt-10">No disaster data available</div>;
  }

  const currentDisaster = disasterData[selectedDisaster];

  return (
    <div className="container mx-auto py-12 mt-20 pt-4">
      <h1 className="text-3xl font-bold mb-6">Disaster Monitoring Dashboard</h1>
      
      {/* Disaster Selection Dropdown */}
      <div className="mb-6">
        <select
          value={selectedDisaster}
          onChange={(e) => setSelectedDisaster(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(disasterData).map((disaster) => (
            <option key={disaster} value={disaster}>
              {disaster}
            </option>
          ))}
        </select>
      </div>

      {/* Rest of your existing dashboard components */}
    </div>
  );
};

export default MonitoringDashboard;