import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import contactsData from "./module/contactsData.json";
import ContactItem from "./ContactItem";
function Contacts(props) {
  const toggle = props.toggle;
  const mode = props.mode;
  let id = 0;
  const arr = contactsData.contacts;
  return (
    <>
      <div id="page-container" className={mode}>
        <Navigationbar onClickHandler={toggle} />
        <Header />

        <main id="main-container">
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
                    (total {arr.length} contacts)
                  </small>
                </h3>
                <div className="block-options">
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="fa fa-floppy-disk"></i> Import Contacts
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
                        Type
                      </th>
                      <th style={{ width: "15%" }}>Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((x) => {
                      return (
                        <ContactItem
                          key={x.id}
                          id={x.id}
                          name={x.name}
                          email={x.email}
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
    </>
  );
}

export default Contacts;
