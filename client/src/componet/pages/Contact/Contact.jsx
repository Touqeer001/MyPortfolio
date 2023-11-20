import React from "react";
import "./Conatct.css";
import contact from "../../../assets/images/contact.avif";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "this msg from Portfolio",
      to_email: email,
      message: msg,
    };

    emailjs
      .send(
        "service_iigbxzj",
        "template_hhx3r0a",
        templateParams,
        "aIDExbCzRAjv8ZovD"
      )
      .then(
        (response) => {
          console.log("Email Sent Successfully!", response);
          setName("");
          setEmail("");
          setMsg("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const linkedinProfileUrl = "https://www.linkedin.com/in/touqeer-ansari/";
  const GitHubProfileUrl = "https://github.com/Touqeer001";
  return (
    <>
      <Fade bottom>
        <div className="contact" id="contact">
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img src={contact} alt="contact" className="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href={linkedinProfileUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsLinkedin color="blue" size={30} />
                        </a>

                        <a
                          href={GitHubProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                      
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Contact;
