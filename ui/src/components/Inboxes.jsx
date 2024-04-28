import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Inboxes(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [inboxes, setInboxes] = useState([]);
  const [admin, setAdmin] = useState("");
  const [domain, setDomain] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [senderEmail, setSenderEmail] = useState("");
  const [senders, setSenders] = useState([]);
  const handleSelectChange = (event) => {
    setDomain(event.target.value);
    console.log("inside change:" + domain);
  };
  const addInbox = () => {
    console.log("inside add sender");

    const addInb = async () => {
      setLoading(true);

      try {
        const response = await axios.post(
          "https://apis.mailmort.co/users/inboxes",
          {
            username: admin,
            domain: domain,
          },
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        const fetchInboxes = async () => {
          try {
            const response = await axios.get(
              "https://apis.mailmort.co/users/inboxes",
              {
                headers: { Authorization: "Bearer " + Cookies.get("token") },
              }
            );

            setInboxes(response.data.inboxes);
          } catch (error) {
            console.log("errror while fetching inboxes", error);
          } finally {
            setAdmin("");
            setDomain("");
            setLoading(false); // Set loading state to false after the request completes
          }
        };
        fetchInboxes();
        //console.log(response);
      } catch (error) {
        console.log(admin, domain);
        console.log("COULD NOT post ", error);
      } finally {
        setLoading(false);
      }
    };
    addInb();
  };
  useEffect(() => {
    const fetchSenders = async () => {
      try {
        const response2 = await axios.get(
          "https://apis.mailmort.co/users/domains",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setSenders(response2.data.domains);
        const response = await axios.get(
          "https://apis.mailmort.co/users/inboxes",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setInboxes(response.data.inboxes);
      } catch (error) {
        console.log("errror while fetching inboxes ", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchSenders();
  }, []);
  const handleDelete = (index) => {
    const deleteInboxes = async () => {
      try {
        const response = await axios.delete(
          "https://apis.mailmort.co/users/inboxes",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
            data: {
              username: inboxes[index].username,
              domain: inboxes[index].domain,
            },
          }
        );
      } catch (error) {
        console.log("COULD NOT DELETE INBOXES ", error);
        setLoading(false);
      }
      setLoading(false);
    };
    deleteInboxes();
    // Create a new array without the sender at the specified index
    const updatedInboxes = inboxes.filter((_, i) => i !== index);

    // Check if updatedSenders is empty
    if (updatedInboxes.length === 0) {
      // If updatedSenders is empty, initialize senders with an empty array
      setInboxes([]);
    } else {
      // Otherwise, update the senders state with the new array
      setInboxes(updatedInboxes);
    }
    // Create a copy of the senders array
  };
  return (
    <div id="page-container" className={props.mode}>
      <Navigationbar onClickHandler={props.toggle} />
      <Header />
      {show && (
        <>
          {/* <Button variant="primary" onClick={handleShow}></Button>
           */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="flex flex-row justify-center ">
                  <h className="justify-center">Create Inbox</h>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Input
                name="Email"
                type="text"
                value={admin}
                set={setAdmin}
                placeholder="Username"
              />

              <select
                className="form-select w-[90%] bg-slate-200 text-slate-700 font-bold"
                id="example-select"
                name="example-select"
                value={domain}
                onChange={handleSelectChange}
              >
                <option>Select</option>
                {senders.map((x, index) => {
                  return (
                    <option key={index} value={x.domain_name}>
                      {x.domain_name}
                    </option>
                  );
                })}
              </select>
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
                  addInbox();
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
                <h1 className="h3 fw-bold mb-2">Inboxes</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  content for description/........
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Inboxes</h3>

              <div className="block-options">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <i className="fa fa-plus"></i> Create New Inbox
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
                      no.
                    </th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {inboxes.map((x, index) => {
                    return (
                      <tr key={index}>
                        <th className="text-center" scope="row">
                          {index + 1}
                        </th>
                        <td>
                          {x.username}@{x.domain}
                        </td>
                        <td className="d-none d-sm-table-cell">
                          <span
                            className={`fs-xs fw-semibold ${
                              x.status[0] == "P"
                                ? "bg-yellow-300"
                                : "bg-green-600"
                            } d-inline-block py-1 px-3 rounded-pill`}
                          >
                            {x.status}
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Edit Client"
                            >
                              <i className="fa fa-fw fa-pencil-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary"
                              data-bs-toggle="tooltip"
                              title="Remove Client"
                              onClick={() => handleDelete(index)}
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
      </main>
      <Footer />
    </div>
  );
}

export default Inboxes;
