import React from "react";
import { Form, SubmitButton, TextField } from "../components/forms";
import CreateIcon from "../components/CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";
import CollectionCard from "../components/CollectionCard";
import CollectionGrid from "../components/CollectionGrid";
import Sidebar from "../components/Sidebar";
import CollectionItem from "../components/CollectionItem";
import { AddCollectionCard, AddLinkCard } from "../components/cards";
import CollectionItemsCard from "../components/CollectionItemsCard";

export default function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="container-fluid home-page">
        <div className="heading px-5 py-4">
          <h2>Home</h2>
        </div>
        <div className="px-5 pt-3">
          <button className="btn btn-primary btn-lg">Create Folder</button>
        </div>
        <div className="px-5">
          <CollectionGrid title={"My Favorite"} isFavourite={true} />
          <CollectionGrid title={"Recent Collection"} />
          <CollectionGrid title={"All Collection"} />
        </div>
      </div>
    </div>
  );
}
