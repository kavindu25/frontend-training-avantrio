import React from "react";
import { useField } from "formik";

export default function Select({ name, label, options, ...rest }) {
  const [field, meta] = useField({ name, label, ...rest });
  return (
    <div className="w-100">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className="form-select"
        id={name}
        name={name}
        {...field}
        {...rest}
      >
        <option value="">Choose...</option>
        {options.map((optn) => (
          <option
            value={optn.value}
            label={optn.label || optn.value}
            key={optn.value}
          />
        ))}
      </select>

      <div
        hidden={meta.touched && meta.error}
        className="invalid-feedback"
        style={{ display: "block" }}
      >
        {meta.error}
      </div>
    </div>
  );
}
