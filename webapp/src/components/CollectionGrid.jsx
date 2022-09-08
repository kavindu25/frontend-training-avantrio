import React from "react";
import CollectionCard from "./CollectionCard";
import CollectionCardWide from "./CollectionCardWide";

export default function CollectionGrid({ title, data, isFavourite }) {
  const getNoOfCollections = () => {
    return "4";
  };
  const getCollections = () => {};

  return (
    <div className="my-5 collection-grid">
      <div className="row position-relative ps-4">
        <h3 className="collection-grid-title">{title}</h3>
        {/* horizontal line */}
        <div className="position-absolute horizontal-line"></div>
      </div>
      <div className="row scroll-menu-wrapper ps-4">
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
