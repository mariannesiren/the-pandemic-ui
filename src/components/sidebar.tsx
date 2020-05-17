import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#444E86',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  mainheading: {
    fontFamily: 'Merriweather, serif',
    fontWeight: 700,
    fontSize: '2em',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    backgroundColor: '#34234B',
    color: '#fff',
  },
  menutext: {
    color: '#fff',
    fontSize: '0.85em',
    fontFamily: 'Merriweather, serif',
    lineHeight: '20px',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  menubutton: {
    color: '#fff',
    textAlign: 'center',
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper, // Nested classnames
      }}
      open={true}
    >
      <Typography variant="h1" className={classes.mainheading}>
        The Pandemic
      </Typography>
      <Typography
        variant="body2"
        className={classes.menutext}
        paragraph
      >
        The Pandemic is an interactive visualization depicting the novel 
        coronavirus pandemic of 2019 and 2020.   
        <br></br>
        <br></br>
        This website and all its’ contents are part of a university project work 
        and therefore should not be used for guidance or medical advice. 
        <br></br>
        <br></br>
        Copyright of the data belongs to John Hopkins University.
      </Typography>
      <List>
        <ListItem button className={classes.menubutton}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button className={classes.menubutton}>
          <ListItemText>Countries</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SideBar;
