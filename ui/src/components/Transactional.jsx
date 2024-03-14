import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function Transactional(props) {
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
                <h1 className="h3 fw-bold mb-2">Transactional Emails</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Configurations for sending transactional emails
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Tables
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Styles
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-xl-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">SMTP Credentials</h3>
                </div>
                <div className="block-content">
                  <table className="table table-hover table-vcenter">
                    <tbody>
                      <tr>
                        <td className="fw-semibold fs-sm">SMTP Server</td>
                        <td className="fw-normal fs-sm">smtp.domain.com</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold fs-sm">Port</td>
                        <td className="fw-normal fs-sm">587</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold fs-sm">Username</td>
                        <td className="fw-normal fs-sm">username@domain.com</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold fs-sm">Password</td>
                        <td className="fw-normal fs-sm">IOJH8yIUHUuo</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">API Configuration</h3>
                </div>
                <div className="block-content">
                  <table className="table table-hover table-vcenter">
                    <tbody>
                      <tr>
                        <td className="fw-semibold fs-sm">Endpoint</td>
                        <td className="fw-normal fs-sm">
                          api.domain.com/transactional
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold fs-sm">API Key</td>
                        <td className="fw-normal fs-sm">
                          transact_efu4t8u3gioo348tu8934whtguoerg
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h2 className="content-heading">Example Configuration</h2>
            <div className="col-12">
              <div className="block block-rounded">
                <ul
                  className="nav nav-tabs nav-tabs-block align-items-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      id="PythonCodeTab"
                      data-bs-toggle="tab"
                      data-bs-target="#PythonCode"
                      role="tab"
                      aria-controls="btabswob-static-home"
                      aria-selected="true"
                    >
                      Python
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="PHPCodeTab"
                      data-bs-toggle="tab"
                      data-bs-target="#PHPCode"
                      role="tab"
                      aria-controls="btabswob-static-home"
                      aria-selected="false"
                    >
                      PHP
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="NodeJSCodeTab"
                      data-bs-toggle="tab"
                      data-bs-target="#NodeJSCode"
                      role="tab"
                      aria-controls="btabswob-static-home"
                      aria-selected="false"
                    >
                      NodeJS
                    </button>
                  </li>
                  <li className="nav-item ms-auto">
                    <div className="btn-group btn-group-sm pe-2">
                      <button type="button" className="btn btn-alt-secondary">
                        <i className="fa fa-fw fa-copy"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="block-content tab-content">
                  <div
                    className="tab-pane active"
                    id="PythonCode"
                    role="tabpanel"
                    aria-labelledby="PythonCodeTab"
                  >
                    <h4 className="fw-normal">Python Code</h4>
                    <p>...</p>
                  </div>
                  <div
                    className="tab-pane"
                    id="PHPCode"
                    role="tabpanel"
                    aria-labelledby="PHPCodeTab"
                  >
                    <h4 className="fw-normal">PHP Code</h4>
                    <p>...</p>
                  </div>
                  <div
                    className="tab-pane"
                    id="NodeJSCode"
                    role="tabpanel"
                    aria-labelledby="NodeJSCodeTab"
                  >
                    <h4 className="fw-normal">NodeJS Code</h4>
                    <p>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Transactional;
