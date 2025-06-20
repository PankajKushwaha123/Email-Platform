import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InfoCard from "./InfoCard";
function TransactionalStats(props) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState();
  const [fdate, setFdate] = useState("");
  const [tdate, setTdate] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);
  const [stats, setStats] = useState({});
  const handleOnClick = async () => {
    try {
      setLoading(true);
      let [day, month, year] = fdate.split("/");
      let f_date = `${year}-${month}-${day}`;
      [day, month, year] = tdate.split("/");
      let t_date = `${year}-${month}-${day}`;

      const response = await axios.post(
        "https://apis.mailmort.co/transactional/statistics",
        {
          from_date: f_date,
          to_date: t_date,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      setEmails(response.data.transactionalEmails);
      setStats(response.data.statistics);
    } catch (error) {
      console.log("errror while fetching campaigns", error);
    } finally {
      setLoading(false);
    }
  };
  const openModal = (x) => {
    setTemp(x);
    handleShow();
  };
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    }
    const fetchTransactionalEmails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://apis.mailmort.co/transactional/history",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setEmails(response.data.transactionalEmails);
        console.log(response);
      } catch (error) {
        alert("not done");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactionalEmails();
  }, []);
  const toggle = props.toggle;
  const mode = props.mode;
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />
      {loading && (
        <div
          className="spinner-border fixed bg-white z-[100] ml-[35%] mt-[25%]"
          role="status"
        ></div>
      )}
      <main id="main-container" className={`${loading ? "blur-md" : ""}`}>
        {show && (
          <>
            {/* <Button variant="primary" onClick={handleShow}></Button>
             */}
            <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="flex flex-row justify-center ">
                    <h className="justify-center">Transactional Email</h>
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
                    Preview text :{" "}
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
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">
                  Transactional Email Statistics
                </h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Analyse the statisctics of transactioanl emails sent using API
                  or SMTP
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
                    Statistics
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Select Dates</h3>
            </div>
            <div className="block-content block-content-full">
              <h2 className="content-heading border-bottom mb-4 pb-2">
                Date Range
              </h2>
              <div className="row">
                <div className="col-lg-4">
                  <p className="fs-sm text-muted">
                    Select range of dates for which statistics to be generated
                  </p>
                </div>
                <div className="col-lg-8 col-xl-6">
                  <div className="mb-4">
                    <div
                      className="input-daterange input-group"
                      data-date-format="mm/dd/yyyy"
                      data-week-start="1"
                      data-autoclose="true"
                      data-today-highlight="true"
                    >
                      <input
                        type="date"
                        className="form-control"
                        id="example-daterange1"
                        name="from_date"
                        value={fdate}
                        style={{ fontSize: "20px" }}
                        placeholder="yyyy-mm-dd"
                        data-week-start="1"
                        data-autoclose="true"
                        data-today-highlight="true"
                        onChange={(e) => {
                          setFdate(e.target.value);
                        }}
                      />
                      <span className="input-group-text fw-semibold">
                        <i className="fa fa-fw fa-arrow-right"></i>
                      </span>

                      <input
                        type="date"
                        className="form-control"
                        id="example-daterange2"
                        name="to_date"
                        value={tdate}
                        style={{ fontSize: "20px" }}
                        onChange={(e) => {
                          setTdate(e.target.value);
                        }}
                        placeholder="yyyy-mm-dd"
                        data-week-start="1"
                        data-autoclose="true"
                        data-today-highlight="true"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleOnClick();
                        }}
                      >
                        Get campiagn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3">
              <InfoCard
                num={(stats.delivery_rate * 100).toFixed(2) + "%"}
                des="Delivery rate"
                li="See Below"
                symbol="far fa-gem fs-3 text-primary"
              />
            </div>
            <div className="col-xl-3">
              <InfoCard
                num={stats.recipients}
                des="Recipients"
                li="View all Contacts"
                symbol="far fa-user-circle fs-3 text-primary"
              />
            </div>
            <div className="col-xl-3">
              <InfoCard
                num={(stats.opening_rate * 100).toFixed(2) + "%"}
                des="Opening rate"
                li="View all messages"
                symbol="far fa-paper-plane fs-3 text-primary"
              />
            </div>
            <div className="col-xl-3">
              <InfoCard
                num={(stats.conversion_rate * 100).toFixed(2) + "%"}
                des="Conversion rate"
                li="View statistics"
                symbol="fa fa-chart-bar fs-3 text-primary"
              />
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Transactional Mails</h3>
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
                      <th className="d-none d-xl-table-cell">
                        Receiver's Email
                      </th>
                      <th>Status</th>
                      <th className="d-none d-sm-table-cell text-center">
                        Opening Status
                      </th>
                      <th className="d-none d-sm-table-cell text-end">Date</th>
                      <th className="d-none d-sm-table-cell text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-sm">
                    {emails.map((x, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <span className="fw-semibold" href="#">
                              {index + 1}
                            </span>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <span className="fw-semibold" href="#">
                              {x.contact_id}
                            </span>
                            <p className="fs-sm fw-medium text-muted mb-0">
                              Subject: {x.subject}
                            </p>
                          </td>
                          <td>
                            <span
                              className={`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill ${
                                x.status === "Processed"
                                  ? "bg-green-600"
                                  : "bg-yellow-500"
                              }`}
                            >
                              {x.status}
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell fw-semibold text-muted text-center">
                            {x.opening_status ? "True" : "False"}
                          </td>
                          <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                            {x.createdAt.substr(0, 10)}
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="View Contacts"
                              onClick={() => {
                                openModal(x);
                              }}
                            >
                              <i className="fa fa-fw fa-pencil"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div className="block-content block-content-full bg-body-light">
              <nav aria-label="Photos Search Navigation">
                <ul className="pagination pagination-sm justify-content-end mb-0">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex="-1"
                      aria-label="Previous"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TransactionalStats;
