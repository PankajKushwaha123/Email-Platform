import React, { useState, useEffect } from "react";
import bg1 from "../assets/media/photos/photo7.jpg";
import img1 from "../assets/media/avatars/avatar10.jpg";
import img2 from "../assets/media/avatars/avatar4.jpg";
import img3 from "../assets/media/avatars/avatar8.jpg";
import img4 from "../assets/media/avatars/avatar13.jpg";
import img5 from "../assets/media/avatars/avatar12.jpg";
import img6 from "../assets/media/photos/photo1.jpg";
import img7 from "../assets/media/photos/photo2.jpg";
import img8 from "../assets/media/photos/photo3.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import MailItem from "./MailItem";
import Mails from "./module/inboxData.json";

function Inbox(props) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mails, setMails] = useState([]);
  const [temp, setTemp] = useState({});
  const toggle = props.toggle;
  const mode = props.mode;
  const [screen, setScreen] = useState("actual");
  const changeScreenSize = () => {
    screen == "actual" ? setScreen("fullscreen") : setScreen("actual");
  };
  useEffect(() => {
    const fetchMails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://apis.mailmort.co/inbox/fetch",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setMails(response.data);
      } catch (error) {
        console.log("errror while fetching mails", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMails();
  }, []);
  return (
    <>
      <div id="page-container" className={mode}>
        <Navigationbar onClickHandler={toggle} />

        <Header />
        {show && (
          <>
            {/* <Button variant="primary" onClick={handleShow}></Button>
             */}
            <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="flex flex-row justify-center ">
                    <h className="justify-center">
                      From: {temp.from.value[0].name} (
                      {temp.from.value[0].address})
                    </h>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  className="modal-dialog modal-lg modal-dialog-popout"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="block block-rounded block-transparent mb-0">
                      <div className="block-header block-header-default">
                        <h3 className="block-title">Subject: {temp.subject}</h3>
                      </div>

                      <div className="block-content">
                        <iframe srcdoc={temp.html}></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>MailMort</Modal.Footer>
            </Modal>
          </>
        )}
        {loading && (
          <div
            className="spinner-border fixed bg-white z-[100] ml-[35%] mt-[25%]"
            role="status"
          ></div>
        )}
        <main id="main-container" className={`${loading ? "blur-md" : ""}`}>
          <div className="content">
            <div className="row">
              <div className="col-md-5 col-xl-1">
                <div className="d-md-none push">
                  <button
                    type="button"
                    className="btn w-100 btn-primary"
                    data-toggle=" className-toggle"
                    data-target="#one-inbox-side-nav"
                    data-class="d-none"
                  >
                    Inbox Menu
                  </button>
                </div>

                {/*  <div id="one-inbox-side-nav" className="d-none d-md-block push">
                  <div className={`block block-rounded block-mode-actual`}>
                    <div className="block-header block-header-default">
                      <h3 className="block-title">Inbox</h3>
                      <div className="block-options">
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#one-inbox-new-message"
                        >
                          <i className="fa fa-pencil-alt me-1 opacity-50"></i>{" "}
                          Compose
                        </button>
                      </div>
                    </div>

                    <div className="block-content">
                      <ul className="nav nav-pills flex-column fs-sm push">
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center active"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-inbox me-1 opacity-50"></i>{" "}
                              Inbox
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              {Mails.mails.length}
                            </span>
                          </a>
                        </li>
                       
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-star me-1 opacity-50"></i>{" "}
                              Starred
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              48
                            </span>
                          </a>
                        </li>
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-paper-plane me-1 opacity-50"></i>{" "}
                              Sent
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              1480
                            </span>
                          </a>
                        </li>
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-pencil-alt me-1 opacity-50"></i>{" "}
                              Draft
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              2
                            </span>
                          </a>
                        </li>
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-folder me-1 opacity-50"></i>{" "}
                              Archive
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              1987
                            </span>
                          </a>
                        </li>
                        <li className="nav-item my-1">
                          <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="#"
                          >
                            <span>
                              <i className="fa fa-fw fa-trash-alt me-1 opacity-50"></i>{" "}
                              Trash
                            </span>
                            <span className="badge rounded-pill bg-black-50">
                              10
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="block block-rounded">
                    <div className="block-header block-header-default">
                      <h3 className="block-title">Manage Inbox Access</h3>
                      <div className="block-options">
                        <button type="button" className="btn-block-option">
                          <Link to="/settings">
                            <i className="si si-settings"></i>
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="block-content">
                      <ul className="nav-items fs-sm">
                        <li>
                          <a className="d-flex py-2" href="#">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img2}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">Hrishikesh</div>
                              <div className="fw-normal text-muted">
                                email addr
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-7 col-xl-9">
                {/* to toogle to full screen block-mode-fullscreen */}
                <div className={`block block-rounded block-mode-${screen} `}>
                  <div className="block-header block-header-default">
                    <h3 className="block-title">
                      15-30{" "}
                      <span className="fw-normal text-lowercase">from</span> 700
                    </h3>
                    <div className="block-options">
                      <button
                        type="button"
                        className="btn-block-option"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Previous 15 Messages"
                      >
                        <i className="si si-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        className="btn-block-option"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Next 15 Messages"
                      >
                        <i className="si si-arrow-right"></i>
                      </button>
                      <button
                        type="button"
                        className="btn-block-option"
                        data-toggle="block-option"
                        data-action="state_toggle"
                        data-action-mode="demo"
                      >
                        <i className="si si-refresh"></i>
                      </button>
                      <button
                        type="button"
                        onClick={changeScreenSize}
                        className="btn-block-option"
                        /* data-toggle="block-option"
                        data-action="fullscreen_toggle" */
                      >
                        <i
                          className={`si si-size-${
                            screen == "fullscreen" ? "actual" : "fullscreen"
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="block-content py-0">
                    <div className="pull-x">
                      <table className="js-table-checkable table table-hover table-vcenter fs-sm">
                        <thead>
                          <tr>
                            <td className="text-center">
                              <div className="form-check d-inline-block">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="inbox-msg15"
                                  name="inbox-msg-all"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inbox-msg-all"
                                ></label>
                              </div>
                            </td>
                            <td colSpan="4">
                              <div className="d-flex justify-content-between">
                                <div className="btn-group">
                                  <button
                                    className="btn btn-sm btn-alt-secondary"
                                    type="button"
                                  >
                                    <i className="fa fa-archive text-primary"></i>
                                    <span className="d-none d-sm-inline ms-1">
                                      Archive
                                    </span>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-alt-secondary"
                                    type="button"
                                  >
                                    <i className="fa fa-star text-warning"></i>
                                    <span className="d-none d-sm-inline ms-1">
                                      Star
                                    </span>
                                  </button>
                                </div>
                                <button
                                  className="btn btn-sm btn-alt-secondary"
                                  type="button"
                                >
                                  <i className="fa fa-times text-danger"></i>
                                  <span className="d-none d-sm-inline ms-1">
                                    Delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {mails.map((x, index) => {
                            return (
                              <tr
                                onClick={() => {
                                  setTemp(x);
                                  setShow(true);
                                }}
                                key={index}
                              >
                                <td
                                  className="text-center"
                                  style={{ width: "60px" }}
                                >
                                  <div className="form-check d-inline-block">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="inbox-msg15"
                                      name="inbox-msg15"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inbox-msg15"
                                    ></label>
                                  </div>
                                </td>
                                <td
                                  className="d-none d-sm-table-cell fw-semibold"
                                  style={{ width: "140px" }}
                                >
                                  {x.from.value[0].name}
                                </td>
                                <td>
                                  <span className="text-sky-700 font-semibold">
                                    {x.subject}
                                  </span>
                                  <div className="text-muted mt-1"></div>
                                </td>
                                <td
                                  className="d-none d-xl-table-cell text-muted"
                                  style={{ width: "80px" }}
                                >
                                  <i className="fa fa-paperclip me-1"></i> (3)
                                </td>
                                <td
                                  className="d-none d-xl-table-cell text-muted"
                                  style={{ width: "120px" }}
                                >
                                  <span>{x.date.substr(0, 10)}</span>
                                </td>
                              </tr>
                            );
                          })}
                          <tr
                            onClick={() => {
                              setShow(true);
                            }}
                          >
                            <td
                              className="text-center"
                              style={{ width: "60px" }}
                            >
                              <div className="form-check d-inline-block">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="inbox-msg15"
                                  name="inbox-msg15"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inbox-msg15"
                                ></label>
                              </div>
                            </td>
                            <td
                              className="d-none d-sm-table-cell fw-semibold"
                              style={{ width: "140px" }}
                            >
                              name
                            </td>
                            <td>
                              <a
                                className="fw-semibold"
                                data-bs-toggle="modal"
                                data-bs-target="#one-inbox-message"
                                href="#"
                              >
                                subject
                              </a>
                              <div className="text-muted mt-1">description</div>
                            </td>
                            <td
                              className="d-none d-xl-table-cell text-muted"
                              style={{ width: "80px" }}
                            >
                              <i className="fa fa-paperclip me-1"></i> (3)
                            </td>
                            <td
                              className="d-none d-xl-table-cell text-muted"
                              style={{ width: "120px" }}
                            >
                              <em>time</em>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <div
              className="modal fade"
              id="one-inbox-new-message"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="one-inbox-new-message"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form
                    action="be_pages_generic_inbox.html"
                    method="POST"
                    onSubmit={() => {}}
                  >
                    <div className="block block-rounded block-transparent mb-0">
                      <div className="block-header block-header-default">
                        <h3 className="block-title">
                          <i className="fa fa-pencil-alt me-1"></i> New Message
                        </h3>
                        <div className="block-options">
                          <button
                            type="button"
                            className="btn-block-option"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <i className="fa fa-fw fa-times"></i>
                          </button>
                          <button
                            type="button"
                            className="btn-block-option"
                            data-toggle="block-option"
                            data-action="fullscreen_toggle"
                          ></button>
                        </div>
                      </div>
                      <div className="block-content">
                        <div className="mb-4">
                          <label className="form-label" htmlFor="message-email">
                            Email
                          </label>
                          <input
                            className="form-control form-control-alt"
                            type="email"
                            id="message-email"
                            name="message-email"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="message-subject"
                          >
                            Subject
                          </label>
                          <input
                            className="form-control form-control-alt"
                            type="text"
                            id="message-subject"
                            name="message-subject"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="message-msg">
                            Message
                          </label>
                          <textarea
                            className="form-control form-control-alt"
                            id="message-msg"
                            name="message-msg"
                            rows="6"
                          ></textarea>
                          <div className="form-text">
                            Feel free to use common tags: &lt;blockquote&gt;,
                            &lt;strong&gt;, &lt;em&gt;
                          </div>
                        </div>
                      </div>
                      <div className="block-content block-content-full text-end bg-body">
                        <button
                          type="button"
                          className="btn btn-sm btn-alt-secondary me-1"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fa fa-paper-plane me-1 opacity-50"></i>{" "}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Inbox;
