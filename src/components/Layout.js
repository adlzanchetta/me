import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <header className="masthead bg-primary text-white text-center" >
        <div className="container d-flex align-items-center flex-column">
          {/*<!-- Masthead Avatar Image-->*/}
          <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." height={"1px"} />
          
          {/*<!-- Masthead Heading-->*/}
          <h1 className="text-uppercase mb-0">&nbsp;</h1>
        </div>
      </header>
      <div className="content central">
        { children }
      </div>
      <footer className="footer text-center">
          <div className="container">
                <div className="row">
                    {/*<!-- Footer Location-->*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                      Left
                    </div>
                    {/*<!-- Footer Social Icons-->*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                      Powered by React, Gatsby, Bootstrap, Coffee
                    </div>
                    {/*<!-- Footer About Text-->*/}
                    <div className="col-lg-4">
                      Right
                    </div>
                </div>
          </div>
      </footer>
    </div>
  )
}