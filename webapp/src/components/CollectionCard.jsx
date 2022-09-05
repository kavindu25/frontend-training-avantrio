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
      className="card mx-3 my-5 position-relative collection-card"
      style={{
        ...customStyles,
      }}
    >
      <button className="position-absolute dot-menu">
        <h3>. . .</h3>
      </button>
      <div className="card-body collection-card-body">
        <div className="row mt-3">
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_1}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
            bgColour={bgColour}
            innerIconBg={innerIconBg}
          />
          <span className="badge border border-light rounded-circle bg-primary py-2 notification-dot-wrapper">
            <p className="mx-auto">{getNumberOfCollectionItems()}</p>
          </span>
        </div>
        <div className="row mt-3">
          <p className="para1 collection-title">{title}</p>
        </div>
      </div>
    </div>
  );
}
