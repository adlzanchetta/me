import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
    </nav>
  )
}