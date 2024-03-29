import React from "react";
import useItems from "../../Hooks/useItems";
import "./ManageInventories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const ManageInventories = () => {
  const [items, setItems] = useItems();

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
            if (data.acknowledged) {
              swal("Item has been deleted!", {
                icon: "success",
              });
            }
            const newItems = items?.filter((item) => item._id !== id);
            setItems(newItems);
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
        <h1 className="manage-title-text  pb-1">
          Inventory Items: {items?.length}
        </h1>
        <div className="container d-flex justify-content-end mb-4">
          <Link to="/add-item">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faCirclePlus} className="me-2 fa-xl" />
              Add Item
            </button>
          </Link>
        </div>
        <div className="container pb-5">
          <div className="bg-white rounded shadow p-4">
            {items.length === 0 ? (
              <Loading></Loading>
            ) : (
              <div className="px-2 py-2 px-sm-4 py-sm-4">
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
                    {items?.map((item, index) => (
                      <tr key={item?._id}>
                        <th className="pt-3" scope="row">
                          {index + 1}
                        </th>
                        <td className="py-2">
                          <img
                            className="rounded"
                            width="60px"
                            src={item?.img}
                            alt="img"
                          />
                        </td>
                        <td width="300px" className="pt-3">
                          {item?.productName}
                        </td>
                        <td className="text-center pt-3">{item?.price}</td>
                        <td className="text-center pt-3">{item?.quantity}</td>
                        <td className="text-center py-3">
                          {item?.supplierName}
                        </td>
                        <td className="text-center pt-3">
                          {item?.supplierEmail}
                        </td>
                        <td className="text-center pt-3">
                          <button className="btn p-0 shadow-none">
                            <span className="badge bg-success">Delivered</span>
                          </button>
                        </td>
                        <td width="150px" className="text-center pt-2">
                          <Link
                            className="text-decoration-none text-light"
                            to={`/items/${item?._id}`}
                          >
                            <button className="mx-3 mt-1 btn btn-primary shadow none py-1">
                              <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="mx-1 btn mt-1 btn-danger shadow none py-1"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
