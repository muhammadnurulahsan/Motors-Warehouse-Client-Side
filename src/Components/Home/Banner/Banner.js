import React from "react";
import slide1 from "./../../../assets/slide_1.jpg";
import slide2 from "./../../../assets/slide_2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption carousel-text">
              <h1 className="title-text  mb-3">Mercedes-Benz AMG GT 2022</h1>
              <div className="d-flex justify-content-center">
                <h4 className="number-text me-2 ">$320</h4>
                <h4 className="small-text mb-5 ">/MO</h4>
              </div>
              <h3 className="months-text mb-5">FOR 36 MONTHS</h3>
              <div className="d-flex justify-content-center">
                <div className="me-4">
                  <button className="btn btn-outline-light fw-bold px-4 py-2 shadow none">
                    Test Drive
                  </button>
                </div>
                <div className="ms-4">
                  <button className="btn btn-primary fw-bold px-4 py-2 shadow none">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100  slider-img" alt="..." />
            <div className="carousel-caption carousel-text">
              <h1 className="title-text  mb-3">2022 TOYOTA HIGHLANDER</h1>
              <div className="d-flex justify-content-center">
                <h4 className="number-text me-2 ">$499</h4>
                <h4 className="small-text mb-5 ">/MO</h4>
              </div>
              <h3 className="months-text mb-5">0% APR Representative</h3>
              <div className="d-flex justify-content-center">
                <div className="me-4">
                  <button className="btn btn-outline-light fw-bold px-4 py-2 shadow none">
                    Test Drive
                  </button>
                </div>
                <div className="ms-4">
                  <button className="btn btn-primary fw-bold px-4 py-2 shadow none">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
