import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function Senders(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />
      <Header />
      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Sender Profiles</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Senders are shown in your recipients' inbox when they receive
                  your email. It helps your subscribers to recognize you.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Senders
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Manage
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Senders</h3>
              <div className="block-options">
                <button type="button" className="btn btn-sm btn-secondary">
                  <i className="fa fa-plus"></i> Create new sender
                </button>
              </div>
            </div>
            <div className="block-content">
              <table className="table table-hover table-vcenter">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "50px" }}>
                      no.
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-center" scope="row">
                      1
                    </th>
                    <td className="fw-semibold fs-sm">Shivam Tripathi</td>
                    <td>211B293@juetguna.in</td>
                    <td className="d-none d-sm-table-cell">
                      <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                        Verified
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Edit Client"
                        >
                          <i className="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Remove Client"
                        >
                          <i className="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      2
                    </th>
                    <td className="fw-semibold fs-sm">pankaj</td>
                    <td>211B201@juetguna.com</td>
                    <td className="d-none d-sm-table-cell">
                      <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                        Verification Pending
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Edit Client"
                        >
                          <i className="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Remove Client"
                        >
                          <i className="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      3
                    </th>
                    <td className="fw-semibold fs-sm">Hrishikesh bhatt</td>
                    <td>211B139@juetguna.in</td>
                    <td className="d-none d-sm-table-cell">
                      <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                        Disabled
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Edit Client"
                        >
                          <i className="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary"
                          data-bs-toggle="tooltip"
                          title="Remove Client"
                        >
                          <i className="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Senders;
