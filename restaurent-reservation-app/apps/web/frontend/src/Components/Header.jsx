import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; 
import '../index.css';
import Avatar from "../Components/Avatar"
function Header() {
  return (
    <header>
      {/* Desktop Header */}
      <div className="container header d-none d-lg-flex rounded-pill text-center ">
        <div className="logo ">
          <Link to="/home">
            <i className="fa text-center fa-utensils me-3 py-4"></i>
            <h1 className="mb-0">Restaurant Management System</h1>
          </Link>
        </div>
        <div className="menus">
          <ul className="d-flex mb-0">
            <li className="list-unstyled py-2">
              <Link className="text-decoration-none text-uppercase p-4" to="/home">
                Home
              </Link>
            </li>
            
            <li className="list-unstyled py-2">
              <Link className="text-decoration-none text-uppercase p-4" to="/about">About</Link>
            </li>
            <li className="list-unstyled py-2">
              <a className="text-decoration-none text-uppercase p-4" href="./reservation.html">Reservation</a>
            </li>
            <li className="list-unstyled py-2">
              <a className="text-decoration-none text-uppercase p-4" href="./menu.html">Menu</a>
            </li>
            <li className="list-unstyled py-2">
              <a className="text-decoration-none text-uppercase p-4" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <a className="text-decoration-none" id="searchBtn" href="#">
            <i className="fa fa-search me-3"></i>
          </a>
          <a className="text-decoration-none" id="shoppingbutton" href="#">
            <i className="fa fa-shopping-bag me-3"></i>
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="d-flex justify-content-around py-3 align-items-center d-lg-none">
        <div id="hamburger">
          <i className="fa fa-2x fa-bars me-3 text-white"></i>
        </div>
        <div className="mobile-nav-logo">
          <div className="logo">
            <a href="./index.html">
              <i className="fa fa-utensils me-3"></i>
              <h1 className="mb-0">Restaurant Managment System</h1>
            </a>
          </div>
        </div>
        <div className="mobile-nav-icons">
          <div className="icons">
            <a className="text-decoration-none" id="searchBtnMobile" href="#">
              <i className="fa fa-search me-3"></i>
            </a>
            <a className="text-decoration-none" id="shoppingbuttonMobile" href="#">
              <i className="fa fa-shopping-bag me-3"></i>
            </a>
          </div>
        </div>
        <div className="position-fixed w-75 bg-white h-100 top-0 start-0" id="mobile-menu">
          <div id="hamburger-cross" className="d-flex justify-content-end align-items-center py-2">
            <i className="fa fa-2x fa-plus me-3"></i>
          </div>
          <div className="menus">
            <ul className="d-flex flex-column ps-2 mb-0 mt-4">
              <li className="list-unstyled py-2">
                <a className="text-dark text-decoration-none text-uppercase p-4" href="./index.html">Home</a>
              </li>
              <li className="list-unstyled py-2">
                <a className="text-dark text-decoration-none text-uppercase p-4" href="./about.html">About</a>
              </li>
              <li className="list-unstyled py-2">
                <a className="text-dark text-decoration-none text-uppercase p-4" href="./reservation.html">Reservation</a>
              </li>
              <li className="list-unstyled py-2">
                <a className="text-dark text-decoration-none text-uppercase p-4" href="./menu.html">Menu</a>
              </li>
              <li className="list-unstyled py-2">
                <a className="text-dark text-decoration-none text-uppercase p-4" href="./contact.html">Contact</a>
              </li>
              <li><Avatar/></li>
            </ul>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
