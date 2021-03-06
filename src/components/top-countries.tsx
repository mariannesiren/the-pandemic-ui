import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { HorizontalBar } from 'react-chartjs-2';
import { getTopCountriesByDate } from '../utils/get-top-countries-by-date';
import { options } from './options';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50%',
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
  },
  heading: {
    fontFamily: 'Assistant, sans-serif',
    fontWeight: 600,
    width: 210,
    fontSize: '1em',
    backgroundColor: '#FFA600',
    color: '#fff',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    marginLeft: '-16px',
  },
}));

const TopCountries = ({
  coronaData,
  endDate,
  selected,
}: {
  coronaData: [];
  endDate: Date;
  selected: number;
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.container}>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>
          <Heading selected={selected} />
        </Typography>
        <Chart coronaData={coronaData} endDate={endDate} selected={selected} />
      </Paper>
    </Grid>
  );
};

const Heading = ({ selected }: { selected: number }) => {
  const selectedOption: string = options[selected].name;
  const heading = setHeading(selectedOption);
  return <>{heading}</>;
};

const setHeading = (selectedOption: string) => {
  switch (selectedOption) {
    case 'Active':
      return 'Most active cases';
    case 'Confirmed':
      return 'Most confirmed cases';
    case 'Deaths':
      return 'Most deaths';
    case 'Recovered':
      return 'Most recoveries';
    default:
      return 'Most cases';
  }
};

const Chart = ({
  coronaData,
  endDate,
  selected,
}: {
  coronaData: [];
  endDate: Date;
  selected: number;
}) => {
  const selectedOption: string = options[selected].name.toLowerCase();
  const selectedType = selectedOption as
    | 'confirmed'
    | 'active'
    | 'deaths'
    | 'recovered';

  const topCountries = getTopCountriesByDate(coronaData, endDate, selectedType);

  const dataset = {
    labels: topCountries.map((country) => country.label),
    datasets: [
      {
        label: `${options[selected].name.toLowerCase()}`,
        data: topCountries.map((country) => country.value),
        barThickness: 13,
        maxBarThickness: 13,
        minBarLength: 2,
        backgroundColor: '#444E86',
      },
    ],
  };

  const chartOptions = {
    legend: {
      display: false,
    },
  };

  console.log('topCountries', topCountries);
  return (
    <div>
      <HorizontalBar data={dataset} height={300} options={chartOptions} />
    </div>
  );
};

export default TopCountries;
