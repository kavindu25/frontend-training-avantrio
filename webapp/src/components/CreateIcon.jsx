import React from "react";

export default function CreateIcon({
  iconVariant,
  innerIconVarient,
  bgColour,
  innerIconBg,
  customStyles,
  innerIconCustomStyles,
}) {
  return (
    <button className="btn-icon">
      <div
        className={iconVariant}
        style={{
          ...customStyles,
          backgroundColor: bgColour,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          className={innerIconVarient}
          style={{
            ...innerIconCustomStyles,
            backgroundImage: `url(${innerIconBg})`,
          }}
        ></div>
      </div>
    </button>
  );
}
