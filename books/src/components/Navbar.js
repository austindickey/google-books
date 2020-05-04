import React from "react"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="logo" href="/">
        Logo {/* <img src={window.location.origin + "/img/logo.png"} alt="Logo"/> */}
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/">Home</a>
        <a className="nav-item nav-link" href="/saved">Saved</a>
      </div>
    </nav>
  )
}

export default Navbar