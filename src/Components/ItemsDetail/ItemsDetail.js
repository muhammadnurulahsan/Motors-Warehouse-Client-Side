import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemsDetail.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";

const ItemsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    axios
      .get(`https://motors-warehouse.herokuapp.com/items/${id}`)
      .then((data) => setItems(data.data));
  }, [id, items]);

  const handleDelivered = () => {
    const newQuantity = parseInt(items.quantity) - 1;
    axios
      .put(`https://motors-warehouse.herokuapp.com/items/${id}`, {
        newQuantity,
      })
      .then((res) => console.log("updated"));
    toast("Successfully! Delivered This Item.");
  };

  const handleRestock = (e) => {
    e.preventDefault();
    let restockValue = e.target.name.value;
    const newQuantity = parseInt(restockValue) + parseInt(items.quantity);
    axios
      .put(`https://motors-warehouse.herokuapp.com/items/${id}`, {
        newQuantity,
      })
      .then((res) => console.log(res.data));
    e.target.reset();
    swal({
      title: "Successfully! Restock This Item.",
      text: "You Can Now Check It!",
      icon: "success",
    });
  };

  const {
    productName,
    img,
    price,
    quantity,
    supplierName,
    rating,
    description,
  } = items;
  return (
    <div>
      <div className="items-details-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">Item Details</h1>
          <h5 className="ms-4 text-light">
            Home
            <span className="header-normal-text">
              {" "}
              / Item Details / {productName}
            </span>
          </h5>
        </div>
      </div>

      <div className="container my-5">
        <div className="row flex-column-reverse flex-md-row d-flex justify-content-evenly align-items-center">
          <div className="col-12 col-md-4 text-start py-5">
            <h1 className="text-center">Item Details</h1>
            <hr />
            <h5 className="py-2 normal-text">{description}</h5>
            <div className="pt-3 me-4">
              <h6 className="details-title-text">Name: {productName}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <h6 className="details-title-text">Price: ${price}</h6>
              </div>
              <div className="pt-3">
                <h6 className="details-title-text">Supplier: {supplierName}</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <h6 className="details-title-text">Quantity: {quantity}</h6>
              </div>
              <div className="pt-3">
                <h6 className="details-title-text">
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon
                    className="me-2 text-warning"
                    icon={faStarHalfStroke}
                  />
                  {rating} (1,000+)
                </h6>
              </div>
            </div>
            <div className="my-3 d-flex d-flex justify-content-evenly">
              <button
                onClick={() => handleDelivered()}
                className="py-2 px-3 my-3 btn btn-outline-secondary rounded-pill shadow-lg none"
              >
                Delivered
              </button>
              <button
                className="py-2 px-3 my-3 btn btn-outline-warning rounded-pill shadow-lg none"
                onClick={() => navigate("/manage-inventories")}
              >
                Manage Inventories
              </button>
            </div>

            <form className="shadow-lg px-4 pb-1 pt-4" onSubmit={handleRestock}>
              <div className="items-details-input-field">
                <div className="input-wrapper">
                  <input
                    type="number"
                    name="name"
                    className="normal-text w-100"
                    placeholder="Enter Your Restock Item Number*"
                  />
                </div>
              </div>
              <div className="py-3">
                <button type="submit" className="reset-form-submit">
                  Restock
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
          <div className="col-12 col-md-5">
            <img
              className="rounded-3 border-0 shadow-lg img-fluid"
              height="500px"
              width="650px"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetail;
