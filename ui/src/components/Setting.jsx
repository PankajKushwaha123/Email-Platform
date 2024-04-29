import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import axios from "axios";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import moment from "moment-timezone";

var here = 1;
function Setting(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  const timezones = moment.tz.names();
  const [setting, setSetting] = useState({});
  const [testList, setTestList] = useState("");
  const [id, setId] = useState("");
  const [timezone, setTimezone] = useState("");
  const [timeFormat, setTimeFormat] = useState(12);
  const [anonymousTracking, setAnonymousTracking] = useState(false);
  const [defaultSender, setDefaultSender] = useState([]);
  var tz;
  var tf;
  var at;
  var ds;
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
          default_sender: defaultSender,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
    } catch (error) {
      console.log("could no tchange the setting ", error);
    }
  };
  useEffect(() => {
    const getDefaultSetting = async () => {
      try {
        await findSenders();
        const response = await axios.get(
          "https://apis.mailmort.co/campaigns/settings",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        setSetting(response.data.campaign_settings);
        setTestList(setting.test_list.join(","));
        setTimezone(setting.timezone);
        setTimeFormat(setting.time_format);
        setTimeFormat(12);
        setAnonymousTracking(setting.anonymous_tracking);
        setDefaultSender(setting.default_sender);
        console.log(setting.test_list);
      } catch (error) {
        console.log(error);
      }
    };
    getDefaultSetting();
  }, []);
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
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() => {
                      changeSettings();
                    }}
                  >
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
                          <option
                            key={1000000000}
                            value={setting.timezone}
                            onClick={() => {
                              tz = setting.timezone;
                            }}
                          >
                            {setting.timezone}
                          </option>
                          {timezones.map((x, index) => {
                            return (
                              <option
                                key={index}
                                value={x}
                                onClick={() => {
                                  tz = x;
                                }}
                              >
                                {x}
                              </option>
                            );
                          })}
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
                              value={24}
                              checked
                              onClick={() => {
                                tf = 24;
                              }}
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
                              value={12}
                              onClick={() => {
                                tf = 12;
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
                              name="anonymousTracking"
                              value={true}
                              checked={anonymousTracking}
                              onClick={() => {
                                setAnonymousTracking(true);
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
                              name="anonymousTracking"
                              value={false}
                              checked={!anonymousTracking}
                              onClick={() => {
                                setAnonymousTracking(false);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="12hour"
                            >
                              Disabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" space-x-8">
                      <label className="form-label "> select senders</label>
                      <select
                        onChange={(e) => {
                          at = e.target.value;
                        }}
                      >
                        <option value={""} key={10000}>
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
                          value={testList}
                          onChange={(e) => {
                            setTestList(e.target.value);
                          }}
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
