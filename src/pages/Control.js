import React, { useState, useEffect } from 'react';
import { getRequest, putRequest } from '../utils/api';

function Control() {
  const [radiator, setRadiator] = useState({
    id: 'placeholder..',
    name: 'Radiator',
    status: false,
    type: 'radiator',
    updated_at: '...',
    level: 0,
  });
  const [window, setWindow] = useState({
    id: 'placeholder..',
    name: 'vindue',
    status: false,
    type: 'vindue',
    updated_at: '...',
    level: 0,
  });

  const toggleWindow = async () => {
    let newStatus = !window.status; // Correctly capture the new status

    // Update the window object with the new status before sending to the server
    const updatedWindow = { ...window, status: newStatus };
    const response = await putRequest('actuators', updatedWindow);

    if (response.success) {
      // Update state with the new status if the server update was successful
      setWindow((prevState) => ({ ...prevState, status: newStatus }));
    }
  };

  useEffect(() => {
    async function getActuators() {
      let data = await getRequest('actuators');
      if (data && data.length > 0) {
        setWindow(data[0]);
        setRadiator(data[1]);
        console.log(data);
      }
    }

    getActuators();
  }, []);

  const handleModeChange = async (event) => {
    let level = Number(event.target.value); // Correctly capture the new status

    setRadiator((prevRadiator) => ({
      ...prevRadiator,
      level: level,
    }));
    // Update the window object with the new status before sending to the server
    const updatedRadiator = { ...radiator, status: level > 0, level: level };
    const response = await putRequest('actuators', updatedRadiator);

    if (response.success) {
      // Update state with the new status if the server update was successful
    }
  };

  return (
    <div className="w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]">
      <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">
        Climate control
      </h1>
      <p className="text-lg px-10 text-gray-700 mb-8">
        This page allows you to control the heating and window systems in your
        smart home. Use the toggles below to adjust the settings as needed.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-4">Radiator Control</h2>
          <p className="text-gray-700">
            Radiator is {radiator.level > 0 ? 'On' : 'Off'}
          </p>
          <div className="mt-4">
            <label
              htmlFor="temp-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700 "
            >
              Adjust Mode (0 to 5)
            </label>
            <input
              id="temp-range"
              type="range"
              min="0"
              max="5"
              step="1"
              value={radiator.level}
              onChange={handleModeChange}
              className="accent-[#000000] w-full h-2 bg-blue rounded-lg appearance-white cursor-pointer dark:bg-black"
            />
            <div className="text-center text-gray-700 mt-2">
              Mode: {radiator.level}
            </div>
          </div>
        </div>
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-4">Window Control</h2>
          <p className="text-gray-700">
            Window is {window.status ? 'Open' : 'Closed'}
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={window.status}
              onChange={toggleWindow}
            />
            <div
              className={`relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-black dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500`}
            />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle Window
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Control;
