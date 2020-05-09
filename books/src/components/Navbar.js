import React, {useState} from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [route, setRoute] = useState(window.location.pathname)

  function getRoute(name) {
    setRoute(name)
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="logo" href="/">
        <img src={window.location.origin + "/img/bookstack.png"} alt="Logo"/>
      </a>
      <div className="navbar-nav">
        <Link onClick={() => getRoute("/")} to="/" className={route === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link onClick={() => getRoute("/saved")} to="/saved" className={route === "/saved" ? "nav-link active" : "nav-link"}>
          Saved
        </Link>
      </div>
    </nav>
  )
}

export default Navbar