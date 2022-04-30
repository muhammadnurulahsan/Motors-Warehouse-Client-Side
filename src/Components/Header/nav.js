import {
  faAngleDown,
  faBars,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../../img/logo.png";
import toggle from "./../../img/toggle.svg";
// import logo from "./../../Img/logo.svg";

import React from "react";
import "./Header.css";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const Header = () => {
  return (
    <div className="bg-color text-light pb-3 mb-3">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <nav className="navbar pt-3 container d-flex justify-content-evenly navbar-expand-lg navbar-light">
        <img className="me-3" width="200px" src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={toggle} alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center d-flex align-items-center me-3 ms-auto mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-3 underline"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-3 underline"
                aria-current="page"
                href="#special"
              >
                Special
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-2 underline"
                aria-current="page"
                href="#brand"
              >
                All Brands
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-3 underline"
                aria-current="page"
                href="#about"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-3 underline"
                aria-current="page"
                href="#delivery"
              >
                Delivery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light active fs-5 me-3 underline"
                aria-current="page"
                href="#blog"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="d-flex align-items-center ms-3">
              <div className="icon">
                <FontAwesomeIcon className="pt-2" icon={faUser} size="xl" />
              </div>
              <div>
                <h6 className="m-0">My Account</h6>
                <h6>Register</h6>
              </div>
            </div>
            <div className="d-flex align-items-center ms-4">
              <div className="icon text-center">
                <FontAwesomeIcon
                  className="love-icon"
                  icon={faHeart}
                  size="xl"
                />
              </div>
              <div>
                <h6 className="m-0">My Wishlist</h6>
                <h6>(0) items</h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
      <div>
        <div className="container d-flex justify-content-between align-items-center flex-md-row flex-column">
          <div>
            <Button
              className="py-3 px-4 text-light"
              variant="outline-secondary"
            >
              {" "}
              <FontAwesomeIcon className="me-2" icon={faBars} />
              All Categories{" "}
              <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
            </Button>
          </div>
          <div>
            <InputGroup className="my-3 input">
              <FormControl
                placeholder="Search Your Product Name"
                aria-label="Search Your Product Name"
                aria-describedby="basic-addon2"
              />
              <Button
                className="text-light"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </div>
          <div>
            <Button
              className="py-3 px-4 text-light"
              variant="outline-secondary"
            >
              <FontAwesomeIcon
                className="me-5 mt-1 position-absolute"
                icon={faCartShopping}
              />
              <span className=" position-relative top-5 end-0 translate-middle badge rounded-pill bg-danger">
                4
              </span>
              My Cart - $0.00
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
