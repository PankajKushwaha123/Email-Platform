import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function Domain(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const toggle = props.toggle;
  const mode = props.mode;
  const [changer, setChanger] = useState(0);
  const navigate = useNavigate();
  const addDomain = () => {
    console.log("inside add sender");

    const addD = async () => {
      setLoading(true);
      console.log("sending post");

      try {
        var domainRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(newDomain)) {
          alert("domain name  in invalid format");
          throw new Error("Invalid domain format.");
        }
        const response = await axios.post(
          "https://apis.mailmort.co/users/domains",
          {
            domain_name: newDomain,
          },
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        setLoading(false);
        setChanger(changer + 1);
        //console.log(response);
      } catch (error) {
        setLoading(false);
        console.log("COULD NOT post ", error);
      }
    };
    addD();
  };
  const handleDelete = (index) => {
    const deleteDomain = async () => {
      setLoading(true);
      try {
        const response = await axios.delete(
          "https://apis.mailmort.co/users/domains",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
            data: { domain_name: domains[index].domain_name },
          }
        );
      } catch (error) {
        console.log("COULD NOT DELETE domain ", error);
      } finally {
        setLoading(false);
      }
    };
    deleteDomain();
    // Create a new array without the sender at the specified index
    const updatedDomains = domains.filter((_, i) => i !== index);

    // Check if updatedSenders is empty
    if (updatedDomains.length === 0) {
      // If updatedSenders is empty, initialize senders with an empty array
      setDomains([]);
    } else {
      // Otherwise, update the senders state with the new array
      setDomains(updatedDomains);
    }
    // Create a copy of the senders array
  };
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    }
    setLoading(true);
    const fetchDomains = async () => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/users/domains",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setDomains(response.data.domains);
      } catch (error) {
        console.log("errror while fetching ", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchDomains();
  }, [changer]);
  const [newDomain, setNewDomain] = useState("");
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />
      <Header />
      {show && (
        <>
          {/* <Button variant="primary" onClick={handleShow}></Button>
           */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="flex flex-row justify-center ">
                  <h className="justify-center">Add Domain</h>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Input
                name="Email"
                type="text"
                value={newDomain}
                set={setNewDomain}
                placeholder="Domain Name"
              />
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
              <Button
                variant="primary"
                onClick={() => {
                  addDomain();
                  handleClose();
                }}
              >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Domains</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Domain indicates from whom an email is sent.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Domains
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Manage
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Domains</h3>
              <div className="block-options">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <i className="fa fa-plus"></i> Add new domain
                </button>
              </div>
            </div>
            <div className="block-content">
              {loading && (
                <div className="spinner-border " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              <table className="table table-hover table-vcenter">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "50px" }}>
                      no
                    </th>
                    <th>Domain</th>
                    <th>Added On</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {domains.map((x, index) => {
                    return (
                      <tr key={index}>
                        <th className="text-center" scope="row">
                          1
                        </th>
                        <td className="fw-semibold fs-sm">{x.domain_name}</td>
                        <td>{x.date}</td>
                        <td className="d-none d-sm-table-cell">
                          <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                            {x.status}
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Remove Client"
                              onClick={() => handleDelete(index)}
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
      </main>

      <Footer />
    </div>
  );
}

export default Domain;
