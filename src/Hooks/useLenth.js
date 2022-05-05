import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useLenth = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`https://motors-warehouse.herokuapp.com/items?email=${email}`, {
        headers: { authorization: `${localStorage.getItem("token")}` },
      })
      .then((data) => {
        if (data.status === 403) {
          navigate("/login");
          signOut(auth);
        }
        setMyItems(data.data);
      });
  }, [email, myItems, navigate]);
  return [myItems, setMyItems];
};

export default useLenth;
