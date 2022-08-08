import React from "react";
import { useField } from "formik";

export default function ColorPicker(name) {
  return (
    <div>
      <label>Color Picker</label>
      <input
        className="form-control"
        placeholder="selec a color..."
        type={"color"}
      ></input>
    </div>
  );
}
