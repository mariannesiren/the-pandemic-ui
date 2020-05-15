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

const KeyNumbers = ({
  keyNumbers,
}: {
  keyNumbers: { name: string; sum: number }[];
}) => {
  const classes = useStyles();
  return (
    <>
      {keyNumbers.map((keyNumber, index) => (
        <Grid item xs={3} key={keyNumber.name + index}>
          <Paper className={classes.container}>
            <Typography>{keyNumber.name}</Typography>
            <Typography>{keyNumber.sum}</Typography>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default KeyNumbers;
