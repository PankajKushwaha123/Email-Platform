import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>
      <div
        id="page-container"
        className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
      >
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

          <div className="js-sidebar-scroll">
            <div className="content-side">
              <ul className="nav-main">
                <li className="nav-main-heading">Inbox</li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="inbox.html">
                    <i className="nav-main-link-icon si si-envelope-letter"></i>
                    <span className="nav-main-link-name">Admin Inbox</span>
                  </a>
                </li>

                <li className="nav-main-heading">Contacts</li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="contacts.html">
                    <i className="nav-main-link-icon si si-users"></i>
                    <span className="nav-main-link-name">All Contacts</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="lists.html">
                    <i className="nav-main-link-icon si si-list"></i>
                    <span className="nav-main-link-name">Lists</span>
                  </a>
                </li>

                <li className="nav-main-heading">Campaigns</li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="new-campaign.html">
                    <i className="nav-main-link-icon si si-plus"></i>
                    <span className="nav-main-link-name">Create Campaign</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="campaigns.html">
                    <i className="nav-main-link-icon si si-energy"></i>
                    <span className="nav-main-link-name">Dashboard</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="statistics.html">
                    <i className="nav-main-link-icon si si-graph"></i>
                    <span className="nav-main-link-name">Statistics</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="campaign-settings.html">
                    <i className="nav-main-link-icon si si-settings"></i>
                    <span className="nav-main-link-name">Settings</span>
                  </a>
                </li>

                <li className="nav-main-heading">Transactional</li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="transactional.html">
                    <i className="nav-main-link-icon si si-vector"></i>
                    <span className="nav-main-link-name">Configurations</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a
                    className="nav-main-link"
                    href="transactional-statistics.html"
                  >
                    <i className="nav-main-link-icon si si-bar-chart"></i>
                    <span className="nav-main-link-name">Statistics</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a
                    className="nav-main-link"
                    href="transactional-settings.html"
                  >
                    <i className="nav-main-link-icon si si-settings"></i>
                    <span className="nav-main-link-name">Settings</span>
                  </a>
                </li>

                <li className="nav-main-heading">Account</li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="senders.html">
                    <i className="nav-main-link-icon si si-users"></i>
                    <span className="nav-main-link-name">Senders</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="domains.html">
                    <i className="nav-main-link-icon si si-globe-alt"></i>
                    <span className="nav-main-link-name">Domains</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="security.html">
                    <i className="nav-main-link-icon si si-lock"></i>
                    <span className="nav-main-link-name">Security</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="plans.html">
                    <i className="nav-main-link-icon si si-wallet"></i>
                    <span className="nav-main-link-name">My Plan</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="logout.html">
                    <i className="nav-main-link-icon si si-logout"></i>
                    <span className="nav-main-link-name">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header id="page-header">
          <div className="content-header">
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-alt-secondary me-2 d-lg-none"
                data-toggle="layout"
                data-action="sidebar_toggle"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <button
                type="button"
                className="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block"
                data-toggle="layout"
                data-action="sidebar_mini_toggle"
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

              <form
                className="d-none d-md-inline-block"
                action="be_pages_generic_search.html"
                method="POST"
              >
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control form-control-alt"
                    placeholder="Search.."
                    id="page-header-search-input2"
                    name="page-header-search-input2"
                  />
                  <span className="input-group-text border-0">
                    <i className="fa fa-fw fa-search"></i>
                  </span>
                </div>
              </form>
            </div>

            <div className="d-flex align-items-center">
              <div className="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary d-flex align-items-center"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle"
                    src="assets/media/avatars/avatar10.jpg"
                    alt="Header Avatar"
                    style={{ width: "21px" }}
                  />
                  <span className="d-none d-sm-inline-block ms-2">John</span>
                  <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                  aria-labelledby="page-header-user-dropdown"
                >
                  <div className="p-3 text-center bg-body-light border-bottom rounded-top">
                    <img
                      className="img-avatar img-avatar48 img-avatar-thumb"
                      src="assets/media/avatars/avatar10.jpg"
                      alt=""
                    />
                    <p className="mt-2 mb-0 fw-medium">John Smith</p>
                    <p className="mb-0 text-muted fs-sm fw-medium">
                      Administrator
                    </p>
                  </div>
                  <div className="p-2">
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="inbox.html"
                    >
                      <span className="fs-sm fw-medium">Inbox</span>
                      <span className="badge rounded-pill bg-primary ms-2">
                        3
                      </span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="security.html"
                    >
                      <span className="fs-sm fw-medium">Security</span>
                      <span className="badge rounded-pill bg-primary ms-2">
                        1
                      </span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="plans.html"
                    >
                      <span className="fs-sm fw-medium">Plans</span>
                    </a>
                  </div>
                  <div role="separator" className="dropdown-divider m-0"></div>
                  <div className="p-2">
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="op_auth_signin.html"
                    >
                      <span className="fs-sm fw-medium">Log Out</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-fw fa-bell"></i>
                  <span className="text-primary">•</span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="p-2 bg-body-light border-bottom text-center rounded-top">
                    <h5 className="dropdown-header text-uppercase">
                      Notifications
                    </h5>
                  </div>
                  <ul className="nav-items mb-0">
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-check-circle text-success"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            You have a new follower
                          </div>
                          <span className="fw-medium text-muted">
                            15 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-plus-circle text-primary"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            1 new sale, keep it up
                          </div>
                          <span className="fw-medium text-muted">
                            22 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-times-circle text-danger"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            Update failed, restart server
                          </div>
                          <span className="fw-medium text-muted">
                            26 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-plus-circle text-primary"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            2 new sales, keep it up
                          </div>
                          <span className="fw-medium text-muted">
                            33 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-user-plus text-success"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            You have a new subscriber
                          </div>
                          <span className="fw-medium text-muted">
                            41 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark d-flex py-2"
                        href="javascript:void(0)"
                      >
                        <div className="flex-shrink-0 me-2 ms-3">
                          <i className="fa fa-fw fa-check-circle text-success"></i>
                        </div>
                        <div className="flex-grow-1 pe-2">
                          <div className="fw-semibold">
                            You have a new follower
                          </div>
                          <span className="fw-medium text-muted">
                            42 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="p-2 border-top text-center">
                    <a
                      className="d-inline-block fw-medium"
                      href="javascript:void(0)"
                    >
                      <i className="fa fa-fw fa-arrow-down me-1 opacity-50"></i>{" "}
                      Load More..
                    </a>
                  </div>
                </div>
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

        <main id="main-container">
          <div className="bg-body-light">
            <div className="content content-full">
              <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
                <div className="flex-grow-1">
                  <h1 className="h3 fw-bold mb-2">Contacts</h1>
                  <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                    This is your contact database. From here, you can view,
                    organize and manage your contacts, individually or as a
                    group.
                  </h2>
                </div>
                <nav
                  className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb breadcrumb-alt">
                    <li className="breadcrumb-item">
                      <a className="link-fx" href="javascript:void(0)">
                        Contacts
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      All contacts
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">
                  All Contacts{" "}
                  <small className="fst-italic">(total 1454 contacts)</small>
                </h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Import Contacts
                  </button>
                </div>
              </div>
              <div className="block-content block-content-full">
                <table className="table table-bordered table-striped table-vcenter js-dataTable-buttons">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: "80px" }}>
                        ID
                      </th>
                      <th>Name</th>
                      <th
                        className="d-none d-sm-table-cell"
                        style={{ width: "30%" }}
                      >
                        Email
                      </th>
                      <th
                        className="d-none d-sm-table-cell"
                        style={{ width: "15%" }}
                      >
                        Type
                      </th>
                      <th style={{ width: "15%" }}>Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center fs-sm">1</td>
                      <td className="fw-semibold fs-sm">Amber Harvey</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client1<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">2</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client2<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">3</td>
                      <td className="fw-semibold fs-sm">Jose Mills</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client3<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">4</td>
                      <td className="fw-semibold fs-sm">Barbara Scott</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client4<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">5</td>
                      <td className="fw-semibold fs-sm">Jesse Fisher</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client5<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">6</td>
                      <td className="fw-semibold fs-sm">Carol Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client6<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">4 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">7</td>
                      <td className="fw-semibold fs-sm">Jack Estrada</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client7<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">8</td>
                      <td className="fw-semibold fs-sm">Lisa Jenkins</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client8<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">4 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">9</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client9<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">10</td>
                      <td className="fw-semibold fs-sm">Danielle Jones</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client10<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">11</td>
                      <td className="fw-semibold fs-sm">Alice Moore</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client11<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">7 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">12</td>
                      <td className="fw-semibold fs-sm">Barbara Scott</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client12<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">13</td>
                      <td className="fw-semibold fs-sm">Henry Harrison</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client13<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">2 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">14</td>
                      <td className="fw-semibold fs-sm">Lisa Jenkins</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client14<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">15</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client15<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">16</td>
                      <td className="fw-semibold fs-sm">Marie Duncan</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client16<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">17</td>
                      <td className="fw-semibold fs-sm">Laura Carr</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client17<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">18</td>
                      <td className="fw-semibold fs-sm">Judy Ford</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client18<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">19</td>
                      <td className="fw-semibold fs-sm">Scott Young</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client19<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">5 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">20</td>
                      <td className="fw-semibold fs-sm">Andrea Gardner</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client20<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">21</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client21<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">22</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client22<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">23</td>
                      <td className="fw-semibold fs-sm">Brian Stevens</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client23<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">24</td>
                      <td className="fw-semibold fs-sm">Albert Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client24<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">25</td>
                      <td className="fw-semibold fs-sm">Albert Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client25<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">26</td>
                      <td className="fw-semibold fs-sm">Scott Young</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client26<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">27</td>
                      <td className="fw-semibold fs-sm">Helen Jacobs</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client27<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">28</td>
                      <td className="fw-semibold fs-sm">Betty Kelley</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client28<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">29</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client29<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">7 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">30</td>
                      <td className="fw-semibold fs-sm">Ryan Flores</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client30<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">31</td>
                      <td className="fw-semibold fs-sm">Jose Parker</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client31<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">32</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client32<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">33</td>
                      <td className="fw-semibold fs-sm">Lori Grant</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client33<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">34</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client34<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">35</td>
                      <td className="fw-semibold fs-sm">Jesse Fisher</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client35<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">36</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client36<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">37</td>
                      <td className="fw-semibold fs-sm">Wayne Garcia</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client37<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">38</td>
                      <td className="fw-semibold fs-sm">Henry Harrison</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client38<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">39</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client39<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">5 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">40</td>
                      <td className="fw-semibold fs-sm">David Fuller</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client40<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        <footer id="page-footer" className="bg-body-light">
          <div className="content py-3">
            <div className="row fs-sm">
              <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
                Made on Earth <i className="fa fa-earth text-info"></i> by
                Humans.
              </div>
              <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                <a
                  className="fw-semibold"
                  href="https://1.envato.market/AVD6j"
                  target="_blank"
                >
                  MailMort
                </a>{" "}
                &copy; <span data-toggle="year-copy"></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contacts;
