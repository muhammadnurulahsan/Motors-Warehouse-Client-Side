import { useEffect, useState } from "react";

const useItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setIsLoading(false);
  }, [items]);
  return [items, setItems, isLoading];
};

export default useItems;
