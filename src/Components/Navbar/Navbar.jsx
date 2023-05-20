import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 fixed-top">
  <div className="container">
    <a className="navbar-brand fw-bold fs-3" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link fs-4 me-3" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4 me-3" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4 me-3" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4 me-3" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
