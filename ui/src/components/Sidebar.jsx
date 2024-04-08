import React from "react";
import { Link, useLocation } from "react-router-dom";
const c = "nav-main-link  ";
var c1 = c + " active";
var c2 = c;
var c3 = c;
var c4 = c;
var c5 = c;
var c6 = c;
var c7 = c;
var c8 = c;
var c9 = c;
var c10 = c;
var c11 = c;
var c12 = c;
var c13 = c;
var c14 = c;
var c15 = c;
function Sidebar() {
  let loc = useLocation().pathname;

  c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = c10 = c11 = c12 = c13 = c14 = c15 = c;
  if (loc == "/inbox") {
    c1 = c + " active";
  } else if (loc == "/contacts") {
    c2 = c + " active";
    c1 = c;
  } else if (loc == "/lists") {
    c3 = c + " active";
    c1 = c;
  } else if (loc == "/Createcampaign") {
    c4 = c + " active";
    c1 = c;
  } else if (loc == "/campaigns") {
    c5 = c + " active";
    c1 = c;
  } else if (loc == "/statistics") {
    c6 = c + " active";
    c1 = c;
  } else if (loc == "/settings") {
    c7 = c + " active";
    c1 = c;
  } else if (loc == "/transactional") {
    c8 = c + "active";
    c1 = c;
  } else if (loc == "/transactionalstats") {
    c9 = c + " active";
    c1 = c;
  } else if (loc == "/transactionalsetting") {
    c10 = c + " active";
    c1 = c;
  } else if (loc == "/senders") {
    c11 = c + " active";
    c1 = c;
  } else if (loc == "/domain") {
    c12 = c + " active";
    c1 = c;
  } else if (loc == "/security") {
    c13 = c + " active";
    c1 = c;
  } else if (loc == "/myplan") {
    c14 = c + " active";
  } else if (loc == "/logout") {
    c15 = c + " active";
  }

  return (
    <div className="js-sidebar-scroll ">
      <div className="content-side ">
        <ul className="nav-main">
          <li className="nav-main-heading">Inbox</li>
          <li className="nav-main-item">
            <Link to="/inbox" className={c1}>
              {/* error */}

              <i className="nav-main-link-icon si si-envelope-letter"></i>
              <span className="nav-main-link-name">Admin Inbox </span>
            </Link>
          </li>

          <li className="nav-main-heading">Contacts</li>
          <li className="nav-main-item">
            <Link to="/contacts" className={c2}>
              <i className="nav-main-link-icon si si-users"></i>
              <span className="nav-main-link-name">All Contacts</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/lists" className={c3}>
              <i className="nav-main-link-icon si si-list"></i>
              <span className="nav-main-link-name">Lists</span>
            </Link>
          </li>

          <li className="nav-main-heading">Campaigns</li>
          <li className="nav-main-item">
            <Link to="/Createcampaign" className={c4}>
              <i className="nav-main-link-icon si si-plus"></i>
              <span className="nav-main-link-name">Create Campaign</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/campaigns" className={c5}>
              <i className="nav-main-link-icon si si-energy"></i>
              <span className="nav-main-link-name">Dashboard</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/statistics" className={c6}>
              <i className="nav-main-link-icon si si-graph"></i>
              <span className="nav-main-link-name">Statistics</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/settings" className={c7}>
              <i className="nav-main-link-icon si si-settings"></i>
              <span className="nav-main-link-name">Settings</span>
            </Link>
          </li>

          <li className="nav-main-heading">Transactional</li>
          <li className="nav-main-item">
            <Link to="/transactional" className={c8}>
              <i className="nav-main-link-icon si si-vector"></i>
              <span className="nav-main-link-name">Configurations</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/transactionalstats" className={c9}>
              <i className="nav-main-link-icon si si-bar-chart"></i>
              <span className="nav-main-link-name">Statistics</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/transactionalsetting" className={c10}>
              <i className="nav-main-link-icon si si-settings"></i>
              <span className="nav-main-link-name">Settings</span>
            </Link>
          </li>

          <li className="nav-main-heading">Account</li>
          <li className="nav-main-item">
            <Link to="/senders" className={c11}>
              <i className="nav-main-link-icon si si-users"></i>
              <span className="nav-main-link-name">Senders</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/domain" className={c12}>
              <i className="nav-main-link-icon si si-globe-alt"></i>
              <span className="nav-main-link-name">Domains</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/security" className={c13}>
              <i className="nav-main-link-icon si si-lock"></i>
              <span className="nav-main-link-name">Security</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/myplan" className={c14}>
              <i className="nav-main-link-icon si si-wallet"></i>
              <span className="nav-main-link-name">My Plan</span>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/logout" className={c15}>
              <i className="nav-main-link-icon si si-logout"></i>
              <span className="nav-main-link-name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
