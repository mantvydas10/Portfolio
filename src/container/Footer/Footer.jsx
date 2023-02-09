import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const formDataCopy = { ...formData };
    const formErrorCopy = { ...formError };

    if (!formDataCopy.name.trim()) {
      formIsValid = false;
      formErrorCopy.name = "Name is required";
    }

    if (!formDataCopy.email.trim()) {
      formIsValid = false;
      formErrorCopy.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        formDataCopy.email
      )
    ) {
      formIsValid = false;
      formErrorCopy.email = "Email is not valid";
    }

    if (!formDataCopy.message.trim()) {
      formIsValid = false;
      formErrorCopy.message = "Message is required";
    }

    if (formIsValid) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else {
      setFormError(formErrorCopy);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mandreikevicius@gmail.com" className="p-text">
            mandreikevicius@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +370 678 08980" className="p-text">
            +370 678 08980
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            {formError.name && <p className="error">{formError.name}</p>}
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            {formError.email && <p className="error">{formError.email}</p>}
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            {formError.message && <p className="error">{formError.message}</p>}
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
