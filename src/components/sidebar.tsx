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
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    backgroundColor: '#34234B',
    color: '#fff',
  },
  menutext: {
    color: '#fff',
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
      <Typography variant="h5" className={classes.mainheading}>
        The Pandemic
      </Typography>
      <Typography
        variant="body2"
        align="center"
        className={classes.menutext}
        paragraph
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
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
