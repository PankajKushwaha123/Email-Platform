import React from "react";
import Sidebar from "./Sidebar";
function Navigationbar() {
  return (
    <nav id="sidebar" aria-label="Main Navigation">
      <div className="content-header">
        <a className="fw-semibold text-dual" href="index.html">
          <span className="smini-visible">
            <i className="fa fa-circle-notch text-primary"></i>
          </span>
          <span className="smini-hide fs-5 tracking-wider">
            Mail<span className="fw-normal">Mort</span>
          </span>
        </a>

        <div>
          <button
            type="button"
            className="btn btn-sm btn-alt-secondary"
            data-toggle="layout"
            data-action="dark_mode_toggle"
          >
            <i className="far fa-moon"></i>
          </button>

          <div className="dropdown d-inline-block ms-1">
            <button
              type="button"
              className="btn btn-sm btn-alt-secondary"
              id="sidebar-themes-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="far fa-circle"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end fs-sm smini-hide border-0"
              aria-labelledby="sidebar-themes-dropdown"
            >
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="default"
                href="#"
              >
                <span>Default</span>
                <i className="fa fa-circle text-default"></i>
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="assets/css/themes/amethyst.min.css"
                href="#"
              >
                <span>Amethyst</span>
                <i className="fa fa-circle text-amethyst"></i>
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="assets/css/themes/city.min.css"
                href="#"
              >
                <span>City</span>
                <i className="fa fa-circle text-city"></i>
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="assets/css/themes/flat.min.css"
                href="#"
              >
                <span>Flat</span>
                <i className="fa fa-circle text-flat"></i>
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="assets/css/themes/modern.min.css"
                href="#"
              >
                <span>Modern</span>
                <i className="fa fa-circle text-modern"></i>
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
                data-toggle="theme"
                data-theme="assets/css/themes/smooth.min.css"
                href="#"
              >
                <span>Smooth</span>
                <i className="fa fa-circle text-smooth"></i>
              </a>

              <div className="dropdown-divider"></div>

              <a
                className="dropdown-item fw-medium"
                data-toggle="layout"
                data-action="sidebar_style_light"
                href="javascript:void(0)"
              >
                <span>Sidebar Light</span>
              </a>
              <a
                className="dropdown-item fw-medium"
                data-toggle="layout"
                data-action="sidebar_style_dark"
                href="javascript:void(0)"
              >
                <span>Sidebar Dark</span>
              </a>

              <div className="dropdown-divider"></div>

              <a
                className="dropdown-item fw-medium"
                data-toggle="layout"
                data-action="header_style_light"
                href="javascript:void(0)"
              >
                <span>Header Light</span>
              </a>
              <a
                className="dropdown-item fw-medium"
                data-toggle="layout"
                data-action="header_style_dark"
                href="javascript:void(0)"
              >
                <span>Header Dark</span>
              </a>
            </div>
          </div>
          <a
            className="d-lg-none btn btn-sm btn-alt-secondary ms-1"
            data-toggle="layout"
            data-action="sidebar_close"
            href="javascript:void(0)"
          >
            <i className="fa fa-fw fa-times"></i>
          </a>
        </div>
      </div>
      <Sidebar />
    </nav>
  );
}

export default Navigationbar;
