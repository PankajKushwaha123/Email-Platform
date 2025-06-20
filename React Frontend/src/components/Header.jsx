import React from "react";
/* import img1 from "../assets/media/avatars/avatar10.jpg"; */
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navigationbar from "./Navigationbar";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toogle = () => {
    show ? handleClose() : handleShow();
  };
  return (
    <>
      /*
      <header id="page-header">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-sm btn-alt-secondary me-2 d-lg-none"
              onClick={toogle}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <button
              type="button"
              className="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block"
              onClick={toogle}
            >
              <i className="fa fa-fw fa-ellipsis-v"></i>
            </button>

            <button
              type="button"
              className="btn btn-sm btn-alt-secondary d-md-none"
              data-toggle="layout"
              data-action="header_search_on"
            >
              <i className="fa fa-fw fa-search"></i>
            </button>
          </div>

          <div className="d-flex align-items-center h-10">
            <div className="dropdown d-inline-block ms-2">
              <Dropdown1 />
            </div>
          </div>
        </div>

        <div
          id="page-header-search"
          className="overlay-header bg-body-extra-light"
        >
          <div className="content-header">
            <form
              className="w-100"
              action="be_pages_generic_search.html"
              method="POST"
            >
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-alt-danger"
                  data-toggle="layout"
                  data-action="header_search_off"
                >
                  <i className="fa fa-fw fa-times-circle"></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search or hit ESC.."
                  id="page-header-search-input"
                  name="page-header-search-input"
                />
              </div>
            </form>
          </div>
        </div>

        <div
          id="page-header-loader"
          className="overlay-header bg-body-extra-light"
        >
          <div className="content-header">
            <div className="w-100 text-center">
              <i className="fa fa-fw fa-circle-notch fa-spin"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
