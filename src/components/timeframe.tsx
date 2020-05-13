import React from 'react';
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
    flexDirection: 'row',
    width: '100%',
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

const TimeFrame = ({
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
  selectedType: number;
}) => {
  const classes = useStyles();

  return (
    <>
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
                onClick={() => handleItemClick(index)}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box>
          <Typography>Start date: {startDate.toDateString()}</Typography>
          <Typography>End date: {endDate.toDateString()}</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default TimeFrame;
