import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import auth from "../../firebase.init";
import "./ResetPassword.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Successfully Sent Your Reset Email", {
          id: "resetEmailPassword",
        });
      })
      .catch(() => {
        toast("Sorry! Your Email input is empty", { id: "resetpassword" });
      });
  };

  return (
    <div>
      <div className="reset-form-container py-5">
        <div className="reset-form my-5">
          <h1 className="mt-4">Reset Password</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  className="normal-text"
                  id="email"
                  placeholder="Enter Your Email*"
                />
              </div>
            </div>
            <div className="py-3">
              <button type="submit" className="login-form-submit">
                Submit
              </button>
              <ToastContainer />
            </div>
            <h6
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
              className="normal-text text-center"
            >
              <FontAwesomeIcon className="me-3" icon={faArrowLeftLong} />
              Back to Login
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
