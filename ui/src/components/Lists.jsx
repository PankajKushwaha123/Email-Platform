import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import contactsData from "./module/contactsData.json";
import ContactItem from "./ContactItem";
import axios from "axios";
import Cookies from "js-cookie";

function Lists(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  const arr = contactsData.contacts;
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchLists = async () => {
      try {
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
  }, []);
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />

      <main id="main-container">
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

        <div className="content">
          <div className="block block-rounded g-0">
            <div className="tab-content">
              <div
                className="block-content tab-pane active"
                id="btabs-vertical-home"
                role="tabpanel"
                aria-labelledby="btabs-vertical-home-tab"
              >
                <h4 className="fw-semibold">Contact List</h4>
                <table className="table table-vcenter">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: "50px" }}>
                        #
                      </th>
                      <th>Name</th>
                      <th className="d-none d-sm-table-cell">Creation Date</th>
                      <th className="d-none d-sm-table-cell">Contacts</th>
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
                          <td className="d-none d-sm-table-cell">923</td>
                          <td className="text-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="View Contacts"
                              >
                                <i className="fa fa-fw fa-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete List"
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
                <small className="fst-italic">({arr.length} contacts)</small>
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
                      Type
                    </th>
                    <th style={{ width: " 15%" }}>Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((x) => {
                    return (
                      <ContactItem
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        email={x.name}
                        type={x.type}
                        registered={x.registered}
                      />
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
