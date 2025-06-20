import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
function Logout() {
  useEffect(() => {
    Cookies.remove("token");

    Cookies.remove("name");

    Cookies.remove("email");
  }, []);
  return (
    <div id="page-container">
      <main id="main-container">
        <div className="bg-danger">
          <div className="row g-0 bg-primary-dark-op">
            <div className="hero-static col-lg-4 d-none d-lg-flex flex-column justify-content-center">
              <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                <div className="w-100">
                  <a
                    className="link-fx fw-semibold fs-2 text-white"
                    href="index.html"
                  >
                    Mail<span className="fw-normal">Mort</span>
                  </a>
                  <p className="text-white-75 me-xl-8 mt-2">
                    Thanks for using the service.
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
                    <h1 className="fw-bold mb-2">Logged Out!</h1>
                    <p className="fw-medium text-muted mb-5">
                      You can now close this tab.
                    </p>
                    <img
                      className="img-avatar img-avatar96"
                      src="../assets/media/avatars/avatar10.jpg"
                      alt=""
                    />
                    <Link to="/" className="btn btn-secondary">
                      Login
                    </Link>
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
  );
}

export default Logout;
