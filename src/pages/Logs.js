import React from 'react';
import { data } from '../data/mockData.js';
import { useState, useEffect } from 'react';
import { getRequest } from '../utils/api.js';

function Logs() {
  /* w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[13%] */

  const [measurements, setMeasurements] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchMeasures = async () => {
      try {
        const measurementsData = await getRequest('measurements');
        setMeasurements(measurementsData);
        console.log(measurementsData);
      } catch (e) {
        console.log('error fetching measurements', e);
      }
    };
    const fetchLogs = async () => {
      try {
        const logsData = await getRequest('logs');
        setLogs(logsData);
        console.log(logsData);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchMeasures();
    fetchLogs();
  }, []);

  return (
    <div className="w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]">
      <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">
        Activities logs{' '}
      </h1>
      <h3 class="text-3xl font-bold dark:text-white ml-10">
        Indendørs målinger
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-black bg-gray-200 bg-opacity-40 rounded-lg">
            <tr>
              <th scope="col" className="p-4">
                Id
              </th>
              <th scope="col" className="p-4">
                Indendørs temperatur (°C)
              </th>

              <th scope="col" className="px-6 py-3">
                Måling foretaget
              </th>
            </tr>
          </thead>
          <tbody>
            {measurements
              .filter(
                (entry) => entry.measurement_type === 'INDOOR_TEMPERATURE'
              )
              .map((entry, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <td className="p-4">{entry.id}</td>
                  <td className="p-4">{entry.measurement_data} °C</td>
                  <td className="px-6 py-4">{entry.created_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h3 class="text-3xl font-bold dark:text-white ml-10">
        Udendørs målinger
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-black bg-gray-200 bg-opacity-40 rounded-lg">
            <tr>
              <th scope="col" className="p-4">
                Id
              </th>
              <th scope="col" className="p-4">
                Udendørs temperatur (°C)
              </th>

              <th scope="col" className="px-6 py-3">
                Måling foretaget
              </th>
            </tr>
          </thead>
          <tbody>
            {measurements
              .filter(
                (entry) => entry.measurement_type === 'OUTDOOR_TEMPERATURE'
              )
              .map((entry, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <td className="p-4">{entry.id}</td>
                  <td className="p-4">{entry.measurement_data} °C</td>
                  <td className="px-6 py-4">{entry.created_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h3 class="text-3xl font-bold dark:text-white ml-10">CO2 niveauer</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-black bg-gray-200 bg-opacity-40 rounded-lg">
            <tr>
              <th scope="col" className="p-4">
                Id
              </th>
              <th scope="col" className="p-4">
                CO2 Niveau
              </th>

              <th scope="col" className="px-6 py-3">
                Måling foretaget
              </th>
            </tr>
          </thead>
          <tbody>
            {measurements
              .filter((entry) => entry.measurement_type === 'CO2')
              .map((entry, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <td className="p-4">{entry.id}</td>
                  <td className="p-4">{entry.measurement_data} PPM</td>
                  <td className="px-6 py-4">{entry.created_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <h3 class="text-3xl font-bold dark:text-white ml-10">Control logs </h3>
      {logs && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-black bg-gray-200 bg-opacity-40 rounded-lg">
              <tr>
                <th scope="col" className="p-4">
                  Id
                </th>
                <th scope="col" className="p-4">
                  Handling foretaget
                </th>

                <th scope="col" className="p-4">
                  Niveau
                </th>

                <th scope="col" className="p-4">
                  Besked
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((entry, index) => (
                <tr key={index} className="bg-white border-b text-black">
                  <td className="p-4">{entry.id}</td>
                  <td className="p-4">{entry.created_at}</td>
                  <td className="px-6 py-4">{entry.level}</td>
                  <td className="px-6 py-4">{entry.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Logs;
