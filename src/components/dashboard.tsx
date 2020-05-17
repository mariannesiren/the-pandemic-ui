import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WorldMap from './worldmap';
import TopCountries from './top-countries';
import InfoBox from './infobox';
import KeyNumbers from './keynumbers';
import UserInteractions from './user-interactions';
import { getDateObjects } from '../utils/getDateObjects';

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

const Dashboard = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedType, setSelectedType] = React.useState<number>(0);

  // Last date of data we have
  const [maxDateOfTimeFrame, setMaxDateOfTimeFrame] = React.useState<Date>(
    new Date()
  );
  // End date of timeframe user selects (defaults to max possible date)
  const [endDate, setEndDate] = React.useState<Date>(
    new Date()
  );
  // Start date of data and start date of timeframe (not possible to change)
  const [startDate, setStartDate] = React.useState<Date>(new Date());

  // The maximum value between start and end date
  const [maxValueOfSlider, setMaxValueOfSlider] = React.useState<number>(0);
  // The value between start and end date that user selects from timeframe (defaults to max)
  const [sliderValue, setSliderValue] = React.useState<number>(
    maxValueOfSlider
  );
  // Previous value of the slider
  const [prevValue, setPrevValue] = React.useState<number>(maxValueOfSlider);

  const [coronaData, setCoronaData] = React.useState<[]>([]);

  const [keyNumbers, setKeyNumbers] = React.useState<
    {
      'name': string,
      'sum': number,
    }[]>([
      {
        'name': 'Active',
        'sum': 0,
      },
      {
        'name': 'Confirmed',
        'sum': 0,
      },
      {
        'name': 'Recovered',
        'sum': 0,
      },
      {
        'name': 'Dead',
        'sum': 0,
      }
    ])

  React.useEffect(() => {
    fetch('http://167.172.186.109:8080/api/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const lastDate = new Date(data[data.length - 1].date);
        setMaxDateOfTimeFrame(lastDate);
        setEndDate(lastDate);

        const firstDate = new Date(data[0].date);
        setStartDate(firstDate);

        // To calculate the time difference of two dates
        const differenceBetweenStartAndEndDate =
          lastDate.getTime() - firstDate.getTime();

        // To calculate the no. of days between two dates
        const differenceInDays = Math.round(
          differenceBetweenStartAndEndDate / (1000 * 3600 * 24)
        );

        setMaxValueOfSlider(differenceInDays);
        setSliderValue(differenceInDays);
        setPrevValue(differenceInDays);
        setCoronaData(data);
        setKeyNumbers(getDateObjects(data, lastDate));
      });
  }, []);


  const handleTypeMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTypeMenuItemClick = (index: number) => {
    setSelectedType(index);
    setAnchorEl(null);
  };

  const handleSliderChange = (event: any, newValue: number) => {
    setSliderValue(newValue);
  };

  const handleSliderStop = (event: any, value: number) => {

    let diff = prevValue - value;
    let newDate = new Date(endDate);
    let dateValue = 0;
    dateValue = newDate.getDate() - diff;
    newDate.setDate(dateValue);
    setEndDate(newDate);
    setPrevValue(value);

    setKeyNumbers(getDateObjects(coronaData, newDate));
  };

  return (
    <main className={classes.content}>
      {coronaData.length > 0 && (
        <Container className={classes.container}>
          <Grid container spacing={3} style={{ margin: 0 }}>
            <KeyNumbersAndMap keyNumbers={keyNumbers} selected={selectedType}/>
            <InfoBoxAndTopCountries />
            <InteractionsSection
              options={options}
              sliderValue={sliderValue}
              maxValue={maxValueOfSlider}
              handleSliderChange={handleSliderChange}
              handleSliderStop={handleSliderStop}
              handleTypeMenuClick={handleTypeMenuClick}
              handleTypeMenuItemClick={handleTypeMenuItemClick}
              anchorEl={anchorEl}
              startDate={startDate}
              endDate={endDate}
              lastDate={maxDateOfTimeFrame}
              selectedType={selectedType}
            />
          </Grid>
        </Container>
      )}
    </main>
  );
};

const KeyNumbersAndMap = ({
  keyNumbers, selected
}: {
  keyNumbers: { name: string; sum: number }[];
  selected: number;
}) => {
  return (
    <>
      <Grid item container xs={9} spacing={3} style={{ margin: 0, padding: 0 }}>
        <KeyNumbers keyNumbers={keyNumbers} selected={selected} />
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
  sliderValue,
  maxValue,
  handleSliderChange,
  handleSliderStop,
  handleTypeMenuClick,
  handleTypeMenuItemClick,
  anchorEl,
  startDate,
  endDate,
  lastDate,
  selectedType,
}: {
  sliderValue: number;
  maxValue: number;
  handleSliderChange: (event: any, newValue: number) => void;
  handleSliderStop: (event: any, value: number) => void;
  handleTypeMenuClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleTypeMenuItemClick: (index: number) => void;
  anchorEl: null | HTMLElement;
  startDate: Date;
  endDate: Date;
  lastDate: Date;
  selectedType: number;
}) => {
  return (
    <>
      <Grid item container xs={12} spacing={3} style={{ margin: 0 }}>
        <UserInteractions
          sliderValue={sliderValue}
          maxValue={maxValue}
          handleSliderChange={handleSliderChange}
          handleSliderStop={handleSliderStop}
          handleTypeMenuClick={handleTypeMenuClick}
          handleTypeMenuItemClick={handleTypeMenuItemClick}
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
