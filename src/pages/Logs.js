import React from "react";
import { data } from "../data/mockData.js";

function Logs() {
  return (
    <div className="w-[87%] ml-[13%]">
      <h1 className="mt-8 mb-4 px-10 text-2xl font-semibold text-center lg:text-4xl">Activities Logs</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg px-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase text-black bg-gray-500 bg-opacity-40 rounded-lg">
            <tr>
              <th scope="col" className="p-4">
                Date
              </th>
              <th scope="col" className="p-4">
                Time
              </th>
              <th scope="col" className="p-4">
                Temperature (°C)
              </th>
              <th scope="col" className="p-4">
                CO2 Level (ppm)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="bg-white border-b text-black">
                <td className="p-4">{entry.date}</td>
                <td className="p-4">{entry.time}</td>
                <td className="p-4 lg:px-6">{entry.temperature} °C</td>
                <td className="p-4 lg:px-6">{entry.co2Level} ppm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
