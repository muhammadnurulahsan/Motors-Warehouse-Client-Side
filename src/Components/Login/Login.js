import React, { useEffect, useRef } from "react";
import "./Login.css";
import gImg from "../../assets/google.png";
import gitImg from "../../assets/github.png";
import fbImg from "../../assets/facebook.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Login = () => {
  const [user] = useAuthState(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, emailUser, loading, userError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (user || emailUser) {
    const url = "https://motors-warehouse-server-side.vercel.app/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }

  useEffect(() => {
    if (user || fbUser || gitUser || googleUser) {
      swal({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
      });
      navigate(from, { replace: true });
    }
  }, [user, fbUser, gitUser, googleUser, navigate, from]);

  if (userError || fbError || gitError || googleError) {
    swal({
      title: `${
        userError?.message ||
        fbError?.message ||
        gitError?.message ||
        googleError?.message
      }`,
      icon: "error",
    });
  }

  if (loading || fbLoading || gitLoading || googleLoading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="bg-img my-5 my-sm-0">
        <div className="login-form-container">
          <div className="login-form">
            <h1 className="mt-4">Login</h1>
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
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    ref={passwordRef}
                    name="password"
                    className="normal-text"
                    id="password"
                    placeholder="Enter Your Password*"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="my-2">Forget your Password?</p>
                <Link className="text-decoration-none my-2" to="/resetpassword">
                  Reset Password
                </Link>
              </div>
              <button type="submit" className="login-form-submit">
                Login
              </button>
            </form>
            <div className="horizontal-divider mt-4">
              <div className="line-left" />
              <p>or</p>
              <div className="line-right" />
            </div>
            <div className="d-flex justify-content-center my-3">
              <button
                onClick={() => signInWithGithub()}
                className="btn shadow rounded-pill me-4"
              >
                <img
                  height="45px"
                  width="40px"
                  src={gitImg}
                  alt="facebook-icon"
                />
              </button>
              <button
                onClick={() => signInWithGoogle()}
                className="btn shadow rounded-pill me-4"
              >
                <img src={gImg} height="45px" width="40px" alt="google-icon" />
              </button>
              <button
                onClick={() => signInWithFacebook()}
                className="btn shadow rounded-pill me-4"
              >
                <img height="45px" width="42px" src={fbImg} alt="github-icon" />
              </button>
            </div>
            <p className="redirect">
              Don't have an account?
              <Link className="ms-3 text-decoration-none" to="/register">
                Please Register!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
