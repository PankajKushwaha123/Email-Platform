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

  c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = c10 = c11 = c12 = c13 = c;
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
    <div className="js-sidebar-scroll">
      <div className="content-side">
        <ul className="nav-main">
          <li className="nav-main-heading">Inbox</li>
          <li className="nav-main-item">
            <Link to="/inbox">
              {/* error */}
              <a className={c1} href="#">
                <i className="nav-main-link-icon si si-envelope-letter"></i>
                <span className="nav-main-link-name">Admin Inbox </span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Contacts</li>
          <li className="nav-main-item">
            <Link to="/contacts">
              <a className={c2}>
                <i className="nav-main-link-icon si si-users"></i>
                <span className="nav-main-link-name">All Contacts</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/lists">
              <a className={c3}>
                <i className="nav-main-link-icon si si-list"></i>
                <span className="nav-main-link-name">Lists</span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Campaigns</li>
          <li className="nav-main-item">
            <Link to="/Createcampaign">
              <a className={c4}>
                <i className="nav-main-link-icon si si-plus"></i>
                <span className="nav-main-link-name">Create Campaign</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/campaigns">
              <a className={c5}>
                <i className="nav-main-link-icon si si-energy"></i>
                <span className="nav-main-link-name">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/statistics">
              <a className={c6} href="">
                <i className="nav-main-link-icon si si-graph"></i>
                <span className="nav-main-link-name">Statistics</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/settings">
              <a className={c7} href="">
                <i className="nav-main-link-icon si si-settings"></i>
                <span className="nav-main-link-name">Settings</span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Transactional</li>
          <li className="nav-main-item">
            <Link to="/transactional">
              <a className={c8} href="#">
                <i className="nav-main-link-icon si si-vector"></i>
                <span className="nav-main-link-name">Configurations</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/transactionalstats">
              <a className={c9} href="#">
                <i className="nav-main-link-icon si si-bar-chart"></i>
                <span className="nav-main-link-name">Statistics</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/transactionalsetting">
              <a className={c10} href="#">
                <i className="nav-main-link-icon si si-settings"></i>
                <span className="nav-main-link-name">Settings</span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Account</li>
          <li className="nav-main-item">
            <Link to="/senders">
              <a className={c11} href="#">
                <i className="nav-main-link-icon si si-users"></i>
                <span className="nav-main-link-name">Senders</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/domain">
              <a className={c12} href="#">
                <i className="nav-main-link-icon si si-globe-alt"></i>
                <span className="nav-main-link-name">Domains</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/security">
              <a className={c13} href="#">
                <i className="nav-main-link-icon si si-lock"></i>
                <span className="nav-main-link-name">Security</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/myplan">
              <a className={c14} href="#">
                <i className="nav-main-link-icon si si-wallet"></i>
                <span className="nav-main-link-name">My Plan</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/logout">
              <a className={c15} href="#">
                <i className="nav-main-link-icon si si-logout"></i>
                <span className="nav-main-link-name">Log out</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
