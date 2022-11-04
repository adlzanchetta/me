import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content central">
            { children }
        </div>
        <footer>
            <p>My feet</p>
        </footer>
    </div>
  )
}