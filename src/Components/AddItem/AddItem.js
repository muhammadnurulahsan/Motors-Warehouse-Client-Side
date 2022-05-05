import React from "react";
import "./AddItem.css";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.productName.value === "" ||
      e.target.price.value === "" ||
      e.target.quantity.value === "" ||
      e.target.img.value === "" ||
      e.target.rating.value === "" ||
      e.target.description.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      const fromData = {
        productName: e.target.productName.value,
        price: e.target.price.value,
        quantity: parseInt(e.target.quantity.value),
        supplierName: e.target.supplierName.value,
        supplierEmail: e.target.supplierEmail.value,
        img: e.target.img.value,
        rating: e.target.rating.value,
        description: e.target.description.value,
      };
      fetch("https://motors-warehouse.herokuapp.com/items", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(fromData),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      swal({
        title: "Successfully! Added Your Item",
        text: "Now You Can Check It!",
        icon: "success",
      });
      navigate("/my-items");
    }
  };

  return (
    <div>
      <div className="add-item-bg-img ">
        <div className="container py-5">
          <h1 className="big-text ms-4">Add Items</h1>
          <h5 className="ms-4 text-light">
            Home <span className="header-normal-text">/ Add Items</span>
          </h5>
        </div>
      </div>

      <div className="bg-body-color py-5">
        <h1 className="text-center manage-title-text">Add New Item</h1>
        <div className="container card-size py-5">
          <div className="card border-0">
            <div className="card-body shadow-lg card-custom-padding">
              <div className="add-item-form-container">
                <div className="add-item-form">
                  <form onSubmit={handleSubmit}>
                    <div className="input-field">
                      <label htmlFor="productName">Product Name</label>
                      <div className="add-item-input-wrapper">
                        <input
                          type="text"
                          name="productName"
                          id="productName"
                          placeholder="Enter Your Product Name*"
                          className="normal-text w-100"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="price mt-2">Product Price</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Enter Your Product Price*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="quantity mt-2">Product Quantity</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            placeholder="Enter Your Product Quantity*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="img mt-2">Image URL</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="link"
                            name="img"
                            id="img"
                            placeholder="Enter Your Image URL*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="rating mt-2">Product Rating</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            // type="number"
                            name="rating"
                            id="rating"
                            placeholder="Enter Your Product Rating*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="supplierName mt-2">Supplier Name</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            disabled
                            type="text"
                            value={user.displayName}
                            id="supplierName"
                            placeholder="Enter Your Supplier Name*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="supplierEmail mt-2">
                          Supplier Email
                        </label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            disabled
                            type="email"
                            value={user.email}
                            id="supplierEmail"
                            placeholder="Enter Your Supplier Email*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="msg-input-field mt-3">
                      <label className="ms-2 mb-2" htmlFor="text">
                        Description
                      </label>
                      <div className="msg-add-item-input-wrapper">
                        <textarea
                          type="text"
                          name="description"
                          id="description"
                          className="normal-text  w-100"
                          placeholder="Enter Your Product Description*"
                        />
                      </div>
                    </div>
                    <button type="submit" className="add-item-form-submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
