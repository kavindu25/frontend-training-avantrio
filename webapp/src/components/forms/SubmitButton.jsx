import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButton({ name, size, variant }) {
  const { isSubmitting } = useFormikContext();

  const getButtonClassName = () => {
    let btnClass = "w-100 btn";
    if (variant === "outlined") {
      btnClass += " btn-outline-primary";
    } else {
      btnClass += " btn-primary";
    }
    if (size === "sm") {
      btnClass += " btn-sm";
    } else if (size === "lg") {
      btnClass += " btn-lg";
    }
    return btnClass;
  };

  return (
    <button
      type="submit"
      className={getButtonClassName()}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="ms-2">Loading...</span>
        </>
      ) : (
        name || "Submit"
      )}
    </button>
  );
}
