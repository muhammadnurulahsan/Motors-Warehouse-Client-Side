import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-font">
      <div className="news-latter">
        <div className="container d-flex justify-content-center align-items-center flex-wrap px-md-5 px-0  text-white">
          <div className="d-flex flex-wrap mx-5">
            <h3 className="px-md-5 px-0 mt-3 text-center">
              HAVE A QUESTIONS? FEEL FREE TO ASK...
            </h3>
            <div className="px-md-5 px-3 flex-grow-1 d-flex justify-content-center align-items-center mt-2">
              <Button variant="btn btn-outline-light py-2 fs-5 px-4 shadow none">
                Get Started!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container container ps-md-5 ps-0">
          <div className="row d-flex justify-content-between">
            <div className="footer-col col-12 col-md-2">
              <h4 className="custom-padding online text-light">MY ACCOUNT</h4>
              <ul>
                <li>
                  <Link to="#account">Account</Link>
                </li>
                <li>
                  <Link to="#ourshop">Payment</Link>
                </li>
                <li>
                  <Link to="#checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="#addtocart">Add To Cart</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col col-12 col-md-2">
              <h4 className="custom-padding Get text-light">INFORMATION</h4>
              <ul>
                <li>
                  <Link to="#aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="#blogarticle">Blog Article</Link>
                </li>
                <li>
                  <Link to="#ourservices">All Services</Link>
                </li>
                <li>
                  <Link to="#shoppingcart">Shopping Cart</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col col-12 col-md-3 text-color">
              <h4 className="custom-padding online text-light">
                SERVICE HOURS
              </h4>
              <ul>
                <li>
                  <Link to="#">Friday: 09:00AM – 09:00PM</Link>
                </li>
                <li>
                  <Link to="#">Saturday: 09:00AM – 07:00PM</Link>
                </li>
                <li>
                  <Link to="#">Sunday: 09:00AM – 07:00PM</Link>
                </li>
                <li>
                  <Link to="#">Monday: 09:00AM – 07:00PM</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col col-12 col-md-3 ps-5 ps-md-0">
              <h4 className="follow text-light">follow us</h4>
              <div className="social-links">
                <Link to="#icon">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </Link>
                <Link to="#icon">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Link>
                <Link to="#icon">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link to="#icon">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </Link>
              </div>
              <div className="">
                <div className="pt-3 d-flex align-items-center">
                  <img
                    src={logo}
                    width="180px"
                    style={{ marginRight: "15px" }}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-color text-light text-center py-3 fw-lighter">
        <span> Developed By Muhammad Nurul Ahsan</span>
        <div>
          <span>© 2022 Motors Company | All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
