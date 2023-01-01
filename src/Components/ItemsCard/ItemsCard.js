import React from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemsCard.css";
import axios from "axios";

const ItemsCard = ({ items }) => {
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const handleDelivered = () => {
    const newQuantity = parseInt(items.quantity) - 1;
    axios
      .put(`https://motors-warehouse-server-side.vercel.app/items/${id}`, {
        newQuantity,
      })
      .then((res) => console.log("updated"));
  };

  const {
    _id,
    productName,
    img,
    price,
    rate,
    quantity,
    supplierName,
    description,
  } = items;

  const navigate = useNavigate();

  return (
    <div>
      <div className="col ms-md-0 mt-5 px-0 text-start">
        <div className="card h-100 shadow-lg  border-0 ms-auto custom-width">
          <div className="mx-3 my-3 rounded">
            <img src={img} className="card-img-top rounded" alt="" />
          </div>
          <div className="card-body mx-3">
            <h1 className="name-text">{productName}</h1>
            <div className="d-flex justify-content-between">
              <div className="">
                <h5 className="price-text my-2 fw-bold">Price: ${price}</h5>
                <h5 className="quantity-text py-1 fw-bold">
                  Quantity: {quantity}
                </h5>
              </div>
              <div>
                <p className="supplier-text my-2">Supplier: {supplierName}</p>
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
                // onClick={() => handleDelivered()}
                onClick={
                  user ? () => handleDelivered() : () => navigate("/login")
                }
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
