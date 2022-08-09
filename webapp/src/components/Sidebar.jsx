import React from "react";
import { Link } from "react-router-dom";
import AddCollection from "./AddCollection";
import CreateIcon from "./CreateIcon";
import Searchbar from "./Searchbar";

export default function Sidebar() {
  return (
    <div className="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div className="row align-items-center">
        <div className="col-6 ms-4">
          <Searchbar />
        </div>
        <div className="col-2">
          <CreateIcon
            bgColour={"#ffffff"}
            customStyles={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid #ffffff",
              boxShadow: "0px 17.7395px 125px rgba(48, 56, 125, 0.32)",
            }}
            innerIconBg={"/images/bell.png"}
            innerIconCustomStyles={{
              width: "18px",
              height: "22px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="col-2">
          <CreateIcon
            bgColour={"#ffffff"}
            customStyles={{
              width: "57px",
              height: "57px",
              borderRadius: "50%",
              border: "2px solid #ffffff",
            }}
            innerIconBg={"/images/man-with-glasses.png"}
            innerIconCustomStyles={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
      <div className="px-4 py-5">
        <AddCollection />
      </div>
    </div>
    // <nav
    //   id="sidebarMenu"
    //   className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    // >
    //   <div className="position-sticky pt-3">
    //     <ul className="nav flex-column">
    //       <li className="nav-item">
    //         <Link className="nav-link active" aria-current="page" to="tables">
    //           <span data-feather="home"></span>
    //           Tables
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="forms">
    //           <span data-feather="file"></span>
    //           Forms
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="modals">
    //           <span data-feather="shopping-cart"></span>
    //           Modals
    //         </Link>
    //       </li>
    //     </ul>

    //     <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
    //       <span>Saved reports</span>
    //       <Link className="link-secondary" to="#" aria-label="Add a new report">
    //         <span data-feather="plus-circle"></span>
    //       </Link>
    //     </h6>
    //     <ul className="nav flex-column mb-2">
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <span data-feather="file-text"></span>
    //           Current month
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <span data-feather="file-text"></span>
    //           Last quarter
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
