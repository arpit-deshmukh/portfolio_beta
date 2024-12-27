import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "grey" ,color:"white"}}>
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand" to="/">
          <img src="media/logo_beta.png" style={{ width: "150px" }} alt="Logo" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "#333" }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/qualifications" style={{ color: "#333" }}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" style={{ color: "#333" }}>PortFolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activities" style={{ color: "#333" }}>Activities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "#333" }}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
