import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/expandMore';
import MyDrawer from './mydrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  keynumber: {
    height: 150,
    padding: theme.spacing(2),
  },
  map: {
    height: 500,
    padding: theme.spacing(2),
  },
  interaction: {
    padding: theme.spacing(2),
    backgroundColor: '#FFD78C',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  info: {
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: '#CCD4FF',
  },
  topCountries: {
    height: '100%',
    padding: theme.spacing(2),
  },
  typebutton: {
    backgroundColor: '#FFA600',
    color: '#fff',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const StyledSlider = withStyles({
  root: {
    color: '#444E86',
    height: 8,
  },
  thumb: {
    height: 22,
    width: 22,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 10,
    borderRadius: 4,
  },
  rail: {
    height: 10,
    borderRadius: 4,
  },
})(Slider);

const options = ['Active', 'Confirmed', 'Recovered', 'Dead'];

const Dashboard = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedType, setSelectedType] = React.useState(0);

  const [endDate, setEndDate] = React.useState(new Date('05/12/2020'));
  const [startDate, setStartDate] = React.useState(new Date('03/22/2020'));

  const maxValue = 51;
  const [sliderValue, setSliderValue] = React.useState<number>(maxValue);
  const [prevValue, setPrevValue] = React.useState<number>(maxValue);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
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
    <div className={classes.root}>
      <CssBaseline />
      <MyDrawer />
      <main className={classes.content}>
        <Container className={classes.container}>
          <Grid container spacing={3} style={{ margin: 0 }}>
            {/* Center map etc*/}
            <Grid
              item
              container
              xs={9}
              spacing={3}
              style={{ margin: 0, padding: 0 }}
            >
              {/* Key numbers */}
              <Grid item xs={3}>
                <Paper className={classes.keynumber}>
                  <Typography>Active</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.keynumber}>
                  <Typography>Confirmed</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.keynumber}>
                  <Typography>Recovered</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.keynumber}>
                  <Typography>Dead</Typography>
                </Paper>
              </Grid>

              {/* Map */}
              <Grid item xs={12}>
                <Paper className={classes.map}>
                  <Typography>Kartta</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Right side */}
            <Grid
              item
              container
              xs={3}
              spacing={3}
              style={{ margin: 0, padding: 0 }}
            >
              <Grid item xs={12}>
                <Paper className={classes.info}>
                  <Typography>Did you know?</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.topCountries}>
                  <Typography>Most cases per 1M people</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Slider */}
            <Grid item xs={12}>
              <Paper className={classes.interaction}>
                <Box style={{ width: '60%', marginRight: 30 }}>
                  <Typography id="timeslider" gutterBottom>
                    Select timeframe:
                  </Typography>
                  <StyledSlider
                    value={sliderValue}
                    aria-labelledby="timeslider"
                    step={1}
                    valueLabelDisplay="auto"
                    max={maxValue}
                    onChange={handleSliderChange}
                    onChangeCommitted={handleSliderStop}
                  ></StyledSlider>
                </Box>
                <Box>
                  <Typography id="typeselection" gutterBottom>
                    Select case type:
                  </Typography>
                  <Button
                    aria-controls="typemenu"
                    aria-labelledby="typeselection"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.typebutton}
                    endIcon={<ExpandMore />}
                  >
                    {options[selectedType]}
                  </Button>
                  <Menu
                    id="typemenu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                  >
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedType}
                        onClick={(event) => handleItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box>
                  <Typography>
                    Start date: {startDate.toDateString()}
                  </Typography>
                  <Typography>End date: {endDate.toDateString()}</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
