import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../data/mockData.js';

function Dashboard() {
  return (
    <div className="w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]">
      <h1 className="mt-[20px] p-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">
        Dashboard
      </h1>
      <h2 className="p-10 text-3xl font-semibold text-black">
        Temperature and CO2 Level
      </h2>

      <div className="flex">
        <div className="basic-[70%] mt-[-20px]">
          <LineChart
            className="shadow-md rounded mt-[5px] p-10 border ml-10"
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
            <YAxis
              yAxisId="left"
              label={{
                value: 'Temperature (°C)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <YAxis
              yAxisId="right"
              label={{
                value: 'CO2 Level (ppm)',
                angle: -90,
                position: 'insideRight',
              }}
              orientation="right"
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              name="Temperature (°C)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="co2Level"
              stroke="#82ca9d"
              strokeWidth={3}
              name="CO2 Level (ppm)"
            />
          </LineChart>
        </div>
        <div className="basic-[30%]"></div>
      </div>
    </div>
  );
}

export default Dashboard;
