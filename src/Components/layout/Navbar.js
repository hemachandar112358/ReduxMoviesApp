import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 d-inline-block align-top">
          <i className="fas fa-film fas-2x"></i>
          <Link to="/">Movies Info</Link>
        </span>
        <Link to="/about" className="nav-link mr-auto">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
