import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/oneui.css";

function ThemeDropdown() {
  const [currTheme, setCurrTheme] = useState(
    "../assets/css/themes/amethyst.min.css"
  );
  let loc = useLocation().pathname;
  return (
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
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          data-toggle="theme"
          data-theme="default"
          href="#"
        >
          <span>Default</span>
          <i className="fa fa-circle text-default"></i>
        </button>
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          onClick={() => {
            import("../assets/css/themes/amethyst.min.css");
          }}
          href="#"
        >
          <span>Amethyst</span>
          <i className="fa fa-circle text-amethyst"></i>
        </button>
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          onClick={() => import("../assets/css/themes/city.min.css")}
          href="#"
        >
          <span>City</span>
          <i className="fa fa-circle text-city"></i>
        </button>
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          onClick={() => {
            import("../assets/css/themes/flat.min.css");
          }}
          href="#"
        >
          <span>Flat</span>
          <i className="fa fa-circle text-flat"></i>
        </button>
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          onClick={() => {
            import("../assets/css/themes/modern.min.css");
          }}
          data-toggle="theme"
          href="#"
        >
          <span>Modern</span>
          <i className="fa fa-circle text-modern"></i>
        </button>
        <button
          className="dropdown-item d-flex align-items-center justify-content-between fw-medium"
          onClick={() => {
            import("../assets/css/themes/smooth.min.css");
          }}
          data-toggle="theme"
          data-theme="assets/css/themes/smooth.min.css"
          href="#"
        >
          <span>Smooth</span>
          <i className="fa fa-circle text-smooth"></i>
        </button>

        <div className="dropdown-divider"></div>

        <button
          className="dropdown-item fw-medium"
          data-toggle="layout"
          data-action="sidebar_style_light"
          href="#"
        >
          <span>Sidebar Light</span>
        </button>
        <button
          className="dropdown-item fw-medium"
          data-toggle="layout"
          data-action="sidebar_style_dark"
          href="#"
        >
          <span>Sidebar Dark</span>
        </button>

        <div className="dropdown-divider"></div>

        <button
          className="dropdown-item fw-medium"
          data-toggle="layout"
          data-action="header_style_light"
          href="#"
        >
          <span>Header Light</span>
        </button>
        <button
          className="dropdown-item fw-medium"
          data-toggle="layout"
          data-action="header_style_dark"
          href="#"
        >
          <span>Header Dark</span>
        </button>
      </div>
    </div>
  );
}

export default ThemeDropdown;
