import React from "react";
import CollectionCard from "./CollectionCard";
import CollectionCardWide from "./CollectionCardWide";

export default function CollectionGrid({ title, data, isFavourite }) {
  const getNoOfCollections = () => {
    return "4";
  };
  const getCollections = () => {};

  return (
    <div className="my-5">
      <div className="row position-relative">
        <h3 style={{ color: "#30387DB0" }}>{title}</h3>
        {/* horizontal line */}
        <div
          className="position-absolute"
          style={{
            width: "80%",
            top: "10px",
            left: "190px",
            border: "1.18264px solid rgba(48, 56, 125, 0.12)",
          }}
        ></div>
      </div>
      <div className="row scroll-menu-wrapper">
        <>
          {isFavourite ? (
            <>
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
              <CollectionCardWide
                title={"Music"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
            </>
          ) : (
            <>
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Documents"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
              <CollectionCard
                title={"Education"}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
                customStyles={{ flex: "0 0 auto" }}
              />
            </>
          )}
        </>
      </div>
    </div>
  );
}
