import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor :"#FFF "}}>
          <div className="container p-2">
          <Link className="navbar-brand" to="/">
             <img src='media/images/logo.svg' alt='Logo' style={{width:"25%"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                 About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                 Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                 Support
                </Link>
              </li>
              </ul>
            </form>
          </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;