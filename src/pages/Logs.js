import React from 'react';
import { data } from '../data/mockData.js';

function Logs() {
  /* w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[13%] */

  return (
    <div className="w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]">
      <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">
        Activities logs{' '}
      </h1>
      <h3 class="text-3xl font-bold dark:text-white ml-10">Measurements</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-black bg-gray-500 bg-opacity-40 rounded-lg">
            <tr>
              <th scope="col" className="p-4">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Temperature
              </th>
              <th scope="col" className="px-6 py-3">
                CO2 Level
              </th>
              <th scope="col" className="px-6 py-3">
                Temperature (°C)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="bg-white border-b text-black">
                <td className="p-4">{new Date().toLocaleDateString()}</td>
                <td className="p-4">{new Date().toLocaleTimeString()}</td>
                <td className="px-6 py-4">{entry.temperature} °C</td>
                <td className="px-6 py-4">{entry.co2Level} ppm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 class="text-3xl font-bold dark:text-white ml-10">Control logs </h3>
    </div>
  );
}

export default Logs;
