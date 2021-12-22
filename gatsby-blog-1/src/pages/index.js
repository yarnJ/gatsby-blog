import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);
  return(
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        <h3 key={node.id}>{node.html}</h3>
      })}
      <Layout pageTitle="connect"/>

      <Layout pageTitle="about"></Layout>
    </main>
  )
  };

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`