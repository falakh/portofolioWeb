import React from "react";
import '../asset/AppBar.css'



export function Appbar() {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
      id="mainNav"
    >
      <div className="container" id="page-top">
        <a className="navbar-brand" href="#page-top">
          Brand
        </a>
        <button
          className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
