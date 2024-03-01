import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
function Contacts() {
  const [mode, setMode] = useState(
    "sidebar-o sidebar-dark side-scroll page-header-fixed main-content-narrow"
  );

  const toggle = () => {
    if (
      mode ==
      "sidebar-o sidebar-dark side-scroll page-header-fixed main-content-narrow"
    ) {
      setMode(
        "sidebar-o sidebar-light side-scroll page-header-fixed main-content-narrow"
      );
    } else {
      setMode(
        "sidebar-o sidebar-dark side-scroll page-header-fixed main-content-narrow"
      );
    }
  };
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
                      <a className="link-fx" href="javascript:void(0)">
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
                  <small className="fst-italic">(total 1454 contacts)</small>
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
                    <tr>
                      <td className="text-center fs-sm">1</td>
                      <td className="fw-semibold fs-sm">Amber Harvey</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client1<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">2</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client2<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">3</td>
                      <td className="fw-semibold fs-sm">Jose Mills</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client3<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">4</td>
                      <td className="fw-semibold fs-sm">Barbara Scott</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client4<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">5</td>
                      <td className="fw-semibold fs-sm">Jesse Fisher</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client5<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">6</td>
                      <td className="fw-semibold fs-sm">Carol Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client6<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">4 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">7</td>
                      <td className="fw-semibold fs-sm">Jack Estrada</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client7<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">8</td>
                      <td className="fw-semibold fs-sm">Lisa Jenkins</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client8<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">4 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">9</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client9<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">10</td>
                      <td className="fw-semibold fs-sm">Danielle Jones</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client10<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">11</td>
                      <td className="fw-semibold fs-sm">Alice Moore</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client11<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">7 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">12</td>
                      <td className="fw-semibold fs-sm">Barbara Scott</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client12<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">13</td>
                      <td className="fw-semibold fs-sm">Henry Harrison</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client13<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">2 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">14</td>
                      <td className="fw-semibold fs-sm">Lisa Jenkins</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client14<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">15</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client15<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">16</td>
                      <td className="fw-semibold fs-sm">Marie Duncan</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client16<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">17</td>
                      <td className="fw-semibold fs-sm">Laura Carr</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client17<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">18</td>
                      <td className="fw-semibold fs-sm">Judy Ford</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client18<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">19</td>
                      <td className="fw-semibold fs-sm">Scott Young</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client19<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">5 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">20</td>
                      <td className="fw-semibold fs-sm">Andrea Gardner</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client20<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">21</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client21<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">22</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client22<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">23</td>
                      <td className="fw-semibold fs-sm">Brian Stevens</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client23<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">24</td>
                      <td className="fw-semibold fs-sm">Albert Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client24<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">25</td>
                      <td className="fw-semibold fs-sm">Albert Ray</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client25<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">26</td>
                      <td className="fw-semibold fs-sm">Scott Young</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client26<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">27</td>
                      <td className="fw-semibold fs-sm">Helen Jacobs</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client27<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">28</td>
                      <td className="fw-semibold fs-sm">Betty Kelley</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client28<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">8 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">29</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client29<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">7 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">30</td>
                      <td className="fw-semibold fs-sm">Ryan Flores</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client30<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">31</td>
                      <td className="fw-semibold fs-sm">Jose Parker</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client31<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">32</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client32<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">33</td>
                      <td className="fw-semibold fs-sm">Lori Grant</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client33<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">34</td>
                      <td className="fw-semibold fs-sm">Melissa Rice</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client34<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          Trial
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">35</td>
                      <td className="fw-semibold fs-sm">Jesse Fisher</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client35<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">
                          Disabled
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">10 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">36</td>
                      <td className="fw-semibold fs-sm">Jack Greene</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client36<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">3 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">37</td>
                      <td className="fw-semibold fs-sm">Wayne Garcia</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client37<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">6 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">38</td>
                      <td className="fw-semibold fs-sm">Henry Harrison</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client38<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">39</td>
                      <td className="fw-semibold fs-sm">Sara Fields</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client39<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">
                          VIP
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">5 days ago</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center fs-sm">40</td>
                      <td className="fw-semibold fs-sm">David Fuller</td>
                      <td className="d-none d-sm-table-cell fs-sm">
                        client40<span className="text-muted">@example.com</span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          Business
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fs-sm">9 days ago</span>
                      </td>
                    </tr>
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
