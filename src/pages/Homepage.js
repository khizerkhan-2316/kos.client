function Homepage() {
  return (
    <div className="w-[80%] border ml-[20%]" style={{ background: '#F4F4F4' }}>
      <h1 className="mt-[100px] mb-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome, User's Name</h1>
      <h2 className="mt-[50px] mb-4 text-3xl font-semibold text-gray-900">Radiator Status</h2>
      
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-900 bg-black bg-opacity-50 rounded-lg">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Temperature</th>
              <th scope="col" className="px-6 py-3">CO2 Level</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">Radiator 1</td>
              <td className="px-6 py-4">On</td>
              <td className="px-6 py-4">25°C</td>
              <td className="px-6 py-4">400 ppm</td>
              <td className="px-6 py-4">4-17-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="mt-8 mb-4 text-3xl font-semibold text-gray-900">Window Status</h2>
      
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-900 bg-black bg-opacity-50 rounded-lg">
          <thead className="text-xs uppercase bg-gray-200"> 
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Temperature</th>
              <th scope="col" className="px-6 py-3">CO2 Level</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">Window 1</td>
              <td className="px-6 py-4">Closed</td>
              <td className="px-6 py-4">25°C</td>
              <td className="px-6 py-4">400 ppm</td>
              <td className="px-6 py-4">4-17-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
