import React from "react";
import { Form, SubmitButton, TextField } from "../forms";
import "./card.scss";

export default function AddCollectionCard() {
  return (
    <div className="card px-3 py-4 add-collection-card"> 
      <div className="mx-2 pb-1">
        <p className="para1">Add Collection</p>
      </div>
      <div className="mx-2">
        <Form initialValues={{}}>
          <div className="py-2">
            <TextField
              name="collection_name"
              label="Collection Name"
              placeholder={"Collection name here"}
              inputClass="form-control-lg"
            />
          </div>
          <div className="py-2">
            <TextField
              name="select_icon_color"
              label="Select Icon Color"
              placeholder={"Select a colour"}
              type="color"
              inputClass="form-control-lg px-5"
            />
          </div>
          <div className="py-3">
            <SubmitButton 
                size={"lg"}
                name={"Add Collection"}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
