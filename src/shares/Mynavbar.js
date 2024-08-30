import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom";

function Mynavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Application
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Dashboard</a></li>
              <li><a className="dropdown-item" href="#">modules1</a></li>
              <li><a className="dropdown-item" href="#">modules2</a></li>
              <li><a className="dropdown-item" href="#">modules3</a></li>
              <li><a className="dropdown-item" href="#">modules4</a></li>
              <li><a className="dropdown-item" href="#">modules5</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://api.whatsapp.com/send/?phone=+91-8409285776&text=Hi%21&type=phone_number&app_absent=0" ><FaWhatsapp /></Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>  )
}

export default Mynavbar