import React from "react";
import { data } from "../data/mockData.js";

function Logs() {
  return (
    <div className="w-[87%] border ml-[13%]">
     <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">Activities logs </h1>
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
              <td className="p-4">{entry.date}</td>
              <td className="p-4">{entry.time}</td>
              <td className="px-6 py-4">{entry.temperature} °C</td>
              <td className="px-6 py-4">{entry.co2Level} ppm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Logs;
