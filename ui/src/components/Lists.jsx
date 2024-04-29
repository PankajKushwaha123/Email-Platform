import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import contactsData from "./module/contactsData.json";
import ContactItem from "./ContactItem";
import axios from "axios";
import Cookies from "js-cookie";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
function Lists(props) {
  const [show, setShow] = useState(false);
  const toggle = props.toggle;
  const mode = props.mode;
  const arr = contactsData.contacts;
  const [loading, setLoading] = useState(false);
  const [c, setC] = useState(0);
  const [lists, setLists] = useState([]);
  const [list_id, setList_id] = useState();
  const [list_name, setList_name] = useState("");
  const [emails, setEmails] = useState([]);
  const [options, setOptions] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [contactInList, setContactInList] = useState([]);
  var num = [];
  const navigate = useNavigate();
  const createList = async () => {
    try {
      const response = await axios.post(
        "https://apis.mailmort.co/contacts/createlist",
        {
          list_name,
          emails: options,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      setC(c + 1);
    } catch (error) {
      alert("list not added");
      console.log(" lists not addde", error);
    }
  };
  const getContacts = async () => {
    try {
      const response = await axios.get(
        "https://apis.mailmort.co/contacts/all",
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      setEmails(response.data.contacts);
    } catch (error) {
      alert("could not fetch all contacts");
      console.log(error);
    }
  };
  const getMailingListContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://apis.mailmort.co/contacts/listcontacts",
        {
          list_id,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );

      setContactInList(response.data.contacts);
    } catch (error) {
      console.log("unabe to fetch contacts of that lists", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteLists = (index) => {
    const deleteList = async () => {
      try {
        setLoading(true);
        const response = await axios.delete(
          "https://apis.mailmort.co/contacts/deletelist",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
            data: { list_name: lists[index] },
          }
        );
        setC(c + 1);
      } catch (error) {
        console.log("COULD NOT DELETE Lists ", error);
      } finally {
        setLoading(false);
      }
    };
    deleteList();
    // Create a new array without the sender at the specified index
    const updatedSenders = lists.filter((_, i) => i !== index);

    // Check if updatedSenders is empty
    if (updatedSenders.length === 0) {
      // If updatedSenders is empty, initialize senders with an empty array
      setLists([]);
    } else {
      // Otherwise, update the senders state with the new array
      setLists(updatedSenders);
    }
    // Create a copy of the senders array
  };
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    }
    const fetchLists = async () => {
      try {
        setLoading(true);
        await getContacts();
        const response = await axios.get(
          "https://apis.mailmort.co/contacts/lists",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setLists(response.data.mailing_lists);
      } catch (error) {
        console.log("errror while fetching ", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchLists();
  }, [c]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // If checkbox is checked, add email to the array
    if (checked) {
      setOptions((prevOptions) => [...prevOptions, value]);
    } else {
      // If checkbox is unchecked, remove email from the array
      setOptions((prevOptions) =>
        prevOptions.filter((email) => email !== value)
      );
    }
  };
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />
      {loading && (
        <div className="relative">
          <div
            className="spinner-border fixed bg-white z-[100] ml-[35%] mt-[25%]"
            role="status"
          ></div>
          <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[101]"></div>
        </div>
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
                    <h className="justify-center">Add List</h>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Input
                  name="List Name"
                  type="text"
                  value={list_name}
                  set={setList_name}
                  placeholder="List Name"
                />
                <div className="flex flex-col space-y-1">
                  {/* Checkbox to select all */}
                  <label key={1000}>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          var nu = [];
                          emails.forEach((x) => {
                            nu.push(x.email);
                          });
                          setOptions(nu);
                        } else {
                          setOptions([]);
                        }
                      }}
                    />
                    Select All
                  </label>

                  {emails.map((x, index) => {
                    return (
                      <label key={index + 1}>
                        <input
                          type="checkbox"
                          value={x.email}
                          onChange={handleCheckboxChange}
                        />
                        {x.email}
                      </label>
                    );
                  })}
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
                <Button
                  variant="primary"
                  onClick={() => {
                    createList();
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
                <h1 className="h3 fw-bold mb-2">Contact List</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Create, modify, and manage custom lists for targeted
                  interactions, and keep them in folders for easy navigation.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Contacts
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Lists
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className={`content`}>
          <div className="block block-rounded g-0">
            <div className="tab-content">
              <div className="block-header block-header-default">
                <h3 className="block-title">
                  Contact Lists
                  <small className="fst-italic">
                    (total {lists.length} contacts)
                  </small>
                </h3>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary "
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Create List
                  </button>
                </div>
              </div>
              <div
                className="block-content tab-pane active"
                id="btabs-vertical-home"
                role="tabpanel"
                aria-labelledby="btabs-vertical-home-tab"
              >
                <table className="table table-vcenter">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: "50px" }}>
                        #
                      </th>
                      <th>Name</th>
                      <th className="d-none d-sm-table-cell">Creation Date</th>

                      <th className="text-center" style={{ width: "100px" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lists.map((x, index) => {
                      return (
                        <tr key={index}>
                          <th className="text-center" scope="row">
                            {index + 1}
                          </th>
                          <td className="fw-semibold fs-sm">
                            <a href="#contactsTable">{x}</a>
                          </td>
                          <td className="d-none d-sm-table-cell">27-05-2023</td>

                          <td className="text-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="View Contacts"
                                onClick={() => {
                                  setList_id(x);
                                  getMailingListContacts();
                                  getMailingListContacts();
                                }}
                              >
                                <i className="fa fa-fw fa-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete List"
                                onClick={() => {
                                  deleteLists(index);
                                }}
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

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">
                Contacts in the list{" "}
                <small className="fst-italic">
                  ({contactInList.length} contacts)
                </small>
              </h3>
            </div>
            <div className="block-content block-content-full">
              <table className="table table-bordered table-striped table-vcenter js-dataTable-buttons">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "80px" }}>
                      ID
                    </th>
                    <th>Name</th>
                    <th
                      className="d-none d-sm-table-cell"
                      style={{ width: "30%" }}
                    >
                      Email
                    </th>
                    <th
                      className="d-none d-sm-table-cell"
                      style={{ width: "15%" }}
                    >
                      Lists
                    </th>
                    <th style={{ width: " 15%" }}>Phone No.</th>
                  </tr>
                </thead>
                <tbody>
                  {contactInList.map((x, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center fs-sm">{index + 1}</td>
                        <td className="fw-semibold fs-sm">
                          {x.first_name + " " + x.last_name}
                        </td>
                        <td className="d-none d-sm-table-cell fs-sm">
                          {x.email}
                          <span className="text-muted"></span>
                        </td>
                        <td className="d-none d-sm-table-cell">
                          {x.mailing_lists.join(",")}
                        </td>
                        <td>
                          <span className="text-muted fs-sm">{x.phone}</span>
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

export default Lists;
