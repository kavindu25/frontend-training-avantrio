import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="tables">
              <span data-feather="home"></span>
              Tables
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="forms">
              <span data-feather="file"></span>
              Forms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="modals">
              <span data-feather="shopping-cart"></span>
              Modals
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <Link className="link-secondary" to="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text"></span>
              Current month
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text"></span>
              Last quarter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
