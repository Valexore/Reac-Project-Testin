import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './componentsDesign/navBarDesign.scss';

function NavBar() {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);

  const toggleFeature = () => {
    setIsFeatureOpen(!isFeatureOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          YourLogo
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">
              Blog
            </Link>
          </li>
          <li 
            className="navbar-item feature-item"
            onMouseEnter={toggleFeature}
            onMouseLeave={toggleFeature}
          >
            <div className="navbar-link feature-link">
              Features <span className="dropdown-arrow">▼</span>
            </div>
            {isFeatureOpen && (
              <ul className="feature-dropdown">
                <li className="dropdown-item">
                  <Link to="/features/design" className="dropdown-link">
                    Design
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/features/development" className="dropdown-link">
                    Development
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/features/marketing" className="dropdown-link">
                    Marketing
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/features/support" className="dropdown-link">
                    Support
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;