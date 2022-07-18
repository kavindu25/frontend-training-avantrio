import React from "react";
import { useField } from "formik";

export default function SearchableSelect(props) {
  const { name, label, options, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <input
        className="form-control"
        list={`${name}_list`}
        name={name}
        id={name}
        {...field}
        {...rest}
      />
      <datalist id={`${name}_list`}>
        <option value="">Choose...</option>
        {options.map((optn) => (
          /* eslint-disable jsx-a11y/control-has-associated-label */
          <option value={optn.value} />
          /* eslint-disable jsx-a11y/control-has-associated-label */
        ))}
      </datalist>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {meta.error}
        </div>
      ) : null}
    </>
  );
}
