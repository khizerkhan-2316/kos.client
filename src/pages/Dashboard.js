import React from 'react';

import { getRequest } from '../utils/api.js';

import { useState, useEffect } from 'react';

import Graph from '../components/Graph.js';

function Dashboard() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchMeasures = async () => {
      try {
        const measurementsData = await getRequest('measurements');
        setMeasurements(measurementsData);
      } catch (e) {
        console.log('error fetching measurements', e);
      }
    };

    fetchMeasures();
  }, []);
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
          {measurements && (
            <Graph
              title="Inddørs temperatur"
              data={measurements.filter(
                (measurement) =>
                  measurement.measurement_type === 'INDOOR_TEMPERATURE'
              )}
              label={{
                value: 'Temperature (°C)',
                angle: -90,
                position: 'insideLeft',
              }}
              name="Temperature Indoor(°C)"
            />
          )}

          {measurements && (
            <Graph
              title="Udenddørs temperatur"
              data={measurements.filter(
                (measurement) =>
                  measurement.measurement_type === 'OUTDOOR_TEMPERATURE'
              )}
              label={{
                value: 'Temperature (°C)',
                angle: -90,
                position: 'insideLeft',
              }}
              name="Temperature OUTDOOR(°C)"
            />
          )}

          {measurements && (
            <Graph
              title="CO2"
              data={measurements.filter(
                (measurement) => measurement.measurement_type === 'CO2'
              )}
              label={{
                value: 'CO2 (PPM)',
                angle: -90,
                position: 'insideLeft',
              }}
              name="CO2 (PPM)"
            />
          )}
        </div>
        <div className="basic-[30%]"></div>
      </div>
    </div>
  );
}

export default Dashboard;
