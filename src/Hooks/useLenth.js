import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../Api/axiosPrivate";
import auth from "../firebase.init";

const useLenth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const email = user?.email;

  useEffect(() => {
    const getItems = async () => {
      const url = `https://motors-warehouse-server-side.vercel.app/user?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.massage);
        if (error.response.status === 401 || error.response.status === 403) {
          // navigate("/login");
        }
        // signOut(auth);
      }
    };
    getItems();
  }, [email, user, navigate, myItems, isLoading, setIsLoading]);

  return [myItems, setMyItems, isLoading];
};

export default useLenth;
