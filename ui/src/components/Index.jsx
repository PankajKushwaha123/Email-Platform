import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "../assets/css/oneui.min.css";
import img1 from "../assets/media/photos/photo28@2x.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Indx() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setLoading(true);
    const email = username;
    axios
      .post("https://apis.mailmort.co/users/login", { email, password })
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 7 }); // expires in 7 days
        navigate("/inbox");
        setLoading(false);
      })
      .catch((err) => {
        alert("incorrect credentials");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <div id="page-container">
        <main id="main-container">
          <div className="bg">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="row g-0 bg-primary-dark-op">
              <div className="hero-static col-lg-4 d-none d-lg-flex flex-column justify-content-center">
                <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                  <div className="w-100">
                    <a className="link-fx fw-semibold fs-2 text-white">
                      Mail<span className="fw-normal">Mort</span>
                    </a>
                    <p className="text-white-75 me-xl-8 mt-2">
                      Welcome to your amazing app. Feel free to login and start
                      managing your projects and clients.
                    </p>
                  </div>
                </div>
                <div className="p-4 p-xl-5 d-xl-flex justify-content-between align-items-center fs-sm">
                  <p className="fw-medium text-white-50 mb-0">
                    <strong>MailMort</strong> &copy;{" "}
                    <span data-toggle="year-copy"></span>
                  </p>
                  <ul className="list list-inline mb-0 py-2">
                    <li className="list-inline-item">
                      <a className="text-white-75 fw-medium" href="#">
                        Legal
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white-75 fw-medium" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white-75 fw-medium" href="#">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hero-static col-lg-8 d-flex flex-column align-items-center bg-body-light">
                <div className="p-3 w-100 d-lg-none text-center">
                  <a
                    className="link-fx fw-semibold fs-3 text-dark"
                    href="index.html"
                  >
                    Mail<span className="fw-normal">Mort</span>
                  </a>
                </div>
                <div className="p-4 w-100 flex-grow-1 d-flex align-items-center">
                  <div className="w-100">
                    <div className="text-center mb-5">
                      <p className="mb-3">
                        <i className="fa fa-2x fa-circle-notch text-primary-light"></i>
                      </p>
                      <h1 className="fw-bold mb-2">Sign In</h1>
                      <p className="fw-medium text-muted">
                        Welcome, please login or{" "}
                        <Link to="/Register">
                          <a>sign up </a>
                        </Link>
                        for a new account.
                      </p>
                    </div>

                    <div className="row g-0 justify-content-center">
                      <div className="col-sm-8 col-xl-4">
                        <form
                          className="js-validation-signin"
                          action="be_pages_auth_all.html"
                          method="POST"
                        >
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="login-username"
                              name="login-username"
                              placeholder="Username"
                              value={username}
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="login-password"
                              name="login-password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                              <a
                                className="text-muted fs-sm fw-medium d-block d-lg-inline-block mb-1"
                                href="forgot.html"
                              >
                                Forgot Password?
                              </a>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-lg btn-alt-primary"
                                onClick={handleSubmit}
                                disabled={loading}
                              >
                                <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>{" "}
                                Sign In
                              </button>
                              {loading && (
                                <div className="flex items-center justify-center">
                                  <div
                                    className="spinner-border text-primary"
                                    role="status"
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between fs-sm text-center text-sm-start">
                  <p className="fw-medium text-black-50 py-2 mb-0">
                    <strong>MailMort</strong> &copy;{" "}
                    <span data-toggle="year-copy"></span>
                  </p>
                  <ul className="list list-inline py-2 mb-0">
                    <li className="list-inline-item">
                      <a className="text-muted fw-medium" href="#">
                        Legal
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted fw-medium" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted fw-medium" href="#">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Indx;
