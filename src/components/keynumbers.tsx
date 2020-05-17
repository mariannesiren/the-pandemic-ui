import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  highlighted: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#FFA600',
    color: '#fff',
  },
  numbers: {
    fontSize: '1.7em',
    fontFamily: 'Assistant, sans-serif',
    fontWeight: 600,
  },
  types: {
    fontSize: '1.3em',
    fontFamily: 'Assistant, sans-serif',
    fontWeight: 400,
  },
}));

const KeyNumbers = ({
  keyNumbers, selected
}: {
  keyNumbers: { name: string; sum: number }[];
  selected: number;
}) => {

  const classes = useStyles();

  return (
    <>
      {keyNumbers.map((keyNumber, index) => {
        if (index == selected) {
          return (
            <Grid item xs={3} key={keyNumber.name + index}>
              <Paper className={classes.highlighted}>
                <Typography className={classes.types}>{keyNumber.name}</Typography>
                <Typography className={classes.numbers}>
                  {keyNumber.sum.toLocaleString()}
                </Typography>
              </Paper>
            </Grid>
          )
        }
        else {
          return (
            <Grid item xs={3} key={keyNumber.name + index}>
              <Paper className={classes.paper}>
                <Typography className={classes.types}>{keyNumber.name}</Typography>
                <Typography className={classes.numbers}>
                  {keyNumber.sum.toLocaleString()}
                </Typography>
              </Paper>
            </Grid>
          )
        }
      })}
    </>
  );
};

export default KeyNumbers;
