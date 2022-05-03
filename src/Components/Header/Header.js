import {
  faArrowCircleRight,
  faCartFlatbed,
  faSignInAlt,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../../assets/logo.svg";

import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useItems from "../../Hooks/useItems";
import useLenth from "../../Hooks/useLenth";

const Header = () => {
  const [items] = useItems();
  const [myItems] = useLenth()
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <div className="bg-color text-light sticky-top">
      <Navbar className="container p2-4  p-1" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="me-3" width="180px" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" />
          <Navbar.Collapse>
            <Nav className="mx-auto text-center my-lg-0">
              <Nav.Link className="text-light underline fs-5" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link
                className="text-light underline fs-5"
                as={Link}
                to="/blogs"
              >
                Blogs
              </Nav.Link>
              {user && (
                <Nav.Link
                  className="text-light underline fs-5"
                  as={Link}
                  to="/add-item"
                >
                  Add Item
                </Nav.Link>
              )}
              <Nav.Link
                className="text-light underline fs-5"
                as={Link}
                to="/contact-us"
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              {!user && (
                <>
                  <div className="d-flex align-items-center ms-3">
                    <div className="icon">
                      <FontAwesomeIcon
                        className="pt-2"
                        icon={faUser}
                        size="xl"
                      />
                    </div>
                    <div>
                      <h6 className="m-0">My Account</h6>
                      <Link
                        as={Link}
                        to="/login"
                        className="m-0 text-light text-decoration-none"
                      >
                        <small>LOG IN</small>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <div className="icon text-center text-light">
                      <FontAwesomeIcon
                        className="love-icon"
                        icon={faArrowCircleRight}
                        size="xl"
                      />
                    </div>
                    <Link
                      className="text-light text-decoration-none"
                      as={Link}
                      to="/register"
                    >
                      <h6 className="m-0">Register</h6>
                    </Link>
                  </div>
                </>
              )}
              {user && (
                <>
                  <div className="d-flex align-items-center ms-3">
                    <div className="icon">
                      <FontAwesomeIcon
                        className="pt-2"
                        icon={faUser}
                        size="xl"
                      />
                    </div>
                    <div>
                      {user ? (
                        <h6 className="m-0">{user?.displayName}</h6>
                      ) : (
                        <h6 className="m-0">User</h6>
                      )}
                    </div>
                  </div>
                  <div
                    onClick={handleLogOut}
                    className="d-flex align-items-center ms-4"
                    role="button"
                  >
                    <div className="icon">
                      <FontAwesomeIcon
                        className="love-icon"
                        icon={faSignInAlt}
                        size="xl"
                      />
                    </div>
                    <div>
                      <h6 className="m-0">Log Out</h6>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="my-0" />
      <div>
        <div className="container d-flex justify-content-between align-items-center flex-md-row flex-column">
          <div>
            {user && (
              <Button
                as={Link}
                to="/manage-inventories"
                className="py-2 px-4 mt-3 mt-sm-0 text-light shadow none rounded-pill position-relative"
                variant="outline-secondary"
              >
                <FontAwesomeIcon icon={faWarehouse} className="me-2" />
                <span className="start-0 top-0 translate-middle badge rounded-pill bg-danger position-absolute">
                  {items?.length}
                </span>
                Manage Inventories
              </Button>
            )}
          </div>

          <div className="mx-auto">
            <InputGroup className="my-3 input">
              <FormControl
                className=" shadow none"
                placeholder="Search Your Product Name"
                aria-label="Search Your Product Name"
                aria-describedby="basic-addon2"
              />
              <Button
                className="text-light shadow none"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </div>
          <div>
            {user && (
              <Button
                as={Link}
                to="/my-items"
                className="py-2 px-4 mb-3 mb-sm-0 text-light shadow none position-relative rounded-pill"
                variant="outline-secondary"
              >
                <FontAwesomeIcon className="me-2 mt-1" icon={faCartFlatbed} />
                <span className=" position-absolute start-100 top-0 translate-middle badge rounded-pill bg-danger">
                  {myItems?.length}
                </span>
                My Items
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
