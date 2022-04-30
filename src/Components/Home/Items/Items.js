import React from "react";
import "./Items.css";
import useItems from "./../../../Hooks/useItems";
import ItemsCard from "./../../ItemsCard/ItemsCard";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();
  const [items] = useItems();
  return (
    <div>
      <div className="mt-5">
        <h1 className="title-text">
          INVENTORY RECENT <span className="text-warning">CARS</span>
        </h1>
        <h4 className="text-center my-5">
          Discover the latest range of Hyundai car models at Motors.
        </h4>
      </div>
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-3">
          {items.slice(0, 6).map((items) => (
            <ItemsCard key={items._id} items={items}></ItemsCard>
          ))}
        </div>
        <div className="d-flex justify-content-center my-5 pt-5">
          <button
            className="btn btn-outline-secondary py-2 px-5 fs-5 shadow-lg rounded-pill"
            onClick={() => navigate("/manage-inventories")}
          >
            Manage Inventories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
