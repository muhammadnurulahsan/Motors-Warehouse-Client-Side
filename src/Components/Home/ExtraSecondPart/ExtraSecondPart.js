import React from "react";
import "./ExtraSecondPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faComment,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
const ExtraSecondPart = () => {
  return (
    <div className="my-5 py-5">
      <h1 className="title-text mx-4">
        WELCOME <span className="text-warning">TO MOTORS</span>
      </h1>
      <h5 className="text-center mx-5  py-5 my-5">
        With specialists on hand to help with any part of the car shopping or
        vehicle ownership experience, Motors provides financing, <br /> car
        service and a great selection of vehicles for luxury car shoppers in
        Chicago, IL. Motors is ultimate Car Dealer, <br />
        Automotive, Auto Dealer.
      </h5>
      <div className="col-12 d-flex justify-content-evenly flex-wrap mx-auto ">
        <div className="col-md-3 col-sm-1 mb-5 pb-5 mb-sm-0 pb-sm-0">
          <div className="border-0 d-lg-flex d-md-flex shadow-lg px-4 pt-4">
            <div className="me-4">
              <FontAwesomeIcon icon={faGaugeHigh} className="fa-4x pb-5" />
            </div>
            <div className="card-body px-0">
              <h4 className="title-font fw-bold">WIDE RANGE OF BRANDS</h4>
              <p className="normal-text">
                With a robust selection of popular vehicles on hand, as well as
                leading vehicles from BMW.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-1 mb-5 pb-5 mb-sm-0 pb-sm-0 ">
          <div className="border-0 d-lg-flex d-md-flex shadow-lg px-4 pt-4">
            <div className="me-4">
              <FontAwesomeIcon icon={faComment} className="fa-4x pb-5" />
            </div>
            <div className="card-body border-none px-0">
              <h4 className="title-font fw-bold">SERVICE & MAINTENANCE</h4>
              <p className="normal-text">
                Our service department maintain your car to stay safe on the
                road for many more years.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-1 mb-0 sm-mb-5">
          <div className="border-0 d-lg-flex d-md-flex shadow-lg px-4 pt-4">
            <div className="me-4">
              <FontAwesomeIcon icon={faClipboardList} className="fa-4x pb-5" />
            </div>
            <div className="card-body border-none px-0">
              <h4 className="title-font fw-bold">WIDE RANGE OF BRANDS</h4>
              <p className="normal-text">
                With a robust selection of popular vehicles on hand, as well as
                leading vehicles from BMW.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSecondPart;
