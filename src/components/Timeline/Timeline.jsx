import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Berrylines from './berry-lines.svg';

// const primary = deepPurple[800];
const styles = theme => ({
  paperChart: {
    margin: '1.5em auto 5em auto',
    padding: '1em',
    maxWidth: '48em',
    position: 'relative',
  },
  svg: {
    position: 'relative',
    margin: '20% 0',
  },
});

function Timeline(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Paper className={classes.paperChart} rounded={true} elevation="10">
        <img className={classes.svg} src={Berrylines} alt={'Berry Timeline'} />
      </Paper>
    </React.Fragment>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);
