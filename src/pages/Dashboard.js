import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    time: '8:00 AM',
    temperature: 22,
    co2Level: 400,
  },
  {
    time: '9:00 AM',
    temperature: 22.5,
    co2Level: 410,
  },
  {
    time: '10:00 AM',
    temperature: 15,
    co2Level: 300,
  },
  {
    time: '11:00 AM',
    temperature: 23.5,
    co2Level: 430,
  },
  {
    time: '12:00 PM',
    temperature: 24,
    co2Level: 435,
  },
  {
    time: '1:00 PM',
    temperature: 10,
    co2Level: 200,
  },
  {
    time: '2:00 PM',
    temperature: 23,
    co2Level: 400,
  },
];

function Dashboard() {
  return (
    <div className="w-[87%] border ml-[13%]">
      <h1 className="mt-[100px] mb-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">Dashboard</h1>
      <h2 className="mt-[50px] mb-4 text-3xl font-semibold text-gray-900">Temperature and CO2 Level</h2>
     
      <div className='flex'>
        <div className='basic-[70%]'>
        <LineChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" label={{ value: 'CO2 Level (ppm)', angle: -90, position: 'insideRight' }} orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} name="Temperature (°C)" />
          <Line yAxisId="right" type="monotone" dataKey="co2Level" stroke="#82ca9d" name="CO2 Level (ppm)" />
        </LineChart>
        </div>
        <div className='basic-[30%]'>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
