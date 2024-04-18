const data = [
    {
      time: '8:00 AM',
      temperature: 12,
      co2Level: 225,
    },
    {
      time: '9:00 AM',
      temperature: 22.5,
      co2Level: 410,
    },
    {
      time: '10:00 AM',
      temperature: 15,
      co2Level: 300,
    },
    {
      time: '11:00 AM',
      temperature: 23.5,
      co2Level: 430,
    },
    {
      time: '12:00 PM',
      temperature: 24,
      co2Level: 435,
    },
    {
      time: '1:00 PM',
      temperature: 10,
      co2Level: 200,
    },
    {
      time: '2:00 PM',
      temperature: 23,
      co2Level: 400,
    },
  ];
  
  // Generate 20 more data entries
  for (let i = 0; i < 20; i++) {
    const newEntry = {
      time: `${i + 3}:00 PM`, // Start from 3:00 PM
      temperature: Math.floor(Math.random() * (30 - 10 + 1)) + 10, // Random temperature between 10 and 30
      co2Level: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // Random CO2 level between 100 and 500
    };
    data.push(newEntry);
  }
  
  export { data };
  