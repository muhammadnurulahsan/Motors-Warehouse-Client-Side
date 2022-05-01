import React from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemsCard.css";

const ItemsCard = ({ items }) => {
  const { _id, name, img, price, rate, quantity, supplier, description } =
    items;

  const navigate = useNavigate();

  return (
    <div>
      <div className="col ms-md-0 mt-5 px-0 text-start">
        <div className="card h-100 shadow-lg  border-0 ms-auto custom-width">
          <div className="mx-3 my-3 rounded">
            <img src={img} className="card-img-top rounded" alt="" />
          </div>
          <div className="card-body mx-3">
            <h1 className="name-text">{name}</h1>
            <div className="d-flex justify-content-between">
              <div className="">
                <h5 className="price-text my-2 fw-bold">Price: ${price}</h5>
                <h5 className="quantity-text py-1 fw-bold">Quantity: {quantity}</h5>
              </div>
              <div>
                <p className="supplier-text my-2">Supplier: {supplier}</p>
                <div className="py-1 fw-bold">
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon
                    className="me-2 text-warning"
                    icon={faStarHalfStroke}
                  />
                  {rate} (1,000+)
                </div>
              </div>
            </div>
            <p className="normal-text">{description}</p>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => navigate(`/items/${_id}`)}
                className="me-3 btn btn-outline-success px-4 mb-2 rounded-pill shadow-lg"
              >
                Update
              </button>
              <button
                // onClick={() => navigate(`/services/${_id}`)}
                className="btn btn-outline-warning px-5 mb-2 rounded-pill shadow-lg"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
