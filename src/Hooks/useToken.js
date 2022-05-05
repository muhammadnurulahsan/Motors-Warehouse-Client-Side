import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://motors-warehouse.herokuapp.com/login",
          {
            email,
          }
        );
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
