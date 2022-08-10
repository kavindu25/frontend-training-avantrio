import React from "react";
import CreateIcon from "./CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";
import CollectionItem from "./CollectionItem";

export default function CollectionItemsCard({ title, data }) {
  const handleAddLink = () => {};
  return (
    <div className="collection-items-card card position-relative">
      <div className="position-absolute" style={{ top: "32px", left: "33px" }}>
        <CreateIcon
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#FFE3B9"}
          innerIconBg={"/images/music.png"}
        />
      </div>
      <div className="position-absolute" style={{ top: "42px", left: "145px" }}>
        <h2>{title}</h2>
      </div>
      <div className="position-absolute" style={{ top: "86px", left: "145px" }}>
        <img src="/images/heart-grey.png" alt="heart icon" />
      </div>
      <div className="">
        <button
          className="position-absolute"
          style={{
            border: "none",
            backgroundColor: "#FFFFFF",
            top: "28px",
            right: "80px",
          }}
        >
          <h3 className="dot-menu" style={{ color: "#D1D1D1" }}>
            . . .
          </h3>
        </button>
      </div>
      <div
        className="collection-items-table position-absolute"
        style={{ top: "156px", left: "57px" }}
      >
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
        <div className="my-3 ">
          <CollectionItem title={"music"} />
        </div>
      </div>
      <div
        className="position-absolute"
        style={{ bottom: "57px", left: "41px" }}
      >
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleAddLink}
          style={{ width: "210px" }}
        >
          Add Link
        </button>
      </div>
    </div>
  );
}
