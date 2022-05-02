import React from "react";
import "./AddItem.css";

const AddItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                      <label htmlFor="name">Product Name</label>
                      <div className="add-item-input-wrapper">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Product Name*"
                          className="normal-text w-100"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="name mt-2">Product Price</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="number"
                            name="price"
                            id="name"
                            placeholder="Enter Your Product Price*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="name mt-2">Product Quantity</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="number"
                            name="quantity"
                            id="name"
                            placeholder="Enter Your Product Quantity*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="name mt-2">Image URL</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="link"
                            name="img"
                            id="name"
                            placeholder="Enter Your Image URL*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="name mt-2">Product Rating</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="number"
                            name="rating"
                            id="name"
                            placeholder="Enter Your Product Rating*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-sm-wrap">
                      <div className="half-input-field me-3">
                        <label htmlFor="name mt-2">Supplier Name</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="text"
                            name="supplierName"
                            id="name"
                            placeholder="Enter Your Supplier Name*"
                            className="normal-text"
                          />
                        </div>
                      </div>
                      <div className="half-input-field">
                        <label htmlFor="name mt-2">Supplier Email</label>
                        <div className="mt-2 half-input-wrapper">
                          <input
                            type="email"
                            name="supplierEmail"
                            id="name"
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
                          id="text"
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
