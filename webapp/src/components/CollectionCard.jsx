import React from "react";
import CreateIcon from "./CreateIcon";

const getNumberOfCollectionItems = () => {
  return "7";
};
export default function CollectionCard({
  title,
  iconVariant,
  innerIconVarient,
  bgColour,
  innerIconBg,
  customStyles,
}) {
  return (
    <div
      draggable="true"
      className="card mx-3 my-2"
      style={{
        ...customStyles,
        position: "relative",
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
        <div className="dot-menu para1" style={{ color: "#D1D1D1" }}>
          . . .
        </div>
      </button>
      <div
        className="card-body"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div></div>
        <div className="row mt-3">
          <CreateIcon
            iconVariant={iconVariant}
            innerIconVarient={innerIconVarient}
            bgColour={bgColour}
            innerIconBg={innerIconBg}
            customStyles={{ position: "relative" }}
          />
          <span
            className=""
            style={{
              position: "absolute",
              top: "25px",
              right: "80px",
              // display: "grid",
              // placeItems: "center",
              backgroundColor: "#6A82FF",
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
          <p className="para1" style={{ color: "#30387DB0", fontWeight:"600" }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
