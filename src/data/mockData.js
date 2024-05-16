const generateRandomData = (startHour, endHour, isAM) => {
  const data = [];
  const period = isAM ? 'AM' : 'PM';
  for (let i = startHour; i <= endHour; i++) {
    const newEntry = {
      time: `${i}:00 ${period}`,
      temperature_in: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
      temperature_out: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
      co2Level: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    };
    data.push(newEntry);
  }
  return data;
};

const morningData = generateRandomData(8, 12, true);
const afternoonData = generateRandomData(1, 10, false);

const data = [...morningData, ...afternoonData];

console.log(data);
export { data };
