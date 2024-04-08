import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
var here = 1;
function Setting(props) {
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
                <h1 className="h3 fw-bold mb-2">Campaign Settings</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Modify preferences for Campaigns
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Campaigns
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

        <div className="content row">
          <div className="col-xl-6">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">General</h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Save
                  </button>
                </div>
              </div>
              <div className="block-content block-content-full">
                <form
                  action="be_forms_elements.html"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={() => {}}
                >
                  <div className="row push">
                    <div className="col-lg-4">
                      <p className="fs-sm text-muted">Default Formats</p>
                    </div>
                    <div className="col-lg-8 col-xl-5">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="example-select">
                          Timezone
                        </label>
                        <select
                          className="form-select"
                          id="example-select"
                          name="example-select"
                        >
                          <option value="1">(GMT+5:30) Kolkata</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                          <option value="4">Option #4</option>
                          <option value="5">Option #5</option>
                          <option value="6">Option #6</option>
                          <option value="7">Option #7</option>
                          <option value="8">Option #8</option>
                          <option value="9">Option #9</option>
                          <option value="10">Option #10</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Time Format</label>
                        <div className="space-x-2">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="24hour"
                              name="timeFormat"
                              value="24hr"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="24hour"
                            >
                              24 Hours
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="12hour"
                              name="timeFormat"
                              value="12hr"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="12hour"
                            >
                              12 Hours{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Date Format</label>
                        <div className="space-x-2">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="date1"
                              name="dateFormat"
                              value="24hr"
                              checked
                            />
                            <label className="form-check-label" htmlFor="date1">
                              DD-MM-YYYY
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="date2"
                              name="dateFormat"
                              value="12hr"
                            />
                            <label className="form-check-label" htmlFor="date2">
                              MM-DD-YYYY
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <p className="fs-sm text-muted">Tracking Options</p>
                    </div>
                    <div className="col-lg-8 col-xl-5">
                      <div className="mb-4">
                        <label className="form-label">Anonymous Tracking</label>
                        <div className="space-x-2">
                          <p className="text-muted">
                            Email opens and clicks will be tracked but will no
                            longer be associated to specific contacts.
                          </p>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="24hour"
                              name="anonymousTracking"
                              value="enabled"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="24hour"
                            >
                              24 Hours
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="12hour"
                              name="anonymousTracking"
                              value="disabled"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="12hour"
                            >
                              12 Hours{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">Test List</h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Save
                  </button>
                </div>
              </div>
              <div className="block-content block-content-full">
                <form
                  action="be_forms_elements.html"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={() => {}}
                >
                  <div className="row push">
                    <div className="col-lg-4">
                      <p className="fs-sm text-muted">
                        We recommend that you always send a test email to a
                        group of test recipients before sending your campaign to
                        all recipients. To add test recipients, list their email
                        addresses below, with one email address per line.
                      </p>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-textarea-input"
                        >
                          Test Recipients
                        </label>
                        <textarea
                          className="form-control"
                          id="test-list"
                          name="test-list"
                          rows="15"
                          placeholder="Email IDs"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">Default Sender</h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Save
                  </button>
                </div>
              </div>
              <div className="block-content block-content-full">
                <form
                  action="be_forms_elements.html"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={() => {}}
                >
                  <div className="row push">
                    <div className="col-lg-4">
                      <p className="fs-sm text-muted">
                        These are default settings. These can be modified for
                        individual campaigns while creating them.
                      </p>
                    </div>
                    <div className="col-lg-8 col-xl-5">
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-text-input"
                        >
                          Sender Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="senderName"
                          name="senderName"
                          placeholder="Text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-email-input"
                        >
                          Sender Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="senderEmail"
                          name="senderEmail"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-password-input"
                        >
                          Reply To
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="replyTo"
                          name="replyTo"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-textarea-input"
                        >
                          Email Header
                        </label>
                        <textarea
                          className="form-control"
                          id="emailHeader"
                          name="emailHeader"
                          rows="4"
                          placeholder="The text in the braces will be replaced by a clickable link."
                        >
                          {/*  If you are not able to see this mail, click {here} */}
                        </textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="example-textarea-input"
                        >
                          Email Footer
                        </label>
                        <textarea
                          className="form-control"
                          id="emailFooter"
                          name="emailFooter"
                          rows="4"
                          placeholder="The text in the braces will be replaced by a clickable link."
                        >
                          {/*  If you wish to unsubscribe from our newsletter, click{" "}
                          {here} */}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">Other Settings</h3>
              </div>
              <div className="block-content">
                <p className="fs-sm text-muted">
                  Looking for other setting, any of these?
                </p>
                <div className="row items-push-2x text-center text-sm-start">
                  <div className="col-sm-6 col-xl-4 text-center">
                    <button type="button" className="btn btn-secondary">
                      Manage Senders
                    </button>
                    <div className="mt-2">
                      Users who can send using your domains
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 text-center">
                    <button type="button" className="btn btn-secondary">
                      Manage Contact Lists
                    </button>
                    <div className="mt-2">Manage list of contacts.</div>
                  </div>
                  <div className="col-sm-6 col-xl-4 text-center">
                    <button type="button" className="btn btn-secondary">
                      Transactional Settings
                    </button>
                    <div className="mt-2">SMTP and API Settings</div>
                  </div>
                  <div className="col-sm-6 col-xl-4 text-center">
                    <button type="button" className="btn btn-secondary">
                      Manage Domains
                    </button>
                    <div className="mt-2">
                      List of domains attached to your account
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 text-center">
                    <button type="button" className="btn btn-secondary">
                      Manage Plans
                    </button>
                    <div className="mt-2">
                      Your current plan and upgrade options.
                    </div>
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

export default Setting;
