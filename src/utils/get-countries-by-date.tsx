export const getCountriesByDate = (
  coronaData: {
    active: number;
    confirmed: number;
    country: string;
    date: Date;
    deaths: number;
    recovered: number;
  }[],
  endDate: Date,
  type: 'confirmed' | 'active' | 'deaths' | 'recovered'
) => {
  const countriesByEndDate = coronaData.filter((country) => {
    const dateObject = new Date(country.date);
    return dateObject.toDateString() === endDate.toDateString();
  });

  const sortedCountries = countriesByEndDate.sort((a, b) => {
    if (a[type] < b[type]) {
      return 1;
    }
    if (a[type] > b[type]) {
      return -1;
    }
    return 0;
  });

  const data = sortedCountries.map((country) => ({
    label: country.country,
    value: country[type],
  }));
  
  return data;
};
