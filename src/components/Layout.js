import React, { useState } from "react"

import Navbar from "./Navbar"
import '../styles/global.css'
import { base_url } from "../env/globals"

// Header - copyied from web
const HeaderCopyied = () => {
  return (
    <header className="masthead bg-primary text-white text-center" >
      <div className="container d-flex align-items-center flex-column">
        {/*<!-- Masthead Avatar Image-->*/}
        <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." height={"1px"} />
          
        {/*<!-- Masthead Heading-->*/}
        <h1 className="text-uppercase mb-0">ABC</h1>
      </div>
    </header>
  );
}

// Header - flex
// from: https://www.youtube.com/watch?v=P4RqNEAqKJk
const HeaderFlex = () => {

  // set up hooks
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header-myflex">
      <div className="header-container-myflex">
        <h1 className="header-myflex">
          <a href={`${base_url}`}>
            <strong>A</strong>ndre D. L. <strong>Z</strong>anchetta
          </a>
        </h1>
        <nav>
          <div className={`menu ${menuActive ? 'active': ''} `}>
            <ul>
              <li>
                <a href={`${base_url}portfolio`}>Portfolio</a>
              </li>
              <li>
                <a href={`${base_url}cv`}>C.V.</a>
              </li>
              <li>
                <a href={`${base_url}contact`}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-list-icon" onClick={ () => {setMenuActive(!menuActive); }} >
            Menu
          </div>
        </nav>
      </div>
    </header>
  )
}

// Main content component (Bootstrap-heavy)
const Main = ({ children }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-1 sm-0" />
          <div className="col-lg-6 col-md-8 col-sm-10 sm-12">
            { children }
          </div>
          <div className="col-lg-3 col-md-2 col-sm-1 sm-0" />
        </div>
      </div>
    </main>
  );
}

const FooterBootstrap = () => {
  return (
    <footer className="footer text-center">
          <div className="container">
                <div className="row">
                    {/*<!-- Footer Location-->*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">&nbsp;</div>
                    {/*<!-- Footer Social Icons-->*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                      Powered by React, Gatsby, Flexbox, CSS Grid, and some coffee.
                    </div>
                    {/*<!-- Footer About Text-->*/}
                    <div className="col-lg-4">&nbsp;</div>
                </div>
          </div>
    </footer>
  );
}

/* eventual fits */
/* Navbar + HeaderCopyied */
/* HeaderFlex */



export default function Layout({ children }) {
  return (
    <div className="layout">
      {/*
      <Navbar />
      <HeaderCopyied />
      */}
      <HeaderFlex />
      <Main >{ children}</Main>
      <FooterBootstrap />
    </div>
  )
}