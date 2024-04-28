import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import axios from "axios";
import Footer from "./Footer";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import moment from "moment-timezone";
function Transactionalsetting(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const toggle = props.toggle;
  const mode = props.mode;

  const [apiKeys, setApiKeys] = useState([]);
  const [counter, setCounter] = useState(0);
  const timezones = moment.tz.names();
  const [key_name, setkey_name] = useState("");

  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [timeFormat, setTimeFormat] = useState(12);
  const [anonymousTracking, setAnonymousTracking] = useState(false);
  const [defaultSender, setDefaultSender] = useState([]);
  const [default_sender, setDefault_sender] = useState("");
  const findSenders = async () => {
    try {
      const response = await axios.get(
        "https://apis.mailmort.co/users/senders",
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      setDefaultSender(response.data.senders);
    } catch (error) {
      console.log("could not add senders lists");
    }
  };
  const changeSettings = async () => {
    try {
      const response = await axios.post(
        "https://apis.mailmort.co/transactional/settings",
        {
          timezone,
          time_format: timeFormat,
          anonymous_tracking: anonymousTracking,
          default_sender,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      alert(" setting changed successfully");
      console.log(anonymousTracking);
    } catch (error) {
      alert("nothiing");
      console.log("could no tchange the setting ", error);
    }
  };
  const addApiKey = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://apis.mailmort.co/transactional/createAPI",
        { key_name },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      setCounter(counter + 1);
    } catch (error) {
      console.log("could not add api keys", error);
    } finally {
      setLoading(false);
    }
  };
  const handleApiDelete = async (index) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        "https://apis.mailmort.co/transactional/deleteAPI",
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
          data: { key_name: apiKeys[index].key_name },
        }
      );
      setCounter(counter + 1);
    } catch (error) {
      alert(" could not delete");
      console.log("error while deleting api keys", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://apis.mailmort.co/transactional/api_keys",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        await findSenders();
        setApiKeys(response.data.api_keys);
      } catch (error) {
        console.log("error while getting api keys");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [counter]);
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />
      <Header />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="flex flex-row justify-center ">
              <h className="justify-center">Add sender</h>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            name="Email"
            type="text"
            value={key_name}
            set={setkey_name}
            placeholder="Key Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setTimeout(() => {
                alert("api key discarded");
              }, 500);
            }}
          >
            Exit
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addApiKey();
              handleClose();
              setTimeout(() => {
                alert("api key added");
              }, 500);
            }}
          >
            Add Api Key
          </Button>
        </Modal.Footer>
      </Modal>
      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">
                  Transactional Email Settings
                  {loading && (
                    <div
                      className="spinner-border overflow-hidden"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
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
            <div className="col-12">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">API Keys</h3>
                  <div className="block-options">
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={handleShow}
                    >
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
                        <th className="d-none d-sm-table-cell">Date</th>
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
                                {x.api_secret}
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
            <div className="col-12">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">General</h3>
                  <div className="block-options">
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={changeSettings}
                    >
                      <i className="fa fa-floppy-disk"></i> Save
                    </button>
                  </div>
                </div>
                <div className="block-content block-content-full">
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
                          onChange={(e) => {
                            setTimezone(e.target.value);
                          }}
                        >
                          <option value="Asia/Kolkata" key={10000}>
                            Asia/Kolkata
                          </option>
                          {timezones.map((x, index) => {
                            return (
                              <option value={x} key={index + 1}>
                                {x}
                              </option>
                            );
                          })}
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
                              value={24}
                              onClick={(e) => {
                                setTimeFormat(24);
                              }}
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
                              value={12}
                              onClick={() => {
                                setTimeFormat(12);
                              }}
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
                              value={true}
                              onChange={(e) => {
                                setAnonymousTracking(e.target.value);
                              }}
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
                              value={false}
                              onChange={(e) => {
                                setAnonymousTracking(e.target.value);
                              }}
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
                    <div className=" space-x-48">
                      <label className="form-label "> select senders</label>
                      <select
                        onChange={(e) => {
                          setDefault_sender(e.target.value);
                        }}
                      >
                        <option value={" "} key={10000}>
                          {" "}
                          select
                        </option>
                        {defaultSender.map((x, index) => {
                          return (
                            <option value={x.sender_email} key={index}>
                              {" "}
                              {x.sender_email}
                            </option>
                          );
                        })}
                      </select>
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

export default Transactionalsetting;
