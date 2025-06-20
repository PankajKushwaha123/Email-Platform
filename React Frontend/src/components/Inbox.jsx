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
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";

function Inbox(props) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mails, setMails] = useState([]);
  const [temp, setTemp] = useState({});
  const toggle = props.toggle;
  const mode = props.mode;
  const navigate = useNavigate();
  const [screen, setScreen] = useState("actual");
  const changeScreenSize = () => {
    screen == "actual" ? setScreen("fullscreen") : setScreen("actual");
  };
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    }
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
              </div>
              <div className="col-md-7 col-xl-9">
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
                              <tr key={index}>
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
                                  onClick={() => {
                                    setTemp(x);
                                    setShow(true);
                                  }}
                                >
                                  {x.from.value[0].name}
                                </td>
                                <td
                                  onClick={() => {
                                    setTemp(x);
                                    setShow(true);
                                  }}
                                >
                                  <span className="text-sky-700 font-semibold">
                                    {x.subject}
                                  </span>
                                  <div className="text-muted mt-1"></div>
                                </td>
                                <td
                                  className="d-none d-xl-table-cell text-muted"
                                  style={{ width: "80px" }}
                                  onClick={() => {
                                    setTemp(x);
                                    setShow(true);
                                  }}
                                >
                                  <i className="fa fa-paperclip me-1"></i> (3)
                                </td>
                                <td
                                  className="d-none d-xl-table-cell text-muted"
                                  style={{ width: "120px" }}
                                  onClick={() => {
                                    setTemp(x);
                                    setShow(true);
                                  }}
                                >
                                  <span>{x.date.substr(0, 10)}</span>
                                </td>
                              </tr>
                            );
                          })}
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
