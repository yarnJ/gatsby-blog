import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ConnectPage = () => {

  const connectData = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
  `);

  return(
    <main>
      <p>Connect</p>
      <h1>{ connectData.site.siteMetadata.title }</h1>
      <h2>{ connectData.site.siteMetadata.description }</h2>
    </main>
  )
};

export default ConnectPage;