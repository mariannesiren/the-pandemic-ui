import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WorldMap from './worldmap';
import TopCountries from './top-countries';
import InfoBox from './infobox';
import KeyNumbers from './keynumbers';
import TimeFrame from './timeframe';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
}));

const options = [
  {
    name: 'Active',
    description:
      'Active refers to positively tested cases that have not yet had an outcome, either recovery or death.',
  },
  {
    name: 'Confirmed',
    description:
      'Confirmed means cases that have been tested positive. Actual number of cases is likely higher.',
  },
  { name: 'Recovered', description: 'Kuvaus parantuneista' },
  { name: 'Dead', description: 'Kuvaus kuolleista' },
];

const Dashboard = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedType, setSelectedType] = React.useState(0);

  const [lastDate, setLastDate] = React.useState(new Date('05/12/2020'));
  const [endDate, setEndDate] = React.useState(lastDate);
  const [startDate, setStartDate] = React.useState(new Date('03/22/2020'));

  const maxValue = 51;
  const [sliderValue, setSliderValue] = React.useState<number>(maxValue);
  const [prevValue, setPrevValue] = React.useState<number>(maxValue);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://167.172.186.109:8080/api/all')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (index: number) => {
    setSelectedType(index);
    setAnchorEl(null);
  };

  const handleSliderChange = (event: any, newValue: number) => {
    setSliderValue(newValue);
  };

  const handleSliderStop = (event: any, value: number) => {
    console.log('Current value is: ' + value);
    console.log('Previous value is: ' + prevValue);

    let diff = prevValue - value;
    let newDate = new Date(endDate);
    let dateValue = 0;
    dateValue = newDate.getDate() - diff;
    newDate.setDate(dateValue);
    setEndDate(newDate);
    setPrevValue(value);
  };

  return (
    <main className={classes.content}>
      <Container className={classes.container}>
        <Grid container spacing={3} style={{ margin: 0 }}>
          <KeyNumbersAndMap options={options} />
          <InfoBoxAndTopCountries />
          <InteractionsSection
            options={options}
            sliderValue={sliderValue}
            maxValue={maxValue}
            handleSliderChange={handleSliderChange}
            handleSliderStop={handleSliderStop}
            handleClick={handleClick}
            handleItemClick={handleItemClick}
            anchorEl={anchorEl}
            startDate={startDate}
            endDate={endDate}
            lastDate={lastDate}
            selectedType={selectedType}
          />
        </Grid>
      </Container>
    </main>
  );
};

const KeyNumbersAndMap = ({
  options,
}: {
  options: { name: string; description: string }[];
}) => {
  return (
    <>
      <Grid item container xs={9} spacing={3} style={{ margin: 0, padding: 0 }}>
        <KeyNumbers types={options} />
        <WorldMap />
      </Grid>
    </>
  );
};

const InfoBoxAndTopCountries = () => {
  return (
    <>
      <Grid item container xs={3} spacing={3} style={{ margin: 0, padding: 0 }}>
        <InfoBox />
        <TopCountries />
      </Grid>
    </>
  );
};

const InteractionsSection = ({
  options,
  sliderValue,
  maxValue,
  handleSliderChange,
  handleSliderStop,
  handleClick,
  handleItemClick,
  anchorEl,
  startDate,
  endDate,
  lastDate,
  selectedType,
}: {
  options: { name: string; description: string }[];
  sliderValue: number;
  maxValue: number;
  handleSliderChange: (event: any, newValue: number) => void;
  handleSliderStop: (event: any, value: number) => void;
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleItemClick: (index: number) => void;
  anchorEl: null | HTMLElement;
  startDate: Date;
  endDate: Date;
  lastDate: Date;
  selectedType: number;
}) => {
  return (
    <>
      <Grid item container xs={12} spacing={3} style={{ margin: 0 }}>
        <TimeFrame
          options={options}
          sliderValue={sliderValue}
          maxValue={maxValue}
          handleSliderChange={handleSliderChange}
          handleSliderStop={handleSliderStop}
          handleClick={handleClick}
          handleItemClick={handleItemClick}
          anchorEl={anchorEl}
          startDate={startDate}
          endDate={endDate}
          lastDate={lastDate}
          selectedType={selectedType}
        />
      </Grid>
    </>
  );
};

export default Dashboard;
