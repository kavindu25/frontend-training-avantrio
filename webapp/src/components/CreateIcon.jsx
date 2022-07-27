import React from "react";

export default function CreateIcon({
  iconVariant,
  bgColour,
  bgIcon,
  customStyles,
  bgIconCustomStyles,
}) {
  let iconStyle = "";
  let iconStyleInner = "";

  const getStyles = () => {
    if (iconVariant === "type1") {
      iconStyle = "icon-type-1";
    } else if (iconVariant === "type2") {
      iconStyle = "icon-type-2";
    } else if (iconVariant === "type3") {
      iconStyle = "icon-type-3";
    }
    return iconStyle;
  };

  const getInnerStyles = () => {
    if (iconVariant === "type1") {
      iconStyleInner = "icon-type-1-inner";
    } else if (iconVariant === "type2") {
      iconStyleInner = "icon-type-2-inner";
    } else if (iconVariant === "type3") {
      iconStyleInner = "icon-type-3-inner";
    }
    return iconStyleInner;
  };

  return (
    <div>
      <div
        className={getStyles()}
        style={{
          ...customStyles,
          backgroundColor: bgColour,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          className={getInnerStyles()}
          style={{
            ...bgIconCustomStyles,
            backgroundImage: `url(${bgIcon})`,
            // background:
            //   "url(https://www.facebook.com/images/fb_icon_325x325.png)",
          }}
        ></div>
      </div>
    </div>
  );
}
