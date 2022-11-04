import { Link } from "gatsby"
import React from "react"
import { Button } from "antd";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top bg-white" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="/"><strong>A</strong>ndre D. L. <strong>Z</strong>anchetta</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/portifolio">Portfolio</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/cv">C.V.</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

/*
export default function Navbar() {
  return (
    <nav>
      <div className="central">
        <div style={{width:"40%", float:"left"}}> Andre D. L. Zanchetta</div>
        <div style={{width:"59%", float:"right"}}>
          <Link to="/">Home</Link>
          <Link to="/me/cv">CV</Link>
          <Button to="/me/cv" >CVs</Button>
        </div>
      </div>
      <hr />
    </nav>
  )
}
*/