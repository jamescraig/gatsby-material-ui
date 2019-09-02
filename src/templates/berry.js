import React from 'react';
import { Link } from "gatsby";
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
      <Link to="/">Go Back</Link>
      <h1>{berry.name}</h1>
      <h2><em>{berry.latin}</em></h2>
      <a href={berry.wikilink} rel="noopener noreferrer" target="_blank">Wikipedia Article</a>
      <p>{berry.Clade}</p>
      <p>{berry.Order}</p>
      <p>{berry.Family}</p>
      <p>{berry.range}</p>
      <p>{berry.berry}</p>
      <hr />
      <h3>What does the {berry.name} look like?</h3>
      <img className={classes.fluidImage} src={berry.berryimg} alt={berry.name} />
      <h3>What does the {berry.name} flower look like?</h3>
      <img className={classes.fluidImage} src={berry.flowerimg} alt={berry.name} />
      <h3>The {berry.name} plant</h3>
      <img className={classes.fluidImage} src={berry.wideimg1} alt={berry.name} />
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