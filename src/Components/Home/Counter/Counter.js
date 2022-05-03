import React from "react";
import "./Counter.css";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="pb-5 mb-5">
      <div className="col-12 d-flex justify-content-evenly flex-wrap">
        <div className="col-md-2 col-sm-1 text-center pb-sm-0 pb-5">
          <h2 className="custom-number-text">
          <CountUp end={17600} duration={20} /> <br />{" "}
            <span className="custom-counter-text">CARS FOR SALE</span>
          </h2>
        </div>
        <div className="col-md-2 col-sm-1 text-center pb-sm-0 pb-5">
          <h2 className="custom-number-text">
          <CountUp end={3500} duration={20} /> <br />{" "}
            <span className="custom-counter-text">DEALER REVIEWS</span>
          </h2>
        </div>
        <div className="col-md-2 col-sm-1 text-center pb-sm-0 pb-5">
          <h2 className="custom-number-text">
          <CountUp end={6230} duration={20} /> <br />{" "}
            <span className="custom-counter-text">VISITORS PER DAY</span>
          </h2>
        </div>
        <div className="col-md-2 col-sm-1 text-center me-0 me-sm-5">
          <h2 className="custom-number-text">
            <CountUp end={2250} duration={20} /> <br />{" "}
            <span className="custom-counter-text">VERIFIED DEALERS</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
