import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://motors-warehouse-server-side.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);
  return [items, setItems];
};

export default useItems;
