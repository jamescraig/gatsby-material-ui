import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Fab from '@material-ui/core/Fab';
import Favourite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    [theme.breakpoints.up('lg')]: {
      left: '256px',
      width: 'calc(100vw - 256px)'
    },
  },
  menuButton: {
    marginLeft: -theme.spacing.unit,
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'relative',
    zIndex: 1,
    top: -30,
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerToggle}
                  className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit">
              <Favourite />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <EyeIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
