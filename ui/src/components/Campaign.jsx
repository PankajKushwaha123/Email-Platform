import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie";
import axios from "axios";

import data from "./module/dashbord.json";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Campaign(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggle = props.toggle;
  const mode = props.mode;
  const arr = data.rows;
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [temp, setTemp] = useState();
  const openModal = (x) => {
    setTemp(x);
    setShow(true);
  };
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("https://apis.mailmort.co/campaigns", {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        });

        setCampaigns(response.data.campaigns);
      } catch (error) {
        console.log("errror while fetching ", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />

      <main id="main-container">
        {show && (
          <>
            {/* <Button variant="primary" onClick={handleShow}></Button>
             */}
            <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="flex flex-row justify-center ">
                    <h className="justify-center">{temp.campaign_name}</h>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <span className="text-slate-900 font-bold">Subject : </span>
                  {temp.subject}
                </div>
                <div>
                  <span className="text-slate-900 font-bold "> Status : </span>
                  {temp.status}
                </div>
                <div>
                  <span className="text-slate-900 font-bold ">
                    {" "}
                    preview_text :{" "}
                  </span>
                  {temp.preview_text}
                </div>
                <div>
                  <span className="text-slate-900 font-bold "> content : </span>
                  <iframe
                    srcDoc={temp.content}
                    title="Content Frame"
                    width="100%"
                    height="300"
                  ></iframe>
                </div>
                <div>
                  <span className="font-bold text-slate-950">Emails</span>
                  <div className="table-responsive">
                    <table className="table table-hover table-vcenter">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="d-none d-xl-table-cell">Email id</th>
                          <th>Delivered</th>
                          <th className="d-none d-sm-table-cell text-center">
                            Opened
                          </th>
                          <th className="d-none d-sm-table-cell text-end">
                            Clicks
                          </th>
                          <th className="d-none d-sm-table-cell text-end">
                            Unsubcribed
                          </th>
                        </tr>
                      </thead>
                      <tbody className="fs-sm">
                        {temp.mails.map((x, index) => {
                          return (
                            <tr>
                              <td>
                                <a className="fw-semibold" href="#">
                                  {index + 1}{" "}
                                </a>
                              </td>
                              <td className="d-none d-xl-table-cell">
                                <a className="fw-semibold" href="#">
                                  {x.contact_id}
                                </a>
                              </td>
                              <td>
                                {x.statistics.delivery_status
                                  ? "true"
                                  : "false"}
                              </td>
                              <td className=" flex flex-row justify-center">
                                {x.statistics.opening_status ? "true" : "false"}
                              </td>
                              <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                                {x.statistics.clicks}
                              </td>
                              <td className=" flex flex-row justify-center">
                                {x.statistics.unsubscription ? "true" : "false"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Exit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
        <div className="content">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-2 text-center text-md-start">
            <div className="flex-grow-1 mb-1 mb-md-0">
              <h1 className="h3 fw-bold mb-2">Campaign Dashboard</h1>
              <h2 className="h6 fw-medium fw-medium text-muted mb-0">
                Welcome{" "}
                <a className="fw-semibold" href="#">
                  user...
                </a>
                , everything looks great.
              </h2>
            </div>
            <div className="mt-3 mt-md-0 ms-md-3 space-x-1">
              <Link
                className="btn btn-sm btn-alt-secondary space-x-1"
                to="/Createcampaign"
              >
                <i className="fa fa-add opacity-50"></i>
                <span>Create a campaign</span>
              </Link>
            </div>
          </div>
        </div>
        {loading && (
          <div
            className="spinner-border fixed bg-white z-[100] ml-[35%] mt-[25%]"
            role="status"
          ></div>
        )}
        <div className={`${loading ? "blur-md " : " "} content`}>
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">All Campaigns (Total: 32)</h3>
              <div className="block-options space-x-1">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary"
                  data-toggle="class-toggle"
                  data-target="#one-dashboard-search-orders"
                  data-classname="d-none"
                >
                  <i className="fa fa-search"></i>
                </button>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn btn-sm btn-alt-secondary"
                    id="dropdown-recent-orders-filters"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-fw fa-flask"></i>
                    Filters
                    <i className="fa fa-angle-down ms-1"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-md dropdown-menu-end fs-sm"
                    aria-labelledby="dropdown-recent-orders-filters"
                  >
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Pending
                      <span className="badge bg-primary rounded-pill">20</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Active
                      <span className="badge bg-primary rounded-pill">72</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Completed
                      <span className="badge bg-primary rounded-pill">890</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      All
                      <span className="badge bg-primary rounded-pill">997</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="one-dashboard-search-orders"
              className="block-content border-bottom d-none"
            >
              <form
                action="be_pages_dashboard.html"
                method="POST"
                onSubmit={() => {}}
              >
                <div className="push">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-alt"
                      id="one-ecom-orders-search"
                      name="one-ecom-orders-search"
                      placeholder="Search all orders.."
                    />
                    <span className="input-group-text bg-body border-0">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="block-content block-content-full">
              <div className="table-responsive">
                <table className="table table-hover table-vcenter">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="d-none d-xl-table-cell">campaign name</th>
                      <th>Status</th>
                      <th className="d-none d-sm-table-cell text-center">
                        NO OF RECEPICIENTS
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        Created at
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-sm ">
                    {campaigns.map((x, index) => {
                      return (
                        <tr>
                          <td>
                            <a className="fw-semibold" href="#">
                              {index + 1}{" "}
                            </a>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a className="fw-semibold" href="#">
                              {x.campaign_name}
                            </a>
                            <p className="fs-sm fw-medium text-muted mb-0">
                              <span className=" text-slate-900">
                                Subject :{" "}
                              </span>
                              {x.subject}
                            </p>
                          </td>
                          <td>
                            <span
                              className={`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-${"success"}`}
                            >
                              {x.status}
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <div className="flex flex-row justify-center">
                              {x.mails.length}
                            </div>
                          </td>
                          <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                            {x.createdAt.substring(0, 10)}
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            <div className="btn-group">
                              {x.status == "Draft" && (
                                <Link to={`/Createcampaign?id=${x._id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-alt-secondary"
                                    data-bs-toggle="tooltip"
                                    title="Edit Client"
                                  >
                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                  </button>
                                </Link>
                              )}
                              {x.status != "Draft" && (
                                <button
                                  type="button"
                                  className="btn btn-sm btn-alt-secondary"
                                  data-bs-toggle="tooltip"
                                  title="View Details"
                                  onClick={() => openModal(x)}
                                >
                                  <i className="fa fa-fw fa-search"></i>
                                </button>
                              )}
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary"
                                data-bs-toggle="tooltip"
                                title="Remove Client"
                                onClick={() => {}}
                              >
                                <i className="fa fa-fw fa-times"></i>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Campaign;
