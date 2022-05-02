import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./MyItems.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import axiosPrivate from "../../Api/axiosPrivate";
import useItems from "../../Hooks/useItems";

const MyItems = () => {
  // const [user] = useAuthState(auth);
  // const [myItems, setMyItems] = useState([]);
  const [items, setItems] = useItems();
  // const email = user?.email;

  // useEffect(() => {
  //   axiosPrivate
  //     .get(
  //       `https://inventory-management-site.herokuapp.com/inventory?email=${email}`,
  //       {
  //         headers: {
  //           authorization: `${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     )
  //     .then((data) => setItems(data.data));
  // }, [items, setItems, email]);

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
      <div className="my-items-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">My Items</h1>
          <h5 className="ms-4 text-light">
            Home <span className="header-normal-text">/ My Items</span>
          </h5>
        </div>

        <div className="container pb-5">
          <div className="bg-white rounded shadow p-4">
            <div className="px-2 py-2 px-sm-5 py-sm-5">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Product Name</th>
                    <th className="text-center" scope="col">
                      Quantity
                    </th>
                    <th className="text-center" scope="col">
                      Supplier
                    </th>
                    <th className="text-center" scope="col">
                      Rating
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
                    <tr key={item._id}>
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
                        {item?.name}
                      </td>
                      <td className="text-center pt-3">{item?.quantity}</td>
                      <td className="text-center py-3">{item?.supplier}</td>
                      <td className="text-center pt-3">{item?.rate}</td>
                      <td className="text-center pt-3">{item?.email}</td>
                      <td className="text-center pt-3">
                        {item?.orderStatus === "CONFIRM" ? (
                          <span className="badge bg-success">Delivered</span>
                        ) : (
                          <span className="badge bg-warning">PENDING</span>
                        )}
                      </td>
                      <td width="150px" className="text-center pt-2">
                        <Link
                          className="text-decoration-none text-light"
                          to={`/items/${item._id}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
