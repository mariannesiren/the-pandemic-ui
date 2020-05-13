import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50%',
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: '#CCD4FF',
    overflow: 'auto',
  },
  vignette: {
    backgroundColor: '#34234B',
    width: 116,  
    textAlign: 'center',
    fontSize: '0.9em',
    textTransform: 'uppercase',
    color: '#fff',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: '-16px',
  },
  heading: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontFamily: 'Arial, sans-serif',
  },
  infotext: {
    fontSize: '0.85em',
    paddingBottom: theme.spacing(1),
  },
}));

const InfoBox = () => {

    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.container}>
          <Paper className={classes.paper}>
            <Typography 
              className={classes.vignette}
              variant="h2"
            >
              Did you know?
            </Typography>
            <Typography 
              variant="h3"
              className={classes.heading}
            >
              Heading here
            </Typography>
            <Typography variant="body2" className={classes.infotext}>
              <strong>Novel</strong> coronavirus refers to a new strain of
              Coronaviruses that has not been previously identified in humans.
            </Typography>
            <Typography variant="body2" className={classes.infotext}>
              <strong>Covid-19</strong> is the disease caused by the latest novel coronavirus.
            </Typography>
            <Typography variant="body2" className={classes.infotext}>
              <strong>Symptoms</strong> include...
            </Typography>

          </Paper>
        </Grid>

    );
};

export default InfoBox;