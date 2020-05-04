import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Saved from "./components/pages/Saved"

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
  )
}

export default App