import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div id="page-container">
        <main id="main-container">
          <div className="bg-primary-dark">
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
                      Creating a new account is completely free. Get started
                      with a free account and feel free to upgrade as your
                      business grow.
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
                      <a
                        className="text-white-75 fw-medium"
                        href="javascript:void(0)"
                      >
                        Legal
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-white-75 fw-medium"
                        href="javascript:void(0)"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-white-75 fw-medium"
                        href="javascript:void(0)"
                      >
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
                    href="index"
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
                      <h1 className="fw-bold mb-2">Create Account</h1>
                      <p className="fw-medium text-muted">
                        Get your access today in one easy step
                      </p>
                    </div>

                    <div className="row g-0 justify-content-center">
                      <div className="col-sm-8 col-xl-4">
                        <form
                          className="js-validation-signup"
                          action="be_pages_auth_all.html"
                          method="POST"
                        >
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="signup-username"
                              name="signup-username"
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="email"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="signup-email"
                              name="signup-email"
                              placeholder="Personal Email"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="signup-username"
                              name="signup-username"
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="signup-password"
                              name="signup-password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-alt py-3"
                              id="signup-password-confirm"
                              name="signup-password-confirm"
                              placeholder="Confirm Password"
                            />
                          </div>
                          <div className="mb-4">
                            <div className="d-md-flex align-items-md-center justify-content-md-between">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="signup-terms"
                                  name="signup-terms"
                                />
                                <label
                                  className="form-check-label"
                                  for="signup-terms"
                                >
                                  I agree to Terms &amp; Conditions
                                </label>
                              </div>
                              <div className="py-2">
                                <a
                                  className="fs-sm fw-medium"
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#one-signup-terms"
                                >
                                  View Terms
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <Link to="/">
                              <button
                                type="button"
                                className="btn btn-lg btn-alt-success"
                              >
                                <i className="fa fa-fw fa-plus me-1 opacity-50"></i>{" "}
                                Sign Up
                              </button>
                            </Link>
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
                      <a
                        className="text-muted fw-medium"
                        href="javascript:void(0)"
                      >
                        Legal
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted fw-medium"
                        href="javascript:void(0)"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted fw-medium"
                        href="javascript:void(0)"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="one-signup-terms"
              tabindex="-1"
              role="dialog"
              aria-labelledby="one-signup-terms"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-popout"
                role="document"
              >
                <div className="modal-content">
                  <div className="block block-rounded block-transparent mb-0">
                    <div className="block-header block-header-default">
                      <h3 className="block-title">Terms &amp; Conditions</h3>
                      <div className="block-options">
                        <button
                          type="button"
                          className="btn-block-option"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div className="block-content">
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                    </div>
                    <div className="block-content block-content-full text-end bg-body">
                      <button
                        type="button"
                        className="btn btn-sm btn-alt-secondary me-1"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-dismiss="modal"
                      >
                        I Agree
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Register;
