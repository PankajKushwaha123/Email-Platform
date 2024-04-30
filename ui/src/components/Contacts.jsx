import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Input from "./Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Contacts(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggle = props.toggle;
  const [loading, setLoading] = useState(true);
  const mode = props.mode;
  const [mailing_lists, setMailing_lists] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    mailing_lists: [],
    notes: "",
    history: [],
    street: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
  });
  const [c, setC] = useState(0);
  const deleteContacts = async (index) => {
    try {
      var emails = [];
      emails.push(contacts[index].email);
      const response = await axios.delete(
        "https://apis.mailmort.co/contacts/delete",
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
          data: { emails },
        }
      );
      console.log(response);
      setC(c + 1);
      const updatedContacts = contacts.filter((_, i) => i !== index);
      if (updatedContacts.length === 0) {
        // If updatedSenders is empty, initialize senders with an empty array
        setContacts([]);
      } else {
        // Otherwise, update the senders state with the new array
        setContacts(updatedContacts);
      }
      alert("deleted");
    } catch (error) {
      alert("could not delete the contact");
    }
  };
  const handleChangemail = (event) => {
    const options = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(options);
    setFormData({
      ...formData,
      mailing_lists: selectedOptions,
    });
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    }
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/contacts/all",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        const mailing_lists_response = await axios.get(
          "https://apis.mailmort.co/contacts/lists",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        setContacts(response.data.contacts);
        setMailing_lists(mailing_lists_response.data.mailing_lists);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };

    fetchContacts();
  }, [c]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let first_name = formData.first_name;
      let last_name = formData.last_name;
      let email = formData.first_name;
      let phone = formData.phone;
      let mailing_lists = selectedOptions;
      let notes = formData.notes;
      let history = formData.history;
      let street = formData.street;
      let city = formData.city;
      let state = formData.state;
      let country = formData.country;
      let postal_code = formData.postal_code;

      const response = await axios.post(
        "https://apis.mailmort.co/contacts/add",
        {
          first_name,
          last_name,
          email,
          phone,
          mailing_lists,
          notes,
          history,
          street,
          city,
          state,
          country,
          postal_code,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      );
      alert("sent");
      setC(c + 1);
      console.log(selectedOptions);

      console.log("Success:", response.data);
    } catch (error) {
      console.error("not able to submit form data ", error);
    }
  };
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
                  <div className="flex flex-row ">
                    <h className="justify-center">Add Contact</h>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-row space-x-2">
                    <Input
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="First name"
                    />
                    <Input
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <Input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Street"
                    />
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full shadow-md bg-slate-200 text-black"
                    placeholder="Notes"
                  ></textarea>
                  <div className=" flex flex-col w-full">
                    <select multiple onChange={handleChangemail}>
                      {mailing_lists.map((x, index) => {
                        return (
                          <option value={x} className="bg-sky-100">
                            {x}
                          </option>
                        );
                      })}
                    </select>

                    <p>Selected options: {selectedOptions.join(", ")}</p>
                  </div>
                  <div className="flex flex-row mx-1 space-x-4">
                    <Input
                      input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                    />
                    <Input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                    />
                    <Input
                      type="text"
                      name="postal_code"
                      value={formData.postal_code}
                      onChange={handleChange}
                      placeholder="Postal Code"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
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
                    handleClose();
                  }}
                >
                  Add
                </Button>
              </Modal.Footer>
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
          <div className="bg-body-light">
            <div className="content content-full">
              <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
                <div className="flex-grow-1">
                  <h1 className="h3 fw-bold mb-2">Contacts</h1>
                  <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                    This is your contact database. From here, you can view,
                    organize and manage your contacts, individually or as a
                    group.
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
                      All contacts
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">
                  All Contacts{" "}
                  <small className="fst-italic">
                    (total {contacts.length} contacts)
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
                    {/*  <input
                      type="file"
                      name=" import contacts"
                      placeholder="import contacts"
                      className="text-blue-500"

                    /> */}
                    add contact
                  </button>
                </div>
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
                      <th style={{ width: "15%" }}>Phone Number</th>
                      <th style={{ width: "15%" }}>delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((x, index) => {
                      return (
                        <tr key={index + 1}>
                          <td className="text-center fs-sm">{index + 1}</td>
                          <td className="fw-semibold fs-sm">
                            {x.first_name + " " + x.last_name}
                          </td>
                          <td className="d-none d-sm-table-cell fs-sm">
                            {x.email}
                            <span className="text-muted"></span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            {x.mailing_lists}
                          </td>
                          <td>
                            <span className="text-muted fs-sm">{x.phone}</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Delete List"
                              onClick={() => {
                                deleteContacts(index);
                              }}
                            >
                              <i className="fa fa-fw fa-trash"></i>
                            </button>
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
    </>
  );
}

export default Contacts;
