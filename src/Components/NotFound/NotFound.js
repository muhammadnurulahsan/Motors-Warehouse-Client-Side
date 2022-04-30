import React from "react";
import "./NotFound.css";
import notFound from "../../assets/404.jpg";

import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pe-3 my-5">
      <div className="ps-3">
        <img className="w-100" src={notFound} alt={notFound} />
      </div>
      <h1 className="text-danger my-4 ms-4 text-center">
        The page you are looking for doesn't exist.
      </h1>
      <div>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn fs-5 btn-outline-secondary py-2 px-4"
        >
          Go back to our Homepage.
        </button>
      </div>
    </div>
  );
};

export default NotFound;
