export const getDateObjects = (
  coronaData: {
    active: number;
    confirmed: number;
    country: string;
    date: string;
    deaths: number;
    recovered: number;
  }[],
  endDate: Date
) => {
  const year = endDate.getFullYear();
  const month = endDate.getMonth();
  const day = endDate.getDate();
  const formattedMonth = month < 10 ? `0${month + 1}` : `${month + 1}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  const parsedDate = `${year}-${formattedMonth}-${formattedDay}`;
  console.log('parsed date', parsedDate);

  const countriesByEndDate = coronaData.filter((data) =>
    data.date.includes(parsedDate)
  );

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
  console.log('activesum', activeSum);
  console.log('confirmedsum', confirmedSum);
  console.log('recoveredsum', recoveredSum);
  console.log('deadsum', deadSum);
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
