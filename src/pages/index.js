import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Navigtaion from "../components/Navigation/NavigationBar";
import {PathLine} from 'react-svg-pathline'

const styles = theme => ({
  paperChart: {
    margin: '1.5em auto 5em auto',
    padding: '1em',
    maxWidth: '32em',
    position: 'relative',
    height: '1500px',
  },
  svg: {
    position: 'absolute',
    left: '10px',
    width: '90%',
    height: '400px',
  },
});

function MainPage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
        <Paper className={classes.paperChart} rounded={true} elevation="10">
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 150 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:105, y: 100}, {x:175, y:160}, {x:170, y:190}, {x:120, y:230}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#ee4c52"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 322 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:145, y: 120}, {x:175, y:160}, {x:170, y:220}, {x:120, y:250}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#c42127"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 420 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:105, y: 100}, {x:175, y:160}, {x:170, y:190}, {x:120, y:230}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#261135"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 503 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:145, y: 120}, {x:175, y:160}, {x:170, y:220}, {x:120, y:250}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#4259a8"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 574 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:105, y: 100}, {x:175, y:160}, {x:170, y:190}, {x:120, y:230}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#4259a8"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 720 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:105, y: 100}, {x:175, y:160}, {x:170, y:190}, {x:120, y:230}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#2b3990"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
          <svg preserveAspectRatio="none" viewBox="0 0 200 300" style={{ top: 822 }} className={classes.svg} xmlns="http://www.w3.org/2000/svg" >
            <PathLine 
                points={[{x:0, y:0}, {x:145, y: 120}, {x:175, y:160}, {x:170, y:220}, {x:120, y:250}, {x:0, y:300}]} 
                stroke="#ffffff"
                strokeWidth="1"
                fill="#27163f"
                fillOpacity="0.75"
                r={10}
                />
          </svg>
        </Paper>
      <Navigtaion />
    </React.Fragment>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);


