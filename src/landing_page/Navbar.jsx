import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary border-bottom"
      style={{ padding: "1.2rem 10rem" }}
    >
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          <img src="/media/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
