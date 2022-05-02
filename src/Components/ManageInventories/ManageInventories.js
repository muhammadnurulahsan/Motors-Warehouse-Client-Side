import React from "react";
import useItems from "../../Hooks/useItems";
import "./ManageInventories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { swal } from "sweetalert";
import { Link } from "react-router-dom";
const ManageInventories = () => {
  const [items, setItems] = useItems();

  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If deleted, items will be canceled!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://frozen-ocean-73745.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Booking has been Canceled!", {
                icon: "success",
              });
            }
            const newItems = items.filter((item) => item._id !== id);
            setItems(newItems);
          });
      } else {
        swal("Item Info is Safe!");
      }
    });
  };
  return (
    <div>
      <div className="manage-inventory-bg-img">
        <div className="container py-1 py-sm-5">
          <h1 className="big-text ms-2 ms-sm-4">Manage Inventories</h1>
          <h5 className="ms-4 text-light">
            Home{" "}
            <span className="header-normal-text">/ Manage Inventories</span>
          </h5>
        </div>
      </div>

      <div className="bg-body-color py-5">
        <h1 className="manage-title-text  pb-1">Inventory Items: {items.length}</h1>
        <div className="container d-flex justify-content-end mb-4">
          <Link to="/add-item">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faCirclePlus} className="me-2 fa-xl" />
              Add Item
            </button>
          </Link>
        </div>
        <div className="container pb-5">
          <div className="row bg-white rounded shadow p-4">
            <div className="">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th scope="col">#</th>
                    <th scope="col">Booking ID</th>
                    <th scope="col">Booking ID</th>
                    <th scope="col">Booking ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item, index) => (
                    <tr className="text-center">
                      <th scope="roEDw">{index + 1}</th>
                      <td>{item?._id}</td>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>
                        {item?.orderStatus === "CONFIRM" ? (
                          <span className="badge bg-success">CONFIRMED</span>
                        ) : (
                          <span className="badge bg-warning">PENDING</span>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="mx-1 btn btn-danger shadow-none py-1"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
