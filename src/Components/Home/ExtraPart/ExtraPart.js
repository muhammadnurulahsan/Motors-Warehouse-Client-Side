import React from "react";
import "./ExtraPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const ExtraPart = () => {
  return (
    <div>
      <h1 className="title-text py-5 mx-4">
        What do <span className="text-warning">You Want?</span>
      </h1>
      <div className="extra-banner">
        <div className="col-12 d-flex justify-content-evenly flex-wrap mx-auto">
          <div className="col-md-3 col-sm-1 mt-5 pt-5">
            <div className="card border-0 shadow-lg px-5">
              <div className="card-body py-5 px-0">
                <FontAwesomeIcon icon={faCar} className="fa-4x pb-5" />
                <h3 className="card-title-text">LOOKING FOR A CAR?</h3>
                <p className="custom-card-text py-3">
                  Our cars are delivered fully-registered with all requirements
                  completed. We’ll deliver your car wherever you are.
                </p>
                <button className="btn btn-primary fw-bold px-4 py-2 shadow none">
                  INVENTORY
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-1 mt-5 pt-5 mb-0 sm-mb-5">
            <div className="card bg-warning  border-0 shadow-lg px-5">
              <div className="card-body border-none py-5 px-0">
                <FontAwesomeIcon icon={faCar} className="fa-4x pb-5" />
                <h3 className="card-title-text">WANT TO SELL A CAR?</h3>
                <p className="custom-card-text py-3">
                  Receive the absolute best value for your trade-in vehicle. We
                  even handle all paperwork. Schedule appointment!
                </p>
                <button className="btn btn-primary fw-bold px-4 py-2 shadow none">
                  SELL YOUR CAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPart;
