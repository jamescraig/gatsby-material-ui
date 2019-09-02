import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Berrylines from './berry-lines.svg';

// const primary = deepPurple[800];
const styles = theme => ({
  modalPaper: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: '80%',
    maxWidth: '48em',
    padding: '1em',
    outline: 'none',
  },
  paperChart: {
    margin: '0 auto',
    padding: '1em',
    maxWidth: '48em',
    position: 'relative',
  },
  svg: {
    position: 'relative',
    margin: '20% 0',
  },
  salmonberry: {
    position: 'absolute',
    top: '24%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  redhuckleberry: {
    position: 'absolute',
    top: '29.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  redelderberry: {
    position: 'absolute',
    top: '32.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  thimbleberry: {
    position: 'absolute',
    top: '42.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  blackcapraspberry: {
    position: 'absolute',
    top: '46.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  trailingblackberry: {
    position: 'absolute',
    top: '52.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  himalayanblackberry: {
    position: 'absolute',
    top: '56.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  salal: {
    position: 'absolute',
    top: '59.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  oregongrape: {
    position: 'absolute',
    top: '62.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  ovalleafblueberry: {
    position: 'absolute',
    top: '66.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  blackhuckleberry: {
    position: 'absolute',
    top: '69.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  bogblueberry: {
    position: 'absolute',
    top: '72.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
  evergreenhuckleberry: {
    position: 'absolute',
    top: '75.5%',
    right: '14px',
    fontSize: '1.2rem',
    color: '#ffffff',
    textShadow: '0 0 3px #000',
  },
});

function Timeline(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Paper className={classes.paperChart} elevation={10}>
        <img className={classes.svg} src={Berrylines} alt={'Berry Timeline'} />
        <Button className={classes.salmonberry} component={Link} to={'/salmonberry'}>Salmonberry</Button>
        <Button className={classes.redhuckleberry} component={Link} to={'/red-huckleberry'}>Red Huckleberry</Button>
        <Button className={classes.redelderberry} component={Link} to={'/red-elderberry'}>Red Elderberry</Button>
        <Button className={classes.thimbleberry} component={Link} to={'/thimbleberry'}>Thimbleberry</Button>
        <Button className={classes.blackcapraspberry} component={Link} to={'/blackcap-raspberry'}>Blackcap Raspberry</Button>
        <Button className={classes.trailingblackberry} component={Link} to={'/trailing-blackberry'}>Trailing Blackberry</Button>
        <Button className={classes.himalayanblackberry} component={Link} to={'/himalayan-blackberry'}>Himalayan Blackberry</Button>
        <Button className={classes.salal} component={Link} to={'/salal'}>Salal</Button>
        <Button className={classes.oregongrape} component={Link} to={'/oregon-grape'}>Oregon Grape</Button>
        <Button className={classes.ovalleafblueberry} component={Link} to={'/oval-leaf-blueberry'}>Oval-Leaf Blueberry</Button>
        <Button className={classes.blackhuckleberry} component={Link} to={'/black-huckleberry'}>Black Huckleberry</Button>
        <Button className={classes.bogblueberry} component={Link} to={'/bog-blueberry'}>Bog Blueberry</Button>
        <Button className={classes.evergreenhuckleberry} component={Link} to={'/evergreen-huckleberry'}>Evergreen Huckleberry</Button>
      </Paper>
    </React.Fragment>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);
