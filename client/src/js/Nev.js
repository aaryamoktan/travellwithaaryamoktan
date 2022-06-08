import React from "react";
import { Link } from "react-router-dom";
import "../css/nev.css";
import { useDispatch, useSelector } from "react-redux";
const Nev = (apple) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Travell
        </a>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About-us
              </Link>
            </li>{" "}
            <li className="nav-item active">
              <Link className="nav-link" to="/package">
                Gallery
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Booked">
                Booked
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to="/regis">
              
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Registration
              </button>
            </Link>
            <Link to="/login">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Nev;
