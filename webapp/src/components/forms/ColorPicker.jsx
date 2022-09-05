import React, { useState } from "react";
import { useField } from "formik";

export default function ColorPicker() {
  const [colorName, setColorName] = useState("Select a colour");
  const [selectBackground, setSelectBackground] = useState("#BC45A2");
  const availableColors = [
    {
      name: "Purple",
      value: "#BC45A2",
    },
    {
      name: "Orange",
      value: "#E16347",
    },
    {
      name: "Green",
      value: "#52A944",
    },
    {
      name: "Yellow",
      value: "#FFF8B9",
    },
    {
      name: "Blue",
      value: "#5698B5",
    },
    {
      name: "Light blue",
      value: "#B9BCFF",
    },
  ];

  const onSelectChange = (e) => {
    setColorName(e.target.value);
    const selectedColor = availableColors.find(
      ({ name }) => name === e.target.value
    );
    setSelectBackground(selectedColor.value);
  };
  return (
    <div className="color-picker">
      <p className="para2 color-picker-label mb-2">Color Picker</p>
      <div className="color-picker-input-wrapper">
        <p className="color-selected para1">{colorName}</p>
        <select
          className="color-select form-select"
          onChange={onSelectChange}
          style={{ backgroundColor: selectBackground }}
        >
          <option className="purple" value={"Purple"}></option>
          <option className="orange" value={"Orange"}></option>
          <option className="green" value={"Green"}></option>
          <option className="yellow" value={"Yellow"}></option>
          <option className="blue" value={"Blue"}></option>
          <option className="light-blue" value={"Light blue"}></option>
        </select>
      </div>
    </div>
  );
}
