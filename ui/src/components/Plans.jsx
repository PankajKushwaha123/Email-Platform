import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function Plans() {
  return (
    <div
      id="page-container"
      className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    >
      <Navigationbar />
      <Header />
      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Plans & Pricing</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Explore current plan benefits or upgrade for more.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="javascript:void(0)">
                      Plans
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Overview
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Plans</h3>
              <div className="block-options">
                <button type="button" className="btn btn-sm btn-secondary">
                  <i className="fa fa-arrow-up"></i> Upgrade
                </button>
              </div>
            </div>
            <div className="block-content block-content-full">
              <form action="#" method="POST" onsubmit="return false;">
                <div className="row items-push">
                  <div className="col-md-4">
                    <div className="form-check form-block">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="example-radio-block1"
                        name="example-radio-block"
                      />
                      <label
                        className="form-check-label"
                        for="example-radio-block1"
                      >
                        <span className="d-block fw-normal text-center my-3">
                          <span className="fs-4 fw-semibold">Free</span>
                          <span className="d-block fs-2 fw-light py-3 m-3 bg-body-light rounded">
                            $0<small> /m</small>
                          </span>
                          <span className="d-block mb-2">100 projects</span>
                          <span className="d-block mb-2">10 clients</span>
                          <span className="d-block mb-2">10GB</span>
                          <span className="d-block mb-2">Email Support</span>
                          <span className="d-block mb-2">100 projects</span>
                          <span className="d-block mb-2">10 clients</span>
                          <span className="d-block mb-2">10GB</span>
                          <span className="d-block mb-2">Email Support</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-block">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="example-radio-block2"
                        name="example-radio-block"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="example-radio-block2"
                      >
                        <span className="d-block fw-normal text-center my-3">
                          <span className="fs-4 fw-semibold">Pro</span>
                          <span className="d-block fs-2 fw-light py-3 m-3 bg-body-light rounded">
                            $49<small> /m</small>
                          </span>
                          <span className="d-block mb-2">1000 projects</span>
                          <span className="d-block mb-2">50 clients</span>
                          <span className="d-block mb-2">100GB</span>
                          <span className="d-block mb-2">Full Support</span>
                          <span className="d-block mb-2">1000 projects</span>
                          <span className="d-block mb-2">50 clients</span>
                          <span className="d-block mb-2">100GB</span>
                          <span className="d-block mb-2">Full Support</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-block">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="example-radio-block3"
                        name="example-radio-block"
                      />
                      <label
                        className="form-check-label"
                        for="example-radio-block3"
                      >
                        <span className="d-block fw-normal text-center my-3">
                          <span className="fs-4 fw-semibold">Team</span>
                          <span className="d-block fs-2 fw-light py-3 m-3 bg-body-light rounded">
                            $99<small> /m</small>
                          </span>
                          <span className="d-block mb-2">
                            Unlimited projects
                          </span>
                          <span className="d-block mb-2">
                            Unlimited clients
                          </span>
                          <span className="d-block mb-2">1TB</span>
                          <span className="d-block mb-2">Full Support</span>
                          <span className="d-block mb-2">
                            Unlimited projects
                          </span>
                          <span className="d-block mb-2">
                            Unlimited clients
                          </span>
                          <span className="d-block mb-2">1TB</span>
                          <span className="d-block mb-2">Full Support</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Plans;
