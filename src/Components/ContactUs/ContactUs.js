import React from "react";
import "./Contact.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      swal({
        title: "Massage Sent Successfully!",
        text: "We will get back to you as soon as Possiable!",
        icon: "success",
      });
      navigate("/");
    }
  };
  return (
    <div>
      <div className="contact-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">Contact Us</h1>
          <h5 className="ms-4 text-light">
            Home <span className="contact-normal-text">/ Contact Us</span>
          </h5>
        </div>
      </div>

      <div className="container py-5 my-5">
        <div className="row d-flex flex-md-nowrap flex-wrap my-5 justify-content-center align-items-center">
          <div className="col-12 col-md-6 mx-2">
            <div className="mx-5">
              <h1 className="contact-title-text">Contact Us Now</h1>
              <p className="contact-normal-text">
                Please get in touch and our expert support <br />
                team will answer all your questions.
              </p>
              <p className="contact-title-text pt-4">Address</p>
              <p className="contact-normal-text">
                375 E 58th St Brooklyn, NY 11203, United States
              </p>
              <p className="contact-title-text pt-4">Phone Number & Email</p>
              <p className="contact-normal-text mb-0">+1 010 582 5006</p>
              <p className="contact-normal-text">motors@gmail.com</p>
            </div>
          </div>
          <div className="col-12 col-md-5 mx-5">
            <div className="card border-0">
              <div className="card-body shadow-lg card-custom-padding">
                <div className="contact-form-container">
                  <div className="contact-form">
                    <h1 className="text-center">Send Me a Message!</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <div className="contact-input-wrapper">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name*"
                            className="normal-text w-100"
                          />
                        </div>
                      </div>
                      <div className="input-field my-3">
                        <label htmlFor="email">Email</label>
                        <div className="contact-input-wrapper">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email*"
                            className="normal-text w-100"
                          />
                        </div>
                      </div>
                      <div className="msg-input-field my-3">
                        <label className="ms-2 mb-2" htmlFor="text">
                          Massage
                        </label>
                        <div className="msg-contact-input-wrapper">
                          <textarea
                            type="text"
                            name="message"
                            id="text"
                            className="normal-text w-100"
                            placeholder="Enter Your Massage*"
                          />
                        </div>
                      </div>
                      <button type="submit" className="contact-form-submit">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
