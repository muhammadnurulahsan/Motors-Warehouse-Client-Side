import {
  faPenToSquare,
  faSquarePlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useLenth from "../../Hooks/useLenth";
import "./MyItems.css";

const MyItems = () => {
  const [myItems, setMyItems, isLoading] = useLenth();
  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If OK, items will be deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://motors-warehouse-server-side.vercel.app/items/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Item has been deleted!", {
                icon: "success",
              });
            }
            const newItems = myItems?.filter((item) => item._id !== id);
            setMyItems(newItems);
          });
      } else {
        swal("Successfully! Item Info is Safe!", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <div className="my-items-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">My Items</h1>
          <h5 className="ms-4 text-light">
            Home <span className="header-normal-text">/ My Items</span>
          </h5>
        </div>

        <div className="container py-5">
          <div className="bg-white rounded shadow p-4">
            <div className="px-2 py-2 px-sm-4 py-sm-4">
              {myItems.length > 0 ? (
                <>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th className="text-center" scope="col">
                          Price
                        </th>
                        <th className="text-center" scope="col">
                          Quantity
                        </th>
                        <th className="text-center" scope="col">
                          Supplier
                        </th>
                        <th className="text-center" scope="col">
                          Email
                        </th>
                        <th className="text-center" scope="col">
                          Status
                        </th>
                        <th className="text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myItems?.map((myItem, index) => (
                        <tr key={myItem?._id}>
                          <th className="pt-3" scope="row">
                            {index + 1}
                          </th>
                          <td className="py-2">
                            <img
                              className="rounded"
                              width="60px"
                              src={myItem?.img}
                              alt="img"
                            />
                          </td>
                          <td width="300px" className="pt-3">
                            {myItem?.productName}
                          </td>
                          <td className="text-center pt-3">{myItem?.price}</td>
                          <td className="text-center pt-3">
                            {myItem?.quantity}
                          </td>
                          <td className="text-center py-3">
                            {myItem?.supplierName}
                          </td>
                          <td className="text-center pt-3">
                            {myItem?.supplierEmail}
                          </td>
                          <td className="text-center pt-3">
                            <button className="btn p-0 shadow-none">
                              <span className="badge bg-success">
                                Delivered
                              </span>
                            </button>
                          </td>
                          <td width="150px" className="text-center pt-2">
                            <Link
                              className="text-decoration-none text-light"
                              to={`/items/${myItem?._id}`}
                            >
                              <button className="mx-3 mt-1 btn btn-primary shadow none py-1">
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  size="lg"
                                />
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(myItem?._id)}
                              className="mx-1 btn mt-1 btn-danger shadow none py-1"
                            >
                              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  {isLoading === true ? (
                    <div className="text-center py-3">
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <h1 className="py-3">
                        Data is loading, Please wait.....
                      </h1>
                    </div>
                  ) : (
                    <div className="py-5 text-center">
                      <h2 className="fw-bold">
                        You Haven't Added Any Items Yet!
                      </h2>
                      <div className="d-flex py-3 justify-content-center align-items-center">
                        <Link to="/add-item" className="text-decoration-none">
                          <button className="btn btn-outline-warning rounded-pill shadow none fs-5 px-4 py-2">
                            Add New
                            <FontAwesomeIcon
                              icon={faSquarePlus}
                              className="ms-2 fa-xl"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
