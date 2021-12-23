import * as React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import { Link } from 'gatsby';

const BlogPage = () => {

  const blogData = useStaticQuery(graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          date(formatString: "YYYY MMMM D")
          title
        }
        body
      }
    }
  }
`);

  return (
      <div>
        <p>My cool posts will go in here</p>
        {blogData.allMdx.nodes.map(node => (
          <article  key={node.id}>
            <h3 key={node.frontmatter.date}>Poseted: { node.frontmatter.date }</h3>
            <Link to={`/blog/${node.slug}`}>
              <h2>{ node.frontmatter.title }</h2>
            </Link>
          </article >
        ))}
      </div>
  )
}

export default BlogPage