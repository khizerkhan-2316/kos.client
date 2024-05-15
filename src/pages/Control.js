import React, { useState, useEffect } from 'react';

function Control() {
  const [isWindowOpen, setIsWindowOpen] = useState(
    localStorage.getItem('isWindowOpen') === 'true' ? true : false
  );
  const [Mode, setMode] = useState(
    parseInt(localStorage.getItem('Mode'), 10) || 0
  ); // Initialize from localStorage or default to 0

  const [isRadiatorOn, setIsRadiatorOn] = useState(Mode > 0);

  const toggleWindow = () => {
    const newValue = !isWindowOpen;
    setIsWindowOpen(newValue);
    localStorage.setItem('isWindowOpen', newValue);
  };

  useEffect(() => {
    localStorage.setItem('Mode', Mode);
    setIsRadiatorOn(Mode > 0);
  }, [Mode]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('isRadiatorOn');
      localStorage.removeItem('isWindowOpen');
      localStorage.removeItem('Mode');
    };
  }, []);

  const handleModeChange = (event) => {
    setMode(parseInt(event.target.value, 10));
  };

  return (
    <div className="w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]">
      <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">Climate control</h1>
      <p className="text-lg px-10 text-gray-700 mb-8">
        This page allows you to control the heating and window systems in your smart home. Use the toggles below to adjust the settings as needed.
      </p>
      <div className="w-[40%] ">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl mt-[20%] font-bold mb-4">Radiator Control</h2>
          <p className="text-gray-700">Radiator is {isRadiatorOn ? 'On' : 'Off'}</p>
          <div className="mt-4">
            <label htmlFor="temp-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700 ">Adjust Mode (0 to 5)</label>
            <input
              id="temp-range"
              type="range"
              min="0"
              max="5"
              step="1"
              value={Mode}
              onChange={handleModeChange}
              className="accent-[#000000] w-full h-2 bg-blue rounded-lg appearance-white cursor-pointer dark:bg-black"
            />
            <div className="text-center text-gray-700 mt-2">Mode: {Mode}</div>
          </div>
        </div>
      </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-4">Window Control</h2>
          <p className="text-gray-700">Window is {isWindowOpen ? 'Open' : 'Closed'}</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isWindowOpen}
              onChange={toggleWindow}
            />
            <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-black dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500`}/>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Window</span>
          </label>
        </div>
      </div>

  );
}

export default Control;
