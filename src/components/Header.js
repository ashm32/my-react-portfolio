import React from 'react';
import { Link } from 'react-router-dom';
import './assests/css/style.css';
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Users/ayshahmalik/Downloads/react portfolio/my-portfolio/src/components/Home.js">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Users/ayshahmalik/Downloads/react portfolio/my-portfolio/src/components/Projects.js">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Users/ayshahmalik/Downloads/react portfolio/my-portfolio/src/components/Contact.js">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
