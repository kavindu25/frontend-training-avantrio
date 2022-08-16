import React from "react";
import CreateIcon from "./CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";
import CollectionItem from "./CollectionItem";
import { useModal } from "../hooks/modalsHooks";

export default function CollectionItemsCard({ title, data }) {
  const { showModal } = useModal();
  const handleAddLink = () => {};
  return (
    <div className="collection-items-card card position-relative">
      <div className="collection-icon">
        <CreateIcon
          iconVariant={ICON_TYPES_LIST.TYPE_1}
          innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
          bgColour={"#FFE3B9"}
          innerIconBg={"/images/music.png"}
        />
      </div>
      <div className="position-absolute collection-title">
        <h2>{title}</h2>
      </div>
      <div className="position-absolute favourite-icon">
        <img src="/images/heart-grey.png" alt="heart icon" />
      </div>
      <div>
        <button className="position-absolute dot-menu">
          <h3>. . .</h3>
        </button>
      </div>
      <div className="collection-items-table position-absolute">
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
      <div className="position-absolute add-link-btn-wrapper">
        <button
          type="button"
          className="btn btn-primary btn-lg add-link-btn"
          //   onClick={handleAddLink}
          onClick={() => {
            showModal({
              modalType: "SuccessModal",
              modalProps: { isLink: "true" },
            });
          }}
        >
          Add Link
        </button>
      </div>
    </div>
  );
}
