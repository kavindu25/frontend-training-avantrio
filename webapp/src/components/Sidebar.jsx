import React from "react";
import { Link } from "react-router-dom";
import AddCollectionCard from "./AddCollectionCard";
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
        <AddCollectionCard />
      </div>
    </div>
  );
}
