import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50%',
  },
  paper: {
      height: '100%',
      padding: theme.spacing(2),
  },
}));

const TopCountries = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.container}>
                <Paper className={classes.paper}>
                  <Typography>Most cases per 1M people</Typography>
                </Paper>
        </Grid>
    );
};

export default TopCountries;