
import { data } from '../data/mockData'; // Import the data array
import {MockActuator} from '../Actuators/mockActuator'; // Import the data array

function Homepage() {
  
  // Get the radiatorStatus and windowStatus from MockActuator component
  const { radiatorStatus, windowStatus } = MockActuator();

  // Get the latest entry
  const latestEntry = data[data.length - 1];

  return (
    <div className="container mx-auto border w-[40%] border ml-[60%] sm:w-[60%] sm:ml-[40%] md:w-[70%] md:ml-[30%] lg:w-[75%] lg:ml-[25%] xl:w-[80%] xl:ml-[20%] 2xl:w-[87%] 2xl:ml-[13%]" style={{ background: '#F4F4F4', width: '87%', marginLeft: '13%' }}>
      <h1 className="mt-16 mb-4 px-10 text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">Welcome, User's Name</h1>

      {/* Radiator Status Table */}
      <h2 className="px-10 mt-10 text-3xl font-semibold text-black">Radiator Status</h2>
      <div className="mt-4 overflow-x-auto px-10 rounded-lg">
        <table className="w-full text-sm text-left text-black bg-black bg-opacity-50 rounded-lg">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Temperature</th>
              <th scope="col" className="px-6 py-3">CO2 Level</th>
              <th scope="col" className="px-6 py-3">Time</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">Radiator 1</td>
              <td className="px-6 py-4">{radiatorStatus} {radiatorStatus === 'On' ? <div className="w-3 h-3 rounded-full inline-block mr-3 bg-green-500"></div> : <div className="w-3 h-3 rounded-full inline-block mr-2 bg-red-500"></div>}</td>
              <td className="px-6 py-4">{latestEntry.temperature}°C</td>
              <td className="px-6 py-4">{latestEntry.co2Level} ppm</td>
              <td className="px-6 py-4">{latestEntry.time}</td>
              <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Window Status Table */}
      <h2 className="px-10 mt-10 text-3xl font-semibold text-black">Window Status</h2>
      <div className="mt-4 overflow-x-auto px-10">
        <table className="w-full text-sm text-left text-black bg-black bg-opacity-50 rounded-lg">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Temperature</th>
              <th scope="col" className="px-6 py-3">CO2 Level</th>
              <th scope="col" className="px-6 py-3">Time</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">Window 1</td>
              <td className="px-6 py-4">{windowStatus } {windowStatus === 'Open' ? <div className="w-3 h-3 rounded-full inline-block mr-2 bg-green-500"></div> : <div className="w-3 h-3 rounded-full inline-block mr-2 bg-red-500"></div>}</td>
              <td className="px-6 py-4">{latestEntry.temperature}°C</td>
              <td className="px-6 py-4">{latestEntry.co2Level} ppm</td>
              <td className="px-6 py-4">{latestEntry.time}</td>
              <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
