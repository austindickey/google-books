import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="logo" href="/">
        Logo {/* <img src={window.location.origin + "/img/logo.png"} alt="Logo"/> */}
      </a>
      <div className="navbar-nav">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
          Saved
        </Link>
      </div>
    </nav>
  )
}

export default Navbar