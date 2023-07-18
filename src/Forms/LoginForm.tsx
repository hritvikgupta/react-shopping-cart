import React, { useRef, useState, useEffect, useContext } from "react";
// import { AuthContext } from "../contexts/AuthProvider";
import axios from "../api/axios";
import validation from "../Auth/LoginValidation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorMessageBar from "../error/errorMessageBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const LOGIN_URL = "/auth";
const LoginForm: React.FC = () => {
  // const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data.status);
      if (data.status === "ok" && data.user) {
        setSuccess(true);
        // localStorage.setItem("token", data.user);
        navigate("/store");
      } else {
        setErrorMessage(data.message || "An error occurred");
        setSuccess(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const closeError = () => {
    setErrorMessage("");
  };

  return (
    <>
      {errorMessage && (
        <ErrorMessageBar message={errorMessage} onClose={closeError} />
      )}
      {
        <form onSubmit={loginUser}>
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
              type="email"
              id="loginName"
              // ref={userRef}
              className="form-control"
              placeholder="Email or username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              required
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
              id="loginPassword"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              required
            />
            {/* <span>
            {errMsg.password && (
              <span className="text-danger">{errMsg.password}</span>
            )}
          </span> */}
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginCheck"
                  checked
                />
                <label className="form-check-label" htmlFor="loginCheck">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            {success ? (
              <Link to="/store">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign In
                </button>
              </Link>
            ) : (
              <button type="submit" className="btn btn-primary btn-block mb-3">
                Sign In
              </button>
            )}
            <br />
          </div>
          {/* <input type="submit" value="Sign in" /> */}

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </form>
      }
    </>
  );
};

export default LoginForm;
