'use client'
import React, { useState } from 'react';
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

// Mock data for different disasters
const disasterData = {
  'Gempa Banten': {
    overview: {
      fatalities: 87,
      volunteers: 150,
      weather: 'Partly Cloudy',
      location: 'Banten Province, Indonesia',
      brokenFacilities: 230,
      latitude: -6.1161,
      longitude: 106.0425
    },
    timeSeriesData: [
      { time: '06:00', fatalities: 87, volunteers: 50, brokenFacilities: 230 },
      { time: '09:00', fatalities: 65, volunteers: 80, brokenFacilities: 180 },
      { time: '12:00', fatalities: 45, volunteers: 120, brokenFacilities: 120 },
      { time: '15:00', fatalities: 20, volunteers: 150, brokenFacilities: 50 },
    ]
  },
  'Lumpur Lapindo': {
    overview: {
      fatalities: 53,
      volunteers: 120,
      weather: 'Cloudy',
      location: 'Sidoarjo, East Java, Indonesia',
      brokenFacilities: 180,
      latitude: -7.4580,
      longitude: 112.7097
    },
    timeSeriesData: [
      { time: '06:00', fatalities: 53, volunteers: 40, brokenFacilities: 180 },
      { time: '09:00', fatalities: 42, volunteers: 70, brokenFacilities: 140 },
      { time: '12:00', fatalities: 30, volunteers: 100, brokenFacilities: 90 },
      { time: '15:00', fatalities: 15, volunteers: 120, brokenFacilities: 40 },
    ]
  }
};

const MonitoringDashboard = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('Gempa Banten');
  
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

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-md shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Fatalities</h3>
            <FaExclamationTriangle className="h-6 w-6 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{currentDisaster.overview.fatalities}</div>
        </div>
        <div className="p-4 bg-white rounded-md shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Volunteers Standby</h3>
            <FaUserFriends className="h-6 w-6 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{currentDisaster.overview.volunteers}</div>
        </div>
        <div className="p-4 bg-white rounded-md shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Broken Facilities</h3>
            <FaBuilding className="h-6 w-6 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{currentDisaster.overview.brokenFacilities}</div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white rounded-md shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Weather Conditions</h3>
            <FaAmbulance className="h-6 w-6 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{currentDisaster.overview.weather}</div>
        </div>
        <div className="p-4 bg-white rounded-md shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Location</h3>
            <FaMapMarkerAlt className="h-6 w-6 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{currentDisaster.overview.location}</div>
        </div>
      </div>

      {/* Time Series Charts */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Disaster Progression</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Fatalities Over Time</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={currentDisaster.timeSeriesData}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="fatalities" 
                  stroke="#8884d8" 
                  name="Fatalities"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Volunteers and Broken Facilities</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={currentDisaster.timeSeriesData}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="volunteers" 
                  fill="#8884d8" 
                  name="Volunteers"
                />
                <Bar 
                  dataKey="brokenFacilities" 
                  fill="#82ca9d" 
                  name="Broken Facilities"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;