import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const blogQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM D")
      }
      body
    }
  }
`

const BlogPost = ({data}) => {
  return(
    <div>
      <p>{ data.mdx.frontmatter.title }</p>
      <p>{ data.mdx.frontmatter.date }</p>

      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>
    </div>
  )
};

export default BlogPost;