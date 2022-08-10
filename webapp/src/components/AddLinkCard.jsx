import React from "react";
import { Form, SubmitButton, TextField } from "./forms";

export default function AddLinkCard() {
  return (
    <div className="card px-3 py-4" style={{width:"407px", height:"365px"}}> 
      <div className="mx-2 pb-1">
        <p className="para1">Add Link</p>
      </div>
      <div className="mx-2">
        <Form initialValues={{}}>
          <div className="py-2">
            <TextField
              name="collection_name"
              label="Link Name"
              placeholder={"Link name here"}
              inputClass="form-control-lg"
            />
          </div>
          <div className="py-2">
            <TextField
              name="select_icon_color"
              label="URL"
              placeholder={"Link URL here"}
              inputClass="form-control-lg"
            />
          </div>
          <div className="py-3">
            <SubmitButton 
                size={"lg"}
                name={"Add Link"}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}