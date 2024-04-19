import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import axios from "axios";
import Footer from "./Footer";

function Transactionalsetting(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  const [apiKeys, setApiKeys] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleApiDelete = async (index) => {
    try {
      const response = await axios.delete(
        "https://apis.mailmort.co/transactional/deleteAPI",
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
          data: { key_name: apiKeys[index].key_name },
        }
      );
      setCounter(counter + 1);
    } catch (error) {
      console.log("error while deleting api keys", error);
    }
  };
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/transactional/api_keys",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        setApiKeys(response.data.api_keys);
        console.log(response.data.api_keys);
      } catch (error) {
        console.log("error while getting api keys");
      }
    };
    fetchApi();
  }, [counter]);
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />
      <Header />

      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">
                  Transactional Email Settings
                </h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Manage preferences and settings for transactional emails.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Transactional
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
            <div className="col-xl-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">SMTP Keys</h3>
                  <div className="block-options">
                    <button type="button" className="btn btn-sm btn-secondary">
                      <i className="fa fa-plus"></i> Create
                    </button>
                  </div>
                </div>
                <div className="block-content">
                  <table className="table table-hover table-vcenter">
                    <thead>
                      <tr>
                        <th>Key Name</th>
                        <th>Key Value</th>
                        <th className="d-none d-sm-table-cell">Status</th>
                        <th className="text-center" style={{ width: "15%" }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fst-italic">Master Key</td>
                        <td className="text-primary">******4t953g</td>
                        <td className="d-none d-sm-table-cell">
                          <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                            ACTIVE
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Delete Key"
                              disabled
                            >
                              <i className="fa fa-fw fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fst-italic">Onboarding</td>
                        <td className="text-primary">******adf43f</td>
                        <td className="d-none d-sm-table-cell">
                          <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                            ACTIVE
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Delete Key"
                            >
                              <i className="fa fa-fw fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fst-italic">Checkout Page</td>
                        <td className="text-primary">******dvsfvz</td>
                        <td className="d-none d-sm-table-cell">
                          <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                            INACTIVE
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Delete Key"
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

            <div className="col-xl-6">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">API Keys</h3>
                  <div className="block-options">
                    <button type="button" className="btn btn-sm btn-secondary">
                      <i className="fa fa-plus"></i> Create
                    </button>
                  </div>
                </div>
                <div className="block-content">
                  <table className="table table-hover table-vcenter">
                    <thead>
                      <tr>
                        <th>Key Name</th>
                        <th>Key Value</th>
                        <th className="d-none d-sm-table-cell">Status</th>
                        <th className="text-center" style={{ width: "15%" }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {apiKeys.map((x, index) => {
                        return (
                          <tr key={index}>
                            <td className="fst-italic">{x.key_name}</td>
                            <td className="text-primary">{x.key_value}</td>
                            <td className="d-none d-sm-table-cell">
                              <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                                ACTIVE
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-alt-secondary"
                                  data-bs-toggle="tooltip"
                                  title="Delete Key"
                                  onClick={() => handleApiDelete(index)}
                                >
                                  <i className="fa fa-fw fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

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
                          <label
                            className="form-label"
                            htmlFor="example-select"
                          >
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
                            <div className="form-check form-check-inline ms-2">
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
                            <div className="form-check form-check-inline ">
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
                            <div className="form-check form-check-inline ms-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="date1"
                                name="dateFormat"
                                value="24hr"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="date1"
                              >
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
                              <label
                                className="form-check-label"
                                htmlFor="date2"
                              >
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
                          <label className="form-label">Tracking</label>
                          <div className="space-x-2">
                            <p className="text-muted">
                              If disabled, Email opens and clicks will NOT be
                              tracked.
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
                                Enabled
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
                                Disabled{" "}
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
                            {/* If you are not able to see this mail, click {here} */}
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
                            If you wish to unsubscribe from our newsletter,
                            {/* click {here} */}
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Transactionalsetting;
