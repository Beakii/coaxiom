import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FolderIcon from '@material-ui/icons/Folder';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WarningIcon from '@material-ui/icons/Warning';
import { Link } from 'react-router-dom';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
    drawer:{
      minWidth: '30vh'
    }
  }));

function getIcon(index){
  switch(index){
    case 0: return <HomeIcon/>
    case 1: return <FormatListNumberedIcon/>
    case 2: return <InfoIcon/>
    case 3: return <FolderIcon/>
    case 4: return <ContactMailIcon/>
    default: return <WarningIcon/>
  }
}

function getRoute(index){
  switch (index) {
    case 0: return "/";
    case 1: return "/Services";
    case 2: return "/About";
    case 3: return "/Resources";
    case 4: return "/Contact";
    default: return "/";
  }
}

function NavDrawer({drawerState, closeDrawer}) {
    const classes = useStyles();
    const theme = useTheme();

    const isMobileSize = useMediaQuery(
      json2mq({
          maxWidth: 850
      })
  );

    const handleDrawerClose = () => {
        closeDrawer();
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="right"
            open={drawerState}
            onClose={handleDrawerClose}
        >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            isMobileSize 
            ?
              ['Home', 'Services', 'About', 'Resources', 'Contact Us'].map((text, index) => (
                <Link to={getRoute(index)} className={classes.link} onClick={handleDrawerClose}>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {getIcon(index)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))
            :
              ['Home', 'Services', 'About', 'Resources'].map((text, index) => (
                <Link to={getRoute(index)} className={classes.link} onClick={handleDrawerClose}>
                  <ListItem button key={text} className={classes.drawer}>
                    <ListItemIcon>
                      {getIcon(index)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))
          }
        </List>
        </Drawer>
    )
}

export default NavDrawer;
