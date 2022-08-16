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
        className={[iconVariant, "outter-varient"].join(" ")}
        style={{
          ...customStyles,
          backgroundColor: bgColour,
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
