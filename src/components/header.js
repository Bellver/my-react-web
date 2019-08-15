import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">Pablo Bellver</Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
)

export default Header
