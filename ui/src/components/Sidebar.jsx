import React from "react";
import { Link, useLocation } from "react-router-dom";
const c = "nav-main-link  ";
var c1 = c + " active";
var c2 = c;
var c3 = c;
var c4 = c;
var c5 = c;
var c6 = c;

function Sidebar() {
  let loc = useLocation().pathname;

  c1 = c2 = c3 = c4 = c5 = c6 = c;
  if (loc == "/inbox") {
    c1 = c + " active";
  } else if (loc == "/contacts") {
    c2 = c + " active";
  } else if (loc == "/lists") {
    c3 = c + " active";
  } else if (loc == "/Createcampaign") {
    c4 = c + " active";
  } else if (loc == "/campaigns") {
    c5 = c + " active";
  } else if (loc == "/statistics") {
    c6 = c + " active";
  }

  return (
    <div className="js-sidebar-scroll">
      <div className="content-side">
        <ul className="nav-main">
          <li className="nav-main-heading">Inbox</li>
          <li className="nav-main-item">
            <Link to="/inbox">
              {/* error */}
              <a className={c1} href="/">
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
            <a className="nav-main-link" href="campaign-settings.html">
              <i className="nav-main-link-icon si si-settings"></i>
              <span className="nav-main-link-name">Settings</span>
            </a>
          </li>

          <li className="nav-main-heading">Transactional</li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="transactional.html">
              <i className="nav-main-link-icon si si-vector"></i>
              <span className="nav-main-link-name">Configurations</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="transactional-statistics.html">
              <i className="nav-main-link-icon si si-bar-chart"></i>
              <span className="nav-main-link-name">Statistics</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="transactional-settings.html">
              <i className="nav-main-link-icon si si-settings"></i>
              <span className="nav-main-link-name">Settings</span>
            </a>
          </li>

          <li className="nav-main-heading">Account</li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="senders.html">
              <i className="nav-main-link-icon si si-users"></i>
              <span className="nav-main-link-name">Senders</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="domains.html">
              <i className="nav-main-link-icon si si-globe-alt"></i>
              <span className="nav-main-link-name">Domains</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="security.html">
              <i className="nav-main-link-icon si si-lock"></i>
              <span className="nav-main-link-name">Security</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="plans.html">
              <i className="nav-main-link-icon si si-wallet"></i>
              <span className="nav-main-link-name">My Plan</span>
            </a>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="logout.html">
              <i className="nav-main-link-icon si si-logout"></i>
              <span className="nav-main-link-name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
