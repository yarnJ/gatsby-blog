import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return(
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Layout pageTitle="connect"/>

      <Layout pageTitle="about"></Layout>
      <Layout pageTitle="blog" path="blog-page/blog">
      </Layout>
    </main>
  )
  };

export default IndexPage;