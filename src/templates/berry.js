import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  fluidImage: {
    width: 'auto',
    maxWidth: '100%',
  },
}

const Tastyberry = ({data, classes}) => {
  var berry = data.allSitePage.edges[0].node.context
  return (
    <div>
      <p>{berry.name}</p>
      <p>{berry.latin}</p>
      <p>{berry.wikilink}</p>
      <p>{berry.Clade}</p>
      <p>{berry.Order}</p>
      <p>{berry.Family}</p>
      <p>{berry.range}</p>
      <p>{berry.berry}</p>
      <img className={classes.fluidImage} src={berry.berryimg} alt={berry.name} />
      <img className={classes.fluidImage} src={berry.flowerimg} alt={berry.name} />
      <img className={classes.fluidImage} src={berry.wideimg1} alt={berry.name} />
      <img className={classes.fluidImage} src={berry.image3} alt={berry.name} />
    </div>
  );
}

Tastyberry.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tastyberry);

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            latin
            wikilink
            Clade
            Order
            Family
            range
            identification
            berry
            berryimg
            flowerimg
            wideimg1
            image3
          }
        }
      }
    }
  }
`