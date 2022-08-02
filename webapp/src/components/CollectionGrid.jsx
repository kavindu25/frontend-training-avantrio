import React from "react";
import CollectionCard from "./CollectionCard";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";

const getNoOfCollections = () => {
  return "4";
};
const getCollections = () => {};

export default function CollectionGrid({ title, data }) {
  return (
    <div className="my-5">
      <div className="row" style={{ position: "relative" }}>
        <h3 style={{ color: "#30387DB0" }}>{title}</h3>
        {/* horizontal line */}
        <div
          style={{
            position: "absolute",
            width: "80%",
            top: "10px",
            left: "190px",
            border: "1.18264px solid rgba(48, 56, 125, 0.12)",
          }}
        ></div>
      </div>
      <div className="row scroll-menu-wrapper">
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Documents"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
        <CollectionCard
          title={"Education"}
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#C3FFB9"}
          innerIconBg={"/images/book.png"}
          customStyles={{ flex: "0 0 auto" }}
        />
      </div>
    </div>
  );
}
