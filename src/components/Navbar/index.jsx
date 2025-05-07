import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`link ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            className="nav-link"
            to="/Header"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/course"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/Admission"
            onClick={() => setIsOpen(false)}
          >
            Admission
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/Contact"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
