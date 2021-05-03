import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container-fluid bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to='/' className="text-decoration-none">
            <a className="navbar-brand fw-bold" href=" ">Ecommerce</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/cart' className="text-decoration-none">
                <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href=" ">Cart</a>
                </li>
              </Link>
              <Link to='/profile' className="text-decoration-none">
                <li className="nav-item">
                 <a className="nav-link active" href=" ">Profile</a>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
