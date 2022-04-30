import axios from "axios";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const axiosPrivate = axios.create({});
// Add a request interceptor
axiosPrivate.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return config;
  },
  function (error) {
    const navigate = useNavigate();
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");
      signOut(auth);
      navigate("/login");
    }
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivate.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosPrivate;
