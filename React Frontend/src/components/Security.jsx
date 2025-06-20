import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function Security(props) {
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
                <h1 className="h3 fw-bold mb-2">Security Settings</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Authentication credentials and setting for your account.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Security
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Settings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">Change Password</h3>
                </div>
                <div className="block-content block-content-full">
                  <form
                    action="be_forms_elements.html"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={() => {}}
                  >
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-password-input"
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="example-password-input"
                        name="example-password-input"
                        placeholder="Password Input"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-password-input"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="example-password-input"
                        name="example-password-input"
                        placeholder="Password Input"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-password-input"
                      >
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="example-password-input"
                        name="example-password-input"
                        placeholder="Password Input"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">2-factor Authentication</h3>
                </div>
                <div className="block-content block-content-full">
                  <form
                    action="be_forms_elements.html"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={() => {}}
                  >
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-password-input"
                      >
                        Authenticator app
                      </label>
                      <p className="fs-sm">
                        Use an app on your phone to set up two-factor
                        authentication.
                      </p>
                      <div className="mb-4">
                        <div className="input-group">
                          <button type="button" className="btn btn-secondary">
                            Show QR
                          </button>
                          <input
                            type="password"
                            className="form-control"
                            id="example-group3-input2"
                            name="example-group3-input2"
                            placeholder="App Code"
                          />
                          <button type="button" className="btn btn-dark">
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-password-input"
                      >
                        Email OTP
                      </label>
                      <p className="fs-sm">
                        We will send an email to set up two-factor
                        authentication.
                      </p>
                      <div className="mb-4">
                        <div className="input-group">
                          <button type="button" className="btn btn-secondary">
                            Generate OTP
                          </button>
                          <input
                            type="password"
                            className="form-control"
                            id="example-group3-input2"
                            name="example-group3-input2"
                            placeholder="Email OTP"
                          />
                          <button type="button" className="btn btn-dark">
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">Authorized IP Addresses</h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Authorize new IP
                    Address
                  </button>
                </div>
              </div>
              <div className="block-content">
                <table className="table table-hover table-vcenter">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: "50px" }}>
                        #
                      </th>
                      <th>IP Address</th>
                      <th>Authorization Date</th>
                      <th>Last Used</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        1
                      </th>
                      <td className="fw-semibold">192.168.1.1</td>
                      <td className="fw-semibold">12-01-2023</td>
                      <td className="fw-semibold">21-10-2023</td>
                      <td className="text-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-alt-secondary"
                            data-bs-toggle="tooltip"
                            title="Revoke Authorization"
                          >
                            <i className="fa fa-fw fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Security;
