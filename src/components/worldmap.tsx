import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    mapContainer: {
      height: 500,
      padding: theme.spacing(2),
    },
}));

const WorldMap = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
                <Paper className={classes.mapContainer}>
                  <Typography>Kartta</Typography>
                </Paper>
        </Grid>
    );
};

export default WorldMap;