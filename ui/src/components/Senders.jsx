import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function Senders(props) {
  const [show, setShow] = useState(false);
  const [em, setEm] = useState("");
  const [sn, setSn] = useState("");
  const toggle = props.toggle;
  const mode = props.mode;
  const [senders, setSenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addSender = () => {
    console.log("inside add sender");

    const addSenders = async () => {
      setLoading(true);
      console.log("sending post");
      try {
        const response = await axios.post(
          "https://apis.mailmort.co/users/senders",
          {
            sender_name: sn,
            sender_email: em,
            reply_to: "211B293@gmail.com",
          },
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        const fetchSenders = async () => {
          try {
            const response = await axios.get(
              "https://apis.mailmort.co/users/senders",
              {
                headers: { Authorization: "Bearer " + Cookies.get("token") },
              }
            );

            setSenders(response.data.senders);
          } catch (error) {
            console.log("errror while fetching ", error);
          } finally {
            setEm("");
            setSn("");
            setLoading(false); // Set loading state to false after the request completes
          }
        };
        fetchSenders();
        //console.log(response);
      } catch (error) {
        console.log("COULD NOT post ", error);
      }
    };
    addSenders();
  };

  useEffect(() => {
    const fetchSenders = async () => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/users/senders",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setSenders(response.data.senders);
      } catch (error) {
        console.log("errror while fetching ", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchSenders();
  }, []);
  // Delete function
  const handleDelete = (index) => {
    const deleteSenders = async () => {
      setLoading(true);
      try {
        const response = await axios.delete(
          "https://apis.mailmort.co/users/senders",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
            data: { email: senders[index].sender_email },
          }
        );
      } catch (error) {
        console.log("COULD NOT DELETE SENDER ", error);
      }
    };
    deleteSenders();
    // Create a new array without the sender at the specified index
    const updatedSenders = senders.filter((_, i) => i !== index);

    // Check if updatedSenders is empty
    if (updatedSenders.length === 0) {
      // If updatedSenders is empty, initialize senders with an empty array
      setSenders([]);
    } else {
      // Otherwise, update the senders state with the new array
      setSenders(updatedSenders);
    }
    setLoading(false);
    // Create a copy of the senders array
  };

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
                  value={em}
                  set={setEm}
                  placeholder="Email"
                />
                <Input
                  name="Name"
                  type="text"
                  value={sn}
                  set={setSn}
                  placeholder="name"
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
                    addSender();
                    handleClose();
                  }}
                >
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Sender Profiles</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Senders are shown in your recipients' inbox when they receive
                  your email. It helps your subscribers to recognize you.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Senders
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
              <h3 className="block-title">Senders</h3>

              <div className="block-options">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <i className="fa fa-plus"></i> Create new sender
                </button>
              </div>
            </div>
            <div className="block-content">
              <table className="table table-hover table-vcenter">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "50px" }}>
                      no.
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {senders.map((x, index) => {
                    return (
                      <tr key={index}>
                        <th className="text-center" scope="row">
                          {index + 1}
                        </th>
                        <td className="fw-semibold fs-sm">{x.sender_name}</td>
                        <td>{x.sender_email}</td>
                        <td className="d-none d-sm-table-cell">
                          <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                            Verified
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

export default Senders;
