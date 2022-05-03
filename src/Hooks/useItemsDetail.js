import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemsDetail = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [id, items, setItems]);
  return [items, id];
};

export default useItemsDetail;
