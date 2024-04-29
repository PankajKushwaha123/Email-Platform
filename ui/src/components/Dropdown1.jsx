import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import img1 from "../assets/media/avatars/avatar10.jpg";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
function Dropdown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="-basic">
        <img
          className="rounded-circle"
          src={img1}
          alt="Header Avatar"
          style={{ width: "21px" }}
        />
        <span className="d-none d-sm-inline-block ms-2">
          {Cookies.get("name")}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="p-3 text-center bg-body-light border-bottom rounded-top">
          <img
            className="img-avatar img-avatar48 img-avatar-thumb"
            src={img1}
            alt=""
          />
          <p className="mt-2 mb-0 fw-medium">{Cookies.get("name")}</p>
          <p className="mb-0 text-muted fs-sm fw-medium">Administrator</p>
        </div>
        <div className="p-2">
          <Dropdown.Item href="#/action-1">
            <Link to="/inbox">
              <span className="dropdown-item d-flex align-items-center justify-content-between">
                <span className="fs-sm fw-medium">Inbox</span>
                <span className="badge rounded-pill bg-primary ms-2">3</span>
              </span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Link to="/security">
              <span className="dropdown-item d-flex align-items-center justify-content-between">
                <span className="fs-sm fw-medium">Security</span>
                <span className="badge rounded-pill bg-primary ms-2">1</span>
              </span>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-3">
            <Link to="/myplan">
              <span className="dropdown-item d-flex align-items-center justify-content-between">
                <span className="fs-sm fw-medium">Plans</span>
              </span>
            </Link>
          </Dropdown.Item>
        </div>
        <div role="separator" className="dropdown-divider m-0"></div>
        <div className="p-2">
          <Dropdown.Item href="#/action-1">
            <Link to="/logout">
              <span className="dropdown-item d-flex align-items-center justify-content-between">
                <span className="fs-sm fw-medium">logout</span>
              </span>
            </Link>
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;
