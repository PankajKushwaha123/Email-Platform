import React from "react";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
function Campaign(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />

      <main id="main-container">
        <div className="content">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-2 text-center text-md-start">
            <div className="flex-grow-1 mb-1 mb-md-0">
              <h1 className="h3 fw-bold mb-2">Campaign Dashboard</h1>
              <h2 className="h6 fw-medium fw-medium text-muted mb-0">
                Welcome{" "}
                <a className="fw-semibold" href="be_pages_generic_profile.html">
                  John
                </a>
                , everything looks great.
              </h2>
            </div>
            <div className="mt-3 mt-md-0 ms-md-3 space-x-1">
              <a
                className="btn btn-sm btn-alt-secondary space-x-1"
                href="be_pages_generic_profile_edit.html"
              >
                <i className="fa fa-add opacity-50"></i>
                <span>Create a campaign</span>
              </a>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row items-push">
            <div className="col-sm-6 col-xxl-3">
              <div className="block block-rounded d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">32</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Campaigns
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-gem fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>See Below</span>
                    <i className="fa fa-arrow-alt-circle-down ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="block block-rounded d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">124</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Contacts
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-user-circle fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>View all Contacts</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="block block-rounded d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">65.7%</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Avg. Opening Rate
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-paper-plane fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>View all messages</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="block block-rounded d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">4.9%</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Avg. Click Rate
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="fa fa-chart-bar fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>View statistics</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Previous Campaigns</h3>
              <div className="block-options space-x-1">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary"
                  data-toggle="class-toggle"
                  data-target="#one-dashboard-search-orders"
                  data-classname="d-none"
                >
                  <i className="fa fa-search"></i>
                </button>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn btn-sm btn-alt-secondary"
                    id="dropdown-recent-orders-filters"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-fw fa-flask"></i>
                    Filters
                    <i className="fa fa-angle-down ms-1"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-md dropdown-menu-end fs-sm"
                    aria-labelledby="dropdown-recent-orders-filters"
                  >
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Pending
                      <span className="badge bg-primary rounded-pill">20</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Active
                      <span className="badge bg-primary rounded-pill">72</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Completed
                      <span className="badge bg-primary rounded-pill">890</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      All
                      <span className="badge bg-primary rounded-pill">997</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="one-dashboard-search-orders"
              className="block-content border-bottom d-none"
            >
              <form
                action="be_pages_dashboard.html"
                method="POST"
                onSubmit={() => {}}
              >
                <div className="push">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-alt"
                      id="one-ecom-orders-search"
                      name="one-ecom-orders-search"
                      placeholder="Search all orders.."
                    />
                    <span className="input-group-text bg-body border-0">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="block-content block-content-full">
              <div className="table-responsive">
                <table className="table table-hover table-vcenter">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th className="d-none d-xl-table-cell">Recipients</th>
                      <th>Status</th>
                      <th className="d-none d-sm-table-cell text-center">
                        Opening Rate
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        Created
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-sm">
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00925{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Thomas Riley
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Product Designer
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Pending
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: " 5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "24%" }}
                            aria-valuenow="24"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">24%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        22 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1589,75</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00924{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Barbara Scott
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Web developer
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Active
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div className="progress mb-1" style={{ height: "5p" }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "6%" }}
                            aria-valuenow="6"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">6%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        28 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$2121,92</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00923{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Carol Ray
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Application Manager
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Active
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "23%" }}
                            aria-valuenow="23"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">23%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        22 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1337,26</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00922{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Wayne Garcia
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Digital Nomad
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Active
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">20%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        3 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1578,98</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00921{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Betty Kelley
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Application Manager
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Pending
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "23%" }}
                            aria-valuenow="23"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">23%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        16 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$567,80</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00920{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Marie Duncan
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Photographer
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          Completed
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "5%" }}
                            aria-valuenow="5"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">5%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        13 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$2051,12</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="#">
                          ORD.00919{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="#">
                          Jose Mills
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Application Manager
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          Completed
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <div
                          className="progress mb-1"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p className="fs-xs fw-semibold mb-0">10%</p>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        17 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1353,24</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="block-content block-content-full bg-body-light">
              <nav aria-label="Photos Search Navigation">
                <ul className="pagination pagination-sm justify-content-end mb-0">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex="-1"
                      aria-label="Previous"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Campaign;
