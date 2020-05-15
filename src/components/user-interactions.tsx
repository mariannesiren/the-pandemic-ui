import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/expandMore';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  interaction: {
    padding: theme.spacing(2),
    backgroundColor: '#FFD78C',
    display: 'flex',
    width: '100%',
  },
  typebutton: {
    backgroundColor: '#FFA600',
    color: '#fff',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  description: {
    paddingTop: theme.spacing(2),
  },
  sliderdate: {
    fontSize: '0.85em',
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

const UserInteractions = ({
  options,
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
  options: { name: string; description: string }[];
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
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.interaction}>
        <Grid item container xs={9} style={{ marginRight: '25px' }}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography className={classes.sliderdate}>
                  {startDate.toDateString()}
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.sliderdate}>
                  {lastDate.toDateString()}
                </Typography>
              </Box>
            </Box>
            <Typography>Selected: {endDate.toDateString()}</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3}>
          <Grid item xs={12}>
            <Typography id="typeselection" gutterBottom>
              Select case type:
            </Typography>
            <Button
              aria-controls="typemenu"
              aria-labelledby="typeselection"
              aria-haspopup="true"
              onClick={handleTypeMenuClick}
              className={classes.typebutton}
              endIcon={<ExpandMore />}
            >
              {options[selectedType].name}
            </Button>
            <Menu
              id="typemenu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option.name}
                  selected={index === selectedType}
                  onClick={() => handleTypeMenuItemClick(index)}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
            <Typography className={classes.description}>
              {options[selectedType].description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default UserInteractions;
