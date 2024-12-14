'use client'

// pages/monitoring.tsx
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonitoringPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gempaBanten, setGempaBanten] = useState([
    { name: 'Jan', supply: 100, volunteers: 50, remaining: 20 },
    { name: 'Feb', supply: 150, volunteers: 75, remaining: 30 },
    { name: 'Mar', supply: 180, volunteers: 90, remaining: 40 },
    { name: 'Apr', supply: 200, volunteers: 100, remaining: 50 },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lumpur, setLumpur] = useState([
    { name: 'Jan', supply: 80, volunteers: 30, remaining: 10 },
    { name: 'Feb', supply: 100, volunteers: 40, remaining: 15 },
    { name: 'Mar', supply: 120, volunteers: 50, remaining: 20 },
    { name: 'Apr', supply: 150, volunteers: 60, remaining: 25 },
  ]);

  return (
    <div>
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Monitoring</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Gempa Bumi Banten</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={gempaBanten}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="supply" stroke="#8884d8" />
                <Line type="monotone" dataKey="volunteers" stroke="#82ca9d" />
                <Line type="monotone" dataKey="remaining" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Lumpur Lapindo Sidoarjo</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={lumpur}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="supply" stroke="#8884d8" />
                <Line type="monotone" dataKey="volunteers" stroke="#82ca9d" />
                <Line type="monotone" dataKey="remaining" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonitoringPage;