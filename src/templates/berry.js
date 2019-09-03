import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout.js'
import Button from '@material-ui/core/Button';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Book from '@material-ui/icons/Book';

const styles = {
  fluidImage: {
    width: 'auto',
    maxWidth: '100%',
  },
  extWikiLink: {
    float: 'right',
  }
}

const Tastyberry = ({data, classes}) => {
  var berry = data.allSitePage.edges[0].node.context
  return (
    <Layout>
      <Button to="/" component={Link}><KeyboardBackspace />&nbsp;Back</Button>
      <Button className={classes.extWikiLink} href={berry.wikilink} rel="noopener noreferrer" target="_blank"><Book />&nbsp;Wikipedia Article</Button>
      <h1>{berry.name} <br/><em>{berry.latin}</em></h1>
      <h3>{berry.Family} &mdash; {berry.Order} &mdash; {berry.Clade}</h3>
      <p>{berry.range}</p>
      <p>{berry.berry}</p>
      <h2>{berry.name} fruit</h2>
      <img className={classes.fluidImage} src={berry.berryimg} alt={berry.name} />
      <h2>{berry.name} flower</h2>
      <img className={classes.fluidImage} src={berry.flowerimg} alt={berry.name} />
      <h2>{berry.name} plant</h2>
      <img className={classes.fluidImage} src={berry.wideimg1} alt={berry.name} />
      <hr />
    </Layout>
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