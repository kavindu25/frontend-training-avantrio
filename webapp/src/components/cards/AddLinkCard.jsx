import React from "react";
import { Form, SubmitButton, TextField } from "../forms";
import "./card.scss";

export default function AddLinkCard() {
  return (
    <div className="card px-3 py-4 add-link-card">
      <div className="mx-2 pb-1">
        <p className="para1">Add Link</p>
      </div>
      <div className="mx-2">
        <Form initialValues={{ linkName: "", url: "" }}>
          <div className="py-2">
            <TextField
              name="linkName"
              label="Link Name"
              placeholder={"Link name here"}
              inputClass="form-control-lg"
            />
          </div>
          <div className="py-2">
            <TextField
              name="url"
              label="URL"
              placeholder={"Link URL here"}
              inputClass="form-control-lg"
            />
          </div>
          <div className="py-3">
            <SubmitButton size={"lg"} name={"Add Link"} />
          </div>
        </Form>
      </div>
    </div>
  );
}
