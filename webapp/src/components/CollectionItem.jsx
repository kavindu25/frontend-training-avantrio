import React from "react";
import CreateIcon from "./CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";

export default function CollectionItem({ linkName, url }) {
  return (
    <div className="collection-item d-flex align-items-center justify-content-evenly px-1">
      <div className="d-flex align-items-center justify-content-evenly">
        <div>
          <CreateIcon
            bgColour={"#ffffff"}
            customStyles={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              border: "2px solid #ffffff",
              boxShadow: "0px 17.7395px 125px rgba(48, 56, 125, 0.32)",
            }}
            innerIconBg={"/images/link.png"}
            innerIconCustomStyles={{
              width: "22px",
              height: "22px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="mx-3">
          <p className="para1 my-auto ">Link name goes here</p>
        </div>
      </div>
      <div className="url-wrapper">
        <p className="para1 my-auto">
          http//:www.samplelinkgoesheretoexplainthesamplemovielink.com/
        </p>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_3}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
            innerIconBg={"/images/share.png"}
          />
        </div>
        <div>
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_3}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
            innerIconBg={"/images/copy.png"}
          />
        </div>
        <div>
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_3}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
            innerIconBg={"/images/pencil.png"}
          />
        </div>
        <div>
          <CreateIcon
            iconVariant={ICON_TYPES_LIST.TYPE_3}
            innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
            innerIconBg={"/images/trash.png"}
          />
        </div>
      </div>
    </div>
  );
}
