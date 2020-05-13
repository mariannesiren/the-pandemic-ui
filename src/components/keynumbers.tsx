import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 150,
    padding: theme.spacing(2),
  },
}));

const KeyNumbers = () => {

  const types = ['Active', 'Confirmed', 'Recovered', 'Dead'];
  const classes = useStyles();
  return (
    <>
      {types.map((type, index) => 
        <Grid item xs={3} key={type + index}>
          <Paper className={classes.container}>
            <Typography>{type}</Typography>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default KeyNumbers;