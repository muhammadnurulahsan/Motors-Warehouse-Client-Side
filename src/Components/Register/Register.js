import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";
import Loading from "../Loading/Loading";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  if (loading || updating) {
    return <Loading />;
  }

  if (error) {
    swal({
      title: `${error?.message}`,
      icon: "error",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (password.length >= 6) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      // window.location.href = from;
      navigate(from);
      swal({
        title: "Account created!",
        text: "Please check your email to verify your account.",
        icon: "success",
      });
    } else {
      swal({
        title: "Password must be at least 6 characters long.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="register-form-container my-5 my-sm-0">
        <div className="register-form">
          <h1 className="mt-4">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="register-input-field">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  ref={nameRef}
                  type="text"
                  className="normal-text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Full Name*"
                  required
                />
              </div>
            </div>
            <div className="register-input-field">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  ref={emailRef}
                  type="text"
                  className="normal-text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email*"
                  required
                />
              </div>
            </div>
            <div className="register-input-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  className="normal-text"
                  ref={passwordRef}
                  name="password"
                  id="password"
                  placeholder="Enter your password*"
                  required
                />
              </div>
            </div>
            <button type="submit" className="register-form-submit">
              Register
            </button>
          </form>
          <div className="horizontal-divider mt-4">
            <div className="line-left" />
            <p>or</p>
            <div className="line-right" />
          </div>
          <p className="redirect">
            Already have an account?
            <Link className="ms-3 text-decoration-none" to="/login">
              Please Login!
            </Link>
          </p>
          <div></div>
        </div>
        <div className="register-bg-img"></div>
      </div>
    </div>
  );
};

export default Register;
