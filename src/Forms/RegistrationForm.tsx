import React, { useState, useContext } from "react";
import validation from "../Auth/SignUpValidation";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import jwtDecode from "jwt-decode";
// import { AuthContext } from "../contexts/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// const REGISTRATION_URL = "/auth";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form onSubmit={registerUser}>
        <div className="text-center mb-3">
          <p>Sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faTwitter} />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>

        <p className="text-center">or:</p>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          {/* <span>
            {errMsg.name && <span className="text-danger">{errMsg.name}</span>}
          </span> */}
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <span>
            {errMsg.email && (
              <span className="text-danger">{errMsg.email}</span>
            )}
          </span> */}
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <span>
            {errMsg.password && (
              <span className="text-danger">{errMsg.password}</span>
            )}
          </span> */}
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-block mb-3">
          Register
        </button>
        {/* <input type="submit" value="Register" /> */}
      </form>
    </>
  );
};

export default RegistrationForm;
