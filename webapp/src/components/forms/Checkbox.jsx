import React from "react";
import { useField } from "formik";

export default function Checkbox({ name, label, ...rest }) {
  const [field, , helpers] = useField({ name, label, ...rest });
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        checked={field.value || false}
        value={field.value || false}
        onChange={() => {
          helpers.setTouched(true);
          helpers.setValue(!field.value);
        }}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
