import React from "react";
import { useField } from "formik";

export default function ColorPicker() {
  return (
    <div className="color-picker">
      <p className="para2 color-picker-label mb-2">Color Picker</p>
      <div className="color-picker-input-wrapper">
        <input
          type="color"
          className="form-select color-selector"
          list="colors"
        />
        <datalist id="colors">
          <option>#BC45A2</option>
          <option>#E16347</option>
          <option>#52A944</option>
          <option>#FFF8B9</option>
          <option>#5698B5</option>
          <option>#B9BCFF</option>
        </datalist>
      </div>
    </div>
  );
}
