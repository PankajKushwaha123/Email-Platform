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
import { Link } from "react-router-dom";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import MailItem from "./MailItem";
import Mails from "./module/inboxData.json";
function Inbox(props) {
  const toggle = props.toggle;
  const mode = props.mode;

  /*   const [mode, setMode] = useState(
    "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled "
  );

  const toggle = (e) => {
    if (
      mode ==
      "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-dark page-header-dark dark-mode"
    ) {
      setMode(
        "sidebar-o sidebar-light side-scroll page-header-fixed main-content-narrow"
      );
    } else {
      setMode(
        "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-dark page-header-dark dark-mode"
      );
    }
  }; */
  /* { sidebar-dark page-header-dark dark-mode} */
  return (
    <>
      <div id="page-container" className={mode}>
        <Navigationbar onClickHandler={toggle} />

        <Header />

        <main id="main-container">
          <div className="content">
            <div className="row">
              <div className="col-md-5 col-xl-3">
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

                <div id="one-inbox-side-nav" className="d-none d-md-block push">
                  <div className="block block-rounded">
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
                            href=""
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
                            href="javascript:void(0)"
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
                            href="javascript:void(0)"
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
                            href="javascript:void(0)"
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
                            href="javascript:void(0)"
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
                            href="javascript:void(0)"
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
                          <a className="d-flex py-2" href="javascript:void(0)">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img2}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">Carol White</div>
                              <div className="fw-normal text-muted">
                                sales@domain.com
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className="d-flex py-2" href="javascript:void(0)">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img1}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">Jesse Fisher</div>
                              <div className="fw-normal text-muted">
                                *@domain.com{" "}
                                <span className="fst-italic">
                                  (FULL ACCESS)
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className="d-flex py-2" href="javascript:void(0)">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img3}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">Amber Harvey</div>
                              <div className="fw-normal text-muted">
                                legal@domain.com
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className="d-flex py-2" href="javascript:void(0)">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img4}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">Brian Cruz</div>
                              <div className="fw-normal text-muted">
                                support@domain.com
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className="d-flex py-2" href="javascript:void(0)">
                            <div className="flex-shrink-0 me-3 ms-2 overlay-container overlay-bottom">
                              <img
                                className="img-avatar img-avatar48"
                                src={img5}
                                alt=""
                              />
                              <span className="overlay-item item item-tiny item-circle border border-2 border-white bg-danger"></span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold">David Fuller</div>
                              <div className="fw-normal text-muted">
                                tech@domain.com
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-xl-9">
                <div className="block block-rounded">
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
                        className="btn-block-option"
                        data-toggle="block-option"
                        data-action="fullscreen_toggle"
                      ></button>
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
                                  for="inbox-msg-all"
                                ></label>
                              </div>
                            </td>
                            <td colspan="4">
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
                          {Mails.mails.map((x) => {
                            return (
                              <MailItem
                                key={x.name}
                                name={x.name}
                                subject={x.subject}
                                description={x.description}
                                time={x.time}
                              />
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="one-inbox-new-message"
              tabindex="-1"
              role="dialog"
              aria-labelledby="one-inbox-new-message"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form
                    action="be_pages_generic_inbox.html"
                    method="POST"
                    onSubmit="return false;"
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
            </div>

            <div
              className="modal fade"
              id="one-inbox-message"
              tabindex="-1"
              role="dialog"
              aria-labelledby="one-inbox-message"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-popout"
                role="document"
              >
                <div className="modal-content">
                  <div className="block block-rounded block-transparent mb-0">
                    <div className="block-header block-header-default">
                      <h3 className="block-title">Welcome to our service</h3>
                      <div className="block-options">
                        <button
                          type="button"
                          className="btn-block-option"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Reply"
                          aria-label="Reply"
                        >
                          <i className="fa fa-fw fa-reply"></i>
                        </button>
                        <button
                          type="button"
                          className="btn-block-option"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div
                      className="block-content block-content-full text-center bg-image"
                      style={{
                        backgroundImage: `url(${bg1})`,
                      }}
                    >
                      <img
                        className="img-avatar img-avatar96 img-avatar-thumb"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div className="block-content block-content-full fs-sm d-flex justify-content-between bg-body-light">
                      <a href="javascript:void(0)">user@example.com</a>
                      <span className="text-muted">
                        <em>2 min ago</em>
                      </span>
                    </div>
                    <div className="block-content">
                      <p>Dear John,</p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>
                        Dolor posuere proin blandit accumsan senectus netus
                        nullam curae, ornare laoreet adipiscing luctus mauris
                        adipiscing pretium eget fermentum, tristique lobortis
                        est ut metus lobortis tortor tincidunt himenaeos
                        habitant quis dictumst proin odio sagittis purus mi, nec
                        taciti vestibulum quis in sit varius lorem sit metus mi.
                      </p>
                      <p>Best Regards,</p>
                      <p>Amanda Powell</p>
                    </div>
                    <div className="block-content bg-body-light">
                      <div className="row g-sm items-push fs-sm">
                        <div className="col-md-4">
                          <div className="options-container fx-item-zoom-in mb-2">
                            <img
                              className="img-fluid options-item"
                              src={img6}
                              alt=""
                            />
                            <div className="options-overlay bg-black-75">
                              <div className="options-overlay-content">
                                <a
                                  className="btn btn-sm btn-light"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-download me-1"></i>{" "}
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-muted">01.jpg (350kb)</div>
                        </div>
                        <div className="col-md-4">
                          <div className="options-container fx-item-zoom-in mb-2">
                            <img
                              className="img-fluid options-item"
                              src={img7}
                              alt=""
                            />
                            <div className="options-overlay bg-black-75">
                              <div className="options-overlay-content">
                                <a
                                  className="btn btn-sm btn-light"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-download me-1"></i>{" "}
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-muted">02.jpg (480kb)</div>
                        </div>
                        <div className="col-md-4">
                          <div className="options-container fx-item-zoom-in mb-2">
                            <img
                              className="img-fluid options-item"
                              src={img8}
                              alt=""
                            />
                            <div className="options-overlay bg-black-75">
                              <div className="options-overlay-content">
                                <a
                                  className="btn btn-sm btn-light"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-download me-1"></i>{" "}
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-muted">03.jpg (652kb)</div>
                        </div>
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
    </>
  );
}

export default Inbox;
