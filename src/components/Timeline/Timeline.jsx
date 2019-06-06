import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Berrylines from './berry-lines.svg';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Paper className={classes.paperChart} rounded={true} elevation="10">
        <img className={classes.svg} src={Berrylines} alt={'Berry Timeline'} />
        <Button className={classes.salmonberry} onClick={handleOpen}>Salmonberry</Button>
        <Button className={classes.redhuckleberry}>Red Huckleberry</Button>
        <Button className={classes.redelderberry}>Red Elderberry</Button>
        <Button className={classes.thimbleberry}>Thimbleberry</Button>
        <Button className={classes.blackcapraspberry}>Blackcap Raspberry</Button>
        <Button className={classes.trailingblackberry}>Trailing Blackberry</Button>
        <Button className={classes.himalayanblackberry}>Himalayan Blackberry</Button>
        <Button className={classes.salal}>Salal</Button>
        <Button className={classes.oregongrape}>Oregon Grape</Button>
        <Button className={classes.ovalleafblueberry}>Oval-Leaf Blueberry</Button>
        <Button className={classes.blackhuckleberry}>Black Huckleberry</Button>
        <Button className={classes.bogblueberry}>Bog Blueberry</Button>
        <Button className={classes.evergreenhuckleberry}>Evergreen Huckleberry</Button>
      </Paper>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Paper className={classes.modalPaper}>
          <Typography variant="h6" id="modal-title">
            Salmonberry
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Rubus spectabilis
          </Typography>
          <Typography variant="body1">
            Native to the west coast of North America from west central Alaska to California, inland as far as Idaho. Salmonberries are found in moist forests and stream margins, especially in the coastal forests. In open areas they often form large thickets, and thrive in the open spaces under stands of red alder (Alnus rubra).
          </Typography>
        </Paper>
      </Modal>
    </React.Fragment>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);
