import React from "react";
import CreateIcon from "./CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";

export default function CollectionCardWide({
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
      className="card mx-3 my-5 position-relative collection-card-wide"
      style={{
        ...customStyles,
      }}
    >
      <button className="position-absolute dot-menu">
        <h3 className="">. . .</h3>
      </button>
      <div className="d-flex align-items-center flex-row py-4 pe-5">
        <div className="me-3">
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_1}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
            bgColour={bgColour}
            innerIconBg={innerIconBg}
          />
        </div>
        <div className="text-primary para1 mb-4">{title}</div>
      </div>
      <div className="favourite-icon">
        <img src="/images/heart-grey.png" alt="heart icon" />
      </div>
    </div>
  );
}
