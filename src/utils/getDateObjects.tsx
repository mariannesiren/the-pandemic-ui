export const getDateObjects = (
  coronaData: {
    active: number;
    confirmed: number;
    country: string;
    date: Date;
    deaths: number;
    recovered: number;
  }[],
  endDate: Date
) => {
  const countriesByEndDate = coronaData.filter((country) => {
    const dateObject = new Date(country.date);
    return dateObject.toDateString() === endDate.toDateString();
  });

  let activeSum = 0;
  let confirmedSum = 0;
  let recoveredSum = 0;
  let deadSum = 0;

  countriesByEndDate.forEach((country) => {
    activeSum += country.active;
    confirmedSum += country.confirmed;
    recoveredSum += country.recovered;
    deadSum += country.deaths;
  });

  return [
    {
      name: 'Active',
      sum: activeSum,
    },
    {
      name: 'Confirmed',
      sum: confirmedSum,
    },
    {
      name: 'Recovered',
      sum: recoveredSum,
    },
    {
      name: 'Dead',
      sum: deadSum,
    },
  ];
};
