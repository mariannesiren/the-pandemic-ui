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

const TopCountries = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.container}>
                <Paper className={classes.paper}>
                  <Typography className={classes.heading}>Most cases per 1M people</Typography>
                </Paper>
        </Grid>
    );
};

export default TopCountries;