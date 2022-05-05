import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://motors-warehouse.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);
  return [items, setItems];
};

export default useItems;
