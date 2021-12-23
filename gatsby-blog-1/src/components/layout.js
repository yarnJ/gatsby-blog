/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ pageTitle, path }) => {
  return (
    <main>
      <Link to={`/${ path }`}>{ pageTitle }</Link>
    </main>
  )
}

export default Layout
