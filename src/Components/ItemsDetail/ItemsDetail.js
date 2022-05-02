import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import "./ItemsDetail.css";
import { axios } from "axios";
import useItemsDetail from "../../Hooks/useItemsDetail";
import { ToastContainer } from "react-toastify";

const ItemsDetail = () => {
  const { id } = useParams();
  const [items] = useItemsDetail(id);

  const handleDelivered = () => {
    const newQuantity = parseInt(items.quantity) - 1;
    axios
      .put(`http://localhost:5000/items/${id}`, {
        newQuantity,
      })
      .then((res) => console.log("updated"));
  };

  const handleRestock = (e) => {
    e.preventDefault();
    let restockValue = e.target.name.value;
    const newQuantity = parseInt(restockValue) + parseInt(items.quantity);
    axios
      .put(`http://localhost:5000/items/${id}`, {
        newQuantity,
      })
      .then((res) => console.log(res.data));
    e.target.reset();
  };

  const { name, img, price, quantity, supplier, rate, description } = items;
  return (
    <div>
      <div className="items-details-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">Item Details</h1>
          <h5 className="ms-4 text-light">
            Home
            <span className="header-normal-text"> / Item Details / {name}</span>
          </h5>
        </div>
      </div>

      <div className="container my-5">
        <div className="row flex-column-reverse flex-md-row d-flex justify-content-evenly align-items-center">
          <div className="col-12 col-md-4 text-start py-5">
            <h1 className="text-center">Items Details</h1>
            <hr />
            <h5 className="py-2 normal-text">{description}</h5>
            <div className="pt-3 me-4">
              <h6 className="details-title-text">Name: {name}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <h6 className="details-title-text">Price: ${price}</h6>
              </div>
              <div className="pt-3">
                <h6 className="details-title-text">Supplier: {supplier}</h6>
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
                  {rate}(1,000+)
                </h6>
              </div>
            </div>
            <div className="my-3 d-flex justify-content-evenly">
              <button
                onClick={() => handleDelivered()}
                className="py-2 px-5 my-3 btn btn-outline-secondary rounded-pill shadow-lg none"
              >
                Delivered
              </button>
            </div>


            <form onSubmit={handleRestock}>
              <div className="items-details-input-field">
                <div className="input-wrapper">
                  <input
                    type="number"
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
              className="rounded-3 shadow shadow-lg img-fluid"
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
