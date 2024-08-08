import React from 'react';
import { Link } from "react-router-dom";
import monk from './monk.png';

const Navbar = ({handleRefetch}) => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">

          {/* Left Side */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/business" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Health</Link>
              </li>
            </ul>
          </div>

          {/* Center Heading */}
          <div className="d-flex justify-content-center flex-grow-1">
            <Link className="navbar-brand" onClick={handleRefetch} to="/" style={{fontFamily:"cursive",color:"#FF5733", fontSize:"x-large"}}>
            || News <img src={monk} alt="🧘" height={'35px'} width={'35px'}/> Monk ||
            </Link>
          </div>

          {/* Right Side */}
          <div className="collapse navbar-collapse d-flex justify-content-end pe-3">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{fontFamily:"monospace",color:"green", margin: "0 10px"}}>Technology</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
}

export default Navbar;
