import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="js-sidebar-scroll">
      <div className="content-side">
        <ul className="nav-main">
          <li className="nav-main-heading">Inbox</li>
          <li className="nav-main-item">
            <Link to="/inbox">
              <a className="nav-main-link active" href="inbox">
                <i className="nav-main-link-icon si si-envelope-letter"></i>
                <span className="nav-main-link-name">Admin Inbox</span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Contacts</li>
          <li className="nav-main-item">
            <Link to="/contacts">
              <a className="nav-main-link">
                <i className="nav-main-link-icon si si-users"></i>
                <span className="nav-main-link-name">All Contacts</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/lists">
              <a className="nav-main-link">
                <i className="nav-main-link-icon si si-list"></i>
                <span className="nav-main-link-name">Lists</span>
              </a>
            </Link>
          </li>

          <li className="nav-main-heading">Campaigns</li>
          <li className="nav-main-item">
            <Link to="/Createcampaign">
              <a className="nav-main-link">
                <i className="nav-main-link-icon si si-plus"></i>
                <span className="nav-main-link-name">Create Campaign</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <Link to="/campaigns">
              <a className="nav-main-link">
                <i className="nav-main-link-icon si si-energy"></i>
                <span className="nav-main-link-name">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="nav-main-item">
            <a className="nav-main-link" href="statistics.html">
              <i className="nav-main-link-icon si si-graph"></i>
              <span className="nav-main-link-name">Statistics</span>
            </a>
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
