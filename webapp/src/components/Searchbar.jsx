import React from "react";
import { Form, TextField } from "./forms";
export default function Searchbar() {
  return (
    <div className="row py-4">
      <div className="">
        <Form initialValues={{ searchbar: "" }}>
          <TextField
            name="searchbar"
            placeholder={"Search"}
            inputClass="form-control-lg searchbar px-5"
            style={{
              backgroundImage: 'url("/images/search.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px 20px",
            }}
          />
        </Form>
      </div>
    </div>
  );
}
