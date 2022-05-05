import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../Api/axiosPrivate";
import auth from "../firebase.init";

const useLenth = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const email = user?.email;

  useEffect(() => {
    const getItems = async () => {
      const url = `https://motors-warehouse.herokuapp.com/user?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyItems(data);
      } catch (error) {
        console.log(error.massage);
        if (error.response.status === 401 || error.response.status === 403) {
          // navigate("/login");
        }
        // signOut(auth);
      }
    };
    getItems();
  }, [email, user, navigate, myItems]);

  return [myItems, setMyItems];
};

export default useLenth;
