import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/dashboard';
import MyDrawer from './components/mydrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#EBEEFF',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MyDrawer />
      <Dashboard />
    </div>
  );
};

export default App;
