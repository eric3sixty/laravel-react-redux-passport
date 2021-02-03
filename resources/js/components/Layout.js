import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import EventNote from '@material-ui/icons/EventNote';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/authActions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [appbarTitle, setAppbarTitle] = React.useState('iFMIS');

  const { isAuthenticated, user } = props.auth;

  const onLogOutClick = (e) => {
    e.preventDefault();
    props.logOutUser();
}

        const authLinks = (
            <ul className="navbar-nav ml-auto">

{/* 

                <li className="nav-item">
                    <a href="#" className="nav-link">
                        {user.email}
                    </a>
                </li> */}
               
                
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link text-white"
                        onClick={(e) => {onLogOutClick(e);}}
                    >
                        Log Out
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-white" href="/register" to="/register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" href="/login" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            hidden={isAuthenticated ? false : true}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title} noWrap>
          {!open &&
                <Link className="text-white" href="/" to="/" style={{ textDecoration: 'none', textDecorationColor: '#FFF', textEmphasisColor: '#FFF' }} >
                        {appbarTitle}
                </Link>}
		   </Typography>
          

          <nav className="navbar navbar-expand-sm mb-4">
                <div className="container">
             
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <h2>iFMIS</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button component={Link} to="/dashboard" 
                onClick={() => {
                    setAppbarTitle("Dashboard")
                    handleDrawerClose();
                    }}>
                <ListItemIcon className={classes.ListItemIcon} ><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
     
            <ListItem button component={Link} to="/aip" 
                onClick={() => {
                setAppbarTitle("Annual Investment Program (AIP)")
                handleDrawerClose();
                }}>
                <ListItemIcon className={classes.ListItemIcon} ><EventNote /></ListItemIcon>
                <ListItemText primary="Annual Investment Program (AIP)" />
            </ListItem>
         
        </List>
        <Divider />
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}

Layout.propTypes = {
    logOutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logOutUser }
)(Layout);