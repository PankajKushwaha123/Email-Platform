import React from "react";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
function Createcampaign() {
  return (
    <div
      id="page-container"
      className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    >
      <Navigationbar />
      <Header />

      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Create an email campaign</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Keep subscribers engaged by sharing your latest news,
                  promoting your bestselling products, or announcing an upcoming
                  event.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="javascript:void(0)">
                      Forms
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Editors
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="content-heading">CKEditor</h2>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Campaign Settings</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                enctype="multipart/form-data"
                onsubmit="return false;"
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most basic details for the all-new campaign
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label className="form-label" for="example-text-input">
                        Campaign name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Sender</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                enctype="multipart/form-data"
                onsubmit="return false;"
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label className="form-label" for="example-text-input">
                        Sender Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" for="example-select">
                        Sender Email
                      </label>
                      <select
                        className="form-select"
                        id="example-select"
                        name="example-select"
                      >
                        <option value="1" selected>
                          default@domain.com
                        </option>
                        <option value="2">sender2@domain.com</option>
                        <option value="3">sender3@domain.com</option>
                        <option value="4">sender4@domain.com</option>
                        <option value="5">sender5@domain.com</option>
                        <option value="6">sender6@domain.com</option>
                        <option value="7">sender7@domain.com</option>
                        <option value="8">sender8@domain.com</option>
                        <option value="9">sender9@domain.com</option>
                        <option value="10">sender10@domain.com</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Recipients</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                enctype="multipart/form-data"
                onsubmit="return false;"
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        for="example-select-multiple"
                      >
                        Select mailing list(s)
                      </label>
                      <select
                        className="form-select"
                        id="example-select-multiple"
                        name="example-select-multiple"
                        size="5"
                        multiple
                      >
                        <option value="1">List1</option>
                        <option value="2">List2</option>
                        <option value="3">List3</option>
                        <option value="4">List4</option>
                        <option value="5">List5</option>
                        <option value="6">List6</option>
                        <option value="7">List7</option>
                        <option value="8">List8</option>
                        <option value="9">List9</option>
                        <option value="10">List10</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        for="example-textarea-input"
                      >
                        Other recipients
                      </label>
                      <textarea
                        className="form-control"
                        id="example-textarea-input"
                        name="example-textarea-input"
                        rows="4"
                        placeholder="Textarea content.."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Subject</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                enctype="multipart/form-data"
                onsubmit="return false;"
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label className="form-label" for="example-text-input">
                        Subject line
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" for="example-email-input">
                        Preview text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Email Content</h3>
            </div>
            <div className="block-content">
              <form
                action="be_forms_editors.html"
                method="POST"
                onsubmit="return false;"
              >
                <div className="mb-4">
                  <textarea id="js-ckeditor" name="ckeditor">
                    Hello CKEditor!
                  </textarea>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Final Actions</h3>
            </div>
            <div className="block-content text-center">
              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Save the campaign as draft to continue at some later time.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-3"
                >
                  <i className="fa fa-fw fa-save me-1"></i> Save as draft
                </button>
              </div>

              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Send test-mails to preview the campaign.
                </p>
                <button type="button" className="btn btn-alt-success me-1 mb-3">
                  <i className="fa fa-fw fa-paper-plane me-1"></i> Send test
                  mails
                </button>
              </div>

              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Schedule to campaign to be sent now or at a later time.
                </p>
                <button type="button" className="btn btn-success me-1 mb-3">
                  <i className="fa fa-fw fa-hourglass me-1"></i> Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Createcampaign;
