import React from "react";
import CreateIcon from "./CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";

export default function CollectionCard({
  title,
  iconVariant,
  innerIconVarient,
  bgColour,
  innerIconBg,
  customStyles,
}) {
  const getNumberOfCollectionItems = () => {
    return "7";
  };

  return (
    <div
      draggable="true"
      className="card mx-3 my-5 position-relative"
      style={{
        ...customStyles,
        width: "249px",
        height: "176px",
        display: "grid",
        placeItems: "center",
        cursor: "move",
      }}
    >
      <button
        className="position-absolute"
        style={{
          border: "none",
          backgroundColor: "#FFFFFF",
          top: "3px",
          right: "15px",
        }}
      >
        <h3 className="dot-menu" style={{ color: "#D1D1D1" }}>
          . . .
        </h3>
      </button>
      <div
        className="card-body"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div className="row mt-3">
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_1}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
            bgColour={bgColour}
            innerIconBg={innerIconBg}
          />
          <span
            className="position-absolute top-30 start-60 badge border border-light rounded-circle bg-primary py-2"
            style={{
              position: "absolute",
              top: "25px",
              right: "80px",
              // display: "grid",
              // placeItems: "center",
              color: "#ffffff",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
            }}
          >
            <p className="mx-auto" style={{ align: "center" }}>
              {getNumberOfCollectionItems()}
            </p>
          </span>
        </div>
        <div className="row mt-3">
          <p
            className="para1"
            style={{ color: "#30387DB0", fontWeight: "600" }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
