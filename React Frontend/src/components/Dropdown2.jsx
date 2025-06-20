import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
function Dropdown2() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <i className="fa fa-fw fa-bell"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="p-1 bg-body-light border-bottom text-center rounded-top">
          <h5 className="dropdown-header text-uppercase">Notifications</h5>
        </div>

        <Dropdown.Item href="#/action-1">
          <a className="text-dark d-flex py-1" href="#">
            <div className="flex-shrink-0 me-2 ms-3">
              <i className="fa fa-fw fa-check-circle text-success"></i>
            </div>
            <div className="flex-grow-1 pe-2">
              <div className="fw-semibold">You have a new follower</div>
              <span className="fw-medium text-muted">15 min ago</span>
            </div>
          </a>
        </Dropdown.Item>

        <Dropdown.Item href="#/action-2">
          {" "}
          <a className="text-dark d-flex py-1" href="#">
            <div className="flex-shrink-0 me-2 ms-3">
              <i className="fa fa-fw fa-plus-circle text-primary"></i>
            </div>
            <div className="flex-grow-1 pe-2">
              <div className="fw-semibold">1 new sale, keep it up</div>
              <span className="fw-medium text-muted">22 min ago</span>
            </div>
          </a>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          {" "}
          <a className="text-dark d-flex py-1" href="#">
            <div className="flex-shrink-0 me-2 ms-3">
              <i className="fa fa-fw fa-times-circle text-danger"></i>
            </div>
            <div className="flex-grow-1 pe-2">
              <div className="fw-semibold">Update failed, restart server</div>
              <span className="fw-medium text-muted">26 min ago</span>
            </div>
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown2;
